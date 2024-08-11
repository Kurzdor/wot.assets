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
            527: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, { mouse: () => c, off: () => l, on: () => s, onResize: () => r, onScaleUpdated: () => i });
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${t}`,
                                        i = o[t]((e) => u([e, 'outside']));
                                    function s(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
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
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = u(527),
                    a = u(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2493: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => a, G: () => n });
            },
            2472: (e, t, u) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => r });
                var n = u(5959),
                    a = u(514);
                const r = { view: u(7641), client: n, sound: a.ZP };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => i });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => a });
                var n = u(2472);
                const a = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => C,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => D,
                        getScale: () => f,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => b,
                        isFocused: () => F,
                        pxToRem: () => h,
                        remToPx: () => A,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => k,
                    });
                var n = u(3722),
                    a = u(6112),
                    r = u(6538),
                    i = u(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function o(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: A(t.x), y: A(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function f() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function A(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function F() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function D() {
                    return viewEnv.getShowingStatus();
                }
                const C = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => o });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    s = 64,
                    l = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
                                          arguments:
                                              ((a = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    o = {
                        close(e) {
                            l('popover' === e ? a : i);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, u) => {
                'use strict';
                let n, a;
                u.d(t, { n: () => n }),
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
                    })(a || (a = {}));
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(3138);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, u, a);
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
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
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
            9916: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => r.Z, B3: () => l, Z5: () => i.Z5, B0: () => s, ry: () => h });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const u = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                const a = n;
                var r = u(1358);
                var i = u(8613);
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(5521),
                    _ = u(3138);
                const E = ['args'];
                function g(e, t, u, n, a, r, i) {
                    try {
                        var s = e[r](i),
                            l = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(n, a);
                }
                const f = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(t, u);
                                        function i(e) {
                                            g(r, n, a, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(r, n, a, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    A = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
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
                        var n;
                    },
                    p = () => A(s.CLOSE),
                    F = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var v = u(7572);
                const b = a.instance,
                    B = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: o,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: f,
                        sendMoveEvent: (e) => A(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => A(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            A(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), r) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                l = u.getBoundingClientRect(),
                                o = l.x,
                                c = l.y,
                                d = l.width,
                                m = l.height,
                                E = {
                                    x: _.O.view.pxToRem(o) + i.x,
                                    y: _.O.view.pxToRem(c) + i.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            A(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: f(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => F(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            F(e, p);
                        },
                        handleViewEvent: A,
                        onBindingsReady: h,
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
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < a.length; t++) u[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = B;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            6541: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => Ma,
                        Bar: () => Na,
                        DefaultScroll: () => Oa,
                        Direction: () => ha,
                        defaultSettings: () => Aa,
                        useHorizontalScrollApi: () => Fa,
                    });
                var a = {};
                u.r(a), u.d(a, { Area: () => er, Bar: () => Za, Default: () => Qa, useVerticalScrollApi: () => Ia });
                var r = u(6179),
                    i = u.n(r);
                const s = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var l = u(3138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, t, u) {
                    const n = (function (e, t) {
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
                        a = (function (e, t) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: a === u.extraLarge.weight,
                        largeHeight: a === u.large.weight,
                        mediumHeight: a === u.medium.weight,
                        smallHeight: a === u.small.weight,
                        extraSmallHeight: a === u.extraSmall.weight,
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
                const m = l.O.client.getSize('rem'),
                    _ = m.width,
                    E = m.height,
                    g = Object.assign({ width: _, height: E }, d(_, E, o)),
                    f = (0, r.createContext)(g),
                    h = ['children'];
                const A = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, h);
                    const n = (0, r.useContext)(f),
                        a = n.extraLarge,
                        i = n.large,
                        l = n.medium,
                        o = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        m = n.largeWidth,
                        _ = n.mediumWidth,
                        E = n.smallWidth,
                        g = n.extraSmallWidth,
                        A = n.extraLargeHeight,
                        p = n.largeHeight,
                        F = n.mediumHeight,
                        v = n.smallHeight,
                        b = n.extraSmallHeight,
                        B = { extraLarge: A, large: p, medium: F, small: v, extraSmall: b };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && a) return t;
                        if (u.large && i) return t;
                        if (u.medium && l) return t;
                        if (u.small && o) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && d) return s(t, u, B);
                        if (u.largeWidth && m) return s(t, u, B);
                        if (u.mediumWidth && _) return s(t, u, B);
                        if (u.smallWidth && E) return s(t, u, B);
                        if (u.extraSmallWidth && g) return s(t, u, B);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && A) return t;
                            if (u.largeHeight && p) return t;
                            if (u.mediumHeight && F) return t;
                            if (u.smallHeight && v) return t;
                            if (u.extraSmallHeight && b) return t;
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
                (0, r.memo)(A);
                const p = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    F = ({ children: e }) => {
                        const t = (0, r.useContext)(f),
                            u = (0, r.useState)(t),
                            n = u[0],
                            a = u[1],
                            s = (0, r.useCallback)((e, t) => {
                                const u = l.O.view.pxToRem(e),
                                    n = l.O.view.pxToRem(t);
                                a(Object.assign({ width: u, height: n }, d(u, n, o)));
                            }, []),
                            c = (0, r.useCallback)(() => {
                                const e = l.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        p(() => {
                            l.O.client.events.on('clientResized', s), l.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    l.O.client.events.off('clientResized', s),
                                        l.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [s, c],
                            );
                        const m = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return i().createElement(f.Provider, { value: m }, e);
                    };
                var v = u(6483),
                    b = u.n(v),
                    B = u(926),
                    D = u.n(B);
                let C, w, k;
                !(function (e) {
                    (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(C || (C = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(k || (k = {}));
                const y = () => {
                        const e = (0, r.useContext)(f),
                            t = e.width,
                            u = e.height,
                            n = ((e) => {
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
                            a = ((e) => {
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
                                        return k.ExtraLarge;
                                    case e.largeHeight:
                                        return k.Large;
                                    case e.mediumHeight:
                                        return k.Medium;
                                    case e.smallHeight:
                                        return k.Small;
                                    case e.extraSmallHeight:
                                        return k.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), k.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: i, remScreenWidth: t, remScreenHeight: u };
                    },
                    S = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const L = {
                        [w.ExtraSmall]: '',
                        [w.Small]: D().SMALL_WIDTH,
                        [w.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [w.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [k.ExtraSmall]: '',
                        [k.Small]: D().SMALL_HEIGHT,
                        [k.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [k.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [k.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [C.ExtraSmall]: '',
                        [C.Small]: D().SMALL,
                        [C.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [C.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [C.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    O = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, S);
                        const a = y(),
                            r = a.mediaWidth,
                            s = a.mediaHeight,
                            l = a.mediaSize;
                        return i().createElement('div', x({ className: b()(u, L[r], T[s], N[l]) }, n), t);
                    },
                    M = ['children'];
                const I = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, M);
                    return i().createElement(F, null, i().createElement(O, u, t));
                };
                var P = u(493),
                    W = u.n(P),
                    H = u(5521),
                    j = u(9916);
                const z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function $(e = H.n.NONE, t = z, u = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== H.n.NONE)
                            return (
                                window.addEventListener('keydown', a, u),
                                () => {
                                    window.removeEventListener('keydown', a, u);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && l.O.view.isEventHandled()) return;
                                l.O.view.setEventHandled(), t(a), u && a.stopPropagation();
                            }
                        }
                    }, [t, e, u, n]);
                }
                var G = u(3403);
                const U = [
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
                function V(e) {
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
                const q = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: j.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    Y = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            n = e.args,
                            a = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            o = e.ignoreShowDelay,
                            c = void 0 !== o && o,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            g = e.isEnabled,
                            f = void 0 === g || g,
                            h = e.targetId,
                            A = void 0 === h ? 0 : h,
                            p = e.onShow,
                            F = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, U);
                        const b = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, r.useMemo)(
                                () =>
                                    A ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            n = R.invalid('resId');
                                        return (
                                            t &&
                                                ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (n = window.subViews[u].id)),
                                            { caller: u, stack: t, resId: n }
                                        );
                                    })().resId,
                                [A],
                            ),
                            D = (0, r.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (q(u, E, { isMouseEvent: !0, on: !0, arguments: V(n) }, B),
                                    p && p(),
                                    (b.current.isVisible = !0));
                            }, [u, E, n, B, p]),
                            C = (0, r.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        q(u, E, { on: !1 }, B),
                                        b.current.isVisible && F && F(),
                                        (b.current.isVisible = !1);
                                }
                            }, [u, E, B, F]),
                            w = (0, r.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(b.current.prevTarget) && C();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = b.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === f && C();
                            }, [f, C]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', C),
                                    () => {
                                        window.removeEventListener('mouseleave', C), C();
                                    }
                                ),
                                [C],
                            );
                        return f
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((b.current.timeoutId = window.setTimeout(D, c ? 100 : 400)),
                                                      a && a(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              C(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && C(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && C(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : t;
                        var k;
                    },
                    K = ['children'];
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                const Z = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, K);
                        return i().createElement(
                            Y,
                            X(
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
                    J = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Q() {
                    return (
                        (Q =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Q.apply(this, arguments)
                    );
                }
                const ee = R.views.common.tooltip_window.simple_tooltip_content,
                    te = (e) => {
                        let t = e.children,
                            u = e.body,
                            n = e.header,
                            a = e.note,
                            s = e.alert,
                            l = e.args,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, J);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, l, { body: u, header: n, note: a, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, u, n, a, l]);
                        return i().createElement(
                            Y,
                            Q(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? ee.SimpleTooltipHtmlContent('resId') : ee.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                o,
                            ),
                            t,
                        );
                        var d;
                    };
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                const ne = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = i().createElement('div', { className: u }, e);
                    if (t.header || t.body) return i().createElement(te, t, n);
                    const a = t.contentId;
                    return a ? i().createElement(Y, ue({}, t, { contentId: a }), n) : i().createElement(Z, t, n);
                };
                var ae = u(8045);
                const re = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
                u(1281);
                let ie;
                function se(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function le(e) {
                    return e.replace(/-/g, '_');
                }
                function oe(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(ie || (ie = {}));
                const ce = (e) => e.replace(/&nbsp;/g, ' '),
                    de =
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
                        (e) => se(R.strings.common.percentValue(), { value: e }));
                let me, _e, Ee;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(me || (me = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(_e || (_e = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Ee || (Ee = {}));
                const ge = { [Ee.NBSP]: me.NoBreakSymbol, [Ee.ZWNBSP]: me.NoBreakSymbol, [Ee.NEW_LINE]: me.LineBreak },
                    fe = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    he = {
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
                    Ae = 'renderers_noBreakWrapper_10',
                    pe = 'renderers_lineBreak_b5',
                    Fe = 'renderers_newLine_bd',
                    ve = 'renderers_word_f3',
                    be = (e) => ({ color: `#${e}` }),
                    Be = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? he[n]
                                ? i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: b()(ve, he[n]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: ve, style: be(n) },
                                      e,
                                  )
                            : i().createElement('span', { key: u, 'data-block-type': t.blockType, className: ve }, e);
                    },
                    De = {
                        [me.Word]: Be,
                        [me.NoBreakSymbol]: Be,
                        [me.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: u }, e)),
                            ),
                        [me.LineBreak]: ({ key: e }) =>
                            i().createElement('span', { key: e, 'data-block-type': me.LineBreak, className: pe }),
                        [me.NewLine]: ({ elementList: e, key: t }) =>
                            i().createElement('span', { key: t, 'data-block-type': me.NewLine, className: Fe }, e),
                        [me.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': me.NoBreakWrapper, className: Ae },
                                e,
                            ),
                    },
                    Ce = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const i = `${u}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        t = e.blockType,
                                        u = Ce(e, De[t], i);
                                    n.push(...u);
                                } else n.push(t({ elementList: [a], textBlock: e, key: i }));
                            }),
                            n
                        );
                    },
                    we = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            n = e.blockType,
                                            a = De[n],
                                            r = Ce(e, a, t);
                                        return (
                                            n === me.NoBreakWrapper
                                                ? u.push(a({ elementList: r, textBlock: e, key: `${t}` }))
                                                : u.push(...r),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    },
                    ke = (e, t, u, n) => {
                        let a = t.exec(e),
                            r = 0;
                        for (; a; ) r !== a.index && u(e.slice(r, a.index)), n(a), (r = t.lastIndex), (a = t.exec(e));
                        r !== e.length && u(e.slice(r));
                    },
                    ye = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    Se = (e) => {
                        const t = [];
                        return (
                            ke(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var u;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((u = e), u.match(ye) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    xe = fe
                        ? (e) => {
                              const t = [];
                              return (
                                  ke(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...Se(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const u = /[\s\u002d]/g;
                              let n = u.exec(e);
                              if (!n) return [e];
                              const a = [];
                              let r = 0;
                              for (; n; ) {
                                  const i = t.justifyContent === _e.FlexEnd ? n.index : u.lastIndex;
                                  a.push(e.slice(r, i)), (r = i), (n = u.exec(e));
                              }
                              return r !== e.length && a.push(e.slice(r)), a;
                          },
                    Le = (e, t = '', u) => {
                        const n = [];
                        return (
                            ke(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: me.Word, colorTag: t, childList: xe(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        a = ge[u.charAt(0)];
                                    a === me.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: me.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: me.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(u),
                                          )
                                        : n.push({ blockType: a, colorTag: t, childList: [u] });
                                },
                            ),
                            n
                        );
                    },
                    Te = (e, t, u = '', n) => {
                        const a = [];
                        return (
                            ke(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...Le(e, u, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        i = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof i || 'number' == typeof i
                                        ? a.push(...Le(String(i), u, n))
                                        : a.push({ blockType: me.Binding, colorTag: u, childList: [i] });
                                },
                            ),
                            a
                        );
                    },
                    Ne = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === me.NoBreakWrapper) e.childList.push(n), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: me.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    Re = (e, t = {}, u) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === me.NoBreakSymbol
                                        ? ((u = !0), t.push(...Ne(t.pop(), e)))
                                        : (u ? t.push(...Ne(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    ke(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...Te(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...Te(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })(ce(e).replace(/&zwnbsp;/g, '\ufeff'), t, u),
                        );
                        return we(n);
                    },
                    Oe = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Me = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Ie = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = Me(e, t),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            i = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / r);
                            return n >= u ? [!0, u + i] : [!1, n];
                        }
                        const s = Math.max(u + i, 0);
                        return a < s ? [!1, 0] : [!0, s];
                    },
                    Pe = (e, t, u, n, a, r) => {
                        let s = -1,
                            l = null;
                        for (let o = u; o >= 0; o--) {
                            const u = e[o],
                                c = Number(e[o].getAttribute('data-block-type'));
                            if (c === me.LineBreak || c === me.NewLine || c === me.Binding) continue;
                            const d = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = Ie(u, n, a),
                                    c = e[0],
                                    m = e[1];
                                if (!c) {
                                    m > 0 && (a -= m);
                                    continue;
                                }
                                const _ = d.slice(0, d.length - m) + r,
                                    E = t[o];
                                (l = i().cloneElement(E, E.props, _)), (s = o);
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[o],
                                    m = c.props.children,
                                    _ = Pe(e, m, e.length - 1, n, a, r),
                                    E = _[0],
                                    g = _[1];
                                if (!(E < 0)) {
                                    const e = m.slice(0, E);
                                    (l = i().cloneElement(c, c.props, e, g)), (s = o);
                                    break;
                                }
                                a -= d.length;
                            }
                        }
                        return [s, l];
                    },
                    We = (e, t, u, n = '...') => {
                        const a = [...t],
                            r = e.current;
                        if (!r) return [a, !1];
                        const i = u.height,
                            s = u.width,
                            l = r.lastElementChild;
                        if (!Oe(l, i) && Me(l, s) <= 0) return [a, !1];
                        const o = r.children,
                            c = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const a = u + Math.ceil(0.5 * (n - u));
                                    Oe(e[a], t) ? (n = a - 1) : (u = a + 1);
                                }
                                return u - 1;
                            })(o, i);
                        if (c < 0) return [a, !1];
                        const d = Pe(o, a, c, s, n.length, n),
                            m = d[0],
                            _ = d[1];
                        return _ && (a.splice(m, 1, _), a.splice(m + 1)), [a, !0];
                    },
                    He = i().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: n,
                            isTooltipEnable: a = !1,
                            isTruncationAvailable: s = !1,
                            customTooltipArgs: l,
                            targetId: o,
                            justifyContent: c = _e.FlexStart,
                            alignContent: d = _e.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const _ = (0, r.useRef)(null),
                                E = (0, r.useRef)({ height: 0, width: 0 }),
                                g = (0, r.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                f = g[0],
                                h = g[1],
                                A = (0, r.useMemo)(() => Re(e, n, { justifyContent: c }), [n, c, e]),
                                p = (0, r.useMemo)(() => {
                                    if (
                                        a &&
                                        f.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, l, {
                                                stringifyKwargs: n ? JSON.stringify(n) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [n, a, o, e, l, f.isTruncated]),
                                F = (0, r.useCallback)(
                                    (e) => {
                                        (E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height);
                                        const t = We(_, A, E.current, m),
                                            n = t[0],
                                            a = t[1];
                                        h({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), u && u(a);
                                    },
                                    [u, m, A],
                                ),
                                v = (0, r.useMemo)(() => ({ justifyContent: c, alignContent: d }), [d, c]);
                            return (
                                ((e, t, u = !0) => {
                                    const n = (0, r.useCallback)(
                                        (e) => {
                                            const u = e[0];
                                            t && t(u);
                                        },
                                        [t],
                                    );
                                    (0, r.useEffect)(() => {
                                        if (!e.current || !u) return;
                                        const t = new ae.Z((e) => n(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [n, u, e]);
                                })(_, F, s),
                                i().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            re.base,
                                            t,
                                            re.base__zeroPadding,
                                            s && re.base__isTruncationAvailable,
                                        ),
                                        style: v,
                                    },
                                    i().createElement('div', { className: re.unTruncated, ref: _ }, A),
                                    i().createElement(
                                        ne,
                                        {
                                            tooltipArgs: p,
                                            className: b()(
                                                re.tooltip,
                                                re[`tooltip__justify-${c}`],
                                                re[`tooltip__align-${d}`],
                                            ),
                                        },
                                        i().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    re.truncated,
                                                    !f.isTruncateFinished && s && re.truncated__hide,
                                                ),
                                                style: v,
                                            },
                                            f.isTruncateFinished && s ? f.elementList : A,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    je = {
                        base: 'ListHeader_base_ad',
                        title: 'ListHeader_title_a8',
                        base__memberChange: 'ListHeader_base__memberChange_c2',
                        base__tankChange: 'ListHeader_base__tankChange_fb',
                        base__personalData: 'ListHeader_base__personalData_aa',
                    };
                let ze;
                !(function (e) {
                    (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(ze || (ze = {}));
                const $e = ({ title: e, theme: t = ze.Barracks, className: u, children: n }) =>
                    i().createElement(
                        'div',
                        { className: b()(je.base, je[`base__${t}`], u) },
                        i().createElement('div', { className: je.title }, e),
                        n,
                    );
                function Ge(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const Ue = {
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
                    Ve = [
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
                function qe() {
                    return (
                        (qe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        qe.apply(this, arguments)
                    );
                }
                class Ye extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Ge(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Ge(this.props.soundClick);
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
                            n = e.goto,
                            a = e.side,
                            r = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            o = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, Ve)),
                            _ = b()(Ue.base, Ue[`base__${r}`], Ue[`base__${a}`], null == s ? void 0 : s.base),
                            E = b()(Ue.icon, Ue[`icon__${r}`], Ue[`icon__${a}`], null == s ? void 0 : s.icon),
                            g = b()(Ue.glow, null == s ? void 0 : s.glow),
                            f = b()(Ue.caption, Ue[`caption__${r}`], null == s ? void 0 : s.caption),
                            h = b()(Ue.goto, null == s ? void 0 : s.goto);
                        return i().createElement(
                            'div',
                            qe(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(o),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                m,
                            ),
                            'info' !== r && i().createElement('div', { className: Ue.shine }),
                            i().createElement('div', { className: E }, i().createElement('div', { className: g })),
                            i().createElement('div', { className: f }, t),
                            n && i().createElement('div', { className: h }, n),
                        );
                    }
                }
                Ye.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Ke = ({ onClick: e }) =>
                        i().createElement(Ye, {
                            onClick: e,
                            caption: R.strings.crew.common.navigation.aboutCrew(),
                            type: 'info',
                        }),
                    Xe = 'common_close_0e',
                    Ze = ({ onClick: e, label: t = R.strings.menu.viewHeader.closeBtn.label() }) =>
                        i().createElement(Ye, {
                            onClick: e,
                            classNames: { base: Xe },
                            caption: t,
                            type: 'close',
                            side: 'right',
                        }),
                    Je = 'TopButtons_base_ef',
                    Qe = 'TopButtons_leftButtons_9e',
                    et = 'TopButtons_rightButtons_33',
                    tt = i().memo(function ({
                        backButtonLabel: e,
                        closeButtonLabel: t = R.strings.menu.viewHeader.closeBtn.label(),
                        onBackClick: u,
                        onAboutClick: n,
                        onCloseClick: a,
                        className: r,
                        classNames: s,
                    }) {
                        return i().createElement(
                            'div',
                            { className: b()(Je, r) },
                            e &&
                                u &&
                                i().createElement(
                                    'div',
                                    { className: b()(Qe, null == s ? void 0 : s.leftButtons) },
                                    i().createElement(Ye, { onClick: u, caption: e, type: 'back' }),
                                ),
                            i().createElement(
                                'div',
                                { className: b()(et, null == s ? void 0 : s.rightButtons) },
                                n && i().createElement(Ke, { onClick: n }),
                                a && i().createElement(Ze, { onClick: a, label: t }),
                            ),
                        );
                    });
                function ut() {
                    return !1;
                }
                console.log;
                var nt = u(9174);
                function at(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return rt(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return rt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function rt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const it = (e) => (0 === e ? window : window.subViews.get(e));
                function st(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                function lt(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function ot(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function ct(e) {
                    if (0 !== e.length) return st(e, e.length - 1);
                }
                var dt = u(3946);
                const mt = ((e, t) => {
                        const u = (0, r.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: a, children: s, mocks: o }) {
                                const c = (0, r.useRef)([]),
                                    d = (u, n, a) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = it,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = a.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const a = u(t),
                                                        r = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const s = 'string' == typeof r ? `${n}.${r}` : n,
                                                            o = l.O.view.addModelObserver(s, t, !0);
                                                        return a.set(o, u), e && u(i(r)), o;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const u = i(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = at(a.keys()); !(e = u()).done; ) r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            s =
                                                'real' === u
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === u ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            m = e({
                                                mode: u,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : o(e),
                                                            a = nt.LO.box(n, { equals: ut });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, nt.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : o(e),
                                                            a = nt.LO.box(n, { equals: ut });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, nt.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = o(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = nt.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, nt.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                i = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = nt.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, nt.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                i[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            _ = { mode: u, model: m, externalModel: s, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === u && a ? a.controls(_) : t(_),
                                            externalModel: s,
                                            mode: u,
                                        };
                                    },
                                    m = (0, r.useRef)(!1),
                                    _ = (0, r.useState)(n),
                                    E = _[0],
                                    g = _[1],
                                    f = (0, r.useState)(() => d(n, a, o)),
                                    h = f[0],
                                    A = f[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        m.current ? A(d(E, a, o)) : (m.current = !0);
                                    }, [o, E, a]),
                                    (0, r.useEffect)(() => {
                                        g(n);
                                    }, [n]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [h],
                                    ),
                                    i().createElement(u.Provider, { value: h }, s)
                                );
                            },
                            () => (0, r.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = e.primitives(['itemsAmount', 'itemsOffset']),
                                u = e.array('tankmanList'),
                                n = (0, dt.Om)((e) => {
                                    const n = e - t.itemsOffset.get(),
                                        a = u.get();
                                    if (n >= 0 && n < a.length) return st(a, n);
                                });
                            return Object.assign({ tankmanList: u }, t, { computes: { getTankman: n } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            confirm: e.createCallbackNoArgs('onConfirm'),
                            loadCards: e.createCallback((e, t) => ({ limit: e, offset: t }), 'onLoadCards'),
                        }),
                    ),
                    _t = mt[0],
                    Et = mt[1],
                    gt = {
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
                let ft, ht;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ft || (ft = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(ht || (ht = {}));
                const At = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: a,
                    mixClass: s,
                    soundHover: l,
                    soundClick: o,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const f = (0, r.useRef)(null),
                        h = (0, r.useState)(u),
                        A = h[0],
                        p = h[1],
                        F = (0, r.useState)(!1),
                        v = F[0],
                        B = F[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                A && null !== f.current && !f.current.contains(e.target) && p(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [A]),
                        (0, r.useEffect)(() => {
                            p(u);
                        }, [u]),
                        i().createElement(
                            'div',
                            {
                                ref: f,
                                className: b()(
                                    gt.base,
                                    gt[`base__${n}`],
                                    a && gt.base__disabled,
                                    t && gt[`base__${t}`],
                                    A && gt.base__focus,
                                    v && gt.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    a || (null !== l && Ge(l), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    a || (_ && _(e), B(!1));
                                },
                                onMouseDown: function (e) {
                                    a ||
                                        (null !== o && Ge(o),
                                        m && m(e),
                                        u && (a || (f.current && (f.current.focus(), p(!0)))),
                                        B(!0));
                                },
                                onMouseLeave: function (e) {
                                    a || (E && E(e), B(!1));
                                },
                                onClick: function (e) {
                                    a || (g && g(e));
                                },
                            },
                            n !== ft.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: gt.back }),
                                    i().createElement('span', { className: gt.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: b()(gt.state, gt.state__default) },
                                i().createElement('span', { className: gt.stateDisabled }),
                                i().createElement('span', { className: gt.stateHighlightHover }),
                                i().createElement('span', { className: gt.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: gt.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                At.defaultProps = { type: ft.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const pt = At;
                let Ft, vt, bt, Bt, Dt;
                !(function (e) {
                    (e.Any = 'any'),
                        (e.Commander = 'commander'),
                        (e.Radioman = 'radioman'),
                        (e.Driver = 'driver'),
                        (e.Gunner = 'gunner'),
                        (e.Loader = 'loader');
                })(Ft || (Ft = {})),
                    (function (e) {
                        (e.InBarracks = 'in_barracks'), (e.InTank = 'in_tank'), (e.Dismissed = 'dismissed');
                    })(vt || (vt = {})),
                    (function (e) {
                        (e.Tankman = 'tankman'), (e.Recruit = 'recruit'), (e.Dismissed = 'dismissed');
                    })(bt || (bt = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled');
                    })(Bt || (Bt = {})),
                    (function (e) {
                        (e.IsLockCrew = 'isLockCrew'), (e.TankmanHasRole = 'tankmanHasRole');
                    })(Dt || (Dt = {}));
                const Ct = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    wt = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const kt = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    yt = (e) =>
                        kt
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let u = wt.length - 1; u >= 0; u--)
                                      for (; e >= wt[u]; ) (t += Ct[u]), (e -= wt[u]);
                                  return t;
                              })(e),
                    St = (e, t) => e.split(',').includes(t),
                    xt = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
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
                let Lt, Tt;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Lt || (Lt = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(Tt || (Tt = {}));
                const Nt = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: u,
                        vehicleType: n,
                        vehicleLvl: a,
                        tags: r = '',
                        size: s = Lt.extraSmall,
                        type: l = Tt.colored,
                        className: o,
                        classNames: c,
                        isShortName: d = !1,
                    }) => {
                        const m = `${le(n)}${e ? '_elite' : ''}`,
                            _ = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return i().createElement(
                            'div',
                            { className: b()(xt.base, xt[`base__size${oe(s)}`], xt[`base__type${oe(l)}`], o) },
                            i().createElement('div', { className: b()(xt.level, null == c ? void 0 : c.level) }, yt(a)),
                            i().createElement('div', {
                                className: b()(
                                    xt.type,
                                    e && xt[`type__elite${oe(s)}`],
                                    xt[`type__${s}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: n ? { backgroundImage: `url(${_})` } : void 0,
                            }),
                            St(r, 'premiumIGR') && i().createElement('div', { className: xt.premiumIGR }),
                            i().createElement(
                                'div',
                                { className: b()(xt.name, null == c ? void 0 : c.name) },
                                d ? u : t,
                            ),
                        );
                    },
                    Rt = 100,
                    Ot = 'new_skill';
                let Mt;
                !(function (e) {
                    (e.BlackReal = 'blackReal'),
                        (e.WhiteReal = 'whiteReal'),
                        (e.White = 'white'),
                        (e.WhiteOrange = 'whiteOrange'),
                        (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Par = 'par'),
                        (e.ParSecondary = 'parSecondary'),
                        (e.ParTertiary = 'parTertiary'),
                        (e.Red = 'red'),
                        (e.RedDark = 'redDark'),
                        (e.Yellow = 'yellow'),
                        (e.Orange = 'orange'),
                        (e.Cream = 'cream'),
                        (e.Brown = 'brown'),
                        (e.GreenBright = 'greenBright'),
                        (e.Green = 'green'),
                        (e.GreenDark = 'greenDark'),
                        (e.BlueBooster = 'blueBooster'),
                        (e.BlueTeamkiller = 'blueTeamkiller'),
                        (e.Cred = 'cred'),
                        (e.Gold = 'gold'),
                        (e.Bond = 'bond'),
                        (e.Prom = 'prom');
                })(Mt || (Mt = {}));
                const It = {
                    base: 'EfficiencyIndicator_base_34',
                    base__big: 'EfficiencyIndicator_base__big_a1',
                    base__large: 'EfficiencyIndicator_base__large_dc',
                    base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
                let Pt;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large');
                })(Pt || (Pt = {}));
                const Wt = (0, r.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = -1,
                        className: u,
                        targetId: n = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: a = Pt.Normal,
                    }) => {
                        const r = -1 === e,
                            s = r
                                ? { tooltipId: 'crewSkillUntrained' }
                                : { tooltipId: 'skillsEfficiency', skillEfficiency: e, tankmanID: t };
                        return i().createElement(
                            Z,
                            { targetId: n, args: s, isEnabled: -1 !== t },
                            i().createElement(
                                'div',
                                { className: b()(It.base, It[`base__${a}`], r && It.base__untrained, u) },
                                r
                                    ? i().createElement('div', { className: It.icon })
                                    : i().createElement(
                                          'div',
                                          { className: b()(It.percent, 1 === e && It.percent__full) },
                                          de(j.Z5.getNumberFormat(100 * e, j.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let Ht;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(Ht || (Ht = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let jt;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (e.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (e.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (e.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (e.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (e.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (e.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (e.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (e.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (e.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(jt || (jt = {}));
                let zt;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(zt || (zt = {}));
                var $t = u(7030);
                const Gt = i().memo(function ({ blinkStyle: e, isEnabled: t, children: u }) {
                        return i().createElement($t.animated.div, { style: t && e ? e : void 0 }, u);
                    }),
                    Ut = (e, t) => {
                        const u = (0, r.useRef)();
                        return (
                            (0, r.useEffect)(() => {
                                (t && !t(e)) || (u.current = e);
                            }, [t, e]),
                            u.current
                        );
                    };
                var Vt = u(8613);
                const qt = 60,
                    Yt = 3600,
                    Kt = 86400;
                Date.now(), Vt.Ew.getRegionalDateTime, Vt.Ew.getFormattedDateTime;
                const Xt = () => {},
                    Zt = (e = 0, t, u = 0, n = Xt) => {
                        const a = (0, r.useState)(e),
                            i = a[0],
                            s = a[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const a = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - a) / 1e3);
                                                null !== u && t <= u ? (s(u), n && n(), clearInterval(r)) : s(t);
                                            },
                                            1e3 * (t || (e > 120 ? qt : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, t, u, n]),
                            i
                        );
                    };
                j.Sw.instance;
                let Jt;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Jt || (Jt = {}));
                j.Sw.instance;
                const Qt = Ut,
                    eu = Zt,
                    tu = (e, t) => {
                        const u = [];
                        for (let n = 0; n < e; n++) u.push(t(n));
                        return u;
                    },
                    uu = 'AcceleratedTrainingIcon_base_4f',
                    nu = 'AcceleratedTrainingIcon_icon_45',
                    au = (0, r.memo)(({ classMix: e, targetId: t }) =>
                        i().createElement(
                            te,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                                targetId: t,
                            },
                            i().createElement(
                                'div',
                                { className: b()(uu, e) },
                                i().createElement('div', { className: nu }),
                            ),
                        ),
                    );
                let ru, iu, su, lu, ou, cu, du;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Default = 'default'),
                        (e.Overlap = 'overlap'),
                        (e.ExtraOverlap = 'extraOverlap');
                })(ru || (ru = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp');
                    })(iu || (iu = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.NoMargins = 'noMargins'),
                            (e.ReducedMargins = 'reducedMargins'),
                            (e.OnlyLearningOverlap = 'onlyLearningOverlap'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap'),
                            (e.ExtraOverlapWithLevel = 'extraOverlapWithLevel'),
                            (e.ExtraOverlapWithEfficiency = 'extraOverlapWithEfficiency'),
                            (e.ExtraOverlapWithLevelAndEfficiency = 'extraOverlapWithLevelAndEfficiency');
                    })(su || (su = {})),
                    (function (e) {
                        (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                    })(lu || (lu = {})),
                    (function (e) {
                        (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                    })(ou || (ou = {})),
                    (function (e) {
                        (e.Major = 'major'), (e.Bonus = 'bonus');
                    })(cu || (cu = {})),
                    (function (e) {
                        (e.Learned = 'learned'), (e.Learning = 'learning');
                    })(du || (du = {}));
                const mu = (e) => (e.level < Rt ? du.Learning : du.Learned),
                    _u = (e) =>
                        (function (e, t) {
                            for (let u = e.length - 1; u >= 0; u--) {
                                const n = lt(e[u]);
                                if (t(n, u, e)) return n;
                            }
                        })(e, (e) => e.level === Rt),
                    Eu = ({ name: e, level: t, customName: u, skillType: n, skillIndex: a, tooltipData: r }) => {
                        const i = { targetId: r.targetId, isEnabled: r.isEnabled };
                        return e === Ot
                            ? n === cu.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: r.tankmanID, skillIndex: a }, r.args),
                                      },
                                      i,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      i,
                                  )
                            : Object.assign(
                                  {
                                      contentId:
                                          R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                              'resId',
                                          ),
                                      args: Object.assign(
                                          {
                                              tooltipId: 'crewPerkGf',
                                              tankmanID: r.tankmanID,
                                              skillName: e,
                                              isBonus: n === cu.Bonus,
                                              level: t,
                                              customName: u,
                                          },
                                          r.args,
                                      ),
                                  },
                                  i,
                              );
                    },
                    gu = (e, t) => (e === ou.c44x44 ? Pt.Large : t ? Pt.Big : Pt.Normal),
                    fu = (e, t) => {
                        const u = st(e, t);
                        return null == u ? void 0 : u.name;
                    },
                    hu = (e, t) => {
                        const u = st(e, t);
                        return null == u ? void 0 : u.level;
                    },
                    Au = 33,
                    pu = 0,
                    Fu = !0,
                    vu = 'play';
                const bu = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function Bu() {
                    return (
                        (Bu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Bu.apply(this, arguments)
                    );
                }
                const Du = (0, r.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            n = e.getImageSource,
                            a = e.frameCount,
                            s = e.onAnimate,
                            l = e.frameTime,
                            o = void 0 === l ? Au : l,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? pu : c,
                            m = e.lastFrameIndex,
                            _ = void 0 === m ? a - 1 : m,
                            E = e.loop,
                            g = void 0 === E ? Fu : E,
                            f = e.state,
                            h = void 0 === f ? vu : f,
                            A = e.onAnimationDone,
                            p = e.onAnimationComplete,
                            F = e.poster,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, bu);
                        const b = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(() => {
                                const e = b.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y);
                                    };
                                switch (h) {
                                    case 'play':
                                        return (function () {
                                            const e = ku(d, _, n),
                                                t = Cu(d, _),
                                                a = window.setInterval(() => {
                                                    const n = t(),
                                                        r = e.get(n);
                                                    r
                                                        ? (null == s || s(n, r),
                                                          u(r),
                                                          n === _ &&
                                                              (null == p || p(),
                                                              g || (null == A || A(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, o);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && F ? { path: F, x: 0, y: 0 } : n(d),
                                                t = new Image();
                                            t.src = e.path;
                                            const a = () => u(wu(e, t));
                                            return (
                                                t.addEventListener('load', a), () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [o, n, d, _, g, s, p, A, F, h]),
                            i().createElement('canvas', Bu({}, v, { width: t, height: u, ref: b }))
                        );
                    }),
                    Cu = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return (u += 1), u > t && (u = e), n;
                        };
                    },
                    wu = (e, t) => Object.assign({}, e, { img: t }),
                    ku = (e, t, u) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= t; r++) {
                            const e = u(r),
                                t = a[e.path];
                            if (t) n.set(r, wu(e, t));
                            else {
                                const t = new Image();
                                (a[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, wu(e, t));
                            }
                        }
                        return n;
                    };
                function yu(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (n) => {
                        const a = n % u,
                            r = (a % t.columns) * e.width,
                            i = Math.trunc(a / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / u)), x: r, y: i };
                    };
                }
                function Su(e) {
                    return (t) => `${e}${t}`;
                }
                const xu = () => {
                        const e = (0, r.useState)(l.O.view.getScale()),
                            t = e[0],
                            u = e[1];
                        return (
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    u(l.O.view.getScale());
                                };
                                return (
                                    window.addEventListener('resize', e),
                                    () => {
                                        window.removeEventListener('resize', e);
                                    }
                                );
                            }, []),
                            t
                        );
                    },
                    Lu = [
                        'width',
                        'height',
                        'getSrcByFrame',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                        'loop',
                        'state',
                        'onAnimationComplete',
                        'revers',
                    ];
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                let Nu;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(Nu || (Nu = {}));
                const Ru = (e, t, u) => {
                        const n = new Image();
                        (n.src = u(t)), e.push(n);
                    },
                    Ou =
                        ((0, r.memo)((e) => {
                            let t = e.width,
                                u = e.height,
                                n = e.getSrcByFrame,
                                a = e.frameCount,
                                s = e.onAnimate,
                                l = void 0 === s ? () => {} : s,
                                o = e.frameTime,
                                c = void 0 === o ? 33 : o,
                                d = e.initialFrameIndex,
                                m = void 0 === d ? 0 : d,
                                _ = e.loop,
                                E = void 0 === _ || _,
                                g = e.state,
                                f = void 0 === g ? Nu.Play : g,
                                h = e.onAnimationComplete,
                                A = void 0 === h ? () => {} : h,
                                p = e.revers,
                                F = void 0 !== p && p,
                                v = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, Lu);
                            const b = (0, r.useRef)(null);
                            return (
                                (0, r.useEffect)(() => {
                                    const e = b.current;
                                    if (!e) return;
                                    const r = a - 1,
                                        i = e.getContext('2d'),
                                        s = (n) => {
                                            i.clearRect(0, 0, e.width, e.height), i.drawImage(n, 0, 0, t, u);
                                        };
                                    if ('stop' === f) {
                                        const e = n(0),
                                            t = new Image();
                                        t.src = e;
                                        const u = () => s(t);
                                        return t.addEventListener('load', u), () => t.removeEventListener('load', u);
                                    }
                                    const o = ((e, t, u) => {
                                            const n = [];
                                            if (u) for (let u = e; u >= 0; u--) Ru(n, u, t);
                                            else for (let u = 0; u < e; u++) Ru(n, u, t);
                                            return n;
                                        })(a, n, F),
                                        d = ((e, t = 0) => {
                                            let u = t;
                                            return () => {
                                                const t = u;
                                                return (u += 1), u > e && (u = 0), t;
                                            };
                                        })(r, m),
                                        _ = setInterval(() => {
                                            const e = d(),
                                                t = o[e];
                                            s(o[e]), l(e, t), e === r && (A(), E || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [a, c, n, u, m, E, l, A, f, t, F]),
                                i().createElement('canvas', Tu({}, v, { width: t, height: u, ref: b }))
                            );
                        }),
                        (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2)),
                    Mu = (e) => -(Math.cos(Math.PI * e) - 1) / 2,
                    Iu = {
                        base: 'AnimatedLostSkill_base_55',
                        base__c_24x24: 'AnimatedLostSkill_base__c_24x24_d5',
                        base__c_44x44: 'AnimatedLostSkill_base__c_44x44_72',
                        icon: 'AnimatedLostSkill_icon_d4',
                    },
                    Pu = i().memo(function ({ type: e, index: t, totalAmount: u, className: n, size: a }) {
                        const s = (0, r.useState)(Nu.Stop),
                            o = s[0],
                            c = s[1],
                            d = xu(),
                            m =
                                a === ou.c44x44
                                    ? ((e) => ({
                                          width: 96,
                                          height: 96,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 2, columns: 21 },
                                          getChunkPath: Su(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                          ),
                                      }))(e)
                                    : ((e) => ({
                                          width: 64,
                                          height: 64,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 1, columns: 24 },
                                          getChunkPath: Su(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                          ),
                                      }))(e),
                            _ = yu(m),
                            E = a === ou.c44x44 ? 60 : 36,
                            g = (0, $t.useSpring)(
                                () => ({
                                    from: { x: 0 },
                                    to: { x: l.O.view.remToPx(E) },
                                    config: { duration: 300, easing: Ou },
                                    delay: 600 - 100 * t,
                                }),
                                [t, E, d],
                            )[0];
                        return (
                            (0, r.useEffect)(() => {
                                const e = setTimeout(() => c(Nu.Play), 100 * (u - 1) - 100 * t);
                                return () => clearTimeout(e);
                            }, [t, u]),
                            i().createElement(
                                te,
                                { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                                i().createElement(
                                    $t.animated.div,
                                    { style: g, className: b()(Iu.base, Iu[`base__${a}`], n) },
                                    i().createElement(
                                        'div',
                                        { className: Iu.icon },
                                        i().createElement(Du, {
                                            width: m.width,
                                            height: m.height,
                                            frameCount: m.frameCount,
                                            getImageSource: _,
                                            loop: !1,
                                            state: o,
                                            style: { transform: `scale(${d})` },
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Wu = 'AnimatedNewSkill_base_0f';
                function Hu(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return ju(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return ju(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ju(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const zu = new Map();
                let $u = null;
                const Gu = () => {
                        zu.size
                            ? $u ||
                              ($u = window.setInterval(() => {
                                  for (var e, t = Hu(zu.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : $u && (clearInterval($u), ($u = null));
                    },
                    Uu = ({ type: e, state: t }) => {
                        const u = ((e, t) => ({
                                width: 24,
                                height: 24,
                                frameCount: 42,
                                chunk: { count: 1, columns: 42, rows: 1 },
                                getChunkPath: Su(`R.images.gui.maps.icons.sequence.new_skill.${e}_${t}_`),
                            }))(e, t),
                            n = yu(u),
                            a = (0, r.useState)(Nu.Stop),
                            s = a[0],
                            l = a[1];
                        return (
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    l(Nu.Play);
                                };
                                var t;
                                return (
                                    (t = e),
                                    zu.set(t, t),
                                    Gu(),
                                    () =>
                                        ((e) => {
                                            zu.delete(e), Gu();
                                        })(e)
                                );
                            }, []),
                            i().createElement(Du, {
                                width: u.width,
                                height: u.height,
                                frameCount: u.frameCount,
                                getImageSource: n,
                                loop: !1,
                                state: s,
                                onAnimationDone: () => {
                                    l(Nu.Stop);
                                },
                                className: Wu,
                            })
                        );
                    },
                    Vu = ({ size: e, children: t, className: u }) => {
                        const n = xu(),
                            a = e === ou.c44x44 ? 48 : 26,
                            r = (0, $t.useSpring)({
                                from: { opacity: 0, marginRight: -a * n },
                                to: [{ marginRight: 0 }, { opacity: 1 }],
                                config: { duration: 400, easing: Mu },
                                delay: 800,
                            });
                        return i().createElement($t.animated.div, { style: r, className: u }, t);
                    },
                    qu = i().memo(function ({ isEnabled: e, className: t, children: u }) {
                        const n = (0, $t.useSpring)(() => ({ from: { scale: 1 } })),
                            a = n[0],
                            s = n[1];
                        return (
                            (0, r.useEffect)(() => {
                                e &&
                                    s.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: Mu },
                                    });
                            }, [e, s]),
                            i().createElement($t.animated.div, { style: e ? a : void 0, className: t }, u)
                        );
                    });
                let Yu;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale');
                })(Yu || (Yu = {}));
                const Ku = i().memo(function ({
                        size: e,
                        skillsSignature: t,
                        animationType: u,
                        className: n,
                        children: a,
                    }) {
                        return u === Yu.Scale
                            ? i().createElement(qu, { isEnabled: !0, className: n }, a)
                            : u === Yu.FadeIn
                              ? i().createElement(Vu, { size: e, key: t, className: n }, a)
                              : i().createElement('div', { className: n }, a);
                    }),
                    Xu = i().memo(function ({ size: e, className: t, children: u }) {
                        const n = e === ou.c44x44 ? 48 : 26,
                            a = xu(),
                            r = (0, $t.useSpring)(
                                () => ({
                                    from: { opacity: 1, marginRight: 0 },
                                    to: [{ opacity: 0 }, { marginRight: -n * a }],
                                    config: { duration: 400, easing: Mu },
                                }),
                                [a, n],
                            )[0];
                        return i().createElement($t.animated.div, { style: r, className: t }, u);
                    }),
                    Zu = ['className', 'children'];
                const Ju = (e) => {
                        let t = e.className,
                            u = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Zu);
                        return i().createElement(ne, { tooltipArgs: Eu(n), className: t }, u);
                    },
                    Qu = {
                        base: 'SkillIcon_base_43',
                        base__c_22x22: 'SkillIcon_base__c_22x22_14',
                        base__medium: 'SkillIcon_base__medium_d0',
                        base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                        base__big: 'SkillIcon_base__big_ae',
                        base__c_80x80: 'SkillIcon_base__c_80x80_79',
                        base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                        base__dialogs: 'SkillIcon_base__dialogs_e5',
                    };
                let en;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(en || (en = {}));
                const tn = i().memo(function ({ iconName: e, size: t = en.c24x24, className: u }) {
                        var n;
                        const a = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e);
                        return i().createElement('div', {
                            style: null !== a ? { backgroundImage: `url(${a})` } : void 0,
                            className: b()(Qu.base, Qu[`base__${t}`], u),
                        });
                    }),
                    un = {
                        base: 'Skill_base_1f',
                        base__c_24x24: 'Skill_base__c_24x24_29',
                        base__c_44x44: 'Skill_base__c_44x44_5a',
                        background: 'Skill_background_02',
                        base__borderLightYellow: 'Skill_base__borderLightYellow_09',
                        base__borderYellow: 'Skill_base__borderYellow_3e',
                        base__borderRed: 'Skill_base__borderRed_d2',
                        base__typeBonus: 'Skill_base__typeBonus_23',
                        base__disabled: 'Skill_base__disabled_85',
                        newSkillHighLight: 'Skill_newSkillHighLight_44',
                        icon: 'Skill_icon_b0',
                        disabledOverlay: 'Skill_disabledOverlay_3b',
                    },
                    nn = { [ou.c24x24]: en.c22x22, [ou.c44x44]: en.c52x52 },
                    an = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: u,
                        type: n,
                        icon: a,
                        name: r,
                        skillState: s,
                        hasInstruction: l,
                        className: o,
                    }) => {
                        const c = ((e, t, u, n, a = zt.Normal) =>
                                e === Ot
                                    ? lu.LightYellow
                                    : a === zt.Untrained || n
                                      ? t === du.Learning
                                          ? lu.Yellow
                                          : lu.Grey
                                      : a === zt.Low
                                        ? u
                                            ? lu.Grey
                                            : lu.Red
                                        : t === du.Learning
                                          ? lu.Yellow
                                          : lu.Grey)(r, s, l, t, u),
                            d = (!l && u === zt.Untrained) || t,
                            m = a === Ot;
                        return i().createElement(
                            'div',
                            {
                                className: b()(
                                    un.base,
                                    un[`base__type${oe(n)}`],
                                    un[`base__state${oe(s)}`],
                                    un[`base__border${oe(c)}`],
                                    un[`base__${e}`],
                                    d && un.base__disabled,
                                    o,
                                ),
                            },
                            i().createElement('div', {
                                className: un.background,
                                style:
                                    n === cu.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${c}')`,
                                          }
                                        : void 0,
                            }),
                            m && s === du.Learned && i().createElement('div', { className: un.newSkillHighLight }),
                            i().createElement(tn, { iconName: a, size: nn[e], className: un.icon }),
                            d && i().createElement('div', { className: un.disabledOverlay }),
                        );
                    };
                function rn() {
                    return (
                        (rn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        rn.apply(this, arguments)
                    );
                }
                const sn = (e, t) => (e ? Yu.Scale : t ? Yu.FadeIn : Yu.None),
                    ln = ({
                        index: e,
                        skill: t,
                        previousSkill: u,
                        skillState: n,
                        skillType: a,
                        size: r,
                        efficiencyState: s,
                        tooltipData: l,
                        skillsSignature: o,
                        blinkStyle: c,
                        isNewSkillAnimated: d = !1,
                        skillAnimationType: m = iu.None,
                        className: _,
                    }) => {
                        const E = m === iu.Blink || m === iu.SlideOutAndBlink,
                            g = m === iu.SlideOutAndBlink || m === iu.SlideOut,
                            f = m === iu.FadeIn,
                            h = {
                                skillIndex: e,
                                name: t.name,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: l,
                                skillType: a,
                            };
                        return d && t.name === Ot && r === ou.c24x24
                            ? i().createElement(
                                  Ju,
                                  rn({}, h, { className: _ }),
                                  i().createElement(Uu, { type: a, state: n }),
                              )
                            : i().createElement(
                                  i().Fragment,
                                  null,
                                  u &&
                                      g &&
                                      i().createElement(
                                          Xu,
                                          { size: r, className: _, key: u.name },
                                          i().createElement(
                                              Gt,
                                              { blinkStyle: c, isEnabled: E },
                                              i().createElement(
                                                  an,
                                                  rn({ size: r, type: a, efficiencyState: s, skillState: n }, u),
                                              ),
                                          ),
                                      ),
                                  i().createElement(
                                      Ku,
                                      {
                                          size: r,
                                          skillsSignature: o,
                                          className: _,
                                          animationType: sn(m === iu.ScaleUp, f),
                                      },
                                      i().createElement(
                                          Ju,
                                          h,
                                          i().createElement(
                                              Gt,
                                              { blinkStyle: c, isEnabled: E },
                                              i().createElement(
                                                  an,
                                                  rn({ size: r, type: a, efficiencyState: s, skillState: n }, t),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    },
                    on = {
                        base: 'LostLevelAnimation_base_f6',
                        level: 'LostLevelAnimation_level_f0',
                        level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                        level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                        base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                        base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                    },
                    cn = i().memo(function ({ size: e, level: t, withSlideOut: u = !0 }) {
                        const n = (0, $t.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                            a = (0, $t.useSpring)(() => ({
                                from: { x: l.O.view.remToPx(-5), opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                config: { duration: 300, easing: Ou },
                                delay: 700,
                            }))[0],
                            r = (0, $t.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [{ opacity: 1 }, { opacity: 0 }],
                                    config: { duration: 150, easing: Ou },
                                }),
                                [t],
                            )[0];
                        return i().createElement(
                            'div',
                            { className: b()(on.base, on[`base__${e}`]) },
                            i().createElement(
                                $t.animated.div,
                                { style: u ? a : void 0, className: b()(on.level, on.level__skillLost) },
                                n.val.to((e) => de(Math.floor(e))),
                            ),
                            i().createElement(
                                $t.animated.div,
                                {
                                    style: u ? Object.assign({}, a, r) : r,
                                    className: b()(on.level, on.level__skillBlur),
                                },
                                n.val.to((e) => de(Math.floor(e))),
                            ),
                        );
                    }),
                    dn = 'SkillLevel_base_d2',
                    mn = 'SkillLevel_base__highlighted_e3',
                    _n = ({ skillLevel: e, isHighlighted: t = !1, className: u }) =>
                        i().createElement(
                            'div',
                            { className: b()(dn, t && mn, u) },
                            de(
                                e > 0 && e < 0.01
                                    ? 0.01
                                    : ((e, t = 2) => {
                                          const u = Math.pow(10, t);
                                          return e % 1 > 0 ? Math.round(e * u) / u : e;
                                      })(e),
                            ),
                        ),
                    En = ({
                        skillsAmountDiff: e,
                        size: t,
                        skillType: u,
                        wasLearned: n,
                        isAllMajorSkillsLearned: a,
                        skill: r,
                        possibleSkill: s,
                        blinkStyle: l,
                        className: o,
                    }) => {
                        const c = s || r,
                            d = void 0 !== r && void 0 !== s ? s.level - r.level : 0,
                            m = e > 0,
                            _ = e < 0 || d > 0;
                        return !c ||
                            (c.level === Rt && 0 === d) ||
                            ((null == s ? void 0 : s.level) === Rt && u === cu.Bonus && d > 0 && !a)
                            ? null
                            : m || (d < 0 && 0 === e)
                              ? i().createElement(cn, { size: t, level: c.level, withSlideOut: m })
                              : i().createElement(
                                    qu,
                                    { isEnabled: Boolean(n) },
                                    i().createElement(
                                        Gt,
                                        { blinkStyle: l, isEnabled: _ },
                                        i().createElement(_n, { skillLevel: c.level, isHighlighted: _, className: o }),
                                    ),
                                );
                    },
                    gn = {
                        base: 'Row_base_bb',
                        skill: 'Row_skill_fb',
                        base__c_44x44: 'Row_base__c_44x44_4f',
                        base__c_24x24: 'Row_base__c_24x24_16',
                        base__collapseNoMargins: 'Row_base__collapseNoMargins_13',
                        base__collapseOverlap: 'Row_base__collapseOverlap_2c',
                        base__collapseReducedMargins: 'Row_base__collapseReducedMargins_3b',
                        skill__last: 'Row_skill__last_0a',
                        skill__lastLearnedSkill: 'Row_skill__lastLearnedSkill_6c',
                        base__collapseOnlyLearningOverlap: 'Row_base__collapseOnlyLearningOverlap_19',
                        skill__stateLearning: 'Row_skill__stateLearning_5d',
                        base__collapseExtraOverlap: 'Row_base__collapseExtraOverlap_10',
                        base__collapseExtraOverlapWithLevel: 'Row_base__collapseExtraOverlapWithLevel_90',
                        base__collapseExtraOverlapWithEfficiency: 'Row_base__collapseExtraOverlapWithEfficiency_90',
                        base__collapseExtraOverlapWithLevelAndEfficiency:
                            'Row_base__collapseExtraOverlapWithLevelAndEfficiency_4e',
                        level: 'Row_level_56',
                        acceleratedTrainingIcon: 'Row_acceleratedTrainingIcon_c7',
                        lostSkill: 'Row_lostSkill_32',
                    },
                    fn = ({
                        skills: e,
                        skillType: t = cu.Major,
                        possibleSkills: u,
                        isAcceleratedTrainingVisible: n = !1,
                        collapseLayout: a = su.None,
                        efficiencyState: r,
                        size: s,
                        tooltipData: l,
                        blinkStyle: o,
                        isSkillsEfficiencyLearning: c = !1,
                        isAllMajorSkillsLearned: d = !1,
                        isNewSkillAnimated: m = !1,
                        className: _,
                    }) => {
                        const E = void 0 === u ? e : u,
                            g = Qt(e),
                            f = Qt(E),
                            h = g && ct(g),
                            A = ct(e),
                            p = _u(E),
                            F = ct(E),
                            v = u ? e.length - u.length : 0,
                            B = r !== zt.Low || c,
                            D = ((e) => ot(e, (e) => e.name).join())(E);
                        return i().createElement(
                            'div',
                            { className: b()(gn.base, gn[`base__${s}`], gn[`base__collapse${oe(a)}`], _) },
                            ((e, t, u, n, a) => {
                                if (!n || !t) return ot(u, (e, t) => a(e, iu.None, t));
                                const r = new Map(ot(t, ({ name: e, level: t }) => [e, t])),
                                    i = new Map(ot(e, ({ name: e, level: t }) => [e, t]));
                                let s = !1;
                                return ot(u, (l, o) => {
                                    const c = l.name,
                                        d = l.level,
                                        m = c === Ot,
                                        _ = fu(e, o),
                                        E = m ? hu(e, o) : i.get(c),
                                        g = m ? hu(t, o) : r.get(c),
                                        f = fu(u, o - 1),
                                        h = fu(n, o),
                                        A = fu(n, o + 1);
                                    let p = iu.None;
                                    return (
                                        s || c !== A || f === h || m || _ !== Ot
                                            ? m && o === u.length - 1 && s
                                                ? (p = iu.FadeIn)
                                                : (!m && !i.has(c)) || (void 0 === _ && m) || (E !== d && d === Rt)
                                                  ? (p = iu.Blink)
                                                  : g !== E && (p = iu.ScaleUp)
                                            : ((s = !0), (p = i.has(c) ? iu.SlideOut : iu.SlideOutAndBlink)),
                                        a(l, p, o)
                                    );
                                });
                            })(e, g, E, f, (e, u, n) => {
                                const a = mu(e);
                                return i().createElement(ln, {
                                    key: n,
                                    index: n,
                                    skill: e,
                                    skillState: a,
                                    skillType: t,
                                    previousSkill: f && st(f, n),
                                    skillAnimationType: u,
                                    size: s,
                                    skillsSignature: D,
                                    efficiencyState: r,
                                    tooltipData: l,
                                    blinkStyle: o,
                                    isNewSkillAnimated: m,
                                    className: b()(
                                        gn.skill,
                                        gn[`skill__state${oe(a)}`],
                                        e === F && gn.skill__last,
                                        e === p && gn.skill__lastLearnedSkill,
                                    ),
                                });
                            }),
                            B &&
                                i().createElement(En, {
                                    skillsAmountDiff: v,
                                    size: s,
                                    wasLearned: h && A && h.level !== A.level,
                                    skillType: t,
                                    isAllMajorSkillsLearned: d,
                                    skill: A,
                                    possibleSkill: F,
                                    blinkStyle: o,
                                    className: gn.level,
                                }),
                            n &&
                                i().createElement(au, {
                                    classMix: gn.acceleratedTrainingIcon,
                                    targetId: null == l ? void 0 : l.targetId,
                                }),
                            v > 0 &&
                                tu(v, (e) =>
                                    i().createElement(Pu, {
                                        key: e,
                                        index: e,
                                        totalAmount: v,
                                        type: t,
                                        className: gn.lostSkill,
                                        size: s,
                                    }),
                                ),
                        );
                    };
                function hn() {
                    return (
                        (hn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        hn.apply(this, arguments)
                    );
                }
                const An = ({
                        skills: e,
                        collapseLayout: t = su.None,
                        skillType: u = cu.Major,
                        efficiencyState: n,
                        size: a,
                        tooltipData: r,
                        className: s,
                        isAcceleratedTrainingVisible: l,
                    }) => {
                        const o = ct(e),
                            c = _u(e),
                            d = n !== zt.Low && (null == o ? void 0 : o.level) !== Rt;
                        return i().createElement(
                            'div',
                            { className: b()(gn.base, gn[`base__${a}`], gn[`base__collapse${oe(t)}`], s) },
                            ot(e, (e, t) => {
                                const s = mu(e);
                                return i().createElement(
                                    Ju,
                                    {
                                        key: t,
                                        skillIndex: t,
                                        name: e.name,
                                        customName: e.customName,
                                        level: e.level,
                                        tooltipData: r,
                                        skillType: u,
                                        className: b()(
                                            gn.skill,
                                            gn[`skill__state${oe(s)}`],
                                            e === o && gn.skill__last,
                                            e === c && gn.skill__lastLearnedSkill,
                                        ),
                                    },
                                    i().createElement(
                                        an,
                                        hn({ size: a, type: u, efficiencyState: n, skillState: s }, e),
                                    ),
                                );
                            }),
                            d && o && i().createElement(_n, { skillLevel: o.level, className: gn.level }),
                            l &&
                                i().createElement(au, {
                                    classMix: gn.acceleratedTrainingIcon,
                                    targetId: null == r ? void 0 : r.targetId,
                                }),
                        );
                    },
                    pn = {
                        base: 'Skills_base_ec',
                        efficiency: 'Skills_efficiency_d0',
                        base__c_44x44: 'Skills_base__c_44x44_c0',
                        rows: 'Skills_rows_e8',
                        bonusRow: 'Skills_bonusRow_4a',
                    };
                function Fn() {
                    return (
                        (Fn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Fn.apply(this, arguments)
                    );
                }
                const vn = ({
                        data: e,
                        dataToCompare: t,
                        classes: u,
                        tankmanID: n = -1,
                        size: a = ou.c24x24,
                        collapseType: r = ru.None,
                        isSkillTooltipEnabled: s = !1,
                        isAcceleratedTrainingVisible: l = !1,
                        isNewSkillAnimated: o = !1,
                        isEfficiencyVisible: c = !1,
                        isBonusSkillsVisible: d = !0,
                        tooltipsTargetId: m = R.invalid('resId'),
                        tooltipArgs: _,
                        blinkStyle: E,
                        children: g,
                    }) => {
                        const f = e.majorSkills,
                            h = e.bonusSkills,
                            A = e.skillsEfficiency,
                            p = (null == t ? void 0 : t.skillsEfficiency) || A,
                            F = ((e) => (-1 === e ? zt.Untrained : e < 1 ? zt.Low : zt.Normal))(A),
                            v = void 0 !== t && t.skillsEfficiency !== A,
                            B = F !== zt.Normal || c || v,
                            D = null == t ? void 0 : t.majorSkills,
                            C = null == t ? void 0 : t.bonusSkills,
                            w = C || h,
                            k = ct(w),
                            y = d && w.length > 0,
                            S = o || void 0 !== t,
                            x = 6 === (null == D ? void 0 : D.length),
                            L = ((e, t, u, n) => {
                                if (9 !== t) return su.None;
                                switch (e) {
                                    case ru.Default:
                                        if (u && n) return su.NoMargins;
                                        break;
                                    case ru.Overlap:
                                        if (u) return n ? su.Overlap : su.ReducedMargins;
                                        if (n) return su.OnlyLearningOverlap;
                                        break;
                                    case ru.ExtraOverlap:
                                        return u && n
                                            ? su.ExtraOverlapWithLevelAndEfficiency
                                            : u
                                              ? su.ExtraOverlapWithEfficiency
                                              : n
                                                ? su.ExtraOverlapWithLevel
                                                : su.ExtraOverlap;
                                }
                                return su.None;
                            })(r, w.length, B, F !== zt.Low && void 0 !== k && k.level < Rt),
                            T = {
                                size: a,
                                efficiencyState: F,
                                tooltipData: { targetId: m, isEnabled: s, tankmanID: n, args: _ },
                            };
                        return i().createElement(
                            'div',
                            { className: b()(pn.base, pn[`base__${a}`], null == u ? void 0 : u.base) },
                            B &&
                                i().createElement(
                                    Gt,
                                    { blinkStyle: E, isEnabled: v && S },
                                    i().createElement(Wt, {
                                        efficiencyValue: p,
                                        tankmanID: n,
                                        className: pn.efficiency,
                                        size: gu(a, y),
                                        targetId: m,
                                    }),
                                ),
                            g,
                            i().createElement(
                                'div',
                                { className: pn.rows },
                                S
                                    ? i().createElement(
                                          i().Fragment,
                                          null,
                                          i().createElement(
                                              fn,
                                              Fn(
                                                  {
                                                      skills: f,
                                                      possibleSkills: D,
                                                      blinkStyle: E,
                                                      isAcceleratedTrainingVisible: l,
                                                      isNewSkillAnimated: o,
                                                      isSkillsEfficiencyLearning: v,
                                                  },
                                                  T,
                                              ),
                                          ),
                                          y &&
                                              i().createElement(
                                                  fn,
                                                  Fn(
                                                      {
                                                          skills: h,
                                                          skillType: cu.Bonus,
                                                          possibleSkills: C,
                                                          className: pn.bonusRow,
                                                          collapseLayout: L,
                                                          blinkStyle: E,
                                                          isNewSkillAnimated: o,
                                                          isAllMajorSkillsLearned: x,
                                                      },
                                                      T,
                                                  ),
                                              ),
                                      )
                                    : i().createElement(
                                          i().Fragment,
                                          null,
                                          i().createElement(An, Fn({ skills: f, isAcceleratedTrainingVisible: l }, T)),
                                          y &&
                                              i().createElement(
                                                  An,
                                                  Fn(
                                                      {
                                                          skills: h,
                                                          skillType: cu.Bonus,
                                                          className: pn.bonusRow,
                                                          collapseLayout: L,
                                                      },
                                                      T,
                                                  ),
                                              ),
                                      ),
                            ),
                        );
                    },
                    bn = 'Content_base_48',
                    Bn = 'Content_base__disabled_e3',
                    Dn = 'Content_content_cb',
                    Cn = 'Content_name_7b',
                    wn = 'Content_name__postProgression_f9',
                    kn = 'Content_specializationInfo_ac',
                    yn = 'Content_recruitLabel_17';
                function Sn() {
                    return (
                        (Sn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Sn.apply(this, arguments)
                    );
                }
                const xn = i().memo(({ tankman: e, isRecruit: t, isDisabled: u = !1, withBonusSkills: n = !1 }) =>
                        i().createElement(
                            'div',
                            { className: b()(bn, u && Bn) },
                            i().createElement(
                                'div',
                                { className: Dn },
                                i().createElement(
                                    'div',
                                    { className: b()(Cn, e.hasPostProgression && wn) },
                                    e.fullUserName,
                                ),
                                i().createElement(
                                    'div',
                                    { className: kn },
                                    t
                                        ? i().createElement('div', { className: yn }, R.strings.crew.tankman.recruit())
                                        : i().createElement(
                                              Nt,
                                              Sn({}, e.tankmanVehicleInfo, { type: Tt.whiteSpanish, isShortName: !0 }),
                                          ),
                                ),
                            ),
                            i().createElement(vn, {
                                data: e.skills,
                                collapseType: ru.Overlap,
                                isBonusSkillsVisible: n,
                            }),
                        ),
                    ),
                    Ln = 'DisabledLayer_base_1b',
                    Tn = 'DisabledLayer_disabledContent_81',
                    Nn = 'DisabledLayer_disabledIcon_21',
                    Rn = 'DisabledLayer_disabledTitle_a4',
                    On = i().memo(({ disableReason: e, disableIcon: t, className: u }) =>
                        i().createElement(
                            'div',
                            { className: b()(Ln, u) },
                            i().createElement(
                                'div',
                                { className: Tn },
                                t &&
                                    i().createElement('div', {
                                        className: Nn,
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                i().createElement('div', { className: Rn }, e),
                            ),
                        ),
                    ),
                    Mn = {
                        base: 'FlagIcon_base_25',
                        base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                        base__c_240x118: 'FlagIcon_base__c_240x118_92',
                        base__c_155x31: 'FlagIcon_base__c_155x31_41',
                    };
                let In;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31');
                })(In || (In = {}));
                const Pn = {
                        [In.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [In.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [In.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    Wn = i().memo(({ nation: e, size: t, className: u }) =>
                        i().createElement('div', {
                            className: b()(Mn.base, Mn[`base__${t}`], u),
                            style: { backgroundImage: `url('${Pn[t].$dyn(e)}')` },
                        }),
                    ),
                    Hn = {
                        base: 'TankmanIcon_base_f9',
                        base__big: 'TankmanIcon_base__big_98',
                        base__small: 'TankmanIcon_base__small_b2',
                        base__barracks: 'TankmanIcon_base__barracks_62',
                        base__special: 'TankmanIcon_base__special_3f',
                        base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    };
                let jn;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(jn || (jn = {}));
                const zn = ({ name: e, size: t = jn.c100x60, classMix: u, isSkin: n = !1 }) => {
                        const a = (0, r.useMemo)(() => {
                            try {
                                let u = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                                n && (u = u.$dyn('crewSkins'));
                                const a = u.$dyn(le(e));
                                if (!a) throw Error;
                                return { backgroundImage: `url(${a})` };
                            } catch (t) {
                                console.error('Cant find resource in TankmanIcon: ', e);
                            }
                        }, [e, t, n]);
                        return i().createElement('div', { style: a, className: b()(Hn.base, Hn[`base__${t}`], u) });
                    },
                    $n = 'Icon_base_93',
                    Gn = 'Icon_base__disabled_54',
                    Un = 'Icon_flag_ac',
                    Vn = (e, t) => {
                        if (e && t) return { backgroundImage: `url(${e})` };
                    },
                    qn = i().memo(
                        ({
                            nation: e,
                            tankmanIcon: t,
                            recruitGlowImage: u,
                            isTankmanInSkin: n,
                            isRecruit: a,
                            isDisabled: r,
                            className: s,
                            children: l,
                        }) =>
                            i().createElement(
                                'div',
                                { className: b()($n, r && Gn, s), style: Vn(u, a) },
                                '' !== e && i().createElement(Wn, { nation: e, size: In.c240x118, className: Un }),
                                i().createElement(zn, { name: t, size: jn.c158x118, isSkin: n }),
                                l,
                            ),
                    ),
                    Yn = (0, r.memo)(({ duration: e }) => {
                        const t =
                            e >= 0
                                ? (u = (function (e = 0) {
                                      let t = e;
                                      const u = Math.trunc(t / Kt);
                                      t -= u * Kt;
                                      const n = Math.trunc(t / Yt);
                                      t -= n * Yt;
                                      const a = Math.trunc(t / qt);
                                      return (t -= a * qt), { days: u, hours: n, minutes: a, seconds: t };
                                  })(e)).days > 0
                                    ? se(R.strings.common.duration.days(), { days: u.days })
                                    : u.hours > 0
                                      ? se(R.strings.common.duration.hours(), { hours: u.hours })
                                      : u.minutes > 0
                                        ? se(R.strings.common.duration.minutes(), { minutes: u.minutes })
                                        : se(R.strings.common.duration.seconds(), { seconds: u.seconds })
                                : R.strings.common.duration.unlimited();
                        var u;
                        return i().createElement('span', null, t);
                    }),
                    Kn = 'DismissedCountdown_base_12',
                    Xn = 'DismissedCountdown_icon_e6',
                    Zn = 'DismissedCountdown_label_92',
                    Jn = i().memo(({ duration: e }) =>
                        i().createElement(
                            'div',
                            { className: Kn },
                            i().createElement('div', { className: Xn }),
                            i().createElement('div', { className: Zn }, i().createElement(Yn, { duration: eu(e, 1) })),
                        ),
                    ),
                    Qn = 'Location_base_4d',
                    ea = 'Location_icon_eb',
                    ta = i().memo(({ location: e, timeToDismiss: t, className: u }) =>
                        i().createElement(
                            'div',
                            { className: b()(Qn, u) },
                            e === vt.Dismissed && i().createElement(Jn, { duration: t }),
                            e !== vt.InBarracks &&
                                i().createElement('div', {
                                    className: ea,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.location.${e})`,
                                    },
                                }),
                        ),
                    ),
                    ua = 'Role_base_68',
                    na = 'Role_base__disabled_8c';
                var aa;
                !(function (e) {
                    (e.White = 'white'), (e.Red = 'red');
                })(aa || (aa = {}));
                const ra = i().memo(({ role: e, withPenalty: t, className: u, isDisabled: n = !1 }) =>
                        e !== Ft.Any
                            ? i().createElement('div', {
                                  className: b()(ua, n && na, u),
                                  style: {
                                      backgroundImage: `url(R.images.gui.maps.icons.tankmen.roles.opaque.${t ? aa.Red : aa.White}.${e})`,
                                  },
                              })
                            : null,
                    ),
                    ia = {
                        base: 'TankmanCard_base_dd',
                        base__default: 'TankmanCard_base__default_72',
                        base__disabled: 'TankmanCard_base__disabled_1f',
                        icon: 'TankmanCard_icon_a5',
                        disabledLayer: 'TankmanCard_disabledLayer_25',
                        role: 'TankmanCard_role_02',
                        location: 'TankmanCard_location_3f',
                        separatorWrapper: 'TankmanCard_separatorWrapper_fe',
                        separator: 'TankmanCard_separator_73',
                        separator__top: 'TankmanCard_separator__top_72',
                        actions: 'TankmanCard_actions_b5',
                    },
                    sa = (0, r.memo)(
                        ({
                            tankman: e,
                            Icon: t = qn,
                            actions: u,
                            isTooltipEnabled: n = !0,
                            withBonusSkills: a = !1,
                            className: r,
                            classNames: s,
                            onHover: l,
                            onMouseDown: o,
                            onClick: c,
                        }) => {
                            const d = e.tankmanKind === bt.Recruit,
                                m = e.cardState === Bt.Disabled;
                            return i().createElement(
                                Z,
                                {
                                    args: {
                                        tooltipId: d ? 'tankmanNotRecruited' : 'tankman',
                                        targetId: d ? e.recruitID : e.tankmanID,
                                    },
                                    isEnabled: n,
                                    ignoreShowDelay: !1,
                                },
                                i().createElement(
                                    'div',
                                    {
                                        className: b()(ia.base, ia[`base__${e.cardState}`], r),
                                        onMouseEnter: l,
                                        onMouseDown: o,
                                        onClick: c,
                                    },
                                    m &&
                                        i().createElement(On, {
                                            disableReason: e.disableReason,
                                            disableIcon: e.disableIcon,
                                            className: ia.disabledLayer,
                                        }),
                                    i().createElement(ra, {
                                        isDisabled: m,
                                        role: e.role,
                                        withPenalty: e.hasRolePenalty,
                                        className: ia.role,
                                    }),
                                    i().createElement(ta, {
                                        location: e.location,
                                        timeToDismiss: e.timeToDismiss,
                                        className: ia.location,
                                    }),
                                    i().createElement(t, {
                                        nation: e.nation,
                                        tankmanIcon: e.iconName,
                                        recruitGlowImage: e.recruitGlowImage,
                                        isTankmanInSkin: e.isInSkin,
                                        isRecruit: d,
                                        isDisabled: m,
                                        className: b()(ia.icon, null == s ? void 0 : s.icon),
                                    }),
                                    i().createElement(
                                        'div',
                                        { className: b()(ia.separatorWrapper, null == s ? void 0 : s.separator) },
                                        i().createElement('div', { className: b()(ia.separator, ia.separator__top) }),
                                        i().createElement('div', { className: ia.separator }),
                                    ),
                                    i().createElement(xn, {
                                        tankman: e,
                                        isRecruit: d,
                                        isDisabled: m,
                                        withBonusSkills: a,
                                    }),
                                    !m && u && i().createElement('div', { className: b()(ia.actions) }, u),
                                ),
                            );
                        },
                    ),
                    la = (e) => {
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
                    },
                    oa = (e, t, u) => (u < e ? e : u > t ? t : u),
                    ca = [];
                function da(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), ca)
                    );
                }
                function ma(e, t, u = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, r.useEffect)(() => a, [a]);
                    const i = (null != u ? u : []).concat([t]);
                    return [
                        (0, r.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, i),
                        a,
                    ];
                }
                function _a(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ea(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Ea(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ea(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const ga = () => {
                    const e = (0, r.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        u = (e, u) => {
                            t(e).set(u, u);
                        },
                        n = (e, u) => {
                            t(e).delete(u);
                        },
                        a = (e, ...u) => {
                            for (var n, a = _a(t(e).values()); !(n = a()).done; ) {
                                (0, n.value)(...u);
                            }
                        };
                    return (0, r.useMemo)(() => ({ on: u, off: n, trigger: a }), []);
                };
                function fa(e, t, u, n) {
                    let a,
                        r = !1,
                        i = 0;
                    function s() {
                        a && clearTimeout(a);
                    }
                    function l(...l) {
                        const o = this,
                            c = Date.now() - i;
                        function d() {
                            (i = Date.now()), u.apply(o, l);
                        }
                        r ||
                            (n && !a && d(),
                            s(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== t &&
                                  (a = setTimeout(
                                      n
                                          ? function () {
                                                a = void 0;
                                            }
                                          : d,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                        (l.cancel = function () {
                            s(), (r = !0);
                        }),
                        l
                    );
                }
                let ha;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(ha || (ha = {}));
                const Aa = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    pa = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const s = (e, u) => {
                            const n = t(e),
                                a = n[0],
                                r = n[1];
                            return r <= a ? 0 : oa(a, r, u);
                        };
                        return (o = {}) => {
                            const c = o.settings,
                                d = void 0 === c ? Aa : c,
                                m = (0, r.useRef)(null),
                                _ = (0, r.useRef)(null),
                                E = ga(),
                                g = (function (e, t, u) {
                                    const n = (0, r.useMemo)(() => fa(u, e), t);
                                    return (0, r.useEffect)(() => n.cancel, [n]), n;
                                })(
                                    () => {
                                        l.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                f = (0, $t.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (u(t, e), E.trigger('change', e), i && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                h = f[0],
                                A = f[1],
                                p = (0, r.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const a = h.scrollPosition.get(),
                                            r = (null != (n = h.scrollPosition.goal) ? n : 0) - a;
                                        return s(e, t * u + r + a);
                                    },
                                    [h.scrollPosition],
                                ),
                                F = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            A.start({
                                                scrollPosition: s(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: d.animationConfig,
                                                from: { scrollPosition: s(n, h.scrollPosition.get()) },
                                            });
                                    },
                                    [A, d.animationConfig, h.scrollPosition],
                                ),
                                v = (0, r.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            u = _.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return a(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, d.step),
                                            r = p(t, e, n);
                                        F(r);
                                    },
                                    [F, p, d.step],
                                ),
                                b = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && v(n(e)),
                                            m.current && E.trigger('mouseWheel', e, h.scrollPosition, t(m.current));
                                    },
                                    [h.scrollPosition, v, E],
                                ),
                                B = ((e, t = []) => {
                                    const u = (0, r.useRef)(),
                                        n = (0, r.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        la(() => {
                                            const e = m.current;
                                            e &&
                                                (F(s(e, h.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [F, h.scrollPosition.goal],
                                ),
                                D = da(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = s(e, h.scrollPosition.goal);
                                    t !== h.scrollPosition.goal && F(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', B),
                                    () => {
                                        window.removeEventListener('resize', B);
                                    }
                                ),
                                [B],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? a(_.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: b,
                                    applyScroll: F,
                                    applyStepTo: v,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: A,
                                    animationScroll: h,
                                    recalculateContent: D,
                                    events: { on: E.on, off: E.off },
                                }),
                                [h.scrollPosition, F, v, E.off, E.on, D, b, A, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Fa = pa({
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
                        getDirection: (e) => (e.deltaY > 1 ? ha.Next : ha.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    va = 'HorizontalBar_base_49',
                    ba = 'HorizontalBar_base__nonActive_82',
                    Ba = 'HorizontalBar_leftButton_5f',
                    Da = 'HorizontalBar_rightButton_03',
                    Ca = 'HorizontalBar_track_0d',
                    wa = 'HorizontalBar_thumb_fd',
                    ka = 'HorizontalBar_rail_32',
                    ya = 'disable',
                    Sa = { pending: !1, offset: 0 },
                    xa = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    La = () => {},
                    Ta = (e, t) => Math.max(20, e.offsetWidth * t),
                    Na = (0, r.memo)(
                        ({
                            api: e,
                            classNames: t = {},
                            getStepByRailClick: u = xa,
                            onDrag: n = La,
                            onClick: a = La,
                        }) => {
                            const s = (0, r.useRef)(null),
                                o = (0, r.useRef)(null),
                                c = (0, r.useRef)(null),
                                d = (0, r.useRef)(null),
                                m = (0, r.useRef)(null),
                                _ = e.stepTimeout || 100,
                                E = (0, r.useState)(Sa),
                                g = E[0],
                                f = E[1],
                                h = (0, r.useCallback)(
                                    (e) => {
                                        f(e),
                                            m.current &&
                                                n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                    },
                                    [n],
                                ),
                                A = () => {
                                    const t = d.current,
                                        u = m.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(n && t && u && a)) return;
                                    const r = e.animationScroll.scrollPosition.get(),
                                        i = Math.min(1, n / a),
                                        s = oa(0, 1, r / (a - n)),
                                        l = (t.offsetWidth - Ta(t, i)) * s;
                                    (u.style.transform = `translateX(${0 | l}px)`),
                                        ((e) => {
                                            if (o.current && c.current && d.current && m.current) {
                                                if (0 === e)
                                                    return (
                                                        o.current.classList.add(ya), void c.current.classList.remove(ya)
                                                    );
                                                if (
                                                    ((t = d.current),
                                                    (u = m.current),
                                                    e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                                )
                                                    return (
                                                        o.current.classList.remove(ya), void c.current.classList.add(ya)
                                                    );
                                                var t, u;
                                                o.current.classList.remove(ya), c.current.classList.remove(ya);
                                            }
                                        })(l);
                                },
                                p = da(() => {
                                    (() => {
                                        const t = m.current,
                                            u = d.current,
                                            n = e.getWrapperSize(),
                                            a = e.getContainerSize();
                                        if (!(a && t && n && u)) return;
                                        const r = Math.min(1, n / a);
                                        (t.style.width = `${Ta(u, r)}px`),
                                            (t.style.display = 'flex'),
                                            s.current &&
                                                (1 === r
                                                    ? s.current.classList.add(ba)
                                                    : s.current.classList.remove(ba));
                                    })(),
                                        A();
                                });
                            (0, r.useEffect)(() => la(p)),
                                (0, r.useEffect)(
                                    () =>
                                        la(() => {
                                            const t = () => {
                                                A();
                                            };
                                            let u = La;
                                            const n = () => {
                                                u(), (u = la(p));
                                            };
                                            return (
                                                e.events.on('recalculateContent', p),
                                                e.events.on('rest', t),
                                                e.events.on('change', t),
                                                e.events.on('resizeHandled', n),
                                                () => {
                                                    u(),
                                                        e.events.off('recalculateContent', p),
                                                        e.events.off('rest', t),
                                                        e.events.off('change', t),
                                                        e.events.off('resizeHandled', n);
                                                }
                                            );
                                        }),
                                    [e],
                                ),
                                (0, r.useEffect)(() => {
                                    if (!g.pending) return;
                                    const t = l.O.client.events.mouse.move(([t, u]) => {
                                            var a;
                                            const r = e.contentRef.current,
                                                i = e.wrapperRef.current;
                                            if (!r || !i) return;
                                            const s = d.current,
                                                l = m.current;
                                            if (!s || !l) return;
                                            if ('inside' === u && t.clientX < 0) return;
                                            const o = t.clientX - g.offset - s.getBoundingClientRect().x,
                                                c = (o / s.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(r, c),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                            }),
                                                n({ type: 'dragging', thumb: l, thumbOffset: o, contentOffset: c });
                                        }),
                                        u = l.O.client.events.mouse.up(() => {
                                            t(), h(Sa);
                                        });
                                    return () => {
                                        t(), u();
                                    };
                                }, [e, g.offset, g.pending, n, h]);
                            const F = ma(
                                    (t) => {
                                        e.applyStepTo(t), a(t);
                                    },
                                    _,
                                    [e],
                                ),
                                v = F[0],
                                B = F[1];
                            (0, r.useEffect)(
                                () => (
                                    document.addEventListener('mouseup', B, !0),
                                    () => document.removeEventListener('mouseup', B, !0)
                                ),
                                [B],
                            );
                            const D = (e) => {
                                e.target.classList.contains(ya) || Ge('highlight');
                            };
                            return i().createElement(
                                'div',
                                { className: b()(va, t.base), ref: s, onWheel: e.handleMouseWheel },
                                i().createElement('div', {
                                    className: b()(Ba, t.leftButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(ya) || 0 !== e.button || (Ge('play'), v(ha.Next));
                                    },
                                    onMouseUp: B,
                                    ref: o,
                                    onMouseEnter: D,
                                }),
                                i().createElement(
                                    'div',
                                    {
                                        className: b()(Ca, t.track),
                                        onMouseDown: (t) => {
                                            const n = m.current;
                                            if (n && 0 === t.button)
                                                if ((Ge('play'), t.target === n))
                                                    h({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                                else {
                                                    ((t) => {
                                                        const n = m.current,
                                                            a = e.contentRef.current;
                                                        if (!n || !a) return;
                                                        const r = u(e);
                                                        e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                    })(t.screenX > n.getBoundingClientRect().x ? ha.Prev : ha.Next);
                                                }
                                        },
                                        ref: d,
                                        onMouseEnter: D,
                                    },
                                    i().createElement('div', { ref: m, className: b()(wa, t.thumb) }),
                                    i().createElement('div', { className: b()(ka, t.rail) }),
                                ),
                                i().createElement('div', {
                                    className: b()(Da, t.rightButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(ya) || 0 !== e.button || (Ge('play'), v(ha.Prev));
                                    },
                                    onMouseUp: B,
                                    ref: c,
                                    onMouseEnter: D,
                                }),
                            );
                        },
                    ),
                    Ra = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Oa = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: s,
                        scrollClassName: l,
                        getStepByRailClick: o,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: b()(Ra.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: b()(Ra.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: b()(Ra.defaultScrollArea, a) },
                                i().createElement(Ma, { className: l, api: m, classNames: s }, e),
                            ),
                            i().createElement(Na, { getStepByRailClick: o, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Ma = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, r.useEffect)(() => la(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: b()(Ra.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: b()(Ra.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: b()(Ra.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (Ma.Bar = Na), (Ma.Default = Oa);
                const Ia = pa({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ha.Next : ha.Prev),
                    }),
                    Pa = 'VerticalBar_base_f3',
                    Wa = 'VerticalBar_base__nonActive_42',
                    Ha = 'VerticalBar_topButton_d7',
                    ja = 'VerticalBar_bottomButton_06',
                    za = 'VerticalBar_track_df',
                    $a = 'VerticalBar_thumb_32',
                    Ga = 'VerticalBar_rail_43',
                    Ua = 'disable',
                    Va = () => {},
                    qa = { pending: !1, offset: 0 },
                    Ya = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ka = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Xa = (e, t) => Math.max(20, e.offsetHeight * t),
                    Za = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Ya, onDrag: n = Va }) => {
                        const a = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, r.useState)(qa),
                            E = _[0],
                            g = _[1],
                            f = (0, r.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            h = da(() => {
                                const t = d.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const i = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${Xa(u, i)}px`),
                                    (t.style.display = 'flex'),
                                    a.current &&
                                        (1 === i ? a.current.classList.add(Wa) : a.current.classList.remove(Wa)),
                                    i
                                );
                            }),
                            A = da(() => {
                                const t = c.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / a),
                                    l = oa(0, 1, r / (a - n)),
                                    m = (t.offsetHeight - Xa(t, i)) * l;
                                (u.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && o.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(Ua), void o.current.classList.remove(Ua);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(Ua), void o.current.classList.add(Ua);
                                            var t, u;
                                            s.current.classList.remove(Ua), o.current.classList.remove(Ua);
                                        }
                                    })(m);
                            }),
                            p = da(() => {
                                Ka(e, () => {
                                    h(), A();
                                });
                            });
                        (0, r.useEffect)(() => la(p)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    Ka(e, () => {
                                        A();
                                    });
                                };
                                let u = Va;
                                const n = () => {
                                    u(), (u = la(p));
                                };
                                return (
                                    e.events.on('recalculateContent', p),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', p),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const t = l.O.client.events.mouse.up(() => {
                                        f(qa);
                                    }),
                                    u = l.O.client.events.mouse.move(([t]) => {
                                        Ka(e, (u) => {
                                            const a = c.current,
                                                r = d.current,
                                                i = e.getContainerSize();
                                            if (!a || !r || !i) return;
                                            const s = t.screenY - E.offset - a.getBoundingClientRect().y,
                                                l = (s / a.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: s, contentOffset: l });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, n, f]);
                        const F = ma((t) => e.applyStepTo(t), m, [e]),
                            v = F[0],
                            B = F[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const D = (e) => {
                            e.target.classList.contains(Ua) || Ge('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: b()(Pa, t.base), ref: a, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: b()(Ha, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ua) || 0 !== e.button || (Ge('play'), v(ha.Next));
                                },
                                ref: s,
                                onMouseEnter: D,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: b()(za, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if ((Ge('play'), t.target === n))
                                                f({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        Ka(e, (n) => {
                                                            if (!n) return;
                                                            const a = u(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? ha.Prev : ha.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                i().createElement('div', { ref: d, className: b()($a, t.thumb) }),
                                i().createElement('div', { className: b()(Ga, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: b()(ja, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ua) || 0 !== e.button || (Ge('play'), v(ha.Prev));
                                },
                                onMouseUp: B,
                                ref: o,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Ja = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Qa = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: s,
                        scrollClassNames: l,
                        getStepByRailClick: o,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: b()(Ja.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: b()(Ja.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: b()(Ja.area, a) },
                                i().createElement(er, { className: s, classNames: l, api: m }, e),
                            ),
                            i().createElement(Za, { getStepByRailClick: o, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    er = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, r.useEffect)(() => la(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: b()(Ja.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: b()(Ja.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                er.Default = Qa;
                const tr = { Vertical: a, Horizontal: n },
                    ur = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: u,
                        paddingBottom: n,
                        amount: a,
                        itemsAmountPerRow: r,
                        visibleRowsAmount: i,
                    }) => {
                        const s = Math.ceil(a / r) * t,
                            l = i * t,
                            o = e * t;
                        return { paddingTop: `${o + u}rem`, paddingBottom: `${Math.max(s - o - l, 0) + n}rem` };
                    },
                    nr = (e) => {
                        const t = e.className,
                            u = e.children,
                            n = e.itemsAmountPerRow,
                            a = e.visibleRowsAmount,
                            r = e.startRowIndex,
                            s = e.amount,
                            l = r * n,
                            o = Math.min(a * n, s - l);
                        return i().createElement(
                            'div',
                            { className: t, style: ur(e) },
                            tu(o, (e) => u(l + e)),
                        );
                    },
                    ar = 'VirtualGrid_base_52',
                    rr = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: u,
                        children: n,
                        api: a,
                        classNames: s,
                        preloadedRows: o = 1,
                        paddingTop: c = 0,
                        paddingBottom: d = 0,
                    }) => {
                        const m = a.scrollApi,
                            _ = (0, r.useRef)(0),
                            E = (0, r.useState)(0),
                            g = E[0],
                            f = E[1],
                            h = (0, r.useState)(null),
                            A = h[0],
                            p = h[1],
                            F = (0, r.useState)(null),
                            v = F[0],
                            B = F[1];
                        return (
                            (0, r.useEffect)(() => {
                                const t = (t) => {
                                    if (!A) return;
                                    const n = Math.floor((l.O.view.pxToRem(t.value.scrollPosition) - c) / u + 1),
                                        r = Math.ceil(e / A),
                                        i = Math.max(0, Math.min(n - o, r));
                                    f(i), a.startRowIndexChanged(i);
                                };
                                return m.events.on('change', t), () => m.events.off('change', t);
                            }, [a, m, u, c, A, e, o]),
                            (0, r.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                n = m.contentRef.current.getBoundingClientRect(),
                                                r =
                                                    l.O.view.pxToRem(n.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                i = Math.floor(r / t),
                                                s = Math.ceil(l.O.view.pxToRem(n.height) / u) + 2 * o;
                                            (_.current = i), p(i), B(s), a.layoutCalculated(i, s);
                                        }
                                    },
                                    n = () => {
                                        const t = _.current;
                                        e(), a.scrollToIndex(g * t);
                                    };
                                return (
                                    m.events.on('recalculateContent', e),
                                    m.events.on('resizeHandled', n),
                                    () => {
                                        m.events.off('recalculateContent', e), m.events.off('resizeHandled', n);
                                    }
                                );
                            }, [a, m, u, t, o, g]),
                            (0, r.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    A && m.applyScroll(Math.floor(e / A) * u + c, { immediate: t });
                                };
                                return a.events.on('scrollToIndex', e), () => a.events.off('scrollToIndex', e);
                            }, [a, u, A, c, m]),
                            i().createElement(
                                tr.Vertical.Default,
                                {
                                    api: m,
                                    className: null == s ? void 0 : s.scroll,
                                    areaClassName: null == s ? void 0 : s.areaClassName,
                                    scrollClassName: null == s ? void 0 : s.scrollClassName,
                                    scrollClassNames: {
                                        content: null == s ? void 0 : s.content,
                                        wrapper: null == s ? void 0 : s.wrapper,
                                    },
                                },
                                null !== A &&
                                    null !== v &&
                                    i().createElement(
                                        nr,
                                        {
                                            className: b()(ar, null == s ? void 0 : s.inner),
                                            paddingBottom: d,
                                            paddingTop: c,
                                            amount: e,
                                            itemsAmountPerRow: A,
                                            visibleRowsAmount: v,
                                            startRowIndex: g,
                                            cellHeight: u,
                                        },
                                        n,
                                    ),
                            )
                        );
                    },
                    ir = 'VirtualGridWithFade_scrollAreaFade_94',
                    sr = ['api', 'children', 'classNames'];
                function lr() {
                    return (
                        (lr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        lr.apply(this, arguments)
                    );
                }
                const or = (e) => {
                        let t = e.api,
                            u = e.children,
                            n = e.classNames,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, sr);
                        const s = (0, r.useState)(!0),
                            l = s[0],
                            o = s[1],
                            c = t.scrollApi;
                        return (
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    const e = c.getBounds()[1];
                                    o(Math.abs(e - c.animationScroll.scrollPosition.goal) > 0.1);
                                };
                                return (
                                    c.events.on('change', e),
                                    c.events.on('recalculateContent', e),
                                    () => {
                                        c.events.off('change', e), c.events.off('recalculateContent', e);
                                    }
                                );
                            }, [c]),
                            i().createElement(
                                rr,
                                lr(
                                    {
                                        api: t,
                                        classNames: Object.assign({}, n, {
                                            scrollClassName: b()(null == n ? void 0 : n.scrollClassName, l && ir),
                                        }),
                                    },
                                    a,
                                ),
                                u,
                            )
                        );
                    },
                    cr = 'TankmanVirtualList_grid_41',
                    dr = ({
                        amount: e,
                        paddingTop: t = 11,
                        paddingBottom: u = 11,
                        api: n,
                        classNames: a,
                        children: r,
                    }) =>
                        i().createElement(
                            or,
                            {
                                amount: e,
                                classNames: Object.assign({}, a, { content: b()(cr, null == a ? void 0 : a.content) }),
                                cellWidth: 318,
                                cellHeight: 265,
                                paddingTop: t,
                                paddingBottom: u,
                                api: n,
                            },
                            r,
                        );
                function mr(e, t, u, n = !1) {
                    const a = (0, r.useMemo)(
                        () =>
                            (function (e, t, u) {
                                return void 0 === u ? fa(e, t, !1) : fa(e, u, !1 !== t);
                            })(u, n, e),
                        t,
                    );
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                }
                const _r = ({ className: e }) => i().createElement('div', { className: b()(ia.base, e) }),
                    Er = 'JunkTankmanCard_base_f0',
                    gr = (0, G.Pi)(({ index: e, onLazyLoad: t }) => {
                        const u = Et().model.computes.getTankman(e);
                        return (
                            (0, r.useEffect)(() => {
                                u || t();
                            }, [t, u]),
                            u
                                ? i().createElement(sa, { tankman: u, className: Er })
                                : i().createElement(_r, { className: Er })
                        );
                    }),
                    fr = 'JunkTankmanList_base_8c',
                    hr = 'JunkTankmanList_gridWrapper_11',
                    Ar = 'JunkTankmanList_grid_3d',
                    pr = 'JunkTankmanList_gridInner_d2',
                    Fr = 'JunkTankmanList_confirmButtonSection_ea',
                    vr = 'JunkTankmanList_confirmButtonDivider_50',
                    br = 'JunkTankmanList_confirmButton_1c',
                    Br = (0, G.Pi)(() => {
                        const e = Et(),
                            t = e.model,
                            u = e.controls,
                            n = (() => {
                                const e = tr.Vertical.useVerticalScrollApi(),
                                    t = ga(),
                                    u = (0, r.useCallback)((e, u = !0) => t.trigger('scrollToIndex', e, u), [t]),
                                    n = (0, r.useCallback)((e, u) => t.trigger('layoutCalculated', e, u), [t]),
                                    a = (0, r.useCallback)((e) => t.trigger('startRowIndexChanged', e), [t]);
                                return (0, r.useMemo)(
                                    () => ({
                                        scrollToIndex: u,
                                        layoutCalculated: n,
                                        startRowIndexChanged: a,
                                        scrollApi: e,
                                        events: { off: t.off, on: t.on },
                                    }),
                                    [u, n, a, e, t.off, t.on],
                                );
                            })(),
                            a = ((e, t) => {
                                const u = (0, r.useRef)([0, 0]),
                                    n = (0, r.useRef)(0),
                                    a = (0, r.useRef)([0, !0]);
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = (e, t) => {
                                                u.current = [e, t];
                                            },
                                            r = (e) => {
                                                n.current = e;
                                            },
                                            i = (e) => {
                                                const t = a.current[0];
                                                a.current = [e.value.scrollPosition, t < e.value.scrollPosition];
                                            };
                                        return (
                                            t.scrollApi.events.on('change', i),
                                            t.events.on('layoutCalculated', e),
                                            t.events.on('startRowIndexChanged', r),
                                            () => {
                                                t.scrollApi.events.off('change', i),
                                                    t.events.off('layoutCalculated', e),
                                                    t.events.off('startRowIndexChanged', r);
                                            }
                                        );
                                    }, [t]),
                                    mr(
                                        () => {
                                            const t = u.current,
                                                r = t[0],
                                                i = t[1],
                                                s = n.current * r,
                                                l = r * i;
                                            e(2 * l, a.current[1] ? s : Math.max(s - 1 * l, 0));
                                        },
                                        [],
                                        10,
                                    )
                                );
                            })(u.loadCards, n);
                        return i().createElement(
                            'div',
                            { className: fr },
                            i().createElement(
                                'div',
                                { className: hr },
                                i().createElement(
                                    dr,
                                    {
                                        amount: t.itemsAmount.get(),
                                        api: n,
                                        classNames: { scroll: Ar, inner: pr },
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                    },
                                    (e) => i().createElement(gr, { key: e, index: e, onLazyLoad: a }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Fr },
                                    i().createElement('div', { className: vr }),
                                    i().createElement(
                                        pt,
                                        { size: ht.medium, type: ft.primary, onClick: u.confirm, mixClass: br },
                                        R.strings.crew.junkTankmen.confirmButton.title(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Dr = 'JunkTankmenApp_base_a5',
                    Cr = 'JunkTankmenApp_closeButton_8b',
                    wr = 'JunkTankmenApp_content_62',
                    kr = 'JunkTankmenApp_content__ready_9a',
                    yr = 'JunkTankmenApp_header_9d',
                    Sr = 'JunkTankmenApp_description_e5',
                    xr = (0, G.Pi)(() => {
                        const e = Et().controls,
                            t = (0, r.useState)(!1),
                            u = t[0],
                            n = t[1];
                        var a;
                        return (
                            (a = e.close),
                            $(H.n.ESCAPE, a),
                            ((e, t) => {
                                (0, r.useEffect)(() => {
                                    let t = null;
                                    return (
                                        (t = requestAnimationFrame(() => {
                                            t = requestAnimationFrame(() => {
                                                (t = null), e();
                                            });
                                        })),
                                        () => {
                                            null !== t && cancelAnimationFrame(t);
                                        }
                                    );
                                }, t);
                            })(() => requestAnimationFrame(() => n(!0)), []),
                            i().createElement(
                                'div',
                                { className: Dr },
                                i().createElement(tt, { onCloseClick: e.close, className: Cr }),
                                i().createElement(
                                    'div',
                                    { className: b()(wr, u && kr) },
                                    i().createElement(
                                        $e,
                                        { title: R.strings.crew.junkTankmen.title(), className: yr },
                                        i().createElement(He, {
                                            text: R.strings.crew.junkTankmen.description(),
                                            justifyContent: _e.Center,
                                            classMix: Sr,
                                        }),
                                    ),
                                    i().createElement(Br, null),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    W().render(
                        i().createElement(_t, null, i().createElement(I, null, i().createElement(xr, null))),
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
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, u, n] = deferred[l], r = !0, i = 0; i < t.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(l--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, u, n];
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
        (__webpack_require__.j = 3533),
        (() => {
            var e = { 3533: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, i, s] = u,
                        l = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var o = s(__webpack_require__);
                    }
                    for (t && t(u); l < r.length; l++)
                        (a = r[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(o);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(6541));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
