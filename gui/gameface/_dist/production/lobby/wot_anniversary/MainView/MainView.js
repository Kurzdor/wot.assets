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
            768: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => ue });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => A, off: () => d, on: () => E, onResize: () => l, onScaleUpdated: () => c });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => C,
                        getSize: () => _,
                        graphicsQuality: () => B,
                        playSound: () => F,
                        setRTPC: () => D,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => v, getTextureUrl: () => f });
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
                        addModelObserver: () => k,
                        addPreloadTexture: () => P,
                        children: () => a,
                        displayStatus: () => b,
                        displayStatusIs: () => Z,
                        events: () => w,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => Y,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => K,
                        getScale: () => z,
                        getSize: () => W,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => X,
                        isFocused: () => V,
                        pxToRem: () => G,
                        remToPx: () => q,
                        resize: () => H,
                        sendEvent: () => M,
                        setAnimateWindow: () => j,
                        setEventHandled: () => Q,
                        setInputPaddingsRem: () => O,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => ee,
                    });
                const l = s('clientResized'),
                    c = s('self.onScaleUpdated'),
                    E = (e, u) => engine.on(e, u),
                    d = (e, u) => engine.off(e, u),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const A = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && i(!1);
                    }
                    function t() {
                        e.enabled && i(!0);
                    }
                    function n() {
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
                                    const a = `mouse${u}`,
                                        o = m[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                n(),
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
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && i(!0);
                        },
                        disableOutside() {
                            e.enabled && i(!1);
                        },
                    });
                })();
                function F(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function D(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const B = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    p = Object.keys(g).reduce((e, u) => ((e[u] = () => F(g[u])), e), {}),
                    h = { play: Object.assign({}, p, { sound: F }), setRTPC: D };
                function f(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function v(e, u, t) {
                    return `url(${f(e, u, t)})`;
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
                    S = ['args'];
                const y = 2,
                    T = 16,
                    L = 32,
                    R = 64,
                    x = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, S);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
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
                        var n;
                    },
                    M = {
                        close(e) {
                            x('popover' === e ? y : L);
                        },
                        minimize() {
                            x(R);
                        },
                        move(e) {
                            x(T, { isMouseEvent: !0, on: e });
                        },
                    };
                function P(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function O(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function N(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function k(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function W(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function H(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function U(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: q(u.x), y: q(u.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function G(e) {
                    return viewEnv.pxToRem(e);
                }
                function q(e) {
                    return viewEnv.remToPx(e);
                }
                function j(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function V() {
                    return viewEnv.isFocused();
                }
                function Q() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function Y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function K() {
                    return viewEnv.getShowingStatus();
                }
                const Z = Object.keys(b).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === b[u]), e), {}),
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
                            window.isDomBuilt ? e() : w.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ue = { view: o, client: r, sound: h };
            },
            521: (e, u, t) => {
                'use strict';
                let n, r;
                t.d(u, { n: () => n }),
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
                    })(n || (n = {})),
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
                t.d(u, { Z: () => a });
                var n = t(768);
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
                        const a = n.O.view.addModelObserver(e, t, r);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
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
                t.d(u, { Sw: () => a.Z, B3: () => i, Z5: () => o.Z5, B0: () => s, ry: () => _, Eu: () => C });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(521),
                    m = t(768);
                const A = ['args'];
                function F(e, u, t, n, r, a, o) {
                    try {
                        var s = e[a](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    _ = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function o(e) {
                                            F(a, n, r, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(a, n, r, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
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
                        var n;
                    },
                    g = () => B(s.CLOSE),
                    p = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var h = t(572);
                const f = r.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => B(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => B(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                A = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(E),
                                    height: m.O.view.pxToRem(d),
                                };
                            B(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(A),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, g);
                        },
                        handleViewEvent: B,
                        onBindingsReady: _,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
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
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            738: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => dt,
                        Bar: () => lt,
                        DefaultScroll: () => Et,
                        Direction: () => Vu,
                        defaultSettings: () => Qu,
                        useHorizontalScrollApi: () => Yu,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => Lt, Bar: () => St, Default: () => Tt, useVerticalScrollApi: () => mt });
                var a = t(179),
                    o = t.n(a);
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
                var i = t(768);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e, u, t) {
                    const n = (function (e, u) {
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
                const d = i.O.client.getSize('rem'),
                    m = d.width,
                    A = d.height,
                    F = Object.assign({ width: m, height: A }, E(m, A, l)),
                    D = (0, a.createContext)(F),
                    _ = ['children'];
                const C = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, _);
                    const n = (0, a.useContext)(D),
                        r = n.extraLarge,
                        o = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        d = n.largeWidth,
                        m = n.mediumWidth,
                        A = n.smallWidth,
                        F = n.extraSmallWidth,
                        C = n.extraLargeHeight,
                        B = n.largeHeight,
                        g = n.mediumHeight,
                        p = n.smallHeight,
                        h = n.extraSmallHeight,
                        f = { extraLarge: C, large: B, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && o) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return s(u, t, f);
                        if (t.largeWidth && d) return s(u, t, f);
                        if (t.mediumWidth && m) return s(u, t, f);
                        if (t.smallWidth && A) return s(u, t, f);
                        if (t.extraSmallWidth && F) return s(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
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
                (0, a.memo)(C);
                const B = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    g = ({ children: e }) => {
                        const u = (0, a.useContext)(D),
                            t = (0, a.useState)(u),
                            n = t[0],
                            r = t[1],
                            s = (0, a.useCallback)((e, u) => {
                                const t = i.O.view.pxToRem(e),
                                    n = i.O.view.pxToRem(u);
                                r(Object.assign({ width: t, height: n }, E(t, n, l)));
                            }, []),
                            c = (0, a.useCallback)(() => {
                                const e = i.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        B(() => {
                            i.O.client.events.on('clientResized', s), i.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', s),
                                        i.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [s, c],
                            );
                        const d = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return o().createElement(D.Provider, { value: d }, e);
                    };
                var p = t(483),
                    h = t.n(p),
                    f = t(926),
                    v = t.n(f);
                let b, w, S;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
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
                        const e = (0, a.useContext)(D),
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
                            o = ((e) => {
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
                        return { mediaSize: n, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function L() {
                    return (
                        (L =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        L.apply(this, arguments)
                    );
                }
                const x = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_WIDTH,
                        [w.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [w.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [S.ExtraSmall]: '',
                        [S.Small]: v().SMALL_HEIGHT,
                        [S.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [S.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL,
                        [b.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [b.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [b.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    O = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, T);
                        const r = y(),
                            a = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return o().createElement('div', L({ className: h()(t, x[a], M[s], P[i]) }, n), u);
                    },
                    N = ['children'];
                const k = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, N);
                    return o().createElement(g, null, o().createElement(O, t, u));
                };
                var I = t(493),
                    W = t.n(I);
                function H(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const U = {
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
                function z() {
                    return (
                        (z =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        z.apply(this, arguments)
                    );
                }
                class G extends o().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && H(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && H(this.props.soundClick);
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
                            n = e.goto,
                            r = e.side,
                            a = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, $)),
                            m = h()(U.base, U[`base__${a}`], U[`base__${r}`], null == s ? void 0 : s.base),
                            A = h()(U.icon, U[`icon__${a}`], U[`icon__${r}`], null == s ? void 0 : s.icon),
                            F = h()(U.glow, null == s ? void 0 : s.glow),
                            D = h()(U.caption, U[`caption__${a}`], null == s ? void 0 : s.caption),
                            _ = h()(U.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            z(
                                {
                                    className: m,
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
                            'info' !== a && o().createElement('div', { className: U.shine }),
                            o().createElement('div', { className: A }, o().createElement('div', { className: F })),
                            o().createElement('div', { className: D }, u),
                            n && o().createElement('div', { className: _ }, n),
                        );
                    }
                }
                let q, j;
                (G.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.DayMonthNumeric = 'dayMonthNumeric'),
                            (e.DayMonthFull = 'dayMonthFull'),
                            (e.DayMonthFullTime = 'dayMonthFullTime'),
                            (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                            (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                            (e.ShortDate = 'shortDate'),
                            (e.ShortTime = 'ShortTime'),
                            (e.ShortDateTime = 'ShortDateTime'),
                            (e.FullDate = 'fullDate'),
                            (e.FullTime = 'fullTime'),
                            (e.FullDateTime = 'fullDateTime');
                    })(q || (q = {})),
                    (function (e) {
                        (e[(e.MOUSE = 0)] = 'MOUSE'), (e[(e.CAT = 1)] = 'CAT'), (e[(e.DEER = 2)] = 'DEER');
                    })(j || (j = {}));
                var V = t(281);
                let Q;
                function X(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function Y(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Q || (Q = {}));
                const K = (e) => e.replace(/&nbsp;/g, ' '),
                    Z = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    J = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ee = (e, u, t = Q.left) => e.split(u).reduce(t === Q.left ? Z : J, []),
                    ue = (() => {
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
                    te = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ne = (e, u = Q.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (te.includes(t)) return ue(e);
                        if ('ja' === t) {
                            return (0, V.D4)()
                                .parse(e)
                                .map((e) => K(e));
                        }
                        return ((e, u = Q.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = K(e);
                            return ee(r, /( )/, u).forEach((e) => (t = t.concat(ee(e, n, Q.left)))), t;
                        })(e, u);
                    };
                var re = t(916),
                    ae = t(613);
                const oe = 60,
                    se = 3600,
                    ie = 86400,
                    le = (Date.now(), ae.Ew.getRegionalDateTime);
                ae.Ew.getFormattedDateTime;
                var ce = t(521);
                const Ee = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function de(e = ce.n.NONE, u = Ee, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== ce.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                var me = t(515);
                function Ae() {
                    return !1;
                }
                console.log;
                var Fe = t(174);
                function De(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return _e(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return _e(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function _e(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Ce = (e) => (0 === e ? window : window.subViews.get(e));
                const Be = () => (e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: s, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, n, r) => {
                                        var a;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Ce,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, u = 0) {
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
                                                        a = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const s = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = i.O.view.addModelObserver(s, u, !0);
                                                        return r.set(l, t), e && t(o(a)), l;
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
                                                        for (var e, t = De(r.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            s =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = Fe.LO.box(n, { equals: Ae });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Fe.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = Fe.LO.box(n, { equals: Ae });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Fe.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = Fe.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Fe.aD)((u) => {
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
                                                                a = Object.entries(r),
                                                                o = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = Fe.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Fe.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            m = { mode: t, model: d, externalModel: s, cleanup: E };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    m = (0, a.useState)(n),
                                    A = m[0],
                                    F = m[1],
                                    D = (0, a.useState)(() => E(n, r, l)),
                                    _ = D[0],
                                    C = D[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? C(E(A, r, l)) : (d.current = !0);
                                    }, [l, A, r]),
                                    (0, a.useEffect)(() => {
                                        F(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            _.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [_],
                                    ),
                                    o().createElement(t.Provider, { value: _ }, s)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    },
                    ge = Be()(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['startTime', 'endTime', 'activePhase', 'balance'])),
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            openStore: e.createCallbackNoArgs('onGoToStore'),
                            openInfoPage: e.createCallbackNoArgs('onInfoPageOpen'),
                        }),
                    ),
                    pe = ge[0],
                    he = ge[1];
                let fe;
                function ve(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                !(function (e) {
                    (e.Done = 'done'), (e.Locked = 'notAvailable'), (e.Active = '');
                })(fe || (fe = {}));
                function be(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var we = t(946);
                const Se = 'cumulative',
                    ye = Be()(
                        ({ observableModel: e }) => {
                            const u = Object.assign({}, e.primitives(['eventCoinCount']), {
                                    quests: e.array('quests'),
                                }),
                                t = (0, we.Om)(
                                    () =>
                                        be(u.quests.get(), (e) => {
                                            const u = ve(e.bonusCondition.items, 0),
                                                t = (null == e ? void 0 : e.description) || '',
                                                n = (null == u ? void 0 : u.total) || 0,
                                                r = (null == u ? void 0 : u.current) || 0,
                                                a = (null == u ? void 0 : u.conditionType) || null,
                                                o = (null == e ? void 0 : e.status) || null;
                                            let s = 0;
                                            a === Se ? (s = r) : o === fe.Done && (s = 1);
                                            return {
                                                title: t,
                                                currentScore: s,
                                                totalScore: a === Se ? n : 1,
                                                status: o,
                                            };
                                        }),
                                    { equals: Ae },
                                );
                            return Object.assign({}, u, { computes: { questsList: t } });
                        },
                        ({ externalModel: e }) => ({ claimReward: e.createCallbackNoArgs('claimReward') }),
                    ),
                    Te = ye[0],
                    Le = ye[1],
                    Re = 'App_base_7d',
                    xe = 'App_header_51',
                    Me = 'App_quest_14';
                class Pe extends o().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = re.B3.GOLD;
                        else e = re.B3.INTEGRAL;
                        const u = re.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Pe.defaultProps = { format: 'integral' };
                const Oe = 'FormatText_base_d0',
                    Ne = ({ binding: e, text: u = '', classMix: t, alignment: n = Q.left, formatWithBrackets: r }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const s = r && e ? X(u, e) : u;
                        return o().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((u, r) =>
                                o().createElement(
                                    'div',
                                    { className: h()(Oe, t), key: `${u}-${r}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : ne(e, u))))(
                                        u,
                                        n,
                                        e,
                                    ).map((e, u) => o().createElement(a.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    ke = 'Header_base_5c',
                    Ie = 'Header_title_60',
                    We = 'Header_subTitle_de',
                    He = 'Header_eventBalance_ce',
                    Ue = 'Header_icon_e5',
                    $e = R.strings.wot_anniversary.dailyQuests.header,
                    ze = ({ balance: e }) =>
                        o().createElement(
                            'div',
                            { className: ke },
                            o().createElement('div', { className: Ie }, $e.title()),
                            o().createElement(Ne, {
                                text: $e.subTitle(),
                                binding: {
                                    value: o().createElement(
                                        'div',
                                        { className: He },
                                        o().createElement(Pe, { value: e }),
                                    ),
                                    eventCoin: o().createElement('div', { className: Ue }),
                                },
                                classMix: We,
                            }),
                        ),
                    Ge = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let qe, je;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(qe || (qe = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(je || (je = {}));
                const Ve = ({ size: e = qe.Default }) => {
                        const u = h()(Ge.background, Ge[`background__${e}`]);
                        return o().createElement('div', { className: u });
                    },
                    Qe = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Xe = ({ size: e }) => {
                        const u = h()(Qe.base, Qe[`base__${e}`]);
                        return o().createElement('div', { className: u });
                    },
                    Ye = {
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
                    Ke = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: a }) => {
                            const s = h()(
                                    Ye.base,
                                    Ye[`base__${e}`],
                                    t && Ye.base__disabled,
                                    r && Ye.base__finished,
                                    a && Ye.base__withoutBounce,
                                ),
                                i = !t && !r;
                            return o().createElement(
                                'div',
                                { className: s, style: n, ref: u },
                                o().createElement('div', { className: Ye.pattern }),
                                o().createElement('div', { className: Ye.gradient }),
                                i && o().createElement(Xe, { size: e }),
                            );
                        },
                    ),
                    Ze = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: r }) => {
                        const s = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                i && r && r();
                            }, [i, r]),
                            o().createElement(Ke, { size: e, disabled: n, baseStyles: s, isComplete: i, lineRef: t })
                        );
                    },
                    Je = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let eu, uu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(eu || (eu = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(uu || (uu = {}));
                const tu = 'ProgressBarDeltaSimple_base_6c',
                    nu = 'ProgressBarDeltaSimple_delta_99',
                    ru = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: r,
                            to: s,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = s < n,
                                E = (0, a.useState)(uu.Idle),
                                d = E[0],
                                m = E[1],
                                A = d === uu.In,
                                F = d === uu.End,
                                D = d === uu.Idle,
                                _ = (0, a.useCallback)(
                                    (e) => {
                                        m(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, a.useEffect)(() => {
                                if (D && !t) {
                                    return Je(() => {
                                        _(uu.In);
                                    }, u);
                                }
                            }, [_, t, D, u]),
                                (0, a.useEffect)(() => {
                                    if (A) {
                                        return Je(() => {
                                            i && i(), _(uu.End);
                                        }, e + u);
                                    }
                                }, [_, A, i, u, e]);
                            const C = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                g = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(n - s)}%`, left: `${c ? s : n}%` }),
                                    [n, c, s],
                                );
                            return F
                                ? null
                                : o().createElement(
                                      'div',
                                      { className: tu, style: g },
                                      o().createElement(
                                          'div',
                                          { style: D ? C : B, className: nu },
                                          o().createElement(Xe, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    au = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: s,
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
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(Ke, {
                                    size: u,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: s,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    o().createElement(ru, {
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
                    ou = 'ProgressBarDeltaGrow_base_7e',
                    su = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    iu = 'ProgressBarDeltaGrow_glow_68',
                    lu = (e) => (e ? { left: 0 } : { right: 0 }),
                    cu = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Eu = (e) => ({ transitionDuration: `${e}ms` }),
                    du = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: r,
                            to: s,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const E = s < n,
                                d = (0, a.useState)(eu.Idle),
                                m = d[0],
                                A = d[1],
                                F = m === eu.End,
                                D = m === eu.Idle,
                                _ = m === eu.Grow,
                                C = m === eu.Shrink,
                                B = (0, a.useCallback)(
                                    (e) => {
                                        A(e), l && l(e);
                                    },
                                    [l],
                                ),
                                g = (0, a.useCallback)(
                                    (e, u) =>
                                        Je(() => {
                                            B(e);
                                        }, u),
                                    [B],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return D
                                        ? g(eu.Grow, u)
                                        : _
                                          ? g(eu.Shrink, e)
                                          : C
                                            ? g(eu.End, e)
                                            : void (F && i && i());
                            }, [g, t, F, _, D, C, i, u, e]);
                            const p = (0, a.useMemo)(() => Object.assign({ width: '100%' }, Eu(e), lu(E)), [E, e]),
                                f = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Eu(e), lu(E)), [E, e]),
                                v = (0, a.useMemo)(() => Object.assign({ width: '0%' }, cu(E, n), Eu(e)), [n, E, e]),
                                b = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - n)}%` }, cu(E, n), Eu(e)),
                                    [n, E, s, e],
                                );
                            if (F) return null;
                            const w = h()(ou, c, E && 0 === s && su);
                            return o().createElement(
                                'div',
                                { style: D ? v : b, className: w },
                                o().createElement(
                                    'div',
                                    { style: C ? f : p, className: iu },
                                    o().createElement(Xe, { size: r }),
                                ),
                            );
                        },
                    ),
                    mu = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: s,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                d = (0, a.useState)(!1),
                                m = d[0],
                                A = d[1],
                                F = (0, a.useCallback)(
                                    (e) => {
                                        e === eu.Shrink && A(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                D = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                _ = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(Ke, {
                                    size: u,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: s,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: m ? _ : D,
                                }),
                                t >= 0 &&
                                    o().createElement(du, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: F,
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
                    Au = ['onComplete', 'onEndAnimation'];
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                const Du = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Au);
                        const r = (0, a.useState)(!1),
                            s = r[0],
                            i = r[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === n.to;
                                e !== s && i(e), e && u && u(), t && t();
                            }, [s, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case je.Simple:
                                return o().createElement(au, Fu({}, n, { onEndAnimation: l, isComplete: s }));
                            case je.Growing:
                                return o().createElement(mu, Fu({}, n, { onEndAnimation: l, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    _u = ['onEndAnimation'];
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                const Bu = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, _u);
                    const n = (0, a.useRef)({}),
                        r = (0, a.useCallback)(() => {
                            (n.current.from = void 0), u && u();
                        }, [u]),
                        s = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = s),
                        o().createElement(Du, Cu({}, t, { onEndAnimation: r, key: `${s}-${t.to}`, from: s }))
                    );
                });
                function gu() {
                    return (
                        (gu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        gu.apply(this, arguments)
                    );
                }
                const pu = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: a,
                            onEndAnimation: s,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (r === u)
                                return o().createElement(Ze, {
                                    key: `${r}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: n,
                                animationSettings: a,
                                onComplete: l,
                                onEndAnimation: s,
                                onChangeAnimationState: i,
                            };
                            return a.withStack
                                ? o().createElement(Bu, c)
                                : o().createElement(Du, gu({ key: `${r}-${u}` }, c));
                        },
                    ),
                    hu = (e) => ({
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
                    fu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    vu = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (fu(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    bu = {
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
                    wu = {
                        freezed: !1,
                        withStack: !1,
                        type: je.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Su = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = bu,
                            size: t = qe.Default,
                            animationSettings: n = wu,
                            disabled: r = !1,
                            withoutBackground: s = !1,
                            value: i,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: E,
                            onEndAnimation: d,
                            onComplete: m,
                        }) => {
                            const A = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const n = (fu(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: vu(n, u, t) };
                                }, [t, u, e]))(i, e, l);
                            return o().createElement(
                                'div',
                                { className: h()(Ge.base, Ge[`base__${t}`]), style: hu(u) },
                                !s && o().createElement(Ve, { size: t }),
                                o().createElement(pu, {
                                    size: t,
                                    lineRef: c,
                                    disabled: r,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: d,
                                    onChangeAnimationState: E,
                                    onComplete: m,
                                }),
                            );
                        },
                    ),
                    yu = 'Quest_quest_12',
                    Tu = 'Quest_title_38',
                    Lu = 'Quest_statusWrapper_e4',
                    Ru = 'Quest_status_22',
                    xu = 'Quest_statusIcon_0c',
                    Mu = 'Quest_scoreWrapper_37',
                    Pu = 'Quest_currentScore_0f',
                    Ou = 'Quest_separatorScore_df',
                    Nu = 'Quest_totalScore_f0',
                    ku = 'Quest_progressBar_4a',
                    Iu = ({ title: e, currentScore: u, totalScore: t, complete: n }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                'div',
                                { className: yu },
                                o().createElement('div', { className: Tu }, e),
                                n
                                    ? o().createElement(
                                          'div',
                                          { className: Lu },
                                          o().createElement(
                                              'div',
                                              { className: Ru },
                                              R.strings.wot_anniversary.dailyQuests.mission.status(),
                                          ),
                                          o().createElement('div', { className: xu }),
                                      )
                                    : o().createElement(
                                          'div',
                                          { className: Mu },
                                          o().createElement(
                                              'div',
                                              { className: Pu },
                                              o().createElement(Pe, { value: u }),
                                          ),
                                          o().createElement('div', { className: Ou }, R.strings.common.common.slash()),
                                          o().createElement(
                                              'div',
                                              { className: Nu },
                                              o().createElement(Pe, { value: t }),
                                          ),
                                      ),
                            ),
                            o().createElement(
                                'div',
                                { className: ku },
                                o().createElement(Su, { size: qe.Small, value: u, maxValue: t }),
                            ),
                        ),
                    Wu = (e) => {
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
                    Hu = [];
                function Uu(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Hu)
                    );
                }
                function $u(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, o),
                        r,
                    ];
                }
                function zu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Gu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Gu(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Gu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function qu(e, u, t) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    o = 0;
                                function s() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function E() {
                                        (o = Date.now()), t.apply(l, i);
                                    }
                                    a ||
                                        (n && !r && E(),
                                        s(),
                                        void 0 === n && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : E,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (i.cancel = function () {
                                        s(), (a = !0);
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                }
                var ju = t(30);
                let Vu;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Vu || (Vu = {}));
                const Qu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Xu = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const s = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : fu(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? Qu : c,
                                d = (0, a.useRef)(null),
                                m = (0, a.useRef)(null),
                                A = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = zu(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                F = qu(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, ju.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), A.trigger('change', e), o && F());
                                    },
                                    onRest: (e) => A.trigger('rest', e),
                                    onStart: (e) => A.trigger('start', e),
                                    onPause: (e) => A.trigger('pause', e),
                                })),
                                _ = D[0],
                                C = D[1],
                                B = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = _.scrollPosition.get(),
                                            a = (null != (n = _.scrollPosition.goal) ? n : 0) - r;
                                        return s(e, u * t + a + r);
                                    },
                                    [_.scrollPosition],
                                ),
                                g = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            C.start({
                                                scrollPosition: s(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: s(n, _.scrollPosition.get()) },
                                            });
                                    },
                                    [C, E.animationConfig, _.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            a = B(u, e, n);
                                        g(a);
                                    },
                                    [g, B, E.step],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && p(n(e)),
                                            d.current && A.trigger('mouseWheel', e, _.scrollPosition, u(d.current));
                                    },
                                    [_.scrollPosition, p, A],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
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
                                        Wu(() => {
                                            const e = d.current;
                                            e &&
                                                (g(s(e, _.scrollPosition.goal), { immediate: !0 }),
                                                A.trigger('resizeHandled'));
                                        }),
                                    [g, _.scrollPosition.goal],
                                ),
                                v = Uu(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = s(e, _.scrollPosition.goal);
                                    u !== _.scrollPosition.goal && g(u, { immediate: !0 }),
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
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: h,
                                    applyScroll: g,
                                    applyStepTo: p,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: C,
                                    animationScroll: _,
                                    recalculateContent: v,
                                    events: { on: A.on, off: A.off },
                                }),
                                [_.scrollPosition, g, p, A.off, A.on, v, h, C, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Yu = Xu({
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
                        getDirection: (e) => (e.deltaY > 1 ? Vu.Next : Vu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ku = 'HorizontalBar_base_49',
                    Zu = 'HorizontalBar_base__nonActive_82',
                    Ju = 'HorizontalBar_leftButton_5f',
                    et = 'HorizontalBar_rightButton_03',
                    ut = 'HorizontalBar_track_0d',
                    tt = 'HorizontalBar_thumb_fd',
                    nt = 'HorizontalBar_rail_32',
                    rt = 'disable',
                    at = { pending: !1, offset: 0 },
                    ot = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    st = () => {},
                    it = (e, u) => Math.max(20, e.offsetWidth * u),
                    lt = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = ot, onDrag: n = st }) => {
                        const r = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, a.useState)(at),
                            A = m[0],
                            F = m[1],
                            D = (0, a.useCallback)(
                                (e) => {
                                    F(e),
                                        E.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [n],
                            ),
                            _ = () => {
                                const u = c.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = fu(0, 1, a / (r - n)),
                                    d = (u.offsetWidth - it(u, o)) * i;
                                (t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && E.current) {
                                            if (0 === e)
                                                return s.current.classList.add(rt), void l.current.classList.remove(rt);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(rt), void l.current.classList.add(rt);
                                            var u, t;
                                            s.current.classList.remove(rt), l.current.classList.remove(rt);
                                        }
                                    })(d);
                            },
                            C = Uu(() => {
                                (() => {
                                    const u = E.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const o = Math.min(1, n / a);
                                    (u.style.width = `${it(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(Zu) : r.current.classList.remove(Zu));
                                })(),
                                    _();
                            });
                        (0, a.useEffect)(() => Wu(C)),
                            (0, a.useEffect)(
                                () =>
                                    Wu(() => {
                                        const u = () => {
                                            _();
                                        };
                                        let t = st;
                                        const n = () => {
                                            t(), (t = Wu(C));
                                        };
                                        return (
                                            e.events.on('recalculateContent', C),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', C),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = i.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const s = c.current,
                                            i = E.current;
                                        if (!s || !i) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - A.offset - s.getBoundingClientRect().x,
                                            d = (l / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: d });
                                    }),
                                    t = i.O.client.events.mouse.up(() => {
                                        u(), D(at);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, A.offset, A.pending, n, D]);
                        const B = $u((u) => e.applyStepTo(u), d, [e]),
                            g = B[0],
                            p = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const f = (e) => {
                            e.target.classList.contains(rt) || H('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: h()(Ku, u.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: h()(Ju, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(rt) || 0 !== e.button || (H('play'), g(Vu.Next));
                                },
                                onMouseUp: p,
                                ref: s,
                                onMouseEnter: f,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: h()(ut, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if ((H('play'), u.target === n))
                                                D({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = E.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Vu.Prev : Vu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                o().createElement('div', { ref: E, className: h()(tt, u.thumb) }),
                                o().createElement('div', { className: h()(nt, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: h()(et, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(rt) || 0 !== e.button || (H('play'), g(Vu.Prev));
                                },
                                onMouseUp: p,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    ct = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Et = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(ct.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: h()(ct.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: h()(ct.defaultScrollArea, r) },
                                o().createElement(dt, { className: i, api: d, classNames: s }, e),
                            ),
                            o().createElement(lt, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    dt = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => Wu(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: h()(ct.base, u) },
                            o().createElement(
                                'div',
                                {
                                    className: h()(ct.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: h()(ct.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (dt.Bar = lt), (dt.Default = Et);
                const mt = Xu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Vu.Next : Vu.Prev),
                    }),
                    At = 'VerticalBar_base_f3',
                    Ft = 'VerticalBar_base__nonActive_42',
                    Dt = 'VerticalBar_topButton_d7',
                    _t = 'VerticalBar_bottomButton_06',
                    Ct = 'VerticalBar_track_df',
                    Bt = 'VerticalBar_thumb_32',
                    gt = 'VerticalBar_rail_43',
                    pt = 'disable',
                    ht = () => {},
                    ft = { pending: !1, offset: 0 },
                    vt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    bt = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    wt = (e, u) => Math.max(20, e.offsetHeight * u),
                    St = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = vt, onDrag: n = ht }) => {
                        const r = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, a.useState)(ft),
                            A = m[0],
                            F = m[1],
                            D = (0, a.useCallback)(
                                (e) => {
                                    F(e),
                                        E.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [n],
                            ),
                            _ = Uu(() => {
                                const u = E.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${wt(t, o)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(Ft) : r.current.classList.remove(Ft)),
                                    o
                                );
                            }),
                            C = Uu(() => {
                                const u = c.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = fu(0, 1, a / (r - n)),
                                    d = (u.offsetHeight - wt(u, o)) * i;
                                (t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && E.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(pt), void l.current.classList.remove(pt);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(pt), void l.current.classList.add(pt);
                                            var u, t;
                                            s.current.classList.remove(pt), l.current.classList.remove(pt);
                                        }
                                    })(d);
                            }),
                            B = Uu(() => {
                                bt(e, () => {
                                    _(), C();
                                });
                            });
                        (0, a.useEffect)(() => Wu(B)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    bt(e, () => {
                                        C();
                                    });
                                };
                                let t = ht;
                                const n = () => {
                                    t(), (t = Wu(B));
                                };
                                return (
                                    e.events.on('recalculateContent', B),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', B),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = i.O.client.events.mouse.up(() => {
                                        D(ft);
                                    }),
                                    t = i.O.client.events.mouse.move(([u]) => {
                                        bt(e, (t) => {
                                            const r = c.current,
                                                a = E.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const s = u.screenY - A.offset - r.getBoundingClientRect().y,
                                                i = (s / r.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, A.offset, A.pending, n, D]);
                        const g = $u((u) => e.applyStepTo(u), d, [e]),
                            p = g[0],
                            f = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const v = (e) => {
                            e.target.classList.contains(pt) || H('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: h()(At, u.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: h()(Dt, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pt) || 0 !== e.button || (H('play'), p(Vu.Next));
                                },
                                ref: s,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: h()(Ct, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if ((H('play'), u.target === n))
                                                D({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    E.current &&
                                                        bt(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Vu.Prev : Vu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: E, className: h()(Bt, u.thumb) }),
                                o().createElement('div', { className: h()(gt, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: h()(_t, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pt) || 0 !== e.button || (H('play'), p(Vu.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    yt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Tt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(yt.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: h()(yt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: h()(yt.area, r) },
                                o().createElement(Lt, { className: s, classNames: i, api: d }, e),
                            ),
                            o().createElement(St, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Lt = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => Wu(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: h()(yt.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: h()(yt.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Lt.Default = Tt;
                const Rt = { Vertical: r, Horizontal: n },
                    xt = 'ScrollWithLips_verticalArea_be',
                    Mt = 'ScrollWithLips_verticalArea__scroll_15',
                    Pt = 'ScrollWithLips_base_26',
                    Ot = 'ScrollWithLips_topDecoration_b2',
                    Nt = 'ScrollWithLips_bottomDecoration_60',
                    kt = 'ScrollWithLips_topBorder_7c',
                    It = 'ScrollWithLips_bottomBorder_da',
                    Wt = 'ScrollWithLips_topShadow_da',
                    Ht = 'ScrollWithLips_bottomShadow_be',
                    Ut = 'ScrollWithLips_topShadow__show_e4',
                    $t = 'ScrollWithLips_bottomShadow__show_24',
                    zt = 'ScrollWithLips_verticalContent_4b',
                    Gt = 'ScrollWithLips_content_f4',
                    qt = 'ScrollWithLips_scroll_80',
                    jt = 'ScrollWithLips_topButton_ad',
                    Vt = 'ScrollWithLips_bottomButton_e3',
                    Qt = 'ScrollWithLips_thumb_e0',
                    Xt = 'ScrollWithLips_rail_cf';
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent);
                function Yt(e, u, t, n, r, a, o) {
                    try {
                        var s = e[a](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                function Kt(e) {
                    return function () {
                        var u = this,
                            t = arguments;
                        return new Promise(function (n, r) {
                            var a = e.apply(u, t);
                            function o(e) {
                                Yt(a, n, r, o, s, 'next', e);
                            }
                            function s(e) {
                                Yt(a, n, r, o, s, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                let Zt;
                !(function (e) {
                    (e[(e.Idle = 0)] = 'Idle'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End');
                })(Zt || (Zt = {}));
                const Jt = (e) => {
                        const u = (0, a.useState)(Zt.Idle),
                            t = u[0],
                            n = u[1],
                            r = e.animationScroll,
                            o = e.getContainerSize,
                            s = e.getWrapperSize,
                            i = e.events,
                            l = (0, a.useCallback)(() => {
                                const e = r.scrollPosition.get(),
                                    u = o() - s();
                                switch (!0) {
                                    case !u:
                                        return n(Zt.Idle);
                                    case e <= 0:
                                        return n(Zt.Start);
                                    case e >= u:
                                        return n(Zt.End);
                                    default:
                                        n(Zt.Between);
                                }
                            }, [r.scrollPosition, o, s]);
                        return (
                            (0, a.useEffect)(
                                () => (
                                    (function () {
                                        var e = Kt(function* () {
                                            yield Wu(l);
                                        });
                                        return function () {
                                            return e.apply(this, arguments);
                                        };
                                    })()(),
                                    i.on('change', l),
                                    () => i.off('change', l)
                                ),
                                [i, l],
                            ),
                            (0, a.useEffect)(() => {
                                const e = (function () {
                                    var e = Kt(function* () {
                                        yield (0, re.Eu)(),
                                            yield new Promise((e) => {
                                                requestAnimationFrame(() => {
                                                    requestAnimationFrame(() => {
                                                        e();
                                                    });
                                                });
                                            }),
                                            l();
                                    });
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, [l]),
                            t
                        );
                    },
                    en = ({ className: e, children: u }) => {
                        const t = mt(),
                            n = Jt(t),
                            r = n !== Zt.Start,
                            a = n !== Zt.End,
                            s = t.getContainerSize(),
                            i = t.getWrapperSize(),
                            l = s && i && s > i;
                        return o().createElement(
                            'div',
                            { className: h()(Pt, e) },
                            l &&
                                o().createElement(
                                    'div',
                                    { className: Ot },
                                    o().createElement('div', { className: kt }),
                                    o().createElement('div', { className: h()(Wt, r && Ut) }),
                                ),
                            o().createElement(
                                'div',
                                { className: Gt },
                                o().createElement(
                                    Rt.Vertical.Area,
                                    { className: h()(xt, l && Mt), classNames: { content: zt }, api: t },
                                    u,
                                ),
                                l &&
                                    o().createElement(Rt.Vertical.Bar, {
                                        api: t,
                                        classNames: { base: qt, thumb: Qt, rail: Xt, topButton: jt, bottomButton: Vt },
                                    }),
                            ),
                            l &&
                                o().createElement(
                                    'div',
                                    { className: Nt },
                                    o().createElement('div', { className: It }),
                                    o().createElement('div', { className: h()(Ht, a && $t) }),
                                ),
                        );
                    },
                    un = (0, me.Pi)(() => {
                        const e = Le().model,
                            u = e.computes.questsList(),
                            t = e.eventCoinCount.get();
                        return o().createElement(
                            'div',
                            { className: Re },
                            o().createElement('div', { className: xe }, o().createElement(ze, { balance: t })),
                            o().createElement(
                                en,
                                null,
                                u.map((e, u) =>
                                    o().createElement(
                                        'div',
                                        { key: u, className: Me },
                                        o().createElement(Iu, {
                                            title: e.title,
                                            currentScore: e.currentScore,
                                            totalScore: e.totalScore,
                                            complete: e.status === fe.Done,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    tn = { context: 'model.dailyQuests' },
                    nn = o().memo(() => o().createElement(Te, { options: tn }, o().createElement(un, null)));
                let rn;
                !(function (e) {
                    (e[(e.CLAIM_REWARD = 0)] = 'CLAIM_REWARD'),
                        (e[(e.WAIT_NEXT_DAY = 1)] = 'WAIT_NEXT_DAY'),
                        (e[(e.ALL_COMPLETED = 2)] = 'ALL_COMPLETED');
                })(rn || (rn = {}));
                const an = Be()(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['isWaitingRewards', 'endDate', 'state']), {
                                rewards: e.array('rewards'),
                            }),
                        ({ externalModel: e }) => ({ claimReward: e.createCallbackNoArgs('claimReward') }),
                    ),
                    on = an[0],
                    sn = an[1],
                    ln = {
                        base: 'CustomButton_base_0d',
                        base__medium: 'CustomButton_base__medium_66',
                        base__large: 'CustomButton_base__large_ee',
                        base__disabled: 'CustomButton_base__disabled_6b',
                        text: 'CustomButton_text_f0',
                        bg: 'CustomButton_bg_c7',
                        bg__start: 'CustomButton_bg__start_a4',
                        bg__center: 'CustomButton_bg__center_92',
                        bg__end: 'CustomButton_bg__end_dc',
                        outline: 'CustomButton_outline_c8',
                        outline__start: 'CustomButton_outline__start_7d',
                        outline__center: 'CustomButton_outline__center_c7',
                        outline__end: 'CustomButton_outline__end_88',
                        hover: 'CustomButton_hover_02',
                        active: 'CustomButton_active_af',
                        base__active: 'CustomButton_base__active_ed',
                    },
                    cn = 'small',
                    En = 'medium',
                    dn = 'large',
                    mn = ({
                        children: e,
                        size: u = cn,
                        isDisabled: t = !1,
                        mixClass: n,
                        soundHover: r = 'highlight',
                        soundClick: s = 'play',
                        onMouseEnter: i,
                        onMouseMove: l,
                        onMouseDown: c,
                        onMouseUp: E,
                        onMouseLeave: d,
                        onClick: m,
                    }) => {
                        const A = (0, a.useRef)(null),
                            F = (0, a.useState)(!1),
                            D = F[0],
                            _ = F[1];
                        return o().createElement(
                            'div',
                            {
                                ref: A,
                                className: h()(
                                    ln.base,
                                    u && ln[`base__${u}`],
                                    t && ln.base__disabled,
                                    D && ln.base__active,
                                    n,
                                ),
                                onMouseEnter: (e) => {
                                    t || (null !== r && H(r), i && i(e));
                                },
                                onMouseMove: (e) => {
                                    !t && l && l(e);
                                },
                                onMouseUp: (e) => {
                                    t || (E && E(e), _(!1));
                                },
                                onMouseDown: (e) => {
                                    t || (null !== s && H(s), c && c(e), _(!0));
                                },
                                onMouseLeave: (e) => {
                                    t || (d && d(e), _(!1));
                                },
                                onClick: (e) => {
                                    t || (m && m(e));
                                },
                            },
                            o().createElement('div', { className: ln.text }, e),
                            o().createElement('div', { className: h()(ln.outline, ln.outline__start) }),
                            o().createElement('div', { className: h()(ln.outline, ln.outline__center) }),
                            o().createElement('div', { className: h()(ln.outline, ln.outline__end) }),
                            o().createElement(
                                'div',
                                { className: h()(ln.bg, ln.bg__start) },
                                !t &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: ln.hover }),
                                        o().createElement('div', { className: ln.active }),
                                    ),
                            ),
                            o().createElement(
                                'div',
                                { className: h()(ln.bg, ln.bg__center) },
                                !t &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: ln.hover }),
                                        o().createElement('div', { className: ln.active }),
                                    ),
                            ),
                            o().createElement(
                                'div',
                                { className: h()(ln.bg, ln.bg__end) },
                                !t &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: ln.hover }),
                                        o().createElement('div', { className: ln.active }),
                                    ),
                            ),
                        );
                    },
                    An = {
                        base: 'StatusText_base_3d',
                        base__completed: 'StatusText_base__completed_7e',
                        base__completedAll: 'StatusText_base__completedAll_e7',
                        icon: 'StatusText_icon_83',
                        base__waiting: 'StatusText_base__waiting_ac',
                        rotation: 'StatusText_rotation_dd',
                    },
                    Fn = 'waiting',
                    Dn = 'completed',
                    _n = 'completedAll',
                    Cn = ({ text: e, state: u }) =>
                        o().createElement(
                            'div',
                            { className: h()(An.base, u && An[`base__${u}`]) },
                            u && o().createElement('div', { className: An.icon }),
                            e,
                        ),
                    Bn = 'Footer_base_d4',
                    gn = R.strings.wot_anniversary.loginQuests,
                    pn = (e) => (e < b.Medium ? cn : e < b.ExtraLarge ? En : dn),
                    hn = (0, me.Pi)(() => {
                        const e = sn(),
                            u = e.model,
                            t = e.controls,
                            n = u.isWaitingRewards.get(),
                            r = u.state.get(),
                            a = y().mediaSize;
                        return o().createElement(
                            'div',
                            { className: Bn },
                            (() => {
                                switch (r) {
                                    case rn.ALL_COMPLETED:
                                        return o().createElement(Cn, { text: gn.completed(), state: _n });
                                    case rn.WAIT_NEXT_DAY:
                                        return o().createElement(Cn, { text: gn.waitNextDay() });
                                    case rn.CLAIM_REWARD:
                                        return n
                                            ? o().createElement(Cn, { text: gn.waiting(), state: Fn })
                                            : o().createElement(
                                                  mn,
                                                  {
                                                      size: pn(a),
                                                      onClick: t.claimReward,
                                                      isDisabled: n,
                                                      soundClick: 'yes',
                                                  },
                                                  gn.button(),
                                              );
                                    default:
                                        return console.error(`state ${r} was not implemented`), null;
                                }
                            })(),
                        );
                    });
                let fn, vn, bn, wn, Sn, yn, Tn, Ln;
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
                })(fn || (fn = {})),
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
                    })(vn || (vn = {})),
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
                    })(bn || (bn = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(wn || (wn = {})),
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
                    })(Sn || (Sn = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(yn || (yn = {})),
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
                    })(Tn || (Tn = {})),
                    (function (e) {
                        (e[(e.LOCKED = 0)] = 'LOCKED'),
                            (e[(e.AVAILABLE = 1)] = 'AVAILABLE'),
                            (e[(e.COLLECTED = 2)] = 'COLLECTED');
                    })(Ln || (Ln = {}));
                const Rn = {
                        linear: (e) => e,
                        easeInQuad: (e) => e * e,
                        easeOutQuad: (e) => e * (2 - e),
                        easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
                        easeInCubic: (e) => e * e * e,
                        easeOutCubic: (e) => --e * e * e + 1,
                        easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        easeInQuart: (e) => e * e * e * e,
                        easeOutQuart: (e) => 1 - --e * e * e * e,
                        easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                        easeInQuint: (e) => e * e * e * e * e,
                        easeOutQuint: (e) => 1 + --e * e * e * e * e,
                        easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                        easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                        easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                        easeInOutCirc(e) {
                            const u = Math.sqrt,
                                t = Math.pow;
                            return e < 0.5 ? (1 - u(1 - t(2 * e, 2))) / 2 : (u(1 - t(-2 * e + 2, 2)) + 1) / 2;
                        },
                        easeOutBack(e) {
                            const u = 1.70158;
                            return 1 + 2.70158 * Math.pow(e - 1, 3) + u * Math.pow(e - 1, 2);
                        },
                        bezier: (e, u, t, n) => (r) =>
                            (1 - r) * (1 - r) * (1 - r) * e +
                            3 * (1 - r) * (1 - r) * r * u +
                            3 * (1 - r) * r * r * t +
                            r * r * r * n,
                    },
                    xn = 'AnimationWrapper_step_1b',
                    Mn = 'AnimationWrapper_step__hidden_34',
                    Pn = ({ from: e, to: u, state: t, wasAnimated: n, onAnimationEnd: r }) => {
                        const s = (0, ju.useSpring)(() => ({
                                from: { opacity: 1 },
                                config: { duration: 300, easing: Rn.easeInCirc },
                            })),
                            i = s[0],
                            l = s[1],
                            c = (0, ju.useSpring)(() => ({
                                from: { opacity: 0 },
                                config: { duration: 300, easing: Rn.easeInCirc },
                            })),
                            E = c[0],
                            d = c[1];
                        return (
                            (0, a.useEffect)(() => {
                                t !== Ln.COLLECTED ||
                                    n ||
                                    (l.start({ to: { opacity: 0 } }),
                                    d.start({
                                        to: { opacity: 1 },
                                        onRest: () => {
                                            r();
                                        },
                                    }));
                            }, [n, l, d, t, r]),
                            o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(ju.animated.div, { className: h()(xn, n && Mn), style: i }, e),
                                o().createElement(ju.animated.div, { className: h()(xn, !n && Mn), style: E }, u),
                            )
                        );
                    },
                    On = [
                        fn.Items,
                        fn.Equipment,
                        fn.Xp,
                        fn.XpFactor,
                        fn.Blueprints,
                        fn.BlueprintsAny,
                        fn.Goodies,
                        fn.Berths,
                        fn.Slots,
                        fn.Tokens,
                        fn.CrewSkins,
                        fn.CrewBooks,
                        fn.Customizations,
                        fn.CreditsFactor,
                        fn.TankmenXp,
                        fn.TankmenXpFactor,
                        fn.FreeXpFactor,
                        fn.BattleToken,
                        fn.PremiumUniversal,
                        fn.NaturalCover,
                        fn.BpCoin,
                        fn.BattlePassSelectToken,
                        fn.BattlaPassFinalAchievement,
                        fn.BattleBadge,
                        fn.BonusX5,
                        fn.CrewBonusX3,
                        fn.NewYearInvoice,
                        fn.EpicSelectToken,
                        fn.Comp7TokenWeeklyReward,
                        fn.DeluxeGift,
                        fn.BattleBoosterGift,
                        fn.OptionalDevice,
                    ],
                    Nn = [fn.Gold, fn.Credits, fn.Crystal, fn.FreeXp],
                    kn = [fn.BattlePassPoints, fn.EquipCoin],
                    In = [fn.PremiumPlus, fn.Premium],
                    Wn = ['engravings', 'backgrounds'],
                    Hn = ['engraving', 'background'],
                    Un = (e, u = bn.Small) => {
                        const t = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
                            o = e.item,
                            s = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case bn.S600x450:
                                        return 'c_600x450';
                                    case bn.S400x300:
                                        return 'c_400x300';
                                    case bn.S296x222:
                                        return 'c_296x222';
                                    case bn.S232x174:
                                        return 'c_232x174';
                                    case bn.Big:
                                        return 'c_80x80';
                                    case bn.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = Wn[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(Hn[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${a}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${i}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    $n = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    },
                    zn =
                        (bn.Small,
                        bn.Big,
                        [
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
                        ]);
                function Gn(e) {
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
                const qn = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: re.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    jn = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            m = e.decoratorId,
                            A = void 0 === m ? 0 : m,
                            F = e.isEnabled,
                            D = void 0 === F || F,
                            _ = e.targetId,
                            C = void 0 === _ ? 0 : _,
                            B = e.onShow,
                            g = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, zn);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    C ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [C],
                            ),
                            v = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (qn(t, A, { isMouseEvent: !0, on: !0, arguments: Gn(n) }, f),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, A, n, f, B]),
                            b = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        qn(t, A, { on: !1 }, f),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, A, f, g]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && b();
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
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              b(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && b(), null == i || i(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && b(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var S;
                    },
                    Vn = ['children'];
                function Qn() {
                    return (
                        (Qn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Qn.apply(this, arguments)
                    );
                }
                const Xn = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Vn);
                        return o().createElement(
                            jn,
                            Qn(
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
                    },
                    Yn = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Kn() {
                    return (
                        (Kn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Kn.apply(this, arguments)
                    );
                }
                const Zn = R.views.common.tooltip_window.simple_tooltip_content,
                    Jn = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            s = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Yn);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: n, note: r, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, n, r, i]);
                        return o().createElement(
                            jn,
                            Kn(
                                {
                                    contentId:
                                        ((E = null == i ? void 0 : i.hasHtmlContent),
                                        E ? Zn.SimpleTooltipHtmlContent('resId') : Zn.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function er() {
                    return (
                        (er =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        er.apply(this, arguments)
                    );
                }
                const ur = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = o().createElement('div', { className: t }, e);
                        if (u.header || u.body) return o().createElement(Jn, u, n);
                        const r = u.contentId;
                        return r ? o().createElement(jn, er({}, u, { contentId: r }), n) : o().createElement(Xn, u, n);
                    },
                    tr = {
                        base: 'Quest_base_cc',
                        base__locked: 'Quest_base__locked_1f',
                        base__available: 'Quest_base__available_d8',
                        base__collected: 'Quest_base__collected_d9',
                        reward: 'Quest_reward_18',
                        lockedBg: 'Quest_lockedBg_38',
                        iconState: 'Quest_iconState_a0',
                    },
                    nr = 'groups',
                    rr = 'customizations',
                    ar = 'vehicles',
                    or = (e, u, t) => {
                        const n = 'R.images.gui.maps.icons.wot_anniversary.mainView.rewards';
                        switch (e) {
                            case nr:
                                return `${n}.${u}.groups`;
                            case rr:
                                return `${n}.${u}.style_level_${t}`;
                            case ar:
                                return `${n}.${u}.vehicles`;
                            default:
                                return console.error(`reward name ${e} was not implemented`), null;
                        }
                    },
                    sr = { [Ln.LOCKED]: 'locked', [Ln.AVAILABLE]: 'available', [Ln.COLLECTED]: 'collected' },
                    ir = ({ state: e, reward: u, imageSize: t }) => {
                        const n = u.name,
                            r = u.tooltipId,
                            a = u.tooltipContentId,
                            s = u.value,
                            i = ((e) => {
                                switch (e) {
                                    case Ln.LOCKED:
                                        return {
                                            headerTooltip:
                                                R.strings.wot_anniversary.loginQuests.tooltip.lockedIcon.header(),
                                            bodyTooltip:
                                                R.strings.wot_anniversary.loginQuests.tooltip.lockedIcon.body(),
                                        };
                                    case Ln.COLLECTED:
                                        return {
                                            headerTooltip: '',
                                            bodyTooltip:
                                                R.strings.wot_anniversary.loginQuests.tooltip.completedIcon.body(),
                                        };
                                    default:
                                        return { headerTooltip: '', bodyTooltip: '' };
                                }
                            })(e),
                            l = i.headerTooltip,
                            c = i.bodyTooltip,
                            E =
                                n === nr
                                    ? R.views.lobby.wot_anniversary.tooltips.RandomRewardTooltip('resId')
                                    : Number(a),
                            d = $n({ tooltipId: r }, E, { ignoreShowDelay: !0 });
                        return o().createElement(
                            'div',
                            { className: h()(tr.base, tr[`base__${sr[e]}`]) },
                            o().createElement(
                                ur,
                                { tooltipArgs: d },
                                o().createElement('div', {
                                    className: tr.reward,
                                    style: { backgroundImage: `url(${or(n, t, s)})` },
                                }),
                            ),
                            o().createElement('div', { className: tr.lockedBg }),
                            o().createElement(
                                Jn,
                                { header: l, body: c, isEnabled: Boolean(l || c) },
                                o().createElement('div', { className: tr.iconState }),
                            ),
                        );
                    },
                    lr = 'Quests_base_92',
                    cr = 'Quests_quest_c1',
                    Er = 'Quests_divider_62',
                    dr = (0, me.Pi)(() => {
                        const e = sn().model,
                            u = y().mediaSize >= b.ExtraLarge ? bn.S64x64 : bn.S48x48;
                        return o().createElement(
                            'div',
                            { className: lr },
                            be(e.rewards.get(), (e, t) => {
                                const n = e.state,
                                    r = (0, a.useState)(n !== Ln.AVAILABLE),
                                    s = r[0],
                                    i = r[1];
                                return o().createElement(
                                    o().Fragment,
                                    { key: t },
                                    t > 0 && o().createElement('div', { className: Er }),
                                    o().createElement(
                                        'div',
                                        { className: cr },
                                        n === Ln.LOCKED || (n === Ln.COLLECTED && s)
                                            ? o().createElement(ir, { state: n, reward: e, imageSize: u })
                                            : o().createElement(Pn, {
                                                  from: o().createElement(ir, {
                                                      state: Ln.AVAILABLE,
                                                      reward: e,
                                                      imageSize: u,
                                                  }),
                                                  to: o().createElement(ir, {
                                                      state: Ln.COLLECTED,
                                                      reward: e,
                                                      imageSize: u,
                                                  }),
                                                  state: n,
                                                  wasAnimated: s,
                                                  onAnimationEnd: () => {
                                                      i(!0);
                                                  },
                                              }),
                                    ),
                                );
                            }),
                        );
                    }),
                    mr = 'App_base_0f',
                    Ar = 'App_title_c3',
                    Fr = 'App_quests_02',
                    Dr = 'App_footer_05',
                    _r = (0, me.Pi)(() => {
                        const e = sn().model,
                            u = e.state.get();
                        return o().createElement(
                            'div',
                            { className: mr },
                            u !== rn.ALL_COMPLETED &&
                                o().createElement(
                                    'div',
                                    { className: Ar },
                                    Y(R.strings.wot_anniversary.loginQuests.title(), {
                                        endDate: le(e.endDate.get(), q.DayMonthFull),
                                    }),
                                ),
                            o().createElement('div', { className: Fr }, o().createElement(dr, null)),
                            o().createElement('div', { className: Dr }, o().createElement(hn, null)),
                        );
                    });
                function Cr(e) {
                    const u = {};
                    for (const t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                            const n = e[t];
                            u[t] = (0, Fe.aD)(n);
                        }
                    return u;
                }
                const Br = [
                        {
                            state: Ln.COLLECTED,
                            icon: '',
                            index: 0,
                            name: 'vehicles',
                            value: 'sdf',
                            isCompensation: !1,
                            tooltipId: '0',
                            tooltipContentId: '25',
                            label: '',
                        },
                        {
                            state: Ln.COLLECTED,
                            icon: '',
                            index: 1,
                            name: 'vehicles',
                            value: 'sdf',
                            isCompensation: !1,
                            tooltipId: '0',
                            tooltipContentId: '25',
                            label: '',
                        },
                        {
                            state: Ln.AVAILABLE,
                            icon: '',
                            index: 2,
                            name: 'vehicles',
                            value: 'sdf',
                            isCompensation: !1,
                            tooltipId: '0',
                            tooltipContentId: '25',
                            label: '',
                        },
                        {
                            state: Ln.LOCKED,
                            icon: '',
                            index: 3,
                            name: 'vehicles',
                            value: 'sdf',
                            isCompensation: !1,
                            tooltipId: '0',
                            tooltipContentId: '25',
                            label: '',
                        },
                        {
                            state: Ln.LOCKED,
                            icon: '',
                            index: 4,
                            name: 'vehicles',
                            value: 'sdf',
                            isCompensation: !1,
                            tooltipId: '0',
                            tooltipContentId: '25',
                            label: '',
                        },
                        {
                            state: Ln.LOCKED,
                            icon: '',
                            index: 5,
                            name: 'vehicles',
                            value: 'sdf',
                            isCompensation: !1,
                            tooltipId: '0',
                            tooltipContentId: '25',
                            label: '',
                        },
                        {
                            state: Ln.LOCKED,
                            icon: '',
                            index: 6,
                            name: 'vehicles',
                            value: 'sdf',
                            isCompensation: !1,
                            tooltipId: '0',
                            tooltipContentId: '25',
                            label: '',
                        },
                        {
                            state: Ln.LOCKED,
                            icon: '',
                            index: 7,
                            name: 'vehicles',
                            value: 'sdf',
                            isCompensation: !1,
                            tooltipId: '0',
                            tooltipContentId: '25',
                            label: '',
                        },
                        {
                            state: Ln.LOCKED,
                            icon: '',
                            index: 8,
                            name: 'vehicles',
                            value: 'sdf',
                            isCompensation: !1,
                            tooltipId: '0',
                            tooltipContentId: '25',
                            label: '',
                        },
                    ],
                    gr = {
                        getter: (e) =>
                            'rewards' === e
                                ? Br
                                : {
                                      endDate: Math.floor((Date.now() + 6e4) / 1e3),
                                      isWaitingRewards: !1,
                                      state: rn.CLAIM_REWARD,
                                  },
                        controls: ({ model: { isWaitingRewards: e } }) => {
                            const u = Cr({ setWaiting: () => e.set(!0), setReady: () => e.set(!1) }),
                                t = u.setWaiting,
                                n = u.setReady;
                            return Cr({
                                setWaiting: t,
                                setReady: n,
                                claimReward: () => {
                                    t();
                                    const e = setTimeout(() => {
                                        n(), clearTimeout(e);
                                    }, 300);
                                },
                            });
                        },
                    },
                    pr = { context: 'model.loginQuests' },
                    hr = o().memo(() =>
                        o().createElement(on, { options: pr, mode: 'real', mocks: gr }, o().createElement(_r, null)),
                    );
                let fr, vr;
                !(function (e) {
                    (e[(e.IN_PROGRESS = 0)] = 'IN_PROGRESS'),
                        (e[(e.CLAIM_REWARD = 1)] = 'CLAIM_REWARD'),
                        (e[(e.CLAIM_PREVIOUS_REWARD = 2)] = 'CLAIM_PREVIOUS_REWARD'),
                        (e[(e.WAIT_NEXT_CYCLE = 3)] = 'WAIT_NEXT_CYCLE'),
                        (e[(e.ALL_COMPLETED = 4)] = 'ALL_COMPLETED');
                })(fr || (fr = {})),
                    (function (e) {
                        (e[(e.MOUSE = 0)] = 'MOUSE'), (e[(e.CAT = 1)] = 'CAT'), (e[(e.DEER = 2)] = 'DEER');
                    })(vr || (vr = {}));
                const br = Be()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {},
                                    e.primitives([
                                        'state',
                                        'currentProgress',
                                        'isWaitingRewards',
                                        'totalProgress',
                                        'endTime',
                                        'activePhase',
                                    ]),
                                    {
                                        battleQuest: e.object('battle_quest'),
                                        bonusConditionItems: e.array('battle_quest.bonusCondition.items'),
                                        rewards: e.array('rewards'),
                                    },
                                ),
                                t = (0, we.Om)(
                                    () => {
                                        const e = ve(u.bonusConditionItems.get(), 0);
                                        e || console.error('There are no quest score in the model');
                                        const t = (null == e ? void 0 : e.descrData) || '',
                                            n = (null == e ? void 0 : e.total) || 0;
                                        return {
                                            condition: t,
                                            current: (null == e ? void 0 : e.current) || 0,
                                            total: n,
                                        };
                                    },
                                    { equals: Ae },
                                );
                            return Object.assign({}, u, { computes: { questScore: t } });
                        },
                        ({ externalModel: e }) => ({ claimReward: e.createCallbackNoArgs('claimReward') }),
                    ),
                    wr = br[0],
                    Sr = br[1],
                    yr = 'Counter_base_a8',
                    Tr = 'Counter_current_85',
                    Lr = 'Counter_separator_f8',
                    Rr = 'Counter_total_ec',
                    xr = ({ current: e, total: u }) =>
                        o().createElement(
                            'div',
                            { className: yr },
                            o().createElement('div', { className: Tr }, o().createElement(Pe, { value: e })),
                            o().createElement('div', { className: Lr }, R.strings.common.common.slash()),
                            o().createElement('div', { className: Rr }, o().createElement(Pe, { value: u })),
                        ),
                    Mr = 'Quest_base_ae',
                    Pr = 'Quest_description_86',
                    Or = 'Quest_completionsCounter_2f',
                    Nr = 'Quest_progressBar_44',
                    kr = 'Quest_progressCounter_3d',
                    Ir = R.strings.wot_anniversary.mascotQuest,
                    Wr = (0, me.Pi)(() => {
                        const e = Sr().model,
                            u = e.battleQuest.get().description,
                            t = e.computes.questScore(),
                            n = t.condition,
                            r = t.current,
                            a = t.total;
                        return o().createElement(
                            'div',
                            { className: Mr },
                            o().createElement('div', { className: Pr }, u),
                            o().createElement(
                                'div',
                                { className: Or },
                                o().createElement(xr, {
                                    current: e.currentProgress.get(),
                                    total: e.totalProgress.get(),
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: Nr },
                                o().createElement(Su, { size: qe.Small, value: r, maxValue: a }),
                            ),
                            o().createElement(
                                'div',
                                { className: kr },
                                o().createElement(Ne, {
                                    text: Ir.questStatus(),
                                    binding: {
                                        condition: n,
                                        progress: o().createElement(xr, { current: r, total: a }),
                                    },
                                }),
                            ),
                        );
                    }),
                    Hr = 'Reward_base_41',
                    Ur = 'Reward_count_bf',
                    $r = 'eventCoin',
                    zr = (e) => {
                        return e === $r
                            ? wn.MULTI
                            : ((u = e),
                              On.includes(u)
                                  ? wn.MULTI
                                  : Nn.includes(u)
                                    ? wn.CURRENCY
                                    : kn.includes(u)
                                      ? wn.NUMBER
                                      : In.includes(u)
                                        ? wn.PREMIUM_PLUS
                                        : wn.STRING);
                        var u;
                    },
                    Gr = (e, u) => {
                        const t = u < b.Medium ? bn.Small : bn.Big;
                        return e.name === $r
                            ? `R.images.gui.maps.icons.wot_anniversary.mainView.mascotRewards.${t}.eventCoin`
                            : Un(e, t);
                    },
                    qr = ({ reward: e, mediaSize: u }) => {
                        const t = e.value,
                            n = e.name,
                            r = e.tooltipId,
                            a = e.tooltipContentId,
                            s = zr(n),
                            i = $n({ tooltipId: r }, Number(a), { ignoreShowDelay: !0 });
                        return o().createElement(
                            ur,
                            { tooltipArgs: i },
                            o().createElement(
                                'div',
                                { className: Hr, style: { backgroundImage: `url(${Gr(e, u)})` } },
                                s === wn.MULTI &&
                                    Number(t) > 1 &&
                                    o().createElement(
                                        'div',
                                        { className: Ur },
                                        ((e, u) => {
                                            if (void 0 === e) return null;
                                            switch (u) {
                                                case wn.MULTI: {
                                                    const u = Number(e);
                                                    return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                                }
                                                case wn.CURRENCY:
                                                case wn.NUMBER:
                                                    return o().createElement(Pe, {
                                                        format: 'integral',
                                                        value: Number(e),
                                                    });
                                                case wn.PREMIUM_PLUS: {
                                                    const u = Number(e);
                                                    return isNaN(u) ? e : null;
                                                }
                                                default:
                                                    return e;
                                            }
                                        })(t, s),
                                    ),
                            ),
                        );
                    },
                    jr = 'Rewards_base_26',
                    Vr = 'Rewards_rewards_e4',
                    Qr = 'Rewards_reward_f3',
                    Xr = 'Rewards_infoText_34',
                    Yr = 'Rewards_button_5b',
                    Kr = R.strings.wot_anniversary.mascotQuest,
                    Zr = (0, me.Pi)(() => {
                        const e = Sr(),
                            u = e.model,
                            t = e.controls,
                            n = u.state.get(),
                            r = u.isWaitingRewards.get(),
                            a = y().mediaSize;
                        return o().createElement(
                            'div',
                            { className: jr },
                            o().createElement(
                                'div',
                                { className: Vr },
                                be(u.rewards.get(), (e, u) =>
                                    o().createElement(
                                        'div',
                                        { key: u, className: Qr },
                                        o().createElement(qr, { reward: e, mediaSize: a }),
                                    ),
                                ),
                            ),
                            (n === fr.WAIT_NEXT_CYCLE || n === fr.ALL_COMPLETED) &&
                                o().createElement(Cn, { text: Kr.rewardReceived(), state: _n }),
                            n === fr.CLAIM_PREVIOUS_REWARD &&
                                o().createElement(
                                    'div',
                                    { className: Xr },
                                    o().createElement(Cn, { text: Kr.claimPreviousReward() }),
                                ),
                            (n === fr.CLAIM_REWARD || n === fr.CLAIM_PREVIOUS_REWARD) &&
                                o().createElement(
                                    'div',
                                    { className: Yr },
                                    r
                                        ? o().createElement(Cn, { text: Kr.waiting(), state: Fn })
                                        : o().createElement(
                                              mn,
                                              {
                                                  size: a < b.ExtraLarge ? En : dn,
                                                  onClick: t.claimReward,
                                                  isDisabled: r,
                                                  soundClick: 'yes',
                                              },
                                              Kr.button(),
                                          ),
                                ),
                        );
                    });
                let Jr, ea;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(Jr || (Jr = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(ea || (ea = {}));
                const ua = () => {},
                    ta = (e = 0, u, t = 0, n = ua) => {
                        const r = (0, a.useState)(e),
                            o = r[0],
                            s = r[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const r = Date.now(),
                                        a = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - r) / 1e3);
                                                null !== t && u <= t ? (s(t), n && n(), clearInterval(a)) : s(u);
                                            },
                                            1e3 * (u || (e > 120 ? oe : 1)),
                                        );
                                    return () => {
                                        clearInterval(a);
                                    };
                                }
                            }, [e, u, t, n]),
                            o
                        );
                    };
                re.Sw.instance;
                let na;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(na || (na = {}));
                re.Sw.instance;
                const ra = ta,
                    aa = 'Countdown_base_fe',
                    oa = 'Countdown_icon_8b',
                    sa = 'Countdown_description_8d',
                    ia = (e) => e.toString().padStart(2, '0'),
                    la = (e, u) => {
                        switch (u) {
                            case ea.Description:
                                return ((e, u = !0) =>
                                    e.days > 7 && u
                                        ? X(R.strings.common.duration.days(), { days: e.days })
                                        : e.days >= 1
                                          ? 0 === e.hours
                                              ? X(R.strings.common.duration.days(), { days: e.days })
                                              : `${X(R.strings.common.duration.days(), { days: e.days })} ${X(R.strings.common.duration.hours(), { hours: e.hours })}`
                                          : e.hours >= 1
                                            ? 0 === e.minutes
                                                ? X(R.strings.common.duration.hours(), { hours: e.hours })
                                                : `${X(R.strings.common.duration.hours(), { hours: e.hours })} ${X(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                            : X(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(e);
                            case ea.Short:
                                return `${ia(e.minutes)}:${ia(e.seconds)}`;
                            case ea.Long:
                                return `${ia(e.hours)}:${ia(e.minutes)}:${ia(e.seconds)}`;
                            case ea.Extended:
                                return `${X(R.strings.common.duration.days(), { days: e.days })} | ${ia(e.hours)}:${ia(e.minutes)}:${ia(e.seconds)}`;
                        }
                    },
                    ca = R.images.gui.maps.icons.components.countdown,
                    Ea = (e, u) => {
                        const t = 2 === u ? ca.big : ca;
                        switch (e) {
                            case Jr.Timer:
                                return t.clock();
                            case Jr.Countdown:
                                return t.hourglass();
                            case Jr.Cooldown:
                                return t.lock();
                        }
                    },
                    da = (0, a.memo)(
                        ({
                            duration: e,
                            icon: u = Jr.Timer,
                            style: t = ea.Description,
                            onTimeReached: n,
                            className: r = '',
                            classNames: s = {},
                        }) => {
                            const l = t !== ea.Description ? 1 : void 0,
                                c = ra(e, l),
                                E = (() => {
                                    const e = (0, a.useState)(i.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const e = () => {
                                                t(i.O.view.getScale());
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
                            n && n[c] && n[c]();
                            const d = la(
                                (function (e = 0) {
                                    let u = e;
                                    const t = Math.trunc(u / ie);
                                    u -= t * ie;
                                    const n = Math.trunc(u / se);
                                    u -= n * se;
                                    const r = Math.trunc(u / oe);
                                    return (u -= r * oe), { days: t, hours: n, minutes: r, seconds: u };
                                })(c),
                                t,
                            );
                            return o().createElement(
                                'div',
                                { className: h()(aa, r) },
                                u !== Jr.None &&
                                    o().createElement('div', {
                                        className: h()(oa, s.icon),
                                        style: { backgroundImage: `url('${Ea(u, E)}')` },
                                    }),
                                o().createElement('div', { className: h()(sa, s.text) }, d),
                            );
                        },
                    ),
                    ma = 'Timer_base_05',
                    Aa = 'Timer_text_d0',
                    Fa = R.strings.wot_anniversary.mascotQuest.countdown,
                    Da = (0, me.Pi)(() => {
                        const e = Sr().model,
                            u = e.state.get();
                        return u === fr.ALL_COMPLETED
                            ? o().createElement(o().Fragment, null, Fa.allQuestsCompleted())
                            : o().createElement(Ne, {
                                  text: u === fr.WAIT_NEXT_CYCLE ? Fa.waitingNextCycle() : Fa.inProgress(),
                                  binding: {
                                      countdown: o().createElement(da, {
                                          duration: Math.max(e.endTime.get() - Math.floor(Date.now() / 1e3), 0),
                                          icon: Jr.None,
                                          classNames: { text: Aa },
                                      }),
                                  },
                                  classMix: ma,
                              });
                    }),
                    _a = 'App_base_4a',
                    Ca = 'App_title_72',
                    Ba = 'App_titleIcon_00',
                    ga = 'App_infoIcon_fa',
                    pa = 'App_questCompletedText_ad',
                    ha = 'App_quest_9e',
                    fa = 'App_timer_a1',
                    va = 'App_timer__cycleEnded_4c',
                    ba = R.strings.wot_anniversary.mascotQuest,
                    wa = (0, me.Pi)(() => {
                        const e = Sr().model,
                            u = e.state.get(),
                            t = e.activePhase.get();
                        return o().createElement(
                            'div',
                            { className: _a },
                            o().createElement(
                                'div',
                                { className: Ca },
                                ba.title.$dyn(Pa[t]),
                                o().createElement(
                                    'div',
                                    { className: Ba },
                                    o().createElement(
                                        Jn,
                                        { header: ba.titleTooltip.header(), body: ba.titleTooltip.body() },
                                        o().createElement('div', { className: ga }),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: h()(fa, (u === fr.ALL_COMPLETED || u === fr.WAIT_NEXT_CYCLE) && va) },
                                o().createElement(Da, null),
                            ),
                            (u === fr.CLAIM_REWARD || u === fr.CLAIM_PREVIOUS_REWARD) &&
                                o().createElement(
                                    'div',
                                    { className: pa },
                                    o().createElement(Cn, { text: ba.questCompleted(), state: Dn }),
                                ),
                            u === fr.IN_PROGRESS &&
                                o().createElement('div', { className: ha }, o().createElement(Wr, null)),
                            o().createElement(Zr, null),
                        );
                    }),
                    Sa = { context: 'model.mascotQuest' },
                    ya = o().memo(() => o().createElement(wr, { options: Sa }, o().createElement(wa, null))),
                    Ta = {
                        base: 'StoreButton_base_6c',
                        bg: 'StoreButton_bg_0d',
                        bg__normal: 'StoreButton_bg__normal_f3',
                        bg__hover: 'StoreButton_bg__hover_ed',
                        content: 'StoreButton_content_fa',
                        eventCoins: 'StoreButton_eventCoins_ca',
                        icon: 'StoreButton_icon_b2',
                        mdash: 'StoreButton_mdash_e9',
                    },
                    La = R.strings.wot_anniversary.main.storeButton,
                    Ra = () => {
                        H('highlight');
                    },
                    xa = ({ count: e, onClick: u }) =>
                        o().createElement(
                            Jn,
                            { body: e > -1 ? Y(La.tooltipDescription(), { value: e }) : La.tooltipErrorMessage() },
                            o().createElement(
                                'div',
                                {
                                    className: Ta.base,
                                    onMouseEnter: Ra,
                                    onClick: () => {
                                        H('yes'), u();
                                    },
                                },
                                o().createElement('div', { className: h()(Ta.bg, Ta.bg__normal) }),
                                o().createElement('div', { className: h()(Ta.bg, Ta.bg__hover) }),
                                o().createElement(
                                    'div',
                                    { className: Ta.content },
                                    o().createElement('div', { className: Ta.label }, La.label()),
                                    o().createElement(
                                        'div',
                                        { className: Ta.eventCoins },
                                        o().createElement('div', { className: Ta.icon }),
                                        e > -1
                                            ? o().createElement(Pe, { value: e })
                                            : o().createElement(
                                                  'div',
                                                  { className: Ta.mdash },
                                                  R.strings.wot_anniversary.common.mdash(),
                                              ),
                                    ),
                                ),
                            ),
                        ),
                    Ma = {
                        base: 'App_base_99',
                        background: 'App_background_5c',
                        base__deer: 'App_base__deer_d1',
                        base__cat: 'App_base__cat_3d',
                        base__mouse: 'App_base__mouse_3f',
                        infoButton: 'App_infoButton_82',
                        header: 'App_header_d5',
                        eventDuration: 'App_eventDuration_24',
                        title: 'App_title_7d',
                        content: 'App_content_f5',
                        storeButton: 'App_storeButton_b3',
                        mascotQuests: 'App_mascotQuests_5e',
                        dailyQuests: 'App_dailyQuests_fc',
                        loginQuests: 'App_loginQuests_83',
                    },
                    Pa = { [j.MOUSE]: 'mouse', [j.CAT]: 'cat', [j.DEER]: 'deer' },
                    Oa = (0, me.Pi)(() => {
                        const e = he(),
                            u = e.model,
                            t = e.controls;
                        var n;
                        return (
                            (n = t.close),
                            de(ce.n.ESCAPE, n),
                            o().createElement(
                                'div',
                                { className: h()(Ma.base, Ma[`base__${Pa[u.activePhase.get()]}`]) },
                                o().createElement('div', { className: Ma.background }),
                                o().createElement(
                                    'div',
                                    { className: Ma.infoButton },
                                    o().createElement(G, {
                                        caption: R.strings.wot_anniversary.common.infoPageButtonLabel(),
                                        type: 'info',
                                        side: 'left',
                                        onClick: t.openInfoPage,
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Ma.content },
                                    o().createElement(
                                        'div',
                                        { className: Ma.header },
                                        o().createElement(
                                            'div',
                                            { className: Ma.eventDuration },
                                            Y(R.strings.wot_anniversary.main.duration(), {
                                                startTimeStr: le(u.startTime.get(), q.DayMonthFull),
                                                endTimeStr: le(u.endTime.get(), q.DayMonthFull),
                                            }),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: Ma.title },
                                            R.strings.wot_anniversary.main.title(),
                                        ),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: Ma.storeButton },
                                        o().createElement(xa, { onClick: t.openStore, count: u.balance.get() }),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: Ma.mascotQuests },
                                        o().createElement(ya, null),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: Ma.dailyQuests },
                                        o().createElement(nn, null),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: Ma.loginQuests },
                                        o().createElement(hr, null),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    W().render(
                        o().createElement(pe, null, o().createElement(k, null, o().createElement(Oa, null))),
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], a = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
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
        (__webpack_require__.j = 305),
        (() => {
            var e = { 305: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, o, s] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [46], () => __webpack_require__(738));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
