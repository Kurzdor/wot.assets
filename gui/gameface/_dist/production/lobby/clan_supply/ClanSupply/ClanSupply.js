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
            326: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => ue });
                var a = {};
                t.r(a),
                    t.d(a, { mouse: () => m, off: () => C, on: () => E, onResize: () => l, onScaleUpdated: () => c });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => a,
                        getMouseGlobalPosition: () => F,
                        getSize: () => g,
                        graphicsQuality: () => D,
                        playSound: () => _,
                        setRTPC: () => A,
                    });
                var n = {};
                t.r(n), t.d(n, { getBgUrl: () => f, getTextureUrl: () => b });
                var s = {};
                function o(e) {
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
                t.r(s),
                    t.d(s, {
                        addModelObserver: () => k,
                        addPreloadTexture: () => x,
                        children: () => n,
                        displayStatus: () => v.W,
                        displayStatusIs: () => K,
                        events: () => S,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => G,
                        getBrowserTexturePath: () => O,
                        getDisplayStatus: () => X,
                        getScale: () => $,
                        getSize: () => H,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => Y,
                        isFocused: () => j,
                        pxToRem: () => W,
                        remToPx: () => q,
                        resize: () => V,
                        sendEvent: () => L,
                        setAnimateWindow: () => z,
                        setEventHandled: () => Z,
                        setInputPaddingsRem: () => N,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => ee,
                    });
                const l = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    E = (e, u) => engine.on(e, u),
                    C = (e, u) => engine.off(e, u),
                    d = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
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
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const n = `mouse${u}`,
                                        s = d[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, o),
                                        a(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(n, o),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
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
                function _(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function A(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const D = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    B = Object.keys(p).reduce((e, u) => ((e[u] = () => _(p[u])), e), {}),
                    h = { play: Object.assign({}, B, { sound: _ }), setRTPC: A };
                function b(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function f(e, u, t) {
                    return `url(${b(e, u, t)})`;
                }
                var v = t(112);
                const S = {
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
                    w = ['args'];
                const M = 2,
                    R = 16,
                    y = 32,
                    P = 64,
                    T = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, w);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    L = {
                        close(e) {
                            T('popover' === e ? M : y);
                        },
                        minimize() {
                            T(P);
                        },
                        move(e) {
                            T(R, { isMouseEvent: !0, on: e });
                        },
                    };
                function x(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function O(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function k(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function H(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function U(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: q(u.x), y: q(u.y) };
                }
                function G() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function $() {
                    return viewEnv.getScale();
                }
                function W(e) {
                    return viewEnv.pxToRem(e);
                }
                function q(e) {
                    return viewEnv.remToPx(e);
                }
                function z(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function j() {
                    return viewEnv.isFocused();
                }
                function Z() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function Q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function X() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(v.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === v.W[u]), e),
                        {},
                    ),
                    J = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    ee = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : S.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ue = { view: s, client: r, sound: h };
            },
            112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            521: (e, u, t) => {
                'use strict';
                let a, r;
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
                    })(r || (r = {}));
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(326);
                class r {
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
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = a.O.view.addModelObserver(e, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                r.__instance = void 0;
                const n = r;
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
                t.d(u, { Sw: () => n.Z, B3: () => i, Z5: () => s.Z5, B0: () => o, ry: () => g });
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
                const r = a;
                var n = t(358);
                var s = t(613);
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var C = t(521),
                    d = t(326);
                const m = ['args'];
                function _(e, u, t, a, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(a, r);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (a, r) {
                                        var n = e.apply(u, t);
                                        function s(e) {
                                            _(n, a, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            _(n, a, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    F = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, m);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    D = () => F(o.CLOSE),
                    p = (e, u) => {
                        e.keyCode === C.n.ESCAPE && u();
                    };
                var B = t(572);
                const h = r.instance,
                    b = {
                        DataTracker: n.Z,
                        ViewModel: B.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => F(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => F(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            F(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const s = d.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                C = i.height,
                                m = {
                                    x: d.O.view.pxToRem(l) + s.x,
                                    y: d.O.view.pxToRem(c) + s.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(C),
                                };
                            F(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: A(m),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, D);
                        },
                        handleViewEvent: F,
                        onBindingsReady: g,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const r = Object.prototype.toString.call(u[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < r.length; u++) t[a].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = b;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => n, Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    n = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            536: (e, u, t) => {
                'use strict';
                var a = t(179),
                    r = t.n(a);
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var s = t(326);
                const o = {
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
                        r = (function (e, u) {
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
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
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
                const c = s.O.client.getSize('rem'),
                    E = c.width,
                    C = c.height,
                    d = Object.assign({ width: E, height: C }, l(E, C, o)),
                    m = (0, a.createContext)(d),
                    _ = ['children'];
                const A = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, _);
                    const r = (0, a.useContext)(m),
                        s = r.extraLarge,
                        o = r.large,
                        i = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        E = r.extraLargeWidth,
                        C = r.largeWidth,
                        d = r.mediumWidth,
                        A = r.smallWidth,
                        g = r.extraSmallWidth,
                        F = r.extraLargeHeight,
                        D = r.largeHeight,
                        p = r.mediumHeight,
                        B = r.smallHeight,
                        h = r.extraSmallHeight,
                        b = { extraLarge: F, large: D, medium: p, small: B, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && o) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return n(u, t, b);
                        if (t.largeWidth && C) return n(u, t, b);
                        if (t.mediumWidth && d) return n(u, t, b);
                        if (t.smallWidth && A) return n(u, t, b);
                        if (t.extraSmallWidth && g) return n(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && F) return u;
                            if (t.largeHeight && D) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && B) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                };
                A.defaultProps = {
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
                (0, a.memo)(A);
                const g = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    F = ({ children: e }) => {
                        const u = (0, a.useContext)(m),
                            t = (0, a.useState)(u),
                            n = t[0],
                            i = t[1],
                            c = (0, a.useCallback)((e, u) => {
                                const t = s.O.view.pxToRem(e),
                                    a = s.O.view.pxToRem(u);
                                i(Object.assign({ width: t, height: a }, l(t, a, o)));
                            }, []),
                            E = (0, a.useCallback)(() => {
                                const e = s.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        g(() => {
                            s.O.client.events.on('clientResized', c), s.O.client.events.on('self.onScaleUpdated', E);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    s.O.client.events.off('clientResized', c),
                                        s.O.client.events.off('self.onScaleUpdated', E);
                                },
                                [c, E],
                            );
                        const C = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return r().createElement(m.Provider, { value: C }, e);
                    };
                var D = t(483),
                    p = t.n(D),
                    B = t(926),
                    h = t.n(B);
                let b, f, v;
                !(function (e) {
                    (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const S = () => {
                        const e = (0, a.useContext)(m),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
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
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case e.largeWidth:
                                        return f.Large;
                                    case e.mediumWidth:
                                        return f.Medium;
                                    case e.smallWidth:
                                        return f.Small;
                                    case e.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case e.largeHeight:
                                        return v.Large;
                                    case e.mediumHeight:
                                        return v.Medium;
                                    case e.smallHeight:
                                        return v.Small;
                                    case e.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    w = ['children', 'className'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const y = {
                        [f.ExtraSmall]: '',
                        [f.Small]: h().SMALL_WIDTH,
                        [f.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [f.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_HEIGHT,
                        [v.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [v.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL,
                        [b.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [b.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [b.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, w);
                        const n = S(),
                            s = n.mediaWidth,
                            o = n.mediaHeight,
                            i = n.mediaSize;
                        return r().createElement('div', M({ className: p()(t, y[s], P[o], T[i]) }, a), u);
                    },
                    x = ['children'];
                const N = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, x);
                    return r().createElement(F, null, r().createElement(L, t, u));
                };
                var O = t(493),
                    k = t.n(O),
                    I = t(515),
                    H = t(521),
                    V = t(916);
                const U = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function G(e = H.n.NONE, u = U, t = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== H.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!r && s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, r]);
                }
                function $(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const W = {
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
                    q = [
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
                function z() {
                    return (
                        (z =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        z.apply(this, arguments)
                    );
                }
                class j extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && $(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && $(this.props.soundClick);
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
                            n = e.side,
                            s = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            C =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, q)),
                            d = p()(W.base, W[`base__${s}`], W[`base__${n}`], null == o ? void 0 : o.base),
                            m = p()(W.icon, W[`icon__${s}`], W[`icon__${n}`], null == o ? void 0 : o.icon),
                            _ = p()(W.glow, null == o ? void 0 : o.glow),
                            A = p()(W.caption, W[`caption__${s}`], null == o ? void 0 : o.caption),
                            g = p()(W.goto, null == o ? void 0 : o.goto);
                        return r().createElement(
                            'div',
                            z(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                C,
                            ),
                            'info' !== s && r().createElement('div', { className: W.shine }),
                            r().createElement('div', { className: m }, r().createElement('div', { className: _ })),
                            r().createElement('div', { className: A }, u),
                            a && r().createElement('div', { className: g }, a),
                        );
                    }
                }
                j.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Z = [
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
                function Y(e) {
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
                const Q = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: V.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    X = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            C = void 0 !== E && E,
                            d = e.decoratorId,
                            m = void 0 === d ? 0 : d,
                            _ = e.isEnabled,
                            A = void 0 === _ || _,
                            g = e.targetId,
                            F = void 0 === g ? 0 : g,
                            D = e.onShow,
                            p = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Z);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(
                                () =>
                                    F ||
                                    ((e = 1) => {
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
                                    })().resId,
                                [F],
                            ),
                            f = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Q(t, m, { isMouseEvent: !0, on: !0, arguments: Y(r) }, b),
                                    D && D(),
                                    (h.current.isVisible = !0));
                            }, [t, m, r, b, D]),
                            v = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Q(t, m, { on: !1 }, b),
                                        h.current.isVisible && p && p(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, m, b, p]),
                            S = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === A && v();
                            }, [A, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return A
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      n && n(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              v(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === C && v(), null == i || i(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === C && v(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : u;
                        var w;
                    },
                    K = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                const ee = R.views.common.tooltip_window.simple_tooltip_content,
                    ue = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            s = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, K);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: n, note: s, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, s, i]);
                        return r().createElement(
                            X,
                            J(
                                {
                                    contentId:
                                        ((E = null == i ? void 0 : i.hasHtmlContent),
                                        E ? ee.SimpleTooltipHtmlContent('resId') : ee.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function te() {}
                function ae() {
                    return !1;
                }
                console.log;
                var re = t(174);
                function ne(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return se(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return se(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function se(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const oe = (e) => (0 === e ? window : window.subViews.get(e));
                const ie = () => (e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: o, children: i, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, a, r) => {
                                        var n;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = oe,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const r = t(u),
                                                        n = a.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const i = 'string' == typeof n ? `${a}.${n}` : a,
                                                            l = s.O.view.addModelObserver(i, u, !0);
                                                        return r.set(l, t), e && t(o(n)), l;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, u) => {
                                                        const t = o(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = o(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = ne(r.keys()); !(e = t()).done; ) n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(a),
                                            i =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            C = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            r = re.LO.box(a, { equals: ae });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, re.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            r = re.LO.box(a, { equals: ae });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, re.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const a = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = re.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, re.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                n = Object.entries(r),
                                                                s = n.reduce(
                                                                    (e, [u, t]) => ((e[t] = re.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, re.aD)((e) => {
                                                                            n.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            d = { mode: t, model: C, externalModel: i, cleanup: E };
                                        return {
                                            model: C,
                                            controls: 'mocks' === t && r ? r.controls(d) : u(d),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    C = (0, a.useRef)(!1),
                                    d = (0, a.useState)(n),
                                    m = d[0],
                                    _ = d[1],
                                    A = (0, a.useState)(() => E(n, o, l)),
                                    g = A[0],
                                    F = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        C.current ? F(E(m, o, l)) : (C.current = !0);
                                    }, [l, m, o]),
                                    (0, a.useEffect)(() => {
                                        _(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            g.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [g],
                                    ),
                                    r().createElement(t.Provider, { value: g }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    },
                    le = ie()(
                        ({ observableModel: e }) => {
                            const u = { root: e.object() };
                            return Object.assign({}, u);
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            openInfoPage: e.createCallbackNoArgs('onInfoPageOpen'),
                        }),
                    ),
                    ce = le[0],
                    Ee = le[1];
                var Ce = t(946);
                function de(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const me = de;
                function _e(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function Ae(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let a = t;
                    for (let t = 0; t < e.length; t++) {
                        a = u(a, me(e, t), t, e);
                    }
                    return a;
                }
                let ge, Fe;
                !(function (e) {
                    (e[(e.Progression = 0)] = 'Progression'), (e[(e.Quests = 1)] = 'Quests');
                })(ge || (ge = {})),
                    (function (e) {
                        (e[(e.Available = 0)] = 'Available'),
                            (e[(e.Disabled = 1)] = 'Disabled'),
                            (e[(e.Opened = 2)] = 'Opened');
                    })(Fe || (Fe = {}));
                const De = { [ge.Progression]: 'progression', [ge.Quests]: 'quests' },
                    pe = { [Fe.Available]: 'available', [Fe.Disabled]: 'disabled', [Fe.Opened]: 'opened' },
                    Be = R.images.gui.maps.icons.clanSupply.tabs,
                    he = (e, u) => {
                        const t = De[e];
                        return u ? `${Be.$dyn(t)}` : `${Be.small.$dyn(t)}`;
                    },
                    be = ie()(
                        ({ observableModel: e }) => {
                            const u = { items: e.array('items') },
                                t = (0, Ce.Om)(
                                    (e) => [
                                        {
                                            id: 0,
                                            items: _e(u.items.get(), ({ id: u, hasNotification: t }) =>
                                                Object.assign(
                                                    { id: u, icon: he(u, e) },
                                                    t && { notification: { type: 'dot' } },
                                                ),
                                            ),
                                        },
                                    ],
                                    { equals: ae },
                                );
                            return Object.assign({}, u, { computes: { tabs: t } });
                        },
                        ({ externalModel: e }) => ({
                            changeSidebarTab: e.createCallback((e) => ({ tabId: e }), 'onSideBarTabChange'),
                        }),
                    ),
                    fe = be[0],
                    ve = be[1],
                    Se = ie()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {},
                                    e.primitives(['status', 'selectedStageID', 'isCompleted', 'isMainRewardAvailable']),
                                    {
                                        stages: e.array('stages'),
                                        stageInfo: e.object('stageInfo'),
                                        vehicleInfo: e.object('vehicleInfo'),
                                        rewards: e.array('stageInfo.rewards'),
                                    },
                                ),
                                t = (0, Ce.Om)(
                                    () => {
                                        const e = u.stages.get();
                                        if (!e) throw new Error('stages array was not found');
                                        return _e(e, (e) => Object.assign({}, e));
                                    },
                                    { equals: ae },
                                ),
                                a = (0, Ce.Om)(() => Ae(t(), (e, u) => ((e[u.id] = u), e), {})),
                                r = (0, Ce.Om)(() => {
                                    const e = Object.values(a()).find((e) => e.status === Fe.Disabled && e.isPremium);
                                    return e ? [e.id, e.id + 1] : [];
                                });
                            return Object.assign(
                                { computes: { savedStages: t, formattedStages: a, nextDisabledPremiumStages: r } },
                                u,
                            );
                        },
                        ({ externalModel: e }) => ({
                            openPreview: e.createCallbackNoArgs('onPreviewClick'),
                            openStage: e.createCallback((e) => ({ id: e }), 'onBuyStage'),
                            selectStage: e.createCallback((e) => ({ id: e }), 'onSelectStage'),
                            refresh: e.createCallbackNoArgs('onRefresh'),
                            stageInfoRefresh: e.createCallbackNoArgs('stageInfo.onRefresh'),
                        }),
                    ),
                    we = Se[0],
                    Me = Se[1];
                let Re;
                !(function (e) {
                    (e[(e.PENDING = 0)] = 'PENDING'), (e[(e.ERROR = 1)] = 'ERROR'), (e[(e.LOADED = 2)] = 'LOADED');
                })(Re || (Re = {}));
                const ye = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Pe = (e) => {
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
                var Te = t(112);
                const Le = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                const Ne = (0, a.forwardRef)(function (e, u) {
                        let t = e.src,
                            n = e.className,
                            o = e.autoplay,
                            i = void 0 !== o && o,
                            l = e.style,
                            c = e.loop,
                            E = void 0 !== c && c,
                            C = e.isPrebufferKeyframes,
                            d = e.keyframesNameConfig,
                            m = e.onClick,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Le);
                        const A = u,
                            g = (0, a.useRef)(null);
                        var F;
                        return (
                            (F = () =>
                                s.O.view.events.onDisplayChanged((e, u) => {
                                    var t, a;
                                    u === Te.W.hidden && (null == (t = g.current) || t.pause()),
                                        u === Te.W.shown && (null == (a = g.current) || a.play());
                                })),
                            (0, a.useEffect)(F, []),
                            (0, a.useEffect)(
                                () =>
                                    Pe(() => {
                                        const e = g.current;
                                        if (!A || !e || !C)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const u = e.cohGetKeyframeTimestamps();
                                        u.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              u.map((u) => {
                                                  null == e || e.cohPrebufferKeyframe(u);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [C, A],
                            ),
                            (0, a.useEffect)(() => {
                                if (A && g.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: te,
                                        },
                                        u = () => {
                                            let u = 0;
                                            const t = (function (e) {
                                                    let u = 0;
                                                    return [
                                                        function t() {
                                                            e(), (u = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(u);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (g.current) {
                                                        const t = g.current,
                                                            a = t.currentTime,
                                                            r = t.duration;
                                                        if (
                                                            (u !== a &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: a, duration: r }),
                                                                ),
                                                                (u = a)),
                                                            g.current.paused || !A || !C)
                                                        )
                                                            return;
                                                        const n = g.current.cohGetKeyframeTimestamps();
                                                        n.forEach((u, t) => {
                                                            a > n[t] - 0.02 &&
                                                                a < n[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const a = Object.keys(null != d ? d : {})[t];
                                                                    return e({
                                                                        time: u,
                                                                        name: `${d ? a : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                a = t[0],
                                                r = t[1];
                                            return a(), r;
                                        };
                                    e.changeTimeLoop = u();
                                    const t = (u) => (
                                            e.changeTimeHandlers.push(u),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    a = t.indexOf(u);
                                                a < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(a, 1);
                                            }
                                        ),
                                        a = (u) => (
                                            e.changeKeyframeHandlers.push(u),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    a = t.indexOf(u);
                                                a < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(a, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.currentTime;
                                        },
                                        n = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.duration;
                                        },
                                        s = (e) => {
                                            g.current && (g.current.currentTime = ye(0, g.current.duration, e));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.play();
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            i(), s(0);
                                        },
                                        c = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = g.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        E = (e) => {
                                            s(e), o();
                                        },
                                        m = (e) => {
                                            s(e), i();
                                        },
                                        _ = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        F = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = g.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = g.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        D = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = g.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = g.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        };
                                    return (
                                        (A.current = {
                                            on: F,
                                            off: D,
                                            play: o,
                                            pause: i,
                                            stop: l,
                                            cleanup: _,
                                            getCurrentTime: r,
                                            getDuration: n,
                                            getCachedKeyframes: c,
                                            goToAndPlay: E,
                                            goToAndStop: m,
                                            setCurrentTime: s,
                                            domRef: g.current,
                                            onChangeTime: t,
                                            onKeyframes: a,
                                        }),
                                        () => {
                                            _(), (A.current = null);
                                        }
                                    );
                                }
                            }, [d, A, C]),
                            (0, a.useEffect)(() => {
                                g.current && i && g.current.play();
                            }, [i, E]),
                            (0, a.useEffect)(() => {
                                if (g.current)
                                    return () => {
                                        g.current && g.current.pause();
                                    };
                            }, []),
                            r().createElement(
                                'video',
                                xe({ src: t, className: n, style: l, loop: E, ref: g, onClick: m }, _),
                            )
                        );
                    }),
                    Oe = (0, a.memo)(Ne),
                    ke = 'VideoBack_base_e2',
                    Ie = 'VideoBack_video_ac',
                    He = (e, u) => {
                        const t = e.$dyn(u);
                        if ('string' == typeof t) return t;
                        throw new Error(`Video filename ${u} is invalid`);
                    },
                    Ve = () => {
                        const e = S().mediaWidth;
                        return r().createElement(
                            'div',
                            { className: ke, key: e },
                            r().createElement(Oe, {
                                className: Ie,
                                src: He(R.videos.clan_supply, `clouds_${e}`),
                                loop: !0,
                                autoplay: !0,
                            }),
                        );
                    },
                    Ue = 'Background_base_f5',
                    Ge = 'Background_base__2x_1b',
                    $e = 'Background_base__shaded_0f',
                    We = 'Background_shadow_ba',
                    qe = 'Background_videoBack_d9',
                    ze = ({ isShaded: e = !1, withVideo: u = !1 }) => {
                        const t = 2 === s.O.view.getScale();
                        return r().createElement(
                            'div',
                            { className: p()(Ue, t && Ge, e && $e) },
                            e && r().createElement('div', { className: We }),
                            u && r().createElement('div', { className: qe }, r().createElement(Ve, null)),
                        );
                    };
                var je = t(281);
                let Ze;
                function Ye(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Ze || (Ze = {}));
                const Qe = (e) => e.replace(/&nbsp;/g, ' '),
                    Xe = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Ke = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Je = (e, u, t = Ze.left) => e.split(u).reduce(t === Ze.left ? Xe : Ke, []),
                    eu = (() => {
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
                    uu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    tu = (e, u = Ze.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (uu.includes(t)) return eu(e);
                        if ('ja' === t) {
                            return (0, je.D4)()
                                .parse(e)
                                .map((e) => Qe(e));
                        }
                        return ((e, u = Ze.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = Qe(e);
                            return Je(r, /( )/, u).forEach((e) => (t = t.concat(Je(e, a, Ze.left)))), t;
                        })(e, u);
                    },
                    au = 'FormatText_base_d0',
                    ru = ({ binding: e, text: u = '', classMix: t, alignment: n = Ze.left, formatWithBrackets: s }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const o = s && e ? Ye(u, e) : u;
                        return r().createElement(
                            a.Fragment,
                            null,
                            o.split('\n').map((u, s) =>
                                r().createElement(
                                    'div',
                                    { className: p()(au, t), key: `${u}-${s}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : tu(e, u))))(
                                        u,
                                        n,
                                        e,
                                    ).map((e, u) => r().createElement(a.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    nu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    su = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const ou = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    iu = (e) =>
                        ou
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = su.length - 1; t >= 0; t--)
                                      for (; e >= su[t]; ) (u += nu[t]), (e -= su[t]);
                                  return u;
                              })(e),
                    lu = 'VehicleInfo_base_5e',
                    cu = 'VehicleInfo_type_7b',
                    Eu = (0, I.Pi)(({ isFullName: e = !1, classNames: u }) => {
                        const t = Me().model.vehicleInfo.get(),
                            a = t.tier,
                            n = t.type,
                            s = t.isPremium,
                            o = t.name,
                            i = t.fullName;
                        return r().createElement(
                            'div',
                            { className: p()(lu, null == u ? void 0 : u.base) },
                            iu(a),
                            r().createElement('div', {
                                className: p()(cu, null == u ? void 0 : u.type),
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${((l = n), l.replace(/-/g, '_'))}${s ? '_elite' : ''}`)})`,
                                },
                            }),
                            e ? i : o,
                        );
                        var l;
                    }),
                    Cu = 'Header_base_a9',
                    du = 'Header_heading_ae',
                    mu = 'Header_subheading_9f',
                    _u = 'Header_vehicleType_40',
                    Au = R.strings.clan_supply.progressionPage.header,
                    gu = (0, I.Pi)(() => {
                        const e = Me().model.isCompleted.get();
                        return r().createElement(
                            'div',
                            { className: Cu },
                            r().createElement('div', { className: du }, e ? Au.headingCompleted() : Au.heading()),
                            r().createElement(
                                'div',
                                { className: mu },
                                e
                                    ? r().createElement(ru, {
                                          text: Au.subheadingCompleted(),
                                          binding: {
                                              vehicle: r().createElement(Eu, {
                                                  isFullName: !0,
                                                  classNames: { type: _u },
                                              }),
                                          },
                                      })
                                    : Au.subheading(),
                            ),
                        );
                    }),
                    Fu = {
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
                    };
                let Du, pu;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Du || (Du = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(pu || (pu = {}));
                const Bu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: s,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: C,
                    onMouseUp: d,
                    onMouseLeave: m,
                    onClick: _,
                }) => {
                    const A = (0, a.useRef)(null),
                        g = (0, a.useState)(t),
                        F = g[0],
                        D = g[1],
                        B = (0, a.useState)(!1),
                        h = B[0],
                        b = B[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                F && null !== A.current && !A.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [F]),
                        (0, a.useEffect)(() => {
                            D(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: A,
                                className: p()(
                                    Fu.base,
                                    Fu[`base__${n}`],
                                    s && Fu.base__disabled,
                                    u && Fu[`base__${u}`],
                                    F && Fu.base__focus,
                                    h && Fu.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== i && $(i), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    s || (d && d(e), b(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== l && $(l),
                                        C && C(e),
                                        t && (s || (A.current && (A.current.focus(), D(!0)))),
                                        b(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (m && m(e), b(!1));
                                },
                                onClick: function (e) {
                                    s || (_ && _(e));
                                },
                            },
                            n !== Du.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: Fu.back }),
                                    r().createElement('span', { className: Fu.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: p()(Fu.state, Fu.state__default) },
                                r().createElement('span', { className: Fu.stateDisabled }),
                                r().createElement('span', { className: Fu.stateHighlightHover }),
                                r().createElement('span', { className: Fu.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: Fu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Bu.defaultProps = { type: Du.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const hu = Bu,
                    bu = 'Error_base_94',
                    fu = 'Error_header_c7',
                    vu = 'Error_icon_60',
                    Su = 'Error_heading_7d',
                    wu = 'Error_description_f5',
                    Mu = 'Error_button_84',
                    Ru = ({ heading: e, description: u, reloadButtonText: t, onReloadClick: a }) =>
                        r().createElement(
                            'div',
                            { className: bu },
                            r().createElement(
                                'div',
                                { className: fu },
                                r().createElement('div', { className: vu }),
                                r().createElement('div', { className: Su }, e),
                            ),
                            u && r().createElement('div', { className: wu }, u),
                            r().createElement(hu, { mixClass: Mu, type: 'secondary', onClick: a }, t),
                        ),
                    yu = R.strings.clan_supply.progressionPage.errorScreen,
                    Pu = (0, I.Pi)(() => {
                        const e = Me().controls;
                        return r().createElement(Ru, {
                            heading: yu.heading(),
                            description: yu.description(),
                            reloadButtonText: yu.button.refresh(),
                            onReloadClick: e.refresh,
                        });
                    }),
                    Tu = 'Spinner_base_87',
                    Lu = 'Spinner_caption_cf',
                    xu = 'Spinner_gear_c4',
                    Nu = 'Spinner_logo_bf',
                    Ou = ({ message: e, className: u, classNames: t }) =>
                        r().createElement(
                            'div',
                            { className: p()(Tu, u) },
                            e && r().createElement('div', { className: p()(Lu, null == t ? void 0 : t.caption) }, e),
                            r().createElement('div', { className: p()(xu, null == t ? void 0 : t.gear) }),
                            r().createElement('div', { className: p()(Nu, null == t ? void 0 : t.logo) }),
                        ),
                    ku = 'LoadingScreen_caption_88',
                    Iu = () => {
                        const e = (0, a.useState)(s.O.view.getScale()),
                            u = e[0],
                            t = e[1];
                        return (
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    t(s.O.view.getScale());
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
                    },
                    Hu = {
                        [f.ExtraSmall]: { width: 760, height: 330 },
                        [f.Small]: { width: 870, height: 360 },
                        [f.Medium]: { width: 1020, height: 450 },
                        [f.Large]: { width: 1250, height: 450 },
                        [f.ExtraLarge]: { width: 1500, height: 600 },
                    },
                    Vu = {
                        1: {
                            number: 1,
                            svgPath:
                                'M17.353 17.7729V30H15.1865V21.5249H12.4224V19.873H12.7129C13.6149 19.873 14.3177 19.6683 14.8213 19.2588C15.3249 18.8493 15.6458 18.354 15.7842 17.7729H17.353Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 55, top: 231 },
                                [f.Small]: { left: 101, top: 255 },
                                [f.Medium]: { left: 117, top: 307 },
                                [f.Large]: { left: 146, top: 298 },
                                [f.ExtraLarge]: { left: 144, top: 389 },
                            },
                        },
                        2: {
                            number: 2,
                            svgPath:
                                'M18.5796 30H11.9141V29.3691C11.9141 28.5391 12.0496 27.8086 12.3208 27.1777C12.592 26.5469 12.9157 25.999 13.292 25.5342C13.6683 25.0638 14.0557 24.6626 14.4541 24.3306C14.8525 23.9985 15.1763 23.7052 15.4253 23.4507C15.6909 23.1795 15.904 22.9471 16.0645 22.7534C16.2305 22.5542 16.3577 22.3716 16.4463 22.2056C16.5404 22.034 16.6012 21.868 16.6289 21.7075C16.6566 21.5415 16.6704 21.3561 16.6704 21.1514C16.6704 20.598 16.5625 20.2051 16.3467 19.9727C16.1364 19.7402 15.8403 19.624 15.4585 19.624C15.0711 19.624 14.7695 19.7568 14.5537 20.0225C14.3434 20.2881 14.2383 20.7723 14.2383 21.4751V22.1392H12.0635V21.4253C12.0635 20.8 12.1631 20.2604 12.3623 19.8066C12.5615 19.3473 12.8216 18.9655 13.1426 18.6611C13.4635 18.3568 13.826 18.1299 14.23 17.9805C14.6395 17.8311 15.049 17.7563 15.4585 17.7563C15.9289 17.7563 16.3716 17.8311 16.7866 17.9805C17.2017 18.1299 17.5614 18.3457 17.8657 18.6279C18.1701 18.9102 18.4108 19.2477 18.5879 19.6406C18.765 20.0335 18.8535 20.4735 18.8535 20.9604C18.8535 21.6079 18.7124 22.236 18.4302 22.8447C18.1535 23.4535 17.755 24.0124 17.2349 24.5215C16.9194 24.8314 16.604 25.1219 16.2886 25.3931C15.9731 25.6587 15.6799 25.9382 15.4087 26.2314C15.1375 26.5192 14.9106 26.8153 14.728 27.1196C14.5454 27.424 14.432 27.7643 14.3877 28.1406H18.5796V30Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 129, top: 218 },
                                [f.Small]: { left: 180, top: 240 },
                                [f.Medium]: { left: 215, top: 290 },
                                [f.Large]: { left: 264, top: 278 },
                                [f.ExtraLarge]: { left: 266, top: 370 },
                            },
                        },
                        3: {
                            number: 3,
                            svgPath:
                                'M14.2134 22.8281H14.8608C15.2371 22.8281 15.5304 22.7617 15.7407 22.6289C15.9565 22.4906 16.117 22.3218 16.2222 22.1226C16.3328 21.9178 16.402 21.6992 16.4297 21.4668C16.4574 21.2344 16.4712 21.0213 16.4712 20.8276C16.4712 20.4292 16.3882 20.1193 16.2222 19.8979C16.0562 19.6766 15.7795 19.5659 15.3921 19.5659C15.0158 19.5659 14.7253 19.6904 14.5205 19.9395C14.3158 20.1829 14.2134 20.5426 14.2134 21.0186V21.4253H12.1714V20.9106C12.1714 20.4569 12.2433 20.0363 12.3872 19.6489C12.5366 19.2616 12.7469 18.9295 13.0181 18.6528C13.2948 18.3761 13.6323 18.1576 14.0308 17.9971C14.4292 17.8366 14.883 17.7563 15.3921 17.7563C16.4159 17.7563 17.2127 18.0164 17.7827 18.5366C18.3582 19.0568 18.646 19.7983 18.646 20.7612C18.646 21.5747 18.4938 22.1917 18.1895 22.6123C17.8906 23.0273 17.4701 23.3317 16.9277 23.5254C17.5752 23.6693 18.0539 24.0013 18.3638 24.5215C18.6792 25.0361 18.8369 25.7251 18.8369 26.5884C18.8369 27.8999 18.5326 28.8462 17.9238 29.4272C17.3151 30.0028 16.4491 30.2905 15.3257 30.2905C14.7557 30.2905 14.2715 30.202 13.873 30.0249C13.4801 29.8478 13.1564 29.6126 12.9019 29.3193C12.6528 29.026 12.4674 28.6802 12.3457 28.2817C12.2295 27.8778 12.1714 27.4434 12.1714 26.9785V26.2812H14.2134V26.7129C14.2134 27.222 14.3019 27.6426 14.479 27.9746C14.6561 28.3066 14.9604 28.4727 15.3921 28.4727C15.6632 28.4727 15.8763 28.4256 16.0312 28.3315C16.1862 28.2375 16.3052 28.1019 16.3882 27.9248C16.4767 27.7477 16.5321 27.5402 16.5542 27.3022C16.5763 27.0643 16.5874 26.8042 16.5874 26.522C16.5874 25.7583 16.4795 25.2271 16.2637 24.9282C16.0479 24.6239 15.6882 24.4717 15.1846 24.4717H14.2134V22.8281Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 198, top: 229 },
                                [f.Small]: { left: 259, top: 252 },
                                [f.Medium]: { left: 313, top: 305 },
                                [f.Large]: { left: 376, top: 295 },
                                [f.ExtraLarge]: { left: 428, top: 395 },
                            },
                        },
                        4: {
                            number: 4,
                            svgPath:
                                'M17.9985 17.7729V25.7085H19.0776V27.5762H17.9985V30H15.832V27.5762H12.0303V25.4014L15.4253 17.7729H17.9985ZM15.832 20.5371L13.5991 25.7085H15.832V20.5371Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 243, top: 281 },
                                [f.Small]: { left: 307, top: 311 },
                                [f.Medium]: { left: 372, top: 374 },
                                [f.Large]: { left: 452, top: 373 },
                                [f.ExtraLarge]: { left: 523, top: 493 },
                            },
                        },
                        5: {
                            number: 5,
                            svgPath:
                                'M18.2725 17.7729V19.5825H14.3047L14.1553 22.3799C14.4264 22.1032 14.7031 21.9067 14.9854 21.7905C15.2731 21.6688 15.5636 21.6079 15.8569 21.6079C16.8475 21.6079 17.5863 21.9206 18.0732 22.5459C18.5602 23.1657 18.8037 24.029 18.8037 25.1357V26.3062C18.8037 27.673 18.5409 28.6802 18.0151 29.3276C17.4894 29.9696 16.6455 30.2905 15.4834 30.2905C14.3822 30.2905 13.5299 30.0028 12.9268 29.4272C12.3236 28.8462 12.022 27.9967 12.022 26.8789V26.3394H14.1553C14.1553 26.7655 14.1802 27.1196 14.23 27.4019C14.2853 27.6785 14.3628 27.8971 14.4624 28.0576C14.5675 28.2126 14.6948 28.3205 14.8442 28.3813C14.9992 28.4422 15.179 28.4727 15.3838 28.4727C15.5996 28.4727 15.785 28.445 15.9399 28.3896C16.0949 28.3343 16.2222 28.2319 16.3218 28.0825C16.4269 27.9276 16.5044 27.7228 16.5542 27.4683C16.604 27.2137 16.6289 26.8817 16.6289 26.4722V25.2021C16.6289 24.6266 16.5155 24.195 16.2886 23.9072C16.0617 23.6195 15.7435 23.4756 15.334 23.4756C15.0684 23.4756 14.8387 23.5558 14.645 23.7163C14.4569 23.8713 14.3213 24.0788 14.2383 24.3389H12.1631L12.4204 17.7729H18.2725Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 271, top: 232 },
                                [f.Small]: { left: 334, top: 258 },
                                [f.Medium]: { left: 404, top: 309 },
                                [f.Large]: { left: 489, top: 302 },
                                [f.ExtraLarge]: { left: 567, top: 404 },
                            },
                        },
                        6: {
                            number: 6,
                            svgPath:
                                'M16.5957 20.6035C16.5957 19.9118 16.2305 19.5659 15.5 19.5659C15.1348 19.5659 14.8581 19.6849 14.6699 19.9229C14.4873 20.1608 14.396 20.5869 14.396 21.2012V22.6206C14.6007 22.3882 14.8857 22.1917 15.251 22.0312C15.6217 21.8652 15.9676 21.7822 16.2886 21.7822C17.0024 21.7822 17.5946 22.0146 18.0649 22.4795C18.5353 22.9388 18.7705 23.6084 18.7705 24.4883V27.377C18.7705 27.8861 18.6847 28.3232 18.5132 28.6885C18.3472 29.0537 18.112 29.3553 17.8076 29.5933C17.5088 29.8312 17.1546 30.0055 16.7451 30.1162C16.3411 30.2324 15.904 30.2905 15.4336 30.2905C15.013 30.2905 14.609 30.2324 14.2217 30.1162C13.8398 30.0055 13.4995 29.8312 13.2007 29.5933C12.9019 29.3553 12.6639 29.0537 12.4868 28.6885C12.3153 28.3232 12.2295 27.8805 12.2295 27.3604V21.1182C12.2295 20.6423 12.2959 20.2023 12.4287 19.7983C12.5671 19.3888 12.769 19.0347 13.0347 18.7358C13.3058 18.437 13.6434 18.1991 14.0474 18.022C14.4513 17.8449 14.9189 17.7563 15.4502 17.7563C15.9427 17.7563 16.391 17.8228 16.7949 17.9556C17.2044 18.0828 17.5558 18.2738 17.8491 18.5283C18.1479 18.7773 18.3748 19.0762 18.5298 19.4248C18.6903 19.7734 18.7705 20.1663 18.7705 20.6035H16.5957ZM15.5 23.6416C15.2067 23.6416 14.9494 23.7357 14.728 23.9238C14.5067 24.112 14.396 24.4191 14.396 24.8452V27.2524C14.396 28.0659 14.7419 28.4727 15.4336 28.4727C15.7767 28.4727 16.0562 28.373 16.272 28.1738C16.4878 27.9691 16.5957 27.6564 16.5957 27.2358V24.812C16.5957 24.4302 16.4795 24.1396 16.2471 23.9404C16.0146 23.7412 15.7656 23.6416 15.5 23.6416Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 371, top: 268 },
                                [f.Small]: { left: 447, top: 296 },
                                [f.Medium]: { left: 544, top: 358 },
                                [f.Large]: { left: 658, top: 347 },
                                [f.ExtraLarge]: { left: 785, top: 461 },
                            },
                        },
                        7: {
                            number: 7,
                            svgPath:
                                'M18.9946 17.7729V19.4995C18.6792 20.1248 18.361 20.8138 18.04 21.5664C17.7246 22.3135 17.4341 23.127 17.1685 24.0068C16.9028 24.8867 16.6732 25.8275 16.4795 26.8291C16.2858 27.8252 16.1585 28.8822 16.0977 30H13.6821C13.7873 29.0703 13.9395 28.124 14.1387 27.1611C14.3434 26.1927 14.5814 25.2547 14.8525 24.3472C15.1292 23.4341 15.4281 22.5736 15.749 21.7656C16.0755 20.9577 16.4159 20.2493 16.77 19.6406H12.0635V17.7729H18.9946Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 299, top: 184 },
                                [f.Small]: { left: 368, top: 205 },
                                [f.Medium]: { left: 447, top: 246 },
                                [f.Large]: { left: 536, top: 224 },
                                [f.ExtraLarge]: { left: 632, top: 305 },
                            },
                        },
                        8: {
                            number: 8,
                            svgPath:
                                'M15.5 24.4883C15.1016 24.4883 14.8027 24.6322 14.6035 24.9199C14.4098 25.2021 14.313 25.6061 14.313 26.1318V26.7793C14.313 27.9082 14.7087 28.4727 15.5 28.4727C16.2913 28.4727 16.687 27.9027 16.687 26.7627V26.0986C16.687 25.0251 16.2913 24.4883 15.5 24.4883ZM15.5 19.5659C15.1403 19.5659 14.8747 19.6932 14.7031 19.9478C14.5316 20.1968 14.4458 20.6146 14.4458 21.2012C14.4458 22.2526 14.7972 22.7783 15.5 22.7783C16.1973 22.7783 16.5459 22.2526 16.5459 21.2012C16.5459 20.6257 16.4657 20.2106 16.3052 19.9561C16.1502 19.696 15.8818 19.5659 15.5 19.5659ZM13.7817 23.542C13.5881 23.4368 13.4054 23.3096 13.2339 23.1602C13.0679 23.0052 12.9212 22.8198 12.7939 22.604C12.6667 22.3826 12.5615 22.1198 12.4785 21.8154C12.401 21.5111 12.3623 21.1541 12.3623 20.7446C12.3623 20.2244 12.4398 19.779 12.5947 19.4082C12.7552 19.0319 12.9766 18.722 13.2588 18.4785C13.541 18.235 13.873 18.0552 14.2549 17.939C14.6423 17.8172 15.0573 17.7563 15.5 17.7563C15.9372 17.7563 16.3467 17.8172 16.7285 17.939C17.1159 18.0552 17.4507 18.235 17.7329 18.4785C18.0207 18.722 18.242 19.0319 18.397 19.4082C18.5575 19.779 18.6377 20.2244 18.6377 20.7446C18.6377 21.5581 18.5076 22.1779 18.2476 22.604C17.9875 23.0246 17.6637 23.3372 17.2764 23.542C17.8187 23.791 18.2171 24.1535 18.4717 24.6294C18.7318 25.1053 18.8618 25.7472 18.8618 26.5552C18.8618 27.8778 18.5907 28.8324 18.0483 29.4189C17.5116 30 16.6566 30.2905 15.4834 30.2905C14.3268 30.2905 13.4801 30 12.9434 29.4189C12.4121 28.8324 12.1465 27.8778 12.1465 26.5552C12.1465 26.1512 12.188 25.7915 12.271 25.4761C12.354 25.1606 12.4702 24.8812 12.6196 24.6377C12.7746 24.3942 12.9489 24.1839 13.1426 24.0068C13.3418 23.8298 13.5549 23.6748 13.7817 23.542Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 103, top: 169 },
                                [f.Small]: { left: 153, top: 190 },
                                [f.Medium]: { left: 178, top: 225 },
                                [f.Large]: { left: 223, top: 195 },
                                [f.ExtraLarge]: { left: 215, top: 278 },
                            },
                        },
                        9: {
                            number: 9,
                            svgPath:
                                'M15.5664 17.7563C15.9814 17.7563 16.3799 17.8145 16.7617 17.9307C17.1491 18.0413 17.4894 18.2157 17.7827 18.4536C18.0815 18.6916 18.3195 18.9932 18.4966 19.3584C18.6792 19.7236 18.7705 20.1691 18.7705 20.6948V26.9287C18.7705 27.4046 18.6986 27.8473 18.5547 28.2568C18.4163 28.6608 18.2116 29.0122 17.9404 29.311C17.6693 29.6099 17.3317 29.8478 16.9277 30.0249C16.5238 30.202 16.0645 30.2905 15.5498 30.2905C15.0518 30.2905 14.598 30.2241 14.1885 30.0913C13.779 29.964 13.4276 29.7759 13.1343 29.5269C12.8465 29.2778 12.6224 28.979 12.4619 28.6304C12.307 28.2817 12.2295 27.8861 12.2295 27.4434H14.396C14.396 28.1296 14.764 28.4727 15.5 28.4727C15.8542 28.4727 16.1253 28.3564 16.3135 28.124C16.5016 27.8861 16.5957 27.46 16.5957 26.8457V25.418C16.391 25.6559 16.106 25.8579 15.7407 26.0239C15.3755 26.1844 15.0296 26.2646 14.7031 26.2646C13.9893 26.2646 13.3971 26.035 12.9268 25.5757C12.4619 25.1164 12.2295 24.444 12.2295 23.5586V20.6782C12.2295 20.1636 12.3125 19.7236 12.4785 19.3584C12.6501 18.9932 12.8853 18.6916 13.1841 18.4536C13.4829 18.2157 13.8343 18.0413 14.2383 17.9307C14.6478 17.8145 15.0905 17.7563 15.5664 17.7563ZM15.5664 19.5659C15.2178 19.5659 14.9355 19.6683 14.7197 19.873C14.5039 20.0778 14.396 20.3905 14.396 20.811V23.2349C14.396 23.6167 14.5122 23.9072 14.7446 24.1064C14.9771 24.3057 15.2288 24.4053 15.5 24.4053C15.7878 24.4053 16.0423 24.314 16.2637 24.1313C16.485 23.9432 16.5957 23.6333 16.5957 23.2017V20.7944C16.5957 19.9754 16.2526 19.5659 15.5664 19.5659Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 11, top: 149 },
                                [f.Small]: { left: 54, top: 167 },
                                [f.Medium]: { left: 63, top: 198 },
                                [f.Large]: { left: 76, top: 168 },
                                [f.ExtraLarge]: { left: 46, top: 232 },
                            },
                        },
                        10: {
                            number: 10,
                            svgPath:
                                'M22.4653 18.603C21.8677 18.0386 21.0542 17.7563 20.0249 17.7563C19.549 17.7563 19.1035 17.8338 18.6885 17.9888C18.279 18.1437 17.922 18.3595 17.6177 18.6362C17.3133 18.9129 17.0726 19.245 16.8955 19.6323C16.724 20.0197 16.6382 20.4569 16.6382 20.9438V27.0366C16.6382 27.5236 16.724 27.9635 16.8955 28.3564C17.0726 28.7493 17.3133 29.0897 17.6177 29.3774C17.922 29.6652 18.279 29.8893 18.6885 30.0498C19.1035 30.2103 19.549 30.2905 20.0249 30.2905C21.0542 30.2905 21.8677 29.9972 22.4653 29.4106C23.063 28.8185 23.3618 28.0272 23.3618 27.0366V20.9438C23.3618 19.9478 23.063 19.1675 22.4653 18.603ZM19.1699 19.9146C19.4134 19.7209 19.6984 19.624 20.0249 19.624C20.3293 19.624 20.6004 19.7181 20.8384 19.9062C21.0763 20.0889 21.1953 20.3628 21.1953 20.728V27.1694C21.1953 27.5347 21.0763 27.8363 20.8384 28.0742C20.6004 28.3122 20.3293 28.4312 20.0249 28.4312C19.6984 28.4312 19.4134 28.3232 19.1699 28.1074C18.9264 27.8916 18.8047 27.6011 18.8047 27.2358V20.7446C18.8047 20.3794 18.9264 20.1027 19.1699 19.9146ZM12.8525 30V17.7729H11.2837C11.1453 18.354 10.8244 18.8493 10.3208 19.2588C9.81722 19.6683 9.11442 19.873 8.2124 19.873H7.92188V21.5249H10.686V30H12.8525Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 137, top: 130 },
                                [f.Small]: { left: 190, top: 151 },
                                [f.Medium]: { left: 230, top: 177 },
                                [f.Large]: { left: 277, top: 140 },
                                [f.ExtraLarge]: { left: 300, top: 196 },
                            },
                        },
                        11: {
                            number: 11,
                            svgPath:
                                'M12.8525 30V17.7729H11.2837C11.1453 18.354 10.8244 18.8493 10.3208 19.2588C9.81722 19.6683 9.11442 19.873 8.2124 19.873H7.92188V21.5249H10.686V30H12.8525ZM21.8525 30V17.7729H20.2837C20.1453 18.354 19.8244 18.8493 19.3208 19.2588C18.8172 19.6683 18.1144 19.873 17.2124 19.873H16.9219V21.5249H19.686V30H21.8525Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 76, top: 122 },
                                [f.Small]: { left: 125, top: 137 },
                                [f.Medium]: { left: 149, top: 162 },
                                [f.Large]: { left: 180, top: 124 },
                                [f.ExtraLarge]: { left: 176, top: 177 },
                            },
                        },
                        12: {
                            number: 12,
                            svgPath:
                                'M12.1448 17.7729V30H9.97832V21.5249H7.21416V19.873H7.50469C8.40671 19.873 9.10951 19.6683 9.61309 19.2588C10.1167 18.8493 10.4376 18.354 10.576 17.7729H12.1448ZM23.0222 30H16.3566V29.3691C16.3566 28.5391 16.4922 27.8086 16.7634 27.1777C17.0345 26.5469 17.3583 25.999 17.7346 25.5342C18.1109 25.0638 18.4982 24.6626 18.8967 24.3306C19.2951 23.9985 19.6188 23.7052 19.8679 23.4507C20.1335 23.1795 20.3465 22.9471 20.507 22.7534C20.673 22.5542 20.8003 22.3716 20.8889 22.2056C20.9829 22.034 21.0438 21.868 21.0715 21.7075C21.0992 21.5415 21.113 21.3561 21.113 21.1514C21.113 20.598 21.0051 20.2051 20.7893 19.9727C20.579 19.7402 20.2829 19.624 19.9011 19.624C19.5137 19.624 19.2121 19.7568 18.9963 20.0225C18.786 20.2881 18.6809 20.7723 18.6809 21.4751V22.1392H16.5061V21.4253C16.5061 20.8 16.6057 20.2604 16.8049 19.8066C17.0041 19.3473 17.2642 18.9655 17.5852 18.6611C17.9061 18.3568 18.2686 18.1299 18.6726 17.9805C19.0821 17.8311 19.4916 17.7563 19.9011 17.7563C20.3715 17.7563 20.8142 17.8311 21.2292 17.9805C21.6442 18.1299 22.0039 18.3457 22.3083 18.6279C22.6127 18.9102 22.8534 19.2477 23.0305 19.6406C23.2076 20.0335 23.2961 20.4735 23.2961 20.9604C23.2961 21.6079 23.155 22.236 22.8728 22.8447C22.5961 23.4535 22.1976 24.0124 21.6774 24.5215C21.362 24.8314 21.0466 25.1219 20.7312 25.3931C20.4157 25.6587 20.1224 25.9382 19.8513 26.2314C19.5801 26.5192 19.3532 26.8153 19.1706 27.1196C18.988 27.424 18.8745 27.7643 18.8303 28.1406H23.0222V30Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 232, top: 61 },
                                [f.Small]: { left: 296, top: 71 },
                                [f.Medium]: { left: 359, top: 81 },
                                [f.Large]: { left: 431, top: 29 },
                                [f.ExtraLarge]: { left: 495, top: 54 },
                            },
                        },
                        13: {
                            number: 13,
                            svgPath:
                                'M12.1614 17.7729V30H9.99492V21.5249H7.23076V19.873H7.52129C8.42331 19.873 9.12611 19.6683 9.62969 19.2588C10.1333 18.8493 10.4542 18.354 10.5926 17.7729H12.1614ZM18.656 22.8281H19.3034C19.6797 22.8281 19.973 22.7617 20.1833 22.6289C20.3991 22.4906 20.5596 22.3218 20.6647 22.1226C20.7754 21.9178 20.8446 21.6992 20.8723 21.4668C20.8999 21.2344 20.9138 21.0213 20.9138 20.8276C20.9138 20.4292 20.8308 20.1193 20.6647 19.8979C20.4987 19.6766 20.222 19.5659 19.8347 19.5659C19.4584 19.5659 19.1678 19.6904 18.9631 19.9395C18.7583 20.1829 18.656 20.5426 18.656 21.0186V21.4253H16.614V20.9106C16.614 20.4569 16.6859 20.0363 16.8298 19.6489C16.9792 19.2616 17.1895 18.9295 17.4606 18.6528C17.7373 18.3761 18.0749 18.1576 18.4733 17.9971C18.8718 17.8366 19.3256 17.7563 19.8347 17.7563C20.8584 17.7563 21.6553 18.0164 22.2253 18.5366C22.8008 19.0568 23.0886 19.7983 23.0886 20.7612C23.0886 21.5747 22.9364 22.1917 22.632 22.6123C22.3332 23.0273 21.9126 23.3317 21.3703 23.5254C22.0178 23.6693 22.4965 24.0013 22.8063 24.5215C23.1218 25.0361 23.2795 25.7251 23.2795 26.5884C23.2795 27.8999 22.9751 28.8462 22.3664 29.4272C21.7577 30.0028 20.8916 30.2905 19.7683 30.2905C19.1983 30.2905 18.7141 30.202 18.3156 30.0249C17.9227 29.8478 17.599 29.6126 17.3444 29.3193C17.0954 29.026 16.91 28.6802 16.7883 28.2817C16.6721 27.8778 16.614 27.4434 16.614 26.9785V26.2812H18.656V26.7129C18.656 27.222 18.7445 27.6426 18.9216 27.9746C19.0987 28.3066 19.403 28.4727 19.8347 28.4727C20.1058 28.4727 20.3189 28.4256 20.4738 28.3315C20.6288 28.2375 20.7478 28.1019 20.8308 27.9248C20.9193 27.7477 20.9746 27.5402 20.9968 27.3022C21.0189 27.0643 21.03 26.8042 21.03 26.522C21.03 25.7583 20.9221 25.2271 20.7063 24.9282C20.4904 24.6239 20.1307 24.4717 19.6271 24.4717H18.656V22.8281Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 320, top: 93 },
                                [f.Small]: { left: 393, top: 107 },
                                [f.Medium]: { left: 477, top: 125 },
                                [f.Large]: { left: 567, top: 78 },
                                [f.ExtraLarge]: { left: 676, top: 122 },
                            },
                        },
                        14: {
                            number: 14,
                            svgPath:
                                'M12.261 17.7729V30H10.0945V21.5249H7.33037V19.873H7.6209C8.52292 19.873 9.22572 19.6683 9.7293 19.2588C10.2329 18.8493 10.5538 18.354 10.6922 17.7729H12.261ZM22.4411 17.7729V25.7085H23.5202V27.5762H22.4411V30H20.2746V27.5762H16.4729V25.4014L19.8679 17.7729H22.4411ZM20.2746 20.5371L18.0417 25.7085H20.2746V20.5371Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 385, top: 144 },
                                [f.Small]: { left: 462, top: 162 },
                                [f.Medium]: { left: 562, top: 192 },
                                [f.Large]: { left: 675, top: 160 },
                                [f.ExtraLarge]: { left: 804, top: 224 },
                            },
                        },
                        15: {
                            number: 15,
                            svgPath:
                                'M12.1863 17.7729V30H10.0198V21.5249H7.25566V19.873H7.54619C8.44821 19.873 9.15101 19.6683 9.65459 19.2588C10.1582 18.8493 10.4791 18.354 10.6175 17.7729H12.1863ZM22.715 17.7729V19.5825H18.7473L18.5979 22.3799C18.869 22.1032 19.1457 21.9067 19.4279 21.7905C19.7157 21.6688 20.0062 21.6079 20.2995 21.6079C21.2901 21.6079 22.0288 21.9206 22.5158 22.5459C23.0028 23.1657 23.2463 24.029 23.2463 25.1357V26.3062C23.2463 27.673 22.9834 28.6802 22.4577 29.3276C21.932 29.9696 21.0881 30.2905 19.926 30.2905C18.8247 30.2905 17.9725 30.0028 17.3693 29.4272C16.7661 28.8462 16.4646 27.9967 16.4646 26.8789V26.3394H18.5979C18.5979 26.7655 18.6228 27.1196 18.6726 27.4019C18.7279 27.6785 18.8054 27.8971 18.905 28.0576C19.0101 28.2126 19.1374 28.3205 19.2868 28.3813C19.4418 28.4422 19.6216 28.4727 19.8264 28.4727C20.0422 28.4727 20.2276 28.445 20.3825 28.3896C20.5375 28.3343 20.6647 28.2319 20.7644 28.0825C20.8695 27.9276 20.947 27.7228 20.9968 27.4683C21.0466 27.2137 21.0715 26.8817 21.0715 26.4722V25.2021C21.0715 24.6266 20.958 24.195 20.7312 23.9072C20.5043 23.6195 20.1861 23.4756 19.7766 23.4756C19.5109 23.4756 19.2813 23.5558 19.0876 23.7163C18.8994 23.8713 18.7639 24.0788 18.6809 24.3389H16.6057L16.863 17.7729H22.715Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 425, top: 106 },
                                [f.Small]: { left: 506, top: 121 },
                                [f.Medium]: { left: 615, top: 141 },
                                [f.Large]: { left: 738, top: 100 },
                                [f.ExtraLarge]: { left: 888, top: 146 },
                            },
                        },
                        16: {
                            number: 16,
                            svgPath:
                                'M12.2195 17.7729V30H10.053V21.5249H7.28887V19.873H7.57939C8.48141 19.873 9.18421 19.6683 9.68779 19.2588C10.1914 18.8493 10.5123 18.354 10.6507 17.7729H12.2195ZM21.0383 20.6035C21.0383 19.9118 20.673 19.5659 19.9426 19.5659C19.5773 19.5659 19.3007 19.6849 19.1125 19.9229C18.9299 20.1608 18.8386 20.5869 18.8386 21.2012V22.6206C19.0433 22.3882 19.3283 22.1917 19.6936 22.0312C20.0643 21.8652 20.4102 21.7822 20.7312 21.7822C21.445 21.7822 22.0371 22.0146 22.5075 22.4795C22.9779 22.9388 23.2131 23.6084 23.2131 24.4883V27.377C23.2131 27.8861 23.1273 28.3232 22.9558 28.6885C22.7897 29.0537 22.5546 29.3553 22.2502 29.5933C21.9514 29.8312 21.5972 30.0055 21.1877 30.1162C20.7837 30.2324 20.3465 30.2905 19.8762 30.2905C19.4556 30.2905 19.0516 30.2324 18.6643 30.1162C18.2824 30.0055 17.9421 29.8312 17.6433 29.5933C17.3444 29.3553 17.1065 29.0537 16.9294 28.6885C16.7578 28.3232 16.6721 27.8805 16.6721 27.3604V21.1182C16.6721 20.6423 16.7385 20.2023 16.8713 19.7983C17.0096 19.3888 17.2116 19.0347 17.4772 18.7358C17.7484 18.437 18.086 18.1991 18.4899 18.022C18.8939 17.8449 19.3615 17.7563 19.8928 17.7563C20.3853 17.7563 20.8335 17.8228 21.2375 17.9556C21.647 18.0828 21.9984 18.2738 22.2917 18.5283C22.5905 18.7773 22.8174 19.0762 22.9724 19.4248C23.1328 19.7734 23.2131 20.1663 23.2131 20.6035H21.0383ZM19.9426 23.6416C19.6493 23.6416 19.392 23.7357 19.1706 23.9238C18.9493 24.112 18.8386 24.4191 18.8386 24.8452V27.2524C18.8386 28.0659 19.1844 28.4727 19.8762 28.4727C20.2193 28.4727 20.4987 28.373 20.7146 28.1738C20.9304 27.9691 21.0383 27.6564 21.0383 27.2358V24.812C21.0383 24.4302 20.9221 24.1396 20.6896 23.9404C20.4572 23.7412 20.2082 23.6416 19.9426 23.6416Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 492, top: 122 },
                                [f.Small]: { left: 579, top: 137 },
                                [f.Medium]: { left: 705, top: 162 },
                                [f.Large]: { left: 845, top: 125 },
                                [f.ExtraLarge]: { left: 1020, top: 178 },
                            },
                        },
                        17: {
                            number: 17,
                            svgPath:
                                'M12.4271 17.7729V30H10.2605V21.5249H7.49639V19.873H7.78691C8.68893 19.873 9.39173 19.6683 9.89531 19.2588C10.3989 18.8493 10.7199 18.354 10.8582 17.7729H12.4271ZM23.4372 17.7729V19.4995C23.1218 20.1248 22.8036 20.8138 22.4826 21.5664C22.1672 22.3135 21.8767 23.127 21.611 24.0068C21.3454 24.8867 21.1158 25.8275 20.9221 26.8291C20.7284 27.8252 20.6011 28.8822 20.5402 30H18.1247C18.2299 29.0703 18.382 28.124 18.5813 27.1611C18.786 26.1927 19.024 25.2547 19.2951 24.3472C19.5718 23.4341 19.8706 22.5736 20.1916 21.7656C20.5181 20.9577 20.8584 20.2493 21.2126 19.6406H16.5061V17.7729H23.4372Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 569, top: 140 },
                                [f.Small]: { left: 662, top: 157 },
                                [f.Medium]: { left: 806, top: 186 },
                                [f.Large]: { left: 967, top: 153 },
                                [f.ExtraLarge]: { left: 1178, top: 214 },
                            },
                        },
                        18: {
                            number: 18,
                            svgPath:
                                'M12.1365 17.7729V30H9.97002V21.5249H7.20586V19.873H7.49639C8.3984 19.873 9.1012 19.6683 9.60478 19.2588C10.1084 18.8493 10.4293 18.354 10.5677 17.7729H12.1365ZM19.9426 24.4883C19.5441 24.4883 19.2453 24.6322 19.0461 24.9199C18.8524 25.2021 18.7556 25.6061 18.7556 26.1318V26.7793C18.7556 27.9082 19.1512 28.4727 19.9426 28.4727C20.7339 28.4727 21.1296 27.9027 21.1296 26.7627V26.0986C21.1296 25.0251 20.7339 24.4883 19.9426 24.4883ZM19.9426 19.5659C19.5829 19.5659 19.3173 19.6932 19.1457 19.9478C18.9742 20.1968 18.8884 20.6146 18.8884 21.2012C18.8884 22.2526 19.2398 22.7783 19.9426 22.7783C20.6398 22.7783 20.9885 22.2526 20.9885 21.2012C20.9885 20.6257 20.9082 20.2106 20.7478 19.9561C20.5928 19.696 20.3244 19.5659 19.9426 19.5659ZM18.2243 23.542C18.0306 23.4368 17.848 23.3096 17.6765 23.1602C17.5104 23.0052 17.3638 22.8198 17.2365 22.604C17.1092 22.3826 17.0041 22.1198 16.9211 21.8154C16.8436 21.5111 16.8049 21.1541 16.8049 20.7446C16.8049 20.2244 16.8824 19.779 17.0373 19.4082C17.1978 19.0319 17.4191 18.722 17.7014 18.4785C17.9836 18.235 18.3156 18.0552 18.6975 17.939C19.0848 17.8172 19.4999 17.7563 19.9426 17.7563C20.3798 17.7563 20.7893 17.8172 21.1711 17.939C21.5585 18.0552 21.8933 18.235 22.1755 18.4785C22.4632 18.722 22.6846 19.0319 22.8396 19.4082C23 19.779 23.0803 20.2244 23.0803 20.7446C23.0803 21.5581 22.9502 22.1779 22.6901 22.604C22.43 23.0246 22.1063 23.3372 21.7189 23.542C22.2613 23.791 22.6597 24.1535 22.9143 24.6294C23.1743 25.1053 23.3044 25.7472 23.3044 26.5552C23.3044 27.8778 23.0332 28.8324 22.4909 29.4189C21.9541 30 21.0992 30.2905 19.926 30.2905C18.7694 30.2905 17.9227 30 17.3859 29.4189C16.8547 28.8324 16.5891 27.8778 16.5891 26.5552C16.5891 26.1512 16.6306 25.7915 16.7136 25.4761C16.7966 25.1606 16.9128 24.8812 17.0622 24.6377C17.2172 24.3942 17.3915 24.1839 17.5852 24.0068C17.7844 23.8298 17.9974 23.6748 18.2243 23.542Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 640, top: 146 },
                                [f.Small]: { left: 737, top: 172 },
                                [f.Medium]: { left: 898, top: 206 },
                                [f.Large]: { left: 1068, top: 175 },
                                [f.ExtraLarge]: { left: 1295, top: 243 },
                            },
                        },
                        19: {
                            number: 19,
                            svgPath:
                                'M12.2195 17.7729V30H10.053V21.5249H7.28887V19.873H7.57939C8.48141 19.873 9.18421 19.6683 9.68779 19.2588C10.1914 18.8493 10.5123 18.354 10.6507 17.7729H12.2195ZM20.009 17.7563C20.424 17.7563 20.8225 17.8145 21.2043 17.9307C21.5917 18.0413 21.932 18.2157 22.2253 18.4536C22.5241 18.6916 22.7621 18.9932 22.9392 19.3584C23.1218 19.7236 23.2131 20.1691 23.2131 20.6948V26.9287C23.2131 27.4046 23.1411 27.8473 22.9973 28.2568C22.8589 28.6608 22.6542 29.0122 22.383 29.311C22.1118 29.6099 21.7743 29.8478 21.3703 30.0249C20.9663 30.202 20.507 30.2905 19.9924 30.2905C19.4943 30.2905 19.0406 30.2241 18.6311 30.0913C18.2215 29.964 17.8701 29.7759 17.5769 29.5269C17.2891 29.2778 17.065 28.979 16.9045 28.6304C16.7495 28.2817 16.6721 27.8861 16.6721 27.4434H18.8386C18.8386 28.1296 19.2066 28.4727 19.9426 28.4727C20.2967 28.4727 20.5679 28.3564 20.7561 28.124C20.9442 27.8861 21.0383 27.46 21.0383 26.8457V25.418C20.8335 25.6559 20.5485 25.8579 20.1833 26.0239C19.8181 26.1844 19.4722 26.2646 19.1457 26.2646C18.4318 26.2646 17.8397 26.035 17.3693 25.5757C16.9045 25.1164 16.6721 24.444 16.6721 23.5586V20.6782C16.6721 20.1636 16.7551 19.7236 16.9211 19.3584C17.0926 18.9932 17.3278 18.6916 17.6267 18.4536C17.9255 18.2157 18.2769 18.0413 18.6809 17.9307C19.0904 17.8145 19.5331 17.7563 20.009 17.7563ZM20.009 19.5659C19.6604 19.5659 19.3781 19.6683 19.1623 19.873C18.9465 20.0778 18.8386 20.3905 18.8386 20.811V23.2349C18.8386 23.6167 18.9548 23.9072 19.1872 24.1064C19.4196 24.3057 19.6714 24.4053 19.9426 24.4053C20.2303 24.4053 20.4849 24.314 20.7063 24.1313C20.9276 23.9432 21.0383 23.6333 21.0383 23.2017V20.7944C21.0383 19.9754 20.6952 19.5659 20.009 19.5659Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 687, top: 174 },
                                [f.Small]: { left: 791, top: 194 },
                                [f.Medium]: { left: 964, top: 231 },
                                [f.Large]: { left: 1156, top: 206 },
                                [f.ExtraLarge]: { left: 1418, top: 283 },
                            },
                        },
                        20: {
                            number: 20,
                            svgPath:
                                'M13.8548 30H7.18926V29.3691C7.18926 28.5391 7.32484 27.8086 7.596 27.1777C7.86715 26.5469 8.19089 25.999 8.56719 25.5342C8.94349 25.0638 9.33086 24.6626 9.7293 24.3306C10.1277 23.9985 10.4515 23.7052 10.7005 23.4507C10.9661 23.1795 11.1792 22.9471 11.3396 22.7534C11.5057 22.5542 11.6329 22.3716 11.7215 22.2056C11.8156 22.034 11.8764 21.868 11.9041 21.7075C11.9318 21.5415 11.9456 21.3561 11.9456 21.1514C11.9456 20.598 11.8377 20.2051 11.6219 19.9727C11.4116 19.7402 11.1155 19.624 10.7337 19.624C10.3463 19.624 10.0447 19.7568 9.82891 20.0225C9.61862 20.2881 9.51348 20.7723 9.51348 21.4751V22.1392H7.33867V21.4253C7.33867 20.8 7.43828 20.2604 7.6375 19.8066C7.83672 19.3473 8.09681 18.9655 8.41777 18.6611C8.73874 18.3568 9.1012 18.1299 9.50518 17.9805C9.91468 17.8311 10.3242 17.7563 10.7337 17.7563C11.2041 17.7563 11.6468 17.8311 12.0618 17.9805C12.4769 18.1299 12.8366 18.3457 13.1409 18.6279C13.4453 18.9102 13.686 19.2477 13.8631 19.6406C14.0402 20.0335 14.1287 20.4735 14.1287 20.9604C14.1287 21.6079 13.9876 22.236 13.7054 22.8447C13.4287 23.4535 13.0302 24.0124 12.5101 24.5215C12.1946 24.8314 11.8792 25.1219 11.5638 25.3931C11.2483 25.6587 10.955 25.9382 10.6839 26.2314C10.4127 26.5192 10.1858 26.8153 10.0032 27.1196C9.82061 27.424 9.70716 27.7643 9.66289 28.1406H13.8548V30ZM20.2331 17.7563C21.2624 17.7563 22.0759 18.0386 22.6735 18.603C23.2712 19.1675 23.57 19.9478 23.57 20.9438V27.0366C23.57 28.0272 23.2712 28.8185 22.6735 29.4106C22.0759 29.9972 21.2624 30.2905 20.2331 30.2905C19.7572 30.2905 19.3117 30.2103 18.8967 30.0498C18.4872 29.8893 18.1302 29.6652 17.8259 29.3774C17.5215 29.0897 17.2808 28.7493 17.1037 28.3564C16.9322 27.9635 16.8464 27.5236 16.8464 27.0366V20.9438C16.8464 20.4569 16.9322 20.0197 17.1037 19.6323C17.2808 19.245 17.5215 18.9129 17.8259 18.6362C18.1302 18.3595 18.4872 18.1437 18.8967 17.9888C19.3117 17.8338 19.7572 17.7563 20.2331 17.7563ZM20.2331 19.624C19.9066 19.624 19.6216 19.7209 19.3781 19.9146C19.1346 20.1027 19.0129 20.3794 19.0129 20.7446V27.2358C19.0129 27.6011 19.1346 27.8916 19.3781 28.1074C19.6216 28.3232 19.9066 28.4312 20.2331 28.4312C20.5375 28.4312 20.8086 28.3122 21.0466 28.0742C21.2845 27.8363 21.4035 27.5347 21.4035 27.1694V20.728C21.4035 20.3628 21.2845 20.0889 21.0466 19.9062C20.8086 19.7181 20.5375 19.624 20.2331 19.624Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 612, top: 209 },
                                [f.Small]: { left: 711, top: 235 },
                                [f.Medium]: { left: 871, top: 283 },
                                [f.Large]: { left: 1033, top: 270 },
                                [f.ExtraLarge]: { left: 1277, top: 362 },
                            },
                        },
                        21: {
                            number: 21,
                            svgPath:
                                'M14.637 30H7.97148V29.3691C7.97148 28.5391 8.10706 27.8086 8.37822 27.1777C8.64938 26.5469 8.97311 25.999 9.34941 25.5342C9.72572 25.0638 10.1131 24.6626 10.5115 24.3306C10.91 23.9985 11.2337 23.7052 11.4827 23.4507C11.7483 23.1795 11.9614 22.9471 12.1219 22.7534C12.2879 22.5542 12.4152 22.3716 12.5037 22.2056C12.5978 22.034 12.6587 21.868 12.6863 21.7075C12.714 21.5415 12.7278 21.3561 12.7278 21.1514C12.7278 20.598 12.6199 20.2051 12.4041 19.9727C12.1938 19.7402 11.8978 19.624 11.5159 19.624C11.1285 19.624 10.827 19.7568 10.6111 20.0225C10.4008 20.2881 10.2957 20.7723 10.2957 21.4751V22.1392H8.1209V21.4253C8.1209 20.8 8.22051 20.2604 8.41973 19.8066C8.61895 19.3473 8.87904 18.9655 9.2 18.6611C9.52096 18.3568 9.88343 18.1299 10.2874 17.9805C10.6969 17.8311 11.1064 17.7563 11.5159 17.7563C11.9863 17.7563 12.429 17.8311 12.844 17.9805C13.2591 18.1299 13.6188 18.3457 13.9231 18.6279C14.2275 18.9102 14.4682 19.2477 14.6453 19.6406C14.8224 20.0335 14.9109 20.4735 14.9109 20.9604C14.9109 21.6079 14.7698 22.236 14.4876 22.8447C14.2109 23.4535 13.8125 24.0124 13.2923 24.5215C12.9769 24.8314 12.6614 25.1219 12.346 25.3931C12.0306 25.6587 11.7373 25.9382 11.4661 26.2314C11.195 26.5192 10.9681 26.8153 10.7854 27.1196C10.6028 27.424 10.4894 27.7643 10.4451 28.1406H14.637V30ZM22.0612 17.7729V30H19.8947V21.5249H17.1306V19.873H17.4211C18.3231 19.873 19.0259 19.6683 19.5295 19.2588C20.0331 18.8493 20.354 18.354 20.4924 17.7729H22.0612Z',
                            coordinates: {
                                [f.ExtraSmall]: { left: 624, top: 285 },
                                [f.Small]: { left: 719, top: 314 },
                                [f.Medium]: { left: 887, top: 385 },
                                [f.Large]: { left: 1049, top: 386 },
                                [f.ExtraLarge]: { left: 1301, top: 500 },
                            },
                        },
                    },
                    Uu = [
                        {
                            routeTo: 2,
                            routeFrom: 1,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M69 269.5C83.5 265.5 86.1824 262.019 104.89 264.713C116.529 266.39 119.5 264.713 112.071 262.009C105.873 259.753 120 258 135 258',
                                [f.Small]:
                                    'M115 294.535C119.5 292.5 132.423 286.01 152.839 288.95C165.54 290.78 168.783 288.95 160.676 285.999C153.912 283.537 169.5 281 186 281',
                                [f.Medium]:
                                    'M134 355C140 353.5 156.308 344.904 181.275 348.5C196.808 350.737 200.774 348.5 190.859 344.891C182.587 341.88 202 339 222 339',
                                [f.Large]:
                                    'M167 357C168 356.506 194.097 344.781 224.011 349.037C242.62 351.685 247.372 349.037 235.493 344.766C225.583 341.202 249.847 338 274 338',
                                [f.ExtraLarge]:
                                    'M165 448C177.942 443.5 187.065 443.463 200.839 443.5C211.616 443.53 240.5 450.5 233.193 442.5C230 439.005 221.601 438.473 223.238 436.5C225.726 433.5 244.312 431.939 249.121 431.5C259.574 430.546 258.081 430 276 430',
                            },
                        },
                        {
                            routeTo: 3,
                            routeFrom: 2,
                            svgPath: {
                                [f.ExtraSmall]: 'M144 258C166.5 258 161.5 262.478 174.5 267C186 271 190.5 269 204 269',
                                [f.Small]: 'M195 281C219.5 281 219 286.5 229 290C239 293.5 247.5 294 265 293',
                                [f.Medium]: 'M233 339C262.5 339 248.001 346.087 272.5 352C287 355.5 292 356.5 321 354',
                                [f.Large]:
                                    'M285 338C321.245 338.779 317.5 342 336 351C348.28 356.974 370.5 358.5 386 356',
                                [f.ExtraLarge]:
                                    'M287 430C329 433.511 340.162 444.207 354.5 452.075C382.225 467.289 419 459.097 438 456.087',
                            },
                        },
                        {
                            routeTo: 4,
                            routeFrom: 3,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M212 272C229.5 284 199.338 279.569 229.083 291.123C242.931 296.502 209.514 309.888 231.912 318.287C233 318.695 237.5 321 249 321',
                                [f.Small]:
                                    'M273.5 295C297.644 306.804 258.717 305.421 291.178 318.03C306.291 323.9 269.823 338.508 294.266 347.674C298.558 349.284 300.5 351 313 351',
                                [f.Medium]:
                                    'M330 356C363.5 372.5 313.026 368.327 352.724 383.747C371.206 390.926 326.608 408.79 356.5 420C361.749 421.968 363.552 422.582 379 423',
                                [f.Large]:
                                    'M396 358C433.23 376.5 376 369.5 423.443 390.532C445.151 400.155 397.432 415.576 433.23 429C439.516 431.358 443.5 433 462 433',
                                [f.ExtraLarge]:
                                    'M448 458C488.26 476.403 422.195 476.901 482.337 500.277C513.115 512.241 451.521 524.883 494.267 547.529C502.716 552.005 516.101 553 533 553',
                            },
                        },
                        {
                            routeTo: 5,
                            routeFrom: 3,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M213 269C230.5 269 221.641 275.83 245.603 268.551C254.336 265.898 265.5 266.5 277 270.5',
                                [f.Small]:
                                    'M274 292C290.5 290.5 288.5 299 309.206 293.397C318.82 290.796 317.5 298 340 298',
                                [f.Medium]:
                                    'M330.5 353C354.5 350.5 349 358.5 374.772 353.623C392.943 350.183 385 358 411 358',
                                [f.Large]:
                                    'M397 354C420.5 351 422.392 362.103 449.66 354.884C470 349.5 466.5 361.5 499 362',
                                [f.ExtraLarge]:
                                    'M449 454C482.377 449.436 479.462 464.987 518.501 454.133C536.369 449.165 541.5 464 577 464',
                            },
                        },
                        {
                            routeTo: 6,
                            routeFrom: 4,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M258 321C274 321 316.296 323.003 298.224 316.414C279.504 309.588 331.432 321.189 377 309',
                                [f.Small]:
                                    'M322 351C339 351 386.353 352.82 366.631 345.629C346.202 338.18 403.271 351.302 453 338',
                                [f.Medium]:
                                    'M390 423C410.71 423 469.118 426.295 445 417.501C420.016 408.391 491.185 424.267 552 408',
                                [f.Large]:
                                    'M473 433C497.802 433 557.883 432.531 529 421.999C499.08 411.09 595.169 428.481 668 409',
                                [f.ExtraLarge]:
                                    'M544 553C575.5 553 663.182 557.715 626.498 543.944C588.498 529.678 702.5 547.474 795 522',
                            },
                        },
                        {
                            routeTo: 6,
                            routeFrom: 5,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M286 274C296.5 279 303.555 282.054 293.5 286.5C276.478 294.027 369.125 295.492 337.187 299.555C310.551 302.944 350.096 317.134 377 309',
                                [f.Small]:
                                    'M349 298C367.735 298 376.119 306.294 365.405 311.695C341 324 444.005 322.798 409.152 327.232C380.084 330.93 423.64 346.876 453 338',
                                [f.Medium]:
                                    'M422 358C443.5 358 457.333 373.105 443.5 378C411 389.5 539.624 389.577 497 395C461.451 399.522 516.094 418.855 552 408',
                                [f.Large]:
                                    'M510 362C537.439 362 547.571 373.393 531.5 380.5C504.293 392.531 651.884 389.55 601.985 402.115C589.441 405.273 625 422 668 409',
                                [f.ExtraLarge]:
                                    'M588 464C620.5 464 647.395 476.757 626.943 485.944C592.319 501.496 772.753 498.792 709.251 515.035C693.288 519.118 753 533.592 795 522',
                            },
                        },
                        {
                            routeTo: 7,
                            routeFrom: 6,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M386 306.5C405.5 300.5 464.868 286.745 407.001 267.458C387.022 260.799 375.001 269.5 340.709 267.458C315.493 265.956 271.253 266.45 356.001 250.934C374.254 247.592 347.304 247.105 339.283 236.237C331.263 225.37 332 224 314 224',
                                [f.Small]:
                                    'M462 335.5C483 329 548.284 317.289 485.134 296.241C463.33 288.974 451.755 304.585 412.993 292.204C386.733 283.817 337.196 291.104 429.682 274.171C449.601 270.524 420.19 269.993 411.438 258.133C402.685 246.274 400.5 246 383 246',
                                [f.Medium]:
                                    'M561 405C587.5 397.5 667.153 382.841 589.923 357.101C563.259 348.214 545.406 369.641 498.001 354.5C465.887 344.243 405.306 353.155 518.411 332.447C542.771 327.987 517.796 321.496 511 314.5C504.204 307.504 494.5 295 464 295',
                                [f.Large]:
                                    'M679 406C706 400 750.052 393.931 756.502 377C760.502 366.5 747.547 359.555 724.002 351.5C686.002 338.5 661.573 351.328 627.002 352.5C597.502 353.5 584.502 353.5 550.002 348C526.798 344.301 599.002 333.5 631.502 325.5C650.276 320.878 612.002 318.5 602.002 304.5C586.288 282.5 571 284 557 284',
                                [f.ExtraLarge]:
                                    'M806 519C847.14 509.469 961.637 498.53 843.936 459.302C803.298 445.757 783.564 473.103 710.04 454.5C668.54 444 560.54 456 746.039 418.167C783.021 410.625 727.385 406.648 712.927 389.574C698.469 372.5 683 366 653 365',
                            },
                        },
                        {
                            routeTo: 8,
                            routeFrom: 7,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M305 224C289.016 223.684 287 222 272 225C257 228 248.92 217.47 235.5 221.326C205.755 229.872 187.424 225.471 202.806 218.64C223.701 209.362 180.086 220.819 195.5 211.316C202.5 207 128 229 116.5 212.5',
                                [f.Small]:
                                    'M374 246C356.5 246 346.62 243.838 326.5 250.5C310.652 255.747 300.459 239.553 285.813 243.761C253.352 253.087 233.347 248.284 250.133 240.83C272.936 230.704 223.192 242.44 241.5 235C249.816 231.621 187 247.5 167 233',
                                [f.Medium]:
                                    'M455 295C420.5 295 421.106 290.353 396.5 298.5C377.119 304.917 362.172 294.232 344.261 299.378C304.563 310.783 280.098 304.909 300.626 295.793C328.513 283.41 271.347 298.374 293.737 289.276C303.907 285.143 207.5 303.5 193 278',
                                [f.Large]:
                                    'M546 284C519.5 284 513.467 279.744 484 289.5C460.79 297.185 435.244 276.703 413.794 282.866C373 294.587 340.166 289.723 364.751 278.805C398.147 263.975 329.686 281.896 356.5 271C368.68 266.051 252.5 282 241 260',
                                [f.ExtraLarge]:
                                    'M642 365C615.5 364.5 596.039 367.357 558.539 379.773C529.002 389.552 512.461 360.17 473 371C412.297 387.659 371.752 379.76 403.039 365.867C445.539 346.994 358.416 369.799 392.539 355.934C408.039 349.635 243.5 363.5 233 343',
                            },
                        },
                        {
                            routeTo: 9,
                            routeFrom: 8,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M108.998 209C57.9975 209.5 71.7017 201.338 33.8569 202.614C15.426 203.236 54.5139 198.163 37.789 196.893C27.9587 196.147 -21.0018 198.5 16.9983 190',
                                [f.Small]:
                                    'M60.0036 208C55 209.5 54.2488 209.854 51.5023 211C42.5034 214.754 77.5021 213.5 86.0022 216C90.5528 217.338 70.5484 220.342 73.0017 221.5C76.3522 223.081 88.5016 220 103.002 222.5C107.544 223.283 113.031 224.339 127.002 227C137.502 229 138.004 230 159.004 230',
                                [f.Medium]:
                                    'M70.9998 249C64.4998 251 49.9123 254.784 56.0017 255.5C81.5015 258.5 95.0015 258 102.501 261C104.221 261.688 97.0015 263.5 95.0015 264C91.5715 264.858 92.0014 264.5 88.0015 265.5C70.1656 269.959 108.501 264.5 141.502 268.5C162.762 271.077 165.002 273 186.002 273',
                                [f.Large]:
                                    'M85.997 230C79 232 67.4776 234.834 71.9997 236.5C90.9994 243.5 136.451 235.6 123.5 243C119.999 245 110.499 246 104.999 248C97.1787 250.844 134.499 246.5 166 251C194.457 255.065 201.999 254.5 232.999 255',
                                [f.ExtraLarge]:
                                    'M224.999 338C152.499 338 166.596 317.194 89.6204 319.791C52.1321 321.056 131.636 310.736 97.618 308.154C77.6235 306.637 3 303 55.9992 293',
                            },
                        },
                        {
                            routeTo: 10,
                            routeFrom: 8,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M118 209C137.5 209 144.472 209.338 158.5 207C176.5 204 182.5 191.5 203 181.5C204.755 180.644 185.537 184.204 184 183C182.344 181.703 196.475 178.724 194.5 178C189.917 176.32 177.803 178.373 173 177.5C156.5 174.5 155 173.5 152 172',
                                [f.Small]:
                                    'M205 193C214.43 197.552 219.745 200.987 241.346 200.456C262.947 199.925 244.316 202.05 240.806 204.174C237.296 206.299 255.657 203.378 260.517 203.112C265.377 202.847 242.433 211.117 234.056 218.516C220.825 230.202 182.68 230 168 230',
                                [f.Medium]:
                                    'M246 229C257.532 234.566 265.366 240.611 291.783 239.961C318.2 239.311 295.415 241.91 291.123 244.508C286.83 247.107 309.284 243.534 315.228 243.209C321.172 242.884 293.112 252.999 282.867 262.047C266.687 276.339 212.953 273 195 273',
                                [f.Large]:
                                    'M297 203C309.5 211.5 320.787 214.888 352.423 214.11C384.059 213.332 356.773 216.444 351.632 219.556C346.491 222.668 373.382 218.389 380.5 218C387.618 217.611 355.737 239.88 340.098 244.717C302 256.5 265.5 255 244 255',
                                [f.ExtraLarge]:
                                    'M321 259C340.5 268.5 354.536 282 389.558 280.776C424.58 279.552 395.094 283.746 388.552 287.706C382.01 291.666 416.231 286.221 425.289 285.726C434.348 285.231 391.584 300.646 375.97 314.437C351.311 336.217 263 338 236 338',
                            },
                        },
                        {
                            routeTo: 11,
                            routeFrom: 9,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M82.5 164C64.7254 173.087 54.4773 174.403 62.8708 175.631C85.5828 178.954 67.6046 178.945 54.4773 181.034C42.1339 182.999 42.5 182 26 187.5',
                                [f.Small]:
                                    'M131.5 179.5C112.103 189.417 100.629 190.653 109.789 191.994C134.575 195.62 114.955 195.61 100.629 197.89C87.1589 200.034 87.5 199.5 69 205.5',
                                [f.Medium]:
                                    'M157 213C133.278 225.127 115.298 230.361 126.5 232C156.811 236.434 137.214 234.034 119.694 236.822C103.22 239.444 102.996 239.5 79.9961 246',
                                [f.Large]:
                                    'M191 187C166 203.5 144.686 203.91 158.101 205.873C194.402 211.184 165.667 211.169 144.686 214.509C124.958 217.649 122 221.5 97 227',
                                [f.ExtraLarge]:
                                    'M187 240C150.847 258.483 127.292 262.506 144.364 265.004C190.56 271.762 153.993 271.743 127.292 275.993C102.185 279.989 120.5 281 67 291',
                            },
                        },
                        {
                            routeTo: 11,
                            routeFrom: 10,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M143.001 168C136.501 165 132.909 166.512 127.999 168C123.363 169.405 119.535 169.327 112.724 167.752C99.958 164.801 93.7739 174.491 84.8931 173.454C81 173 72.002 169 82.5005 164',
                                [f.Small]:
                                    'M196.001 189C188.501 185.5 185.069 186.444 179.711 188.067C174.651 189.6 170.475 189.515 163.042 187.797C149.11 184.576 142.291 192.915 132.669 191.291C127.02 190.338 119.741 186.806 131.5 179.5',
                                [f.Medium]:
                                    'M238.001 225C230.501 221.5 222.961 222.824 216.408 224.81C210.22 226.684 205.112 226.58 196.022 224.479C178.984 220.54 170.645 230.738 158.878 228.753C151.97 227.587 143.003 220 157.001 213',
                                [f.Large]:
                                    'M287.999 197C277.499 190 267.178 192.9 259.33 195.278C251.92 197.523 245.803 197.398 234.917 194.882C214.512 190.165 204.622 201.712 190.435 200C177.999 198.5 184 192 191.001 187',
                                [f.ExtraLarge]:
                                    'M310 254C294.5 246.874 287.155 249.574 277.167 252.6C267.737 255.457 259.953 255.298 246.099 252.095C220.132 246.093 214.002 267.5 187.009 263.695C176.436 262.204 165.084 253.617 187 240',
                            },
                        },
                        {
                            routeTo: 12,
                            routeFrom: 11,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M238 101C222.5 101 209.578 111.52 225.325 114.733C249.446 119.655 238.966 125.82 264.939 131.045C302 138.5 255.851 131.066 264.939 137.965C277.5 147.5 227.795 123.511 214.508 131.045C199.253 139.695 180.664 136.533 188.919 132.953C210.571 123.561 185.228 130.056 167.759 128.573C149.601 127.032 144.582 119.22 141.677 121.831C133.394 129.276 139.463 118.124 134.05 123.561C131.09 126.535 123.117 141.622 113.5 144C97.5068 147.954 104.404 152.482 90 160',
                                [f.Small]:
                                    'M139.5 174.5C139.5 174.5 142 172.5 144.5 171.5C149.115 169.655 149 165.5 155 163C160.529 160.696 162.161 161.215 167.5 158.5C178.214 153.052 191 132.576 191 137.5C191 139 189 144 197.5 136.5C199.534 134.706 203.089 137.756 205.5 139C221 147 226.394 144.418 239.5 145C262 146 250 151 245 153C231.283 158.487 253.165 159.375 257.5 157.5C276 149.5 284.142 149.507 300 149.5C310.415 149.496 316.088 152.233 326.5 152.5C346 153 315.59 148.262 332.5 146.5C356.5 144 324.849 143.534 320 141.5C304.5 135 306.837 132.949 299 129C295.5 127.237 271.5 123 281 118C288.5 114.053 292 111 302 111',
                                [f.Medium]:
                                    'M367 130C344 129.5 326.693 143.547 347.709 147.835C379.901 154.404 365.441 166.147 400.578 170.105C440.452 174.597 379 171 401.234 179.341C420.501 186.568 345.738 170.935 328.006 180.99C307.647 192.535 282.181 188.315 293.198 183.537C322.095 171.003 288.272 179.671 264.957 177.692C240.724 175.635 237.377 164.516 233.5 168C222.444 177.937 230.224 163.744 223 171C219.049 174.969 205.835 187.827 193 191C171.655 196.278 178.5 199.5 165 208',
                                [f.Large]:
                                    'M200 181C207 176 209.5 177 216 171.5C222.5 166 221.336 165.947 227 162C234.408 156.838 239.202 157.545 247.004 153C261.084 144.798 271.835 120.831 274.504 124.5C275.687 126.126 274.504 128 276.004 128C280.504 128 281.466 122.551 285.504 123C290.004 123.5 298.408 131.747 319.004 134C351.004 137.5 379.428 129.384 369.504 136C366.504 138 357.004 140.5 355.004 144.5C352.307 149.894 366.473 150.5 372.504 150.5C387.504 150.5 390.364 142.922 403.504 141C419.945 138.596 427.97 141.356 444.504 143C461.212 144.662 494.504 153 486.504 147.5C484.444 146.084 473.352 142.938 478.004 141C484.004 138.5 488.154 139.57 496.004 138C506.004 136 468.481 135.694 454.504 127.5C440.004 119 441.015 116.591 430.004 111.5C421.597 107.613 413.164 111.332 407.504 104C401.004 95.5805 419.5 88.5 441 89',
                                [f.ExtraLarge]:
                                    'M505 114C486 114 435.5 126.5 474.795 141.136C521.719 158.614 501.82 168.282 555.369 174.314C616.139 181.16 524.561 175.076 556.37 188.389C586.5 201 471.793 175.579 444.768 190.903C413.739 208.497 374.929 202.066 391.719 194.784C435.76 175.681 384.212 188.892 348.68 185.876C311.747 182.741 301.54 166.852 295.631 172.162C278.781 187.306 291.127 164.622 280.117 175.681C274.096 181.729 260.562 202.163 241 207C208.47 215.043 221.5 216 196 234',
                            },
                        },
                        {
                            routeTo: 13,
                            routeFrom: 12,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M247 101C269 101 269.591 94.4695 276 92.9999C282.409 91.5304 285.286 98.6924 274.934 104.57C272.159 106.146 273.084 108.765 279 109.5C289.043 110.747 329 125.291 321.273 126.84C305.5 130 315 129.5 326 132',
                                [f.Small]:
                                    'M311 111C339 111 335.006 105.104 342 103.5C348.994 101.896 352.512 108.029 341.215 114.444C338.187 116.163 338.525 117.384 344.981 118.186C355.941 119.547 398.798 134.06 387.5 137C376.095 139.968 386.357 142.627 399 146',
                                [f.Medium]:
                                    'M376 130C404.5 130 406.447 122.461 415 120.5C423.553 118.539 427.733 126.928 413.917 134.773C410.214 136.875 410.598 138.638 418.522 139.349C442.5 141.5 485.816 161.404 472 165C458.052 168.63 469.5 169 485 173',
                                [f.Large]:
                                    'M452 89C481.5 89 485.758 78.3489 496 76.0001C506.243 73.6514 514.101 83.8724 497.04 92.2962C486.5 97.5 504.011 102.264 518 103C537 104 581.547 124.694 565 129C548.297 133.347 559 134 577 137',
                                [f.ExtraLarge]:
                                    'M516 114C537.5 114 560.465 105.989 573.5 103C586.536 100.011 596.755 108.51 575.698 120.466C570.055 123.67 571.901 130.724 584 131.5C623 134 680.841 162.08 659.784 167.56C639.784 172.765 672.5 178 686 181',
                            },
                        },
                        {
                            routeTo: 14,
                            routeFrom: 13,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M335 134.5C372.5 147 334.977 155.77 360.589 161.686C381.761 166.577 331.594 180.394 339.656 184.118C342.858 185.597 373.5 184 391 184',
                                [f.Small]:
                                    'M408 148.5C444 158 406.74 170.319 434.69 176.775C457.795 182.112 403.048 197.19 411.846 201.255C415.34 202.869 449 202 468 202',
                                [f.Medium]:
                                    'M494 176C540.5 190 494.05 203.105 528.231 211C556.488 217.527 489.535 235.967 500.295 240.938C504.568 242.912 546.5 241 570 241',
                                [f.Large]:
                                    'M588 139C644.5 150 593.005 174.129 633.94 183.584C667.779 191.401 593.115 212.547 606 218.5C611.117 220.864 657 220 685 220',
                                [f.ExtraLarge]:
                                    'M697 183.5C762.5 198 697.824 224.606 749.918 236.639C792.982 246.587 690.943 274.69 707.341 282.265C713.853 285.273 783.5 284 814 284',
                            },
                        },
                        {
                            routeTo: 15,
                            routeFrom: 13,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M335 134.5C344 137.5 362.363 146.034 372.202 140.72C378.692 137.214 404.185 135.425 408.212 136.31C412.244 137.197 402.037 138.844 406 140C408.928 140.854 411.967 140.035 416.821 140.96C421.983 141.944 420 146 431 146',
                                [f.Small]:
                                    'M408 148.5C417.5 151.5 440.017 159.408 447.364 153.894C453.802 149.062 481.868 149.17 486.263 150.136C490.663 151.104 479.523 152.901 483.848 154.163C487.043 155.094 490.36 154.201 495.657 155.21C501.291 156.284 499.5 161 512 161',
                                [f.Medium]:
                                    'M494 176C511 181.5 534.745 189.761 543.731 183.018C551.604 177.109 585.927 177.24 591.302 178.422C596.682 179.605 583.06 181.803 588.349 183.346C592.256 184.485 596.312 183.392 602.79 184.627C609.68 185.94 603.712 190 622.5 190',
                                [f.Large]:
                                    'M588 139C603.5 141.5 641.741 158.148 652.501 150.073C661.931 142.996 703.034 143.154 709.471 144.569C715.915 145.986 699.601 148.619 705.935 150.466C710.614 151.831 715.472 150.522 723.229 152C731.48 153.573 725.5 160 748 160',
                                [f.ExtraLarge]:
                                    'M697 183.5C715.5 187.502 743 201.5 773.539 193.992C797.148 188.188 842.308 190.193 850.5 191.995C858.701 193.798 837.939 197.148 846 199.499C851.955 201.236 858.628 199.618 868.5 201.5C879 203.501 874 205.5 898 206',
                            },
                        },
                        {
                            routeTo: 16,
                            routeFrom: 14,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M400 184C436.602 184 431.58 180.045 451.178 182.28C479.021 185.456 475.5 162 498 162',
                                [f.Small]:
                                    'M477 202.002C516.944 202.002 512.164 196.813 533.551 199.253C563.937 202.719 552 176.5 585 177',
                                [f.Medium]:
                                    'M579 241C627.849 241 622.978 235.504 649.134 238.487C686.294 242.726 683.5 210 713 211',
                                [f.Large]:
                                    'M696 220.001C754.5 220.001 747.406 212.928 778.729 216.501C823.231 221.577 819.5 184 855 185',
                                [f.ExtraLarge]:
                                    'M825 284C878 284 894.439 274.261 934.301 278.808C990.934 285.267 974 238.5 1030 238',
                            },
                        },
                        {
                            routeTo: 16,
                            routeFrom: 15,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M440 146C458 146 476.481 148.521 458.956 149.489C441.431 150.456 480.743 153.344 467.661 154.07C454.579 154.796 468.5 158.5 479 160C489.5 161.5 489.241 161.687 498 162',
                                [f.Small]:
                                    'M521 161C535 161 563.125 165.944 544 167C524.875 168.056 567.777 171.208 553.5 172C539.223 172.792 560 175.5 563.5 176C567 176.5 573 177 585 177',
                                [f.Medium]:
                                    'M632.5 190C642 190 682.384 194.146 658.995 195.438C635.606 196.729 683.702 199.635 666.242 200.604C648.783 201.572 674.148 203.187 687.655 208.675C701.161 214.164 701 211 713 211',
                                [f.Large]:
                                    'M759 160C772.5 160 811.444 162.306 794.5 164C789.5 164.5 787.31 163.89 782.5 165C776 166.5 810.6 168.043 802 170.5C798.5 171.5 782 171 798 174C814 177 817.141 178.106 825.5 181C833.859 183.894 837.5 185 855 185',
                                [f.ExtraLarge]:
                                    'M909 206.5C919 207.5 984.856 210.953 949.21 212.921C913.564 214.889 986.864 219.318 960.255 220.794C933.646 222.27 972.304 224.731 992.889 233.095C1013.47 241.46 1011.96 238 1030 238',
                            },
                        },
                        {
                            routeTo: 17,
                            routeFrom: 16,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M507 162C520.112 162 521.511 163.559 533.216 167.341C546.473 171.624 551.1 166.965 559.68 172.43C564.5 175.5 559.68 180 575 180',
                                [f.Small]:
                                    'M594 177C608 177 610.305 178.819 623.079 182.946C637.547 187.62 642.263 182.342 651.5 188.5C656 191.5 653.5 197 668 197',
                                [f.Medium]:
                                    'M722 211C739.5 211 743 213.5 758.621 218.547C776.314 224.263 781.258 212.558 798.973 230.191C804.312 235.506 807.737 235 814 235',
                                [f.Large]:
                                    'M866 185C881 185 884.703 185.439 909.848 192.622C927.14 197.561 935.5 187.5 950.5 203C956.774 209.483 958.5 213 977 213',
                                [f.ExtraLarge]:
                                    'M1041 238C1068.5 238 1078 237 1099.54 245.5C1123.31 254.88 1138 242.112 1162.54 266.5C1170.68 274.593 1178 274 1188 274',
                            },
                        },
                        {
                            routeTo: 18,
                            routeFrom: 17,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M584 180C591 180 604.68 180.74 600.5 178.5C598.033 177.178 590.242 176.65 593.93 174.659C597.619 172.668 629.41 173.519 624 177.5C617.569 182.233 604.993 184.313 612 188C621.5 193 628.5 182.5 646 185',
                                [f.Small]:
                                    'M677 197C684.5 197 701.413 198.265 696.851 195.821C694.159 194.378 685.312 193.105 689.337 190.932C693.362 188.759 727.98 189.846 722.076 194.191C715.058 199.356 700.856 199.028 707.049 205.054C714.026 211.844 728 212 743 212',
                                [f.Medium]:
                                    'M823 235C832 235 854.419 237.296 848.84 234.307C845.548 232.543 834.728 230.986 839.651 228.329C844.574 225.671 886.909 227 879.689 232.314C871.107 238.631 853.738 238.229 861.312 245.599C869.844 253.902 895.826 254 906 254',
                                [f.Large]:
                                    'M988 213C1001.5 213 1028.68 216.592 1017.5 211.003C1014.5 209.503 1011.29 209.04 1005.5 206.503C997.5 203 1020.22 202.951 1029.5 203.003C1040.22 203.063 1060.81 204.913 1055 209.003C1041.5 218.503 1025.23 216.707 1032 224.003C1038.5 231.003 1051.58 232.963 1055 233.503C1064.5 235.003 1078 235 1078 235',
                                [f.ExtraLarge]:
                                    'M1199 274C1209.5 274 1247.04 276.692 1238.54 272.136C1233.52 269.447 1217.03 267.074 1224.53 263.025C1232.04 258.975 1296.56 261 1285.55 269.099C1272.47 278.726 1246 278.114 1257.55 289.346C1270.55 302 1289.5 303 1305 303',
                            },
                        },
                        {
                            routeTo: 19,
                            routeFrom: 18,
                            svgPath: {
                                [f.ExtraSmall]: 'M655 188C669.5 194.5 657.5 205.5 693 213',
                                [f.Small]: 'M752 212C779 212 758.442 225.804 797 233',
                                [f.Medium]: 'M915 254C943 254 931.5 269 972 279',
                                [f.Large]: 'M1089 235C1134.5 235 1115 255.5 1166 265',
                                [f.ExtraLarge]: 'M1316 303C1375.5 303 1358.5 334 1428 342',
                            },
                        },
                        {
                            routeTo: 20,
                            routeFrom: 18,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M649.5 190.5C645 207.5 636.117 197.089 618.002 202.5C604.011 206.679 608.002 227 591.502 231C566.292 237.112 584.924 243.771 597.002 242.5C606.502 241.5 609 243 618 247',
                                [f.Small]:
                                    'M748 216.5C748 227 735.269 221.596 715.501 227.5C700.233 232.061 701.689 250.351 686.74 252.614C658.75 256.852 683.253 265.61 696.501 266C704.69 266.242 705.987 265.236 717.5 272.5',
                                [f.Medium]:
                                    'M910 259C908 271 897.677 265.779 873.502 273C854.83 278.577 854.001 297.05 835.72 299.818C801.49 305 834.295 316.696 850.484 315.893C868.502 315 873 321 880 328',
                                [f.Large]:
                                    'M1082 240C1078.5 252.5 1070.45 246.852 1041.5 255.5C1019.14 262.179 1035.92 284.842 1002.18 289.95C961.184 296.156 1000.7 306.088 1019.86 309.202C1034 311.5 1032 319.5 1044 327',
                                [f.ExtraLarge]:
                                    'M1313 308C1319.5 322.5 1314.85 338.495 1278 349.5C1249.54 358 1268.94 367 1226 373.5C1173.83 381.397 1216.65 392.597 1241.04 396.5C1278.54 402.5 1267 409 1288 420',
                            },
                        },
                        {
                            routeTo: 21,
                            routeFrom: 19,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M702 215C751.206 225.49 686.91 222.215 706.33 227.869C725.751 233.522 680.042 241.756 671.286 243.257C640.501 248.534 667.006 254.758 648.501 262.5C639.886 266.105 624 277 624 277C624 277 618.581 280.935 611 287C608.5 289 605 291.5 602 293.5C596.571 297.119 595.001 299.5 594.001 302.5C593.553 303.842 594.146 310.81 602.001 315C609.501 319 617.224 322 630.001 324.5',
                                [f.Small]:
                                    'M806 235C870.5 250 790.808 242.83 812.001 249C833.194 255.17 783.312 264.155 773.757 265.793C745.589 270.622 772.196 276.551 752.002 285C742.6 288.934 730.181 296.125 721.001 303.5C714.865 308.43 713.315 310.333 705.501 316.5C702.95 318.514 701.36 320.03 698.001 322C691.86 325.603 688.892 328.362 686.501 332.5C684.819 335.412 684.507 337.507 688.5 341.5C693.5 346.5 709 351 725.5 353',
                                [f.Medium]:
                                    'M981 281C1068.5 302 957.224 288.556 983.142 296.102C1009.06 303.648 955.014 318.155 943.328 320.158C908.88 326.064 938.695 333.167 913.999 343.5C902.501 348.311 894.9 358.723 890.037 367.079C885.349 373.33 881.962 377.11 877.929 380.857C875.498 383.116 872.919 385.032 869.161 387.954C862.214 393.358 857.889 394.634 855.384 400.062C850.374 410.917 865.821 423.025 894.212 432.628',
                                [f.Large]:
                                    'M1177 268C1240.5 287 1147.69 276.463 1178.73 285.5C1209.77 294.536 1131 318.601 1117 321C1075.75 328.072 1107.5 334 1089.5 343C1076.15 349.675 1069.45 357.2 1057.5 367.5C1050.38 373.631 1044.33 379.012 1039.5 383.5C1036.59 386.206 1032.5 388 1028 391.5C1019.68 397.97 1017 398.5 1014 405C1008 418 1025 432.5 1059 444',
                                [f.ExtraLarge]:
                                    'M1440 344C1557.5 364 1412.35 356.999 1451.85 368.499C1491.35 379.999 1401.35 399.946 1383.54 402.999C1331.04 411.999 1371.04 432.284 1331.54 442.499C1302.54 449.999 1321.54 470.499 1279.54 495.499C1237.54 520.499 1262.5 540.5 1311 558',
                            },
                        },
                        {
                            routeTo: 21,
                            routeFrom: 20,
                            svgPath: {
                                [f.ExtraSmall]:
                                    'M626 252C641.5 262.5 623.882 277.532 597.999 296.5C593.617 299.528 583.5 314.5 629.999 324.5',
                                [f.Small]:
                                    'M725 278C735.5 287.5 725.004 304.16 695 324C690.217 327.304 664 344 725.5 353',
                                [f.Medium]:
                                    'M887 335C897.5 345.5 899.221 368.332 862.527 392.594C856.677 396.634 837.179 412.428 894.114 432.628',
                                [f.Large]:
                                    'M1053 333C1066.5 342.5 1064.11 368 1020.17 397.056C1013.17 401.895 997 423.5 1059 444',
                                [f.ExtraLarge]:
                                    'M1298 424C1321.5 435 1314.04 470.265 1268.04 504C1260.54 509.5 1235 531 1311 558',
                            },
                        },
                    ],
                    Gu = 'available',
                    $u = 'disabled',
                    Wu = 'opened',
                    qu = {
                        base: 'StageIcon_base_55',
                        back: 'StageIcon_back_76',
                        base__availableStatus: 'StageIcon_base__availableStatus_ac',
                        backStopColor1: 'StageIcon_backStopColor1_d3',
                        base__selected: 'StageIcon_base__selected_ea',
                        backStopColor2: 'StageIcon_backStopColor2_5f',
                        topStroke: 'StageIcon_topStroke_7e',
                        base__disabledStatus: 'StageIcon_base__disabledStatus_74',
                        base__openedStatus: 'StageIcon_base__openedStatus_b1',
                        bodyStopColor1: 'StageIcon_bodyStopColor1_ed',
                        bodyStopColor2: 'StageIcon_bodyStopColor2_a4',
                        jointStopColor: 'StageIcon_jointStopColor_79',
                        point: 'StageIcon_point_5c',
                        number: 'StageIcon_number_bc',
                    },
                    zu = ({
                        isPremium: e,
                        svgNumberPath: u,
                        isOnMap: t,
                        status: a,
                        isSelected: n,
                        scale: s,
                        isHovered: o,
                    }) => {
                        const i = t ? 64 : 45,
                            l = a === Fe.Available;
                        return r().createElement(
                            'svg',
                            {
                                width: 31 * s,
                                height: i * s,
                                viewBox: `0 0 31 ${i}`,
                                fill: 'none',
                                className: p()(
                                    qu.base,
                                    qu[`base__${a || 0 === a ? pe[a] : Fe.Disabled}Status`],
                                    n && qu.base__selected,
                                    t && qu.base__onMap,
                                ),
                                xmlns: 'http://www.w3.org/2000/svg',
                            },
                            r().createElement(
                                'defs',
                                { key: `${n && 'selected'}${o && 'hovered'}${a}` },
                                r().createElement(
                                    'linearGradient',
                                    {
                                        id: 'gradient-body',
                                        x1: '0%',
                                        y1: '0%',
                                        x2: '0%',
                                        y2: '100%',
                                        gradientUnits: 'userSpaceOnUse',
                                    },
                                    r().createElement('stop', { className: qu.bodyStopColor1, offset: '0%' }),
                                    r().createElement('stop', { className: qu.bodyStopColor2, offset: '100%' }),
                                ),
                                r().createElement(
                                    'linearGradient',
                                    { id: 'gradient-joint', x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
                                    r().createElement('stop', {
                                        className: qu.jointStopColor,
                                        stopOpacity: '0',
                                        offset: '0%',
                                    }),
                                    r().createElement('stop', {
                                        className: qu.jointStopColor,
                                        stopOpacity: '1',
                                        offset: '100%',
                                    }),
                                ),
                                r().createElement(
                                    'radialGradient',
                                    { id: 'gradient-back', cx: '50%', cy: '30%', gradientUnits: 'userSpaceOnUse' },
                                    r().createElement('stop', { className: qu.backStopColor1, offset: '0%' }),
                                    r().createElement('stop', { className: qu.backStopColor2, offset: '100%' }),
                                ),
                                r().createElement(
                                    'radialGradient',
                                    {
                                        id: 'gradient-back-premium',
                                        cx: '50%',
                                        cy: '40%',
                                        gradientUnits: 'userSpaceOnUse',
                                    },
                                    r().createElement('stop', { className: qu.backStopColor1, offset: '0%' }),
                                    r().createElement('stop', { className: qu.backStopColor2, offset: '100%' }),
                                ),
                                e
                                    ? r().createElement(
                                          'g',
                                          { id: 'icon' },
                                          r().createElement('path', {
                                              className: qu.back,
                                              d: 'M28 11H3V35L15.5 41L28 35V11Z',
                                          }),
                                          t &&
                                              l &&
                                              r().createElement('path', {
                                                  d: 'M28 11H3V35L15.5 41L28 35V11Z',
                                                  fill: 'url(#gradient-back-premium)',
                                              }),
                                          r().createElement(
                                              'g',
                                              { fill: 'url(#gradient-body)' },
                                              r().createElement('path', {
                                                  d: 'M0 6.00011V0.000111103H6V3.00022H12V0.000111103L19 0V3.00011H25V0L31 0.000111103V6.00011H0Z',
                                              }),
                                              r().createElement('path', {
                                                  d: 'M0 8V14.0001H3V11H27.9994V14L30.9994 14.0001V8H0Z',
                                              }),
                                              r().createElement('path', {
                                                  d: 'M30.9994 17.0001H27.9994V22.0001H30.9994V17.0001Z',
                                              }),
                                              r().createElement('path', { d: 'M0 22.0001H3V17.0001H0V22.0001Z' }),
                                              r().createElement('path', {
                                                  d: 'M30.9994 25.0001H27.9994V35L15.5 41L3 35V25.0001H0V37.0311L15.5 44.2311L30.9994 37.0311V25.0001Z',
                                              }),
                                          ),
                                          r().createElement('path', {
                                              className: qu.topStroke,
                                              d: 'M6 0H0V1H5V4H13V1H18V4H19H26V1H31V0H25V3H19V0H12V3H6V0Z',
                                          }),
                                      )
                                    : r().createElement(
                                          'g',
                                          { id: 'icon' },
                                          r().createElement('path', {
                                              className: qu.back,
                                              d: 'M28 12H3V36.5L15.5 42L28 36.5V12Z',
                                          }),
                                          t &&
                                              l &&
                                              r().createElement('path', {
                                                  d: 'M28 12H3V36.5L15.5 42L28 36.5V12Z',
                                                  fill: 'url(#gradient-back)',
                                              }),
                                          r().createElement(
                                              'g',
                                              { fill: 'url(#gradient-body)' },
                                              r().createElement('path', {
                                                  d: 'M1 10.0004V15.0003L2.99985 15.0004V12.0004H27.9992V15.0004L30 14.9999V10L1 10.0004',
                                              }),
                                              r().createElement('path', {
                                                  d: 'M30 17.9999L27.9992 18.0004V23.0004L30 22.9999V17.9999Z',
                                              }),
                                              r().createElement('path', {
                                                  d: 'M1 23.0003L2.99985 23.0004V18.0004L1 18.0003V23.0003Z',
                                              }),
                                              r().createElement('path', {
                                                  d: 'M30 25.9999L27.9992 26.0004L28 36.5L15.4998 42.0004L2.99985 36.5V26.0004L1 26.0003V38.0313L15.4998 44.5L30 38.0309V25.9999Z',
                                              }),
                                          ),
                                          r().createElement('path', {
                                              className: qu.topStroke,
                                              d: 'M1 10H30V11H1V10Z',
                                          }),
                                      ),
                                r().createElement(
                                    'g',
                                    { id: 'map-joint' },
                                    r().createElement('path', {
                                        fill: 'url(#gradient-joint)',
                                        d: 'M14.5 45.2312H16.5V55.2312H14.5V45.2312Z',
                                    }),
                                    r().createElement('path', {
                                        className: qu.point,
                                        d: 'M18.5 60.2312C18.5 61.8881 17.1569 63.2312 15.5 63.2312C13.8431 63.2312 12.5 61.8881 12.5 60.2312C12.5 58.5743 13.8431 57.2312 15.5 57.2312C17.1569 57.2312 18.5 58.5743 18.5 60.2312Z',
                                    }),
                                ),
                            ),
                            r().createElement(
                                'g',
                                null,
                                r().createElement('use', { xlinkHref: '#icon' }),
                                r().createElement('path', {
                                    d: u,
                                    className: qu.number,
                                    transform: '' + (e ? 'none' : 'translate(0, 1)'),
                                }),
                                t && r().createElement('use', { xlinkHref: '#map-joint' }),
                            ),
                        );
                    },
                    ju = {
                        base: 'Stage_base_88',
                        base__premium: 'Stage_base__premium_3c',
                        base__active: 'Stage_base__active_93',
                        highlightPremium: 'Stage_highlightPremium_2d',
                        highlightPremiumVideo: 'Stage_highlightPremiumVideo_3a',
                        highlight: 'Stage_highlight_b2',
                        highlightPoint: 'Stage_highlightPoint_31',
                    },
                    Zu = R.videos.clan_supply,
                    Yu = (0, I.Pi)(({ isSelected: e = !1, id: u, status: t, isPremium: n, scale: s }) => {
                        const o = Me(),
                            i = o.model,
                            l = o.controls,
                            c = Vu[u].svgPath,
                            E = (0, a.useRef)(null),
                            C = i.computes.nextDisabledPremiumStages(),
                            d = n && C.includes(u),
                            m = (0, a.useState)(!1),
                            _ = m[0],
                            A = m[1];
                        return (
                            (0, a.useEffect)(() => {
                                const e = E.current;
                                if (e) return e.play();
                            }, [e]),
                            r().createElement(
                                'div',
                                {
                                    className: p()(
                                        ju.base,
                                        ju[`base__${pe[t]}Status`],
                                        e && ju.base__active,
                                        n && ju.base__premium,
                                    ),
                                    onClick: () => {
                                        e || ($('tabb'), l.selectStage(u));
                                    },
                                    onMouseEnter: () => {
                                        $('highlight'), A(!0);
                                    },
                                    onMouseLeave: () => {
                                        A(!1);
                                    },
                                },
                                r().createElement('div', { className: ju.highlight }),
                                r().createElement('div', { className: ju.highlightPoint }),
                                d &&
                                    r().createElement(
                                        'div',
                                        { className: ju.highlightPremium },
                                        r().createElement(Oe, {
                                            className: ju.highlightPremiumVideo,
                                            src: e ? Zu.spark_yellow() : Zu.spark_white(),
                                            ref: E,
                                            loop: !0,
                                            autoplay: !0,
                                        }),
                                    ),
                                r().createElement(zu, {
                                    isPremium: n,
                                    svgNumberPath: c,
                                    status: t,
                                    isOnMap: !0,
                                    isSelected: e,
                                    scale: s,
                                    isHovered: _,
                                }),
                            )
                        );
                    }),
                    Qu = {
                        routePath: 'Route_routePath_d6',
                        routePath__openedStatus: 'Route_routePath__openedStatus_b8',
                        routePath__disabledStatus: 'Route_routePath__disabledStatus_87',
                        routePath__availableStatus: 'Route_routePath__availableStatus_22',
                    },
                    Xu = ({
                        path: e,
                        pxWidth: u,
                        pxHeight: t,
                        viewportWidth: a,
                        viewportHeight: n,
                        status: s,
                        className: o,
                    }) =>
                        r().createElement(
                            'svg',
                            {
                                width: u,
                                height: t,
                                viewBox: `0 0 ${a} ${n}`,
                                xmlns: 'http://www.w3.org/2000/svg',
                                className: o,
                            },
                            r().createElement(
                                'g',
                                null,
                                r().createElement('path', {
                                    fillRule: 'evenodd',
                                    clipRule: 'evenodd',
                                    d: e,
                                    className: p()(Qu.routePath, Qu[`routePath__${s}Status`]),
                                }),
                            ),
                        ),
                    Ku = 'Progression_base_b9',
                    Ju = 'Progression_mapContainer_dd',
                    et = 'Progression_stage_63',
                    ut = 'Progression_route_fc',
                    tt = (0, I.Pi)(() => {
                        const e = Me().model,
                            u = e.selectedStageID.get(),
                            t = e.computes.savedStages(),
                            a = e.computes.formattedStages(),
                            n = S().mediaWidth,
                            o = ((e) => ({ width: Hu[e].width, height: Hu[e].height }))(n),
                            i = s.O.view.remToPx(o.width),
                            l = s.O.view.remToPx(o.height),
                            c = Iu();
                        return r().createElement(
                            'div',
                            { className: Ku },
                            r().createElement(
                                'div',
                                { className: Ju },
                                Uu.map((e, u) => {
                                    const t = e.svgPath,
                                        s = e.routeFrom,
                                        c = e.routeTo,
                                        E =
                                            ((C = a[c].status),
                                            (d = a[s].status),
                                            C === Fe.Available && d === Fe.Opened
                                                ? Gu
                                                : C === Fe.Opened && d === Fe.Opened
                                                  ? Wu
                                                  : $u);
                                    var C, d;
                                    return r().createElement(Xu, {
                                        key: u,
                                        pxWidth: i,
                                        pxHeight: l,
                                        viewportWidth: o.width,
                                        viewportHeight: o.height,
                                        status: E,
                                        path: t[n],
                                        className: ut,
                                    });
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: Ju },
                                _e(t, (e, t) => {
                                    const a = e.id,
                                        s = e.status,
                                        o = e.isPremium,
                                        i = Vu[a].coordinates[n],
                                        l = i.top,
                                        E = i.left;
                                    return r().createElement(
                                        'div',
                                        { key: t, className: et, style: { transform: `translate(${E}rem, ${l}rem)` } },
                                        r().createElement(Yu, {
                                            id: a,
                                            status: s,
                                            isPremium: o,
                                            isOnMap: !0,
                                            isSelected: e.id === u,
                                            scale: c,
                                        }),
                                    );
                                }),
                            ),
                        );
                    }),
                    at =
                        (e, u) =>
                        (...t) => {
                            if (e(...t)) return u(...t);
                        };
                let rt;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(rt || (rt = {}));
                const nt = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
                    },
                    st = [
                        'type',
                        'children',
                        'className',
                        'classNames',
                        'disabled',
                        'isVisibleLabel',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                const it = (e) => {
                        let u = e.type,
                            t = e.children,
                            n = e.className,
                            s = e.classNames,
                            o = e.disabled,
                            i = void 0 !== o && o,
                            l = e.isVisibleLabel,
                            c = void 0 !== l && l,
                            E = e.soundHover,
                            C = void 0 === E ? R.sounds.highlight() : E,
                            d = e.soundClick,
                            m = void 0 === d ? R.sounds.play() : d,
                            _ = e.size,
                            A = void 0 === _ ? 'normal' : _,
                            g = e.onClick,
                            F = e.onMouseEnter,
                            D = e.onMouseLeave,
                            B = e.onMouseDown,
                            h = e.onMouseUp,
                            b = e.onFocus,
                            f = e.onBlur,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, st);
                        const S = (0, a.useState)(!1),
                            w = S[0],
                            M = S[1],
                            y = (0, a.useState)(!1),
                            P = y[0],
                            T = y[1],
                            L = (0, a.useRef)(null),
                            x = () => !1 === i,
                            N = (e) => x() && ((e) => e.button === rt.LEFT)(e),
                            O = at(x, (e) => {
                                null == g || g(e);
                            }),
                            k = at(N, (e) => {
                                M(!0), null == B || B(e), m && $(m);
                            }),
                            I = at(N, (e) => {
                                M(!1), null == h || h(e);
                            }),
                            H = at(x, (e) => {
                                T(!0), null == F || F(e), C && $(C);
                            }),
                            V = at(x, (e) => {
                                null == b || b(e);
                            }),
                            U = at(x, (e) => {
                                null == f || f(e);
                            });
                        return r().createElement(
                            'div',
                            ot(
                                {
                                    ref: L,
                                    className: p()(
                                        nt.base,
                                        i && nt.base__disabled,
                                        c && nt.base__visibleLabel,
                                        !i && w && nt.base__mouseDown,
                                        !i && P && nt.base__hovered,
                                        n,
                                    ),
                                    onClick: O,
                                    onMouseEnter: H,
                                    onMouseLeave: (e) => {
                                        T(!1), M(!1), null == D || D(e);
                                    },
                                    onMouseDown: k,
                                    onMouseUp: I,
                                    onFocus: V,
                                    onBlur: U,
                                },
                                v,
                            ),
                            r().createElement('div', {
                                className: p()(
                                    nt.icon,
                                    nt[`icon__${A}`],
                                    nt[`icon__${u}`],
                                    null == s ? void 0 : s.icon,
                                ),
                            }),
                            t &&
                                r().createElement(
                                    'div',
                                    { className: p()(nt.label, nt[`label__${A}`], null == s ? void 0 : s.label) },
                                    t,
                                ),
                        );
                    },
                    lt = 'VehicleReward_base_1f',
                    ct = 'VehicleReward_base__available_7c',
                    Et = 'VehicleReward_content_5e',
                    Ct = 'VehicleReward_shadow_e3',
                    dt = 'VehicleReward_preview_28',
                    mt = 'VehicleReward_vehicleInfo_08',
                    _t = (0, I.Pi)(() => {
                        const e = Me(),
                            u = e.model,
                            t = e.controls,
                            a = u.isMainRewardAvailable.get(),
                            n = S().mediaSize;
                        return r().createElement(
                            'div',
                            { className: p()(lt, a && ct) },
                            r().createElement(
                                'div',
                                { className: Et },
                                r().createElement('div', { className: Ct }),
                                r().createElement(
                                    'div',
                                    { className: dt },
                                    r().createElement(
                                        it,
                                        {
                                            type: 'preview',
                                            size: n < b.Small ? 'small' : 'normal',
                                            onClick: t.openPreview,
                                        },
                                        R.strings.clan_supply.progressionPage.vehicleInfo.preview(),
                                    ),
                                ),
                                r().createElement(Eu, { classNames: { base: mt } }),
                            ),
                        );
                    });
                let At, gt, Ft, Dt, pt, Bt, ht, bt, ft, vt;
                !(function (e) {
                    (e[(e.PENDING = 0)] = 'PENDING'), (e[(e.ERROR = 1)] = 'ERROR'), (e[(e.LOADED = 2)] = 'LOADED');
                })(At || (At = {})),
                    (function (e) {
                        (e[(e.AVAILABLE = 0)] = 'AVAILABLE'),
                            (e[(e.PURCHASED = 1)] = 'PURCHASED'),
                            (e[(e.UNAVAILABLE = 2)] = 'UNAVAILABLE');
                    })(gt || (gt = {}));
                class St extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = V.B3.GOLD;
                        else e = V.B3.INTEGRAL;
                        const u = V.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                (St.defaultProps = { format: 'integral' }),
                    (function (e) {
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
                    })(Ft || (Ft = {})),
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
                    })(Dt || (Dt = {})),
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
                    })(pt || (pt = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Bt || (Bt = {})),
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
                    })(ht || (ht = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(bt || (bt = {})),
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
                    })(ft || (ft = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(vt || (vt = {}));
                const wt = [
                        Ft.Items,
                        Ft.Equipment,
                        Ft.Xp,
                        Ft.XpFactor,
                        Ft.Blueprints,
                        Ft.BlueprintsAny,
                        Ft.Goodies,
                        Ft.Berths,
                        Ft.Slots,
                        Ft.Tokens,
                        Ft.CrewSkins,
                        Ft.CrewBooks,
                        Ft.Customizations,
                        Ft.CreditsFactor,
                        Ft.TankmenXp,
                        Ft.TankmenXpFactor,
                        Ft.FreeXpFactor,
                        Ft.BattleToken,
                        Ft.PremiumUniversal,
                        Ft.NaturalCover,
                        Ft.BpCoin,
                        Ft.BattlePassSelectToken,
                        Ft.BattlaPassFinalAchievement,
                        Ft.BattleBadge,
                        Ft.BonusX5,
                        Ft.CrewBonusX3,
                        Ft.NewYearInvoice,
                        Ft.EpicSelectToken,
                        Ft.Comp7TokenWeeklyReward,
                        Ft.DeluxeGift,
                        Ft.BattleBoosterGift,
                        Ft.OptionalDevice,
                    ],
                    Mt = [Ft.Gold, Ft.Credits, Ft.Crystal, Ft.FreeXp],
                    Rt = [Ft.BattlePassPoints, Ft.EquipCoin],
                    yt = [Ft.PremiumPlus, Ft.Premium],
                    Pt = ['engravings', 'backgrounds'],
                    Tt = ['engraving', 'background'],
                    Lt = (e, u = pt.Small) => {
                        const t = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case pt.S600x450:
                                        return 'c_600x450';
                                    case pt.S400x300:
                                        return 'c_400x300';
                                    case pt.S296x222:
                                        return 'c_296x222';
                                    case pt.S232x174:
                                        return 'c_232x174';
                                    case pt.Big:
                                        return 'c_80x80';
                                    case pt.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${n}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${n}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = Pt[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            n = r.$dyn(t);
                                        return n ? `${n}` : `${r.$dyn(Tt[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${n}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${n}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    xt = [pt.Small, pt.Big],
                    Nt = ['children'];
                function Ot() {
                    return (
                        (Ot =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ot.apply(this, arguments)
                    );
                }
                const kt = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, Nt);
                    return r().createElement(
                        X,
                        Ot(
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
                function It() {
                    return (
                        (It =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        It.apply(this, arguments)
                    );
                }
                const Ht = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = r().createElement('div', { className: t }, e);
                        if (u.header || u.body) return r().createElement(ue, u, a);
                        const n = u.contentId;
                        return n ? r().createElement(X, It({}, u, { contentId: n }), a) : r().createElement(kt, u, a);
                    },
                    Vt = {
                        base: 'Reward_base_ea',
                        base__s48x48: 'Reward_base__s48x48_46',
                        base__small: 'Reward_base__small_c0',
                        base__s80x80: 'Reward_base__s80x80_ce',
                        base__big: 'Reward_base__big_e5',
                        base__s128x100: 'Reward_base__s128x100_c3',
                        base__s180x135: 'Reward_base__s180x135_7c',
                        base__s232x174: 'Reward_base__s232x174_67',
                        base__s296x222: 'Reward_base__s296x222_78',
                        base__s400x300: 'Reward_base__s400x300_07',
                        base__s600x450: 'Reward_base__s600x450_f8',
                        tooltipWrapper: 'Reward_tooltipWrapper_b5',
                        icon: 'Reward_icon_df',
                        overlay: 'Reward_overlay_68',
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    Ut = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = pt.Big,
                        special: n,
                        value: s,
                        valueType: o,
                        title: i,
                        style: l,
                        className: c,
                        classNames: E,
                        tooltipArgs: C,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const m = ((e, u) => {
                                if (void 0 === u || !xt.includes(e)) return null;
                                switch (u) {
                                    case ht.BATTLE_BOOSTER:
                                    case ht.BATTLE_BOOSTER_REPLACE:
                                        return bt.BATTLE_BOOSTER;
                                }
                            })(a, n),
                            _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ht.BATTLE_BOOSTER:
                                        return ft.BATTLE_BOOSTER;
                                    case ht.BATTLE_BOOSTER_REPLACE:
                                        return ft.BATTLE_BOOSTER_REPLACE;
                                    case ht.BUILT_IN_EQUIPMENT:
                                        return ft.BUILT_IN_EQUIPMENT;
                                    case ht.EQUIPMENT_PLUS:
                                        return ft.EQUIPMENT_PLUS;
                                    case ht.EQUIPMENT_TROPHY_BASIC:
                                        return ft.EQUIPMENT_TROPHY_BASIC;
                                    case ht.EQUIPMENT_TROPHY_UPGRADED:
                                        return ft.EQUIPMENT_TROPHY_UPGRADED;
                                    case ht.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ft.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ht.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ft.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ht.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ft.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ht.PROGRESSION_STYLE_UPGRADED_1:
                                        return ft.PROGRESSION_STYLE_UPGRADED_1;
                                    case ht.PROGRESSION_STYLE_UPGRADED_2:
                                        return ft.PROGRESSION_STYLE_UPGRADED_2;
                                    case ht.PROGRESSION_STYLE_UPGRADED_3:
                                        return ft.PROGRESSION_STYLE_UPGRADED_3;
                                    case ht.PROGRESSION_STYLE_UPGRADED_4:
                                        return ft.PROGRESSION_STYLE_UPGRADED_4;
                                    case ht.PROGRESSION_STYLE_UPGRADED_5:
                                        return ft.PROGRESSION_STYLE_UPGRADED_5;
                                    case ht.PROGRESSION_STYLE_UPGRADED_6:
                                        return ft.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(n),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Bt.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Bt.CURRENCY:
                                    case Bt.NUMBER:
                                        return r().createElement(St, { format: 'integral', value: Number(e) });
                                    case Bt.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return r().createElement(
                            'div',
                            { className: p()(Vt.base, Vt[`base__${a}`], c), style: l },
                            r().createElement(
                                Ht,
                                { tooltipArgs: C, className: Vt.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: p()(Vt.image, null == E ? void 0 : E.image) },
                                        m &&
                                            r().createElement('div', {
                                                className: p()(Vt.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: p()(Vt.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        _ &&
                                            r().createElement('div', {
                                                className: p()(Vt.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: p()(
                                                    Vt.info,
                                                    Vt[`info__${e}`],
                                                    o === Bt.MULTI && Vt.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            A,
                                        ),
                                    i && r().createElement('div', { className: Vt.title }, i),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    Ht,
                                    { tooltipArgs: d },
                                    r().createElement('div', {
                                        className: p()(Vt.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Gt = {
                        base: 'Rewards_base_37',
                        label: 'Rewards_label_67',
                        reward: 'Rewards_reward_2a',
                        overlay__battleBooster: 'Rewards_overlay__battleBooster_ca',
                    };
                function $t() {
                    return (
                        ($t =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        $t.apply(this, arguments)
                    );
                }
                const Wt = R.strings.clan_supply.progressionPage.stageInfo,
                    qt = (0, I.Pi)(({ isReceived: e }) => {
                        const u = Me().model.rewards.get();
                        return r().createElement(
                            'div',
                            { className: Gt.base },
                            r().createElement(
                                'div',
                                { className: Gt.label },
                                e ? Wt.rewardsReceivedLabel() : Wt.rewardsLabel(),
                            ),
                            _e(u, (e, u) => {
                                const t = e.tooltipId,
                                    a = Lt(e, pt.Small),
                                    n =
                                        ((s = e.name),
                                        wt.includes(s)
                                            ? Bt.MULTI
                                            : Mt.includes(s)
                                              ? Bt.CURRENCY
                                              : Rt.includes(s)
                                                ? Bt.NUMBER
                                                : yt.includes(s)
                                                  ? Bt.PREMIUM_PLUS
                                                  : Bt.STRING);
                                var s;
                                const o = ((e, u, t) => {
                                    const a = u && { contentId: u };
                                    return Object.assign(
                                        {
                                            args: e,
                                            isEnabled: Boolean((e && e.tooltipId) || u),
                                            ignoreMouseClick: !0,
                                            ignoreShowDelay: !u,
                                        },
                                        a,
                                        t,
                                    );
                                })({ tooltipId: t }, Number(e.tooltipContentId), { ignoreShowDelay: !0 });
                                return r().createElement(
                                    'div',
                                    { className: Gt.reward, key: u },
                                    r().createElement(
                                        Ut,
                                        $t({}, e, {
                                            tooltipArgs: o,
                                            size: pt.Small,
                                            special: e.overlayType,
                                            image: a,
                                            valueType: n,
                                            classNames: { overlay: p()(Gt.overlay, Gt[`overlay__${e.overlayType}`]) },
                                        }),
                                    ),
                                );
                            }),
                        );
                    }),
                    zt = {
                        base: 'Message_base_3e',
                        base__success: 'Message_base__success_15',
                        base__loading: 'Message_base__loading_61',
                        icon: 'Message_icon_b1',
                        rotation: 'Message_rotation_46',
                    };
                let jt;
                !(function (e) {
                    (e.Success = 'success'), (e.Loading = 'loading');
                })(jt || (jt = {}));
                const Zt = ({ text: e, iconType: u }) =>
                        r().createElement(
                            'div',
                            { className: p()(zt.base, u && zt[`base__${u}`]) },
                            u && r().createElement('div', { className: zt.icon }),
                            e,
                        ),
                    Yt = {
                        base: 'Content_base_fb',
                        content: 'Content_content_db',
                        icon: 'Content_icon_07',
                        divider: 'Content_divider_95',
                        actions: 'Content_actions_b7',
                    },
                    Qt = 'EventCurrency_base_c0',
                    Xt = 'EventCurrency_value_85',
                    Kt = 'EventCurrency_value__deficiency_a6',
                    Jt = 'EventCurrency_icon_b9',
                    ea = ({ value: e, isDeficiency: u }) =>
                        r().createElement(
                            'div',
                            { className: Qt },
                            r().createElement(
                                'div',
                                { className: p()(Xt, u && Kt) },
                                e >= 0 ? e : R.strings.clan_supply.main.mdash(),
                            ),
                            r().createElement('div', { className: Jt }),
                        ),
                    ua = 'BuyStage_points_7c',
                    ta = R.strings.clan_supply.progressionPage.stageInfo,
                    aa = ta.exploreButtonTooltip,
                    ra = ({
                        price: e,
                        deficiencyAmount: u,
                        buttonClick: t,
                        isEnoughMoney: a,
                        isStageUnavailable: n,
                        isButtonDisabled: s,
                    }) => {
                        const o = S().mediaSize;
                        let i = '',
                            l = '';
                        var c, E;
                        return (
                            a ||
                                ((i = aa.disabledByPoints.title()),
                                (c = aa.disabledByPoints.description()),
                                (E = { value: u }),
                                (l = c.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                    const u = 0 === e.indexOf('%') ? 2 : 1;
                                    return String(E[e.slice(u, -u)]);
                                }))),
                            n && ((i = aa.disabledByStageStatus.title()), (l = aa.disabledByStageStatus.description())),
                            r().createElement(
                                r().Fragment,
                                null,
                                e > 0 &&
                                    r().createElement(
                                        'div',
                                        { className: ua },
                                        r().createElement(ea, { value: e, isDeficiency: !a }),
                                    ),
                                r().createElement(
                                    ue,
                                    { header: i, body: l, isEnabled: !a || n },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(
                                            hu,
                                            {
                                                type: Du.primary,
                                                size: o < b.Medium ? pu.small : pu.medium,
                                                onClick: () => t(),
                                                disabled: s,
                                                soundClick: 'yes',
                                            },
                                            0 === e ? ta.getRewardButton() : ta.exploreButton(),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    na = R.strings.clan_supply.progressionPage.stageInfo,
                    sa = (0, I.Pi)(() => {
                        const e = Me(),
                            u = e.model,
                            t = e.controls,
                            a = u.stageInfo.get(),
                            n = a.id,
                            s = a.isPremium,
                            o = a.stageStatus,
                            i = a.price,
                            l = a.isEnoughMoney,
                            c = a.deficiencyAmount,
                            E = a.isBuyLoading,
                            C = u.rewards.get(),
                            d = Iu(),
                            m = Vu[n].svgPath,
                            _ = o === gt.PURCHASED,
                            A = () => t.openStage(n);
                        return r().createElement(
                            'div',
                            { className: Yt.base },
                            r().createElement(
                                'div',
                                { className: Yt.content },
                                r().createElement('div', { className: Yt.contentBg }),
                                r().createElement(
                                    'div',
                                    { className: Yt.icon },
                                    r().createElement(zu, { isPremium: s, svgNumberPath: m, scale: d }),
                                ),
                                r().createElement('div', { className: Yt.divider }),
                                C.length > 0 && r().createElement(qt, { isReceived: _ }),
                            ),
                            r().createElement(
                                'div',
                                { className: Yt.actions },
                                r().createElement('div', { className: Yt.actionsBg }),
                                (() => {
                                    switch (!0) {
                                        case _:
                                            return r().createElement(Zt, {
                                                text: na.completed.description(),
                                                iconType: jt.Success,
                                            });
                                        case E:
                                            return r().createElement(Zt, {
                                                text: na.onBuyLoadingMessage(),
                                                iconType: jt.Loading,
                                            });
                                        default:
                                            return r().createElement(ra, {
                                                price: i,
                                                deficiencyAmount: c,
                                                buttonClick: A,
                                                isButtonDisabled: !l || o === gt.UNAVAILABLE || E,
                                                isEnoughMoney: l,
                                                isStageUnavailable: o === gt.UNAVAILABLE,
                                            });
                                    }
                                })(),
                            ),
                        );
                    }),
                    oa = 'Loading_base_0a',
                    ia = 'Loading_text_34',
                    la = 'Loading_spinner_da',
                    ca = () =>
                        r().createElement(
                            'div',
                            { className: oa },
                            r().createElement(
                                'div',
                                { className: ia },
                                R.strings.clan_supply.progressionPage.loading(),
                            ),
                            r().createElement('div', { className: la }),
                        ),
                    Ea = 'StageInfo_base_89',
                    Ca = R.strings.clan_supply.progressionPage.stageInfo,
                    da = (0, I.Pi)(() => {
                        const e = Me(),
                            u = e.model,
                            t = e.controls,
                            a = u.stageInfo.get().status;
                        return r().createElement(
                            'div',
                            { className: Ea },
                            (() => {
                                switch (a) {
                                    case At.PENDING:
                                        return r().createElement(ca, null);
                                    case At.ERROR:
                                        return r().createElement(Ru, {
                                            heading: Ca.errorMessage(),
                                            reloadButtonText: Ca.refreshButtonText(),
                                            onReloadClick: t.stageInfoRefresh,
                                        });
                                    case At.LOADED:
                                        return r().createElement(sa, null);
                                    default:
                                        return null;
                                }
                            })(),
                        );
                    }),
                    ma = 'App_base_f3',
                    _a = 'App_content_05',
                    Aa = 'App_header_f6',
                    ga = 'App_progression_ec',
                    Fa = 'App_progression__backgroundTune_39',
                    Da = 'App_mainReward_a2',
                    pa = 'App_footer_c6',
                    Ba = {
                        [Re.PENDING]: () =>
                            r().createElement(Ou, {
                                classNames: { caption: ku },
                                message: R.strings.clan_supply.questsPage.loading(),
                            }),
                        [Re.ERROR]: Pu,
                        [Re.LOADED]: () =>
                            r().createElement(
                                r().Fragment,
                                null,
                                r().createElement('div', { className: p()(ga, Fa) }, r().createElement(tt, null)),
                                r().createElement('div', { className: Da }, r().createElement(_t, null)),
                                r().createElement('div', { className: pa }, r().createElement(da, null)),
                            ),
                    },
                    ha = (0, I.Pi)(({ screenStatus: e }) => {
                        const u = Ba[e];
                        return u ? r().createElement(u, null) : (console.error('Unreachable code: ViewResolver'), null);
                    }),
                    ba = (0, I.Pi)(() => {
                        const e = Me().model.status.get(),
                            u = e === Re.ERROR || e === Re.PENDING;
                        return r().createElement(
                            'div',
                            { className: ma },
                            r().createElement(ze, { isShaded: u, withVideo: !u }),
                            r().createElement(
                                'div',
                                { className: _a },
                                r().createElement('div', { className: Aa }, r().createElement(gu, null)),
                                r().createElement(ha, { screenStatus: e }),
                            ),
                        );
                    }),
                    fa = { context: 'model.progressionModel' };
                let va, Sa, wa, Ma;
                !(function (e) {
                    (e[(e.PENDING = 0)] = 'PENDING'),
                        (e[(e.ERROR = 1)] = 'ERROR'),
                        (e[(e.PLAYER_NOT_IN_CLAN = 2)] = 'PLAYER_NOT_IN_CLAN'),
                        (e[(e.REWARD_AVAILABLE = 3)] = 'REWARD_AVAILABLE'),
                        (e[(e.PREVIOUS_REWARDS = 4)] = 'PREVIOUS_REWARDS'),
                        (e[(e.IN_PROGRESS = 5)] = 'IN_PROGRESS');
                })(va || (va = {})),
                    (function (e) {
                        (e[(e.DISABLED = 0)] = 'DISABLED'),
                            (e[(e.IN_PROGRESS = 1)] = 'IN_PROGRESS'),
                            (e[(e.REWARD_AVAILABLE = 2)] = 'REWARD_AVAILABLE'),
                            (e[(e.REWARD_PENDING = 3)] = 'REWARD_PENDING'),
                            (e[(e.COMPLETE = 4)] = 'COMPLETE');
                    })(Sa || (Sa = {})),
                    (function (e) {
                        (e.FRAGS = 'frags'), (e.FULL_DAMAGE = 'fullDamage'), (e.EXP = 'exp'), (e.WIN = 'win');
                    })(wa || (wa = {})),
                    (function (e) {
                        (e.SOLO = 'solo'),
                            (e.PLATOON = 'platoon'),
                            (e.SOLO_AND_PLATOON = 'soloAndPlatoon'),
                            (e.DETACHMENT = 'detachment');
                    })(Ma || (Ma = {}));
                const Ra = ie()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    quests: e.array('quests'),
                                    previousRewards: e.array('previousRewards'),
                                },
                                t = (0, Ce.Om)((e) => {
                                    const t = de(u.quests.get(), e + 1);
                                    return !!t && t.status !== Sa.DISABLED;
                                });
                            return Object.assign({}, u, { computes: { isNextQuestAvailable: t } });
                        },
                        ({ externalModel: e }) => ({
                            claimTheReward: e.createCallbackNoArgs('onClaimReward'),
                            goToClans: e.createCallbackNoArgs('onGoToClans'),
                            refresh: e.createCallbackNoArgs('onRefresh'),
                        }),
                    ),
                    ya = Ra[0],
                    Pa = Ra[1],
                    Ta = 'ErrorScreen_base_0e',
                    La = 'ErrorScreen_header_68',
                    xa = 'ErrorScreen_icon_86',
                    Na = 'ErrorScreen_heading_0b',
                    Oa = 'ErrorScreen_description_04',
                    ka = 'ErrorScreen_button_72',
                    Ia = R.strings.clan_supply.questsPage.errorScreen,
                    Ha = (0, I.Pi)(() => {
                        const e = Pa().controls;
                        return r().createElement(
                            'div',
                            { className: Ta },
                            r().createElement(
                                'div',
                                { className: La },
                                r().createElement('div', { className: xa }),
                                r().createElement('div', { className: Na }, Ia.heading()),
                            ),
                            r().createElement('div', { className: Oa }, Ia.description()),
                            r().createElement(
                                hu,
                                { mixClass: ka, type: 'secondary', onClick: e.refresh },
                                Ia.button.refresh(),
                            ),
                        );
                    }),
                    Va = 'ClaimTheReward_base_97',
                    Ua = 'ClaimTheReward_message_23',
                    Ga = 'ClaimTheReward_reward_fe',
                    $a = 'ClaimTheReward_buttonWrapper_d3',
                    Wa = 'ClaimTheReward_glow_07',
                    qa = 'ClaimTheReward_button_3e',
                    za = {
                        base: 'Reward_base_74',
                        base__tourcoin: 'Reward_base__tourcoin_46',
                        base__industrialResource: 'Reward_base__industrialResource_bb',
                        icon: 'Reward_icon_7d',
                    },
                    ja = ({ name: e, value: u }) =>
                        r().createElement(
                            'div',
                            { className: p()(za.base, za[`base__${e}`]) },
                            r().createElement('span', null, u),
                            r().createElement('div', {
                                className: za.icon,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.clanSupply.questsPage.rewardIcons.$dyn(e)})`,
                                },
                            }),
                        ),
                    Za = R.strings.clan_supply.questsPage.footer,
                    Ya = (0, I.Pi)(() => {
                        const e = Pa(),
                            u = e.model,
                            t = e.controls,
                            a = u.root.get(),
                            n = a.status,
                            s = a.isRewardsLoading,
                            o = u.previousRewards.get();
                        return r().createElement(
                            'div',
                            { className: Va },
                            n === va.PREVIOUS_REWARDS &&
                                r().createElement(ru, {
                                    classMix: Ua,
                                    text: Za.message.rewardNotClaimed(),
                                    binding: {
                                        reward: r().createElement(
                                            r().Fragment,
                                            null,
                                            _e(o, (e, u) =>
                                                r().createElement(
                                                    'div',
                                                    { key: u, className: Ga },
                                                    r().createElement(ja, e),
                                                ),
                                            ),
                                        ),
                                    },
                                }),
                            r().createElement(
                                'div',
                                { className: $a },
                                r().createElement('div', { className: Wa }),
                                r().createElement(
                                    hu,
                                    { mixClass: qa, type: 'main', disabled: s, onClick: t.claimTheReward },
                                    Za.button.claimTheReward(),
                                ),
                            ),
                        );
                    }),
                    Qa = 'Footer_base_65',
                    Xa = 'NonClanMemberWarning_base_ae',
                    Ka = 'NonClanMemberWarning_glow_95',
                    Ja = 'NonClanMemberWarning_text_55',
                    er = R.strings.clan_supply.questsPage.footer,
                    ur = (0, I.Pi)(() => {
                        const e = Pa().controls,
                            u = S().mediaSize;
                        return r().createElement(
                            'div',
                            { className: Xa },
                            r().createElement('div', { className: Ka }),
                            r().createElement('div', { className: Ja }, er.message.nonClanMember()),
                            r().createElement(
                                hu,
                                { type: Du.primary, size: u < b.Medium ? pu.small : pu.medium, onClick: e.goToClans },
                                er.button.nonClanMember(),
                            ),
                        );
                    }),
                    tr = (0, I.Pi)(() => {
                        const e = Pa().model.root.get().status;
                        return r().createElement(
                            'div',
                            { className: Qa },
                            (() => {
                                switch (e) {
                                    case va.PLAYER_NOT_IN_CLAN:
                                        return r().createElement(ur, null);
                                    case va.IN_PROGRESS:
                                        return null;
                                    default:
                                        return r().createElement(Ya, null);
                                }
                            })(),
                        );
                    }),
                    ar = 'Header_base_11',
                    rr = 'Header_heading_9f',
                    nr = 'Header_subheading_43',
                    sr = R.strings.clan_supply.questsPage.header,
                    or = (0, I.Pi)(() => {
                        const e = Pa().model.root.get().cycleDuration;
                        return r().createElement(
                            'div',
                            { className: ar },
                            r().createElement('div', { className: rr }, sr.heading()),
                            r().createElement(ru, { classMix: nr, text: sr.subheading(), binding: { hours: e } }),
                        );
                    }),
                    ir = {
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
                    lr = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    cr = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Er = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Cr = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const n = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            s = (0, a.useMemo)(() => u || {}, [u]);
                        let o = lr.exec(e),
                            i = e,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                a = cr.exec(t),
                                c = Er.exec(t),
                                E = o[1];
                            if (a && c) {
                                const e = a[0],
                                    o = e + l++ + e;
                                (i = i.replace(t, `%(${o})`)),
                                    (s[o] = ir[e]
                                        ? r().createElement(
                                              'span',
                                              { className: ir[e] },
                                              r().createElement(ru, { text: E, binding: u }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: n(e) },
                                              r().createElement(ru, { text: E, binding: u }),
                                          ));
                            }
                            o = lr.exec(e);
                        }
                        return r().createElement(ru, { text: i, classMix: t, binding: s });
                    }),
                    dr = 'Condition_base_26',
                    mr = R.strings.clan_supply.questsPage.questCard.condition,
                    _r = ({
                        mainCondition: e,
                        mainSquadState: u,
                        alternativeCondition: t,
                        alternativeSquadState: a,
                        conditionParams: n,
                    }) => {
                        const s = mr.$dyn(e).$dyn(u).$dyn(t).$dyn(a);
                        return r().createElement(Cr, { classMix: dr, text: s, binding: JSON.parse(n) });
                    },
                    Ar = 'Icon_base_77',
                    gr = ({ level: e }) => {
                        const u = S().mediaSize;
                        let t = u;
                        u === b.ExtraLarge && (t = b.Large);
                        const a = R.images.gui.maps.icons.clanSupply.questsPage.questCard.icon.$dyn(`c_${t}`);
                        return r().createElement('div', {
                            className: Ar,
                            style: { backgroundImage: `url(${a.$dyn(`c_${e}`)})` },
                        });
                    },
                    Fr = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Dr, pr;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Dr || (Dr = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(pr || (pr = {}));
                const Br = ({ size: e = Dr.Default }) => {
                        const u = p()(Fr.background, Fr[`background__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    hr = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    br = ({ size: e }) => {
                        const u = p()(hr.base, hr[`base__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    fr = {
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
                    vr = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: n, withoutBounce: s }) => {
                            const o = p()(
                                    fr.base,
                                    fr[`base__${e}`],
                                    t && fr.base__disabled,
                                    n && fr.base__finished,
                                    s && fr.base__withoutBounce,
                                ),
                                i = !t && !n;
                            return r().createElement(
                                'div',
                                { className: o, style: a, ref: u },
                                r().createElement('div', { className: fr.pattern }),
                                r().createElement('div', { className: fr.gradient }),
                                i && r().createElement(br, { size: e }),
                            );
                        },
                    ),
                    Sr = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: s }) => {
                        const o = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                i && s && s();
                            }, [i, s]),
                            r().createElement(vr, { size: e, disabled: n, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    },
                    wr = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(a);
                        };
                    };
                let Mr, Rr;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Mr || (Mr = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Rr || (Rr = {}));
                const yr = 'ProgressBarDeltaSimple_base_6c',
                    Pr = 'ProgressBarDeltaSimple_delta_99',
                    Tr = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < n,
                                E = (0, a.useState)(Rr.Idle),
                                C = E[0],
                                d = E[1],
                                m = C === Rr.In,
                                _ = C === Rr.End,
                                A = C === Rr.Idle,
                                g = (0, a.useCallback)(
                                    (e) => {
                                        d(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, a.useEffect)(() => {
                                if (A && !t) {
                                    return wr(() => {
                                        g(Rr.In);
                                    }, u);
                                }
                            }, [g, t, A, u]),
                                (0, a.useEffect)(() => {
                                    if (m) {
                                        return wr(() => {
                                            i && i(), g(Rr.End);
                                        }, e + u);
                                    }
                                }, [g, m, i, u, e]);
                            const F = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                D = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                p = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(n - o)}%`, left: `${c ? o : n}%` }),
                                    [n, c, o],
                                );
                            return _
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: yr, style: p },
                                      r().createElement(
                                          'div',
                                          { style: A ? F : D, className: Pr },
                                          r().createElement(br, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    Lr = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(vr, {
                                    size: u,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: o,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    r().createElement(Tr, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    xr = 'ProgressBarDeltaGrow_base_7e',
                    Nr = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Or = 'ProgressBarDeltaGrow_glow_68',
                    kr = (e) => (e ? { left: 0 } : { right: 0 }),
                    Ir = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Hr = (e) => ({ transitionDuration: `${e}ms` }),
                    Vr = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const E = o < n,
                                C = (0, a.useState)(Mr.Idle),
                                d = C[0],
                                m = C[1],
                                _ = d === Mr.End,
                                A = d === Mr.Idle,
                                g = d === Mr.Grow,
                                F = d === Mr.Shrink,
                                D = (0, a.useCallback)(
                                    (e) => {
                                        m(e), l && l(e);
                                    },
                                    [l],
                                ),
                                B = (0, a.useCallback)(
                                    (e, u) =>
                                        wr(() => {
                                            D(e);
                                        }, u),
                                    [D],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return A
                                        ? B(Mr.Grow, u)
                                        : g
                                          ? B(Mr.Shrink, e)
                                          : F
                                            ? B(Mr.End, e)
                                            : void (_ && i && i());
                            }, [B, t, _, g, A, F, i, u, e]);
                            const h = (0, a.useMemo)(() => Object.assign({ width: '100%' }, Hr(e), kr(E)), [E, e]),
                                b = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Hr(e), kr(E)), [E, e]),
                                f = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Ir(E, n), Hr(e)), [n, E, e]),
                                v = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - n)}%` }, Ir(E, n), Hr(e)),
                                    [n, E, o, e],
                                );
                            if (_) return null;
                            const S = p()(xr, c, E && 0 === o && Nr);
                            return r().createElement(
                                'div',
                                { style: A ? f : v, className: S },
                                r().createElement(
                                    'div',
                                    { style: F ? b : h, className: Or },
                                    r().createElement(br, { size: s }),
                                ),
                            );
                        },
                    ),
                    Ur = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                C = (0, a.useState)(!1),
                                d = C[0],
                                m = C[1],
                                _ = (0, a.useCallback)(
                                    (e) => {
                                        e === Mr.Shrink && m(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                A = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                g = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(vr, {
                                    size: u,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: o,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: d ? g : A,
                                }),
                                t >= 0 &&
                                    r().createElement(Vr, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: _,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    Gr = ['onComplete', 'onEndAnimation'];
                function $r() {
                    return (
                        ($r =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        $r.apply(this, arguments)
                    );
                }
                const Wr = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Gr);
                        const s = (0, a.useState)(!1),
                            o = s[0],
                            i = s[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === n.to;
                                e !== o && i(e), e && u && u(), t && t();
                            }, [o, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case pr.Simple:
                                return r().createElement(Lr, $r({}, n, { onEndAnimation: l, isComplete: o }));
                            case pr.Growing:
                                return r().createElement(Ur, $r({}, n, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    qr = ['onEndAnimation'];
                function zr() {
                    return (
                        (zr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        zr.apply(this, arguments)
                    );
                }
                const jr = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, qr);
                    const n = (0, a.useRef)({}),
                        s = (0, a.useCallback)(() => {
                            (n.current.from = void 0), u && u();
                        }, [u]),
                        o = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = o),
                        r().createElement(Wr, zr({}, t, { onEndAnimation: s, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function Zr() {
                    return (
                        (Zr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Zr.apply(this, arguments)
                    );
                }
                const Yr = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: n,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (n === u)
                                return r().createElement(Sr, {
                                    key: `${n}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: n,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: a,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? r().createElement(jr, c)
                                : r().createElement(Wr, Zr({ key: `${n}-${u}` }, c));
                        },
                    ),
                    Qr = (e) => ({
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
                    Xr = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (ye(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    Kr = {
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
                    Jr = {
                        freezed: !1,
                        withStack: !1,
                        type: pr.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    en = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Kr,
                            size: t = Dr.Default,
                            animationSettings: n = Jr,
                            disabled: s = !1,
                            withoutBackground: o = !1,
                            value: i,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: E,
                            onEndAnimation: C,
                            onComplete: d,
                        }) => {
                            const m = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const a = (ye(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: Xr(a, u, t) };
                                }, [t, u, e]))(i, e, l);
                            return r().createElement(
                                'div',
                                { className: p()(Fr.base, Fr[`base__${t}`]), style: Qr(u) },
                                !o && r().createElement(Br, { size: t }),
                                r().createElement(Yr, {
                                    size: t,
                                    lineRef: c,
                                    disabled: s,
                                    value: m.value,
                                    deltaFrom: m.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: C,
                                    onChangeAnimationState: E,
                                    onComplete: d,
                                }),
                            );
                        },
                    ),
                    un = {
                        base: 'Progress_base_91',
                        counter: 'Progress_counter_a1',
                        slash: 'Progress_slash_62',
                        check: 'Progress_check_00',
                        base__inProgress: 'Progress_base__inProgress_aa',
                        current__started: 'Progress_current__started_62',
                        requested: 'Progress_requested_bf',
                    },
                    tn = ({ currentProgress: e, requiredProgress: u, status: t, isNonClanPlayer: a }) => {
                        const n = t === Sa.COMPLETE || t === Sa.REWARD_AVAILABLE || t === Sa.REWARD_PENDING;
                        return r().createElement(
                            'div',
                            { className: p()(un.base, t === Sa.IN_PROGRESS && un.base__inProgress) },
                            r().createElement(
                                'div',
                                { className: un.counter },
                                n
                                    ? r().createElement('div', { className: un.check })
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(
                                              'span',
                                              { className: p()(un.current, e > 0 && un.current__started) },
                                              e,
                                          ),
                                          r().createElement('span', { className: un.slash }, '/'),
                                          r().createElement('span', { className: un.requested }, u),
                                      ),
                            ),
                            r().createElement(en, {
                                value: e,
                                maxValue: u,
                                size: Dr.Small,
                                disabled: t === Sa.DISABLED || a,
                            }),
                        );
                    },
                    an = 'QuestCard_base_d0',
                    rn = 'QuestCard_icon_e1',
                    nn = 'QuestCard_base__disabled_59',
                    sn = 'QuestCard_condition_1c',
                    on = 'QuestCard_progress_94',
                    ln = 'QuestCard_footer_62',
                    cn = 'QuestCard_rewards_68',
                    En = 'QuestCard_reward_cb',
                    Cn = 'QuestCard_rewardStatus_8e',
                    dn = {
                        base: 'Reward_base_fa',
                        icon: 'Reward_icon_f2',
                        value: 'Reward_value_2b',
                        base__nameTourcoin: 'Reward_base__nameTourcoin_50',
                        base__nameIndustrialResource: 'Reward_base__nameIndustrialResource_dd',
                    },
                    mn = ({ name: e, value: u }) => {
                        const t = R.images.gui.maps.icons.clanSupply.questsPage.rewardIcons.$dyn(e),
                            a = R.strings.clan_supply.questsPage.questCard.reward.tooltip.$dyn(e).$dyn('header');
                        return r().createElement(
                            ue,
                            { header: a },
                            r().createElement(
                                'div',
                                {
                                    className: p()(
                                        dn.base,
                                        dn[`base__name${((n = e), n[0].toUpperCase() + n.slice(1))}`],
                                    ),
                                },
                                r().createElement('div', {
                                    className: dn.icon,
                                    style: { backgroundImage: `url(${t})` },
                                }),
                                r().createElement('div', { className: dn.value }, u),
                            ),
                        );
                        var n;
                    },
                    _n = {
                        base: 'RewardStatus_base_2a',
                        base__completed: 'RewardStatus_base__completed_00',
                        base__available: 'RewardStatus_base__available_03',
                        base__disabled: 'RewardStatus_base__disabled_ac',
                        base__pending: 'RewardStatus_base__pending_ba',
                        icon: 'RewardStatus_icon_dc',
                    },
                    An = {
                        [Sa.DISABLED]: 'disabled',
                        [Sa.COMPLETE]: 'completed',
                        [Sa.REWARD_AVAILABLE]: 'available',
                        [Sa.REWARD_PENDING]: 'pending',
                    },
                    gn = R.strings.clan_supply.questsPage.questCard.tooltip.status.disabled,
                    Fn = (0, I.Pi)(({ status: e }) => {
                        const u = Pa().model.root.get().status;
                        return e === Sa.IN_PROGRESS
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: p()(_n.base, _n[`base__${An[e]}`]) },
                                  e === Sa.DISABLED &&
                                      r().createElement(
                                          ue,
                                          {
                                              header: gn.header(),
                                              body:
                                                  u === va.PREVIOUS_REWARDS
                                                      ? gn.body.previousCycleRewardNotClaimed()
                                                      : gn.body.previousQuestRewardNotClaimed(),
                                          },
                                          r().createElement('div', { className: _n.icon }),
                                      ),
                                  R.strings.clan_supply.questsPage.questCard.status.$dyn(An[e]),
                              );
                    }),
                    Dn = ({
                        level: e,
                        currentProgress: u,
                        requiredProgress: t,
                        mainCondition: a,
                        mainSquadState: n,
                        alternativeCondition: s,
                        alternativeSquadState: o,
                        conditionParams: i,
                        status: l,
                        rewards: c,
                        isDisabled: E,
                        isNonClanPlayer: C,
                    }) =>
                        r().createElement(
                            'div',
                            { className: p()(an, E && nn) },
                            r().createElement('div', { className: rn }, r().createElement(gr, { level: e })),
                            r().createElement(
                                'div',
                                { className: sn },
                                r().createElement(_r, {
                                    mainCondition: a,
                                    mainSquadState: n,
                                    alternativeCondition: s,
                                    alternativeSquadState: o,
                                    conditionParams: i,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: on },
                                r().createElement(tn, {
                                    currentProgress: u,
                                    requiredProgress: t,
                                    status: l,
                                    isNonClanPlayer: C,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: ln },
                                r().createElement(
                                    'div',
                                    { className: cn },
                                    _e(c, (e) =>
                                        r().createElement(
                                            'div',
                                            { key: e.name, className: En },
                                            r().createElement(mn, e),
                                        ),
                                    ),
                                ),
                                r().createElement('div', { className: Cn }, r().createElement(Fn, { status: l })),
                            ),
                        ),
                    pn = 'Quests_base_1a',
                    Bn = 'Quests_separator_a4',
                    hn = 'Quests_separator__nextQuestAvailable_c1',
                    bn = 'Quests_activeSeparator_fd';
                function fn() {
                    return (
                        (fn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        fn.apply(this, arguments)
                    );
                }
                const vn = (0, I.Pi)(() => {
                        const e = Pa().model,
                            u = e.quests.get(),
                            t = e.root.get().status;
                        return r().createElement(
                            'div',
                            { className: pn },
                            _e(u, (u, a, n) => {
                                const s = e.computes.isNextQuestAvailable(a);
                                return r().createElement(
                                    r().Fragment,
                                    { key: u.level },
                                    r().createElement(
                                        Dn,
                                        fn({}, u, {
                                            isDisabled:
                                                u.status === Sa.DISABLED ||
                                                u.status === Sa.COMPLETE ||
                                                t === va.PLAYER_NOT_IN_CLAN,
                                            isNonClanPlayer: t === va.PLAYER_NOT_IN_CLAN,
                                        }),
                                    ),
                                    a !== n.length - 1 &&
                                        r().createElement(
                                            'div',
                                            { className: p()(Bn, s && hn) },
                                            s && r().createElement('div', { className: bn }),
                                        ),
                                );
                            }),
                        );
                    }),
                    Sn = {
                        base: 'QuestsPage_base_2f',
                        spinner: 'QuestsPage_spinner_a5',
                        main: 'QuestsPage_main_ad',
                        timeLeft: 'QuestsPage_timeLeft_6a',
                        quests: 'QuestsPage_quests_86',
                        footer__notInClan: 'QuestsPage_footer__notInClan_18',
                        footer__previousRewards: 'QuestsPage_footer__previousRewards_8e',
                        errorScreenWrapper: 'QuestsPage_errorScreenWrapper_50',
                        errorScreen: 'QuestsPage_errorScreen_19',
                    };
                var wn = t(613);
                const Mn = 60,
                    Rn = 3600,
                    yn = 86400;
                Date.now(), wn.Ew.getRegionalDateTime, wn.Ew.getFormattedDateTime;
                function Pn(e) {
                    return e.toString().padStart(2, '0');
                }
                const Tn = () => {},
                    Ln = (e = 0, u, t = 0, r = Tn) => {
                        const n = (0, a.useState)(e),
                            s = n[0],
                            o = n[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    o(e);
                                    const a = Date.now(),
                                        n = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - a) / 1e3);
                                                null !== t && u <= t ? (o(t), r && r(), clearInterval(n)) : o(u);
                                            },
                                            1e3 * (u || (e > 120 ? Mn : 1)),
                                        );
                                    return () => {
                                        clearInterval(n);
                                    };
                                }
                            }, [e, u, t, r]),
                            s
                        );
                    };
                V.Sw.instance;
                let xn;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(xn || (xn = {}));
                V.Sw.instance;
                const Nn = Ln,
                    On = 'Countdown_base_0c',
                    kn = 'Countdown_iconContainer_eb',
                    In = 'Countdown_icon_80',
                    Hn = 'Countdown_countdown_63',
                    Vn = 'Countdown_base__expired_92',
                    Un = (0, I.Pi)(() => {
                        const e = Pa().model.root.get().updateTime,
                            u = Math.floor(e - Date.now() / 1e3),
                            t = Nn(u, 1),
                            a = t <= 0,
                            n = t < Rn ? 'short' : 'long',
                            s = a
                                ? R.strings.clan_supply.questsPage.timer.dash()
                                : ((e, u) => {
                                      switch (u) {
                                          case 'short':
                                              return `${Pn(e.minutes)} : ${Pn(e.seconds)}`;
                                          case 'long':
                                              return `${Pn(e.hours)} : ${Pn(e.minutes)} : ${Pn(e.seconds)}`;
                                      }
                                  })(
                                      (function (e = 0) {
                                          let u = e;
                                          const t = Math.trunc(u / yn);
                                          u -= t * yn;
                                          const a = Math.trunc(u / Rn);
                                          u -= a * Rn;
                                          const r = Math.trunc(u / Mn);
                                          return (u -= r * Mn), { days: t, hours: a, minutes: r, seconds: u };
                                      })(t),
                                      n,
                                  );
                        return r().createElement(
                            'div',
                            { className: p()(On, a && Vn) },
                            r().createElement('div', { className: kn }, r().createElement('div', { className: In })),
                            r().createElement('div', { className: Hn }, s),
                        );
                    }),
                    Gn = {
                        base: 'TimeLeft_base_1d',
                        heading: 'TimeLeft_heading_46',
                        countdown: 'TimeLeft_countdown_e9',
                        countdownWrapper: 'TimeLeft_countdownWrapper_db',
                        line: 'TimeLeft_line_33',
                        line__right: 'TimeLeft_line__right_53',
                        glow: 'TimeLeft_glow_83',
                    },
                    $n = R.strings.clan_supply.questsPage.timer,
                    Wn = (0, I.Pi)(() => {
                        const e = Pa().model.root.get().updateTime,
                            u = Math.floor(e - Date.now() / 1e3) <= 7200;
                        return r().createElement(
                            'div',
                            { className: Gn.base },
                            r().createElement('div', { className: Gn.heading }, $n.heading()),
                            r().createElement(
                                'div',
                                { className: Gn.countdownWrapper },
                                r().createElement('div', { className: p()(Gn.line, Gn.line__left) }),
                                u && r().createElement('div', { className: Gn.glow }),
                                r().createElement('div', { className: Gn.countdown }, r().createElement(Un, null)),
                                r().createElement('div', { className: p()(Gn.line, Gn.line__right) }),
                            ),
                        );
                    }),
                    qn = (0, I.Pi)(() => {
                        const e = Pa().model.root.get().status;
                        return r().createElement(
                            'div',
                            { className: Sn.base },
                            r().createElement(ze, { isShaded: !0 }),
                            r().createElement('div', { className: Sn.header }, r().createElement(or, null)),
                            (() => {
                                switch (e) {
                                    case va.PENDING:
                                        return r().createElement(
                                            'div',
                                            { className: Sn.spinner },
                                            r().createElement(Ou, {
                                                message: R.strings.clan_supply.questsPage.loading(),
                                            }),
                                        );
                                    case va.ERROR:
                                        return r().createElement(
                                            'div',
                                            { className: Sn.errorScreenWrapper },
                                            r().createElement(
                                                'div',
                                                { className: Sn.errorScreen },
                                                r().createElement(Ha, null),
                                            ),
                                        );
                                    default:
                                        return r().createElement(
                                            'div',
                                            { className: Sn.main },
                                            r().createElement(
                                                'div',
                                                { className: Sn.timeLeft },
                                                r().createElement(Wn, null),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: Sn.quests },
                                                r().createElement(vn, null),
                                            ),
                                            r().createElement(
                                                'div',
                                                {
                                                    className: p()(
                                                        Sn.footer,
                                                        e === va.PLAYER_NOT_IN_CLAN && Sn.footer__notInClan,
                                                        e === va.PREVIOUS_REWARDS && Sn.footer__previousRewards,
                                                    ),
                                                },
                                                r().createElement(tr, null),
                                            ),
                                        );
                                }
                            })(),
                        );
                    }),
                    zn = { context: 'model.questsModel' },
                    jn = {
                        [ge.Progression]: () => r().createElement(we, { options: fa }, r().createElement(ba, null)),
                        [ge.Quests]: () => r().createElement(ya, { options: zn }, r().createElement(qn, null)),
                    },
                    Zn = ({ pageView: e }) => {
                        const u = jn[e];
                        return u ? r().createElement(u, null) : (console.error('Unreachable code: ViewResolver'), null);
                    };
                var Yn = t(30);
                const Qn = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    Xn = r().forwardRef(function ({ classNames: e, arrowRef: u, size: t = 'medium', className: a }, n) {
                        return r().createElement(
                            'div',
                            { className: p()(Qn.base, Qn[`base__${t}`], a), ref: n },
                            r().createElement('div', {
                                className: p()(
                                    Qn.border,
                                    Qn.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            r().createElement('div', {
                                className: p()(
                                    Qn.border,
                                    Qn.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            r().createElement('div', {
                                className: p()(Qn.arrow, null == e ? void 0 : e.arrow),
                                ref: u,
                            }),
                        );
                    }),
                    Kn = {
                        base: 'Tab_base_cd',
                        base__small: 'Tab_base__small_bf',
                        base__medium: 'Tab_base__medium_96',
                        base__active: 'Tab_base__active_7e',
                        highlight: 'Tab_highlight_b6',
                        icon: 'Tab_icon_28',
                        icon__small: 'Tab_icon__small_48',
                        icon__medium: 'Tab_icon__medium_73',
                        notification: 'Tab_notification_86',
                        notification__symbol: 'Tab_notification__symbol_9b',
                        notification__small: 'Tab_notification__small_92',
                        notification__dot: 'Tab_notification__dot_51',
                        notification__medium: 'Tab_notification__medium_e6',
                        notification__large: 'Tab_notification__large_6b',
                    },
                    Jn = { mouseEnter: 'highlight', click: 'play' },
                    es = r().forwardRef(function (
                        {
                            id: e,
                            isActive: u,
                            className: t,
                            classNames: a,
                            sounds: n = Jn,
                            notification: s,
                            icon: o,
                            size: i,
                            additionContent: l,
                            onClick: c,
                            onMouseEnter: E,
                            onMouseLeave: C,
                            WrapperElement: d,
                        },
                        m,
                    ) {
                        const _ = (e, t) => {
                                !u && n[t] && $(n[t]);
                            },
                            A = r().createElement(
                                'div',
                                {
                                    className: p()(
                                        Kn.base,
                                        Kn[`base__${i}`],
                                        u && p()(Kn.base__active, null == a ? void 0 : a.activeTab),
                                        t,
                                    ),
                                    onClick: ((e) => () => {
                                        _(0, 'click'), null == c || c(e);
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        _(0, 'mouseEnter'), null == E || E(e);
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        _(0, 'mouseLeave'), null == C || C(e);
                                    })(e),
                                    ref: u ? m : null,
                                },
                                r().createElement('div', {
                                    className: p()(Kn.highlight, null == a ? void 0 : a.highlight),
                                }),
                                'function' == typeof o && i
                                    ? o(i)
                                    : r().createElement('div', {
                                          className: p()(Kn.icon, Kn[`icon__${i}`], null == a ? void 0 : a.icon),
                                          style: { backgroundImage: `url(${o})` },
                                      }),
                                l && l({ id: e, size: i, isActive: u }),
                                s &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: p()(
                                                Kn.notification,
                                                Kn[`notification__${s.type}`],
                                                s.size ? Kn[`notification__${s.size}`] : Kn.notification__medium,
                                                null == a ? void 0 : a.notification,
                                            ),
                                        },
                                        'dot' !== s.type && s.value,
                                    ),
                            );
                        return d ? r().createElement(d, { key: e, id: e }, A) : A;
                    }),
                    us = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    },
                    ts = r().memo(function ({
                        active: e,
                        tabs: u,
                        sounds: t,
                        className: n,
                        classNames: o,
                        size: i = 'medium',
                        additionContent: l,
                        onClick: c,
                        onMouseEnter: E,
                        onMouseLeave: C,
                        WrapperElement: d,
                    }) {
                        const m = (0, a.useRef)(null),
                            _ = (0, a.useRef)(null),
                            A = (0, a.useRef)(null),
                            g = (0, a.useRef)(null),
                            F = (0, Yn.useSpring)(() => ({
                                marginLeft: 0,
                                onChange: (e) => {
                                    const u = m.current;
                                    u && (u.style.marginLeft = `${e.value.marginLeft}rem`);
                                },
                            }))[1],
                            D = (0, Yn.useSpring)(() => ({
                                opacity: 0,
                                onChange: (e) => {
                                    const u = m.current;
                                    u && (u.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1],
                            B = (0, Yn.useSpring)(() => ({
                                position: 0,
                                onChange: (e) => {
                                    const u = _.current;
                                    u &&
                                        (u.style.transform = `translateY(${e.value.position / s.O.view.getScale()}rem)`);
                                },
                                onStart: () => {
                                    F.start({
                                        from: { marginLeft: 12 },
                                        to: { marginLeft: 0 },
                                        config: { duration: 50 },
                                    }),
                                        D.start({ from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: 50 } });
                                },
                                onRest: () => {
                                    F.start({
                                        from: { marginLeft: 0 },
                                        to: { marginLeft: 12 },
                                        config: { duration: 150 },
                                    }),
                                        D.start({
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                            config: { duration: 150 },
                                        });
                                },
                            }))[1],
                            h = (0, a.useCallback)((e) => {
                                if (null !== A.current && null !== g.current) {
                                    e(A.current.getBoundingClientRect().top - g.current.getBoundingClientRect().top);
                                }
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                h((e) => {
                                    B.start({ position: e, config: { duration: 200 } });
                                });
                            }, [B, e, h]),
                            (0, a.useEffect)(
                                () =>
                                    Pe(() => {
                                        h((e) => {
                                            B.start({ position: e, immediate: !0 });
                                        });
                                    }),
                                [B, h, i],
                            ),
                            r().createElement(
                                'div',
                                { className: p()(us.base, n), ref: g },
                                u.map(({ id: u, items: a, title: n, groupClassNames: s }) =>
                                    r().createElement(
                                        'div',
                                        {
                                            key: u,
                                            className: p()(us.group, us[`group__${i}`], null == s ? void 0 : s.group),
                                        },
                                        n &&
                                            r().createElement(
                                                'div',
                                                { className: p()(us.title, null == s ? void 0 : s.title) },
                                                n,
                                            ),
                                        a.map(({ id: u, icon: a, notification: n }) =>
                                            r().createElement(es, {
                                                key: u,
                                                id: u,
                                                icon: a,
                                                notification: n,
                                                ref: A,
                                                sounds: t,
                                                isActive: e === u,
                                                size: i,
                                                className: null == o ? void 0 : o.tab,
                                                classNames: o,
                                                additionContent: l,
                                                onMouseEnter: E,
                                                onMouseLeave: C,
                                                onClick: c,
                                                WrapperElement: d,
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement(Xn, {
                                    arrowRef: m,
                                    ref: _,
                                    size: i,
                                    className: null == o ? void 0 : o.frame,
                                    classNames: o,
                                }),
                            )
                        );
                    }),
                    as = R.strings.clan_supply.sidebar.tabs.tooltip,
                    rs = ({ children: e, id: u }) => {
                        const t = De[u];
                        return r().createElement(ue, { header: `${as.header.$dyn(t)}`, body: `${as.body.$dyn(t)}` }, e);
                    },
                    ns = { icon: 'Tabs_icon_02' },
                    ss = (0, I.Pi)(({ pageView: e, className: u }) => {
                        const t = ve(),
                            n = t.model,
                            s = t.controls,
                            o = S().mediaSize >= b.Medium,
                            i = (0, a.useCallback)((e) => s.changeSidebarTab(e), [s]),
                            l = n.computes.tabs(o);
                        return r().createElement(ts, {
                            tabs: l,
                            onClick: i,
                            active: e,
                            size: o ? 'medium' : 'small',
                            className: u,
                            classNames: ns,
                            WrapperElement: rs,
                        });
                    }),
                    os = 'App_base_0b',
                    is = 'App_viewContainer_57',
                    ls = 'App_sidebar_84',
                    cs = 'App_info_d5',
                    Es = 'App_infoButton_ea',
                    Cs = 'App_close_e8',
                    ds = { context: 'model.sidebar' },
                    ms = R.strings.clan_supply.main,
                    _s = (0, I.Pi)(() => {
                        const e = Ee(),
                            u = e.model,
                            t = e.controls,
                            a = u.root.get(),
                            n = a.pageViewId,
                            s = a.currencyValue;
                        var o;
                        return (
                            (o = t.close),
                            G(H.n.ESCAPE, o),
                            r().createElement(
                                'div',
                                { className: os },
                                r().createElement('div', { className: is }, r().createElement(Zn, { pageView: n })),
                                r().createElement(
                                    fe,
                                    { options: ds },
                                    r().createElement(ss, { pageView: n, className: ls }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: cs },
                                    r().createElement(
                                        'div',
                                        { className: Es },
                                        r().createElement(j, {
                                            caption: ms.infoPageButtonLabel(),
                                            type: 'info',
                                            side: 'left',
                                            onClick: t.openInfoPage,
                                        }),
                                    ),
                                    r().createElement(
                                        ue,
                                        {
                                            header: ms.eventCurrencyTooltip.header(),
                                            body: ms.eventCurrencyTooltip.body(),
                                        },
                                        r().createElement('div', null, r().createElement(ea, { value: s })),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Cs },
                                    r().createElement(j, {
                                        caption: R.strings.menu.viewHeader.backBtn.label(),
                                        goto: ms.backText(),
                                        side: 'left',
                                        type: 'back',
                                        onClick: t.close,
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    k().render(
                        r().createElement(ce, null, r().createElement(N, null, r().createElement(_s, null))),
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
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, a] = deferred[i], n = !0, s = 0; s < u.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
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
        (__webpack_require__.j = 957),
        (() => {
            var e = { 957: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, s, o] = t,
                        i = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < n.length; i++)
                        (r = n[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [687], () => __webpack_require__(536));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
