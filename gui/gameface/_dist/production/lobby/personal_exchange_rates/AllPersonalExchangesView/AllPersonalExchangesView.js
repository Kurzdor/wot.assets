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
                t.d(e, { O: () => eu });
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => D, off: () => A, on: () => E, onResize: () => s, onScaleUpdated: () => c });
                var n = {};
                t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => _,
                        getSize: () => C,
                        graphicsQuality: () => m,
                        playSound: () => d,
                        setRTPC: () => B,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => v, getTextureUrl: () => p });
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
                        addModelObserver: () => N,
                        addPreloadTexture: () => O,
                        children: () => a,
                        displayStatus: () => b,
                        displayStatusIs: () => Q,
                        events: () => w,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => Y,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => k,
                        getDisplayStatus: () => Z,
                        getScale: () => V,
                        getSize: () => W,
                        getViewGlobalPosition: () => z,
                        isEventHandled: () => K,
                        isFocused: () => q,
                        pxToRem: () => G,
                        remToPx: () => j,
                        resize: () => I,
                        sendEvent: () => T,
                        setAnimateWindow: () => $,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => P,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => uu,
                    });
                const s = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    A = (u, e) => engine.off(u, e),
                    F = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const D = (function () {
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
                                        i = F[e]((u) => t([u, 'outside']));
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
                function d(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function B(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function C(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(g).reduce((u, e) => ((u[e] = () => d(g[e])), u), {}),
                    f = { play: Object.assign({}, h, { sound: d }), setRTPC: B };
                function p(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function v(u, e, t) {
                    return `url(${p(u, e, t)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    w = {
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
                    x = ['args'];
                const y = 2,
                    L = 16,
                    S = 32,
                    R = 64,
                    M = (u, e) => {
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
                                })(e, x);
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
                            M('popover' === u ? y : S);
                        },
                        minimize() {
                            M(R);
                        },
                        move(u) {
                            M(L, { isMouseEvent: !0, on: u });
                        },
                    };
                function O(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function P(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function k(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function N(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function H(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function W(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function I(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function z(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: j(e.x), y: j(e.y) };
                }
                function U() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function V() {
                    return viewEnv.getScale();
                }
                function G(u) {
                    return viewEnv.pxToRem(u);
                }
                function j(u) {
                    return viewEnv.remToPx(u);
                }
                function $(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function K() {
                    return viewEnv.isEventHandled();
                }
                function Y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const Q = Object.keys(b).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === b[e]), u), {}),
                    J = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    uu = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : w.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    eu = { view: i, client: n, sound: f };
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
                var r = t(768);
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
                t.d(e, { B3: () => l, Z5: () => i.Z5, ry: () => C });
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
                    F = t(768);
                const D = ['args'];
                function d(u, e, t, r, n, a, i) {
                    try {
                        var o = u[a](i),
                            l = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(l) : Promise.resolve(l).then(r, n);
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
                                    return new Promise(function (r, n) {
                                        var a = u.apply(e, t);
                                        function i(u) {
                                            d(a, r, n, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            d(a, r, n, i, o, 'throw', u);
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
                                })(e, D);
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
                    m = () => _(o.CLOSE),
                    g = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var h = t(572);
                const f = n.instance,
                    p = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: s,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => _(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: m,
                        sendClosePopOverEvent: () => _(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            _(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), a) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                s = l.x,
                                c = l.y,
                                E = l.width,
                                A = l.height,
                                D = {
                                    x: F.O.view.pxToRem(s) + i.x,
                                    y: F.O.view.pxToRem(c) + i.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(A),
                                };
                            _(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(D),
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
                            g(u, m);
                        },
                        handleViewEvent: _,
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
            86: (u, e, t) => {
                'use strict';
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => Vu,
                        Bar: () => Iu,
                        DefaultScroll: () => Uu,
                        Direction: () => vu,
                        defaultSettings: () => bu,
                        useHorizontalScrollApi: () => xu,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => oe, Bar: () => ne, Default: () => ie, useVerticalScrollApi: () => Gu });
                var a = t(179),
                    i = t.n(a);
                const o = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var l = t(768);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(u, e, t) {
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
                })(c || (c = {}));
                const A = l.O.client.getSize('rem'),
                    F = A.width,
                    D = A.height,
                    d = Object.assign({ width: F, height: D }, E(F, D, s)),
                    B = (0, a.createContext)(d),
                    C = ['children'];
                const _ = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, C);
                    const r = (0, a.useContext)(B),
                        n = r.extraLarge,
                        i = r.large,
                        l = r.medium,
                        s = r.small,
                        c = r.extraSmall,
                        E = r.extraLargeWidth,
                        A = r.largeWidth,
                        F = r.mediumWidth,
                        D = r.smallWidth,
                        d = r.extraSmallWidth,
                        _ = r.extraLargeHeight,
                        m = r.largeHeight,
                        g = r.mediumHeight,
                        h = r.smallHeight,
                        f = r.extraSmallHeight,
                        p = { extraLarge: _, large: m, medium: g, small: h, extraSmall: f };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return e;
                        if (t.large && i) return e;
                        if (t.medium && l) return e;
                        if (t.small && s) return e;
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
                            if (t.extraLargeHeight && _) return e;
                            if (t.largeHeight && m) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && h) return e;
                            if (t.extraSmallHeight && f) return e;
                        }
                    }
                    return null;
                };
                _.defaultProps = {
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
                (0, a.memo)(_);
                const m = (u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    g = ({ children: u }) => {
                        const e = (0, a.useContext)(B),
                            t = (0, a.useState)(e),
                            r = t[0],
                            n = t[1],
                            o = (0, a.useCallback)((u, e) => {
                                const t = l.O.view.pxToRem(u),
                                    r = l.O.view.pxToRem(e);
                                n(Object.assign({ width: t, height: r }, E(t, r, s)));
                            }, []),
                            c = (0, a.useCallback)(() => {
                                const u = l.O.client.getSize('px');
                                o(u.width, u.height);
                            }, [o]);
                        m(() => {
                            l.O.client.events.on('clientResized', o), l.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    l.O.client.events.off('clientResized', o),
                                        l.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [o, c],
                            );
                        const A = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return i().createElement(B.Provider, { value: A }, u);
                    };
                var h = t(483),
                    f = t.n(h),
                    p = t(926),
                    v = t.n(p);
                let b, w, x;
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
                    })(w || (w = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.height)] = 'Small'),
                            (u[(u.Medium = s.medium.height)] = 'Medium'),
                            (u[(u.Large = s.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(x || (x = {}));
                const y = () => {
                        const u = (0, a.useContext)(B),
                            e = u.width,
                            t = u.height,
                            r = ((u) => {
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
                            n = ((u) => {
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
                            i = ((u) => {
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
                        return { mediaSize: r, mediaWidth: n, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    L = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const M = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_WIDTH,
                        [w.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [w.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [x.ExtraSmall]: '',
                        [x.Small]: v().SMALL_HEIGHT,
                        [x.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [x.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL,
                        [b.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [b.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [b.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    P = (u) => {
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
                            })(u, L);
                        const n = y(),
                            a = n.mediaWidth,
                            o = n.mediaHeight,
                            l = n.mediaSize;
                        return i().createElement('div', S({ className: f()(t, M[a], T[o], O[l]) }, r), e);
                    },
                    k = ['children'];
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
                        })(u, k);
                    return i().createElement(g, null, i().createElement(P, t, e));
                };
                var H = t(493),
                    W = t.n(H),
                    I = t(916);
                class z extends i().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = I.B3.GOLD;
                        else u = I.B3.INTEGRAL;
                        const e = I.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                z.defaultProps = { format: 'integral' };
                const U = {
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
                    'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                    'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                    'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                    'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
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
                    value__eliteXP: 'Currency_value__eliteXP_62',
                    value__notEnough: 'Currency_value__notEnough_56',
                    stock: 'Currency_stock_87',
                    stock__indent: 'Currency_stock__indent_a1',
                    stock__interactive: 'Currency_stock__interactive_93',
                    stockBackground: 'Currency_stockBackground_82',
                };
                let V, G, j;
                !(function (u) {
                    (u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge');
                })(V || (V = {})),
                    (function (u) {
                        (u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.eliteXP = 'eliteXP'),
                            (u.equipCoin = 'equipCoin');
                    })(G || (G = {})),
                    (function (u) {
                        (u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG');
                    })(j || (j = {}));
                const $ = (0, a.memo)(
                    ({
                        isDiscount: u,
                        isInteractiveDiscount: e,
                        size: t,
                        type: r,
                        value: n,
                        discountValue: a,
                        showPlus: o,
                        isEnough: l = !0,
                        stockBackgroundName: s = j.Red,
                        className: c,
                        classNames: E,
                    }) =>
                        i().createElement(
                            'span',
                            { className: f()(U.base, U[`base__${t}`], c) },
                            i().createElement(
                                'span',
                                {
                                    className: f()(
                                        U.value,
                                        U[`value__${r}`],
                                        !l && U.value__notEnough,
                                        null == E ? void 0 : E.value,
                                    ),
                                },
                                o && n > 0 && '+',
                                i().createElement(z, { value: n, format: r === G.gold ? 'gold' : 'integral' }),
                            ),
                            i().createElement('span', {
                                className: f()(U.icon, U[`icon__${r}-${t}`], null == E ? void 0 : E.icon),
                            }),
                            u &&
                                i().createElement(
                                    'span',
                                    {
                                        className: f()(
                                            U.stock,
                                            a && U.stock__indent,
                                            e && U.stock__interactive,
                                            null == E ? void 0 : E.stock,
                                        ),
                                    },
                                    i().createElement('span', {
                                        className: U.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${s})` },
                                    }),
                                    Boolean(a) && a,
                                ),
                        ),
                );
                var q = t(281);
                let X;
                function K(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(X || (X = {}));
                const Y = (u) => u.replace(/&nbsp;/g, ' '),
                    Z = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Q = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    J = (u, e, t = X.left) => u.split(e).reduce(t === X.left ? Z : Q, []),
                    uu = (() => {
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
                    eu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    tu = (u, e = X.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (eu.includes(t)) return uu(u);
                        if ('ja' === t) {
                            return (0, q.D4)()
                                .parse(u)
                                .map((u) => Y(u));
                        }
                        return ((u, e = X.left) => {
                            let t = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = Y(u);
                            return J(n, /( )/, e).forEach((u) => (t = t.concat(J(u, r, X.left)))), t;
                        })(u, e);
                    },
                    ru = 'FormatText_base_d0',
                    nu = ({ binding: u, text: e = '', classMix: t, alignment: r = X.left, formatWithBrackets: n }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const o = n && u ? K(e, u) : e;
                        return i().createElement(
                            a.Fragment,
                            null,
                            o.split('\n').map((e, n) =>
                                i().createElement(
                                    'div',
                                    { className: f()(ru, t), key: `${e}-${n}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : tu(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => i().createElement(a.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    };
                function au(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const iu = {
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
                    ou = [
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
                function lu() {
                    return (
                        (lu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        lu.apply(this, arguments)
                    );
                }
                class su extends i().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && au(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && au(this.props.soundClick);
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
                            n = u.side,
                            a = u.type,
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
                                })(u, ou)),
                            F = f()(iu.base, iu[`base__${a}`], iu[`base__${n}`], null == o ? void 0 : o.base),
                            D = f()(iu.icon, iu[`icon__${a}`], iu[`icon__${n}`], null == o ? void 0 : o.icon),
                            d = f()(iu.glow, null == o ? void 0 : o.glow),
                            B = f()(iu.caption, iu[`caption__${a}`], null == o ? void 0 : o.caption),
                            C = f()(iu.goto, null == o ? void 0 : o.goto);
                        return i().createElement(
                            'div',
                            lu(
                                {
                                    className: F,
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
                            'info' !== a && i().createElement('div', { className: iu.shine }),
                            i().createElement('div', { className: D }, i().createElement('div', { className: d })),
                            i().createElement('div', { className: B }, e),
                            r && i().createElement('div', { className: C }, r),
                        );
                    }
                }
                su.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var cu = t(521);
                const Eu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Au(u = cu.n.NONE, e = Eu, t = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== cu.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!r && l.O.view.isEventHandled()) return;
                                l.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t, r]);
                }
                var Fu = t(515);
                const Du = (u) => {
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
                    du = (u, e, t) => (t < u ? u : t > e ? e : t),
                    Bu = [];
                function Cu(u) {
                    const e = (0, a.useRef)(u);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, a.useCallback)((...u) => (0, e.current)(...u), Bu)
                    );
                }
                function _u(u, e, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const i = (null != t ? t : []).concat([e]);
                    return [
                        (0, a.useCallback)((t) => {
                            (r.current = window.setInterval(() => u(t, !0), e)), u(t, !1);
                        }, i),
                        n,
                    ];
                }
                function mu(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return gu(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return gu(u, e);
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
                function gu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const hu = () => {
                    const u = (0, a.useMemo)(() => ({}), []),
                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                        t = (u, t) => {
                            e(u).set(t, t);
                        },
                        r = (u, t) => {
                            e(u).delete(t);
                        },
                        n = (u, ...t) => {
                            for (var r, n = mu(e(u).values()); !(r = n()).done; ) {
                                (0, r.value)(...t);
                            }
                        };
                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                };
                function fu(u, e, t) {
                    const r = (0, a.useMemo)(
                        () =>
                            (function (u, e, t, r) {
                                let n,
                                    a = !1,
                                    i = 0;
                                function o() {
                                    n && clearTimeout(n);
                                }
                                function l(...l) {
                                    const s = this,
                                        c = Date.now() - i;
                                    function E() {
                                        (i = Date.now()), t.apply(s, l);
                                    }
                                    a ||
                                        (r && !n && E(),
                                        o(),
                                        void 0 === r && c > u
                                            ? E()
                                            : !0 !== e &&
                                              (n = setTimeout(
                                                  r
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : E,
                                                  void 0 === r ? u - c : u,
                                              )));
                                }
                                return (
                                    'boolean' != typeof e && ((r = t), (t = e), (e = void 0)),
                                    (l.cancel = function () {
                                        o(), (a = !0);
                                    }),
                                    l
                                );
                            })(t, u),
                        e,
                    );
                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                }
                var pu = t(30);
                let vu;
                !(function (u) {
                    (u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev');
                })(vu || (vu = {}));
                const bu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    wu = ({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const o = (u, t) => {
                            const r = e(u),
                                n = r[0],
                                a = r[1];
                            return a <= n ? 0 : du(n, a, t);
                        };
                        return (s = {}) => {
                            const c = s.settings,
                                E = void 0 === c ? bu : c,
                                A = (0, a.useRef)(null),
                                F = (0, a.useRef)(null),
                                D = hu(),
                                d = fu(
                                    () => {
                                        l.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                B = (0, pu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = A.current;
                                        e && (t(e, u), D.trigger('change', u), i && d());
                                    },
                                    onRest: (u) => D.trigger('rest', u),
                                    onStart: (u) => D.trigger('start', u),
                                    onPause: (u) => D.trigger('pause', u),
                                })),
                                C = B[0],
                                _ = B[1],
                                m = (0, a.useCallback)(
                                    (u, e, t) => {
                                        var r;
                                        const n = C.scrollPosition.get(),
                                            a = (null != (r = C.scrollPosition.goal) ? r : 0) - n;
                                        return o(u, e * t + a + n);
                                    },
                                    [C.scrollPosition],
                                ),
                                g = (0, a.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const r = A.current;
                                        r &&
                                            _.start({
                                                scrollPosition: o(r, u),
                                                immediate: e,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: o(r, C.scrollPosition.get()) },
                                            });
                                    },
                                    [_, E.animationConfig, C.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (u) => {
                                        const e = A.current,
                                            t = F.current;
                                        if (!e || !t) return;
                                        const r = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return n(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, E.step),
                                            a = m(e, u, r);
                                        g(a);
                                    },
                                    [g, m, E.step],
                                ),
                                f = (0, a.useCallback)(
                                    (u) => {
                                        0 !== u.deltaY && h(r(u)),
                                            A.current && D.trigger('mouseWheel', u, C.scrollPosition, e(A.current));
                                    },
                                    [C.scrollPosition, h, D],
                                ),
                                p = ((u, e = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...e) => {
                                            t.current && t.current(), (t.current = u(...e));
                                        }, e);
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
                                        Du(() => {
                                            const u = A.current;
                                            u &&
                                                (g(o(u, C.scrollPosition.goal), { immediate: !0 }),
                                                D.trigger('resizeHandled'));
                                        }),
                                    [g, C.scrollPosition.goal],
                                ),
                                v = Cu(() => {
                                    const u = A.current;
                                    if (!u) return;
                                    const e = o(u, C.scrollPosition.goal);
                                    e !== C.scrollPosition.goal && g(e, { immediate: !0 }),
                                        D.trigger('recalculateContent');
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', p),
                                    () => {
                                        window.removeEventListener('resize', p);
                                    }
                                ),
                                [p],
                            );
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (F.current ? n(F.current) : void 0),
                                    getContainerSize: () => (A.current ? u(A.current) : void 0),
                                    getBounds: () =>
                                        A.current
                                            ? e(A.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: f,
                                    applyScroll: g,
                                    applyStepTo: h,
                                    contentRef: A,
                                    wrapperRef: F,
                                    scrollPosition: _,
                                    animationScroll: C,
                                    recalculateContent: v,
                                    events: { on: D.on, off: D.off },
                                }),
                                [C.scrollPosition, g, h, D.off, D.on, v, f, _, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    xu = wu({
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
                        getDirection: (u) => (u.deltaY > 1 ? vu.Next : vu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    yu = 'HorizontalBar_base_49',
                    Lu = 'HorizontalBar_base__nonActive_82',
                    Su = 'HorizontalBar_leftButton_5f',
                    Ru = 'HorizontalBar_rightButton_03',
                    Mu = 'HorizontalBar_track_0d',
                    Tu = 'HorizontalBar_thumb_fd',
                    Ou = 'HorizontalBar_rail_32',
                    Pu = 'disable',
                    ku = { pending: !1, offset: 0 },
                    Nu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    Hu = () => {},
                    Wu = (u, e) => Math.max(20, u.offsetWidth * e),
                    Iu = (0, a.memo)(
                        ({
                            api: u,
                            classNames: e = {},
                            getStepByRailClick: t = Nu,
                            onDrag: r = Hu,
                            onClick: n = Hu,
                        }) => {
                            const o = (0, a.useRef)(null),
                                s = (0, a.useRef)(null),
                                c = (0, a.useRef)(null),
                                E = (0, a.useRef)(null),
                                A = (0, a.useRef)(null),
                                F = u.stepTimeout || 100,
                                D = (0, a.useState)(ku),
                                d = D[0],
                                B = D[1],
                                C = (0, a.useCallback)(
                                    (u) => {
                                        B(u),
                                            A.current &&
                                                r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: A.current });
                                    },
                                    [r],
                                ),
                                _ = () => {
                                    const e = E.current,
                                        t = A.current,
                                        r = u.getWrapperSize(),
                                        n = u.getContainerSize();
                                    if (!(r && e && t && n)) return;
                                    const a = u.animationScroll.scrollPosition.get(),
                                        i = Math.min(1, r / n),
                                        o = du(0, 1, a / (n - r)),
                                        l = (e.offsetWidth - Wu(e, i)) * o;
                                    (t.style.transform = `translateX(${0 | l}px)`),
                                        ((u) => {
                                            if (s.current && c.current && E.current && A.current) {
                                                if (0 === u)
                                                    return (
                                                        s.current.classList.add(Pu), void c.current.classList.remove(Pu)
                                                    );
                                                if (
                                                    ((e = E.current),
                                                    (t = A.current),
                                                    u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                                )
                                                    return (
                                                        s.current.classList.remove(Pu), void c.current.classList.add(Pu)
                                                    );
                                                var e, t;
                                                s.current.classList.remove(Pu), c.current.classList.remove(Pu);
                                            }
                                        })(l);
                                },
                                m = Cu(() => {
                                    (() => {
                                        const e = A.current,
                                            t = E.current,
                                            r = u.getWrapperSize(),
                                            n = u.getContainerSize();
                                        if (!(n && e && r && t)) return;
                                        const a = Math.min(1, r / n);
                                        (e.style.width = `${Wu(t, a)}px`),
                                            (e.style.display = 'flex'),
                                            o.current &&
                                                (1 === a
                                                    ? o.current.classList.add(Lu)
                                                    : o.current.classList.remove(Lu));
                                    })(),
                                        _();
                                });
                            (0, a.useEffect)(() => Du(m)),
                                (0, a.useEffect)(
                                    () =>
                                        Du(() => {
                                            const e = () => {
                                                _();
                                            };
                                            let t = Hu;
                                            const r = () => {
                                                t(), (t = Du(m));
                                            };
                                            return (
                                                u.events.on('recalculateContent', m),
                                                u.events.on('rest', e),
                                                u.events.on('change', e),
                                                u.events.on('resizeHandled', r),
                                                () => {
                                                    t(),
                                                        u.events.off('recalculateContent', m),
                                                        u.events.off('rest', e),
                                                        u.events.off('change', e),
                                                        u.events.off('resizeHandled', r);
                                                }
                                            );
                                        }),
                                    [u],
                                ),
                                (0, a.useEffect)(() => {
                                    if (!d.pending) return;
                                    const e = l.O.client.events.mouse.move(([e, t]) => {
                                            var n;
                                            const a = u.contentRef.current,
                                                i = u.wrapperRef.current;
                                            if (!a || !i) return;
                                            const o = E.current,
                                                l = A.current;
                                            if (!o || !l) return;
                                            if ('inside' === t && e.clientX < 0) return;
                                            const s = e.clientX - d.offset - o.getBoundingClientRect().x,
                                                c = (s / o.offsetWidth) * (null != (n = u.getContainerSize()) ? n : 0);
                                            u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(a, c),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                            }),
                                                r({ type: 'dragging', thumb: l, thumbOffset: s, contentOffset: c });
                                        }),
                                        t = l.O.client.events.mouse.up(() => {
                                            e(), C(ku);
                                        });
                                    return () => {
                                        e(), t();
                                    };
                                }, [u, d.offset, d.pending, r, C]);
                            const g = _u(
                                    (e) => {
                                        u.applyStepTo(e), n(e);
                                    },
                                    F,
                                    [u],
                                ),
                                h = g[0],
                                p = g[1];
                            (0, a.useEffect)(
                                () => (
                                    document.addEventListener('mouseup', p, !0),
                                    () => document.removeEventListener('mouseup', p, !0)
                                ),
                                [p],
                            );
                            const v = (u) => {
                                u.target.classList.contains(Pu) || au('highlight');
                            };
                            return i().createElement(
                                'div',
                                { className: f()(yu, e.base), ref: o, onWheel: u.handleMouseWheel },
                                i().createElement('div', {
                                    className: f()(Su, e.leftButton),
                                    onMouseDown: (u) => {
                                        u.target.classList.contains(Pu) || 0 !== u.button || (au('play'), h(vu.Next));
                                    },
                                    onMouseUp: p,
                                    ref: s,
                                    onMouseEnter: v,
                                }),
                                i().createElement(
                                    'div',
                                    {
                                        className: f()(Mu, e.track),
                                        onMouseDown: (e) => {
                                            const r = A.current;
                                            if (r && 0 === e.button)
                                                if ((au('play'), e.target === r))
                                                    C({ pending: !0, offset: e.screenX - r.getBoundingClientRect().x });
                                                else {
                                                    ((e) => {
                                                        const r = A.current,
                                                            n = u.contentRef.current;
                                                        if (!r || !n) return;
                                                        const a = t(u);
                                                        u.applyScroll(u.animationScroll.scrollPosition.get() + a * e);
                                                    })(e.screenX > r.getBoundingClientRect().x ? vu.Prev : vu.Next);
                                                }
                                        },
                                        ref: E,
                                        onMouseEnter: v,
                                    },
                                    i().createElement('div', { ref: A, className: f()(Tu, e.thumb) }),
                                    i().createElement('div', { className: f()(Ou, e.rail) }),
                                ),
                                i().createElement('div', {
                                    className: f()(Ru, e.rightButton),
                                    onMouseDown: (u) => {
                                        u.target.classList.contains(Pu) || 0 !== u.button || (au('play'), h(vu.Prev));
                                    },
                                    onMouseUp: p,
                                    ref: c,
                                    onMouseEnter: v,
                                }),
                            );
                        },
                    ),
                    zu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Uu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: o,
                        scrollClassName: l,
                        getStepByRailClick: s,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: f()(zu.base, u.base) });
                            }, [r]),
                            A = (0, a.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return i().createElement(
                            'div',
                            { className: f()(zu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: f()(zu.defaultScrollArea, n) },
                                i().createElement(Vu, { className: l, api: A, classNames: o }, u),
                            ),
                            i().createElement(Iu, { getStepByRailClick: s, api: e, onDrag: c, classNames: E }),
                        );
                    },
                    Vu = ({ api: u, className: e, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => Du(u.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: f()(zu.base, e) },
                            i().createElement(
                                'div',
                                {
                                    className: f()(zu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: u.handleMouseWheel,
                                    ref: u.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: f()(zu.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (Vu.Bar = Iu), (Vu.Default = Uu);
                const Gu = wu({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? vu.Next : vu.Prev),
                    }),
                    ju = 'VerticalBar_base_f3',
                    $u = 'VerticalBar_base__nonActive_42',
                    qu = 'VerticalBar_topButton_d7',
                    Xu = 'VerticalBar_bottomButton_06',
                    Ku = 'VerticalBar_track_df',
                    Yu = 'VerticalBar_thumb_32',
                    Zu = 'VerticalBar_rail_43',
                    Qu = 'disable',
                    Ju = () => {},
                    ue = { pending: !1, offset: 0 },
                    ee = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    te = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    re = (u, e) => Math.max(20, u.offsetHeight * e),
                    ne = (0, a.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = ee, onDrag: r = Ju }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, a.useState)(ue),
                            D = F[0],
                            d = F[1],
                            B = (0, a.useCallback)(
                                (u) => {
                                    d(u),
                                        E.current && r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [r],
                            ),
                            C = Cu(() => {
                                const e = E.current,
                                    t = c.current,
                                    r = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(r && a && e && t)) return;
                                const i = Math.min(1, r / a);
                                return (
                                    (e.style.height = `${re(t, i)}px`),
                                    (e.style.display = 'flex'),
                                    n.current &&
                                        (1 === i ? n.current.classList.add($u) : n.current.classList.remove($u)),
                                    i
                                );
                            }),
                            _ = Cu(() => {
                                const e = c.current,
                                    t = E.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const a = u.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    l = du(0, 1, a / (n - r)),
                                    A = (e.offsetHeight - re(e, i)) * l;
                                (t.style.transform = `translateY(${0 | A}px)`),
                                    ((u) => {
                                        if (o.current && s.current && c.current && E.current) {
                                            if (0 === Math.round(u))
                                                return o.current.classList.add(Qu), void s.current.classList.remove(Qu);
                                            if (
                                                ((e = c.current),
                                                (t = E.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(Qu), void s.current.classList.add(Qu);
                                            var e, t;
                                            o.current.classList.remove(Qu), s.current.classList.remove(Qu);
                                        }
                                    })(A);
                            }),
                            m = Cu(() => {
                                te(u, () => {
                                    C(), _();
                                });
                            });
                        (0, a.useEffect)(() => Du(m)),
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    te(u, () => {
                                        _();
                                    });
                                };
                                let t = Ju;
                                const r = () => {
                                    t(), (t = Du(m));
                                };
                                return (
                                    u.events.on('recalculateContent', m),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            u.events.off('recalculateContent', m),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', r);
                                    }
                                );
                            }, [u]),
                            (0, a.useEffect)(() => {
                                if (!D.pending) return;
                                const e = l.O.client.events.mouse.up(() => {
                                        B(ue);
                                    }),
                                    t = l.O.client.events.mouse.move(([e]) => {
                                        te(u, (t) => {
                                            const n = c.current,
                                                a = E.current,
                                                i = u.getContainerSize();
                                            if (!n || !a || !i) return;
                                            const o = e.screenY - D.offset - n.getBoundingClientRect().y,
                                                l = (o / n.offsetHeight) * i;
                                            u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: l });
                                        });
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, D.offset, D.pending, r, B]);
                        const g = _u((e) => u.applyStepTo(e), A, [u]),
                            h = g[0],
                            p = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const v = (u) => {
                            u.target.classList.contains(Qu) || au('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: f()(ju, e.base), ref: n, onWheel: u.handleMouseWheel },
                            i().createElement('div', {
                                className: f()(qu, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Qu) || 0 !== u.button || (au('play'), h(vu.Next));
                                },
                                ref: o,
                                onMouseEnter: v,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: f()(Ku, e.track),
                                    onMouseDown: (e) => {
                                        const r = E.current;
                                        if (r && 0 === e.button)
                                            if ((au('play'), e.target === r))
                                                B({ pending: !0, offset: e.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    E.current &&
                                                        te(u, (r) => {
                                                            if (!r) return;
                                                            const n = t(u),
                                                                a = u.clampPosition(r, r.scrollTop + n * e);
                                                            u.applyScroll(a);
                                                        });
                                                })(e.screenY > r.getBoundingClientRect().y ? vu.Prev : vu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                i().createElement('div', { ref: E, className: f()(Yu, e.thumb) }),
                                i().createElement('div', { className: f()(Zu, e.rail) }),
                            ),
                            i().createElement('div', {
                                className: f()(Xu, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Qu) || 0 !== u.button || (au('play'), h(vu.Prev));
                                },
                                onMouseUp: p,
                                ref: s,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    ae = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ie = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: o,
                        scrollClassNames: l,
                        getStepByRailClick: s,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: f()(ae.base, u.base) });
                            }, [r]),
                            A = (0, a.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return i().createElement(
                            'div',
                            { className: f()(ae.defaultScroll, t), onWheel: e.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: f()(ae.area, n) },
                                i().createElement(oe, { className: o, classNames: l, api: A }, u),
                            ),
                            i().createElement(ne, { getStepByRailClick: s, api: e, onDrag: c, classNames: E }),
                        );
                    },
                    oe = ({ className: u, classNames: e, children: t, api: r }) => (
                        (0, a.useEffect)(() => Du(r.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: f()(ae.base, u), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: f()(ae.content, null == e ? void 0 : e.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                oe.Default = ie;
                const le = { Vertical: n, Horizontal: r },
                    se = ({
                        startRowIndex: u,
                        cellHeight: e,
                        paddingTop: t,
                        paddingBottom: r,
                        amount: n,
                        itemsAmountPerRow: a,
                        visibleRowsAmount: i,
                    }) => {
                        const o = Math.ceil(n / a) * e,
                            l = i * e,
                            s = u * e;
                        return { paddingTop: `${s + t}rem`, paddingBottom: `${Math.max(o - s - l, 0) + r}rem` };
                    },
                    ce = (u) => {
                        const e = u.className,
                            t = u.children,
                            r = u.itemsAmountPerRow,
                            n = u.visibleRowsAmount,
                            a = u.startRowIndex,
                            o = u.amount,
                            l = a * r,
                            s = Math.min(n * r, o - l);
                        return i().createElement(
                            'div',
                            { className: e, style: se(u) },
                            ((u, e) => {
                                const t = [];
                                for (let r = 0; r < u; r++) t.push(e(r));
                                return t;
                            })(s, (u) => t(l + u)),
                        );
                    },
                    Ee = 'VirtualGrid_base_52',
                    Ae = ({
                        amount: u,
                        cellWidth: e,
                        cellHeight: t,
                        children: r,
                        api: n,
                        classNames: o,
                        preloadedRows: s = 1,
                        paddingTop: c = 0,
                        paddingBottom: E = 0,
                    }) => {
                        const A = n.scrollApi,
                            F = (0, a.useRef)(0),
                            D = (0, a.useState)(0),
                            d = D[0],
                            B = D[1],
                            C = (0, a.useState)(null),
                            _ = C[0],
                            m = C[1],
                            g = (0, a.useState)(null),
                            h = g[0],
                            p = g[1];
                        return (
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    if (!_) return;
                                    const r = Math.floor((l.O.view.pxToRem(e.value.scrollPosition) - c) / t + 1),
                                        a = Math.ceil(u / _),
                                        i = Math.max(0, Math.min(r - s, a));
                                    B(i), n.startRowIndexChanged(i);
                                };
                                return A.events.on('change', e), () => A.events.off('change', e);
                            }, [n, A, t, c, _, u, s]),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                        if (A.contentRef.current) {
                                            const u = getComputedStyle(A.contentRef.current),
                                                r = A.contentRef.current.getBoundingClientRect(),
                                                a =
                                                    l.O.view.pxToRem(r.width) -
                                                    (parseFloat(u.paddingLeft) + parseFloat(u.paddingRight)),
                                                i = Math.floor(a / e),
                                                o = Math.ceil(l.O.view.pxToRem(r.height) / t) + 2 * s;
                                            (F.current = i), m(i), p(o), n.layoutCalculated(i, o);
                                        }
                                    },
                                    r = () => {
                                        const e = F.current;
                                        u(), n.scrollToIndex(d * e);
                                    };
                                return (
                                    A.events.on('recalculateContent', u),
                                    A.events.on('resizeHandled', r),
                                    () => {
                                        A.events.off('recalculateContent', u), A.events.off('resizeHandled', r);
                                    }
                                );
                            }, [n, A, t, e, s, d]),
                            (0, a.useEffect)(() => {
                                const u = (u, e = !0) => {
                                    _ && A.applyScroll(Math.floor(u / _) * t + c, { immediate: e });
                                };
                                return n.events.on('scrollToIndex', u), () => n.events.off('scrollToIndex', u);
                            }, [n, t, _, c, A]),
                            i().createElement(
                                le.Vertical.Default,
                                {
                                    api: A,
                                    className: null == o ? void 0 : o.scroll,
                                    areaClassName: null == o ? void 0 : o.areaClassName,
                                    scrollClassName: null == o ? void 0 : o.scrollClassName,
                                    scrollClassNames: {
                                        content: null == o ? void 0 : o.content,
                                        wrapper: null == o ? void 0 : o.wrapper,
                                    },
                                },
                                null !== _ &&
                                    null !== h &&
                                    i().createElement(
                                        ce,
                                        {
                                            className: f()(Ee, null == o ? void 0 : o.inner),
                                            paddingBottom: E,
                                            paddingTop: c,
                                            amount: u,
                                            itemsAmountPerRow: _,
                                            visibleRowsAmount: h,
                                            startRowIndex: d,
                                            cellHeight: t,
                                        },
                                        r,
                                    ),
                            )
                        );
                    },
                    Fe = (u, e = I.B3.INTEGRAL) => I.Z5.getNumberFormat(u, e),
                    De = 'ExchangeRateListItem_base_fb',
                    de = 'ExchangeRateListItem_title_38',
                    Be = 'ExchangeRateListItem_limit_85',
                    Ce = 'ExchangeRateListItem_limitIcon_6b',
                    _e = 'ExchangeRateListItem_limitIcon__credits_7b',
                    me = 'ExchangeRateListItem_limitIcon__freeXP_e4',
                    ge = 'ExchangeRateListItem_limitDivider_47',
                    he = 'ExchangeRateListItem_exceededValue_5b',
                    fe = 'ExchangeRateListItem_rates_e8',
                    pe = 'ExchangeRateListItem_equal_9d',
                    ve = ({
                        index: u,
                        amount: e,
                        wholeAmount: t,
                        rate: r,
                        currencyTypeFrom: n,
                        currencyTypeTo: a,
                        exceeded: o,
                    }) => {
                        const l = a === G.credits ? _e : me,
                            s =
                                n === G.gold
                                    ? { from: r.goldRateValue, to: r.resourceRateValue }
                                    : { from: r.resourceRateValue, to: r.goldRateValue };
                        return i().createElement(
                            'div',
                            { className: De },
                            i().createElement(
                                'div',
                                { className: de },
                                i().createElement(nu, {
                                    text: R.strings.personal_exchange_rates.allPersonalExchanges.content.title(u + 1),
                                    binding: { index: u + 1 },
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: Be },
                                i().createElement('div', { className: f()(Ce, l) }),
                                i().createElement('span', { className: f()(o && he) }, Fe(e)),
                                i().createElement('span', { className: ge }, '/'),
                                i().createElement('span', null, Fe(t)),
                            ),
                            i().createElement(
                                'div',
                                { className: fe },
                                i().createElement($, { size: 'small', type: n, value: s.from }),
                                i().createElement('span', { className: pe }, '='),
                                i().createElement($, { size: 'small', type: a, value: s.to }),
                            ),
                        );
                    };
                function be() {
                    return !1;
                }
                console.log;
                var we = t(174);
                function xe(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return ye(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ye(u, e);
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
                function ye(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const Le = (u) => (0 === u ? window : window.subViews.get(u));
                const Se = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: n, children: o, mocks: s }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, r, n) => {
                                        var a;
                                        const i = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = Le,
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
                                                const i = (u) => {
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
                                                        const o = 'string' == typeof a ? `${r}.${a}` : r,
                                                            s = l.O.view.addModelObserver(o, e, !0);
                                                        return n.set(s, t), u && t(i(a)), s;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (u, e) => {
                                                        const t = i(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = i(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = xe(n.keys()); !(u = t()).done; ) a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            o =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(u)) : o.readByPath(u),
                                            E = (u) => c.current.push(u),
                                            A = u({
                                                mode: t,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const r = null != e ? e : s(u),
                                                            n = we.LO.box(r, { equals: be });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, we.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const r = null != e ? e : s(u),
                                                            n = we.LO.box(r, { equals: be });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, we.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const r = s(e);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (u, e) => ((u[e] = we.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, we.aD)((e) => {
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
                                                                    (u, [e, t]) => ((u[t] = we.LO.box(r[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, we.aD)((u) => {
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
                                            F = { mode: t, model: A, externalModel: o, cleanup: E };
                                        return {
                                            model: A,
                                            controls: 'mocks' === t && n ? n.controls(F) : e(F),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    A = (0, a.useRef)(!1),
                                    F = (0, a.useState)(r),
                                    D = F[0],
                                    d = F[1],
                                    B = (0, a.useState)(() => E(r, n, s)),
                                    C = B[0],
                                    _ = B[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        A.current ? _(E(D, n, s)) : (A.current = !0);
                                    }, [s, D, n]),
                                    (0, a.useEffect)(() => {
                                        d(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            C.externalModel.dispose(), c.current.forEach((u) => u());
                                        },
                                        [C],
                                    ),
                                    i().createElement(t.Provider, { value: C }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => ({
                            root: u.object(),
                            defaultExchangeRate: u.object('defaultExchangeRate'),
                            commonExchangeRate: u.object('commonExchangeRate'),
                            discounts: u.array('discounts'),
                        }),
                        ({ externalModel: u }) => ({ close: u.createCallbackNoArgs('onClose') }),
                    ),
                    Re = Se[0],
                    Me = Se[1],
                    Te = {
                        base: 'App_base_6f',
                        fadeIn: 'App_fadeIn_12',
                        background: 'App_background_48',
                        close: 'App_close_fc',
                        container: 'App_container_25',
                        gridWrapper: 'App_gridWrapper_1d',
                        header: 'App_header_bb',
                        units: 'App_units_13',
                        notification: 'App_notification_5c',
                        notificationIcon: 'App_notificationIcon_93',
                        divider: 'App_divider_be',
                        footer: 'App_footer_e8',
                        scroll: 'App_scroll_fc',
                        mr10: 'App_mr10_91',
                        rates: 'App_rates_bc',
                        equal: 'App_equal_12',
                    },
                    Oe = R.strings.personal_exchange_rates.allPersonalExchanges,
                    Pe = (0, Fu.Pi)(() => {
                        const u = Me(),
                            e = u.model,
                            t = u.controls,
                            r = (() => {
                                const u = le.Vertical.useVerticalScrollApi(),
                                    e = hu(),
                                    t = (0, a.useCallback)((u, t = !0) => e.trigger('scrollToIndex', u, t), [e]),
                                    r = (0, a.useCallback)((u, t) => e.trigger('layoutCalculated', u, t), [e]),
                                    n = (0, a.useCallback)((u) => e.trigger('startRowIndexChanged', u), [e]);
                                return (0, a.useMemo)(
                                    () => ({
                                        scrollToIndex: t,
                                        layoutCalculated: r,
                                        startRowIndexChanged: n,
                                        scrollApi: u,
                                        events: { off: e.off, on: e.on },
                                    }),
                                    [t, r, n, u, e.off, e.on],
                                );
                            })();
                        var n;
                        (n = t.close), Au(cu.n.ESCAPE, n);
                        const o = e.root.get(),
                            l = o.currencyTypeFrom,
                            s = o.currencyTypeTo,
                            c = o.allDiscountsLimitsAmount,
                            E =
                                l === G.gold
                                    ? {
                                          from: e.defaultExchangeRate.get().goldRateValue,
                                          to: e.defaultExchangeRate.get().resourceRateValue,
                                      }
                                    : {
                                          from: e.defaultExchangeRate.get().resourceRateValue,
                                          to: e.defaultExchangeRate.get().goldRateValue,
                                      },
                            A =
                                l === G.gold
                                    ? {
                                          from: e.commonExchangeRate.get().goldRateValue,
                                          to: e.commonExchangeRate.get().resourceRateValue,
                                      }
                                    : {
                                          from: e.commonExchangeRate.get().resourceRateValue,
                                          to: e.commonExchangeRate.get().goldRateValue,
                                      };
                        return i().createElement(
                            'div',
                            { className: Te.base },
                            i().createElement('div', { className: Te.background }),
                            i().createElement(su, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: t.close,
                                classNames: { base: Te.close },
                            }),
                            i().createElement(
                                'div',
                                { className: f()(Te.container, Te.containerExceeded) },
                                i().createElement(
                                    'div',
                                    { className: Te.header },
                                    i().createElement(nu, {
                                        text: Oe.header.title(),
                                        binding: {
                                            value: i().createElement(
                                                'div',
                                                { className: Te.units },
                                                Fe(Math.max(c, 0)),
                                            ),
                                        },
                                    }),
                                    i().createElement(nu, {
                                        text: Oe.header.subTitle(),
                                        binding: {
                                            value: i().createElement(
                                                'div',
                                                { className: Te.units },
                                                Fe(e.discounts.get().length),
                                            ),
                                        },
                                    }),
                                ),
                                i().createElement('div', { className: Te.divider }),
                                i().createElement(
                                    'div',
                                    { className: Te.gridWrapper },
                                    i().createElement(
                                        Ae,
                                        {
                                            amount: e.discounts.get().length,
                                            cellWidth: 350,
                                            cellHeight: 90,
                                            paddingTop: 20,
                                            paddingBottom: 20,
                                            api: r,
                                            classNames: { scroll: Te.scroll },
                                        },
                                        (u) => {
                                            var t;
                                            const r = e.discounts.get()[u].value,
                                                n = null == (t = e.discounts.get()[u + 1]) ? void 0 : t.value;
                                            return i().createElement(ve, {
                                                key: u,
                                                index: u,
                                                rate: r.exchangeRate,
                                                amount: r.selectedAmountOfDiscount,
                                                wholeAmount: r.wholeAmountOfDiscount,
                                                exceeded: n
                                                    ? n.selectedAmountOfDiscount > 0
                                                    : r.selectedAmountOfDiscount > r.wholeAmountOfDiscount,
                                                currencyTypeFrom: l,
                                                currencyTypeTo: s,
                                            });
                                        },
                                    ),
                                ),
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: Te.divider }),
                                    i().createElement(
                                        'div',
                                        { className: Te.notification },
                                        i().createElement('div', { className: Te.notificationIcon }),
                                        i().createElement('div', null, Oe.exceeded()),
                                    ),
                                ),
                                i().createElement('div', { className: Te.divider }),
                                i().createElement(
                                    'div',
                                    { className: Te.footer },
                                    i().createElement(
                                        'div',
                                        { className: Te.rates },
                                        i().createElement('div', { className: Te.mr10 }, Oe.footer.title()),
                                        i().createElement($, { size: 'small', type: l, value: A.from }),
                                        i().createElement('span', { className: Te.equal }, '='),
                                        i().createElement($, { size: 'small', type: s, value: A.to }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: Te.rates },
                                        i().createElement('div', { className: Te.mr10 }, Oe.footer.subTitle()),
                                        i().createElement($, { size: 'small', type: l, value: E.from }),
                                        i().createElement('span', { className: Te.equal }, '='),
                                        i().createElement($, { size: 'small', type: s, value: E.to }),
                                    ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    W().render(
                        i().createElement(N, null, i().createElement(Re, null, i().createElement(Pe, null))),
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
        (__webpack_require__.j = 364),
        (() => {
            var u = { 364: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [674], () => __webpack_require__(86));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
