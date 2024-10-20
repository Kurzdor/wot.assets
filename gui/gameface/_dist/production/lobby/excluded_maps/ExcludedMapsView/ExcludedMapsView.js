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
            768: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => tu });
                var a = {};
                t.r(a),
                    t.d(a, { mouse: () => F, off: () => d, on: () => E, onResize: () => l, onScaleUpdated: () => c });
                var n = {};
                t.r(n),
                    t.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => _,
                        getSize: () => B,
                        graphicsQuality: () => C,
                        playSound: () => m,
                        setRTPC: () => D,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => f, getTextureUrl: () => v });
                var o = {};
                function s(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function i(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(o),
                    t.d(o, {
                        addModelObserver: () => P,
                        addPreloadTexture: () => R,
                        children: () => r,
                        displayStatus: () => b,
                        displayStatusIs: () => J,
                        events: () => w,
                        extraSize: () => uu,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => G,
                        getBrowserTexturePath: () => I,
                        getDisplayStatus: () => Q,
                        getScale: () => U,
                        getSize: () => W,
                        getViewGlobalPosition: () => $,
                        isEventHandled: () => X,
                        isFocused: () => q,
                        pxToRem: () => j,
                        remToPx: () => z,
                        resize: () => V,
                        sendEvent: () => k,
                        setAnimateWindow: () => K,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => N,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => eu,
                    });
                const l = s('clientResized'),
                    c = s('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    d = (u, e) => engine.off(u, e),
                    A = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const F = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && i(!1);
                    }
                    function t() {
                        u.enabled && i(!0);
                    }
                    function a() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : i(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${e}`,
                                        o = A[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        a(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(r, s),
                                                (u.listeners -= 1),
                                                a(),
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
                            (u.enabled = !1), a();
                        },
                        enable() {
                            (u.enabled = !0), a();
                        },
                        enableOutside() {
                            u.enabled && i(!0);
                        },
                        disableOutside() {
                            u.enabled && i(!1);
                        },
                    });
                })();
                function m(u) {
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
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    g = Object.keys(p).reduce((u, e) => ((u[e] = () => m(p[e])), u), {}),
                    h = { play: Object.assign({}, g, { sound: m }), setRTPC: D };
                function v(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function f(u, e, t) {
                    return `url(${v(u, e, t)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    w = {
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
                const x = 2,
                    M = 16,
                    S = 32,
                    y = 64,
                    L = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var a in u)
                                        if ({}.hasOwnProperty.call(u, a)) {
                                            if (e.indexOf(a) >= 0) continue;
                                            t[a] = u[a];
                                        }
                                    return t;
                                })(e, T);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([u, e]) => {
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
                        var a;
                    },
                    k = {
                        close(u) {
                            L('popover' === u ? x : S);
                        },
                        minimize() {
                            L(y);
                        },
                        move(u) {
                            L(M, { isMouseEvent: !0, on: u });
                        },
                    },
                    O = 15;
                function R(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function N(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, O);
                }
                function I(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function P(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function H(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, O);
                }
                function W(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function $(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: z(e.x), y: z(e.y) };
                }
                function G() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function U() {
                    return viewEnv.getScale();
                }
                function j(u) {
                    return viewEnv.pxToRem(u);
                }
                function z(u) {
                    return viewEnv.remToPx(u);
                }
                function K(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function Y() {
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
                            window.isDomBuilt ? u() : w.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    tu = { view: o, client: n, sound: h };
            },
            521: (u, e, t) => {
                'use strict';
                let a, n;
                t.d(e, { n: () => a }),
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
                    })(a || (a = {})),
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
                t.d(e, { Z: () => r });
                var a = t(768);
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
                        const r = a.O.view.addModelObserver(u, t, n);
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(u, e);
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
                t.d(e, { Sw: () => r.Z, B0: () => s, ry: () => B });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let a = u.target;
                                    do {
                                        if (a === e) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            a = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== a)),
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(521),
                    A = t(768);
                const F = ['args'];
                function m(u, e, t, a, n, r, o) {
                    try {
                        var s = u[r](o),
                            i = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(i) : Promise.resolve(i).then(a, n);
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
                                    return new Promise(function (a, n) {
                                        var r = u.apply(e, t);
                                        function o(u) {
                                            m(r, a, n, o, s, 'next', u);
                                        }
                                        function s(u) {
                                            m(r, a, n, o, s, 'throw', u);
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
                            const n = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var a in u)
                                        if ({}.hasOwnProperty.call(u, a)) {
                                            if (e.indexOf(a) >= 0) continue;
                                            t[a] = u[a];
                                        }
                                    return t;
                                })(e, F);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([u, e]) => {
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
                        var a;
                    },
                    C = () => _(s.CLOSE),
                    p = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var g = t(572);
                const h = n.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: g.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => _(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => _(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            _(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const o = A.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                F = {
                                    x: A.O.view.pxToRem(l) + o.x,
                                    y: A.O.view.pxToRem(c) + o.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(d),
                                };
                            _(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: D(F),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => p(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            p(u, C);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const a in e)
                                if (Object.prototype.hasOwnProperty.call(e, a)) {
                                    const n = Object.prototype.toString.call(e[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[a];
                                        t[a] = [];
                                        for (let e = 0; e < n.length; e++) t[a].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = u(e[a]))
                                            : (t[a] = e[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
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
                    r = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            581: (u, e, t) => {
                'use strict';
                var a = t(179),
                    n = t.n(a);
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
                var o = t(768);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(u, e, t) {
                    const a = (function (u, e) {
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
                })(i || (i = {}));
                const c = o.O.client.getSize('rem'),
                    E = c.width,
                    d = c.height,
                    A = Object.assign({ width: E, height: d }, l(E, d, s)),
                    F = (0, a.createContext)(A),
                    m = ['children'];
                const D = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var a in u)
                                if ({}.hasOwnProperty.call(u, a)) {
                                    if (e.indexOf(a) >= 0) continue;
                                    t[a] = u[a];
                                }
                            return t;
                        })(u, m);
                    const n = (0, a.useContext)(F),
                        o = n.extraLarge,
                        s = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        d = n.largeWidth,
                        A = n.mediumWidth,
                        D = n.smallWidth,
                        B = n.extraSmallWidth,
                        _ = n.extraLargeHeight,
                        C = n.largeHeight,
                        p = n.mediumHeight,
                        g = n.smallHeight,
                        h = n.extraSmallHeight,
                        v = { extraLarge: _, large: C, medium: p, small: g, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return e;
                        if (t.large && s) return e;
                        if (t.medium && i) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return r(e, t, v);
                        if (t.largeWidth && d) return r(e, t, v);
                        if (t.mediumWidth && A) return r(e, t, v);
                        if (t.smallWidth && D) return r(e, t, v);
                        if (t.extraSmallWidth && B) return r(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && _) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && p) return e;
                            if (t.smallHeight && g) return e;
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
                (0, a.memo)(D);
                const B = (u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    _ = ({ children: u }) => {
                        const e = (0, a.useContext)(F),
                            t = (0, a.useState)(e),
                            r = t[0],
                            i = t[1],
                            c = (0, a.useCallback)((u, e) => {
                                const t = o.O.view.pxToRem(u),
                                    a = o.O.view.pxToRem(e);
                                i(Object.assign({ width: t, height: a }, l(t, a, s)));
                            }, []),
                            E = (0, a.useCallback)(() => {
                                const u = o.O.client.getSize('px');
                                c(u.width, u.height);
                            }, [c]);
                        B(() => {
                            o.O.client.events.on('clientResized', c), o.O.client.events.on('self.onScaleUpdated', E);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', c),
                                        o.O.client.events.off('self.onScaleUpdated', E);
                                },
                                [c, E],
                            );
                        const d = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(F.Provider, { value: d }, u);
                    };
                var C = t(483),
                    p = t.n(C),
                    g = t(926),
                    h = t.n(g);
                let v, f, b;
                !(function (u) {
                    (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = s.small.width)] = 'Small'),
                        (u[(u.Medium = s.medium.width)] = 'Medium'),
                        (u[(u.Large = s.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.width)] = 'Small'),
                            (u[(u.Medium = s.medium.width)] = 'Medium'),
                            (u[(u.Large = s.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(f || (f = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.height)] = 'Small'),
                            (u[(u.Medium = s.medium.height)] = 'Medium'),
                            (u[(u.Large = s.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(b || (b = {}));
                const w = () => {
                        const u = (0, a.useContext)(F),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return v.ExtraLarge;
                                    case u.large:
                                        return v.Large;
                                    case u.medium:
                                        return v.Medium;
                                    case u.small:
                                        return v.Small;
                                    case u.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(u),
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case u.largeWidth:
                                        return f.Large;
                                    case u.mediumWidth:
                                        return f.Medium;
                                    case u.smallWidth:
                                        return f.Small;
                                    case u.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(u),
                            o = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return b.ExtraLarge;
                                    case u.largeHeight:
                                        return b.Large;
                                    case u.mediumHeight:
                                        return b.Medium;
                                    case u.smallHeight:
                                        return b.Small;
                                    case u.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: o, remScreenWidth: e, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function x() {
                    return (
                        (x = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        x.apply(null, arguments)
                    );
                }
                const M = {
                        [f.ExtraSmall]: '',
                        [f.Small]: h().SMALL_WIDTH,
                        [f.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [f.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL_HEIGHT,
                        [b.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [b.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    y = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL,
                        [v.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [v.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [v.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    L = (u) => {
                        let e = u.children,
                            t = u.className,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var a in u)
                                    if ({}.hasOwnProperty.call(u, a)) {
                                        if (e.indexOf(a) >= 0) continue;
                                        t[a] = u[a];
                                    }
                                return t;
                            })(u, T);
                        const r = w(),
                            o = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return n().createElement('div', x({ className: p()(t, M[o], S[s], y[i]) }, a), e);
                    },
                    k = ['children'];
                const O = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var a in u)
                                if ({}.hasOwnProperty.call(u, a)) {
                                    if (e.indexOf(a) >= 0) continue;
                                    t[a] = u[a];
                                }
                            return t;
                        })(u, k);
                    return n().createElement(_, null, n().createElement(L, t, e));
                };
                var N = t(493),
                    I = t.n(N);
                const P = (u, e, t) => (t < u ? u : t > e ? e : t),
                    H = (u) => {
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
                    };
                function W(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return V(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? V(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var a = 0;
                        return function () {
                            return a >= u.length ? { done: !0 } : { done: !1, value: u[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function V(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const $ = [];
                function G(u) {
                    const e = (0, a.useRef)(u);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, a.useCallback)((...u) => (0, e.current)(...u), $)
                    );
                }
                function U(u, e, t) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (u, e, t, a) {
                                let n,
                                    r = !1,
                                    o = 0;
                                function s() {
                                    n && clearTimeout(n);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function E() {
                                        (o = Date.now()), t.apply(l, i);
                                    }
                                    r ||
                                        (a && !n && E(),
                                        s(),
                                        void 0 === a && c > u
                                            ? E()
                                            : !0 !== e &&
                                              (n = setTimeout(
                                                  a
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : E,
                                                  void 0 === a ? u - c : u,
                                              )));
                                }
                                return (
                                    'boolean' != typeof e && ((a = t), (t = e), (e = void 0)),
                                    (i.cancel = function () {
                                        s(), (r = !0);
                                    }),
                                    i
                                );
                            })(t, u),
                        e,
                    );
                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                }
                var j = t(30);
                let z;
                !(function (u) {
                    (u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev');
                })(z || (z = {}));
                const K = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    q = (({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (u, t) => {
                            const a = e(u),
                                n = a[0],
                                r = a[1];
                            return r <= n ? 0 : P(n, r, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? K : c,
                                d = (0, a.useRef)(null),
                                A = (0, a.useRef)(null),
                                F = (() => {
                                    const u = (0, a.useMemo)(() => ({}), []),
                                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                        t = (u, t) => {
                                            e(u).set(t, t);
                                        },
                                        n = (u, t) => {
                                            e(u).delete(t);
                                        },
                                        r = (u, ...t) => {
                                            for (var a, n = W(e(u).values()); !(a = n()).done; ) (0, a.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                m = U(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, j.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = d.current;
                                        e && (t(e, u), F.trigger('change', u), s && m());
                                    },
                                    onRest: (u) => F.trigger('rest', u),
                                    onStart: (u) => F.trigger('start', u),
                                    onPause: (u) => F.trigger('pause', u),
                                })),
                                B = D[0],
                                _ = D[1],
                                C = (0, a.useCallback)(
                                    (u, e, t) => {
                                        var a;
                                        const n = B.scrollPosition.get(),
                                            r = (null != (a = B.scrollPosition.goal) ? a : 0) - n;
                                        return i(u, e * t + r + n);
                                    },
                                    [B.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            _.start({
                                                scrollPosition: i(a, u),
                                                immediate: e,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: i(a, B.scrollPosition.get()) },
                                            });
                                    },
                                    [_, E.animationConfig, B.scrollPosition],
                                ),
                                g = (0, a.useCallback)(
                                    (u) => {
                                        const e = d.current,
                                            t = A.current;
                                        if (!e || !t) return;
                                        const a = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return r(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, E.step),
                                            n = C(e, u, a);
                                        p(n);
                                    },
                                    [p, C, E.step],
                                ),
                                h = (0, a.useCallback)(
                                    (u) => {
                                        0 !== u.deltaY && g(n(u)),
                                            d.current && F.trigger('mouseWheel', u, B.scrollPosition, e(d.current));
                                    },
                                    [B.scrollPosition, g, F],
                                ),
                                v = ((u, e = []) => {
                                    const t = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...e) => {
                                            t.current && t.current(), (t.current = u(...e));
                                        }, e);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        H(() => {
                                            const u = d.current;
                                            u &&
                                                (p(i(u, B.scrollPosition.goal), { immediate: !0 }),
                                                F.trigger('resizeHandled'));
                                        }),
                                    [p, B.scrollPosition.goal],
                                ),
                                f = G(() => {
                                    const u = d.current;
                                    if (!u) return;
                                    const e = i(u, B.scrollPosition.goal);
                                    e !== B.scrollPosition.goal && p(e, { immediate: !0 }),
                                        F.trigger('recalculateContent');
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            );
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (A.current ? r(A.current) : void 0),
                                    getContainerSize: () => (d.current ? u(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? e(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: h,
                                    applyScroll: p,
                                    applyStepTo: g,
                                    contentRef: d,
                                    wrapperRef: A,
                                    scrollPosition: _,
                                    animationScroll: B,
                                    recalculateContent: f,
                                    events: { on: F.on, off: F.off },
                                }),
                                [B.scrollPosition, p, g, F.off, F.on, f, h, _, E.step.clampedArrowStepTimeout],
                            );
                        };
                    })({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? z.Next : z.Prev),
                    });
                function Y(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const X = 'VerticalBar_base_f3',
                    Z = 'VerticalBar_base__nonActive_42',
                    Q = 'VerticalBar_topButton_d7',
                    J = 'VerticalBar_bottomButton_06',
                    uu = 'VerticalBar_track_df',
                    eu = 'VerticalBar_thumb_32',
                    tu = 'VerticalBar_rail_43',
                    au = 'disable',
                    nu = () => {},
                    ru = { pending: !1, offset: 0 },
                    ou = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    su = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    iu = (u, e) => Math.max(20, u.offsetHeight * e),
                    lu = (0, a.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = ou, onDrag: r = nu }) => {
                        const s = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = u.stepTimeout || 100,
                            A = (0, a.useState)(ru),
                            F = A[0],
                            m = A[1],
                            D = (0, a.useCallback)(
                                (u) => {
                                    m(u),
                                        E.current && r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [r],
                            ),
                            B = G(() => {
                                const e = E.current,
                                    t = c.current,
                                    a = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(a && n && e && t)) return;
                                const r = Math.min(1, a / n);
                                return (
                                    (e.style.height = `${iu(t, r)}px`),
                                    (e.style.display = 'flex'),
                                    s.current && (1 === r ? s.current.classList.add(Z) : s.current.classList.remove(Z)),
                                    r
                                );
                            }),
                            _ = G(() => {
                                const e = c.current,
                                    t = E.current,
                                    a = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(a && e && t && n)) return;
                                const r = u.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / n),
                                    s = P(0, 1, r / (n - a)),
                                    d = (e.offsetHeight - iu(e, o)) * s;
                                (t.style.transform = `translateY(${0 | d}px)`),
                                    ((u) => {
                                        if (i.current && l.current && c.current && E.current) {
                                            if (0 === Math.round(u))
                                                return i.current.classList.add(au), void l.current.classList.remove(au);
                                            if (
                                                ((e = c.current),
                                                (t = E.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(au), void l.current.classList.add(au);
                                            var e, t;
                                            i.current.classList.remove(au), l.current.classList.remove(au);
                                        }
                                    })(d);
                            }),
                            C = G(() => {
                                su(u, () => {
                                    B(), _();
                                });
                            });
                        (0, a.useEffect)(() => H(C)),
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    su(u, () => {
                                        _();
                                    });
                                };
                                let t = nu;
                                const a = () => {
                                    t(), (t = H(C));
                                };
                                return (
                                    u.events.on('recalculateContent', C),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', a),
                                    () => {
                                        t(),
                                            u.events.off('recalculateContent', C),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', a);
                                    }
                                );
                            }, [u]),
                            (0, a.useEffect)(() => {
                                if (!F.pending) return;
                                const e = o.O.client.events.mouse.up(() => {
                                        D(ru);
                                    }),
                                    t = o.O.client.events.mouse.move(([e]) => {
                                        su(u, (t) => {
                                            const a = c.current,
                                                n = E.current,
                                                o = u.getContainerSize();
                                            if (!a || !n || !o) return;
                                            const s = e.screenY - F.offset - a.getBoundingClientRect().y,
                                                i = (s / a.offsetHeight) * o;
                                            u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: n, thumbOffset: s, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, F.offset, F.pending, r, D]);
                        const g = (function (u, e, t = []) {
                                const n = (0, a.useRef)(0),
                                    r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                                (0, a.useEffect)(() => r, [r]);
                                const o = (null != t ? t : []).concat([e]);
                                return [
                                    (0, a.useCallback)((t) => {
                                        (n.current = window.setInterval(() => u(t, !0), e)), u(t, !1);
                                    }, o),
                                    r,
                                ];
                            })((e) => u.applyStepTo(e), d, [u]),
                            h = g[0],
                            v = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const f = (u) => {
                            u.target.classList.contains(au) || Y('highlight');
                        };
                        return n().createElement(
                            'div',
                            { className: p()(X, e.base), ref: s, onWheel: u.handleMouseWheel },
                            n().createElement('div', {
                                className: p()(Q, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(au) || 0 !== u.button || (Y('play'), h(z.Next));
                                },
                                ref: i,
                                onMouseEnter: f,
                            }),
                            n().createElement(
                                'div',
                                {
                                    className: p()(uu, e.track),
                                    onMouseDown: (e) => {
                                        const a = E.current;
                                        if (a && 0 === e.button)
                                            if ((Y('play'), e.target === a))
                                                D({ pending: !0, offset: e.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    E.current &&
                                                        su(u, (a) => {
                                                            if (!a) return;
                                                            const n = t(u),
                                                                r = u.clampPosition(a, a.scrollTop + n * e);
                                                            u.applyScroll(r);
                                                        });
                                                })(e.screenY > a.getBoundingClientRect().y ? z.Prev : z.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                n().createElement('div', { ref: E, className: p()(eu, e.thumb) }),
                                n().createElement('div', { className: p()(tu, e.rail) }),
                            ),
                            n().createElement('div', {
                                className: p()(J, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(au) || 0 !== u.button || (Y('play'), h(z.Prev));
                                },
                                onMouseUp: v,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    cu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Eu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: o,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: p()(cu.base, u.base) });
                            }, [r]),
                            d = (0, a.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return n().createElement(
                            'div',
                            { className: p()(cu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            n().createElement(
                                'div',
                                { className: p()(cu.area, o) },
                                n().createElement(du, { className: s, classNames: i, api: d }, u),
                            ),
                            n().createElement(lu, { getStepByRailClick: l, api: e, onDrag: c, classNames: E }),
                        );
                    },
                    du = ({ className: u, classNames: e, children: t, api: r }) => (
                        (0, a.useEffect)(() => H(r.recalculateContent)),
                        n().createElement(
                            'div',
                            { className: p()(cu.base, u), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            n().createElement(
                                'div',
                                { className: p()(cu.content, null == e ? void 0 : e.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                du.Default = Eu;
                const Au = {
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
                    Fu = [
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
                function mu() {
                    return (
                        (mu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        mu.apply(null, arguments)
                    );
                }
                class Du extends n().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Y(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Y(this.props.soundClick);
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
                            a = u.goto,
                            r = u.side,
                            o = u.type,
                            s = u.classNames,
                            i = u.onMouseEnter,
                            l = u.onMouseLeave,
                            c = u.onMouseDown,
                            E = u.onMouseUp,
                            d =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var a in u)
                                        if ({}.hasOwnProperty.call(u, a)) {
                                            if (e.indexOf(a) >= 0) continue;
                                            t[a] = u[a];
                                        }
                                    return t;
                                })(u, Fu)),
                            A = p()(Au.base, Au[`base__${o}`], Au[`base__${r}`], null == s ? void 0 : s.base),
                            F = p()(Au.icon, Au[`icon__${o}`], Au[`icon__${r}`], null == s ? void 0 : s.icon),
                            m = p()(Au.glow, null == s ? void 0 : s.glow),
                            D = p()(Au.caption, Au[`caption__${o}`], null == s ? void 0 : s.caption),
                            B = p()(Au.goto, null == s ? void 0 : s.goto);
                        return n().createElement(
                            'div',
                            mu(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== o && n().createElement('div', { className: Au.shine }),
                            n().createElement('div', { className: F }, n().createElement('div', { className: m })),
                            n().createElement('div', { className: D }, e),
                            a && n().createElement('div', { className: B }, a),
                        );
                    }
                }
                Du.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Bu = (u = 1) => {
                    const e = new Error().stack;
                    let t,
                        a = R.invalid('resId');
                    return (
                        e &&
                            ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (a = window.subViews[t].id)),
                        { caller: t, stack: e, resId: a }
                    );
                };
                var _u = t(916);
                const Cu = [
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
                function pu(u) {
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
                const gu = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _u.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    hu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            o = u.onMouseLeave,
                            s = u.onMouseDown,
                            i = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            d = void 0 !== E && E,
                            A = u.decoratorId,
                            F = void 0 === A ? 0 : A,
                            m = u.isEnabled,
                            D = void 0 === m || m,
                            B = u.targetId,
                            _ = void 0 === B ? 0 : B,
                            C = u.onShow,
                            p = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var a in u)
                                    if ({}.hasOwnProperty.call(u, a)) {
                                        if (e.indexOf(a) >= 0) continue;
                                        t[a] = u[a];
                                    }
                                return t;
                            })(u, Cu);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(() => _ || Bu().resId, [_]),
                            f = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (gu(t, F, { isMouseEvent: !0, on: !0, arguments: pu(n) }, v),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, F, n, v, C]),
                            b = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        gu(t, F, { on: !1 }, v),
                                        h.current.isVisible && p && p(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, F, v, p]),
                            w = (0, a.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const u = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === D && b();
                            }, [D, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            );
                        return D
                            ? (0, a.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      r && r(u),
                                                      T && T(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              b(), null == o || o(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === d && b(), null == i || i(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === d && b(), null == s || s(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : e;
                        var T;
                    };
                var vu = t(521);
                const fu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function bu(u = vu.n.NONE, e = fu, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== vu.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === u) {
                                if (!n && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), e(a), t && a.stopPropagation();
                            }
                        }
                    }, [e, u, t, n]);
                }
                var wu = t(515);
                function Tu() {}
                function xu(u) {
                    return u;
                }
                function Mu() {
                    return !1;
                }
                console.log;
                var Su = t(174);
                function yu(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return Lu(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? Lu(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var a = 0;
                        return function () {
                            return a >= u.length ? { done: !0 } : { done: !1, value: u[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Lu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const ku = (u) => (0 === u ? window : window.subViews.get(u));
                const Ou = () => (u, e) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: r = 'real', options: s, children: i, mocks: l }) {
                            const c = (0, a.useRef)([]),
                                E = (t, a, n) => {
                                    var r;
                                    const s = (function ({
                                            initializer: u = !0,
                                            rootId: e = 0,
                                            getRoot: t = ku,
                                            context: a = 'model',
                                        } = {}) {
                                            const n = new Map();
                                            function r(u, e = 0) {
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
                                            const s = (u) => {
                                                const n = t(e),
                                                    r = a.split('.').reduce((u, e) => u[e], n);
                                                return 'string' != typeof u || 0 === u.length
                                                    ? r
                                                    : u.split('.').reduce((u, e) => {
                                                          const t = u[e];
                                                          return 'function' == typeof t ? t.bind(u) : t;
                                                      }, r);
                                            };
                                            return {
                                                subscribe: (t, r) => {
                                                    const i = 'string' == typeof r ? `${a}.${r}` : a,
                                                        l = o.O.view.addModelObserver(i, e, !0);
                                                    return n.set(l, t), u && t(s(r)), l;
                                                },
                                                readByPath: s,
                                                createCallback: (u, e) => {
                                                    const t = s(e);
                                                    return (...e) => {
                                                        t(u(...e));
                                                    };
                                                },
                                                createCallbackNoArgs: (u) => {
                                                    const e = s(u);
                                                    return () => {
                                                        e();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var u, t = yu(n.keys()); !(u = t()).done; ) r(u.value, e);
                                                },
                                                unsubscribe: r,
                                            };
                                        })(a),
                                        i =
                                            'real' === t
                                                ? s
                                                : Object.assign({}, s, {
                                                      readByPath:
                                                          null != (r = null == n ? void 0 : n.getter) ? r : () => {},
                                                  }),
                                        l = (u) =>
                                            'mocks' === t ? (null == n ? void 0 : n.getter(u)) : i.readByPath(u),
                                        E = (u) => c.current.push(u),
                                        d = u({
                                            mode: t,
                                            readByPath: l,
                                            externalModel: i,
                                            observableModel: {
                                                array: (u, e) => {
                                                    const a = null != e ? e : l(u),
                                                        n = Su.LO.box(a, { equals: Mu });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, Su.aD)((u) => n.set(u)),
                                                                u,
                                                            ),
                                                        n
                                                    );
                                                },
                                                object: (u, e) => {
                                                    const a = null != e ? e : l(u),
                                                        n = Su.LO.box(a, { equals: Mu });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, Su.aD)((u) => n.set(u)),
                                                                u,
                                                            ),
                                                        n
                                                    );
                                                },
                                                primitives: (u, e) => {
                                                    const a = l(e);
                                                    if (Array.isArray(u)) {
                                                        const n = u.reduce(
                                                            (u, e) => ((u[e] = Su.LO.box(a[e], {})), u),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Su.aD)((e) => {
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
                                                            r = Object.entries(n),
                                                            o = r.reduce(
                                                                (u, [e, t]) => ((u[t] = Su.LO.box(a[e], {})), u),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Su.aD)((u) => {
                                                                        r.forEach(([e, t]) => {
                                                                            o[t].set(u[e]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: E,
                                        }),
                                        A = { mode: t, model: d, externalModel: i, cleanup: E };
                                    return {
                                        model: d,
                                        controls: 'mocks' === t && n ? n.controls(A) : e(A),
                                        externalModel: i,
                                        mode: t,
                                    };
                                },
                                d = (0, a.useRef)(!1),
                                A = (0, a.useState)(r),
                                F = A[0],
                                m = A[1],
                                D = (0, a.useState)(() => E(r, s, l)),
                                B = D[0],
                                _ = D[1];
                            return (
                                (0, a.useEffect)(() => {
                                    d.current ? _(E(F, s, l)) : (d.current = !0);
                                }, [l, F, s]),
                                (0, a.useEffect)(() => {
                                    m(r);
                                }, [r]),
                                (0, a.useEffect)(
                                    () => () => {
                                        B.externalModel.dispose(), c.current.forEach((u) => u());
                                    },
                                    [B],
                                ),
                                n().createElement(t.Provider, { value: B }, i)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
                var Ru = t(946);
                const Nu = Ou()(
                        ({ observableModel: u }) => {
                            const e = {
                                    filterInfo: u.primitives(['mapsSelected', 'mapsTotal', 'isFilterApplied']),
                                    cooldownTime: u.primitives(['cooldownTime']),
                                },
                                t = (0, Ru.Om)(() => e.cooldownTime.cooldownTime.get() - Date.now() / 1e3 >= 0, {
                                    equals: Mu,
                                });
                            return Object.assign({ computes: { getIsInCooldown: t } }, e);
                        },
                        ({ externalModel: u }) => ({
                            onBackAction: u.createCallbackNoArgs('onBackAction'),
                            onMapAddToBlacklist: u.createCallback((u) => ({ mapId: u }), 'onMapAddToBlacklistEvent'),
                            onMapRemoveFromBlacklist: u.createCallback(
                                (u) => ({ mapId: u }),
                                'onMapRemoveFromBlacklistEvent',
                            ),
                            onFilterReset: u.createCallbackNoArgs('onFilterReset'),
                            onFilterClick: u.createCallback((u) => ({ seasonID: u }), 'onFilterClick'),
                        }),
                    ),
                    Iu = Nu[0],
                    Pu = Nu[1],
                    Hu = {
                        get header() {
                            return R.strings.excluded_maps.header.title();
                        },
                        get filterTooltipDesc() {
                            return R.strings.excluded_maps.filtersTooltip.desc();
                        },
                        get cooldownHeader() {
                            return R.strings.excluded_maps.header.cooldown();
                        },
                        get totalMapsDisplayed() {
                            return R.strings.excluded_maps.totalMapsDisplayed();
                        },
                        get filteredMapsDisplayed() {
                            return R.strings.excluded_maps.filteredMapsDisplayed();
                        },
                        get backButtonLabel() {
                            return R.strings.excluded_maps.backButton.label();
                        },
                        get backButtonTo() {
                            return R.strings.excluded_maps.backButton.to();
                        },
                        get mapsFilterLabel() {
                            return R.strings.excluded_maps.mapsFilterLabel();
                        },
                        get hoverExclude() {
                            return R.strings.excluded_maps.mapTile.hoverExclude();
                        },
                        get hoverExcludeButton() {
                            return R.strings.excluded_maps.mapTile.hoverExcludeButton();
                        },
                        get hoverInclude() {
                            return R.strings.excluded_maps.mapTile.hoverInclude();
                        },
                        get hoverIncludeButton() {
                            return R.strings.excluded_maps.mapTile.hoverIncludeButton();
                        },
                        get cooldownTooltipBody() {
                            return R.strings.excluded_maps.mapTile.cooldownTooltipBody();
                        },
                        get cooldownTooltipHeader() {
                            return R.strings.excluded_maps.mapTile.cooldownTooltipHeader();
                        },
                        get notSelected() {
                            return R.strings.excluded_maps.notSelected();
                        },
                    };
                var Wu = t(797);
                let Vu;
                function $u(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(Vu || (Vu = {}));
                const Gu = (u) => u.replace(/&nbsp;/g, ' '),
                    Uu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    ju = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    zu = (u, e, t = Vu.left) => u.split(e).reduce(t === Vu.left ? Uu : ju, []),
                    Ku = (() => {
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
                    qu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Yu = (u, e = Vu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (qu.includes(t)) return Ku(u);
                        if ('ja' === t) {
                            return (0, Wu.D4)()
                                .parse(u)
                                .map((u) => Gu(u));
                        }
                        return ((u, e = Vu.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = Gu(u);
                            return zu(n, /( )/, e).forEach((u) => (t = t.concat(zu(u, a, Vu.left)))), t;
                        })(u, e);
                    },
                    Xu = 'FormatText_base_d0',
                    Zu = ({ binding: u, text: e = '', classMix: t, alignment: r = Vu.left, formatWithBrackets: o }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const s = o && u ? $u(e, u) : e;
                        return n().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((e, o) =>
                                n().createElement(
                                    'div',
                                    { className: p()(Xu, t), key: `${e}-${o}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : Yu(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => n().createElement(a.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    };
                var Qu = t(613);
                const Ju = 24,
                    ue = 1e3,
                    ee = 60,
                    te = 60 * ee,
                    ae = Ju * te;
                Date.now(), Qu.Ew.getRegionalDateTime, Qu.Ew.getFormattedDateTime;
                function ne(u = 0) {
                    let e = u;
                    const t = Math.trunc(e / ae);
                    e -= t * ae;
                    const a = Math.trunc(e / te);
                    e -= a * te;
                    const n = Math.trunc(e / ee);
                    return (e -= n * ee), { days: t, hours: a, minutes: n, seconds: e };
                }
                const re = () => {},
                    oe = (u = 0, e, t = 0, n = re) => {
                        const r = (0, a.useState)(u),
                            o = r[0],
                            s = r[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (u > 0) {
                                    s(u);
                                    const a = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const e = u - Math.floor((Date.now() - a) / ue);
                                                null !== t && e <= t ? (s(t), n && n(), clearInterval(r)) : s(e);
                                            },
                                            (e || (u > 2 * ee ? ee : 1)) * ue,
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [u, e, t, n]),
                            o
                        );
                    },
                    se = (u) =>
                        u.days > 0
                            ? $u(R.strings.common.duration.days(), { days: u.days })
                            : u.hours > 0
                              ? $u(R.strings.common.duration.hours(), { hours: u.hours })
                              : u.minutes > 0
                                ? $u(R.strings.common.duration.minutes(), { minutes: u.minutes })
                                : $u(R.strings.common.duration.seconds(), { seconds: u.seconds }),
                    ie =
                        ((0, a.memo)(({ duration: u }) => {
                            const e = u >= 0 ? se(ne(u)) : R.strings.common.duration.unlimited();
                            return n().createElement('span', null, e);
                        }),
                        (u) => {
                            const e = R.strings.arenas;
                            return e[`c_${u.mapId}`] && e[`c_${u.mapId}`].name ? e[`c_${u.mapId}`].name() : '';
                        }),
                    le = (u) => {
                        const e = R.images.gui.maps.icons.map;
                        return e[`c_${u.mapId}`] ? e[`c_${u.mapId}`]() : '';
                    },
                    ce = (u) => {
                        const e = Object.assign({}, u);
                        return (
                            e.hours > 0 && e.minutes > 0 && e.hours++,
                            e.seconds > 0 && e.minutes++,
                            e.seconds < 0 && e.seconds,
                            se(e)
                        );
                    },
                    Ee = (u) =>
                        u.hours > 0 && u.minutes > 0
                            ? `${$u(R.strings.common.duration.hours(), { hours: u.hours })} ${$u(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                            : ce(u),
                    de = 'CooldownHeader_base_54',
                    Ae = 'CooldownHeader_endTime_02',
                    Fe = 'CooldownHeader_glow_f6',
                    me = (0, wu.Pi)(({ className: u }) => {
                        const e = Pu().model.cooldownTime.cooldownTime.get() - Date.now() / 1e3,
                            t = oe(e),
                            a = ne(Math.max(t, ee)),
                            r = { cooldownEndTime: n().createElement('span', { className: Ae }, ce(a)) };
                        return n().createElement(
                            'div',
                            { className: p()(de, u) },
                            n().createElement('img', {
                                src: R.images.gui.maps.icons.excluded_maps.cooldown_bg(),
                                className: Fe,
                            }),
                            n().createElement(Zu, { text: Hu.cooldownHeader, binding: r }),
                        );
                    }),
                    De = 'ExcludedMapsViewApp_base_a0',
                    Be = 'ExcludedMapsViewApp_backButton_20',
                    _e = 'ExcludedMapsViewApp_headerBlock_1a',
                    Ce = 'ExcludedMapsViewApp_infoIcon_0f',
                    pe = 'ExcludedMapsViewApp_header_fe',
                    ge = 'ExcludedMapsViewApp_cooldownHeader_d8',
                    he = 'ExcludedMapsViewApp_slotsContainer_14',
                    ve = 'ExcludedMapsViewApp_filterContainer_4f',
                    fe = 'ExcludedMapsViewApp_mainContainer_d8',
                    be = 'ExcludedMapsViewApp_maps_68',
                    we = 'ExcludedMapsViewApp_scrollArea_4c',
                    Te = 'ExcludedMapsViewApp_scrollBar_f4',
                    xe = 'ExcludedMapsViewApp_mapTile_05',
                    Me = 'ExcludedMapsViewApp_divider_1a';
                let Se, ye;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(Se || (Se = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(ye || (ye = {}));
                const Le = {
                    base: 'ToggleButton_base_2c',
                    base__button: 'ToggleButton_base__button_cb',
                    base__active: 'ToggleButton_base__active_a6',
                    base__slot: 'ToggleButton_base__slot_98',
                    base__disabled: 'ToggleButton_base__disabled_19',
                    texture: 'ToggleButton_texture_f1',
                    background: 'ToggleButton_background_ef',
                    background__main: 'ToggleButton_background__main_68',
                    background__primary: 'ToggleButton_background__primary_a9',
                    background__primaryGreen: 'ToggleButton_background__primaryGreen_4f',
                    background__primaryRed: 'ToggleButton_background__primaryRed_ca',
                    background__secondary: 'ToggleButton_background__secondary_b2',
                    background__ghost: 'ToggleButton_background__ghost_d6',
                    content: 'ToggleButton_content_63',
                    overlay: 'ToggleButton_overlay_23',
                    indicator: 'ToggleButton_indicator_a7',
                };
                let ke;
                !(function (u) {
                    (u.Button = 'button'), (u.Slot = 'slot');
                })(ke || (ke = {}));
                const Oe = () => {},
                    Re = n().memo(
                        ({
                            active: u = !1,
                            className: e,
                            children: t,
                            toggleType: r = ke.Button,
                            toggleButtonType: o = Se.secondary,
                            onClick: s,
                            disabled: i,
                            soundClick: l = 'play',
                            soundHover: c = 'highlight',
                            onMouseEnter: E = Oe,
                            onMouseDown: d = Oe,
                            onMouseUp: A = Oe,
                            onMouseLeave: F = Oe,
                        }) => {
                            const m = (0, a.useCallback)(
                                    (e) => {
                                        i || (Y(l), s && s(e, u));
                                    },
                                    [s, i, u, l],
                                ),
                                D = (0, a.useCallback)(
                                    (u) => {
                                        i || (Y(c), E && E(u));
                                    },
                                    [i, c, E],
                                ),
                                B = (0, a.useCallback)(
                                    (u) => {
                                        i || ((1 !== u.button && 2 !== u.button) || (null !== l && Y(l)), d && d(u));
                                    },
                                    [d, i, l],
                                ),
                                _ = p()(Le.base, e, Le[`base__${r}`], u && Le.base__active, i && Le.base__disabled);
                            return n().createElement(
                                'div',
                                {
                                    className: _,
                                    onClick: m,
                                    onMouseEnter: D,
                                    onMouseUp: i ? Oe : A,
                                    onMouseDown: B,
                                    onMouseLeave: i ? Oe : F,
                                },
                                n().createElement('div', { className: Le.content }, t),
                                r === ke.Button &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', {
                                            className: p()(Le.background, Le[`background__${o}`]),
                                        }),
                                        n().createElement('div', { className: Le.texture }),
                                    ),
                                n().createElement('div', { className: Le.overlay }),
                                n().createElement('div', { className: Le.indicator }),
                            );
                        },
                    ),
                    Ne = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ie() {
                    return (
                        (Ie = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        Ie.apply(null, arguments)
                    );
                }
                const Pe = R.views.common.tooltip_window.simple_tooltip_content,
                    He = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            o = u.note,
                            s = u.alert,
                            i = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var a in u)
                                    if ({}.hasOwnProperty.call(u, a)) {
                                        if (e.indexOf(a) >= 0) continue;
                                        t[a] = u[a];
                                    }
                                return t;
                            })(u, Ne);
                        const c = (0, a.useMemo)(() => {
                            const u = Object.assign({}, i, { body: t, header: r, note: o, alert: s });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [s, t, r, o, i]);
                        return n().createElement(
                            hu,
                            Ie(
                                {
                                    contentId:
                                        ((E = null == i ? void 0 : i.hasHtmlContent),
                                        E ? Pe.SimpleTooltipHtmlContent('resId') : Pe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            e,
                        );
                        var E;
                    },
                    We = (u, e) => !['$dyn', '$num', '$plural'].includes(u) && u in e,
                    Ve = 'FilterControls_base_17',
                    $e = 'FilterControls_filterLabel_d0';
                function Ge(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, a) => e(null == u ? void 0 : u.value, t, a));
                }
                const Ue = Ou()(({ observableModel: u }) => {
                        const e = { mapFilters: u.array('items', []) },
                            t = (0, Ru.Om)(() => Ge(e.mapFilters.get(), xu), { equals: Mu });
                        return Object.assign({ computes: { getMapFilters: t } }, e);
                    }, Tu),
                    je = Ue[0],
                    ze = Ue[1],
                    Ke = (u) => {
                        const e = R.images.gui.maps.icons.customization.items_popover,
                            t = u + '16x16';
                        return We(t, e) ? e[t]() : '';
                    },
                    qe = (u) => {
                        const e = R.strings.excluded_maps.filtersTooltip.header;
                        return We(u, e) ? e[u]() : '';
                    },
                    Ye = (0, wu.Pi)(({ onFilterClick: u }) => {
                        const e = ze().model.computes.getMapFilters();
                        return n().createElement(
                            'div',
                            { className: Ve },
                            n().createElement('div', { className: $e }, Hu.mapsFilterLabel),
                            e.map((e) =>
                                n().createElement(
                                    He,
                                    { key: e.filterID, header: qe(e.filterName), body: Hu.filterTooltipDesc },
                                    n().createElement(
                                        Re,
                                        { active: e.selected, onClick: () => u(e.filterID) },
                                        n().createElement('img', { src: Ke(e.filterName) }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Xe = { context: 'model.mapsFilters' },
                    Ze = ({ onFilterClick: u }) =>
                        n().createElement(je, { options: Xe }, n().createElement(Ye, { onFilterClick: u })),
                    Qe = {
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
                    },
                    Je = ({
                        children: u,
                        size: e,
                        isFocused: t,
                        type: r,
                        disabled: o,
                        mixClass: s,
                        soundHover: i,
                        soundClick: l,
                        onMouseEnter: c,
                        onMouseMove: E,
                        onMouseDown: d,
                        onMouseUp: A,
                        onMouseLeave: F,
                        onClick: m,
                    }) => {
                        const D = (0, a.useRef)(null),
                            B = (0, a.useState)(t),
                            _ = B[0],
                            C = B[1],
                            g = (0, a.useState)(!1),
                            h = g[0],
                            v = g[1];
                        return (
                            (0, a.useEffect)(() => {
                                function u(u) {
                                    _ && null !== D.current && !D.current.contains(u.target) && C(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', u),
                                    () => {
                                        document.removeEventListener('mousedown', u);
                                    }
                                );
                            }, [_]),
                            (0, a.useEffect)(() => {
                                C(t);
                            }, [t]),
                            n().createElement(
                                'div',
                                {
                                    ref: D,
                                    className: p()(
                                        Qe.base,
                                        Qe[`base__${r}`],
                                        o && Qe.base__disabled,
                                        e && Qe[`base__${e}`],
                                        _ && Qe.base__focus,
                                        h && Qe.base__highlightActive,
                                        s,
                                    ),
                                    onMouseEnter: function (u) {
                                        o || (null !== i && Y(i), c && c(u));
                                    },
                                    onMouseMove: function (u) {
                                        E && E(u);
                                    },
                                    onMouseUp: function (u) {
                                        o || (A && A(u), v(!1));
                                    },
                                    onMouseDown: function (u) {
                                        o ||
                                            (null !== l && Y(l),
                                            d && d(u),
                                            t && (o || (D.current && (D.current.focus(), C(!0)))),
                                            v(!0));
                                    },
                                    onMouseLeave: function (u) {
                                        o || (F && F(u), v(!1));
                                    },
                                    onClick: function (u) {
                                        o || (m && m(u));
                                    },
                                },
                                r !== Se.ghost &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: Qe.back }),
                                        n().createElement('span', { className: Qe.texture }),
                                    ),
                                n().createElement(
                                    'span',
                                    { className: p()(Qe.state, Qe.state__default) },
                                    n().createElement('span', { className: Qe.stateDisabled }),
                                    n().createElement('span', { className: Qe.stateHighlightHover }),
                                    n().createElement('span', { className: Qe.stateHighlightActive }),
                                ),
                                n().createElement(
                                    'span',
                                    { className: Qe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    u,
                                ),
                            )
                        );
                    };
                Je.defaultProps = { type: Se.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ut = Je,
                    et = {
                        base: 'MapCounter_base_ef',
                        highlightedCount: 'MapCounter_highlightedCount_5a',
                        clearButton: 'MapCounter_clearButton_26',
                        clearButton__hidden: 'MapCounter_clearButton__hidden_63',
                        closeIcon: 'MapCounter_closeIcon_0a',
                        filterGlow: 'MapCounter_filterGlow_8c',
                    },
                    tt = (0, wu.Pi)(() => {
                        const u = Pu(),
                            e = u.model,
                            t = u.controls,
                            a = e.filterInfo.isFilterApplied.get(),
                            r = e.filterInfo.mapsSelected.get(),
                            o = e.filterInfo.mapsTotal.get(),
                            s = t.onFilterReset;
                        return n().createElement(
                            'div',
                            { className: et.base },
                            a
                                ? n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement(Zu, {
                                          text: Hu.filteredMapsDisplayed,
                                          classMix: et.label,
                                          binding: {
                                              count: n().createElement('span', { className: et.highlightedCount }, r),
                                              total: o,
                                          },
                                      }),
                                      n().createElement('img', {
                                          src: R.images.gui.maps.icons.excluded_maps.filter_glow(),
                                          className: et.filterGlow,
                                      }),
                                  )
                                : n().createElement(Zu, {
                                      text: Hu.totalMapsDisplayed,
                                      classMix: et.label,
                                      binding: {
                                          count: n().createElement('span', { className: et.highlightedCount }, o),
                                      },
                                  }),
                            n().createElement(
                                ut,
                                {
                                    type: 'ghost',
                                    mixClass: p()(et.clearButton, !a && et.clearButton__hidden),
                                    onClick: () => s(),
                                },
                                n().createElement('img', {
                                    src: R.images.gui.maps.icons.library.cross(),
                                    className: et.closeIcon,
                                }),
                            ),
                        );
                    });
                let at;
                !(function (u) {
                    (u.MAPS_BLACKLIST_SLOT_STATE_ACTIVE = 'active'),
                        (u.MAPS_BLACKLIST_SLOT_STATE_CHANGE = 'change'),
                        (u.MAPS_BLACKLIST_SLOT_STATE_DISABLED = 'disabled'),
                        (u.MAPS_BLACKLIST_SLOT_STATE_COOLDOWN = 'cooldown'),
                        (u.MAPS_BLACKLIST_SLOT_STATE_SELECTED = 'selected'),
                        (u.MAPS_BLACKLIST_SLOT_STATE_ACTIVE_NO_HOVER = 'active_no_hover');
                })(at || (at = {}));
                const nt = 'MapTile_base_fe',
                    rt = 'MapTile_glowFrame_4e',
                    ot = 'MapTile_mapCross_da',
                    st = 'MapTile_lockIcon_bb',
                    it = 'MapTile_hoverText_35',
                    lt = 'MapTile_mapOverlay_5c',
                    ct = 'MapTile_base__available_d2',
                    Et = 'MapTile_hoverOverlay_93',
                    dt = 'MapTile_base__excluded_3c',
                    At = 'MapTile_hoverButton_d3',
                    Ft = 'MapTile_base__cooldown_d6',
                    mt = 'MapTile_mapImage_c8',
                    Dt = 'MapTile_disabledTile_ec',
                    Bt = 'MapTile_mapName_d1',
                    _t = 'MapTile_base__disabled_95',
                    Ct = 'MapTile_hoverMapName_db',
                    pt = 'MapTile_hoverButtonContainer_bf',
                    gt = ({
                        state: u,
                        mapId: e,
                        onMapAddToBlacklist: t,
                        onMapRemoveFromBlacklist: r,
                        className: o,
                    }) => {
                        const s = ie({ mapId: e }),
                            i = p()(
                                o,
                                nt,
                                u === at.MAPS_BLACKLIST_SLOT_STATE_ACTIVE && ct,
                                u === at.MAPS_BLACKLIST_SLOT_STATE_COOLDOWN && Ft,
                                u === at.MAPS_BLACKLIST_SLOT_STATE_CHANGE && dt,
                                u === at.MAPS_BLACKLIST_SLOT_STATE_DISABLED && _t,
                            ),
                            l = (0, a.useMemo)(
                                () => ({ mapName: n().createElement('span', { className: Ct }, `"${s}"`) }),
                                [s],
                            );
                        return u === at.MAPS_BLACKLIST_SLOT_STATE_ACTIVE
                            ? n().createElement(
                                  'div',
                                  { className: i },
                                  n().createElement('img', { src: le({ mapId: e }), className: mt }),
                                  n().createElement('img', {
                                      src: R.images.gui.maps.icons.excluded_maps.map_shadow(),
                                      className: lt,
                                  }),
                                  n().createElement('div', { className: Bt }, ie({ mapId: e })),
                                  n().createElement(
                                      'div',
                                      { className: Et },
                                      n().createElement(
                                          'div',
                                          null,
                                          n().createElement(Zu, { text: Hu.hoverExclude, binding: l, classMix: it }),
                                      ),
                                      n().createElement(
                                          'div',
                                          { className: pt },
                                          n().createElement(
                                              ut,
                                              { mixClass: At, onClick: () => t(e) },
                                              Hu.hoverExcludeButton,
                                          ),
                                      ),
                                  ),
                              )
                            : u === at.MAPS_BLACKLIST_SLOT_STATE_COOLDOWN
                              ? n().createElement(
                                    He,
                                    { header: Hu.cooldownTooltipHeader, body: Hu.cooldownTooltipBody },
                                    n().createElement(
                                        'div',
                                        { className: i },
                                        n().createElement('img', { src: le({ mapId: e }), className: mt }),
                                        n().createElement('img', {
                                            src: R.images.gui.maps.icons.excluded_maps.map_shadow(),
                                            className: lt,
                                        }),
                                        n().createElement('div', { className: Dt }),
                                        n().createElement('img', {
                                            src: R.images.gui.maps.icons.excluded_maps.map_glow_frame(),
                                            className: rt,
                                        }),
                                        n().createElement('img', {
                                            src: R.images.gui.maps.icons.excluded_maps.map_deleted_cross(),
                                            className: ot,
                                        }),
                                        n().createElement('div', { className: Bt }, ie({ mapId: e })),
                                        n().createElement('img', {
                                            src: R.images.gui.maps.icons.excluded_maps.icon_lock(),
                                            className: st,
                                        }),
                                    ),
                                )
                              : u === at.MAPS_BLACKLIST_SLOT_STATE_CHANGE
                                ? n().createElement(
                                      'div',
                                      { className: i },
                                      n().createElement('img', { src: le({ mapId: e }), className: mt }),
                                      n().createElement('img', {
                                          src: R.images.gui.maps.icons.excluded_maps.map_shadow(),
                                          className: lt,
                                      }),
                                      n().createElement('img', {
                                          src: R.images.gui.maps.icons.excluded_maps.map_glow_frame(),
                                          className: rt,
                                      }),
                                      n().createElement('img', {
                                          src: R.images.gui.maps.icons.excluded_maps.map_deleted_cross(),
                                          className: ot,
                                      }),
                                      n().createElement('div', { className: Bt }, ie({ mapId: e })),
                                      n().createElement(
                                          'div',
                                          { className: Et },
                                          n().createElement(
                                              'div',
                                              null,
                                              n().createElement(Zu, {
                                                  text: Hu.hoverInclude,
                                                  binding: l,
                                                  classMix: it,
                                              }),
                                          ),
                                          n().createElement(
                                              'div',
                                              { className: pt },
                                              n().createElement(
                                                  ut,
                                                  { mixClass: At, onClick: () => r(e) },
                                                  Hu.hoverIncludeButton,
                                              ),
                                          ),
                                      ),
                                  )
                                : n().createElement(
                                      He,
                                      { header: Hu.cooldownTooltipHeader, body: Hu.cooldownTooltipBody },
                                      n().createElement(
                                          'div',
                                          { className: i },
                                          n().createElement('img', { src: le({ mapId: e }), className: mt }),
                                          n().createElement('img', {
                                              src: R.images.gui.maps.icons.excluded_maps.map_shadow(),
                                              className: lt,
                                          }),
                                          n().createElement('div', { className: Bt }, ie({ mapId: e })),
                                      ),
                                  );
                    },
                    ht = Ou()(({ observableModel: u }) => {
                        const e = { maps: u.array('items', []) },
                            t = (0, Ru.Om)(() => Ge(e.maps.get(), xu).filter((u) => u.filtered), { equals: Mu });
                        return Object.assign({ computes: { getMaps: t } }, e);
                    }, Tu),
                    vt = ht[0],
                    ft = ht[1],
                    bt = (0, wu.Pi)(({ className: u, onMapAddToBlacklist: e, onMapRemoveFromBlacklist: t }) => {
                        const a = ft().model.computes.getMaps();
                        return n().createElement(
                            'div',
                            { className: u },
                            a.map((u) =>
                                n().createElement(gt, {
                                    mapCooldownTime: u.cooldownTime,
                                    mapId: u.mapId,
                                    state: u.state,
                                    onMapAddToBlacklist: e,
                                    onMapRemoveFromBlacklist: t,
                                    className: xe,
                                    key: u.mapId,
                                }),
                            ),
                        );
                    }),
                    wt = { context: 'model.maps' },
                    Tt = (0, a.memo)(function ({ className: u, onMapAddToBlacklist: e, onMapRemoveFromBlacklist: t }) {
                        return n().createElement(
                            vt,
                            { options: wt },
                            n().createElement(bt, {
                                className: u,
                                onMapAddToBlacklist: e,
                                onMapRemoveFromBlacklist: t,
                            }),
                        );
                    });
                const xt = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    Mt = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    St = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    yt = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const a = xt(`${u}.${t}`, window);
                                return Mt(a) ? e(u, t, a) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    Lt = (u) => {
                        const e = ((u) => {
                                const e = Bu(),
                                    t = e.caller,
                                    a = e.resId,
                                    n = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: n, modelPath: St(n, u || ''), resId: a };
                            })(),
                            t = e.modelPrefix,
                            a = u.split('.');
                        if (a.length > 0) {
                            const u = [a[0]];
                            return (
                                a.reduce((e, a) => {
                                    const n = xt(St(t, `${e}.${a}`), window);
                                    return Mt(n) ? (u.push(n.id), `${e}.${a}.value`) : (u.push(a), `${e}.${a}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    kt = _u.Sw.instance;
                let Ot;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(Ot || (Ot = {}));
                const Rt = (u = 'model', e = Ot.Deep) => {
                        const t = (0, a.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, a.useMemo)(() => Bu(), []),
                            o = r.caller,
                            s = r.resId,
                            i = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== o ? `subViews.${o}.${u}` : u),
                                [o, u],
                            ),
                            l = (0, a.useState)(() =>
                                ((u) => {
                                    const e = xt(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return Mt(e) ? e.value : e;
                                })(yt(i)),
                            ),
                            c = l[0],
                            E = l[1],
                            d = (0, a.useRef)(-1);
                        return (
                            B(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? Ot.Deep : Ot.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== Ot.None)
                                ) {
                                    const t = (u) => {
                                            ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                            e === Ot.Deep
                                                ? (u === c && n((u) => u + 1), E(u))
                                                : E(Object.assign([], u));
                                        },
                                        a = Lt(u);
                                    d.current = kt.addCallback(a, t, s, e === Ot.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (e !== Ot.None)
                                    return () => {
                                        kt.removeCallback(d.current, s);
                                    };
                            }, [s, e]),
                            c
                        );
                    },
                    Nt = (_u.Sw.instance, {});
                function It(u, e, t, a = Ot.Deep) {
                    const r = (r) => {
                        const o = r.path || e || void 0,
                            s = Rt(o, (o && Nt[o]) || !1 ? Ot.None : a),
                            i = Object.assign({}, t(s, r), r);
                        return n().createElement(u, i);
                    };
                    var o;
                    return (r.displayName = `WithModel(${((o = u), o.displayName || o.name || 'Component')})`), r;
                }
                const Pt = 'ExcludedMapsBlock_base_6b',
                    Ht = 'ExcludedMapsBlock_base__disabled_68',
                    Wt = 'ExcludedMapsBlock_header_d4',
                    Vt = 'ExcludedMapsBlock_base_background_03',
                    $t = 'ExcludedMapsBlock_disabledPattern_09',
                    Gt = 'ExcludedMapsBlock_lock_e8',
                    Ut = 'ExcludedMapsBlock_hover_b0',
                    jt = 'ExcludedMapsBlock_disabledContent_b4',
                    zt = 'ExcludedMapsBlock_unavailableText_d6',
                    Kt = 'ExcludedMapsBlock_slotContainer_b6';
                let qt;
                !(function (u) {
                    (u.empty = 'empty'), (u.selected = 'selected'), (u.disabled = 'disabled');
                })(qt || (qt = {}));
                const Yt = 'SlotItem_base_5b',
                    Xt = 'SlotItem_base__responsive_39',
                    Zt = 'SlotItem_mapImage_6b',
                    Qt = 'SlotItem_timerContainer_91',
                    Jt = 'SlotItem_base__select_15',
                    ua = 'SlotItem_base__disabled_88',
                    ea = 'SlotItem_base__replace_c5',
                    ta = 'SlotItem_base__cooldown_6a',
                    aa = 'SlotItem_mapTitle_a4',
                    na = 'SlotItem_removeButton_25',
                    ra = 'SlotItem_removeButton_icon_7e',
                    oa = 'SlotItem_timerText_11',
                    sa = R.strings.excluded_maps.notSelected(),
                    ia = ({ isEnabled: u = !0, isResponsive: e, isMapNameDisplayed: t, tooltipStrings: a }) =>
                        u
                            ? n().createElement(
                                  He,
                                  {
                                      header: (null == a ? void 0 : a.disabledTooltipHeader) || Fa.selectTooltipHeader,
                                      body: (null == a ? void 0 : a.selectTooltipBody) || Fa.selectTooltipBody,
                                  },
                                  n().createElement(
                                      'div',
                                      { className: p()(Yt, Jt, e && Xt), 'data-testid': 'slot' },
                                      t && n().createElement('div', { className: aa }, sa),
                                  ),
                              )
                            : n().createElement(
                                  He,
                                  {
                                      header:
                                          (null == a ? void 0 : a.disabledTooltipHeader) || Fa.disabledTooltipHeader,
                                      body: (null == a ? void 0 : a.disabledTooltipBody) || Fa.disabledTooltipBody,
                                  },
                                  n().createElement('div', { className: p()(Yt, ua, e && Xt), 'data-testid': 'slot' }),
                              ),
                    la = ['map'];
                const ca = (u) => {
                        let e = u.map,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var a in u)
                                    if ({}.hasOwnProperty.call(u, a)) {
                                        if (e.indexOf(a) >= 0) continue;
                                        t[a] = u[a];
                                    }
                                return t;
                            })(u, la);
                        const a = Math.floor(e.cooldownEndTimeInSecs - Date.now() / ue);
                        return oe(a), n().createElement(ma, Object.assign({ map: e }, t));
                    },
                    Ea = ({
                        slotState: u,
                        cooldownEndTimeInSecs: e,
                        mapId: t,
                        isMapNameDisplayed: a,
                        onRemoveButtonClick: r,
                        isResponsive: o,
                        tooltipStrings: s,
                        MapSlotComponent: i = ca,
                    }) => {
                        if (u === qt.selected)
                            return n().createElement(i, {
                                map: { slotState: u, cooldownEndTimeInSecs: e, mapId: t },
                                isMapNameDisplayed: a,
                                onRemoveButtonClick: r,
                                isResponsive: o,
                                tooltipStrings: s,
                            });
                        const l = u !== qt.disabled;
                        return n().createElement(ia, {
                            isEnabled: l,
                            isMapNameDisplayed: a,
                            isResponsive: o,
                            tooltipStrings: s,
                        });
                    },
                    da = It(
                        ({ className: u, path: e, excludedMaps: t, isResponsive: a }) =>
                            n().createElement(
                                'div',
                                { className: u },
                                t
                                    .slice(0, 3)
                                    .map(({ value: { cooldownEndTimeInSecs: u, mapId: t, slotState: r } }, o) =>
                                        n().createElement(Ea, {
                                            cooldownEndTimeInSecs: u,
                                            mapId: t,
                                            slotState: r,
                                            key: `${e}.${o}.id`,
                                            isResponsive: a,
                                        }),
                                    ),
                            ),
                        null,
                        (u, e) => Object.assign({}, e, { excludedMaps: u }),
                    );
                function Aa() {
                    return (
                        (Aa = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        Aa.apply(null, arguments)
                    );
                }
                const Fa = {
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
                    ma =
                        (It(
                            ({ className: u, isEnabled: e, onClick: t }) => {
                                const r = (0, a.useCallback)(() => {
                                        t(), Y('play');
                                    }, [t]),
                                    o = (0, a.useCallback)(() => {
                                        Y('highlight');
                                    }, []);
                                return e
                                    ? n().createElement(
                                          'div',
                                          { className: p()(Pt, u), onClick: r, onMouseEnter: o },
                                          n().createElement('div', { className: Vt }),
                                          n().createElement('div', { className: Ut }),
                                          n().createElement('div', { className: Wt }, Fa.header),
                                          n().createElement(da, {
                                              path: 'model.excludedMaps.excludedMaps',
                                              className: Kt,
                                              isResponsive: !0,
                                          }),
                                      )
                                    : n().createElement(
                                          'div',
                                          { className: p()(Pt, Ht) },
                                          n().createElement('div', { className: Vt }),
                                          n().createElement('div', { className: $t }),
                                          n().createElement(
                                              'div',
                                              { className: jt },
                                              n().createElement('img', {
                                                  src: R.images.gui.maps.icons.account_dashboard.premium_missions.lock(),
                                                  alt: '',
                                                  className: Gt,
                                              }),
                                              n().createElement('div', { className: Wt }, Fa.header),
                                              n().createElement('div', { className: zt }, Fa.temporarilyUnavailable),
                                          ),
                                      );
                            },
                            'model.excludedMaps',
                            (u, e) => {
                                let t = Aa(
                                    {},
                                    ((function (u) {
                                        if (null == u) throw new TypeError('Cannot destructure ' + u);
                                    })(u),
                                    u),
                                );
                                return Object.assign({}, t, e, {
                                    excludedMaps: t.excludedMaps ? t.excludedMaps.map((u) => u.value) : [],
                                });
                            },
                        ),
                        ({
                            map: u,
                            isMapNameDisplayed: e,
                            isResponsive: t,
                            onRemoveButtonClick: a,
                            tooltipStrings: r,
                        }) => {
                            const o = Math.floor(u.cooldownEndTimeInSecs - Date.now() / ue),
                                s = o <= 0 && '' !== u.mapId,
                                i = o > 0,
                                l = p()(Yt, s && ea, i && ta, t && Xt),
                                c = ie(u);
                            if (i) {
                                const t = ne(o),
                                    a = ce(t),
                                    r = $u(Fa.cooldownTooltipBody, { cooldownStr: Ee(t) });
                                return n().createElement(
                                    He,
                                    { header: Fa.cooldownTooltipHeader, body: r },
                                    n().createElement(
                                        'div',
                                        { className: l, 'data-testid': 'slot' },
                                        n().createElement('img', { src: le(u), className: Zt }),
                                        n().createElement(
                                            'div',
                                            { className: Qt, 'data-testid': 'timer' },
                                            n().createElement('div', { className: oa }, a),
                                        ),
                                        e && n().createElement('div', { className: aa }, c),
                                    ),
                                );
                            }
                            return n().createElement(
                                He,
                                {
                                    header: (null == r ? void 0 : r.replaceTooltipHeader) || Fa.replaceTooltipHeader,
                                    body: (null == r ? void 0 : r.replaceTooltipBody) || Fa.replaceTooltipBody,
                                },
                                n().createElement(
                                    'div',
                                    { className: l, 'data-testid': 'slot' },
                                    a &&
                                        n().createElement(
                                            ut,
                                            { type: 'ghost', mixClass: na, onClick: () => a(u.mapId) },
                                            n().createElement('img', {
                                                src: R.images.gui.maps.icons.library.cross(),
                                                className: ra,
                                            }),
                                        ),
                                    n().createElement('img', { src: le(u), className: Zt }),
                                    e && n().createElement('div', { className: aa }, c),
                                ),
                            );
                        }),
                    Da = {
                        [at.MAPS_BLACKLIST_SLOT_STATE_ACTIVE]: qt.empty,
                        [at.MAPS_BLACKLIST_SLOT_STATE_ACTIVE_NO_HOVER]: qt.selected,
                        [at.MAPS_BLACKLIST_SLOT_STATE_CHANGE]: qt.selected,
                        [at.MAPS_BLACKLIST_SLOT_STATE_COOLDOWN]: qt.selected,
                        [at.MAPS_BLACKLIST_SLOT_STATE_DISABLED]: qt.disabled,
                        [at.MAPS_BLACKLIST_SLOT_STATE_SELECTED]: qt.selected,
                    },
                    Ba = Ou()(({ observableModel: u }) => {
                        const e = { excludedMaps: u.array('items', []) },
                            t = (0, Ru.Om)(
                                () => Ge(e.excludedMaps.get(), (u) => Object.assign({}, u, { state: Da[u.state] })),
                                { equals: Mu },
                            );
                        return Object.assign({ computes: { getExcludedMapSlots: t } }, e);
                    }, Tu),
                    _a = Ba[0],
                    Ca = Ba[1],
                    pa = {
                        get disabledTooltipBody() {
                            return R.strings.excluded_maps.slot.disabledTooltipBody();
                        },
                        get selectTooltipHeader() {
                            return R.strings.excluded_maps.slot.selectTooltipHeader();
                        },
                        get selectTooltipBody() {
                            return R.strings.excluded_maps.slot.selectTooltipBody();
                        },
                        get replaceTooltipBody() {
                            return R.strings.excluded_maps.slot.replaceTooltipBody();
                        },
                    },
                    ga = (0, wu.Pi)(({ className: u, onMapRemoveFromBlacklist: e }) => {
                        const t = Ca().model.computes.getExcludedMapSlots();
                        return n().createElement(
                            'div',
                            { className: u },
                            t.map((u, t) =>
                                n().createElement(Ea, {
                                    isMapNameDisplayed: !0,
                                    onRemoveButtonClick: e,
                                    slotState: u.state,
                                    mapId: u.mapId,
                                    cooldownEndTimeInSecs: u.cooldownTime,
                                    key: t,
                                    tooltipStrings: pa,
                                    MapSlotComponent: ma,
                                }),
                            ),
                        );
                    }),
                    ha = { context: 'model.disabledMaps' },
                    va = (0, a.memo)(({ className: u, onMapRemoveFromBlacklist: e }) =>
                        n().createElement(
                            _a,
                            { options: ha },
                            n().createElement(ga, { className: u, onMapRemoveFromBlacklist: e }),
                        ),
                    ),
                    fa = { base: Be },
                    ba = { base: Te },
                    wa = (0, wu.Pi)(() => {
                        const u = Pu(),
                            e = u.model,
                            t = u.controls;
                        e.filterInfo.mapsSelected.get();
                        const a = e.computes.getIsInCooldown();
                        var r;
                        return (
                            (r = t.onBackAction),
                            bu(vu.n.ESCAPE, r),
                            n().createElement(
                                'div',
                                { className: De },
                                n().createElement(
                                    'div',
                                    { className: _e },
                                    n().createElement(
                                        'div',
                                        { className: pe },
                                        n().createElement('h1', null, Hu.header),
                                        n().createElement(
                                            hu,
                                            {
                                                contentId:
                                                    R.views.lobby.premacc.maps_blacklist.maps_blacklist_tooltips.MapsBlacklistInfoTooltipContent(
                                                        'resId',
                                                    ),
                                                decoratorId:
                                                    R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                            },
                                            n().createElement('img', {
                                                src: R.images.gui.maps.icons.library.info(),
                                                alt: '',
                                                className: Ce,
                                            }),
                                        ),
                                    ),
                                    a && n().createElement(me, { className: ge }),
                                ),
                                n().createElement(Du, {
                                    caption: Hu.backButtonLabel,
                                    goto: Hu.backButtonTo,
                                    classNames: fa,
                                    onClick: t.onBackAction,
                                }),
                                n().createElement(va, {
                                    className: he,
                                    onMapRemoveFromBlacklist: t.onMapRemoveFromBlacklist,
                                }),
                                n().createElement(
                                    'div',
                                    { className: fe },
                                    n().createElement(
                                        'div',
                                        { className: ve },
                                        n().createElement(tt, null),
                                        n().createElement(Ze, { onFilterClick: t.onFilterClick }),
                                    ),
                                    n().createElement('div', { className: Me }),
                                    n().createElement(
                                        Eu,
                                        { api: q(), className: we, barClassNames: ba },
                                        n().createElement(Tt, {
                                            className: be,
                                            onMapAddToBlacklist: t.onMapAddToBlacklist,
                                            onMapRemoveFromBlacklist: t.onMapRemoveFromBlacklist,
                                        }),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        n().createElement(
                            Iu,
                            { mode: 'real' },
                            n().createElement(O, null, n().createElement(wa, null)),
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
        (__webpack_require__.O = (u, e, t, a) => {
            if (!e) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [e, t, a] = deferred[i], r = !0, o = 0; o < e.length; o++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [e, t, a];
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
            var u = { 877: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        n,
                        [r, o, s] = t,
                        i = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (e && e(t); i < r.length; i++)
                        (n = r[i]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [182], () => __webpack_require__(581));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
