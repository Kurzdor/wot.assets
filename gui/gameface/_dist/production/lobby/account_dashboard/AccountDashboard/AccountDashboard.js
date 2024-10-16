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
                t.d(u, { O: () => te });
                var a = {};
                t.r(a),
                    t.d(a, { mouse: () => _, off: () => E, on: () => d, onResize: () => l, onScaleUpdated: () => c });
                var n = {};
                t.r(n),
                    t.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => B,
                        getSize: () => D,
                        graphicsQuality: () => g,
                        playSound: () => A,
                        setRTPC: () => F,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => v, getTextureUrl: () => b });
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
                        addModelObserver: () => I,
                        addPreloadTexture: () => L,
                        children: () => r,
                        displayStatus: () => f,
                        displayStatusIs: () => J,
                        events: () => w,
                        extraSize: () => ee,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => j,
                        getBrowserTexturePath: () => O,
                        getDisplayStatus: () => Z,
                        getScale: () => U,
                        getSize: () => W,
                        getViewGlobalPosition: () => X,
                        isEventHandled: () => Y,
                        isFocused: () => V,
                        pxToRem: () => G,
                        remToPx: () => z,
                        resize: () => $,
                        sendEvent: () => S,
                        setAnimateWindow: () => q,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => R,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => ue,
                    });
                const l = s('clientResized'),
                    c = s('self.onScaleUpdated'),
                    d = (e, u) => engine.on(e, u),
                    E = (e, u) => engine.off(e, u),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const _ = (function () {
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
                                        o = m[u]((e) => t([e, 'outside']));
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
                function A(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function F(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const g = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    p = Object.keys(C).reduce((e, u) => ((e[u] = () => A(C[u])), e), {}),
                    h = { play: Object.assign({}, p, { sound: A }), setRTPC: F };
                function b(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function v(e, u, t) {
                    return `url(${b(e, u, t)})`;
                }
                const f = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    x = ['args'];
                const y = 2,
                    k = 16,
                    T = 32,
                    P = 64,
                    N = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, x);
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
                    S = {
                        close(e) {
                            N('popover' === e ? y : T);
                        },
                        minimize() {
                            N(P);
                        },
                        move(e) {
                            N(k, { isMouseEvent: !0, on: e });
                        },
                    },
                    M = 15;
                function L(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, M);
                }
                function O(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function I(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, M);
                }
                function W(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function $(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function X(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: z(u.x), y: z(u.y) };
                }
                function j() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function U() {
                    return viewEnv.getScale();
                }
                function G(e) {
                    return viewEnv.pxToRem(e);
                }
                function z(e) {
                    return viewEnv.remToPx(e);
                }
                function q(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function V() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function Q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const J = Object.keys(f).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === f[u]), e), {}),
                    ee = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    ue = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : w.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    te = { view: o, client: n, sound: h };
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
                var a = t(768);
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
                    ry: () => D,
                    Eu: () => B,
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
                    m = t(768);
                const _ = ['args'];
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
                    D = (function () {
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
                    B = () =>
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
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, _);
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
                        const o = m.O.view.getViewGlobalPosition(),
                            i = t.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            d = i.width,
                            E = i.height,
                            _ = {
                                x: m.O.view.pxToRem(l) + o.x,
                                y: m.O.view.pxToRem(c) + o.y,
                                width: m.O.view.pxToRem(d),
                                height: m.O.view.pxToRem(E),
                            };
                        g(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: n,
                            direction: u,
                            bbox: F(_),
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
                    x = {
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
                        onBindingsReady: D,
                        onLayoutReady: B,
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
                window.ViewEnvHelper = x;
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
            348: (e, u, t) => {
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
                var o = t(768);
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
                    m = Object.assign({ width: d, height: E }, l(d, E, s)),
                    _ = (0, a.createContext)(m),
                    A = ['children'];
                const F = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, A);
                    const n = (0, a.useContext)(_),
                        o = n.extraLarge,
                        s = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        E = n.largeWidth,
                        m = n.mediumWidth,
                        F = n.smallWidth,
                        D = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        g = n.largeHeight,
                        C = n.mediumHeight,
                        p = n.smallHeight,
                        h = n.extraSmallHeight,
                        b = { extraLarge: B, large: g, medium: C, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && s) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return r(u, t, b);
                        if (t.largeWidth && E) return r(u, t, b);
                        if (t.mediumWidth && m) return r(u, t, b);
                        if (t.smallWidth && F) return r(u, t, b);
                        if (t.extraSmallWidth && D) return r(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return u;
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
                const D = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    B = ({ children: e }) => {
                        const u = (0, a.useContext)(_),
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
                        D(() => {
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
                        return n().createElement(_.Provider, { value: E }, e);
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
                        const e = (0, a.useContext)(_),
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
                    x = ['children', 'className'];
                function y() {
                    return (
                        (y = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        y.apply(null, arguments)
                    );
                }
                const k = {
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
                    P = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL,
                        [b.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [b.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [b.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    N = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, x);
                        const r = w(),
                            o = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return n().createElement('div', y({ className: C()(t, k[o], T[s], P[i]) }, a), u);
                    },
                    S = ['children'];
                const M = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, S);
                    return n().createElement(B, null, n().createElement(N, t, u));
                };
                var L = t(493),
                    O = t.n(L);
                function I(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
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
                function X() {
                    return (
                        (X = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        X.apply(null, arguments)
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
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(e, $)),
                            m = C()(W.base, W[`base__${o}`], W[`base__${r}`], null == s ? void 0 : s.base),
                            _ = C()(W.icon, W[`icon__${o}`], W[`icon__${r}`], null == s ? void 0 : s.icon),
                            A = C()(W.glow, null == s ? void 0 : s.glow),
                            F = C()(W.caption, W[`caption__${o}`], null == s ? void 0 : s.caption),
                            D = C()(W.goto, null == s ? void 0 : s.goto);
                        return n().createElement(
                            'div',
                            X(
                                {
                                    className: m,
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
                            n().createElement('div', { className: _ }, n().createElement('div', { className: A })),
                            n().createElement('div', { className: F }, u),
                            a && n().createElement('div', { className: D }, a),
                        );
                    }
                }
                j.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var U = t(797);
                let G;
                function z(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(G || (G = {}));
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
                    Y = (e, u, t = G.left) => e.split(u).reduce(t === G.left ? V : K, []),
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
                    J = (e, u = G.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Z.includes(t)) return Q(e);
                        if ('ja' === t) {
                            return (0, U.D4)()
                                .parse(e)
                                .map((e) => q(e));
                        }
                        return ((e, u = G.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = q(e);
                            return Y(n, /( )/, u).forEach((e) => (t = t.concat(Y(e, a, G.left)))), t;
                        })(e, u);
                    };
                var ee = t(916),
                    ue = t(613);
                const te = 24,
                    ae = 1e3,
                    ne = 60,
                    re = 60 * ne,
                    oe = te * re;
                Date.now(), ue.Ew.getRegionalDateTime, ue.Ew.getFormattedDateTime;
                function se(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / oe);
                    u -= t * oe;
                    const a = Math.trunc(u / re);
                    u -= a * re;
                    const n = Math.trunc(u / ne);
                    return (u -= n * ne), { days: t, hours: a, minutes: n, seconds: u };
                }
                const ie = () => {},
                    le = (e = 0, u, t = 0, n = ie) => {
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
                                                const u = e - Math.floor((Date.now() - a) / ae);
                                                null !== t && u <= t ? (s(t), n && n(), clearInterval(r)) : s(u);
                                            },
                                            (u || (e > 2 * ne ? ne : 1)) * ae,
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, u, t, n]),
                            o
                        );
                    },
                    ce = (e = 1) => {
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
                    de = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    Ee = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    me = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    _e = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const a = de(`${e}.${t}`, window);
                                return Ee(a) ? u(e, t, a) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    Ae = (e) => {
                        const u = ((e) => {
                                const u = ce(),
                                    t = u.caller,
                                    a = u.resId,
                                    n = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: n, modelPath: me(n, e || ''), resId: a };
                            })(),
                            t = u.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((u, a) => {
                                    const n = de(me(t, `${u}.${a}`), window);
                                    return Ee(n) ? (e.push(n.id), `${u}.${a}.value`) : (e.push(a), `${u}.${a}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    Fe = ee.Sw.instance;
                let De;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(De || (De = {}));
                const Be = (e = 'model', u = De.Deep) => {
                        const t = (0, a.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, a.useMemo)(() => ce(), []),
                            o = r.caller,
                            s = r.resId,
                            i = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                                [o, e],
                            ),
                            l = (0, a.useState)(() =>
                                ((e) => {
                                    const u = de(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return Ee(u) ? u.value : u;
                                })(_e(i)),
                            ),
                            c = l[0],
                            d = l[1],
                            E = (0, a.useRef)(-1);
                        return (
                            D(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? De.Deep : De.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== De.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === De.Deep
                                                ? (e === c && n((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        a = Ae(e);
                                    E.current = Fe.addCallback(a, t, s, u === De.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (u !== De.None)
                                    return () => {
                                        Fe.removeCallback(E.current, s);
                                    };
                            }, [s, u]),
                            c
                        );
                    },
                    ge = (ee.Sw.instance, le),
                    Ce = {};
                function pe(e, u, t, a = De.Deep) {
                    const r = (r) => {
                        const o = r.path || u || void 0,
                            s = Be(o, (o && Ce[o]) || !1 ? De.None : a),
                            i = Object.assign({}, t(s, r), r);
                        return n().createElement(e, i);
                    };
                    var o;
                    return (r.displayName = `WithModel(${((o = e), o.displayName || o.name || 'Component')})`), r;
                }
                const he = (e) => {
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
                var be = t(521);
                const ve = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function fe(e = be.n.NONE, u = ve, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== be.n.NONE)
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
                const we = 'display',
                    xe = (e, u) => {
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
                                    u === we && window.tutorialApi && window.tutorialApi.updateComponents();
                            },
                        };
                    },
                    ye = 'visible_change',
                    ke = ye,
                    Te = (e, u) => {
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
                    Pe = 'FormatText_base_d0',
                    Ne = ({ binding: e, text: u = '', classMix: t, alignment: r = G.left, formatWithBrackets: o }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const s = o && e ? z(u, e) : u;
                        return n().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((u, o) =>
                                n().createElement(
                                    'div',
                                    { className: C()(Pe, t), key: `${u}-${o}` },
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
                    Me = 'BonusXpBlock_base__locked_c9',
                    Le = 'BonusXpBlock_lock_1f',
                    Re = 'BonusXpBlock_locked_overlay_e2',
                    Oe = 'BonusXpBlock_base__disabled_a6',
                    Ie = 'BonusXpBlock_disabled_overlay_9b',
                    He = 'BonusXpBlock_xp_1c',
                    We = 'BonusXpBlock_xp__x1_8c',
                    $e = 'BonusXpBlock_xp__x2_a5',
                    Xe = 'BonusXpBlock_xp__x3_8a',
                    je = 'BonusXpBlock_xp__x4_36',
                    Ue = 'BonusXpBlock_xp__x5_16',
                    Ge = 'BonusXpBlock_xp__wotPlus_dd',
                    ze = 'BonusXpBlock_xp__locked_7a',
                    qe = 'BonusXpBlock_hover_43',
                    Ve = 'BonusXpBlock_text_97',
                    Ke = 'BonusXpBlock_heading_a4',
                    Ye = 'BonusXpBlock_multiplier_value_50',
                    Qe = 'BonusXpBlock_multiplier_unavailable_0c',
                    Ze = 'BonusXpBlock_uses_f2',
                    Je = 'BonusXpBlock_usesLeft_fb',
                    eu = 'BonusXpBlock_alert_b3',
                    uu = 'BonusXpBlock_alertIcon_6c',
                    tu = 'BonusXpBlock_xpIconContainer_87',
                    au = 'BonusXpBlock_xpIcon_ce',
                    nu = 'BonusXpBlock_daily_applied_xp_c4',
                    ru = 'BonusXpBlock_plus_sign_b9',
                    ou = {
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
                    su = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    iu = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    lu = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    cu = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            o = (0, a.useMemo)(() => u || {}, [u]);
                        let s = su.exec(e),
                            i = e,
                            l = 0;
                        for (; s; ) {
                            const t = s[0],
                                a = iu.exec(t),
                                c = lu.exec(t),
                                d = s[1];
                            if (a && c) {
                                const e = a[0],
                                    s = e + l++ + e;
                                (i = i.replace(t, `%(${s})`)),
                                    (o[s] = ou[e]
                                        ? n().createElement(
                                              'span',
                                              { className: ou[e] },
                                              n().createElement(Ne, { text: d, binding: u }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: r(e) },
                                              n().createElement(Ne, { text: d, binding: u }),
                                          ));
                            }
                            s = su.exec(e);
                        }
                        return n().createElement(Ne, { text: i, classMix: t, binding: o });
                    });
                class du extends n().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = ee.B3.GOLD;
                        else e = ee.B3.INTEGRAL;
                        const u = ee.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                du.defaultProps = { format: 'integral' };
                const Eu = {
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
                    mu = [We, $e, Xe, je, Ue],
                    _u = ({ isWotPlus: e, isWotPremium: u, isExhausted: t, isWotPlusBonusEnabled: a }, r) => {
                        if (e && u && t && a) {
                            const e = {
                                xp: n().createElement(
                                    'div',
                                    { className: nu },
                                    n().createElement('span', { className: ru }, Eu.xpAddSign),
                                    n().createElement(du, { value: r }),
                                ),
                                icon: n().createElement(
                                    'div',
                                    { className: tu },
                                    n().createElement('div', { className: au }),
                                ),
                            };
                            return Au(Eu.descriptionDailyEarning, Ye, e);
                        }
                        const o = (({ isWotPlus: e, isWotPremium: u, isExhausted: t, isWotPlusBonusEnabled: a }) => {
                                if (t) {
                                    if (e && !u) return { text: Eu.descriptionMoreWotPremium, classMix: Ye };
                                    if (!e && u)
                                        return a
                                            ? { text: Eu.descriptionMoreWotPlus, classMix: Ye }
                                            : { text: Eu.descriptionDailyRemaining, classMix: Ye };
                                }
                                return { text: Eu.descriptionDailyRemaining, classMix: Ye };
                            })({ isWotPlus: e, isWotPremium: u, isExhausted: t, isWotPlusBonusEnabled: a }),
                            s = o.text,
                            i = o.classMix;
                        return n().createElement(Ne, { text: s, classMix: i });
                    },
                    Au = (e, u, t) => n().createElement(cu, { text: e, classMix: u, binding: t }),
                    Fu = pe(
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
                                m = t && ((!d && !c) || (!l && !d)),
                                _ = !m && t,
                                A = !t,
                                F = _ && 0 === s,
                                D = (0, a.useCallback)(() => {
                                    t && (i(), I('play'));
                                }, [i, t]),
                                B = (0, a.useCallback)(() => {
                                    t && I('highlight');
                                }, [t]);
                            return n().createElement(
                                'div',
                                {
                                    className: C()(u, Se, m && Me, A && Oe),
                                    'data-testid': 'BonusXpBlock',
                                    onClick: D,
                                    onMouseEnter: B,
                                },
                                n().createElement('div', { className: Ie }),
                                n().createElement('div', { className: qe }),
                                n().createElement('div', { className: C()(He, l ? Ge : mu[r - 1] || mu[0], m && ze) }),
                                m &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: Re }),
                                        n().createElement(
                                            'div',
                                            { className: Ve },
                                            n().createElement('div', { className: Le }),
                                            n().createElement('h3', { className: Ke }, Eu.heading),
                                            (({ isWotPlusBonusEnabled: e }) =>
                                                e
                                                    ? Au(Eu.descriptionWotPlus, Qe, {
                                                          wotPlus: Eu.wotPlusLabel,
                                                          wotPremium: Eu.wotPremiumLabel,
                                                      })
                                                    : Au(Eu.descriptionWotPremium, Qe, {
                                                          wotPremium: Eu.wotPremiumLabel,
                                                      }))({ isWotPlusBonusEnabled: l }),
                                        ),
                                    ),
                                _ &&
                                    n().createElement(
                                        'div',
                                        { className: Ve },
                                        n().createElement('h3', { className: Ke }, Eu.heading),
                                        n().createElement(
                                            'h2',
                                            { className: Ze },
                                            n().createElement('span', { className: Je }, s),
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
                                        { className: Ve },
                                        n().createElement('h3', { className: Ke }, Eu.heading),
                                        n().createElement(Ne, { text: Eu.unavailable, classMix: Qe }),
                                        n().createElement(
                                            'div',
                                            { className: eu },
                                            n().createElement('div', { className: uu }),
                                        ),
                                    ),
                            );
                        },
                        'model.bonusXp',
                        (e, u) => Object.assign({}, e, u),
                    );
                var Du = t(515);
                const Bu = {
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
                    gu = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Cu() {
                    return (
                        (Cu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Cu.apply(null, arguments)
                    );
                }
                const pu = (e) => {
                    let u = e.size,
                        t = e.value,
                        a = e.isEmpty,
                        r = e.fadeInAnimation,
                        o = e.hide,
                        s = e.maximumNumber,
                        i = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, gu);
                    const c = a ? null : t,
                        d = 'string' == typeof c;
                    if ((c && !d && c < 0) || 0 === c) return null;
                    const E = c && !d && c > s,
                        m = C()(
                            Bu.base,
                            Bu[`base__${u}`],
                            r && Bu.base__animated,
                            o && Bu.base__hidden,
                            !c && Bu.base__pattern,
                            a && Bu.base__empty,
                            i,
                        );
                    return n().createElement(
                        'div',
                        Cu({ className: m }, l),
                        n().createElement('div', { className: Bu.bg }),
                        n().createElement('div', { className: Bu.pattern }),
                        n().createElement(
                            'div',
                            { className: C()(Bu.value, d && Bu.value__text) },
                            E ? s : c,
                            E && n().createElement('span', { className: Bu.plus }, '+'),
                        ),
                    );
                };
                pu.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const hu = 'Flame_base_90',
                    bu = 'Flame_slides_58',
                    vu = 'Flame_frame_29',
                    fu = (0, a.memo)(({ className: e }) => {
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
                            { className: C()(hu, e), 'data-testid': 'Flame' },
                            n().createElement(
                                'div',
                                { className: bu },
                                u.map((e) => n().createElement('img', { key: e, src: e, className: vu })),
                            ),
                        );
                    }),
                    wu = 'DogTag_base_f8',
                    xu = 'DogTag_engraving_34',
                    yu = 'DogTag_background_64',
                    ku = 'DogTag_highlight_d5',
                    Tu = ({ background: e, engraving: u, isHighlighted: t, className: a }) =>
                        n().createElement(
                            'div',
                            { className: C()(wu, a) },
                            n().createElement('div', {
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.backgrounds.$dyn(e)})`,
                                },
                                className: yu,
                            }),
                            n().createElement('div', {
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.engravings.$dyn(u)})`,
                                },
                                className: xu,
                            }),
                            t && n().createElement(fu, { className: ku }),
                        ),
                    Pu = {
                        base: 'PersonalDogTagBlock_base_3c',
                        background: 'PersonalDogTagBlock_background_88',
                        gradient: 'PersonalDogTagBlock_gradient_f5',
                        shadow: 'PersonalDogTagBlock_shadow_1b',
                        hover: 'PersonalDogTagBlock_hover_79',
                        heading: 'PersonalDogTagBlock_heading_8e',
                        dogTag: 'PersonalDogTagBlock_dogTag_d8',
                        base__selected: 'PersonalDogTagBlock_base__selected_67',
                        counter: 'PersonalDogTagBlock_counter_7c',
                        glow: 'PersonalDogTagBlock_glow_ac',
                        check: 'PersonalDogTagBlock_check_a6',
                    },
                    Nu = ({
                        id: e,
                        className: u,
                        isSelected: t,
                        isHighlighted: r,
                        background: o,
                        engraving: s,
                        counter: i,
                        isEmptyCounter: l,
                        title: c,
                        onClick: d,
                    }) => {
                        const E = (0, a.useCallback)(() => {
                            d(), I('play');
                        }, [d]);
                        return n().createElement(
                            'div',
                            {
                                id: e,
                                className: C()(Pu.base, r && Pu.base__highlighted, t && Pu.base__selected, u),
                                onClick: E,
                                onMouseEnter: H.playHighlight,
                            },
                            n().createElement('div', { className: Pu.background }),
                            n().createElement(Tu, {
                                className: Pu.dogTag,
                                background: o,
                                engraving: s,
                                isHighlighted: r,
                            }),
                            n().createElement('div', { className: Pu.shadow }),
                            n().createElement('div', { className: Pu.gradient }),
                            n().createElement('div', { className: Pu.heading }, c),
                            t &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Pu.glow }),
                                    n().createElement('div', { className: Pu.check }),
                                ),
                            i > 0 &&
                                n().createElement(
                                    'div',
                                    { className: Pu.counter },
                                    n().createElement(pu, { value: i, isEmpty: l }),
                                ),
                            n().createElement('div', { className: Pu.hover }),
                        );
                    },
                    Su = 'DogTagsBlock_base_84',
                    Mu = 'DogTagsBlock_dogTag_12',
                    Lu = 'DogTagsBlock_unavailable_4f',
                    Ru = 'DogTagsBlock_alert_29';
                function Ou() {
                    return !1;
                }
                console.log;
                var Iu = t(174);
                function Hu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return Wu(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? Wu(e, u)
                                          : void 0
                                );
                            }
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
                function Wu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const $u = (e) => (0 === e ? window : window.subViews.get(e));
                const Xu = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: s, children: i, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    d = (t, a, n) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = $u,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, u = 0) {
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
                                                const s = (e) => {
                                                    const n = t(u),
                                                        r = a.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const i = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return n.set(l, t), e && t(s(r)), l;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = Hu(n.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            i =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : i.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            n = Iu.LO.box(a, { equals: Ou });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Iu.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            n = Iu.LO.box(a, { equals: Ou });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Iu.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const a = l(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = Iu.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Iu.aD)((u) => {
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
                                                                r = Object.entries(n),
                                                                o = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = Iu.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Iu.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
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
                                                cleanup: d,
                                            }),
                                            m = { mode: t, model: E, externalModel: i, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && n ? n.controls(m) : u(m),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    m = (0, a.useState)(r),
                                    _ = m[0],
                                    A = m[1],
                                    F = (0, a.useState)(() => d(r, s, l)),
                                    D = F[0],
                                    B = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? B(d(_, s, l)) : (E.current = !0);
                                    }, [l, _, s]),
                                    (0, a.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            D.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [D],
                                    ),
                                    n().createElement(t.Provider, { value: D }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            customizableDogTag: e.object('customizableDogTag'),
                            animatedDogTag: e.object('animatedDogTag'),
                        }),
                        ({ externalModel: e }) => ({
                            openCustomizableDogTag: e.createCallbackNoArgs('customizableDogTag.onClick'),
                            openAnimatedDogTag: e.createCallbackNoArgs('animatedDogTag.onClick'),
                        }),
                    ),
                    ju = Xu[0],
                    Uu = Xu[1];
                function Gu() {
                    return (
                        (Gu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Gu.apply(null, arguments)
                    );
                }
                const zu = (0, Du.Pi)(({ className: e }) => {
                        const u = Uu(),
                            t = u.model,
                            a = u.controls,
                            r = t.root.get().isEnabled;
                        return n().createElement(
                            'div',
                            { id: 'dashboard-dogtag-block', className: C()(Su, e) },
                            r
                                ? n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement(
                                          Nu,
                                          Gu(
                                              {
                                                  id: 'animated-dogtag-card',
                                                  className: Mu,
                                                  title: R.strings.account_dashboard.animatedDogTag.heading(),
                                              },
                                              t.animatedDogTag.get(),
                                              { onClick: a.openAnimatedDogTag },
                                          ),
                                      ),
                                      n().createElement(
                                          Nu,
                                          Gu(
                                              {
                                                  className: Mu,
                                                  title: R.strings.account_dashboard.personalDogTag.heading(),
                                              },
                                              t.customizableDogTag.get(),
                                              { onClick: a.openCustomizableDogTag },
                                          ),
                                      ),
                                  )
                                : n().createElement(
                                      'div',
                                      { className: Lu },
                                      n().createElement('div', { className: Ru }),
                                      R.strings.account_dashboard.dogTags.unavailable(),
                                  ),
                        );
                    }),
                    qu = (e) =>
                        n().createElement(ju, { options: { context: 'model.dogTags' } }, n().createElement(zu, e)),
                    Vu = 'ExcludedMapsBlock_base_6b',
                    Ku = 'ExcludedMapsBlock_base__disabled_68',
                    Yu = 'ExcludedMapsBlock_header_d4',
                    Qu = 'ExcludedMapsBlock_base_background_03',
                    Zu = 'ExcludedMapsBlock_disabledPattern_09',
                    Ju = 'ExcludedMapsBlock_lock_e8',
                    et = 'ExcludedMapsBlock_hover_b0',
                    ut = 'ExcludedMapsBlock_disabledContent_b4',
                    tt = 'ExcludedMapsBlock_unavailableText_d6',
                    at = 'ExcludedMapsBlock_slotContainer_b6';
                let nt;
                !(function (e) {
                    (e.empty = 'empty'), (e.selected = 'selected'), (e.disabled = 'disabled');
                })(nt || (nt = {}));
                const rt = [
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
                function ot(e) {
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
                const st = (e, u, t = {}, a = 0) => {
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
                    it = (e) => {
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
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            g = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, rt);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(() => B || ce().resId, [B]),
                            v = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (st(t, _, { isMouseEvent: !0, on: !0, arguments: ot(n) }, b),
                                    g && g(),
                                    (h.current.isVisible = !0));
                            }, [t, _, n, b, g]),
                            f = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        st(t, _, { on: !1 }, b),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, _, b, C]),
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
                                              ((x = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      x && x(e));
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
                        var x;
                    },
                    lt = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ct() {
                    return (
                        (ct = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        ct.apply(null, arguments)
                    );
                }
                const dt = R.views.common.tooltip_window.simple_tooltip_content,
                    Et = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            o = e.note,
                            s = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, lt);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: o, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, o, i]);
                        return n().createElement(
                            it,
                            ct(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? dt.SimpleTooltipHtmlContent('resId') : dt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    mt = 'SlotItem_base_5b',
                    _t = 'SlotItem_base__responsive_39',
                    At = 'SlotItem_mapImage_6b',
                    Ft = 'SlotItem_timerContainer_91',
                    Dt = 'SlotItem_base__select_15',
                    Bt = 'SlotItem_base__disabled_88',
                    gt = 'SlotItem_base__replace_c5',
                    Ct = 'SlotItem_base__cooldown_6a',
                    pt = 'SlotItem_mapTitle_a4',
                    ht = 'SlotItem_removeButton_25',
                    bt = 'SlotItem_removeButton_icon_7e',
                    vt = 'SlotItem_timerText_11',
                    ft = R.strings.excluded_maps.notSelected(),
                    wt = ({ isEnabled: e = !0, isResponsive: u, isMapNameDisplayed: t, tooltipStrings: a }) =>
                        e
                            ? n().createElement(
                                  Et,
                                  {
                                      header: (null == a ? void 0 : a.disabledTooltipHeader) || Xt.selectTooltipHeader,
                                      body: (null == a ? void 0 : a.selectTooltipBody) || Xt.selectTooltipBody,
                                  },
                                  n().createElement(
                                      'div',
                                      { className: C()(mt, Dt, u && _t), 'data-testid': 'slot' },
                                      t && n().createElement('div', { className: pt }, ft),
                                  ),
                              )
                            : n().createElement(
                                  Et,
                                  {
                                      header:
                                          (null == a ? void 0 : a.disabledTooltipHeader) || Xt.disabledTooltipHeader,
                                      body: (null == a ? void 0 : a.disabledTooltipBody) || Xt.disabledTooltipBody,
                                  },
                                  n().createElement('div', { className: C()(mt, Bt, u && _t), 'data-testid': 'slot' }),
                              ),
                    xt = {
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
                let yt, kt;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(yt || (yt = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(kt || (kt = {}));
                const Tt = ({
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
                    onMouseUp: m,
                    onMouseLeave: _,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        B = D[0],
                        g = D[1],
                        p = (0, a.useState)(!1),
                        h = p[0],
                        b = p[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                B && null !== F.current && !F.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, a.useEffect)(() => {
                            g(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: F,
                                className: C()(
                                    xt.base,
                                    xt[`base__${r}`],
                                    o && xt.base__disabled,
                                    u && xt[`base__${u}`],
                                    B && xt.base__focus,
                                    h && xt.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== i && I(i), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    o || (m && m(e), b(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== l && I(l),
                                        E && E(e),
                                        t && (o || (F.current && (F.current.focus(), g(!0)))),
                                        b(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (_ && _(e), b(!1));
                                },
                                onClick: function (e) {
                                    o || (A && A(e));
                                },
                            },
                            r !== yt.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: xt.back }),
                                    n().createElement('span', { className: xt.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: C()(xt.state, xt.state__default) },
                                n().createElement('span', { className: xt.stateDisabled }),
                                n().createElement('span', { className: xt.stateHighlightHover }),
                                n().createElement('span', { className: xt.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: xt.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Tt.defaultProps = { type: yt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Pt = Tt,
                    Nt = (e) =>
                        e.days > 0
                            ? z(R.strings.common.duration.days(), { days: e.days })
                            : e.hours > 0
                              ? z(R.strings.common.duration.hours(), { hours: e.hours })
                              : e.minutes > 0
                                ? z(R.strings.common.duration.minutes(), { minutes: e.minutes })
                                : z(R.strings.common.duration.seconds(), { seconds: e.seconds }),
                    St =
                        ((0, a.memo)(({ duration: e }) => {
                            const u = e >= 0 ? Nt(se(e)) : R.strings.common.duration.unlimited();
                            return n().createElement('span', null, u);
                        }),
                        (e) => {
                            const u = R.images.gui.maps.icons.map;
                            return u[`c_${e.mapId}`] ? u[`c_${e.mapId}`]() : '';
                        }),
                    Mt = (e) => {
                        const u = Object.assign({}, e);
                        return (
                            u.hours > 0 && u.minutes > 0 && u.hours++,
                            u.seconds > 0 && u.minutes++,
                            u.seconds < 0 && u.seconds,
                            Nt(u)
                        );
                    },
                    Lt = (e) =>
                        e.hours > 0 && e.minutes > 0
                            ? `${z(R.strings.common.duration.hours(), { hours: e.hours })} ${z(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : Mt(e),
                    Rt = ({
                        map: e,
                        isMapNameDisplayed: u,
                        isResponsive: t,
                        onRemoveButtonClick: a,
                        tooltipStrings: r,
                    }) => {
                        const o = Math.floor(e.cooldownEndTimeInSecs - Date.now() / ae),
                            s = o <= 0 && '' !== e.mapId,
                            i = o > 0,
                            l = C()(mt, s && gt, i && Ct, t && _t),
                            c = ((e) => {
                                const u = R.strings.arenas;
                                return u[`c_${e.mapId}`] && u[`c_${e.mapId}`].name ? u[`c_${e.mapId}`].name() : '';
                            })(e);
                        if (i) {
                            const t = se(o),
                                a = Mt(t),
                                r = z(Xt.cooldownTooltipBody, { cooldownStr: Lt(t) });
                            return n().createElement(
                                Et,
                                { header: Xt.cooldownTooltipHeader, body: r },
                                n().createElement(
                                    'div',
                                    { className: l, 'data-testid': 'slot' },
                                    n().createElement('img', { src: St(e), className: At }),
                                    n().createElement(
                                        'div',
                                        { className: Ft, 'data-testid': 'timer' },
                                        n().createElement('div', { className: vt }, a),
                                    ),
                                    u && n().createElement('div', { className: pt }, c),
                                ),
                            );
                        }
                        return n().createElement(
                            Et,
                            {
                                header: (null == r ? void 0 : r.replaceTooltipHeader) || Xt.replaceTooltipHeader,
                                body: (null == r ? void 0 : r.replaceTooltipBody) || Xt.replaceTooltipBody,
                            },
                            n().createElement(
                                'div',
                                { className: l, 'data-testid': 'slot' },
                                a &&
                                    n().createElement(
                                        Pt,
                                        { type: 'ghost', mixClass: ht, onClick: () => a(e.mapId) },
                                        n().createElement('img', {
                                            src: R.images.gui.maps.icons.library.cross(),
                                            className: bt,
                                        }),
                                    ),
                                n().createElement('img', { src: St(e), className: At }),
                                u && n().createElement('div', { className: pt }, c),
                            ),
                        );
                    },
                    Ot = ['map'];
                const It = (e) => {
                        let u = e.map,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Ot);
                        const a = Math.floor(u.cooldownEndTimeInSecs - Date.now() / ae);
                        return le(a), n().createElement(Rt, Object.assign({ map: u }, t));
                    },
                    Ht = ({
                        slotState: e,
                        cooldownEndTimeInSecs: u,
                        mapId: t,
                        isMapNameDisplayed: a,
                        onRemoveButtonClick: r,
                        isResponsive: o,
                        tooltipStrings: s,
                        MapSlotComponent: i = It,
                    }) => {
                        if (e === nt.selected)
                            return n().createElement(i, {
                                map: { slotState: e, cooldownEndTimeInSecs: u, mapId: t },
                                isMapNameDisplayed: a,
                                onRemoveButtonClick: r,
                                isResponsive: o,
                                tooltipStrings: s,
                            });
                        const l = e !== nt.disabled;
                        return n().createElement(wt, {
                            isEnabled: l,
                            isMapNameDisplayed: a,
                            isResponsive: o,
                            tooltipStrings: s,
                        });
                    },
                    Wt = pe(
                        ({ className: e, path: u, excludedMaps: t, isResponsive: a }) =>
                            n().createElement(
                                'div',
                                { className: e },
                                t
                                    .slice(0, 3)
                                    .map(({ value: { cooldownEndTimeInSecs: e, mapId: t, slotState: r } }, o) =>
                                        n().createElement(Ht, {
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
                function $t() {
                    return (
                        ($t = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        $t.apply(null, arguments)
                    );
                }
                const Xt = {
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
                    jt = pe(
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
                                      { className: C()(Vu, e), onClick: r, onMouseEnter: o },
                                      n().createElement('div', { className: Qu }),
                                      n().createElement('div', { className: et }),
                                      n().createElement('div', { className: Yu }, Xt.header),
                                      n().createElement(Wt, {
                                          path: 'model.excludedMaps.excludedMaps',
                                          className: at,
                                          isResponsive: !0,
                                      }),
                                  )
                                : n().createElement(
                                      'div',
                                      { className: C()(Vu, Ku) },
                                      n().createElement('div', { className: Qu }),
                                      n().createElement('div', { className: Zu }),
                                      n().createElement(
                                          'div',
                                          { className: ut },
                                          n().createElement('img', {
                                              src: R.images.gui.maps.icons.account_dashboard.premium_missions.lock(),
                                              alt: '',
                                              className: Ju,
                                          }),
                                          n().createElement('div', { className: Yu }, Xt.header),
                                          n().createElement('div', { className: tt }, Xt.temporarilyUnavailable),
                                      ),
                                  );
                        },
                        'model.excludedMaps',
                        (e, u) => {
                            let t = $t(
                                {},
                                ((function (e) {
                                    if (null == e) throw new TypeError('Cannot destructure ' + e);
                                })(e),
                                e),
                            );
                            return Object.assign({}, t, u, {
                                excludedMaps: t.excludedMaps ? t.excludedMaps.map((e) => e.value) : [],
                            });
                        },
                    ),
                    Ut = 'TextOverflow_base_3b',
                    Gt = ['content', 'classMix', 'className'];
                function zt() {
                    return (
                        (zt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        zt.apply(null, arguments)
                    );
                }
                const qt = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            r = e.className,
                            o = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Gt);
                        const s = (0, a.useRef)(null),
                            i = (0, a.useState)(!0),
                            l = i[0],
                            c = i[1];
                        return (
                            (0, a.useEffect)(() =>
                                he(() => {
                                    const e = s.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            n().createElement(
                                Et,
                                { isEnabled: l, body: u },
                                n().createElement('div', zt({}, o, { ref: s, className: C()(Ut, r, t) }), u),
                            )
                        );
                    },
                    Vt = 'Header_base_5a',
                    Kt = 'Header_accountTitleBlock_dc',
                    Yt = 'Header_base__withSubtitle_20',
                    Qt = 'Header_accountName_41',
                    Zt = 'Header_suffixBadge_c8',
                    Jt = 'Header_header_da',
                    ea = 'Header_badge_86',
                    ua = 'Header_badge_overlay_6c',
                    ta = 'Header_hover_a2',
                    aa = 'Header_suffixBadgeShadow_4d',
                    na = 'Header_plusIcon_69',
                    ra = 'Header_accountName__teamKiller_8c',
                    oa = 'Header_accountName__overflow_dc',
                    sa = 'Header_subtitle_3f',
                    ia = 'Header_alertIcon_c6',
                    la = 'Header_clanSubtitle_c0',
                    ca = 'PendingInfoBlock_button_9e',
                    da = ({ emailButtonLabel: e, onClick: u }) =>
                        n().createElement(Pt, { type: 'main', mixClass: ca, size: 'small', onClick: u }, e),
                    Ea = R.images.gui.maps.icons;
                function ma(e) {
                    return `url(${e})`;
                }
                function _a(e, u, t) {
                    const a = e.$dyn(u);
                    return 'string' == typeof a ? ma(a) : t(e);
                }
                const Aa = () => {},
                    Fa = (e) => ma(e.badge_empty()),
                    Da = (e) => _a(Ea.library.badges.c_80x80, `badge_${e}`, Fa),
                    Ba = (e) => _a(Ea.library.badges.c_80x80, `badge_${e}`, Aa),
                    ga = (e) => _a(Ea.library.badges.c_48x48, `badge_${e}`, Aa),
                    Ca = (e) => _a(Ea.library.badges.strips.c_100x40, `strip_${e}`, Aa),
                    pa = (e) => _a(Ea.library.badges.strips.c_68x28, `strip_${e}`, Aa);
                const ha = R.strings.account_dashboard.header.clanSubtitle(),
                    ba = R.strings.account_dashboard.header.badgeTooltip(),
                    va = pe(
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
                            onAccountInfoButtonClick: m,
                        }) => {
                            const _ = t || c,
                                A = C()(Qt, l && ra, c && oa),
                                F = ((D = m), () => D());
                            var D;
                            const B = (0, a.useCallback)(() => {
                                    E(), I('play');
                                }, [E]),
                                g = (0, a.useCallback)(() => {
                                    I('highlight');
                                }, []),
                                p = n().createElement(
                                    it,
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
                                    className: C()(Vt, _ && Yt, r),
                                    style:
                                        ((h = e),
                                        (b = o),
                                        {
                                            '--badge-image-large': Da(h),
                                            '--badge-image-small': Da(h),
                                            '--suffix-image-large': Ba(b),
                                            '--suffix-image-small': ga(b),
                                            '--shadow-image-large': Ca(b),
                                            '--shadow-image-small': pa(b),
                                        }),
                                },
                                n().createElement(
                                    Et,
                                    { body: ba },
                                    n().createElement(
                                        'div',
                                        { className: ea, onClick: B, onMouseEnter: g, id: 'dashboard-header-badge' },
                                        n().createElement('div', { className: ua }),
                                        n().createElement('div', { className: ta }),
                                        0 === e.length && n().createElement('div', { className: na }),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Kt },
                                    c
                                        ? n().createElement(
                                              it,
                                              {
                                                  contentId:
                                                      R.views.lobby.account_completion.tooltips.HangarTooltip('resId'),
                                              },
                                              n().createElement(
                                                  'div',
                                                  { className: Jt },
                                                  n().createElement('div', { className: A }, u),
                                                  c && n().createElement('div', { className: ia }),
                                                  o.length > 0 &&
                                                      n().createElement(
                                                          'div',
                                                          { className: Zt },
                                                          n().createElement('div', { className: aa }),
                                                      ),
                                              ),
                                          )
                                        : n().createElement(
                                              'div',
                                              { className: Jt },
                                              n().createElement(qt, { content: u, classMix: A }),
                                              c && n().createElement('div', { className: ia }),
                                              o.length > 0 &&
                                                  n().createElement(
                                                      'div',
                                                      { className: Zt },
                                                      n().createElement('div', { className: aa }),
                                                  ),
                                          ),
                                    n().createElement(
                                        'div',
                                        { className: sa },
                                        c && n().createElement(da, { emailButtonLabel: d, onClick: F }),
                                        t &&
                                            n().createElement(Ne, {
                                                classMix: la,
                                                binding: {
                                                    position: R.strings.menu.profile.header.clan.position.$dyn(s),
                                                    clanTag: p,
                                                },
                                                text: ha,
                                            }),
                                    ),
                                ),
                            );
                            var h, b;
                        },
                        'model.header',
                        (e, u) => Object.assign({}, u, e),
                    ),
                    fa = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    wa = {
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
                function xa() {
                    const e = (0, a.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, a.useEffect)(() => u, []),
                        (0, a.useMemo)(
                            () => ({
                                run: (u) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                u(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                var ya;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(ya || (ya = {}));
                const ka = ['__left', '__right', '__top', '__bottom'],
                    Ta =
                        ((0, a.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: r = {} }, s) => {
                                const i = (0, a.useRef)(null),
                                    l = (0, a.useRef)(null),
                                    c = (0, a.useRef)(null),
                                    d = (0, a.useState)(window.decorator && window.decorator.directionType),
                                    E = d[0],
                                    m = d[1],
                                    _ = (0, a.useCallback)(() => {
                                        H.playClick(), o.O.view.sendEvent.close();
                                    }, []),
                                    A = (0, a.useCallback)(() => {
                                        H.playHighlight();
                                    }, []),
                                    F = C()(wa.arrow, wa[`arrow${ka[E]}`]);
                                fa(
                                    () => (
                                        o.O.client.events.mouse.enableOutside(),
                                        o.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : o.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const D = (0, a.useCallback)(
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
                                    B = xa(),
                                    g = (0, a.useCallback)(() => {
                                        const e = l.current;
                                        if (e)
                                            return (
                                                o.O.view.freezeTextureBeforeResize(),
                                                B.run(() => {
                                                    const u = e.scrollWidth,
                                                        t = e.scrollHeight;
                                                    o.O.view.resize(u, t), m(window.decorator.directionType);
                                                })
                                            );
                                    }, [B]);
                                return (
                                    (0, a.useImperativeHandle)(s, () => ({ updateSize: g })),
                                    fa(() => {
                                        o.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, a.useEffect)(() => {
                                        document.addEventListener('mousedown', D, { capture: !0 });
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
                                            !u && e.promise.then(() => g()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', D);
                                            }
                                        );
                                    }, [g, D, u]),
                                    n().createElement(
                                        'div',
                                        { className: wa.base, ref: l },
                                        n().createElement(
                                            'div',
                                            { className: wa.decorator },
                                            n().createElement(
                                                'div',
                                                { className: wa.content, ref: i },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    n().createElement(
                                                        Et,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        n().createElement('div', {
                                                            className: wa.closeBtn,
                                                            onClick: _,
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
                function Pa() {
                    return (
                        (Pa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Pa.apply(null, arguments)
                    );
                }
                const Na = (e) => {
                        let u = e.contentId,
                            t = e.decoratorId,
                            r = e.direction,
                            o = void 0 === r ? ya.Top : r,
                            s = e.targetId,
                            i = e.args,
                            l = e.onClick,
                            c = e.children,
                            d = e.isEnabled,
                            E = void 0 === d || d,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Ta);
                        const _ = (0, a.useRef)(null),
                            A = (0, a.useCallback)(() => {
                                if ((0, ee.wU)()) return (0, ee.SW)();
                                _.current && (0, ee.P3)(u, o, _.current, t, s, i);
                            }, [u, o, i, t, s]);
                        return n().createElement(
                            'div',
                            Pa(
                                {
                                    ref: _,
                                    onMouseDown:
                                        ((F = c.props.onClick),
                                        (e) => {
                                            E && (A(), l && l(e), F && F(e));
                                        }),
                                },
                                m,
                            ),
                            c,
                        );
                        var F;
                    },
                    Sa = {
                        base: 'ParentalControlBlock_base_0c',
                        text: 'ParentalControlBlock_text_82',
                        heading: 'ParentalControlBlock_heading_f6',
                        icon: 'ParentalControlBlock_icon_9c',
                        description: 'ParentalControlBlock_description_38',
                        infoIcon: 'ParentalControlBlock_infoIcon_79',
                        glow: 'ParentalControlBlock_glow_d5',
                    },
                    Ma = pe(
                        ({ className: e, popoverContentId: u }) =>
                            n().createElement(
                                'div',
                                { className: C()(Sa.base, e) },
                                n().createElement('img', {
                                    className: Sa.icon,
                                    src: R.images.gui.maps.icons.account_dashboard.parental_control.parental_icon(),
                                }),
                                n().createElement(
                                    'div',
                                    { className: Sa.text },
                                    n().createElement(
                                        'h2',
                                        { className: Sa.heading },
                                        R.strings.account_dashboard.parentalControl.important(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Sa.description },
                                        n().createElement(
                                            'div',
                                            { className: Sa.description_text },
                                            R.strings.account_dashboard.parentalControl.limitEnabled(),
                                        ),
                                        n().createElement(
                                            Na,
                                            {
                                                contentId: u,
                                                decoratorId:
                                                    R.views.common.pop_over_window.pop_over_window.PopOverWindow(
                                                        'resId',
                                                    ),
                                            },
                                            n().createElement('img', {
                                                src: R.images.gui.maps.icons.library.info(),
                                                className: Sa.infoIcon,
                                            }),
                                        ),
                                    ),
                                ),
                                n().createElement('div', { className: Sa.glow }),
                            ),
                        'model.parentalControl',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    La = 'PlayerSubscriptionsBlock_base_47',
                    Ra = 'PlayerSubscriptionsBlock_base__disabled_aa',
                    Oa = 'PlayerSubscriptionsBlock_title_3b',
                    Ia = 'PlayerSubscriptionsBlock_base_background_0b',
                    Ha = 'PlayerSubscriptionsBlock_subtitle_5f',
                    Wa = 'PlayerSubscriptionsBlock_hover_7a',
                    $a = 'PlayerSubscriptionsBlock_disabledPattern_92',
                    Xa = pe(
                        ({ className: e, isEnabled: u, onClick: t }) => {
                            const r = (0, a.useCallback)(() => {
                                    u && (t(), I('play'));
                                }, [t, u]),
                                o = (0, a.useCallback)(() => {
                                    u && I('highlight');
                                }, [u]);
                            return n().createElement(
                                'div',
                                { className: C()(La, !u && Ra, e), onClick: r, onMouseEnter: o },
                                n().createElement('div', { className: Ia }),
                                n().createElement('div', { className: Wa }),
                                !u && n().createElement('div', { className: $a }),
                                n().createElement(
                                    'div',
                                    { className: Oa },
                                    R.strings.player_subscriptions.dashboard.title(),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Ha },
                                    u
                                        ? R.strings.player_subscriptions.dashboard.activate()
                                        : R.strings.player_subscriptions.dashboard.unavailable(),
                                ),
                            );
                        },
                        'model.subscriptions',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    ja = {
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
                let Ua, Ga, za;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(Ua || (Ua = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(Ga || (Ga = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(za || (za = {}));
                const qa = (0, a.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: u,
                            size: t,
                            type: a,
                            value: r,
                            discountValue: o,
                            showPlus: s,
                            isEnough: i = !0,
                            stockBackgroundName: l = za.Red,
                            className: c,
                            classNames: d,
                        }) =>
                            n().createElement(
                                'span',
                                { className: C()(ja.base, ja[`base__${t}`], c) },
                                n().createElement(
                                    'span',
                                    {
                                        className: C()(
                                            ja.value,
                                            ja[`value__${a}`],
                                            !i && ja.value__notEnough,
                                            null == d ? void 0 : d.value,
                                        ),
                                    },
                                    s && r > 0 && '+',
                                    n().createElement(du, { value: r, format: a === Ga.gold ? 'gold' : 'integral' }),
                                ),
                                n().createElement('span', {
                                    className: C()(ja.icon, ja[`icon__${a}-${t}`], null == d ? void 0 : d.icon),
                                }),
                                e &&
                                    n().createElement(
                                        'span',
                                        {
                                            className: C()(
                                                ja.stock,
                                                o && ja.stock__indent,
                                                u && ja.stock__interactive,
                                                null == d ? void 0 : d.stock,
                                            ),
                                        },
                                        n().createElement('span', {
                                            className: ja.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                        }),
                                        Boolean(o) && o,
                                    ),
                            ),
                    ),
                    Va = {
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
                function Ka() {
                    return (
                        (Ka = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Ka.apply(null, arguments)
                    );
                }
                const Ya = R.strings.account_dashboard.premiumAccount,
                    Qa = (e) => {
                        const u = se(e),
                            t = ['days', 'hours'].find((e) => u[e] > 0);
                        return t ? z(R.strings.common.duration[t](), { [t]: u[t] + 1 }) : Ya.minimumTimeLeft();
                    },
                    Za = (e) =>
                        e
                            .split('\n')
                            .reduce(
                                (e, u, t) => (
                                    t > 0 && e.push(n().createElement('br', { key: `br-${t}` })),
                                    e.push(n().createElement('div', { className: Va.header_line, key: t }, u)),
                                    e
                                ),
                                [],
                            ),
                    Ja = pe(
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
                            const m = le(u),
                                _ = le(t),
                                A = u > 0,
                                F = t > 0,
                                D = !A && !F,
                                B = F && !A,
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
                                        Va.base,
                                        e,
                                        A && Va.base__wotPremiumActive,
                                        B && Va.base__onlyWgPremiumActive,
                                    ),
                                    onClick: g,
                                    onMouseEnter: p,
                                },
                                n().createElement('div', { className: Va.hover }),
                                A &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'div',
                                            { className: Va.emblem },
                                            n().createElement('div', { className: Va.emblem_symbol }),
                                        ),
                                        n().createElement('h2', { className: Va.header }, Ya.WoTPremiumAccount()),
                                        n().createElement('div', { className: Va.wotPremiumTimeLeft }, Qa(m)),
                                        F &&
                                            n().createElement(
                                                'div',
                                                { className: Va.wgPremiumTimeLeft, 'data-testid': 'wgPremiumTimeLeft' },
                                                Ya.WGPremium(),
                                                ' ',
                                                Qa(_),
                                            ),
                                    ),
                                B &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'h2',
                                            { className: Va.header, 'data-testid': 'onlyWgHeader' },
                                            Za(Ya.upgrade.toWoTPremiumAccount()),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Va.wotPremiumBenefits },
                                            n().createElement(
                                                'div',
                                                { className: Va.upgradeExperience },
                                                Ya.upgrade.experience(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Va.upgradeCreditReserve },
                                                Ya.upgrade.creditReserve(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Va.upgradePremiumMissions },
                                                Ya.upgrade.premiumMissions(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Va.upgradeExcludeMapSlot },
                                                Ya.upgrade.excludeMapSlot(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Va.upgradePlatoonBonusCredits },
                                                Ya.upgrade.platoonBonusCredits(),
                                            ),
                                        ),
                                    ),
                                D &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'h2',
                                            { className: Va.header, 'data-testid': 'header' },
                                            Za(Ya.tryWoTPremiumAccount()),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Va.mainBenefits },
                                            n().createElement('div', { className: Va.xpBonus }, '+', r, '%'),
                                            n().createElement('div', { className: Va.creditBonus }, '+', o, '%'),
                                            n().createElement('div', { className: Va.platoonBonus }, '+', s, '%'),
                                        ),
                                        n().createElement('div', { className: Va.otherBenefits }, Ya.otherBenefits()),
                                    ),
                                !B &&
                                    n().createElement(
                                        'div',
                                        { className: Va.table },
                                        n().createElement(
                                            'div',
                                            { className: Va.standardAccount },
                                            n().createElement('p', null, Ya.standardAccount()),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(qa, { type: Ga.credits, size: Ua.small, value: i }),
                                            ),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(qa, { type: Ga.xp, size: Ua.small, value: l }),
                                            ),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Va.premiumAccount },
                                            n().createElement('p', null, Ya.WoTPremium()),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(qa, { type: Ga.credits, size: Ua.small, value: c }),
                                            ),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(qa, { type: Ga.xp, size: Ua.small, value: d }),
                                            ),
                                        ),
                                    ),
                            );
                        },
                        'model.premiumAccount',
                        (e, u) => {
                            let t = Ka(
                                {},
                                ((function (e) {
                                    if (null == e) throw new TypeError('Cannot destructure ' + e);
                                })(e),
                                e),
                            );
                            return Object.assign({}, t, u);
                        },
                    ),
                    en = 'PremiumQuestsBlock_base_1a',
                    un = 'PremiumQuestsBlock_base__locked_e0',
                    tn = 'PremiumQuestsBlock_base__disabled_07',
                    an = 'PremiumQuestsBlock_base_background_a4',
                    nn = 'PremiumQuestsBlock_hover_ff',
                    rn = 'PremiumQuestsBlock_heading_e0',
                    on = 'PremiumQuestsBlock_quests_9f',
                    sn = 'PremiumQuestsBlock_quests__completed0_5d',
                    ln = 'PremiumQuestsBlock_quest1_63',
                    cn = 'PremiumQuestsBlock_quests__completed1_97',
                    dn = 'PremiumQuestsBlock_quest2_27',
                    En = 'PremiumQuestsBlock_quests__completed2_0a',
                    mn = 'PremiumQuestsBlock_quest3_ce',
                    _n = 'PremiumQuestsBlock_quests__completed3_fc',
                    An = 'PremiumQuestsBlock_line_b0',
                    Fn = 'PremiumQuestsBlock_temporarilyUnavailable_ef',
                    Dn = ['className'];
                const Bn = {
                        get heading() {
                            return R.strings.account_dashboard.premiumQuests.heading();
                        },
                        get temporarilyUnavailable() {
                            return R.strings.account_dashboard.temporarilyUnavailable();
                        },
                    },
                    gn = [sn, cn, En, _n],
                    Cn = pe(
                        (e) => {
                            let u = e.className,
                                t = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(e, Dn);
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
                                { className: C()(en, c && un, i && tn, u), onClick: d, onMouseEnter: E },
                                n().createElement('div', { className: an }),
                                n().createElement('div', { className: nn }),
                                n().createElement('h2', { className: rn }, Bn.heading),
                                l &&
                                    n().createElement(
                                        'div',
                                        { className: C()(on, gn[o]), 'data-testid': 'quests' },
                                        n().createElement('div', { className: ln }),
                                        n().createElement('div', { className: An }),
                                        n().createElement('div', { className: dn }),
                                        n().createElement('div', { className: An }),
                                        n().createElement('div', { className: mn }),
                                    ),
                                i && n().createElement('p', { className: Fn }, Bn.temporarilyUnavailable),
                            );
                        },
                        'model.premiumQuests',
                        (e, u) => Object.assign({}, e, u),
                    );
                let pn, hn;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(pn || (pn = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(hn || (hn = {}));
                const bn = 'Countdown_base_fe',
                    vn = 'Countdown_icon_8b',
                    fn = 'Countdown_description_8d',
                    wn = (e) => e.toString().padStart(2, '0'),
                    xn = (e, u) => {
                        switch (u) {
                            case hn.Description:
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
                            case hn.Short:
                                return `${wn(e.minutes)}:${wn(e.seconds)}`;
                            case hn.Long:
                                return `${wn(e.hours)}:${wn(e.minutes)}:${wn(e.seconds)}`;
                            case hn.Extended:
                                return `${z(R.strings.common.duration.days(), { days: e.days })} | ${wn(e.hours)}:${wn(e.minutes)}:${wn(e.seconds)}`;
                        }
                    },
                    yn = R.images.gui.maps.icons.components.countdown,
                    kn = (e, u) => {
                        const t = 2 === u ? yn.big : yn;
                        switch (e) {
                            case pn.Timer:
                                return t.clock();
                            case pn.Countdown:
                                return t.hourglass();
                            case pn.Cooldown:
                                return t.lock();
                        }
                    },
                    Tn = (0, a.memo)(
                        ({
                            duration: e,
                            icon: u = pn.Timer,
                            style: t = hn.Description,
                            onTimeReached: r,
                            className: s = '',
                            classNames: i = {},
                        }) => {
                            const l = t !== hn.Description ? 1 : void 0,
                                c = ge(e, l),
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
                            const E = xn(se(c), t);
                            return n().createElement(
                                'div',
                                { className: C()(bn, s) },
                                u !== pn.None &&
                                    n().createElement('div', {
                                        className: C()(vn, i.icon),
                                        style: { backgroundImage: `url('${kn(u, d)}')` },
                                    }),
                                n().createElement('div', { className: C()(fn, i.text) }, E),
                            );
                        },
                    ),
                    Pn = 'ReserveStockBlock_base_68',
                    Nn = 'ReserveStockBlock_base_background_ee',
                    Sn = 'ReserveStockBlock_base__allLocked_35',
                    Mn = 'ReserveStockBlock_hover_9c',
                    Ln = 'ReserveStockBlock_title_15',
                    Rn = 'ReserveStockBlock_text__locked_77',
                    On = 'ReserveStockBlock_text_93',
                    In = 'ReserveStockBlock_lock_6e',
                    Hn = 'ReserveStockBlock_lockGlow_70',
                    Wn = 'ReserveStockBlock_alertContainer_c9',
                    $n = 'ReserveStockBlock_alertIcon_3f',
                    Xn = 'ReserveStockBlock_alertGlow_88',
                    jn = 'ReserveStockBlock_cornerHighlight_74',
                    Un = 'ReserveStockBlock_currencyContainer_ed',
                    Gn = 'ReserveStockBlock_countdownContainer_45',
                    zn = 'ReserveStockBlock_checkmark_6f',
                    qn = 'ReserveStockBlock_textContainer_24',
                    Vn = 'ReserveStockBlock_divider_64',
                    Kn = ({
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
                            { className: C()(On, (a || !t) && Rn, e) },
                            n().createElement('div', { className: Ln }, s),
                            t &&
                                a &&
                                n().createElement(
                                    'div',
                                    { className: In },
                                    n().createElement('div', { className: Hn }),
                                ),
                            t
                                ? n().createElement(
                                      'div',
                                      { className: Un, 'data-testid': 'footer' },
                                      i && n().createElement('div', { className: zn }),
                                      n().createElement(qa, { size: 'small', type: r, value: i ? o : u }),
                                  )
                                : n().createElement(
                                      'div',
                                      { className: Wn },
                                      n().createElement(
                                          'div',
                                          { className: $n },
                                          n().createElement('div', { className: Xn }),
                                      ),
                                  ),
                        );
                    },
                    Yn = {
                        get creditBlockTitle() {
                            return R.strings.account_dashboard.reserveStock.creditBlockTitle();
                        },
                        get goldBlockTitle() {
                            return R.strings.account_dashboard.reserveStock.goldBlockTitle();
                        },
                    },
                    Qn = pe(
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
                            onClick: m,
                        }) => {
                            const _ = s - Math.floor(Date.now() / 1e3),
                                A = _ > 0 ? _ : 0,
                                F = A <= i,
                                D = C()(Pn, d && E && !l && !c && Sn, e),
                                B = (0, a.useCallback)(() => {
                                    m(), I('play');
                                }, [m]),
                                g = (0, a.useCallback)(() => {
                                    I('highlight');
                                }, []);
                            return n().createElement(
                                'div',
                                { className: D, onClick: B, onMouseEnter: g, 'data-testid': 'block' },
                                n().createElement('div', { className: Nn }),
                                n().createElement('div', { className: Mn }),
                                n().createElement('div', { className: Vn }),
                                n().createElement('div', { className: Gn }, n().createElement(Tn, { duration: A })),
                                F && n().createElement('div', { className: jn, 'data-testid': 'openingSoon' }),
                                n().createElement(
                                    'div',
                                    { className: qn },
                                    n().createElement(Kn, {
                                        currencyType: 'credits',
                                        currentAmount: u,
                                        maxAmount: o,
                                        isFeatureEnabled: d,
                                        isLocked: !l,
                                        title: Yn.creditBlockTitle,
                                    }),
                                    n().createElement(Kn, {
                                        currencyType: 'gold',
                                        currentAmount: t,
                                        maxAmount: r,
                                        isFeatureEnabled: E,
                                        isLocked: !c,
                                        title: Yn.goldBlockTitle,
                                    }),
                                ),
                            );
                        },
                        'model.reserveStock',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    Zn = 'AccountDashboardApp_base_b3',
                    Jn = 'AccountDashboardApp_close_23',
                    er = 'AccountDashboardApp_header_0f',
                    ur = 'AccountDashboardApp_cards_eb',
                    tr = 'AccountDashboardApp_mainBlock_0a',
                    ar = 'AccountDashboardApp_footer_56',
                    nr = 'AccountDashboardApp_block_19',
                    rr = 'AccountDashboardApp_block__header_21',
                    or = 'AccountDashboardApp_block__playerSubscriptions_de',
                    sr = 'AccountDashboardApp_block__premiumAccount_f0',
                    ir = 'AccountDashboardApp_block__bonusXp_b3',
                    lr = 'AccountDashboardApp_block__reserveStock_c6',
                    cr = 'AccountDashboardApp_block__personalDogTag_03',
                    dr = 'AccountDashboardApp_block__premiumQuests_1a',
                    Er = 'AccountDashboardApp_block__bannedMaps_68',
                    mr = 'AccountDashboardApp_block__parentalControl_42',
                    _r = ['onClose'];
                function Ar() {
                    return (
                        (Ar = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Ar.apply(null, arguments)
                    );
                }
                const Fr = { close: R.strings.account_dashboard.close() },
                    Dr = (e) => () => e(),
                    Br = pe(
                        (e) => {
                            let u = e.onClose,
                                t = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(e, _r);
                            const r = t.isParentalControlEnabled,
                                o = t.isPlayerSubscriptionsEntrypointHidden;
                            var s;
                            (s = () => u()), fe(be.n.ESCAPE, s);
                            const i = w().mediaSize < b.Small,
                                l = xe('DogTagsWidget', we),
                                c = xe('NewBadgeHintBtn', we);
                            (0, a.useEffect)(
                                () =>
                                    he(() => {
                                        null !== l && l.completeEffect();
                                    }),
                                [l],
                            ),
                                (0, a.useEffect)(
                                    () =>
                                        he(() => {
                                            null !== c && c.completeEffect();
                                        }),
                                    [c],
                                );
                            const d = Te('DogTagsWidget', ke);
                            (0, a.useEffect)(() => {
                                d && d.runTrigger(!0);
                            }, [d]);
                            const E = Te('NewBadgeHintBtn', ke);
                            return (
                                (0, a.useEffect)(() => {
                                    E && E.runTrigger(!0);
                                }, [E]),
                                n().createElement(
                                    'div',
                                    { className: Zn },
                                    n().createElement(
                                        'div',
                                        { className: Jn },
                                        n().createElement(j, {
                                            caption: i ? '' : Fr.close,
                                            type: 'close',
                                            side: 'right',
                                            onClick: Dr(u),
                                        }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: tr },
                                        n().createElement(
                                            'div',
                                            { className: er },
                                            n().createElement(va, { className: C()(nr, rr) }),
                                            !o && n().createElement(Xa, { className: C()(nr, or) }),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: ur },
                                            n().createElement(Ja, { className: C()(nr, sr) }),
                                            n().createElement(Fu, { className: C()(nr, ir) }),
                                            n().createElement(Qn, { className: C()(nr, lr) }),
                                            n().createElement(qu, { className: C()(nr, cr) }),
                                            n().createElement(Cn, { className: C()(nr, dr) }),
                                            n().createElement(jt, { className: C()(nr, Er) }),
                                        ),
                                    ),
                                    r &&
                                        n().createElement(
                                            'div',
                                            { className: ar },
                                            n().createElement(Ma, { className: C()(nr, mr) }),
                                        ),
                                )
                            );
                        },
                        'model',
                        (e, u) => {
                            let t = Ar(
                                {},
                                ((function (e) {
                                    if (null == e) throw new TypeError('Cannot destructure ' + e);
                                })(e),
                                e),
                            );
                            return Object.assign({}, t, u);
                        },
                    );
                engine.whenReady.then(() => {
                    O().render(
                        n().createElement(M, null, n().createElement(Br, null)),
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [507], () => __webpack_require__(348));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
