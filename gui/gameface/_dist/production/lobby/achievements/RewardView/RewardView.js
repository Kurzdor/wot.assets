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
                    t.d(u, { mouse: () => c, off: () => o, on: () => i, onResize: () => r, onScaleUpdated: () => s });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, n.R)(!0);
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
                            : (0, n.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${u}`,
                                        s = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
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
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
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
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var a = t(527),
                    n = t(2493);
                function r(e = 'px') {
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
                function n(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => n, G: () => a });
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
                t.d(u, { O: () => r });
                var a = t(5959),
                    n = t(514);
                const r = { view: t(7641), client: a, sound: n.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => s });
                var a = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, a.playSound)(n[u])), e), {}),
                    s = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var a = t(2472);
                const n = {
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
                        displayStatus: () => n.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => A,
                        getSize: () => _,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => C,
                        isFocused: () => B,
                        pxToRem: () => F,
                        remToPx: () => D,
                        resize: () => E,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => w,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
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
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
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
                function h(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    x = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const a = ['args'];
                const n = 2,
                    r = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? n : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(3138);
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
                t.d(u, { B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => F });
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
                var r = t(1358);
                var s = t(8613);
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    E = t(3138);
                const m = ['args'];
                function g(e, u, t, a, n, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, n);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                        function s(e) {
                                            g(r, a, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            g(r, a, n, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
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
                    h = () => D(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var p = t(7572);
                const C = n.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: p.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => D(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => D(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                _ = o.height,
                                m = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(_),
                                };
                            D(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: A(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, h);
                        },
                        handleViewEvent: D,
                        onBindingsReady: F,
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
                        ClickOutsideManager: C,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => a, cy: () => n });
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
                    };
            },
            9551: (e, u, t) => {
                'use strict';
                var a = t(6179),
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
                var s = t(3138);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
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
                })(o || (o = {}));
                const c = s.O.client.getSize('rem'),
                    d = c.width,
                    _ = c.height,
                    E = Object.assign({ width: d, height: _ }, l(d, _, i)),
                    m = (0, a.createContext)(E),
                    g = ['children'];
                const A = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, g);
                    const n = (0, a.useContext)(m),
                        s = n.extraLarge,
                        i = n.large,
                        o = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        _ = n.largeWidth,
                        E = n.mediumWidth,
                        A = n.smallWidth,
                        F = n.extraSmallWidth,
                        D = n.extraLargeHeight,
                        h = n.largeHeight,
                        B = n.mediumHeight,
                        p = n.smallHeight,
                        C = n.extraSmallHeight,
                        v = { extraLarge: D, large: h, medium: B, small: p, extraSmall: C };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && i) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return r(u, t, v);
                        if (t.largeWidth && _) return r(u, t, v);
                        if (t.mediumWidth && E) return r(u, t, v);
                        if (t.smallWidth && A) return r(u, t, v);
                        if (t.extraSmallWidth && F) return r(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && h) return u;
                            if (t.mediumHeight && B) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && C) return u;
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
                const F = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    D = ({ children: e }) => {
                        const u = (0, a.useContext)(m),
                            t = (0, a.useState)(u),
                            r = t[0],
                            o = t[1],
                            c = (0, a.useCallback)((e, u) => {
                                const t = s.O.view.pxToRem(e),
                                    a = s.O.view.pxToRem(u);
                                o(Object.assign({ width: t, height: a }, l(t, a, i)));
                            }, []),
                            d = (0, a.useCallback)(() => {
                                const e = s.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        F(() => {
                            s.O.client.events.on('clientResized', c), s.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    s.O.client.events.off('clientResized', c),
                                        s.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [c, d],
                            );
                        const _ = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(m.Provider, { value: _ }, e);
                    };
                var h = t(6483),
                    B = t.n(h),
                    p = t(926),
                    C = t.n(p);
                let v, b, f;
                !(function (e) {
                    (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge');
                    })(f || (f = {}));
                const x = () => {
                        const e = (0, a.useContext)(m),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return v.ExtraLarge;
                                    case e.large:
                                        return v.Large;
                                    case e.medium:
                                        return v.Medium;
                                    case e.small:
                                        return v.Small;
                                    case e.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case e.largeWidth:
                                        return b.Large;
                                    case e.mediumWidth:
                                        return b.Medium;
                                    case e.smallWidth:
                                        return b.Small;
                                    case e.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
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
                        return { mediaSize: n, mediaWidth: r, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    w = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const y = {
                        [b.ExtraSmall]: '',
                        [b.Small]: C().SMALL_WIDTH,
                        [b.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [b.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: C().SMALL_HEIGHT,
                        [f.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [f.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [v.ExtraSmall]: '',
                        [v.Small]: C().SMALL,
                        [v.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [v.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [v.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    k = (e) => {
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
                            })(e, w);
                        const r = x(),
                            s = r.mediaWidth,
                            i = r.mediaHeight,
                            o = r.mediaSize;
                        return n().createElement('div', S({ className: B()(t, y[s], T[i], O[o]) }, a), u);
                    },
                    P = ['children'];
                const L = (e) => {
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
                    return n().createElement(D, null, n().createElement(k, t, u));
                };
                var N = t(493),
                    M = t.n(N);
                function I(e) {
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
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                class G extends n().PureComponent {
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
                            s = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
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
                            E = B()(U.base, U[`base__${s}`], U[`base__${r}`], null == i ? void 0 : i.base),
                            m = B()(U.icon, U[`icon__${s}`], U[`icon__${r}`], null == i ? void 0 : i.icon),
                            g = B()(U.glow, null == i ? void 0 : i.glow),
                            A = B()(U.caption, U[`caption__${s}`], null == i ? void 0 : i.caption),
                            F = B()(U.goto, null == i ? void 0 : i.goto);
                        return n().createElement(
                            'div',
                            H(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== s && n().createElement('div', { className: U.shine }),
                            n().createElement('div', { className: m }, n().createElement('div', { className: g })),
                            n().createElement('div', { className: A }, u),
                            a && n().createElement('div', { className: F }, a),
                        );
                    }
                }
                G.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var W = t(5521),
                    q = t(9916);
                const z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function j(e = W.n.NONE, u = z, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== W.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                var Y = t(3403);
                class V extends n().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = q.B3.GOLD;
                        else e = q.B3.INTEGRAL;
                        const u = q.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                let X, K, Q, Z, J, ee, ue;
                (V.defaultProps = { format: 'integral' }),
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
                    })(X || (X = {})),
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
                    })(K || (K = {})),
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
                    })(Q || (Q = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Z || (Z = {})),
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
                    })(J || (J = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ee || (ee = {})),
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
                    })(ue || (ue = {}));
                const te = [
                        X.Items,
                        X.Equipment,
                        X.Xp,
                        X.XpFactor,
                        X.Blueprints,
                        X.BlueprintsAny,
                        X.Goodies,
                        X.Berths,
                        X.Slots,
                        X.Tokens,
                        X.CrewSkins,
                        X.CrewBooks,
                        X.Customizations,
                        X.CreditsFactor,
                        X.TankmenXp,
                        X.TankmenXpFactor,
                        X.FreeXpFactor,
                        X.BattleToken,
                        X.PremiumUniversal,
                        X.NaturalCover,
                        X.BpCoin,
                        X.BattlePassSelectToken,
                        X.BattlaPassFinalAchievement,
                        X.BattleBadge,
                        X.BonusX5,
                        X.CrewBonusX3,
                        X.NewYearInvoice,
                        X.EpicSelectToken,
                        X.Comp7TokenWeeklyReward,
                        X.DeluxeGift,
                        X.BattleBoosterGift,
                        X.OptionalDevice,
                    ],
                    ae = [X.Gold, X.Credits, X.Crystal, X.FreeXp],
                    ne = [X.BattlePassPoints, X.EquipCoin],
                    re = [X.PremiumPlus, X.Premium],
                    se = ['engravings', 'backgrounds'],
                    ie = ['engraving', 'background'],
                    oe = (e, u = Q.Small) => {
                        const t = e.name,
                            a = e.type,
                            n = e.value,
                            r = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case Q.S600x450:
                                        return 'c_600x450';
                                    case Q.S400x300:
                                        return 'c_400x300';
                                    case Q.S296x222:
                                        return 'c_296x222';
                                    case Q.S232x174:
                                        return 'c_232x174';
                                    case Q.Big:
                                        return 'c_80x80';
                                    case Q.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = se[e];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            r = n.$dyn(t);
                                        return r ? `${r}` : `${n.$dyn(ie[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${r}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    le = (e, u, t) => {
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
                    ce = [Q.Small, Q.Big];
                function de() {}
                function _e() {
                    return !1;
                }
                console.log;
                var Ee = t(9174);
                function me(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return ge(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ge(e, u);
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
                function ge(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const Ae = (e) => (0 === e ? window : window.subViews.get(e));
                function Fe(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function De(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const he = De;
                function Be(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function pe(e, u) {
                    return (function (e, u, t) {
                        const a = [];
                        for (let n = 0; n < e.length; n++) {
                            const r = he(e, n);
                            u(r, n, e) && a.push(t(r, n, e));
                        }
                        return a;
                    })(e, Fe, u);
                }
                var Ce = t(3946);
                let ve, be;
                !(function (e) {
                    (e[(e.Initial = 0)] = 'Initial'),
                        (e[(e.RewardsShown = 1)] = 'RewardsShown'),
                        (e[(e.NavigationShown = 2)] = 'NavigationShown');
                })(ve || (ve = {})),
                    (function (e) {
                        (e.DogTag = 'dogTag'), (e.Common = 'common');
                    })(be || (be = {}));
                const fe = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: i, children: o, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    d = (t, a, n) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Ae,
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
                                                const i = (e) => {
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
                                                        const o = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = s.O.view.addModelObserver(o, u, !0);
                                                        return n.set(l, t), e && t(i(r)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, u) => {
                                                        const t = i(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = i(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = me(n.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            o =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            _ = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            n = Ee.LO.box(a, { equals: _e });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Ee.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            n = Ee.LO.box(a, { equals: _e });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Ee.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const a = l(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = Ee.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Ee.aD)((u) => {
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
                                                                s = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = Ee.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Ee.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
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
                                                cleanup: d,
                                            }),
                                            E = { mode: t, model: _, externalModel: o, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === t && n ? n.controls(E) : u(E),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    _ = (0, a.useRef)(!1),
                                    E = (0, a.useState)(r),
                                    m = E[0],
                                    g = E[1],
                                    A = (0, a.useState)(() => d(r, i, l)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        _.current ? D(d(m, i, l)) : (_.current = !0);
                                    }, [l, m, i]),
                                    (0, a.useEffect)(() => {
                                        g(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    n().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    rewards: e.array('rewards'),
                                    achievements: e.array('achievements'),
                                    animationState: Ee.LO.box(ve.Initial),
                                },
                                t = (0, Ce.Om)(() =>
                                    pe(u.rewards.get(), (e) =>
                                        ((e) => {
                                            return Object.assign({}, e, {
                                                valueType:
                                                    ((u = e.name),
                                                    te.includes(u)
                                                        ? Z.MULTI
                                                        : ae.includes(u)
                                                          ? Z.CURRENCY
                                                          : ne.includes(u)
                                                            ? Z.NUMBER
                                                            : re.includes(u)
                                                              ? Z.PREMIUM_PLUS
                                                              : Z.STRING),
                                                tooltipArgs: le({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                            });
                                            var u;
                                        })(e),
                                    ),
                                ),
                                a = (0, Ce.Om)(
                                    (e) => {
                                        const u = De(t(), e);
                                        if (u) return u;
                                        throw new Error(`Unexpected reward index: ${e}`);
                                    },
                                    { equals: _e },
                                ),
                                n = (0, Ce.Om)(
                                    (e) => {
                                        const t = De(u.achievements.get(), e);
                                        if (t) return t;
                                        throw new Error(`Unexpected achievement index: ${e}`);
                                    },
                                    { equals: _e },
                                ),
                                r = (0, Ce.Om)(() =>
                                    (function (e, u) {
                                        for (let t = 0; t < e.length; t++) {
                                            const a = Be(e[t]);
                                            if (u(a, t, e)) return a;
                                        }
                                    })(u.rewards.get(), (e) => 'dogTagComponents' === e.name && 'coupled' === e.purpose)
                                        ? be.DogTag
                                        : be.Common,
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    getRewards: t,
                                    getAchievement: n,
                                    getReward: a,
                                    rewardType: r,
                                    rewardsLength: (0, Ce.Om)(() => u.rewards.get().length),
                                    isSingleReward: (0, Ce.Om)(() => 1 === u.rewards.get().length),
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => ({
                            setAnimationState: (0, Ee.aD)((e) => u.animationState.set(e)),
                            goToDogTag: e.createCallback(
                                (e, u) => ({ backgroundId: e, engravingId: u }),
                                'onGoToDogTag',
                            ),
                            openNextReward: e.createCallbackNoArgs('onOpenNextReward'),
                            goToAchievement: e.createCallback((e, u) => ({ id: e, category: u }), 'onGoToAchievement'),
                            openAchievementsPage: e.createCallbackNoArgs('onOpenAchievementsPage'),
                            close: e.createCallbackNoArgs('onClose'),
                        }),
                    ),
                    xe = fe[0],
                    we = fe[1];
                var Se = t(7030);
                const ye = {
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
                        bezier: (e, u, t, a) => (n) =>
                            (1 - n) * (1 - n) * (1 - n) * e +
                            3 * (1 - n) * (1 - n) * n * u +
                            3 * (1 - n) * n * n * t +
                            n * n * n * a,
                    },
                    Te = { duration: 400, easing: ye.easeOutBack, mass: 0.8, tension: 220, friction: 15 },
                    Re = {
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
                let Oe, ke;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Oe || (Oe = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(ke || (ke = {}));
                const Pe = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: s,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: E,
                    onMouseLeave: m,
                    onClick: g,
                }) => {
                    const A = (0, a.useRef)(null),
                        F = (0, a.useState)(t),
                        D = F[0],
                        h = F[1],
                        p = (0, a.useState)(!1),
                        C = p[0],
                        v = p[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                D && null !== A.current && !A.current.contains(e.target) && h(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [D]),
                        (0, a.useEffect)(() => {
                            h(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: A,
                                className: B()(
                                    Re.base,
                                    Re[`base__${r}`],
                                    s && Re.base__disabled,
                                    u && Re[`base__${u}`],
                                    D && Re.base__focus,
                                    C && Re.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== o && I(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    s || (E && E(e), v(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== l && I(l),
                                        _ && _(e),
                                        t && (s || (A.current && (A.current.focus(), h(!0)))),
                                        v(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (m && m(e), v(!1));
                                },
                                onClick: function (e) {
                                    s || (g && g(e));
                                },
                            },
                            r !== Oe.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Re.back }),
                                    n().createElement('span', { className: Re.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: B()(Re.state, Re.state__default) },
                                n().createElement('span', { className: Re.stateDisabled }),
                                n().createElement('span', { className: Re.stateHighlightHover }),
                                n().createElement('span', { className: Re.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: Re.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Pe.defaultProps = { type: Oe.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Le = Pe;
                t(1281);
                let Ne;
                function Me(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Ne || (Ne = {}));
                const Ie = (e) => e.replace(/&nbsp;/g, ' '),
                    Ue =
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
                        'Footer_base_21'),
                    $e = 'Footer_button_3a',
                    He = R.strings.achievements_page.rewardView.button,
                    Ge = (0, Y.Pi)(({ className: e }) => {
                        const u = we(),
                            t = u.model,
                            a = u.controls,
                            r = t.root.get(),
                            s = r.rewardsBalance,
                            i = r.isFirstEntry,
                            o = t.computes,
                            l = o.isSingleReward,
                            c = o.rewardsLength,
                            d = o.rewardType,
                            _ = t.computes.getReward(c() - 1),
                            E = _.backgroundId,
                            m = _.engravingId;
                        return n().createElement(
                            'div',
                            { className: B()(Ue, e) },
                            d() === be.DogTag &&
                                n().createElement(
                                    'div',
                                    { className: $e },
                                    n().createElement(
                                        Le,
                                        { type: Oe.primary, size: ke.medium, onClick: () => a.goToDogTag(E, m) },
                                        l() ? He.dogTag() : He.dogTags(),
                                    ),
                                ),
                            s
                                ? n().createElement(
                                      'div',
                                      { className: $e },
                                      n().createElement(
                                          Le,
                                          { type: Oe.secondary, size: ke.medium, onClick: a.openNextReward },
                                          Me(He.moreRewards(), { value: s }),
                                      ),
                                  )
                                : i &&
                                      n().createElement(
                                          'div',
                                          { className: $e },
                                          n().createElement(
                                              Le,
                                              {
                                                  type: Oe.secondary,
                                                  size: ke.medium,
                                                  onClick: () => a.openAchievementsPage(),
                                              },
                                              He.achievements(),
                                          ),
                                      ),
                        );
                    }),
                    We = [
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
                function qe(e) {
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
                const ze = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: q.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    je = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            E = e.decoratorId,
                            m = void 0 === E ? 0 : E,
                            g = e.isEnabled,
                            A = void 0 === g || g,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            h = e.onShow,
                            B = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, We);
                        const C = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
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
                            b = (0, a.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (ze(t, m, { isMouseEvent: !0, on: !0, arguments: qe(n) }, v),
                                    h && h(),
                                    (C.current.isVisible = !0));
                            }, [t, m, n, v, h]),
                            f = (0, a.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        ze(t, m, { on: !1 }, v),
                                        C.current.isVisible && B && B(),
                                        (C.current.isVisible = !1);
                                }
                            }, [t, m, v, B]),
                            x = (0, a.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(C.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === A && f();
                            }, [A, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
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
                                                      ((C.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                      r && r(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              f(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === _ && f(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === _ && f(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var w;
                    },
                    Ye = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const Xe = R.views.common.tooltip_window.simple_tooltip_content,
                    Ke = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            s = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Ye);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: r, note: s, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, r, s, o]);
                        return n().createElement(
                            je,
                            Ve(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? Xe.SimpleTooltipHtmlContent('resId') : Xe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    Qe = (e) => {
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
                    Ze = 'TextOverflow_base_3b',
                    Je = ['content', 'classMix', 'className'];
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                const uu = (e) => {
                    let u = e.content,
                        t = e.classMix,
                        r = e.className,
                        s = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, Je);
                    const i = (0, a.useRef)(null),
                        o = (0, a.useState)(!0),
                        l = o[0],
                        c = o[1];
                    return (
                        (0, a.useEffect)(() =>
                            Qe(() => {
                                const e = i.current;
                                e && e.offsetWidth >= e.scrollWidth && c(!1);
                            }),
                        ),
                        n().createElement(
                            Ke,
                            { isEnabled: l, body: u },
                            n().createElement('div', eu({}, s, { ref: i, className: B()(Ze, r, t) }), u),
                        )
                    );
                };
                let tu, au, nu, ru, su, iu;
                !(function (e) {
                    (e.Circular = 'circular'), (e.Shield = 'shield');
                })(tu || (tu = {})),
                    (function (e) {
                        (e.S100x100 = 's100x100'),
                            (e.S128x128 = 's128x128'),
                            (e.S180x180 = 's180x180'),
                            (e.S280x280 = 's280x280'),
                            (e.S360x360 = 's360x360'),
                            (e.S420x420 = 's420x420'),
                            (e.Flexable = 'flexable');
                    })(au || (au = {})),
                    (function (e) {
                        (e.s52x44 = 's52x44'),
                            (e.s68x56 = 's68x56'),
                            (e.s94x80 = 's94x80'),
                            (e.s144x116 = 's144x116'),
                            (e.s218x176 = 's218x176'),
                            (e.s54x60 = 's54x60'),
                            (e.s68x76 = 's68x76'),
                            (e.s94x108 = 's94x108'),
                            (e.s148x168 = 's148x168'),
                            (e.s192x216 = 's192x216'),
                            (e.s228x256 = 's228x256');
                    })(nu || (nu = {})),
                    (function (e) {
                        (e.Single = 'single'),
                            (e.Cumulative = 'cumulative'),
                            (e.Staged = 'staged'),
                            (e.Subcategory = 'subcategory'),
                            (e.Category = 'Category');
                    })(ru || (ru = {})),
                    (function (e) {
                        (e.Top = 'top'), (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(su || (su = {})),
                    (function (e) {
                        (e.Default = ''), (e.PersonalMissions = 'personal_missions');
                    })(iu || (iu = {}));
                const ou = {
                    base: 'AdvancedAchievement_base_03',
                    base__s100x100: 'AdvancedAchievement_base__s100x100_52',
                    base__s128x128: 'AdvancedAchievement_base__s128x128_d3',
                    base__s180x180: 'AdvancedAchievement_base__s180x180_10',
                    base__s280x280: 'AdvancedAchievement_base__s280x280_ac',
                    base__s360x360: 'AdvancedAchievement_base__s360x360_c6',
                    base__s420x420: 'AdvancedAchievement_base__s420x420_8a',
                    base__flexable: 'AdvancedAchievement_base__flexable_4f',
                    background: 'AdvancedAchievement_background_cf',
                    border: 'AdvancedAchievement_border_5d',
                    icon: 'AdvancedAchievement_icon_bb',
                    base__shield: 'AdvancedAchievement_base__shield_68',
                    icon__bottom: 'AdvancedAchievement_icon__bottom_57',
                    base__circular: 'AdvancedAchievement_base__circular_2d',
                    icon__top: 'AdvancedAchievement_icon__top_2d',
                    stage: 'AdvancedAchievement_stage_fa',
                };
                let lu;
                !(function (e) {
                    (e.Single = 'single'), (e.Cumulative = 'cumulative'), (e.Staged = 'staged');
                })(lu || (lu = {}));
                const cu = R.images.gui.maps.icons.advanced_achievements,
                    du = { [lu.Single]: tu.Circular, [lu.Staged]: tu.Circular, [lu.Cumulative]: tu.Shield },
                    _u = {
                        [au.S100x100]: nu.s52x44,
                        [au.S128x128]: nu.s68x56,
                        [au.S180x180]: nu.s94x80,
                        [au.S280x280]: nu.s144x116,
                        [au.S360x360]: nu.s218x176,
                        [au.S420x420]: nu.s218x176,
                        [au.Flexable]: nu.s218x176,
                    },
                    Eu = {
                        [au.S100x100]: nu.s54x60,
                        [au.S128x128]: nu.s68x76,
                        [au.S180x180]: nu.s94x108,
                        [au.S280x280]: nu.s148x168,
                        [au.S360x360]: nu.s192x216,
                        [au.S420x420]: nu.s228x256,
                        [au.Flexable]: nu.s228x256,
                    },
                    mu = (e, u, t, a) => {
                        switch (e) {
                            case tu.Shield:
                                return { backgroundImage: `url(${cu.borders.shield.$dyn(`tier_${a}_${u}`)})` };
                            case tu.Circular:
                            default:
                                return {
                                    backgroundImage: `url(${cu.borders.circular.$dyn(t ? `circular_trophy_${u}` : `circular_${u}`)})`,
                                };
                        }
                    },
                    gu = (e, u, t, a) => {
                        switch (e) {
                            case tu.Shield:
                                return { backgroundImage: `url(${cu.backgrounds.shield.$dyn(`${a}_${u}`)})` };
                            case tu.Circular:
                            default:
                                return {
                                    backgroundImage: `url(${cu.backgrounds.circular.$dyn(t ? `trophy_${u}` : `${a}_${u}`)})`,
                                };
                        }
                    },
                    Au = (e, u, t, a, n, r) => {
                        const s = t ? '_trophy' : '',
                            i = e === tu.Shield ? `_tier_${n}` : '',
                            o = ((e) => (e === iu.PersonalMissions ? Eu : _u))(r),
                            l = o[u],
                            c = ((e, u) => {
                                if (u === au.S360x360 && e === nu.s218x176) return { width: 188, height: 150 };
                                const t = e.substring(1).split('x');
                                return { width: t[0], height: t[1] };
                            })(l, u),
                            d = c.width,
                            _ = c.height,
                            E = cu.icons.$dyn(`${a}${s}${i}_${l}`);
                        return E
                            ? { backgroundImage: `url(${E})`, width: `${d}rem`, height: `${_}rem` }
                            : { width: `${d}rem`, height: `${_}rem` };
                    },
                    Fu = ({
                        keyName: e,
                        type: u,
                        backgroundName: t,
                        size: a = au.S180x180,
                        level: r = 0,
                        stage: s = 0,
                        isTrophy: i = !1,
                        iconPosition: o = su.Center,
                        iconSizeMap: l = iu.Default,
                        classNames: c,
                    }) => {
                        const d = du[u] || tu.Circular,
                            _ = a === au.Flexable ? au.S420x420 : a;
                        return n().createElement(
                            'div',
                            {
                                className: B()(
                                    ou.base,
                                    ou[`base__${a}`],
                                    ou[`base__${d}`],
                                    null == c ? void 0 : c.base,
                                ),
                            },
                            n().createElement('div', {
                                className: B()(ou.background, null == c ? void 0 : c.background),
                                style: gu(d, _, i, t),
                            }),
                            n().createElement('div', {
                                className: B()(ou.border, null == c ? void 0 : c.border),
                                style: mu(d, _, i, r),
                            }),
                            n().createElement('div', {
                                className: B()(
                                    ou.icon,
                                    ou[`icon__${o}`],
                                    ou[`icon__${((E = l), E.replace(/_\w/g, (e) => e[1].toUpperCase()))}`],
                                    null == c ? void 0 : c.icon,
                                ),
                                style: Au(d, a, i, e, r, l),
                            }),
                            u === lu.Staged &&
                                Boolean(s) &&
                                n().createElement(
                                    'div',
                                    {
                                        className: B()(ou.stage, null == c ? void 0 : c.stage),
                                        lang: R.strings.settings.LANGUAGE_CODE(),
                                    },
                                    s,
                                ),
                        );
                        var E;
                    },
                    Du = {
                        base: 'Category_base_94',
                        base__s100x100: 'Category_base__s100x100_92',
                        base__s128x128: 'Category_base__s128x128_d0',
                        base__s180x180: 'Category_base__s180x180_c5',
                        base__s280x280: 'Category_base__s280x280_36',
                        base__s360x360: 'Category_base__s360x360_a7',
                        base__s420x420: 'Category_base__s420x420_bd',
                        base__flexable: 'Category_base__flexable_b6',
                        background: 'Category_background_16',
                        border: 'Category_border_14',
                        icon: 'Category_icon_69',
                    };
                let hu, Bu;
                !(function (e) {
                    (e.S100x100 = 's100x100'),
                        (e.S128x128 = 's128x128'),
                        (e.S180x180 = 's180x180'),
                        (e.S280x280 = 's280x280'),
                        (e.S360x360 = 's360x360'),
                        (e.S420x420 = 's420x420'),
                        (e.Flexable = 'flexable');
                })(hu || (hu = {})),
                    (function (e) {
                        (e.s54x68 = 's54x68'),
                            (e.s68x82 = 's68x82'),
                            (e.s100x118 = 's100x118'),
                            (e.s156x182 = 's156x182'),
                            (e.s200x236 = 's200x236'),
                            (e.s250x278 = 's250x278');
                    })(Bu || (Bu = {}));
                const pu = R.images.gui.maps.icons.advanced_achievements,
                    Cu = {
                        [hu.S100x100]: Bu.s54x68,
                        [hu.S128x128]: Bu.s68x82,
                        [hu.S180x180]: Bu.s100x118,
                        [hu.S280x280]: Bu.s156x182,
                        [hu.S360x360]: Bu.s200x236,
                        [hu.S420x420]: Bu.s250x278,
                    },
                    vu = ({
                        keyName: e,
                        backgroundName: u,
                        size: t = hu.S280x280,
                        level: a = 0,
                        isTrophy: r = !1,
                        classNames: s,
                    }) => {
                        const i = t === hu.Flexable ? hu.S420x420 : t;
                        return n().createElement(
                            'div',
                            { className: B()(Du.base, Du[`base__${t}`], null == s ? void 0 : s.base) },
                            n().createElement('div', {
                                className: B()(Du.background, null == s ? void 0 : s.background),
                                style: { backgroundImage: `url(${pu.backgrounds.category.$dyn(`${u}_${i}`)})` },
                            }),
                            n().createElement('div', {
                                className: B()(Du.border, null == s ? void 0 : s.border),
                                style: {
                                    backgroundImage: `url(${pu.borders.category.$dyn(r ? `trophy_${i}` : `tier_${a}_${i}`)})`,
                                },
                            }),
                            n().createElement('div', {
                                className: B()(Du.icon, null == s ? void 0 : s.icon),
                                style: { backgroundImage: `url(${pu.icons.category.$dyn(`${e}_${a}_${Cu[i]}`)})` },
                            }),
                        );
                    },
                    bu = {
                        base: 'Subcategory_base_7c',
                        base__s100x100: 'Subcategory_base__s100x100_23',
                        base__s128x128: 'Subcategory_base__s128x128_f2',
                        base__s180x180: 'Subcategory_base__s180x180_84',
                        base__s280x280: 'Subcategory_base__s280x280_eb',
                        base__s360x360: 'Subcategory_base__s360x360_dc',
                        base__s420x420: 'Subcategory_base__s420x420_1e',
                        base__s480x480: 'Subcategory_base__s480x480_2a',
                        base__flexable: 'Subcategory_base__flexable_06',
                        background: 'Subcategory_background_68',
                        border: 'Subcategory_border_74',
                        icon: 'Subcategory_icon_17',
                    };
                let fu, xu;
                !(function (e) {
                    (e.S100x100 = 's100x100'),
                        (e.S128x128 = 's128x128'),
                        (e.S180x180 = 's180x180'),
                        (e.S280x280 = 's280x280'),
                        (e.S360x360 = 's360x360'),
                        (e.S420x420 = 's420x420'),
                        (e.S480x480 = 's480x480'),
                        (e.Flexable = 'flexable');
                })(fu || (fu = {})),
                    (function (e) {
                        (e.s52x62 = 's52x62'),
                            (e.s68x72 = 's68x72'),
                            (e.s94x94 = 's94x94'),
                            (e.s144x140 = 's144x140'),
                            (e.s188x176 = 's188x176'),
                            (e.s218x212 = 's218x212'),
                            (e.s250x198 = 's250x198');
                    })(xu || (xu = {}));
                const wu = R.images.gui.maps.icons.advanced_achievements,
                    Su = {
                        [fu.S100x100]: xu.s52x62,
                        [fu.S128x128]: xu.s68x72,
                        [fu.S180x180]: xu.s94x94,
                        [fu.S280x280]: xu.s144x140,
                        [fu.S360x360]: xu.s188x176,
                        [fu.S420x420]: xu.s218x212,
                        [fu.S480x480]: xu.s250x198,
                    },
                    yu = ({
                        keyName: e,
                        backgroundName: u,
                        size: t = fu.S280x280,
                        level: a = 0,
                        isTrophy: r = !1,
                        classNames: s,
                    }) => {
                        const i = t === fu.Flexable ? fu.S480x480 : t;
                        return n().createElement(
                            'div',
                            { className: B()(bu.base, bu[`base__${t}`], null == s ? void 0 : s.base) },
                            n().createElement('div', {
                                className: B()(bu.background, null == s ? void 0 : s.background),
                                style: { backgroundImage: `url(${wu.backgrounds.subcategory.$dyn(`${u}_${i}`)})` },
                            }),
                            n().createElement('div', {
                                className: B()(bu.border, null == s ? void 0 : s.border),
                                style: {
                                    backgroundImage: `url(${wu.borders.subcategory.$dyn(r ? `trophy_${i}` : `tier_${a}_${i}`)})`,
                                },
                            }),
                            n().createElement('div', {
                                className: B()(bu.icon, null == s ? void 0 : s.icon),
                                style: { backgroundImage: `url(${wu.icons.subcategory.$dyn(`${e}_${a}_${Su[i]}`)})` },
                            }),
                        );
                    },
                    Tu = { [ru.Single]: lu.Single, [ru.Staged]: lu.Staged, [ru.Cumulative]: lu.Cumulative },
                    Ru = ({
                        keyName: e,
                        type: u,
                        backgroundName: t,
                        size: a,
                        level: r,
                        stage: s,
                        isTrophy: i,
                        iconPosition: o,
                        iconSizeMap: l,
                        classNames: c,
                    }) => {
                        switch (u) {
                            case ru.Category:
                                return n().createElement(vu, {
                                    keyName: e,
                                    backgroundName: t,
                                    size: a,
                                    level: r,
                                    isTrophy: i,
                                    classNames: c,
                                });
                            case ru.Subcategory:
                                return n().createElement(yu, {
                                    keyName: e,
                                    backgroundName: t,
                                    size: a,
                                    level: r,
                                    isTrophy: i,
                                    classNames: c,
                                });
                            case ru.Single:
                            case ru.Staged:
                            case ru.Cumulative:
                                return n().createElement(Fu, {
                                    keyName: e,
                                    type: Tu[u],
                                    backgroundName: t,
                                    size: a,
                                    level: r,
                                    stage: s,
                                    isTrophy: i,
                                    iconPosition: o,
                                    iconSizeMap: l,
                                    classNames: c,
                                });
                            default:
                                return console.warn(`Unreachable code for type '${u}' in AchievementResolver.`), null;
                        }
                    };
                let Ou;
                !(function (e) {
                    (e[(e.Default = 0)] = 'Default'),
                        (e[(e.First = 1)] = 'First'),
                        (e[(e.Second = 2)] = 'Second'),
                        (e[(e.Third = 3)] = 'Third');
                })(Ou || (Ou = {}));
                const ku = (e, u, t, a = !1) =>
                        e !== ru.Staged || !u || a
                            ? Ie(t)
                            : Ie(
                                  Me(R.strings.advanced_achievements.steppedAchievementTitle(), {
                                      achievementName: t,
                                      stage: u,
                                  }),
                              ),
                    Pu = 'AchievementWidget_base_69',
                    Lu = 'AchievementWidget_achievement_76',
                    Nu = 'AchievementWidget_iconCheck_06',
                    Mu = R.strings.advanced_achievements,
                    Iu = (0, Y.Pi)(({ index: e, className: u }) => {
                        const t = we(),
                            r = t.model,
                            s = t.controls,
                            i = x().mediaSize,
                            o = (0, r.computes.getAchievement)(e),
                            l = o.id,
                            c = o.category,
                            d = o.key,
                            _ = o.background,
                            E = o.type,
                            m = o.isTrophy,
                            g = o.stage,
                            A = o.iconPosition,
                            F = o.iconSizeMap,
                            D = (() => {
                                const e = (0, a.useState)(viewEnv.getClientSizePx().width),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => t(viewEnv.getClientSizePx().width);
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    { currentWidth: u }
                                );
                            })(),
                            h = D.currentWidth;
                        return n().createElement(
                            'div',
                            {
                                className: B()(Pu, u),
                                onClick: () => {
                                    s.goToAchievement(l, c);
                                },
                            },
                            n().createElement(Ru, {
                                keyName: d,
                                backgroundName: _,
                                type: E,
                                size: i < v.ExtraLarge ? au.S100x100 : au.S128x128,
                                isTrophy: m,
                                stage: g,
                                iconPosition: A,
                                iconSizeMap: F,
                                classNames: { base: Lu },
                            }),
                            n().createElement('div', { className: Nu }),
                            n().createElement(uu, { key: h, content: ku(E, g, Mu.name.$dyn(d)) }),
                        );
                    }),
                    Uu = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(a);
                        };
                    },
                    $u = ['children'];
                function Hu() {
                    return (
                        (Hu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Hu.apply(this, arguments)
                    );
                }
                const Gu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, $u);
                    return n().createElement(
                        je,
                        Hu(
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
                function Wu() {
                    return (
                        (Wu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Wu.apply(this, arguments)
                    );
                }
                const qu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = n().createElement('div', { className: t }, e);
                        if (u.header || u.body) return n().createElement(Ke, u, a);
                        const r = u.contentId;
                        return r ? n().createElement(je, Wu({}, u, { contentId: r }), a) : n().createElement(Gu, u, a);
                    },
                    zu = {
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
                    ju = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = Q.Big,
                        special: r,
                        value: s,
                        valueType: i,
                        style: o,
                        className: l,
                        classNames: c,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const E = ((e, u) => {
                                if (void 0 === u || !ce.includes(e)) return null;
                                switch (u) {
                                    case J.BATTLE_BOOSTER:
                                    case J.BATTLE_BOOSTER_REPLACE:
                                        return ee.BATTLE_BOOSTER;
                                }
                            })(a, r),
                            m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case J.BATTLE_BOOSTER:
                                        return ue.BATTLE_BOOSTER;
                                    case J.BATTLE_BOOSTER_REPLACE:
                                        return ue.BATTLE_BOOSTER_REPLACE;
                                    case J.BUILT_IN_EQUIPMENT:
                                        return ue.BUILT_IN_EQUIPMENT;
                                    case J.EQUIPMENT_PLUS:
                                        return ue.EQUIPMENT_PLUS;
                                    case J.EQUIPMENT_TROPHY_BASIC:
                                        return ue.EQUIPMENT_TROPHY_BASIC;
                                    case J.EQUIPMENT_TROPHY_UPGRADED:
                                        return ue.EQUIPMENT_TROPHY_UPGRADED;
                                    case J.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ue.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case J.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ue.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case J.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ue.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case J.PROGRESSION_STYLE_UPGRADED_1:
                                        return ue.PROGRESSION_STYLE_UPGRADED_1;
                                    case J.PROGRESSION_STYLE_UPGRADED_2:
                                        return ue.PROGRESSION_STYLE_UPGRADED_2;
                                    case J.PROGRESSION_STYLE_UPGRADED_3:
                                        return ue.PROGRESSION_STYLE_UPGRADED_3;
                                    case J.PROGRESSION_STYLE_UPGRADED_4:
                                        return ue.PROGRESSION_STYLE_UPGRADED_4;
                                    case J.PROGRESSION_STYLE_UPGRADED_5:
                                        return ue.PROGRESSION_STYLE_UPGRADED_5;
                                    case J.PROGRESSION_STYLE_UPGRADED_6:
                                        return ue.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(r),
                            g = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Z.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Z.CURRENCY:
                                    case Z.NUMBER:
                                        return n().createElement(V, { format: 'integral', value: Number(e) });
                                    case Z.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, i);
                        return n().createElement(
                            'div',
                            { className: B()(zu.base, zu[`base__${a}`], l), style: o },
                            n().createElement(
                                qu,
                                { tooltipArgs: d, className: zu.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: B()(zu.image, null == c ? void 0 : c.image) },
                                        E &&
                                            n().createElement('div', {
                                                className: B()(zu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${E}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            n().createElement('div', {
                                                className: B()(zu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        m &&
                                            n().createElement('div', {
                                                className: B()(zu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${m}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    zu.info,
                                                    zu[`info__${e}`],
                                                    i === Z.MULTI && zu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            t &&
                                n().createElement(
                                    qu,
                                    { tooltipArgs: _ },
                                    n().createElement('div', {
                                        className: B()(zu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var Yu = t(5959);
                var Vu = t(6112);
                const Xu = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function Ku() {
                    return (
                        (Ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ku.apply(this, arguments)
                    );
                }
                const Qu = (0, a.forwardRef)(function (e, u) {
                        let t = e.src,
                            r = e.className,
                            i = e.autoplay,
                            o = void 0 !== i && i,
                            l = e.style,
                            c = e.loop,
                            d = void 0 !== c && c,
                            _ = e.isPrebufferKeyframes,
                            E = e.keyframesNameConfig,
                            m = e.onClick,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Xu);
                        const A = u,
                            F = (0, a.useRef)(null);
                        var D;
                        return (
                            (D = () =>
                                s.O.view.events.onDisplayChanged((e, u) => {
                                    var t, a;
                                    u === Vu.W.hidden && (null == (t = F.current) || t.pause()),
                                        u === Vu.W.shown && (null == (a = F.current) || a.play());
                                })),
                            (0, a.useEffect)(D, []),
                            (0, a.useEffect)(
                                () =>
                                    Qe(() => {
                                        const e = F.current;
                                        if (!A || !e || !_)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const u = e.cohGetKeyframeTimestamps();
                                        u.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              u.map((u) => {
                                                  null == e || e.cohPrebufferKeyframe(u);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [_, A],
                            ),
                            (0, a.useEffect)(() => {
                                if (A && F.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: de,
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
                                                    if (F.current) {
                                                        const t = F.current,
                                                            a = t.currentTime,
                                                            n = t.duration;
                                                        if (
                                                            (u !== a &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: a, duration: n }),
                                                                ),
                                                                (u = a)),
                                                            F.current.paused || !A || !_)
                                                        )
                                                            return;
                                                        const r = F.current.cohGetKeyframeTimestamps();
                                                        r.forEach((u, t) => {
                                                            a > r[t] - 0.02 &&
                                                                a < r[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const a = Object.keys(null != E ? E : {})[t];
                                                                    return e({
                                                                        time: u,
                                                                        name: `${E ? a : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                a = t[0],
                                                n = t[1];
                                            return a(), n;
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
                                        n = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.currentTime;
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.duration;
                                        },
                                        s = (e) => {
                                            var u, t, a;
                                            F.current &&
                                                (F.current.currentTime =
                                                    ((u = 0),
                                                    (t = F.current.duration),
                                                    (a = e) < u ? u : a > t ? t : a));
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.play();
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            o(), s(0);
                                        },
                                        c = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = F.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            s(e), i();
                                        },
                                        m = (e) => {
                                            s(e), o();
                                        },
                                        g = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        D = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = F.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = F.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        h = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = F.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = F.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        };
                                    return (
                                        (A.current = {
                                            on: D,
                                            off: h,
                                            play: i,
                                            pause: o,
                                            stop: l,
                                            cleanup: g,
                                            getCurrentTime: n,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: d,
                                            goToAndStop: m,
                                            setCurrentTime: s,
                                            domRef: F.current,
                                            onChangeTime: t,
                                            onKeyframes: a,
                                        }),
                                        () => {
                                            g(), (A.current = null);
                                        }
                                    );
                                }
                            }, [E, A, _]),
                            (0, a.useEffect)(() => {
                                F.current && o && F.current.play();
                            }, [o, d]),
                            (0, a.useEffect)(() => {
                                if (F.current)
                                    return () => {
                                        F.current && F.current.pause();
                                    };
                            }, []),
                            n().createElement(
                                'video',
                                Ku({ src: t, className: r, style: l, loop: d, ref: F, onClick: m }, g),
                            )
                        );
                    }),
                    Zu = (0, a.memo)(Qu),
                    Ju = 'DogTag_base_2b',
                    et = 'DogTag_engraving_eb',
                    ut = 'DogTag_background_7f',
                    tt = R.strings.settings.LANGUAGE_CODE(),
                    at = ['de', 'es', 'fr', 'hu', 'it', 'pl', 'pt_br', 'ru', 'tr', 'uk', 'zh_cn', 'cs'];
                let nt;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(nt || (nt = {}));
                const rt = ({ background: e, engraving: u, size: t = nt.Big, grade: a = 0, className: r }) => {
                        const s = at.includes(tt) ? `_${tt}` : '';
                        return n().createElement(
                            'div',
                            { className: B()(Ju, r) },
                            n().createElement('div', {
                                className: ut,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.dogtags.${t}.backgrounds.background_${e}_0)`,
                                },
                            }),
                            n().createElement('div', {
                                className: et,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.dogtags.${t}.engravings.engraving_${u}_${a}${s})`,
                                },
                            }),
                        );
                    },
                    st = {
                        base: 'AnimatedDogTag_base_9e',
                        base__small: 'AnimatedDogTag_base__small_ce',
                        base__medium: 'AnimatedDogTag_base__medium_13',
                        base__large: 'AnimatedDogTag_base__large_04',
                        shadow: 'AnimatedDogTag_shadow_24',
                        backplateBox: 'AnimatedDogTag_backplateBox_a8',
                        backplate: 'AnimatedDogTag_backplate_2d',
                        base__extraSmall: 'AnimatedDogTag_base__extraSmall_64',
                        dogTag: 'AnimatedDogTag_dogTag_34',
                        videoBox: 'AnimatedDogTag_videoBox_10',
                        video: 'AnimatedDogTag_video_e4',
                    },
                    it = {
                        base: 'Counter_base_29',
                        base__extraSmall: 'Counter_base__extraSmall_f8',
                        text: 'Counter_text_73',
                        base__medium: 'Counter_base__medium_78',
                        base__large: 'Counter_base__large_88',
                        count: 'Counter_count_ee',
                        base__small: 'Counter_base__small_52',
                    };
                let ot;
                !(function (e) {
                    (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
                })(ot || (ot = {}));
                const lt = ({ engraving: e, count: u, size: t }) => {
                    const a = R.strings.dogtags.component.engraving.coupled.$num(e).counter();
                    return n().createElement(
                        'div',
                        { className: B()(it.base, it[`base__${t}`]) },
                        n().createElement('div', { className: it.text }, a),
                        n().createElement('div', { className: it.count }, u),
                    );
                };
                let ct, dt;
                !(function (e) {
                    (e.Static = 'static'),
                        (e.Intro = 'intro'),
                        (e.AutoShowing = 'autoShowing'),
                        (e.Showing = 'showing'),
                        (e.Loop = 'loop'),
                        (e.Hiding = 'hiding');
                })(ct || (ct = {})),
                    (function (e) {
                        (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
                    })(dt || (dt = {}));
                const _t = { duration: 500, easing: ye.easeOutBack },
                    Et = {
                        [dt.ExtraSmall]: ot.ExtraSmall,
                        [dt.Small]: ot.Small,
                        [dt.Medium]: ot.Medium,
                        [dt.Large]: ot.Large,
                    },
                    mt = { [dt.ExtraSmall]: 'small', [dt.Small]: 'big', [dt.Medium]: 'big', [dt.Large]: 's500x300' },
                    gt = {
                        vehicle_sparks_1: 'ach_dog_tag_animation_01',
                        vehicle_sparks_2: 'ach_dog_tag_animation_02',
                        vehicle_sparks_3: 'ach_dog_tag_animation_03',
                    },
                    At = ({
                        background: e,
                        engraving: u,
                        progress: t = 0,
                        animationState: r = ct.Static,
                        animationName: s = '',
                        onAnimationEnd: i,
                        grade: o = 0,
                        showBackplate: l = !0,
                        size: c = dt.Medium,
                        className: d,
                        isSoundOff: _,
                    }) => {
                        const E = (0, a.useRef)(null),
                            m = (0, a.useState)([]),
                            g = m[0],
                            A = m[1],
                            F = R.videos.dogtags.$dyn(s);
                        (0, a.useEffect)(() => {
                            const e = E.current;
                            if (e)
                                return Qe(() => {
                                    A(e.getCachedKeyframes());
                                });
                        }, [E]);
                        const D = (0, Se.useSpring)(() => ({ from: { opacity: 0 }, config: _t }), [r]),
                            h = D[0],
                            p = D[1],
                            C = (0, Se.useSpring)(() => ({
                                from: { opacity: 0, transform: 'translateY(-50%)' },
                                config: _t,
                                onRest: () => {
                                    r === ct.Hiding && (null == i || i());
                                },
                            })),
                            v = C[0],
                            b = C[1],
                            f = (0, a.useCallback)(() => {
                                var e;
                                null == (e = E.current) || e.play(),
                                    b.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !1 }),
                                    !_ && I(R.sounds.$dyn(gt[s]));
                            }, [s, b, _]);
                        (0, a.useEffect)(
                            () =>
                                Qe(() => {
                                    switch (r) {
                                        case ct.Intro:
                                            return void p.start({ to: { opacity: 1 }, immediate: !1 });
                                        case ct.AutoShowing:
                                            return p.start({ to: { opacity: 1 }, immediate: !1 }), void f();
                                        case ct.Showing:
                                            return void f();
                                        case ct.Loop:
                                            return (
                                                x(),
                                                p.start({ to: { opacity: 1 }, immediate: !0 }),
                                                void b.start({
                                                    to: { opacity: 1, transform: 'translateY(0%)' },
                                                    immediate: !0,
                                                })
                                            );
                                        case ct.Hiding:
                                            return (
                                                p.start({ to: { opacity: 0 } }),
                                                void b.start({
                                                    to: { opacity: 0, transform: 'translateY(-50%)' },
                                                    immediate: !1,
                                                })
                                            );
                                        case ct.Static:
                                            p.start({ to: { opacity: 1 }, immediate: !0 }),
                                                b.start({
                                                    to: { opacity: 1, transform: 'translateY(0%)' },
                                                    immediate: !0,
                                                });
                                    }
                                }),
                            [r, b, p, f],
                        );
                        const x = () => {
                            E.current && (E.current.goToAndPlay(5), I(R.sounds.ach_dog_tag_idle()));
                        };
                        return n().createElement(
                            Se.animated.div,
                            { className: B()(st.base, st[`base__${c}`], d), style: h },
                            l &&
                                n().createElement(
                                    Se.animated.div,
                                    { className: st.backplateBox, style: v },
                                    n().createElement(
                                        'div',
                                        {
                                            className: st.backplate,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${mt[c]}.bottom_plates.bottom_plate_${e})`,
                                            },
                                        },
                                        n().createElement(lt, { engraving: u, count: t, size: Et[c] }),
                                    ),
                                ),
                            n().createElement('div', { className: st.shadow }),
                            r !== ct.Static &&
                                Yu.graphicsQuality.isHigh() &&
                                Boolean(F) &&
                                n().createElement(
                                    'div',
                                    { className: st.videoBox },
                                    n().createElement(Zu, {
                                        ref: E,
                                        className: st.video,
                                        onEnded: x,
                                        isPrebufferKeyframes: Boolean(g.length),
                                        src: F,
                                    }),
                                ),
                            n().createElement(rt, {
                                background: e,
                                engraving: u,
                                grade: o,
                                size: nt.Big,
                                className: st.dogTag,
                            }),
                        );
                    },
                    Ft = (e) =>
                        e
                            ? {
                                  [v.ExtraSmall]: dt.Small,
                                  [v.Small]: dt.Small,
                                  [v.Medium]: dt.Medium,
                                  [v.Large]: dt.Medium,
                                  [v.ExtraLarge]: dt.Large,
                              }
                            : {
                                  [v.ExtraSmall]: dt.ExtraSmall,
                                  [v.Small]: dt.ExtraSmall,
                                  [v.Medium]: dt.Small,
                                  [v.Large]: dt.Small,
                                  [v.ExtraLarge]: dt.Medium,
                              },
                    Dt = (0, Y.Pi)(({ index: e, delay: u, className: t }) => {
                        const r = we().model,
                            s = x().mediaSize,
                            i = r.computes,
                            o = i.getReward,
                            l = i.isSingleReward,
                            c = o(e),
                            d = c.backgroundId,
                            _ = c.engravingId,
                            E = c.currentProgress,
                            m = c.animation,
                            g = c.tooltipArgs,
                            A = (0, a.useState)(ct.Intro),
                            F = A[0],
                            D = A[1];
                        return (
                            (0, a.useEffect)(
                                () =>
                                    Uu(() => {
                                        D(ct.Showing);
                                    }, u),
                                [u],
                            ),
                            n().createElement(
                                qu,
                                { tooltipArgs: g },
                                n().createElement(
                                    'div',
                                    { className: t },
                                    n().createElement(At, {
                                        background: d,
                                        engraving: _,
                                        progress: E,
                                        size: Ft(l())[s],
                                        animationState: F,
                                        animationName: m,
                                    }),
                                ),
                            )
                        );
                    }),
                    ht = 'RewardResolver_image_88';
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
                const pt = (0, Y.Pi)(({ index: e, delay: u, className: t }) => {
                        const a = we().model.computes,
                            r = a.getReward,
                            s = a.rewardType,
                            i = r(e);
                        return n().createElement(
                            'div',
                            { className: t },
                            s() === be.DogTag
                                ? n().createElement(Dt, { index: e, delay: u })
                                : n().createElement(
                                      ju,
                                      Bt({}, i, {
                                          size: Q.S232x174,
                                          image: oe(i, Q.S232x174),
                                          classNames: { image: ht },
                                      }),
                                  ),
                        );
                    }),
                    Ct = { inner: 'MultiRewardItem_inner_f2' },
                    vt = 4e3,
                    bt = (e, u, t) => (1 === e ? 0 : -(u - e / 2 + 0.5) * t),
                    ft = (0, Y.Pi)(({ index: e, isBright: u, onStartLastItem: t, className: r }) => {
                        const s = we(),
                            i = s.model,
                            o = s.controls,
                            l = i.computes.rewardsLength,
                            c = (0, Se.useSpring)(() => ({
                                from: { opacity: 0, transform: `scale(2) translateX(${bt(l(), e, 50)}%)` },
                                to: [
                                    {
                                        opacity: 1,
                                        transform: `scale(1.6) translateX(${bt(l(), e, 62.5)}%)`,
                                        config: { duration: 400 },
                                    },
                                    {
                                        opacity: e + 1 === l() ? 1 : 0.05,
                                        transform: 'scale(1) translateX(0%)',
                                        delay: vt,
                                        config: { duration: 600 },
                                    },
                                ],
                                onRest: () => {
                                    e + 1 === l() && o.setAnimationState(ve.RewardsShown);
                                },
                                onStart: () => {
                                    e + 1 === l() && t();
                                },
                                delay: 5e3 * e,
                                config: Object.assign({}, Te),
                            })),
                            d = c[0],
                            _ = c[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (u)
                                    return Uu(() => {
                                        _.start({ to: { opacity: 1 }, config: { duration: 800 } });
                                    }, 4300);
                            }, [_, u]),
                            n().createElement(
                                'div',
                                { className: B()(Ct.base, r) },
                                n().createElement(
                                    Se.animated.div,
                                    { className: Ct.inner, style: d },
                                    n().createElement(pt, { index: e, delay: 5e3 * e }),
                                ),
                            )
                        );
                    }),
                    xt = {
                        base: 'Rewards_base_24',
                        base__shown: 'Rewards_base__shown_59',
                        item: 'Rewards_item_9e',
                        widgetBox: 'Rewards_widgetBox_38',
                        widget__single: 'Rewards_widget__single_08',
                        title: 'Rewards_title_55',
                        title__single: 'Rewards_title__single_49',
                    },
                    wt = 'RewardTitle_base_7b',
                    St = R.strings.dogtags.component.background.coupled,
                    yt = (0, Y.Pi)(({ index: e, className: u }) => {
                        const t = we().model.computes,
                            a = t.getReward,
                            r = t.rewardType,
                            s = a(e),
                            i = s.backgroundId,
                            o = s.label;
                        return n().createElement(
                            'div',
                            { className: B()(wt, u) },
                            r() === be.DogTag
                                ? Me(R.strings.achievements_page.rewardView.reward.dogTag(), {
                                      value: ((l = i), St.$num(l)).title(),
                                  })
                                : o,
                        );
                        var l;
                    }),
                    Tt = { inner: 'SingleRewardItem_inner_bf' },
                    Rt = (0, Y.Pi)(({ className: e }) => {
                        const u = we().controls,
                            t = (0, Se.useSpring)({
                                from: { opacity: 0, transform: 'scale(1.8)' },
                                to: [
                                    { opacity: 1, transform: 'scale(1)' },
                                    { opacity: 1, transform: 'scale(1)', delay: 2e3 },
                                ],
                                onRest: () => {
                                    u.setAnimationState(ve.RewardsShown);
                                },
                                delay: 400,
                                config: Object.assign({}, Te),
                            });
                        return n().createElement(
                            'div',
                            { className: B()(Tt.base, e) },
                            n().createElement(
                                Se.animated.div,
                                { className: Tt.inner, style: t },
                                n().createElement(pt, { index: 0, delay: 1e3 }),
                            ),
                        );
                    }),
                    Ot = (0, Y.Pi)(({ className: e }) => {
                        const u = we().model,
                            t = u.computes,
                            r = t.rewardsLength,
                            s = t.isSingleReward,
                            i = (0, a.useState)(!1),
                            o = i[0],
                            l = i[1];
                        return n().createElement(
                            'div',
                            { className: B()(xt.base, u.animationState.get() > ve.Initial && xt.base__shown, e) },
                            ((e, u) => {
                                const t = [];
                                for (let a = 0; a < e; a++) t.push(u(a));
                                return t;
                            })(r(), (e) =>
                                n().createElement(
                                    'div',
                                    { className: xt.item, key: e },
                                    n().createElement(
                                        'div',
                                        { className: xt.widgetBox },
                                        n().createElement(
                                            'div',
                                            {
                                                className: B()(xt.widget, s() && xt.widget__single),
                                                onMouseEnter: () => I(R.sounds.ach_hover()),
                                                onClick: () => I(R.sounds.ach_sign()),
                                            },
                                            n().createElement(Iu, { index: e }),
                                        ),
                                    ),
                                    s()
                                        ? n().createElement(Rt, null)
                                        : n().createElement(ft, {
                                              index: e,
                                              onStartLastItem: () => l(!0),
                                              isBright: o,
                                          }),
                                    n().createElement(yt, {
                                        index: e,
                                        className: B()(xt.title, s() && xt.title__single),
                                    }),
                                ),
                            ),
                        );
                    }),
                    kt = 'Content_base_5b',
                    Pt = 'Content_header_55',
                    Lt = 'Content_title_ae',
                    Nt = 'Content_rewards_4f',
                    Mt = R.strings.achievements_page.rewardView,
                    It = { to: { opacity: 1, transform: 'translateY(0)' }, delay: 1e3, config: Object.assign({}, Te) },
                    Ut = (0, Y.Pi)(({ className: e }) => {
                        const u = we(),
                            t = u.model,
                            r = u.controls,
                            s = t.computes.isSingleReward,
                            i = t.animationState.get(),
                            o = (0, Se.useSpring)(() => ({ from: { opacity: 0, transform: 'translateY(-20rem)' } })),
                            l = o[0],
                            c = o[1],
                            d = (0, Se.useSpring)(() => ({
                                from: { opacity: 0, transform: 'translateY(40rem)' },
                                onRest: () => {
                                    r.setAnimationState(ve.NavigationShown);
                                },
                            })),
                            _ = d[0],
                            E = d[1];
                        return (
                            (0, a.useEffect)(() => {
                                i === ve.RewardsShown && (c.start(It), E.start(It));
                            }, [c, E, i]),
                            n().createElement(
                                'div',
                                { className: B()(kt, e) },
                                n().createElement(
                                    Se.animated.div,
                                    { className: Pt, style: l },
                                    n().createElement(
                                        'div',
                                        { className: Lt },
                                        s() ? Mt.title.single() : Mt.title.multi(),
                                    ),
                                ),
                                n().createElement(Ot, { className: Nt }),
                                n().createElement(Se.animated.div, { style: _ }, n().createElement(Ge, null)),
                            )
                        );
                    }),
                    $t = 'App_base_a6',
                    Ht = 'App_base__loaded_73',
                    Gt = 'App_closeButton_4e',
                    Wt = 'App_closeButton__visible_03',
                    qt = 'App_wrapper_54',
                    zt = 'App_background_06',
                    jt = 'App_content_4f',
                    Yt = (0, Y.Pi)(() => {
                        const e = we(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get().isFirstEntry,
                            s = u.computes.isSingleReward,
                            i = (0, a.useState)(!1),
                            o = i[0],
                            l = i[1];
                        var c, d;
                        (c = () => {
                            l(!0),
                                I(
                                    s()
                                        ? R.sounds.ach_reward_screen_dog_tag_single()
                                        : R.sounds.ach_reward_screen_dog_tag_multiple(),
                                );
                        }),
                            (d = [s]),
                            (0, a.useEffect)(() => {
                                let e = null;
                                return (
                                    (e = requestAnimationFrame(() => {
                                        e = requestAnimationFrame(() => {
                                            (e = null), c();
                                        });
                                    })),
                                    () => {
                                        null !== e && cancelAnimationFrame(e);
                                    }
                                );
                            }, d);
                        const _ = () => {
                            r ? t.openAchievementsPage() : t.close();
                        };
                        return (
                            (function (e) {
                                j(W.n.ESCAPE, e);
                            })(() => {
                                u.animationState.get() === ve.NavigationShown && _();
                            }),
                            n().createElement(
                                'div',
                                { className: B()($t, o && Ht) },
                                n().createElement('div', { className: zt }),
                                n().createElement(
                                    'div',
                                    { className: B()(Gt, u.animationState.get() > ve.Initial && Wt) },
                                    n().createElement(G, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: _,
                                    }),
                                ),
                                n().createElement('div', { className: qt }, n().createElement(Ut, { className: jt })),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    M().render(
                        n().createElement(xe, null, n().createElement(L, null, n().createElement(Yt, null))),
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], r = !0, s = 0; s < u.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
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
        (__webpack_require__.j = 53),
        (() => {
            var e = { 53: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        (n = r[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [549], () => __webpack_require__(9551));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
