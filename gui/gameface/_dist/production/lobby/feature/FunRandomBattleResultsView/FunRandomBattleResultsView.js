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
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => i, onResize: () => n, onScaleUpdated: () => s });
                var a = t(2472),
                    r = t(1176);
                const n = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const n = `mouse${u}`,
                                            s = l[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, i),
                                            a(),
                                            () => {
                                                r &&
                                                    (s(),
                                                    window.removeEventListener(n, i),
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
                        return Object.assign({}, n, {
                            disable() {
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
                            },
                            enableOutside() {
                                e.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, r.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => s,
                        getSize: () => n,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var a = t(527),
                    r = t(2493);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2493: (e, u, t) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => a });
            },
            2472: (e, u, t) => {
                'use strict';
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => n });
                var a = t(5959),
                    r = t(514);
                const n = { view: t(7641), client: a, sound: r.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => s });
                var a = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    n = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, a.playSound)(r[u])), e), {}),
                    s = { play: Object.assign({}, n, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => a });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var a = t(2472);
                const r = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => v,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => C,
                        getScale: () => A,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => B,
                        isFocused: () => h,
                        pxToRem: () => F,
                        remToPx: () => D,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => S,
                    });
                var a = t(3722),
                    r = t(6112),
                    n = t(6538),
                    s = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function E(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function C() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => n });
                const a = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    n = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(3138);
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
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, {
                    B3: () => l,
                    Gr: () => c,
                    Z5: () => s.Z5,
                    lf: () => d,
                    B0: () => i,
                    c9: () => p,
                    ry: () => D,
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
                const r = a;
                var n = t(1358),
                    s = t(8613);
                let i;
                var o;
                ((o = i || (i = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    E = t(3138);
                const g = ['args'];
                function A(e, u, t, a, r, n, s) {
                    try {
                        var i = e[n](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, r);
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
                                    return new Promise(function (a, r) {
                                        var n = e.apply(u, t);
                                        function s(e) {
                                            A(n, a, r, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(n, a, r, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
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
                                })(u, g);
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
                    h = () => p(i.CLOSE),
                    b = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var B = t(7572);
                const f = r.instance,
                    C = {
                        DataTracker: n.Z,
                        ViewModel: B.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => p(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => p(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                m = o.height,
                                _ = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(m),
                                };
                            p(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(_),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, h);
                        },
                        handleViewEvent: p,
                        onBindingsReady: D,
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
                        ClickOutsideManager: f,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = C;
            },
            8613: (e, u, t) => {
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
            6145: (e, u, t) => {
                'use strict';
                var a = {};
                t.r(a),
                    t.d(a, {
                        Area: () => tr,
                        Bar: () => Ja,
                        DefaultScroll: () => ur,
                        Direction: () => Wa,
                        defaultSettings: () => za,
                        useHorizontalScrollApi: () => Va,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => Er, Bar: () => dr, Default: () => _r, useVerticalScrollApi: () => ar });
                var n = t(6179),
                    s = t.n(n);
                const i = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, u, t) {
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
                })(c || (c = {}));
                const m = o.O.client.getSize('rem'),
                    _ = m.width,
                    E = m.height,
                    g = Object.assign({ width: _, height: E }, d(_, E, l)),
                    A = (0, n.createContext)(g),
                    F = ['children'],
                    D = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, F);
                        const a = (0, n.useContext)(A),
                            r = a.extraLarge,
                            s = a.large,
                            o = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            d = a.extraLargeWidth,
                            m = a.largeWidth,
                            _ = a.mediumWidth,
                            E = a.smallWidth,
                            g = a.extraSmallWidth,
                            D = a.extraLargeHeight,
                            p = a.largeHeight,
                            h = a.mediumHeight,
                            b = a.smallHeight,
                            B = a.extraSmallHeight,
                            f = { extraLarge: D, large: p, medium: h, small: b, extraSmall: B };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return u;
                            if (t.large && s) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && d) return i(u, t, f);
                            if (t.largeWidth && m) return i(u, t, f);
                            if (t.mediumWidth && _) return i(u, t, f);
                            if (t.smallWidth && E) return i(u, t, f);
                            if (t.extraSmallWidth && g) return i(u, t, f);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && D) return u;
                                if (t.largeHeight && p) return u;
                                if (t.mediumHeight && h) return u;
                                if (t.smallHeight && b) return u;
                                if (t.extraSmallHeight && B) return u;
                            }
                        }
                        return null;
                    };
                (D.defaultProps = {
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
                }),
                    (0, n.memo)(D);
                const p = ({ children: e }) => {
                    const u = (0, n.useContext)(A),
                        t = (0, n.useState)(u),
                        a = t[0],
                        r = t[1],
                        i = (0, n.useCallback)((e, u) => {
                            const t = o.O.view.pxToRem(e),
                                a = o.O.view.pxToRem(u);
                            r(Object.assign({ width: t, height: a }, d(t, a, l)));
                        }, []),
                        c = (0, n.useCallback)(() => {
                            const e = o.O.client.getSize('px');
                            i(e.width, e.height);
                        }, [i]);
                    ((e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        o.O.client.events.on('clientResized', i), o.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, n.useEffect)(
                            () => () => {
                                o.O.client.events.off('clientResized', i),
                                    o.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [i, c],
                        );
                    const m = (0, n.useMemo)(() => Object.assign({}, a), [a]);
                    return s().createElement(A.Provider, { value: m }, e);
                };
                var h = t(6483),
                    b = t.n(h),
                    B = t(926),
                    f = t.n(B);
                let C, v, w;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(C || (C = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const S = () => {
                        const e = (0, n.useContext)(A),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return C.ExtraLarge;
                                    case e.large:
                                        return C.Large;
                                    case e.medium:
                                        return C.Medium;
                                    case e.small:
                                        return C.Small;
                                    case e.extraSmall:
                                        return C.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), C.ExtraSmall;
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
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return w.ExtraLarge;
                                    case e.largeHeight:
                                        return w.Large;
                                    case e.mediumHeight:
                                        return w.Medium;
                                    case e.smallHeight:
                                        return w.Small;
                                    case e.extraSmallHeight:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const N = {
                        [v.ExtraSmall]: '',
                        [v.Small]: f().SMALL_WIDTH,
                        [v.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [v.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [w.ExtraSmall]: '',
                        [w.Small]: f().SMALL_HEIGHT,
                        [w.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [w.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [C.ExtraSmall]: '',
                        [C.Small]: f().SMALL,
                        [C.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [C.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [C.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    I = (e) => {
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
                            })(e, y);
                        const r = S(),
                            n = r.mediaWidth,
                            i = r.mediaHeight,
                            o = r.mediaSize;
                        return s().createElement('div', T({ className: b()(t, N[n], P[i], x[o]) }, a), u);
                    },
                    k = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, k);
                        return s().createElement(p, null, s().createElement(I, t, u));
                    };
                var M = t(493),
                    L = t.n(M);
                function U(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const H = {
                        playHighlight() {
                            U('highlight');
                        },
                        playClick() {
                            U('play');
                        },
                        playYes() {
                            U('yes1');
                        },
                    },
                    G = {
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
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                class z extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && U(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && U(this.props.soundClick);
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
                            n = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
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
                                })(e, $)),
                            _ = b()(G.base, G[`base__${n}`], G[`base__${r}`], null == i ? void 0 : i.base),
                            E = b()(G.icon, G[`icon__${n}`], G[`icon__${r}`], null == i ? void 0 : i.icon),
                            g = b()(G.glow, null == i ? void 0 : i.glow),
                            A = b()(G.caption, G[`caption__${n}`], null == i ? void 0 : i.caption),
                            F = b()(G.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            W(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== n && s().createElement('div', { className: G.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: g })),
                            s().createElement('div', { className: A }, u),
                            a && s().createElement('div', { className: F }, a),
                        );
                    }
                }
                z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var q = t(5521),
                    V = t(9916);
                const j = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function X(e = q.n.NONE, u = j, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== q.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t, a]);
                }
                function Y(e) {
                    X(q.n.ESCAPE, e);
                }
                var K = t(3403);
                const Z = R.images.fun_random.gui.maps.icons.feature.asset_packs,
                    Q = (e, u) => ('string' == typeof u ? e.$dyn(u) : u.reduce((e, u) => e.$dyn(u), e)),
                    J = (e, u) => {
                        var t;
                        const a = u ? 'sub_modes' : 'modes',
                            r = Z.$dyn(a);
                        return null != (t = r.$dyn(e)) ? t : r.$dyn('undefined');
                    };
                class ee extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? V.B3.GOLD : V.B3.INTEGRAL;
                        const u = V.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                let ue, te, ae, re, ne, se, ie;
                (ee.defaultProps = { format: 'integral' }),
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
                    })(ue || (ue = {})),
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
                    })(te || (te = {})),
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
                    })(ae || (ae = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(re || (re = {})),
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
                    })(ne || (ne = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(se || (se = {})),
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
                    })(ie || (ie = {}));
                const oe = [
                        ue.Items,
                        ue.Equipment,
                        ue.Xp,
                        ue.XpFactor,
                        ue.Blueprints,
                        ue.BlueprintsAny,
                        ue.Goodies,
                        ue.Berths,
                        ue.Slots,
                        ue.Tokens,
                        ue.CrewSkins,
                        ue.CrewBooks,
                        ue.Customizations,
                        ue.CreditsFactor,
                        ue.TankmenXp,
                        ue.TankmenXpFactor,
                        ue.FreeXpFactor,
                        ue.BattleToken,
                        ue.PremiumUniversal,
                        ue.NaturalCover,
                        ue.BpCoin,
                        ue.BattlePassSelectToken,
                        ue.BattlaPassFinalAchievement,
                        ue.BattleBadge,
                        ue.BonusX5,
                        ue.CrewBonusX3,
                        ue.NewYearInvoice,
                        ue.EpicSelectToken,
                        ue.Comp7TokenWeeklyReward,
                        ue.DeluxeGift,
                        ue.BattleBoosterGift,
                        ue.OptionalDevice,
                    ],
                    le = [ue.Gold, ue.Credits, ue.Crystal, ue.FreeXp],
                    ce = [ue.BattlePassPoints, ue.EquipCoin],
                    de = [ue.PremiumPlus, ue.Premium],
                    me = ['engravings', 'backgrounds'],
                    _e = ['engraving', 'background'],
                    Ee = (e, u = ae.Small) => {
                        const t = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case ae.S600x450:
                                        return 'c_600x450';
                                    case ae.S400x300:
                                        return 'c_400x300';
                                    case ae.S296x222:
                                        return 'c_296x222';
                                    case ae.S232x174:
                                        return 'c_232x174';
                                    case ae.Big:
                                        return 'c_80x80';
                                    case ae.Small:
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
                                    const a = me[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            n = r.$dyn(t);
                                        return n ? `${n}` : `${r.$dyn(_e[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${n}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${o}.${n}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    ge = (e, u, t) => {
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
                    },
                    Ae = [ae.Small, ae.Big];
                let Fe, De;
                function pe(e) {
                    return e;
                }
                function he() {
                    return !1;
                }
                !(function (e) {
                    (e.Squad = 'squad'),
                        (e.Player = 'player'),
                        (e.Damage = 'damage'),
                        (e.Frag = 'frag'),
                        (e.Xp = 'xp'),
                        (e.Vehicle = 'tank');
                })(Fe || (Fe = {})),
                    (function (e) {
                        (e.Asc = 'ascending'), (e.Desc = 'descending');
                    })(De || (De = {})),
                    console.log;
                var be = t(9174);
                function Be(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const fe = (e) => (0 === e ? window : window.subViews.get(e));
                const Ce = function (e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                };
                function ve(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function we(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) if (u(Ce(e, t), t, e)) return !0;
                    return !1;
                }
                function Se(e, u) {
                    for (let r = 0; r < e.length; r++) {
                        const n =
                            ((t = e[r]),
                            (a = void 0),
                            t && 'value' in t && null != (a = t.constructor) && a.name.includes('ArrayItem')
                                ? null == t
                                    ? void 0
                                    : t.value
                                : t);
                        if (u(n, r, e)) return n;
                    }
                    var t, a;
                }
                function ye(e, u) {
                    for (let t = 0; t < e.length; t++) if (u(Ce(e, t), t, e)) return t;
                }
                var Te = t(3946);
                const Re = {
                        [Fe.Squad]: 'squadHeader',
                        [Fe.Frag]: 'fragHeader',
                        [Fe.Xp]: 'xpHeader',
                        [Fe.Vehicle]: 'tankHeader',
                        [Fe.Player]: 'playerHeader',
                        [Fe.Damage]: 'damageHeader',
                    },
                    Ne = [Fe.Squad, Fe.Vehicle, Fe.Player];
                let Pe;
                !(function (e) {
                    (e[(e.DESCENDING = -1)] = 'DESCENDING'), (e[(e.ASCENDING = 1)] = 'ASCENDING');
                })(Pe || (Pe = {}));
                const xe = (e) => (u) => (t, a) => e.call(null, t, a) * u,
                    Ie =
                        (...e) =>
                        (u, t) => {
                            for (let a = 0; a < e.length; a++) {
                                const r = e[a].call(null, u, t);
                                if (0 !== r) return r;
                            }
                            return 0;
                        },
                    ke = (e, u) => {
                        const t = e.toUpperCase(),
                            a = u.toUpperCase();
                        return t === a ? 0 : t > a ? 1 : -1;
                    },
                    Oe = (e) => (u, t) => {
                        const a = u[e],
                            r = t[e];
                        return 'string' == typeof a && 'string' == typeof r
                            ? ke(a, r)
                            : 'number' == typeof a && 'number' == typeof r
                              ? a - r
                              : 0;
                    },
                    Me = { [De.Asc]: Pe.ASCENDING, [De.Desc]: Pe.DESCENDING },
                    Le = { heavyTank: 4, mediumTank: 3, 'AT-SPG': 2, lightTank: 1, SPG: 0 },
                    Ue = ({ userNames: e }, { userNames: u }) => ke(e.userName, u.userName),
                    He = (e) => {
                        const u = Oe(e);
                        return ({ efficiencyValues: e }, { efficiencyValues: t }) => u(e, t);
                    },
                    Ge = (e) => {
                        const u = Oe(e);
                        return ({ vehicle: e }, { vehicle: t }) => u(e, t);
                    },
                    $e = {
                        [Fe.Damage]: xe(Ie(He('damageDealt'), Ue)),
                        [Fe.Frag]: xe(Ie(He('kills'), Ue)),
                        [Fe.Xp]: xe(Ie(He('earnedXp'), Ue)),
                        [Fe.Squad]: xe(
                            Ie(
                                ((e) => {
                                    const u = Oe('squadIndex');
                                    return (e, t) => u(e, t);
                                })(),
                                Ue,
                            ),
                        ),
                        [Fe.Vehicle]: xe(
                            (
                                (e, ...u) =>
                                (t, a) => {
                                    for (let r = 0; r < u.length; r++) {
                                        const n = e[r],
                                            s = (0 !== n ? n : Pe.ASCENDING) * u[r].call(null, t, a);
                                        if (0 !== s) return s;
                                    }
                                    return 0;
                                }
                            )(
                                [0, 0, Pe.DESCENDING, Pe.DESCENDING],
                                Ge('tier'),
                                (e, u) =>
                                    ((e, u) => {
                                        const t = Le[e],
                                            a = Le[u];
                                        return t === a ? 0 : t > a ? 1 : -1;
                                    })(e.vehicle.type, u.vehicle.type),
                                Ge('name'),
                                Ue,
                            ),
                        ),
                        [Fe.Player]: xe(Ue),
                    },
                    We = (e, u, t) => {
                        const a = Me[t];
                        return ve(e, pe).sort($e[u](a));
                    },
                    ze = 'allies',
                    qe = 'empty',
                    Ve = '1',
                    je = '2',
                    Xe = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: r, mocks: i }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, t, a) => {
                                        var r;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = fe,
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
                                                const s = (e) => {
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
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return r.set(l, t), e && t(s(n)), l;
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
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return Be(e, u);
                                                                                var t = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? Be(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(e = t()).done;

                                                        )
                                                            n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        userStatus: e.object('userStatus'),
                                                        user: e.object('userNames'),
                                                        killer: e.object('userStatus.killer'),
                                                        battleInfo: e.object('battleInfo'),
                                                        efficiency: e.array('efficiency'),
                                                        rewards: e.array('rewards'),
                                                        premiumPlus: e.object('premiumPlus'),
                                                        detailsColumns: e.array('teamStats.shownValueColumns'),
                                                        sortType: e.object('teamStats.sortingColumn'),
                                                        sortDirection: e.object('teamStats.sortingOrder'),
                                                        selectedTeam: be.LO.box(qe),
                                                        selectedPlayerId: be.LO.box(-1),
                                                        currentTabId: be.LO.box(Ve),
                                                        allies: e.array('teamStats.allies'),
                                                        enemies: e.array('teamStats.enemies'),
                                                        progressRewards: e.array('progress.rewards'),
                                                        progress: e.object('progress'),
                                                        animationStatus: be.LO.box(!0),
                                                    },
                                                    t = (0, Te.Om)(() => {
                                                        const e = we(
                                                                u.allies.get(),
                                                                (e) => void 0 !== e.squadIndex && e.squadIndex > 0,
                                                            ),
                                                            t = we(
                                                                u.enemies.get(),
                                                                (e) => void 0 !== e.squadIndex && e.squadIndex > 0,
                                                            );
                                                        return e || t;
                                                    }),
                                                    a = (0, Te.Om)(() => {
                                                        const e = u.sortType.get();
                                                        return e !== Fe.Squad || t() ? e : Fe.Xp;
                                                    }),
                                                    r = (0, Te.Om)(() => {
                                                        const e = Se(u.allies.get(), (e) => e.isPersonal);
                                                        return e ? e.squadIndex : -1;
                                                    }),
                                                    n = (0, Te.Om)(() =>
                                                        We(u.enemies.get(), a(), u.sortDirection.get()),
                                                    ),
                                                    s = (0, Te.Om)(() =>
                                                        We(u.allies.get(), a(), u.sortDirection.get()),
                                                    ),
                                                    i = (0, Te.Om)(() => {
                                                        const e = u.selectedTeam.get() === ze,
                                                            t = u.selectedPlayerId.get();
                                                        return Se(
                                                            e ? u.allies.get() : u.enemies.get(),
                                                            (e) => e.playerIndex === t,
                                                        );
                                                    }),
                                                    o = (0, Te.Om)(() => {
                                                        const e = i();
                                                        return (
                                                            !!e &&
                                                            (function (e, u, t) {
                                                                if (Array.isArray(e)) return e.reduce(u, t);
                                                                let a = t;
                                                                for (let t = 0; t < e.length; t++)
                                                                    a = u(a, Ce(e, t), t, e);
                                                                return a;
                                                            })(
                                                                e.detailedStatistics,
                                                                (e, u) => e + 1 + u.details.length,
                                                                0,
                                                            ) > 23
                                                        );
                                                    }),
                                                    l = (0, Te.Om)(
                                                        () =>
                                                            ve(u.progressRewards.get(), (e) => {
                                                                return {
                                                                    name: e.name,
                                                                    image: Ee(e),
                                                                    value: e.value,
                                                                    special: e.overlayType,
                                                                    valueType:
                                                                        ((u = e.name),
                                                                        oe.includes(u)
                                                                            ? re.MULTI
                                                                            : le.includes(u)
                                                                              ? re.CURRENCY
                                                                              : ce.includes(u)
                                                                                ? re.NUMBER
                                                                                : de.includes(u)
                                                                                  ? re.PREMIUM_PLUS
                                                                                  : re.STRING),
                                                                    tooltipArgs: ge(
                                                                        { tooltipId: e.tooltipId },
                                                                        Number(e.tooltipContentId),
                                                                    ),
                                                                };
                                                                var u;
                                                            }),
                                                        { equals: he },
                                                    ),
                                                    c = (0, Te.Om)(() => {
                                                        const e = u.progress.get(),
                                                            t = e.maximumPoints,
                                                            a = e.previousPoints,
                                                            r = e.currentPoints,
                                                            n = e.earnedPoints;
                                                        return {
                                                            previous: {
                                                                value: t,
                                                                deltaFrom: a,
                                                                maxValue: t,
                                                                earnedPoints: t - a,
                                                            },
                                                            current: {
                                                                value: r,
                                                                deltaFrom: r - n,
                                                                maxValue: t,
                                                                earnedPoints: n,
                                                            },
                                                            fromZeroToStart: {
                                                                value: r,
                                                                deltaFrom: 0,
                                                                maxValue: t,
                                                                earnedPoints: r,
                                                            },
                                                            withoutAnimation: {
                                                                value: r,
                                                                deltaFrom: r,
                                                                maxValue: t,
                                                                earnedPoints: 0,
                                                            },
                                                        };
                                                    });
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        personalSquadIndex: r,
                                                        enemiesSorted: n,
                                                        alliesSorted: s,
                                                        selectedPlayer: i,
                                                        hasDetailedInfoScroll: o,
                                                        hasSquads: t,
                                                        activeSortingType: a,
                                                        progressionValues: c,
                                                        rewards: l,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            r = be.LO.box(a, { equals: he });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, be.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            r = be.LO.box(a, { equals: he });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, be.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = i(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = be.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, be.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                n = Object.entries(r),
                                                                i = n.reduce(
                                                                    (e, [u, t]) => ((e[t] = be.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, be.aD)((e) => {
                                                                            n.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            m = { mode: e, model: d, externalModel: s, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && a ? a.controls(m) : u(m),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    m = (0, n.useState)(e),
                                    _ = m[0],
                                    E = m[1],
                                    g = (0, n.useState)(() => c(e, a, i)),
                                    A = g[0],
                                    F = g[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? F(c(_, a, i)) : (d.current = !0);
                                    }, [i, _, a]),
                                    (0, n.useEffect)(() => {
                                        E(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            A.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [A],
                                    ),
                                    s().createElement(t.Provider, { value: A }, r)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        0,
                        ({
                            externalModel: e,
                            model: {
                                currentTabId: u,
                                sortType: t,
                                sortDirection: a,
                                selectedTeam: r,
                                selectedPlayerId: n,
                                animationStatus: s,
                            },
                        }) =>
                            Object.assign(
                                {
                                    closeWindow: e.createCallbackNoArgs('onClose'),
                                    riseRewards: e.createCallbackNoArgs('premiumPlus.onPremiumXpBonusApplied'),
                                    changeTab: e.createCallback((e) => ({ tabId: e }), 'onTabChanged'),
                                    saveStatsSorting: e.createCallback(
                                        (e, u) => ({ column: e, sortDirection: u }),
                                        'teamStats.onStatsSorted',
                                    ),
                                },
                                (function (e) {
                                    const u = {};
                                    for (const t in e)
                                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                                            const a = e[t];
                                            u[t] = (0, be.aD)(a);
                                        }
                                    return u;
                                })({
                                    updateTeamTableSelectedPlayer: (e, u) => {
                                        r.set(e), n.set(u);
                                    },
                                    updateTeamTableSorting: (e, u) => {
                                        t.set(e), a.set(u);
                                    },
                                    updateCurrentTabId: (e) => {
                                        u.set(e);
                                    },
                                    setAnimationEnabled: (e) => {
                                        s.set(e);
                                    },
                                }),
                            ),
                    ),
                    Ye = Xe[0],
                    Ke = Xe[1],
                    Ze = {
                        base: 'App_base_e5',
                        background: 'App_background_63',
                        background__team: 'App_background__team_b0',
                        bgDarken: 'App_bgDarken_79',
                        bgDarken__personal: 'App_bgDarken__personal_f7',
                        bgGlow: 'App_bgGlow_c4',
                        bgGlow__tie: 'App_bgGlow__tie_f1',
                        bgGlow__win: 'App_bgGlow__win_9d',
                        bgGlow__lose: 'App_bgGlow__lose_a4',
                        closeButton: 'App_closeButton_7f',
                        wrapper: 'App_wrapper_9d',
                        content: 'App_content_90',
                        footer: 'App_footer_35',
                        navigation: 'App_navigation_ee',
                        navigationItem: 'App_navigationItem_19',
                    },
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
                    };
                let Je, eu;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Je || (Je = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(eu || (eu = {}));
                const uu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: r,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const A = (0, n.useRef)(null),
                        F = (0, n.useState)(t),
                        D = F[0],
                        p = F[1],
                        h = (0, n.useState)(!1),
                        B = h[0],
                        f = h[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                D && null !== A.current && !A.current.contains(e.target) && p(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [D]),
                        (0, n.useEffect)(() => {
                            p(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: A,
                                className: b()(
                                    Qe.base,
                                    Qe[`base__${a}`],
                                    r && Qe.base__disabled,
                                    u && Qe[`base__${u}`],
                                    D && Qe.base__focus,
                                    B && Qe.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== o && U(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    r || (_ && _(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== l && U(l),
                                        m && m(e),
                                        t && (r || (A.current && (A.current.focus(), p(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (E && E(e), f(!1));
                                },
                                onClick: function (e) {
                                    r || (g && g(e));
                                },
                            },
                            a !== Je.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Qe.back }),
                                    s().createElement('span', { className: Qe.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: b()(Qe.state, Qe.state__default) },
                                s().createElement('span', { className: Qe.stateDisabled }),
                                s().createElement('span', { className: Qe.stateHighlightHover }),
                                s().createElement('span', { className: Qe.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Qe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                uu.defaultProps = { type: Je.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const tu = uu;
                let au;
                !(function (e) {
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
                })(au || (au = {}));
                var ru = t(1281);
                let nu;
                function su(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(nu || (nu = {}));
                const iu = (e) => e.replace(/&nbsp;/g, ' '),
                    ou = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    lu = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    cu = (e, u, t = nu.left) => e.split(u).reduce(t === nu.left ? ou : lu, []),
                    du = (() => {
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
                    mu = ['zh_cn', 'zh_sg', 'zh_tw'];
                var _u = t(8613);
                const Eu = (Date.now(), _u.Ew.getRegionalDateTime),
                    gu = _u.Ew.getFormattedDateTime,
                    Au = (0, n.memo)(({ datetime: e, format: u = au.ShortDate, isConvertedToLocal: t = !0 }) =>
                        Object.values(au).includes(u) ? Eu(e, u, t) : gu(e, u, t),
                    ),
                    Fu = ({ binding: e, text: u = '', classMix: t, alignment: a = nu.left, formatWithBrackets: r }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const i = r && e ? ((o = e), u.replace(/\{\w+\}/g, (e) => String(o[e.slice(1, -1)]))) : u;
                        var o;
                        return s().createElement(
                            n.Fragment,
                            null,
                            i.split('\n').map((u, r) =>
                                s().createElement(
                                    'div',
                                    { className: b()('FormatText_base_d0', t), key: `${u}-${r}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = nu.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return mu.includes(t)
                                                          ? du(e)
                                                          : 'ja' === t
                                                            ? (0, ru.D4)()
                                                                  .parse(e)
                                                                  .map((e) => iu(e))
                                                            : ((e, u = nu.left) => {
                                                                  let t = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = iu(e);
                                                                  return (
                                                                      cu(r, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(cu(e, a, nu.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, a, e).map((e, u) =>
                                        s().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    };
                let Du;
                !(function (e) {
                    (e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220');
                })(Du || (Du = {}));
                const pu = [
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
                function hu(e) {
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
                const bu = (e, u, t = {}, a = 0) => {
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
                    Bu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            g = e.isEnabled,
                            A = void 0 === g || g,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            p = e.onShow,
                            h = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, pu);
                        const B = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(
                                () =>
                                    D ||
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
                                [D],
                            ),
                            C = (0, n.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (bu(t, E, { isMouseEvent: !0, on: !0, arguments: hu(a) }, f),
                                    p && p(),
                                    (B.current.isVisible = !0));
                            }, [t, E, a, f, p]),
                            v = (0, n.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        bu(t, E, { on: !1 }, f),
                                        B.current.isVisible && h && h(),
                                        (B.current.isVisible = !1);
                                }
                            }, [t, E, f, h]),
                            w = (0, n.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = B.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === A && v();
                            }, [A, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            ),
                            A
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((B.current.timeoutId = window.setTimeout(C, c ? 100 : 400)),
                                                          r && r(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  v(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === m && v(), null == o || o(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === m && v(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    fu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                const vu = R.views.common.tooltip_window.simple_tooltip_content,
                    wu = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            r = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, fu);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: a, note: r, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, a, r, o]);
                        return s().createElement(
                            Bu,
                            Cu(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? vu.SimpleTooltipHtmlContent('resId') : vu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    Su = (e) => {
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
                    yu = ['content', 'classMix', 'className'];
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const Ru = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            a = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, yu);
                        const i = (0, n.useRef)(null),
                            o = (0, n.useState)(!0),
                            l = o[0],
                            c = o[1];
                        return (
                            (0, n.useEffect)(() =>
                                Su(() => {
                                    const e = i.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            s().createElement(
                                wu,
                                { isEnabled: l, body: u },
                                s().createElement(
                                    'div',
                                    Tu({}, r, { ref: i, className: b()('TextOverflow_base_3b', a, t) }),
                                    u,
                                ),
                            )
                        );
                    },
                    Nu = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Pu = { [Du.default]: 'c_24x24', [Du.x48]: 'c_48x48', [Du.x80]: 'c_80x80', [Du.x220]: 'c_220x220' },
                    xu = ({ badgeID: e, size: u = Du.default, className: t }) => {
                        const a = R.images.gui.maps.icons.library.badges.$dyn(Pu[u]);
                        return s().createElement('div', {
                            className: b()(Nu.base, Nu[`base__${u}`], t),
                            style: { backgroundImage: `url(${a.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Iu = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    ku = (0, n.memo)(({ tooltipHeaderName: e }) => {
                        const u = (0, n.useMemo)(
                                () => su(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return s().createElement(
                            wu,
                            { header: u, body: t },
                            s().createElement('div', { className: Iu.anonymizedIcon }),
                        );
                    });
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                const Mu = { [Du.default]: 'c_64x24', [Du.x48]: 'c_68x28' },
                    Lu = { [Du.default]: 'c_48x48', [Du.x48]: 'c_48x48' },
                    Uu = ({
                        userName: e,
                        clanAbbrev: u = '',
                        igrType: t = 0,
                        badge: a = { badgeID: '' },
                        suffixBadge: r = { badgeID: '' },
                        isInverted: i = !1,
                        isFakeNameVisible: o = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: d = Du.default,
                        userNameClassName: m = '',
                        clanTagClassName: _ = '',
                    }) => {
                        const E = R.images.gui.maps.icons.library.badges.strips.$dyn(Mu[d]),
                            g = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${E.$dyn(`strip_${r.badgeID}`)})` }),
                                [r, E],
                            ),
                            A = R.images.gui.maps.icons.library.badges.$dyn(Lu[d]),
                            F = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${A.$dyn(`badge_${r.badgeID}`)})` }),
                                [r, A],
                            ),
                            D = u ? `[${u}]` : '',
                            p = b()(Iu.base, Iu[`base__${d}`], i && Iu.base__inverted),
                            h = b()(Iu.userName, m),
                            B = b()(Iu.clanTag, _),
                            f = e !== c,
                            C = o ? `${c}${D}` : c,
                            v = Boolean(a.badgeID) && s().createElement(xu, Ou({ size: d }, a, { key: 'badge' })),
                            w = Date.now(),
                            S = [
                                v,
                                [
                                    s().createElement(
                                        'div',
                                        { className: h, key: 'userName' },
                                        s().createElement(Ru, { content: e, key: w }),
                                    ),
                                    !o && Boolean(D) && s().createElement('div', { className: B, key: 'clanTag' }, D),
                                ],
                                0 !== t && s().createElement('div', { className: Iu.igrIcon, key: 'igrType' }),
                                Boolean(r.badgeID) &&
                                    s().createElement(
                                        'div',
                                        { className: Iu.suffixBadgeWrapper, key: 'suffixBadge' },
                                        s().createElement('div', { className: Iu.suffixBadgeStripe, style: g }),
                                        s().createElement('div', { className: Iu.suffixBadge, style: F }),
                                    ),
                                l && f && s().createElement(ku, { tooltipHeaderName: C, key: 'anonymizer' }),
                            ];
                        return s().createElement('div', { className: p }, i ? S.reverse() : S);
                    };
                let Hu;
                var Gu;
                ((Gu = Hu || (Hu = {})).Base = '#ced9d9'),
                    (Gu.Killed = '#8c8c7e'),
                    (Gu.Highlighted = '#feab34'),
                    (Gu.KilledHighlighted = '#b58136'),
                    (Gu.TeamKiller = '#09e2ff'),
                    (Gu.KilledTeamKiller = '#0c8fa0'),
                    (Gu.DetailedInfoPlayerBase = '#f2f2f7');
                const $u = ['isTeamKiller'],
                    Wu = (e) => {
                        let u = e.isTeamKiller,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, $u);
                        return u
                            ? t.isKilled
                                ? Hu.KilledTeamKiller
                                : Hu.TeamKiller
                            : (({ isPersonal: e, isSameSquad: u, isKilled: t }) =>
                                  e || u ? (t ? Hu.KilledHighlighted : Hu.Highlighted) : t ? Hu.Killed : Hu.Base)(t);
                    },
                    zu = ['isTeamKiller', 'isKilled', 'isPersonal', 'isSameSquad'],
                    qu = (e) => {
                        let u = e.isTeamKiller,
                            t = e.isKilled,
                            a = e.isPersonal,
                            r = e.isSameSquad,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, zu);
                        const o = Wu({ isTeamKiller: u, isKilled: t, isPersonal: a, isSameSquad: r }),
                            l = (0, n.useMemo)(() => ({ color: o }), [o]);
                        return s().createElement('div', { style: l }, s().createElement(Uu, i));
                    },
                    Vu = 'Footer_top_2c',
                    ju = 'Footer_bottom_d1',
                    Xu = 'Footer_killer_b8',
                    Yu = 'Footer_dot_be',
                    Ku = (0, K.Pi)(() => {
                        const e = Ke(),
                            u = e.model,
                            t = e.controls.closeWindow,
                            a = u.currentTabId.get() === je,
                            r = u.battleInfo.get(),
                            i = r.modeName,
                            o = r.arenaName,
                            l = r.battleStartTime,
                            c = r.battleDuration,
                            d = r.finishReason,
                            m = u.userStatus.get(),
                            _ = m.deathReason,
                            E = m.isLeftBattle,
                            g = u.user.get(),
                            A = u.killer.get(),
                            F = E
                                ? R.strings.battle_results.common.vehicleState.prematureLeave()
                                : R.strings.battle_results.common.vehicleState.alive();
                        return (
                            Y(t),
                            s().createElement(
                                'div',
                                { className: b()('Footer_base_68', a && 'Footer_base__teams_44') },
                                s().createElement(
                                    'div',
                                    { className: 'Footer_left_2f' },
                                    s().createElement(
                                        'div',
                                        { className: Vu },
                                        systemLocale.toUpperCase(i),
                                        s().createElement('div', { className: Yu }),
                                        systemLocale.toUpperCase(o),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: ju },
                                        s().createElement('div', null, R.strings.fun_battle_results.finish()),
                                        s().createElement(
                                            'div',
                                            { className: 'Footer_accent_a7' },
                                            s().createElement(Au, { datetime: l + c, format: au.ShortDateTime }),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Footer_button_de' },
                                    s().createElement(
                                        tu,
                                        { type: Je.primary, size: eu.medium, onClick: t },
                                        s().createElement(Fu, { text: R.strings.fun_battle_results.continueBtn() }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Footer_right_cd' },
                                    s().createElement('div', { className: Vu }, systemLocale.toUpperCase(d)),
                                    s().createElement(
                                        'div',
                                        { className: ju },
                                        !E && g.isKilled
                                            ? s().createElement(
                                                  'div',
                                                  { className: Xu },
                                                  R.strings.battle_results.common.vehicleState.$dyn(`dead${_}`),
                                                  A.userName !== g.userName &&
                                                      s().createElement(
                                                          n.Fragment,
                                                          null,
                                                          s().createElement(Fu, {
                                                              text: R.strings.common.common.nbsp(),
                                                          }),
                                                          s().createElement(qu, A),
                                                      ),
                                              )
                                            : s().createElement('div', { className: Xu }, F),
                                        s().createElement('div', { className: Yu }),
                                        s().createElement(
                                            'div',
                                            { className: 'Footer_player_5f' },
                                            s().createElement(qu, g),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Zu = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Qu, Ju;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Qu || (Qu = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Ju || (Ju = {}));
                const et = ({ size: e = Qu.Default }) => {
                        const u = b()(Zu.background, Zu[`background__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    ut = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    tt = ({ size: e }) => {
                        const u = b()(ut.base, ut[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    at = {
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
                    rt = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: r, withoutBounce: n }) => {
                            const i = b()(
                                    at.base,
                                    at[`base__${e}`],
                                    t && at.base__disabled,
                                    r && at.base__finished,
                                    n && at.base__withoutBounce,
                                ),
                                o = !t && !r;
                            return s().createElement(
                                'div',
                                { className: i, style: a, ref: u },
                                s().createElement('div', { className: at.pattern }),
                                s().createElement('div', { className: at.gradient }),
                                o && s().createElement(tt, { size: e }),
                            );
                        },
                    ),
                    nt = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: r }) => {
                        const i = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                o && r && r();
                            }, [o, r]),
                            s().createElement(rt, { size: e, disabled: a, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    },
                    st = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(a);
                        };
                    };
                let it, ot;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(it || (it = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(ot || (ot = {}));
                const lt = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: r,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < a,
                                d = (0, n.useState)(ot.Idle),
                                m = d[0],
                                _ = d[1],
                                E = m === ot.In,
                                g = m === ot.End,
                                A = m === ot.Idle,
                                F = (0, n.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (A && !t)
                                    return st(() => {
                                        F(ot.In);
                                    }, u);
                            }, [F, t, A, u]),
                                (0, n.useEffect)(() => {
                                    if (E)
                                        return st(() => {
                                            o && o(), F(ot.End);
                                        }, e + u);
                                }, [F, E, o, u, e]);
                            const D = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                p = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                h = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(a - i)}%`, left: `${c ? i : a}%` }),
                                    [a, c, i],
                                );
                            return g
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: h },
                                      s().createElement(
                                          'div',
                                          { style: A ? D : p, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(tt, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    ct = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: r,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, n.useMemo)(
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
                                s().createElement(rt, {
                                    size: u,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: i,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    s().createElement(lt, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    dt = (e) => (e ? { left: 0 } : { right: 0 }),
                    mt = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    _t = (e) => ({ transitionDuration: `${e}ms` }),
                    Et = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: r,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = i < a,
                                m = (0, n.useState)(it.Idle),
                                _ = m[0],
                                E = m[1],
                                g = _ === it.End,
                                A = _ === it.Idle,
                                F = _ === it.Grow,
                                D = _ === it.Shrink,
                                p = (0, n.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                h = (0, n.useCallback)(
                                    (e, u) =>
                                        st(() => {
                                            p(e);
                                        }, u),
                                    [p],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return A
                                        ? h(it.Grow, u)
                                        : F
                                          ? h(it.Shrink, e)
                                          : D
                                            ? h(it.End, e)
                                            : void (g && o && o());
                            }, [h, t, g, F, A, D, o, u, e]);
                            const B = (0, n.useMemo)(() => Object.assign({ width: '100%' }, _t(e), dt(d)), [d, e]),
                                f = (0, n.useMemo)(() => Object.assign({ width: '0%' }, _t(e), dt(d)), [d, e]),
                                C = (0, n.useMemo)(() => Object.assign({ width: '0%' }, mt(d, a), _t(e)), [a, d, e]),
                                v = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - a)}%` }, mt(d, a), _t(e)),
                                    [a, d, i, e],
                                );
                            if (g) return null;
                            const w = b()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                d && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: A ? C : v, className: w },
                                s().createElement(
                                    'div',
                                    { style: D ? f : B, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(tt, { size: r }),
                                ),
                            );
                        },
                    ),
                    gt = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: r,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                m = (0, n.useState)(!1),
                                _ = m[0],
                                E = m[1],
                                g = (0, n.useCallback)(
                                    (e) => {
                                        e === it.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                A = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(rt, {
                                    size: u,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: i,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? F : A,
                                }),
                                t >= 0 &&
                                    s().createElement(Et, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    At = ['onComplete', 'onEndAnimation'];
                function Ft() {
                    return (
                        (Ft =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ft.apply(this, arguments)
                    );
                }
                const Dt = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, At);
                        const r = (0, n.useState)(!1),
                            i = r[0],
                            o = r[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== i && o(e), e && u && u(), t && t();
                            }, [i, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case Ju.Simple:
                                return s().createElement(ct, Ft({}, a, { onEndAnimation: l, isComplete: i }));
                            case Ju.Growing:
                                return s().createElement(gt, Ft({}, a, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    pt = ['onEndAnimation'];
                function ht() {
                    return (
                        (ht =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ht.apply(this, arguments)
                    );
                }
                const bt = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, pt);
                    const a = (0, n.useRef)({}),
                        r = (0, n.useCallback)(() => {
                            (a.current.from = void 0), u && u();
                        }, [u]),
                        i = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = i),
                        s().createElement(Dt, ht({}, t, { onEndAnimation: r, key: `${i}-${t.to}`, from: i }))
                    );
                });
                function Bt() {
                    return (
                        (Bt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Bt.apply(this, arguments)
                    );
                }
                const ft = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: r,
                            animationSettings: n,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (r === u)
                                return s().createElement(nt, {
                                    key: `${r}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: a,
                                animationSettings: n,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return n.withStack
                                ? s().createElement(bt, c)
                                : s().createElement(Dt, Bt({ key: `${r}-${u}` }, c));
                        },
                    ),
                    Ct = (e) => ({
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
                    vt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    wt = (e, u, t) => ('number' == typeof t ? (vt(0, u, t) / u) * 100 : e),
                    St = {
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
                    yt = {
                        freezed: !1,
                        withStack: !1,
                        type: Ju.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Tt = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = St,
                            size: t = Qu.Default,
                            animationSettings: a = yt,
                            disabled: r = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: d,
                            onEndAnimation: m,
                            onComplete: _,
                        }) => {
                            const E = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const a = (vt(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: wt(a, u, t) };
                                }, [t, u, e]))(o, e, l);
                            return s().createElement(
                                'div',
                                { className: b()(Zu.base, Zu[`base__${t}`]), style: Ct(u) },
                                !i && s().createElement(et, { size: t }),
                                s().createElement(ft, {
                                    size: t,
                                    lineRef: c,
                                    disabled: r,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: m,
                                    onChangeAnimationState: d,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    Rt = ['children'];
                function Nt() {
                    return (
                        (Nt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Nt.apply(this, arguments)
                    );
                }
                const Pt = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, Rt);
                    return s().createElement(
                        Bu,
                        Nt(
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
                function xt() {
                    return (
                        (xt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        xt.apply(this, arguments)
                    );
                }
                const It = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(wu, u, a);
                        const r = u.contentId;
                        return r ? s().createElement(Bu, xt({}, u, { contentId: r }), a) : s().createElement(Pt, u, a);
                    },
                    kt = {
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
                        timer: 'Reward_timer_d3',
                    },
                    Ot = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = ae.Big,
                        special: r,
                        value: n,
                        valueType: i,
                        style: o,
                        className: l,
                        classNames: c,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const _ = ((e, u) => {
                                if (void 0 === u || !Ae.includes(e)) return null;
                                switch (u) {
                                    case ne.BATTLE_BOOSTER:
                                    case ne.BATTLE_BOOSTER_REPLACE:
                                        return se.BATTLE_BOOSTER;
                                }
                            })(a, r),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ne.BATTLE_BOOSTER:
                                        return ie.BATTLE_BOOSTER;
                                    case ne.BATTLE_BOOSTER_REPLACE:
                                        return ie.BATTLE_BOOSTER_REPLACE;
                                    case ne.BUILT_IN_EQUIPMENT:
                                        return ie.BUILT_IN_EQUIPMENT;
                                    case ne.EQUIPMENT_PLUS:
                                        return ie.EQUIPMENT_PLUS;
                                    case ne.EQUIPMENT_TROPHY_BASIC:
                                        return ie.EQUIPMENT_TROPHY_BASIC;
                                    case ne.EQUIPMENT_TROPHY_UPGRADED:
                                        return ie.EQUIPMENT_TROPHY_UPGRADED;
                                    case ne.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ie.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ne.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ie.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ne.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ie.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ne.PROGRESSION_STYLE_UPGRADED_1:
                                        return ie.PROGRESSION_STYLE_UPGRADED_1;
                                    case ne.PROGRESSION_STYLE_UPGRADED_2:
                                        return ie.PROGRESSION_STYLE_UPGRADED_2;
                                    case ne.PROGRESSION_STYLE_UPGRADED_3:
                                        return ie.PROGRESSION_STYLE_UPGRADED_3;
                                    case ne.PROGRESSION_STYLE_UPGRADED_4:
                                        return ie.PROGRESSION_STYLE_UPGRADED_4;
                                    case ne.PROGRESSION_STYLE_UPGRADED_5:
                                        return ie.PROGRESSION_STYLE_UPGRADED_5;
                                    case ne.PROGRESSION_STYLE_UPGRADED_6:
                                        return ie.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(r),
                            g = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case re.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case re.CURRENCY:
                                    case re.NUMBER:
                                        return s().createElement(ee, { format: 'integral', value: Number(e) });
                                    case re.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(n, i);
                        return s().createElement(
                            'div',
                            { className: b()(kt.base, kt[`base__${a}`], l), style: o },
                            s().createElement(
                                It,
                                { tooltipArgs: d, className: kt.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: b()(kt.image, null == c ? void 0 : c.image) },
                                        _ &&
                                            s().createElement('div', {
                                                className: b()(kt.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: b()(kt.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        E &&
                                            s().createElement('div', {
                                                className: b()(kt.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    kt.info,
                                                    kt[`info__${e}`],
                                                    i === re.MULTI && kt.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    It,
                                    { tooltipArgs: m },
                                    s().createElement('div', {
                                        className: b()(kt.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function Mt() {
                    return (
                        (Mt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Mt.apply(this, arguments)
                    );
                }
                const Lt = s().memo(
                        ({
                            data: e,
                            size: u = ae.Big,
                            isVertical: t = !1,
                            count: a,
                            classMix: r,
                            rewardItemClassMix: i,
                            boxRewardTooltip: o,
                            boxRewardValue: l,
                        }) => {
                            const c = (0, n.useMemo)(
                                    () =>
                                        a && a < e.length ? `R.images.gui.maps.icons.quests.bonuses.${u}.default` : '',
                                    [a, e.length, u],
                                ),
                                d =
                                    l ||
                                    su(R.strings.tooltips.quests.awards.additional.bottom(), {
                                        count: e.length - (a || 0),
                                    }),
                                m = b()('Rewards_base_26', t && 'Rewards_base__vertical_9f', r),
                                _ = b()('Rewards_reward_7b', t && 'Rewards_reward__vertical_c6', i);
                            return s().createElement(
                                'div',
                                { className: m },
                                c
                                    ? s().createElement(
                                          s().Fragment,
                                          null,
                                          e
                                              .slice(0, a)
                                              .map((e, t) =>
                                                  s().createElement(
                                                      'div',
                                                      { key: t, className: _ },
                                                      s().createElement(Ot, Mt({ size: u }, e)),
                                                  ),
                                              ),
                                          s().createElement(
                                              'div',
                                              { className: _ },
                                              s().createElement(Ot, {
                                                  name: 'more',
                                                  image: c,
                                                  size: u,
                                                  value: d,
                                                  tooltipArgs: o,
                                              }),
                                          ),
                                      )
                                    : e.map((e, t) =>
                                          s().createElement(
                                              'div',
                                              { key: t, className: _ },
                                              s().createElement(Ot, Mt({ size: u }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    Ut = {
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
                    Ht = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Gt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    $t = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Wt = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const a = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            r = (0, n.useMemo)(() => u || {}, [u]);
                        let i = Ht.exec(e),
                            o = e,
                            l = 0;
                        for (; i; ) {
                            const t = i[0],
                                n = Gt.exec(t),
                                c = $t.exec(t),
                                d = i[1];
                            if (n && c) {
                                const e = n[0],
                                    i = e + l++ + e;
                                (o = o.replace(t, `%(${i})`)),
                                    (r[i] = Ut[e]
                                        ? s().createElement(
                                              'span',
                                              { className: Ut[e] },
                                              s().createElement(Fu, { text: d, binding: u }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: a(e) },
                                              s().createElement(Fu, { text: d, binding: u }),
                                          ));
                            }
                            i = Ht.exec(e);
                        }
                        return s().createElement(Fu, { text: o, classMix: t, binding: r });
                    });
                const zt = {
                        freezed: !1,
                        withStack: !1,
                        type: Ju.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    qt = {
                        base: 'Progress_base_81',
                        title: 'Progress_title_be',
                        description: 'Progress_description_d5',
                        bar: 'Progress_bar_b5',
                        counter: 'Progress_counter_d1',
                        currentCount: 'Progress_currentCount_e3',
                        slash: 'Progress_slash_fe',
                        value: 'Progress_value_4f',
                        footer: 'Progress_footer_bd',
                        rewards: 'Progress_rewards_30',
                        header: 'Progress_header_16',
                        rewardItem: 'Progress_rewardItem_d2',
                        reward: 'Progress_reward_78',
                        infiniteIcon: 'Progress_infiniteIcon_4d',
                    },
                    Vt = R.strings.fun_battle_results.progress,
                    jt = (0, K.Pi)(() => {
                        const e = Ke(),
                            u = e.model,
                            t = e.controls,
                            a = u.progress.get(),
                            r = a.description,
                            i = a.assetsPointer,
                            l = a.currentStage,
                            c = a.maximumStage,
                            d = a.isInUnlimitedProgression,
                            m = a.previousStage,
                            _ = a.earnedPoints,
                            E = ((e, { poFileName: u, assetsPointer: t, isSubMode: a } = {}) => {
                                const r = u ? R.strings.$dyn(u) : R.strings.fun_random;
                                if (!r || 'string' == typeof r) throw Error("Incorrect 'poFileName' argument");
                                const n = a ? 'sub_modes' : 'modes',
                                    s = (t ? r.$dyn(n)[t] : r) || r.$dyn(n)[void 0];
                                return e
                                    ? { staticTexts: Q(r, e), dynamicTexts: Q(s, e) }
                                    : { staticTexts: r, dynamicTexts: s };
                            })(null, { assetsPointer: i }),
                            g = E.dynamicTexts,
                            A = l !== m,
                            F = A ? u.computes.progressionValues().previous : u.computes.progressionValues().current,
                            D = (function () {
                                const e = (0, n.useRef)(!0);
                                var u;
                                return (
                                    (u = () => {
                                        e.current = !1;
                                    }),
                                    (0, n.useEffect)(u, []),
                                    e.current
                                );
                            })(),
                            p = u.animationStatus.get(),
                            h = (0, n.useState)(p ? F : u.computes.progressionValues().withoutAnimation),
                            b = h[0],
                            B = h[1],
                            f = (0, n.useState)(A ? m : l),
                            C = f[0],
                            v = f[1];
                        return (
                            s().useEffect(() => {
                                if ((p && o.O.sound.play.sound('ev_fep_pb_start'), !D))
                                    return (0, be.EH)(() => {
                                        p &&
                                            C === l &&
                                            (B(u.computes.progressionValues().fromZeroToStart),
                                            t.setAnimationEnabled(!1));
                                    });
                            }, [l, u.computes, C, p, D, t]),
                            s().createElement(
                                'div',
                                { className: qt.base },
                                s().createElement(
                                    'div',
                                    { className: qt.header },
                                    s().createElement(
                                        'div',
                                        { className: qt.title },
                                        s().createElement(Wt, {
                                            text: d ? Vt.unlimitedProgression.title() : Vt.title(),
                                            binding: { modeName: g.userName(), done: p ? C : l, total: d ? '' : c },
                                        }),
                                    ),
                                    s().createElement('div', { className: qt.description }, r),
                                ),
                                s().createElement(
                                    'div',
                                    { className: qt.bar },
                                    s().createElement(Tt, {
                                        animationSettings: zt,
                                        size: Qu.Default,
                                        deltaFrom: b.deltaFrom,
                                        value: b.value,
                                        maxValue: b.maxValue,
                                        onChangeAnimationState: (e) =>
                                            ((e) => {
                                                e === ot.End &&
                                                    (o.O.sound.play.sound('ev_fep_pb_stop'),
                                                    C === l && t.setAnimationEnabled(!1),
                                                    C < l && v(l));
                                            })(e),
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: qt.footer },
                                    s().createElement(
                                        'div',
                                        { className: qt.counter },
                                        s().createElement('div', { className: qt.currentCount }, b.value),
                                        s().createElement(
                                            'div',
                                            { className: qt.slash },
                                            s().createElement(Fu, { text: R.strings.common.common.slash() }),
                                        ),
                                        s().createElement('div', { className: qt.total }, b.maxValue),
                                    ),
                                    s().createElement(Lt, {
                                        classMix: qt.rewards,
                                        data: u.computes.rewards(),
                                        size: ae.Small,
                                        rewardItemClassMix: qt.rewardItem,
                                        count: u.computes.rewards().length > 4 ? 3 : void 0,
                                        boxRewardTooltip: {
                                            contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                            args: { showCount: 4 },
                                        },
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: qt.value },
                                        _ > 0 ? su(R.strings.common.plusValue(), { value: _ }) : _,
                                    ),
                                ),
                            )
                        );
                    });
                let Xt, Yt;
                !(function (e) {
                    (e.Draw = 'tie'), (e.Win = 'win'), (e.Lose = 'lose');
                })(Xt || (Xt = {})),
                    (function (e) {
                        (e.UNDEFINED = 'undefined'),
                            (e.MUL = 'mul'),
                            (e.ADD = 'add'),
                            (e.SUB = 'sub'),
                            (e.PROCENT = 'procent'),
                            (e.SHOW_NEGATIVE_IMPACT = 'showNegativeImpact');
                    })(Yt || (Yt = {}));
                const Kt = {
                        base: 'Profit_base_51',
                        base__big: 'Profit_base__big_52',
                        base__large: 'Profit_base__large_70',
                        icon: 'Profit_icon_75',
                        'icon__tankmenXP-small': 'Profit_icon__tankmenXP-small_3f',
                        'icon__tankmenXP-big': 'Profit_icon__tankmenXP-big_a7',
                        'icon__tankmenXP-large': 'Profit_icon__tankmenXP-large_ef',
                        'icon__credits-small': 'Profit_icon__credits-small_5d',
                        base__small: 'Profit_base__small_4e',
                        'icon__credits-big': 'Profit_icon__credits-big_02',
                        'icon__credits-large': 'Profit_icon__credits-large_6b',
                        'icon__gold-small': 'Profit_icon__gold-small_87',
                        'icon__gold-big': 'Profit_icon__gold-big_d4',
                        'icon__gold-large': 'Profit_icon__gold-large_b8',
                        'icon__crystal-small': 'Profit_icon__crystal-small_8d',
                        'icon__crystal-big': 'Profit_icon__crystal-big_74',
                        'icon__crystal-large': 'Profit_icon__crystal-large_6f',
                        'icon__multyXp-small': 'Profit_icon__multyXp-small_34',
                        'icon__multyFreeXp-small': 'Profit_icon__multyFreeXp-small_cc',
                        'icon__xp-small': 'Profit_icon__xp-small_88',
                        'icon__xp-big': 'Profit_icon__xp-big_7f',
                        'icon__xp-large': 'Profit_icon__xp-large_37',
                        'icon__freeXP-small': 'Profit_icon__freeXP-small_26',
                        'icon__freeXP-big': 'Profit_icon__freeXP-big_36',
                        'icon__freeXP-large': 'Profit_icon__freeXP-large_b0',
                        value: 'Profit_value_c4',
                        value__notEnough: 'Profit_value__notEnough_0f',
                    },
                    Zt = (e, u) =>
                        (function (e, u) {
                            for (let t = 0; t < e.length; t++) if (Ce(e, t) === u) return !0;
                            return !1;
                        })(u, e),
                    Qt = ({ type: e, value: u, showPlus: t, size: a, modifiers: r = [] }) =>
                        s().createElement(
                            'span',
                            { className: b()(Kt.base, Kt[`base__${a}`]) },
                            s().createElement(
                                'span',
                                {
                                    className: b()(
                                        Kt.value,
                                        Kt[`value__${e}`],
                                        (u < 0 || Zt(Yt.SHOW_NEGATIVE_IMPACT, r)) && Kt.value__notEnough,
                                    ),
                                },
                                (t || Zt(Yt.ADD, r)) && u > 0 && '+',
                                Zt(Yt.MUL, r) && R.strings.common.multiplier(),
                                Number.isInteger(u) ? s().createElement(ee, { value: u }) : u,
                                Zt(Yt.PROCENT, r) && R.strings.common.common.percent(),
                            ),
                            s().createElement('span', { className: b()(Kt.icon, Kt[`icon__${e}-${a}`]) }),
                        ),
                    Jt = ({ type: e, value: u }) => {
                        const t = S();
                        return s().createElement(
                            Bu,
                            {
                                contentId:
                                    R.views.fun_random.lobby.tooltips.FunRandomBattleResultsEconomicTooltipView(
                                        'resId',
                                    ),
                                args: { currencyType: e },
                            },
                            s().createElement(
                                'div',
                                { className: 'Reward_base_1a' },
                                s().createElement(Qt, {
                                    type: e,
                                    value: u,
                                    size: [C.Large, C.ExtraLarge].includes(t.mediaSize) ? 'large' : 'big',
                                }),
                            ),
                        );
                    },
                    ea = { base: 'RewardList_base_bc' },
                    ua = (0, K.Pi)(() => {
                        const e = Ke().model.rewards.get();
                        return s().createElement(
                            'div',
                            { className: ea.base },
                            ve(e, (e, u) =>
                                s().createElement('div', { className: ea.item, key: u }, s().createElement(Jt, e)),
                            ),
                        );
                    }),
                    ta = (e = 0, u = 1, t, a, r = !1) => {
                        const s = (0, n.useState)(e),
                            i = s[0],
                            o = s[1];
                        return (
                            (0, n.useEffect)(() => {
                                o(e);
                            }, [e]),
                            (0, n.useEffect)(() => {
                                const n = Date.now(),
                                    s = setInterval(() => {
                                        const u = e + (r ? 1 : -1) * Math.floor((Date.now() - n) / 1e3);
                                        void 0 !== t && (r ? u >= t : u <= t)
                                            ? (o(t), a && a(), clearInterval(s))
                                            : o(u);
                                    }, 1e3 * u);
                                return () => {
                                    clearInterval(s);
                                };
                            }, [e, u, t, a, r]),
                            i
                        );
                    },
                    aa = ({
                        className: e,
                        hourFormat: u = R.strings.quests.general.countdown.timer_hrs(),
                        minuteFormat: t = R.strings.quests.general.countdown.timer_min(),
                        roundUpHours: a = !1,
                        startingSeconds: r = 0,
                        refreshRate: n = 1,
                        onFinish: i,
                        targetTime: o,
                        useTimeUpdateHook: l = ta,
                        isCountUp: c = !1,
                    }) => {
                        const d = l(r, n, o, i, c),
                            m = Math.abs(d) < 3600 ? t : u;
                        return s().createElement(
                            'span',
                            { className: e },
                            ((e, u, t) => {
                                const a = u < 0,
                                    r = Math.abs(u),
                                    n = Math.floor(r / 86400).toString(),
                                    s = Math.floor(r / 3600).toString(),
                                    i = Math.floor((r % 3600) / 60).toString(),
                                    o = Math.floor(r % 60).toString(),
                                    l = e
                                        .replace('%D', n.padStart(1, '0'))
                                        .replace('%HH', s.padStart(2, '0'))
                                        .replace('%H', t && Number(i) >= 30 ? (Number(s) + 1).toString() : s)
                                        .replace('%MM', i.padStart(2, '0'))
                                        .replace('%M', i.toString())
                                        .replace('%SS', o.padStart(2, '0'))
                                        .replace('%S', o);
                                return a ? `-${l}` : l;
                            })(m, d, a),
                        );
                    };
                let ra, na, sa, ia, oa;
                var la, ca, da;
                let ma;
                !(function (e) {
                    (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                })(ra || (ra = {})),
                    (function (e) {
                        (e[(e.Equipped = 0)] = 'Equipped'), (e[(e.Locked = 1)] = 'Locked'), (e[(e.Open = 2)] = 'Open');
                    })(na || (na = {})),
                    ((da = sa || (sa = {})).Engraving = 'engraving'),
                    (da.Background = 'background'),
                    (da.All = 'all'),
                    ((ca = ia || (ia = {})).Dedication = 'dedication'),
                    (ca.Skill = 'skill'),
                    (ca.RankedSkill = 'ranked_skill'),
                    (ca.Triumph = 'triumph'),
                    (ca.Medal = 'triumph_medal'),
                    (ca.Base = 'base'),
                    ((la = oa || (oa = {})).Dedication = 'dedication'),
                    (la.Triumph = 'triumph'),
                    (la.Season = 'season'),
                    oa.Dedication,
                    ia.Dedication,
                    oa.Triumph,
                    ia.Triumph,
                    oa.Season,
                    ia.Skill,
                    ia.RankedSkill,
                    (function (e) {
                        (e.NUMBER = 'NUMBER'), (e.PERCENTAGE = 'PERCENTAGE');
                    })(ma || (ma = {})),
                    R.images.gui.maps.icons.dogtags,
                    R.strings.dogtags.component,
                    ra.Engraving,
                    ra.Background,
                    ra.Engraving,
                    ra.Background;
                const _a = (e, u = ma.NUMBER) => {
                    const t = V.Z5.getRealFormat(e, V.Gr.WO_ZERO_DIGITS).replace(/\s/g, ' ');
                    return u === ma.PERCENTAGE ? `${t} %` : t;
                };
                let Ea;
                !(function (e) {
                    (e[(e.NoRestriction = 0)] = 'NoRestriction'),
                        (e[(e.IsApplied = 1)] = 'IsApplied'),
                        (e[(e.InvalidBattleType = 2)] = 'InvalidBattleType'),
                        (e[(e.IsNotVictory = 3)] = 'IsNotVictory'),
                        (e[(e.DeprecatedResults = 4)] = 'DeprecatedResults'),
                        (e[(e.NoVehicle = 5)] = 'NoVehicle'),
                        (e[(e.NoCrew = 6)] = 'NoCrew'),
                        (e[(e.FasterEducationCrewNotActive = 7)] = 'FasterEducationCrewNotActive'),
                        (e[(e.FasterEducationCrewActive = 8)] = 'FasterEducationCrewActive'),
                        (e[(e.NotApplyingError = 9)] = 'NotApplyingError');
                })(Ea || (Ea = {}));
                const ga = 'Upgrade_icon_32',
                    Aa = 'Upgrade_error_2b';
                let Fa;
                !(function (e) {
                    (e[(e.IsNotVictory = Ea.IsNotVictory)] = 'IsNotVictory'),
                        (e[(e.DeprecatedResults = Ea.DeprecatedResults)] = 'DeprecatedResults'),
                        (e[(e.NoVehicle = Ea.NoVehicle)] = 'NoVehicle'),
                        (e[(e.NoCrew = Ea.NoCrew)] = 'NoCrew'),
                        (e[(e.FasterEducationCrewNotActive = Ea.FasterEducationCrewNotActive)] =
                            'FasterEducationCrewNotActive'),
                        (e[(e.FasterEducationCrewActive = Ea.FasterEducationCrewActive)] = 'FasterEducationCrewActive');
                })(Fa || (Fa = {}));
                const Da = R.strings.fun_battle_results.ribbon,
                    pa = [Ea.IsApplied, Ea.NotApplyingError, Ea.IsNotVictory],
                    ha = [Ea.IsApplied, Ea.NoRestriction],
                    ba = (0, K.Pi)(() => {
                        const e = Ke(),
                            u = e.model,
                            t = e.controls,
                            a = u.premiumPlus.get(),
                            r = a.nextBonusTime,
                            n = a.xpDiff,
                            i = a.restriction,
                            o = a.bonusMultiplier,
                            l = a.leftBonusCount,
                            c = a.isUndefinedLeftBonusCount,
                            d = !pa.includes(i),
                            m = ha.includes(i),
                            _ = i === Ea.IsNotVictory,
                            E = i === Ea.NoRestriction && (l > 0 || c),
                            g = () => {
                                E && t.riseRewards();
                            };
                        return s().createElement(
                            'div',
                            { className: b()('Upgrade_base_25', E && 'Upgrade_base__column_02') },
                            s().createElement('div', { className: 'Upgrade_highlight_44' }),
                            E &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: 'Upgrade_flash_e0' }),
                                    s().createElement('div', {
                                        className: 'Upgrade_multiplier_81',
                                        style: {
                                            backgroundImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.ribbon.multiplaers.$dyn('x' + String(o))})`,
                                        },
                                    }),
                                ),
                            r > 0 && !_
                                ? s().createElement(
                                      'div',
                                      { className: 'Upgrade_timerWrapper_6a' },
                                      s().createElement('div', { className: 'Upgrade_timerText_27' }, Da.timeLeft()),
                                      s().createElement(
                                          'div',
                                          { className: b()('Upgrade_state_ee', 'Upgrade_state__timer_2d') },
                                          s().createElement('div', { className: b()(ga, 'Upgrade_icon__timer_eb') }),
                                          s().createElement(aa, {
                                              startingSeconds: r,
                                              refreshRate: 1,
                                              targetTime: 0,
                                              hourFormat: '%HH:%MM:%SS',
                                              className: 'Upgrade_timer_06',
                                          }),
                                      ),
                                  )
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      (() => {
                                          switch (i) {
                                              case Ea.NotApplyingError:
                                                  return s().createElement(
                                                      'div',
                                                      { className: Aa },
                                                      s().createElement('div', {
                                                          className: b()(ga, 'Upgrade_icon__attention_a6'),
                                                      }),
                                                      s().createElement('span', null, Da.errorState()),
                                                  );
                                              case Ea.IsApplied:
                                                  return s().createElement(
                                                      s().Fragment,
                                                      null,
                                                      s().createElement('div', { className: 'Upgrade_accepter_0d' }),
                                                      s().createElement(
                                                          'div',
                                                          { className: 'Upgrade_applied_b3' },
                                                          Da.applied(),
                                                      ),
                                                  );
                                              case Ea.NoRestriction:
                                                  return s().createElement(
                                                      'div',
                                                      {
                                                          className: b()(
                                                              'Upgrade_button_d7',
                                                              d && 'Upgrade_button__cursor_eb',
                                                          ),
                                                          onClick: g,
                                                      },
                                                      s().createElement(
                                                          'div',
                                                          {
                                                              className: b()(
                                                                  'Upgrade_content_a5',
                                                                  'Upgrade_content__normal_7d',
                                                              ),
                                                          },
                                                          s().createElement(Fu, {
                                                              text: Da.expBonus(),
                                                              classMix: 'Upgrade_defaultState_a0',
                                                              binding: {
                                                                  count: _a(n),
                                                                  icon: s().createElement('img', {
                                                                      className: 'Upgrade_xpIcon_df',
                                                                      src: 'R.images.gui.maps.icons.library.XpIcon_1',
                                                                      alt: 'bubble',
                                                                  }),
                                                              },
                                                          }),
                                                      ),
                                                  );
                                              default:
                                                  return s().createElement(
                                                      'div',
                                                      { className: Aa },
                                                      s().createElement('div', {
                                                          className: b()(ga, 'Upgrade_icon__information_50'),
                                                      }),
                                                      s().createElement(
                                                          'span',
                                                          null,
                                                          R.strings.fun_battle_results.premiumBonus.$dyn(Fa[i]),
                                                      ),
                                                  );
                                          }
                                      })(),
                                  ),
                            l >= 0 &&
                                m &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    !E && s().createElement('div', { className: 'Upgrade_devider_63' }),
                                    s().createElement(
                                        'div',
                                        { className: 'Upgrade_usesLeft_a2' },
                                        s().createElement(Fu, {
                                            text: Da.usesLeft(),
                                            binding: {
                                                count: s().createElement(
                                                    'div',
                                                    { className: 'Upgrade_points_73' },
                                                    i === Ea.NotApplyingError || c ? R.strings.common.common.dash() : l,
                                                ),
                                            },
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Ba = {
                        base: 'Ribbon_base_51',
                        base__upgradable: 'Ribbon_base__upgradable_36',
                        ribbon: 'Ribbon_ribbon_03',
                        ribbon__win: 'Ribbon_ribbon__win_b4',
                        ribbon__prem: 'Ribbon_ribbon__prem_92',
                        ribbon__lose: 'Ribbon_ribbon__lose_0f',
                        ribbon__lose_prem: 'Ribbon_ribbon__lose_prem_97',
                        ribbon__draw: 'Ribbon_ribbon__draw_0e',
                        ribbon__draw_prem: 'Ribbon_ribbon__draw_prem_80',
                        upgrade: 'Ribbon_upgrade_13',
                        icon: 'Ribbon_icon_d4',
                        icon__1: 'Ribbon_icon__1_95',
                        icon__2: 'Ribbon_icon__2_71',
                        icon__3: 'Ribbon_icon__3_28',
                        icon__4: 'Ribbon_icon__4_f2',
                        icon__5: 'Ribbon_icon__5_30',
                    },
                    fa = (0, K.Pi)(() => {
                        const e = Ke().model,
                            u = e.battleInfo.get().winStatus,
                            t = e.premiumPlus.get(),
                            a = t.hasPremium,
                            r = t.isXpBonusEnabled,
                            n = u === Xt.Win;
                        return s().createElement(
                            'div',
                            { className: b()(Ba.base, r && Ba.base__upgradable) },
                            s().createElement('div', {
                                className: b()(
                                    Ba.ribbon,
                                    n && (a ? Ba.ribbon__prem : Ba.ribbon__win),
                                    !n && (a ? Ba.ribbon__lose_prem : Ba.ribbon__lose),
                                ),
                            }),
                            s().createElement(ua, null),
                            s().createElement('div', { className: Ba.shadow }),
                            r && s().createElement('div', { className: Ba.upgrade }, s().createElement(ba, null)),
                        );
                    }),
                    Ca = ({ paramType: e, value: u }) =>
                        s().createElement(
                            Bu,
                            {
                                contentId: R.views.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
                                args: { paramType: e },
                            },
                            s().createElement(
                                'div',
                                { className: 'StatItem_base_11' },
                                s().createElement('div', {
                                    className: 'StatItem_statImage_27',
                                    style: {
                                        backgroundImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.stat_list.$dyn(e)})`,
                                    },
                                }),
                                s().createElement('div', { className: 'StatItem_statText_7b' }, u),
                                s().createElement(
                                    'div',
                                    { className: 'StatItem_titleText_ed' },
                                    s().createElement(Fu, {
                                        text: String(R.strings.fun_battle_results.efficiency.$dyn(e)),
                                    }),
                                ),
                            ),
                        ),
                    va = (0, K.Pi)(() => {
                        const e = Ke().model.efficiency.get();
                        return s().createElement(
                            'div',
                            { className: 'StatList_base_58' },
                            ve(e, (e, u) =>
                                s().createElement(
                                    'div',
                                    { className: 'StatList_item_0e', key: u },
                                    s().createElement(Ca, e),
                                ),
                            ),
                        );
                    }),
                    wa = {
                        base: 'PersonalTab_base_09',
                        content: 'PersonalTab_content_1f',
                        header: 'PersonalTab_header_6d',
                        ribbon: 'PersonalTab_ribbon_da',
                        statistics: 'PersonalTab_statistics_7d',
                        progress: 'PersonalTab_progress_ca',
                        title: 'PersonalTab_title_f9',
                    },
                    Sa = R.strings.fun_battle_results.result,
                    ya = (0, K.Pi)(() => {
                        const e = Ke().model,
                            u = e.battleInfo.get().winStatus,
                            t = e.efficiency.get(),
                            a = e.rewards.get(),
                            r = e.progress.get().hasProgress;
                        return s().createElement(
                            'div',
                            { className: wa.base },
                            s().createElement(
                                'div',
                                { className: wa.content },
                                s().createElement(
                                    'div',
                                    { className: b()(wa.header, wa[`header__${u}`]) },
                                    s().createElement('div', { className: wa.title }, Sa.$dyn(u)),
                                ),
                                t.length >= 3 &&
                                    s().createElement('div', { className: wa.statistics }, s().createElement(va, null)),
                                a.length > 0 &&
                                    s().createElement('div', { className: wa.ribbon }, s().createElement(fa, null)),
                                r && s().createElement('div', { className: wa.progress }, s().createElement(jt, null)),
                            ),
                        );
                    }),
                    Ta = [];
                function Ra(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), Ta)
                    );
                }
                const Na = (0, n.createContext)(null);
                function Pa() {
                    const e = (0, n.useContext)(Na);
                    if (null === e) throw new Error('You can use tabs hooks only with Tabs component');
                    return e;
                }
                const xa = {
                    base: 'Switch_base_22',
                    base__inactive: 'Switch_base__inactive_ae',
                    base__active: 'Switch_base__active_17',
                    highlight: 'Switch_highlight_33',
                    border: 'Switch_border_3a',
                    border__left: 'Switch_border__left_b2',
                    border__right: 'Switch_border__right_93',
                    separator: 'Switch_separator_f2',
                    separator__left: 'Switch_separator__left_40',
                    separator__right: 'Switch_separator__right_bf',
                };
                function Ia() {
                    return (
                        (Ia =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ia.apply(this, arguments)
                    );
                }
                const ka = s().forwardRef(function (e, u) {
                        let t = Ia({}, e);
                        return s().createElement('div', Ia({ className: 'Switcher_base_2f', ref: u }, t));
                    }),
                    Oa = (e) => {
                        const u = e.active,
                            t = e.children,
                            a = e.onActiveChange,
                            r = (0, n.useState)(u),
                            i = r[0],
                            o = r[1],
                            l = Ra((e) => {
                                null == a || a(e);
                            }),
                            c = (0, n.useMemo)(() => ({ active: i, change: o }), [i]);
                        return (
                            (0, n.useLayoutEffect)(() => {
                                o(u);
                            }, [u]),
                            (0, n.useEffect)(() => {
                                u !== i && a && l(i);
                            }, [i, u, l, a]),
                            s().createElement(Na.Provider, { value: c }, t)
                        );
                    };
                (Oa.Switcher = ka),
                    (Oa.Switch = ({ tabId: e, children: u }) => {
                        const t = Pa();
                        return s().createElement(
                            'div',
                            {
                                className: b()(
                                    xa.base,
                                    xa['base__' + ((r = t.active === e), r ? 'active' : 'inactive')],
                                ),
                                onClick: () => t.change(e),
                            },
                            s().createElement('div', {
                                className: b()(
                                    xa.separator,
                                    xa['separator__' + ((a = t.active < e), a ? 'right' : 'left')],
                                ),
                            }),
                            t.active === e &&
                                s().createElement(
                                    n.Fragment,
                                    null,
                                    s().createElement('div', { className: xa.highlight }),
                                    s().createElement('div', { className: b()(xa.border, xa.border__left) }),
                                    s().createElement('div', { className: b()(xa.border, xa.border__right) }),
                                ),
                            u,
                        );
                        var a, r;
                    }),
                    (Oa.Content = ({ children: e }) => {
                        const u = Pa();
                        return s().createElement(n.Fragment, { key: u.active }, e(u.active));
                    });
                const Ma = 'LifeStatus_killer_4b',
                    La = R.strings.battle_results.common.vehicleState,
                    Ua = ({ player: e }) => {
                        const u = e.userStatus,
                            t = u.isLeftBattle,
                            a = u.deathReason,
                            r = u.killer,
                            i = e.userNames,
                            o = i.userName,
                            l = i.isKilled,
                            c = t && e.isPersonal ? La.prematureLeave() : La.alive();
                        return s().createElement(
                            'div',
                            { className: 'LifeStatus_base_03' },
                            !t && l
                                ? s().createElement(
                                      'div',
                                      { className: Ma },
                                      La.$dyn(`dead${a}`),
                                      r.userName !== o &&
                                          s().createElement(
                                              n.Fragment,
                                              null,
                                              s().createElement(Fu, { text: R.strings.common.common.nbsp() }),
                                              s().createElement(qu, r),
                                          ),
                                  )
                                : s().createElement('div', { className: Ma }, c),
                        );
                    };
                function Ha(e, u, t = []) {
                    const a = (0, n.useRef)(0),
                        r = (0, n.useCallback)(() => window.clearInterval(a.current), t || []);
                    (0, n.useEffect)(() => r, [r]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, n.useCallback)((t) => {
                            (a.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        r,
                    ];
                }
                function Ga(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                var $a = t(7030);
                let Wa;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Wa || (Wa = {}));
                const za = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    qa = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (e, t) => {
                            const a = u(e),
                                r = a[0],
                                n = a[1];
                            return n <= r ? 0 : vt(r, n, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? za : c,
                                m = (0, n.useRef)(null),
                                _ = (0, n.useRef)(null),
                                E = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        a = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (
                                                var a,
                                                    r = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return Ga(e, u);
                                                                    var t = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === t &&
                                                                            e.constructor &&
                                                                            (t = e.constructor.name),
                                                                        'Map' === t || 'Set' === t
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === t ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    t,
                                                                                )
                                                                              ? Ga(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
                                                            var a = 0;
                                                            return function () {
                                                                return a >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[a++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(a = r()).done;

                                            )
                                                (0, a.value)(...t);
                                        };
                                    return (0, n.useMemo)(() => ({ on: t, off: a, trigger: r }), []);
                                })(),
                                g = (function (e, u, t) {
                                    const a = (0, n.useMemo)(
                                        () =>
                                            (function (e, u, t, a) {
                                                let r,
                                                    n = !1,
                                                    s = 0;
                                                function i() {
                                                    r && clearTimeout(r);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function d() {
                                                        (s = Date.now()), t.apply(l, o);
                                                    }
                                                    n ||
                                                        (a && !r && d(),
                                                        i(),
                                                        void 0 === a && c > e
                                                            ? d()
                                                            : !0 !== u &&
                                                              (r = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((a = t), (t = u), (u = void 0)),
                                                    (o.cancel = function () {
                                                        i(), (n = !0);
                                                    }),
                                                    o
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return (0, n.useEffect)(() => a.cancel, [a]), a;
                                })(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, $a.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), E.trigger('change', e), s && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                F = A[0],
                                D = A[1],
                                p = (0, n.useCallback)(
                                    (e, u, t) => {
                                        var a;
                                        const r = F.scrollPosition.get(),
                                            n = (null != (a = F.scrollPosition.goal) ? a : 0) - r;
                                        return i(e, u * t + n + r);
                                    },
                                    [F.scrollPosition],
                                ),
                                h = (0, n.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const a = m.current;
                                        a &&
                                            D.start({
                                                scrollPosition: i(a, e),
                                                immediate: u,
                                                reset: t,
                                                config: d.animationConfig,
                                                from: { scrollPosition: i(a, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, d.animationConfig, F.scrollPosition],
                                ),
                                b = (0, n.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = _.current;
                                        if (!u || !t) return;
                                        const a = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, d.step),
                                            n = p(u, e, a);
                                        h(n);
                                    },
                                    [h, p, d.step],
                                ),
                                B = (0, n.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && b(a(e)),
                                            m.current && E.trigger('mouseWheel', e, F.scrollPosition, u(m.current));
                                    },
                                    [F.scrollPosition, b, E],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, n.useRef)(),
                                        a = (0, n.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        Su(() => {
                                            const e = m.current;
                                            e &&
                                                (h(i(e, F.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [h, F.scrollPosition.goal],
                                ),
                                C = Ra(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = i(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && h(u, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            return (
                                (0, n.useEffect)(
                                    () => (
                                        window.addEventListener('resize', f),
                                        () => {
                                            window.removeEventListener('resize', f);
                                        }
                                    ),
                                    [f],
                                ),
                                (0, n.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                        getContainerSize: () => (m.current ? e(m.current) : void 0),
                                        getBounds: () =>
                                            m.current
                                                ? u(m.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: d.step.clampedArrowStepTimeout,
                                        clampPosition: i,
                                        handleMouseWheel: B,
                                        applyScroll: h,
                                        applyStepTo: b,
                                        contentRef: m,
                                        wrapperRef: _,
                                        scrollPosition: D,
                                        animationScroll: F,
                                        recalculateContent: C,
                                        events: { on: E.on, off: E.off },
                                    }),
                                    [F.scrollPosition, h, b, E.off, E.on, C, B, D, d.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    Va = qa({
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
                        getDirection: (e) => (e.deltaY > 1 ? Wa.Next : Wa.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    ja = 'HorizontalBar_base__nonActive_82',
                    Xa = 'disable',
                    Ya = { pending: !1, offset: 0 },
                    Ka = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Za = () => {},
                    Qa = (e, u) => Math.max(20, e.offsetWidth * u),
                    Ja = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Ka, onDrag: a = Za }) => {
                        const r = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, n.useState)(Ya),
                            E = _[0],
                            g = _[1],
                            A = (0, n.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            F = () => {
                                const u = c.current,
                                    t = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && u && t && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / r),
                                    o = vt(0, 1, n / (r - a)),
                                    m = (u.offsetWidth - Qa(u, s)) * o;
                                (t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return i.current.classList.add(Xa), void l.current.classList.remove(Xa);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(Xa), void l.current.classList.add(Xa);
                                            var u, t;
                                            i.current.classList.remove(Xa), l.current.classList.remove(Xa);
                                        }
                                    })(m);
                            },
                            D = Ra(() => {
                                (() => {
                                    const u = d.current,
                                        t = c.current,
                                        a = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && u && a && t)) return;
                                    const s = Math.min(1, a / n);
                                    (u.style.width = `${Qa(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(ja) : r.current.classList.remove(ja));
                                })(),
                                    F();
                            });
                        (0, n.useEffect)(() => Su(D)),
                            (0, n.useEffect)(
                                () =>
                                    Su(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = Za;
                                        const a = () => {
                                            t(), (t = Su(D));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!E.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const n = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!n || !s) return;
                                        const i = c.current,
                                            o = d.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - E.offset - i.getBoundingClientRect().x,
                                            m = (l / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: m });
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        u(), A(Ya);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, E.offset, E.pending, a, A]);
                        const p = Ha((u) => e.applyStepTo(u), m, [e]),
                            h = p[0],
                            B = p[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Xa) || U('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: b()('HorizontalBar_base_49', u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: b()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Xa) || 0 !== e.button || (U('play'), h(Wa.Next));
                                },
                                onMouseUp: B,
                                ref: i,
                                onMouseEnter: f,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: b()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const a = d.current;
                                        a &&
                                            0 === u.button &&
                                            (U('play'),
                                            u.target === a
                                                ? A({ pending: !0, offset: u.screenX - a.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const a = d.current,
                                                          r = e.contentRef.current;
                                                      if (!a || !r) return;
                                                      const n = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + n * u);
                                                  })(u.screenX > a.getBoundingClientRect().x ? Wa.Prev : Wa.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                s().createElement('div', { ref: d, className: b()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: b()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: b()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Xa) || 0 !== e.button || (U('play'), h(Wa.Prev));
                                },
                                onMouseUp: B,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    er = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ur = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, n.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: b()(er.base, e.base) });
                            }, [a]),
                            m = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: b()(er.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(er.defaultScrollArea, r) },
                                s().createElement(tr, { className: o, api: m, classNames: i }, e),
                            ),
                            s().createElement(Ja, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    tr = ({ api: e, className: u, classNames: t, children: a }) => (
                        (0, n.useEffect)(() => Su(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: b()(er.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: b()(er.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: b()(er.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (tr.Bar = Ja), (tr.Default = ur);
                const ar = qa({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Wa.Next : Wa.Prev),
                    }),
                    rr = 'VerticalBar_base__nonActive_42',
                    nr = 'disable',
                    sr = () => {},
                    ir = { pending: !1, offset: 0 },
                    or = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    lr = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    cr = (e, u) => Math.max(20, e.offsetHeight * u),
                    dr = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = or, onDrag: a = sr }) => {
                        const r = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, n.useState)(ir),
                            E = _[0],
                            g = _[1],
                            A = (0, n.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            F = Ra(() => {
                                const u = d.current,
                                    t = c.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && n && u && t)) return;
                                const s = Math.min(1, a / n);
                                return (
                                    (u.style.height = `${cr(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(rr) : r.current.classList.remove(rr)),
                                    s
                                );
                            }),
                            D = Ra(() => {
                                const u = c.current,
                                    t = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && u && t && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / r),
                                    o = vt(0, 1, n / (r - a)),
                                    m = (u.offsetHeight - cr(u, s)) * o;
                                (t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(nr), void l.current.classList.remove(nr);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(nr), void l.current.classList.add(nr);
                                            var u, t;
                                            i.current.classList.remove(nr), l.current.classList.remove(nr);
                                        }
                                    })(m);
                            }),
                            p = Ra(() => {
                                lr(e, () => {
                                    F(), D();
                                });
                            });
                        (0, n.useEffect)(() => Su(p)),
                            (0, n.useEffect)(() => {
                                const u = () => {
                                    lr(e, () => {
                                        D();
                                    });
                                };
                                let t = sr;
                                const a = () => {
                                    t(), (t = Su(p));
                                };
                                return (
                                    e.events.on('recalculateContent', p),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', p),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!E.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        A(ir);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        lr(e, (t) => {
                                            const r = c.current,
                                                n = d.current,
                                                s = e.getContainerSize();
                                            if (!r || !n || !s) return;
                                            const i = u.screenY - E.offset - r.getBoundingClientRect().y,
                                                o = (i / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: n, thumbOffset: i, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, E.offset, E.pending, a, A]);
                        const h = Ha((u) => e.applyStepTo(u), m, [e]),
                            B = h[0],
                            f = h[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const C = (e) => {
                            e.target.classList.contains(nr) || U('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: b()('VerticalBar_base_f3', u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: b()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(nr) || 0 !== e.button || (U('play'), B(Wa.Next));
                                },
                                ref: i,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: b()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const a = d.current;
                                        var r;
                                        a &&
                                            0 === u.button &&
                                            (U('play'),
                                            u.target === a
                                                ? A({ pending: !0, offset: u.screenY - a.getBoundingClientRect().y })
                                                : ((r = u.screenY > a.getBoundingClientRect().y ? Wa.Prev : Wa.Next),
                                                  d.current &&
                                                      lr(e, (u) => {
                                                          if (!u) return;
                                                          const a = t(e),
                                                              n = e.clampPosition(u, u.scrollTop + a * r);
                                                          e.applyScroll(n);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: d, className: b()('VerticalBar_thumb_32', u.thumb) }),
                                s().createElement('div', { className: b()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: b()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(nr) || 0 !== e.button || (U('play'), B(Wa.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    mr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    _r = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, n.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: b()(mr.base, e.base) });
                            }, [a]),
                            m = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: b()(mr.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(mr.area, r) },
                                s().createElement(Er, { className: i, classNames: o, api: m }, e),
                            ),
                            s().createElement(dr, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Er = ({ className: e, classNames: u, children: t, api: a }) => (
                        (0, n.useEffect)(() => Su(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: b()(mr.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(mr.content, null == u ? void 0 : u.content), ref: a.contentRef },
                                t,
                            ),
                        )
                    );
                Er.Default = _r;
                const gr = { Vertical: r, Horizontal: a },
                    Ar = {
                        row: 'StatisticsInfoRow_row_6e',
                        row__subgroup: 'StatisticsInfoRow_row__subgroup_7c',
                        separator: 'StatisticsInfoRow_separator_1b',
                        description: 'StatisticsInfoRow_description_5e',
                        icon: 'StatisticsInfoRow_icon_98',
                    };
                let Fr, Dr;
                !(function (e) {
                    (e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time');
                })(Fr || (Fr = {})),
                    (function (e) {
                        (e.Shots = 'shots'),
                            (e.Hits = 'hits'),
                            (e.ExplosionHits = 'explosionHits'),
                            (e.DamageDealt = 'damageDealt'),
                            (e.SniperDamageDealt = 'sniperDamageDealt'),
                            (e.DirectHitsReceived = 'directHitsReceived'),
                            (e.PiercingsReceived = 'piercingsReceived'),
                            (e.NoDamageDirectHitsReceived = 'noDamageDirectHitsReceived'),
                            (e.ExplosionHitsReceived = 'explosionHitsReceived'),
                            (e.DamageBlockedByArmor = 'damageBlockedByArmor'),
                            (e.TeamHitsDamage = 'teamHitsDamage'),
                            (e.Spotted = 'spotted'),
                            (e.DamagedKilled = 'damagedKilled'),
                            (e.DamageAssisted = 'damageAssisted'),
                            (e.DamageAssistedSelf = 'damageAssistedSelf'),
                            (e.StunDuration = 'stunDuration'),
                            (e.DamageAssistedStun = 'damageAssistedStun'),
                            (e.DamageAssistedStunSelf = 'damageAssistedStunSelf'),
                            (e.StunNum = 'stunNum'),
                            (e.CapturePointsVal = 'capturePointsVal'),
                            (e.Mileage = 'mileage');
                    })(Dr || (Dr = {}));
                const pr = ({ label: e, value: u, paramValueType: t, isSubgroup: a = !1 }) => {
                        const r = ve(u, (e) =>
                                ((e, u) => {
                                    switch (e) {
                                        case Fr.Integer:
                                            return V.Z5.getNumberFormat(u, V.B3.INTEGRAL);
                                        case Fr.Float:
                                            return V.Z5.getRealFormat(u, V.Gr.FRACTIONAL);
                                        case Fr.Time:
                                            return V.Z5.getTimeFormat(u, V.lf.SHORT_FORMAT);
                                        default:
                                            return u;
                                    }
                                })(t, e),
                            ).join(' / '),
                            n = b()(Ar.row, a && Ar.row__subgroup);
                        return s().createElement(
                            'div',
                            { className: n },
                            e,
                            s().createElement('span', { className: Ar.separator }),
                            s().createElement('span', { className: Ar.value }, r),
                        );
                    },
                    hr = { group__last: 'StatisticsInfoGroup_group__last_7a' };
                function br() {
                    return (
                        (br =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        br.apply(this, arguments)
                    );
                }
                const Br = ({ item: e }) =>
                        s().createElement(
                            'div',
                            { className: hr.group },
                            s().createElement(pr, br({ isSubgroup: !1 }, e)),
                            e.details.length > 0 &&
                                ve(e.details, (e, u) => s().createElement(pr, br({ key: u, isSubgroup: !0 }, e))),
                        ),
                    fr = (0, K.Pi)(() => {
                        const e = Ke().model.computes.selectedPlayer();
                        return s().createElement(
                            'div',
                            { className: 'StatisticsInfoRows_base_cc' },
                            ve(e.detailedStatistics, (e, u) => s().createElement(Br, { key: u, item: e })),
                        );
                    }),
                    Cr = (0, K.Pi)(() => {
                        const e = Ke().model,
                            u = ar(),
                            t = e.computes.hasDetailedInfoScroll();
                        return s().createElement(
                            'div',
                            { className: 'StatisticsInfo_base_d9' },
                            t
                                ? s().createElement(
                                      gr.Vertical.Area.Default,
                                      { className: 'StatisticsInfo_content_e4', api: u },
                                      s().createElement(fr, null),
                                  )
                                : s().createElement(fr, null),
                        );
                    }),
                    vr = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    wr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Sr = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                let yr;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'), (e[(e.RIGHT = 1)] = 'RIGHT');
                })(yr || (yr = {}));
                const Tr = (e, u) => {
                        const t = e.replace(':', '_').replace(/-/g, '_');
                        return {
                            maskImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.team_table.types.$dyn(t)})`,
                            backgroundColor: u,
                        };
                    },
                    Rr = (0, n.memo)(
                        ({
                            vehicleLevel: e,
                            vehicleType: u,
                            vehicleShortName: t,
                            userNames: a,
                            isPersonal: r = !1,
                            isSameSquad: n = !1,
                            isIGR: i = !1,
                            alignment: o = yr.RIGHT,
                        }) => {
                            const l = a.isTeamKiller,
                                c = a.isKilled,
                                d = Wu({ isTeamKiller: l, isKilled: c, isPersonal: r, isSameSquad: n }),
                                m =
                                    ((_ = e),
                                    Sr
                                        ? `${_}`
                                        : (function (e) {
                                              let u = '';
                                              for (let t = wr.length - 1; t >= 0; t--)
                                                  for (; e >= wr[t]; ) (u += vr[t]), (e -= wr[t]);
                                              return u;
                                          })(_));
                            var _;
                            return s().createElement(
                                'div',
                                { className: 'PlayerVehicleInfo_base_f3', style: { color: d } },
                                s().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            'PlayerVehicleInfo_level_01',
                                            o === yr.LEFT && 'PlayerVehicleInfo_level__left_b9',
                                        ),
                                    },
                                    m,
                                ),
                                s().createElement('div', { className: 'PlayerVehicleInfo_type_59', style: Tr(u, d) }),
                                s().createElement('div', { className: 'PlayerVehicleInfo_vehicleName_c1' }, t),
                                i && s().createElement('div', { className: 'PlayerVehicleInfo_igr_11' }),
                            );
                        },
                    );
                function Nr() {
                    return (
                        (Nr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Nr.apply(this, arguments)
                    );
                }
                const Pr = R.images.gui.maps.icons.vehicle.c_420x307,
                    xr = (0, K.Pi)(() => {
                        const e = Ke(),
                            u = e.model,
                            t = e.controls,
                            a = u.computes.personalSquadIndex(),
                            r = u.computes.selectedPlayer(),
                            n = r.userNames,
                            i = r.squadIndex,
                            l = r.isPersonal,
                            c = r.vehicle,
                            d = n.isKilled,
                            m = c.tier,
                            _ = c.type,
                            E = c.name,
                            g = c.techName,
                            A = a === i && a > 0,
                            F = c.tags.indexOf('premiumIGR') > -1,
                            D = () => {
                                o.O.sound.play.sound('play'), t.updateTeamTableSelectedPlayer(qe, -1);
                            };
                        return (
                            X(q.n.ESCAPE, D),
                            s().createElement(
                                'div',
                                { className: 'DetailedStats_base_2d' },
                                s().createElement(
                                    'div',
                                    { className: 'DetailedStats_header_5e' },
                                    s().createElement('div', {
                                        className: 'DetailedStats_vehicleIcon_ef',
                                        style: (() => {
                                            const e = Pr.$dyn(g.toLowerCase());
                                            return e
                                                ? { backgroundImage: `url(${e})` }
                                                : { backgroundImage: `url(${Pr.default_image()})` };
                                        })(),
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: 'DetailedStats_vehicleInfo_f5' },
                                        s().createElement(
                                            'div',
                                            { className: 'DetailedStats_playerName_3c' },
                                            s().createElement(
                                                qu,
                                                Nr({}, r.userNames, {
                                                    isTeamKiller: !1,
                                                    isAnonymizerShown: !0,
                                                    isKilled: d,
                                                    isSameSquad: A,
                                                }),
                                            ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: 'DetailedStats_playerSummary_a1' },
                                            s().createElement(Rr, {
                                                vehicleLevel: m,
                                                vehicleType: _,
                                                vehicleShortName: E,
                                                userNames: n,
                                                alignment: yr.LEFT,
                                                isIGR: F,
                                                isPersonal: l,
                                            }),
                                            s().createElement(Ua, { player: r }),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: 'DetailedStats_close_53', onClick: D },
                                        s().createElement(
                                            'div',
                                            { className: 'DetailedStats_closeText_f1' },
                                            R.strings.fun_battle_results.closeBtn(),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'DetailedStats_stats_97' },
                                    s().createElement(Cr, null),
                                ),
                            )
                        );
                    }),
                    Ir = {
                        base: 'TeamTable_base_65',
                        hidden: 'TeamTable_hidden_1e',
                        head: 'TeamTable_head_11',
                        body: 'TeamTable_body_ac',
                        bodyWrapper: 'TeamTable_bodyWrapper_33',
                        bodyWrapper__shortened: 'TeamTable_bodyWrapper__shortened_9d',
                        content: 'TeamTable_content_41',
                        headRow: 'TeamTable_headRow_a4',
                        bodyRow: 'TeamTable_bodyRow_29',
                        bodyRow__isFirst: 'TeamTable_bodyRow__isFirst_cd',
                        bodyRow__isActive: 'TeamTable_bodyRow__isActive_9d',
                        bodyRow__isKilled: 'TeamTable_bodyRow__isKilled_ed',
                        cell: 'TeamTable_cell_65',
                        headCell: 'TeamTable_headCell_b7',
                        cell__icon3: 'TeamTable_cell__icon3_55',
                        headCell__icon3: 'TeamTable_headCell__icon3_3c',
                        cell__icon2: 'TeamTable_cell__icon2_38',
                        headCell__icon2: 'TeamTable_headCell__icon2_6b',
                        cell__icon1: 'TeamTable_cell__icon1_88',
                        headCell__icon1: 'TeamTable_headCell__icon1_4e',
                        cell__squad: 'TeamTable_cell__squad_6e',
                        headCell__squad: 'TeamTable_headCell__squad_a5',
                        cell__kills: 'TeamTable_cell__kills_0d',
                        cell__xp: 'TeamTable_cell__xp_f2',
                        cell__name: 'TeamTable_cell__name_59',
                        cell__vehicle: 'TeamTable_cell__vehicle_09',
                        headCell__sortDisabled: 'TeamTable_headCell__sortDisabled_bb',
                        headCell__name: 'TeamTable_headCell__name_63',
                        playerName: 'TeamTable_playerName_14',
                        headCell__vehicle: 'TeamTable_headCell__vehicle_fc',
                        name: 'TeamTable_name_8b',
                        headHover: 'TeamTable_headHover_58',
                        headCell__active: 'TeamTable_headCell__active_62',
                        headIcon: 'TeamTable_headIcon_37',
                        headIcon__damage: 'TeamTable_headIcon__damage_c7',
                        headIcon__frag: 'TeamTable_headIcon__frag_54',
                        headIcon__xp: 'TeamTable_headIcon__xp_a6',
                        headIcon__tank: 'TeamTable_headIcon__tank_6b',
                        headIcon__squad: 'TeamTable_headIcon__squad_2c',
                        headDivider: 'TeamTable_headDivider_43',
                        glow: 'TeamTable_glow_19',
                        activeArrow: 'TeamTable_activeArrow_f6',
                        activeArrow__last: 'TeamTable_activeArrow__last_e4',
                    };
                let kr;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(kr || (kr = {}));
                const Or = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: r,
                        isEnabled: s = !0,
                        onMouseDown: i,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                (0, V.c9)(V.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    H.playYes();
                            }, [r, u, t, a]),
                            l = (0, n.useCallback)(() => {
                                (0, V.c9)(V.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === kr.RIGHT)(e) && o();
                                },
                                [i, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Mr = ['children'];
                function Lr() {
                    return (
                        (Lr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Lr.apply(this, arguments)
                    );
                }
                const Ur = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Mr);
                        return s().createElement(
                            Or,
                            Lr({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    Hr = ({ squadIndex: e, currentSquadIndex: u }) =>
                        s().createElement(
                            'div',
                            {
                                className: b()(
                                    'TableRendererSquad_base_96',
                                    u === e && 'TableRendererSquad_base__highlighted_a0',
                                ),
                            },
                            e,
                        ),
                    Gr = R.images.gui.maps.icons.vehicle,
                    $r = (e, u) => {
                        const t = Gr.$dyn(((e, u) => `${e}_${u}`.replace('-', '_'))(u, e));
                        return t ? { backgroundImage: `url(${t})` } : { backgroundImage: `url(${Gr.noImage()})` };
                    },
                    Wr = ({ vehicle: e, userNames: u, isPersonal: t = !1, isSameSquad: a = !1 }) => {
                        const r = u.isKilled,
                            n = e.techName,
                            i = e.name,
                            o = e.tier,
                            l = e.type,
                            c = e.nation,
                            d = e.tags.indexOf('premiumIGR') > -1;
                        return s().createElement(
                            'div',
                            { className: 'TableRendererVehicleInfo_base_1c' },
                            s().createElement('div', {
                                className: b()(
                                    'TableRendererVehicleInfo_vehicleImage_d3',
                                    r && 'TableRendererVehicleInfo_vehicleImage__isKilled_9d',
                                ),
                                style: $r(n, c),
                            }),
                            s().createElement(Rr, {
                                vehicleLevel: o,
                                vehicleType: l,
                                vehicleShortName: i,
                                userNames: u,
                                isPersonal: t,
                                isSameSquad: a,
                                isIGR: d,
                            }),
                        );
                    },
                    zr = {
                        base: 'ActiveGlow_base_82',
                        base__active: 'ActiveGlow_base__active_ad',
                        activeGlow: 'ActiveGlow_activeGlow_a7',
                        activeGlow__left: 'ActiveGlow_activeGlow__left_34',
                        activeGlow__right: 'ActiveGlow_activeGlow__right_38',
                    },
                    qr = 'left',
                    Vr = ({ position: e = 'left', isActive: u = !1 }) =>
                        s().createElement(
                            'div',
                            { className: b()(zr.base, u && zr.base__active) },
                            s().createElement('div', { className: b()(zr.activeGlow, zr[`activeGlow__${e}`]) }),
                        );
                function jr() {
                    return (
                        (jr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        jr.apply(this, arguments)
                    );
                }
                const Xr = (0, K.Pi)(({ player: e, selected: u, alias: t, first: a = !1 }) => {
                        const r = Ke(),
                            n = r.model,
                            i = r.controls,
                            l = n.detailsColumns.get(),
                            c = n.selectedPlayerId.get(),
                            d = n.computes.personalSquadIndex(),
                            m = e.userNames,
                            _ = e.squadIndex,
                            E = e.playerIndex,
                            g = e.isPersonal,
                            A = e.databaseID,
                            F = e.vehicle.vehicleCD,
                            D = m.isKilled,
                            p = m.isTeamKiller,
                            h = d === _ && d > 0,
                            B = b()(
                                Ir.bodyRow,
                                u && Ir.bodyRow__isActive,
                                a && Ir.bodyRow__isFirst,
                                D && Ir.bodyRow__isKilled,
                            ),
                            f = Wu({ isTeamKiller: p, isKilled: D, isPersonal: g, isSameSquad: h }),
                            C = b()(Ir.cell, Ir[`cell__icon${0 === l.length ? 3 : l.length}`]),
                            v = ye(l, (e) => e === Fe.Xp),
                            w = ye(l, (e) => e === Fe.Damage),
                            S = ye(l, (e) => e === Fe.Frag);
                        return s().createElement(
                            Ur,
                            { args: { databaseID: A, vehicleCD: F } },
                            s().createElement(
                                'div',
                                {
                                    className: B,
                                    style: { color: f },
                                    onClick: () => {
                                        o.O.sound.play.sound('yes1');
                                        const e = c === E;
                                        i.updateTeamTableSelectedPlayer(e ? qe : t, e ? -1 : E);
                                    },
                                    onMouseEnter: () => o.O.sound.play.sound('highlight'),
                                },
                                s().createElement(
                                    'div',
                                    { className: b()(Ir.cell, Ir.cell__squad) },
                                    e.squadIndex > 0 &&
                                        s().createElement(Hr, { squadIndex: e.squadIndex, currentSquadIndex: d }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: b()(Ir.cell, Ir.cell__name) },
                                    s().createElement(
                                        'div',
                                        { className: b()(Ir.name, Ir.name) },
                                        s().createElement(
                                            qu,
                                            jr({}, m, { isAnonymizerShown: g, isPersonal: g, isSameSquad: h }),
                                        ),
                                    ),
                                ),
                                void 0 !== w &&
                                    s().createElement(
                                        'div',
                                        { className: C },
                                        s().createElement(
                                            'div',
                                            { className: Ir.value },
                                            e.efficiencyValues.damageDealt,
                                        ),
                                    ),
                                void 0 !== S &&
                                    s().createElement(
                                        'div',
                                        { className: b()(C, Ir.cell__kills) },
                                        s().createElement('div', { className: Ir.value }, e.efficiencyValues.kills),
                                    ),
                                void 0 !== v &&
                                    s().createElement(
                                        'div',
                                        { className: b()(C, Ir.cell__xp) },
                                        s().createElement('div', { className: Ir.value }, e.efficiencyValues.earnedXp),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: b()(Ir.cell, Ir.cell__vehicle) },
                                    s().createElement(Wr, jr({}, e, { isSameSquad: h })),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Ir.glow },
                                    s().createElement(Vr, { position: t === ze ? 'right' : qr, isActive: u }),
                                ),
                            ),
                        );
                    }),
                    Yr = (0, K.Pi)(({ alias: e, shortened: u = !1 }) => {
                        const t = Ke().model,
                            a = t.selectedPlayerId.get(),
                            r = t.selectedTeam.get() === e,
                            n = e === ze ? t.computes.alliesSorted() : t.computes.enemiesSorted();
                        return s().createElement(
                            'div',
                            { className: Ir.body },
                            s().createElement(
                                'div',
                                { className: b()(Ir.bodyWrapper, u && Ir.bodyWrapper__shortened) },
                                ve(n, (u, t) =>
                                    s().createElement(Xr, {
                                        key: t,
                                        player: u,
                                        selected: r && a === u.playerIndex,
                                        alias: e,
                                        isFirst: 0 === t,
                                    }),
                                ),
                            ),
                        );
                    }),
                    Kr = (0, K.Pi)(({ alias: e }) => {
                        const u = Ke().model,
                            t = (e === ze ? u.allies.get().length : u.enemies.get().length) > 15,
                            a = ar();
                        return s().createElement(
                            'div',
                            { className: Ir.body },
                            t
                                ? s().createElement(
                                      gr.Vertical.Area.Default,
                                      { className: Ir.content, api: a },
                                      s().createElement(Yr, { alias: e }),
                                  )
                                : s().createElement(Yr, { alias: e, shortened: !0 }),
                        );
                    }),
                    Zr = {
                        base: 'ActiveArrow_base_5b',
                        line: 'ActiveArrow_line_22',
                        arrow: 'ActiveArrow_arrow_80',
                        arrow__top: 'ActiveArrow_arrow__top_54',
                    },
                    Qr = (0, n.memo)(({ direction: e }) =>
                        s().createElement(
                            'div',
                            { className: Zr.base },
                            s().createElement('div', { className: Zr.line }),
                            s().createElement('div', { className: b()(Zr.arrow, Zr[`arrow__${e}`]) }),
                            s().createElement('div', { className: Zr.line }),
                        ),
                    ),
                    Jr = ({
                        style: e,
                        children: u,
                        onSort: t,
                        sortType: a,
                        tooltip: r,
                        reversed: n = !1,
                        active: i = !1,
                        last: l = !1,
                        sortDisabled: c = !1,
                    }) =>
                        s().createElement(
                            wu,
                            r,
                            s().createElement(
                                'div',
                                {
                                    className: b()(
                                        Ir.headCell,
                                        e,
                                        i && Ir.headCell__active,
                                        n && Ir.headCell__reverse,
                                        c && Ir.headCell__sortDisabled,
                                    ),
                                    onClick: () => {
                                        c || (o.O.sound.play.sound('play'), t(a));
                                    },
                                    onMouseEnter: () => o.O.sound.play.sound('highlight'),
                                },
                                u,
                                i &&
                                    s().createElement(
                                        'div',
                                        { className: b()(Ir.activeArrow, l && Ir.activeArrow__last) },
                                        s().createElement(Qr, { direction: n ? 'top' : 'bottom' }),
                                    ),
                            ),
                        ),
                    en = R.strings.battle_results.team,
                    un = (e) => {
                        const u = en.$dyn(Re[e]);
                        return {
                            header: null == u ? void 0 : u.$dyn('header'),
                            body: null == u ? void 0 : u.$dyn('body'),
                        };
                    },
                    tn = (0, K.Pi)(({ isAllies: e = !0, onSort: u }) => {
                        const t = Ke().model,
                            a = t.detailsColumns.get(),
                            r = t.sortDirection.get(),
                            n = t.computes.activeSortingType(),
                            i = t.computes.hasSquads(),
                            o = r === De.Asc;
                        return s().createElement(
                            'div',
                            { className: Ir.head },
                            s().createElement(
                                'div',
                                { className: Ir.headRow },
                                Object.values(Fe).map((t, r, l) => {
                                    const c = Ne.findIndex((e) => e === t),
                                        d = ye(a, (e) => e === t);
                                    if (-1 === c && (-1 === d || void 0 === d)) return;
                                    const m = t === Fe.Player,
                                        _ = m
                                            ? Ir.headCell__name
                                            : ((e, u) => {
                                                  switch (e) {
                                                      case Fe.Vehicle:
                                                          return Ir.headCell__vehicle;
                                                      case Fe.Squad:
                                                          return Ir.headCell__squad;
                                                      default:
                                                          return Ir[`headCell__icon${u}`];
                                                  }
                                              })(t, 0 === a.length ? 3 : a.length);
                                    return s().createElement(
                                        Jr,
                                        {
                                            key: t,
                                            style: _,
                                            active: n === t,
                                            reversed: o,
                                            last: r === l.length - 1,
                                            sortType: t,
                                            onSort: u,
                                            tooltip: un(t),
                                            sortDisabled: t === Fe.Squad && !i,
                                        },
                                        m
                                            ? s().createElement(
                                                  'span',
                                                  { className: Ir.playerName },
                                                  en.stats.$dyn(e ? 'ownTeam' : 'enemyTeam'),
                                              )
                                            : s().createElement('div', {
                                                  className: b()(Ir.headIcon, Ir[`headIcon__${t}`]),
                                              }),
                                        s().createElement('div', { className: Ir.headHover }),
                                        r < l.length - 1 && s().createElement('div', { className: Ir.headDivider }),
                                    );
                                }),
                            ),
                        );
                    }),
                    an = (0, K.Pi)(({ onSort: e, alias: u = 'allies' }) => {
                        const t = Ke().model.selectedTeam.get(),
                            a = t !== qe && u !== t;
                        return s().createElement(
                            'div',
                            { className: a ? Ir.hidden : '' },
                            s().createElement(
                                'div',
                                { className: Ir.base },
                                s().createElement(tn, { isAllies: u === ze, onSort: e }),
                                s().createElement(Kr, { alias: u }),
                            ),
                        );
                    }),
                    rn = (0, K.Pi)(() => {
                        const e = Ke(),
                            u = e.model,
                            t = e.controls,
                            a = u.sortDirection.get(),
                            r = u.computes.activeSortingType(),
                            i = u.selectedTeam.get(),
                            o = i !== qe,
                            l = i === ze && u.allies.get().length <= 15,
                            c = (0, n.useCallback)(
                                (e) => {
                                    if (e === r) {
                                        const e = a === De.Desc ? De.Asc : De.Desc;
                                        t.saveStatsSorting(r, e), t.updateTeamTableSorting(r, e);
                                    } else t.saveStatsSorting(e, De.Desc), t.updateTeamTableSorting(e, De.Desc);
                                },
                                [a, r, t],
                            );
                        return s().createElement(
                            'div',
                            { className: 'TeamTab_base_d1' },
                            s().createElement(
                                'div',
                                { className: 'TeamTab_teams_3c' },
                                s().createElement(an, { alias: ze, onSort: c }),
                                o &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: b()(
                                                'TeamTab_detailsWrapper_83',
                                                l && 'TeamTab_detailsWrapper__extra_4a',
                                            ),
                                        },
                                        s().createElement(xr, null),
                                    ),
                                s().createElement(an, { alias: 'enemies', onSort: c }),
                            ),
                        );
                    }),
                    nn = (0, K.Pi)(() => {
                        const e = Ke(),
                            u = e.model,
                            t = e.controls,
                            a = t.closeWindow,
                            r = u.battleInfo.get(),
                            n = r.assetsPointer,
                            i = r.winStatus,
                            l = u.currentTabId.get();
                        return (
                            Y(a),
                            s().createElement(
                                'div',
                                { className: Ze.base },
                                s().createElement('div', {
                                    className: b()(Ze.background, l === je && Ze.background__team),
                                    style: { backgroundImage: `url('${J(n).library.battle_results_bg()}')` },
                                }),
                                s().createElement('div', {
                                    className: b()(Ze.bgDarken, l !== je && Ze.bgDarken__personal),
                                }),
                                l === je && s().createElement('div', { className: b()(Ze.bgGlow, Ze[`bgGlow__${i}`]) }),
                                s().createElement(
                                    'div',
                                    { className: Ze.closeButton },
                                    s().createElement(z, {
                                        caption: R.strings.fun_battle_results.closeBtn(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: a,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Ze.wrapper },
                                    s().createElement(
                                        'div',
                                        { className: Ze.content },
                                        s().createElement(
                                            Oa,
                                            {
                                                active: l,
                                                onActiveChange: (e) => {
                                                    o.O.sound.play.sound('yes1'),
                                                        t.updateCurrentTabId(e),
                                                        t.changeTab(Number(e));
                                                },
                                            },
                                            s().createElement(
                                                'div',
                                                { className: Ze.navigation },
                                                s().createElement(
                                                    Oa.Switcher,
                                                    null,
                                                    s().createElement(
                                                        Oa.Switch,
                                                        { tabId: Ve },
                                                        s().createElement(
                                                            'div',
                                                            { className: Ze.navigationItem },
                                                            R.strings.fun_battle_results.navigation.battleResults(),
                                                        ),
                                                    ),
                                                    s().createElement('div', { className: Ze.navigationSeparator }),
                                                    s().createElement(
                                                        Oa.Switch,
                                                        { tabId: je },
                                                        s().createElement(
                                                            'div',
                                                            { className: Ze.navigationItem },
                                                            R.strings.fun_battle_results.navigation.teamEfficiency(),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            s().createElement(Oa.Content, null, (e) => {
                                                switch (e) {
                                                    case Ve:
                                                        return s().createElement(ya, null);
                                                    case je:
                                                        return s().createElement(rn, null);
                                                    default:
                                                        return console.error('Unreachable branch in tabs'), null;
                                                }
                                            }),
                                        ),
                                    ),
                                    s().createElement('div', { className: Ze.footer }, s().createElement(Ku, null)),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    L().render(
                        s().createElement(Ye, null, s().createElement(O, null, s().createElement(nn, null))),
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], n = !0, s = 0; s < u.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, a];
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
        (__webpack_require__.j = 388),
        (() => {
            var e = { 388: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, s, i] = t,
                        o = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < n.length; o++)
                        (r = n[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(6145));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
