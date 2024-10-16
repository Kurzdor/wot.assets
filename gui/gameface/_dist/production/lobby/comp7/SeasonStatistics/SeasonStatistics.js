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
            527: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, { mouse: () => c, off: () => o, on: () => s, onResize: () => r, onScaleUpdated: () => i });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    s = (u, e) => engine.on(u, e),
                    o = (u, e) => engine.off(u, e),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, n.R)(!0);
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
                            : (0, n.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${e}`,
                                        i = l[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        a(),
                                        () => {
                                            n &&
                                                (i(),
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
                    return Object.assign({}, r, {
                        disable() {
                            (u.enabled = !1), a();
                        },
                        enable() {
                            (u.enabled = !0), a();
                        },
                        enableOutside() {
                            u.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => a,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var a = t(527),
                    n = t(2493);
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function a(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => a });
            },
            2493: (u, e, t) => {
                'use strict';
                function a(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function n(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => n, G: () => a });
            },
            2472: (u, e, t) => {
                'use strict';
                function a(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => a });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => r });
                var a = t(5959),
                    n = t(514);
                const r = { view: t(7641), client: a, sound: n.ZP };
            },
            514: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => i });
                var a = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((u, e) => ((u[e] = () => (0, a.playSound)(n[e])), u), {}),
                    i = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (u, e, t) => {
                'use strict';
                function a(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${a(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
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
            7641: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getScale: () => _,
                        getSize: () => F,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => B,
                        remToPx: () => C,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => y,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                const s = 15;
                function o(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, s);
                }
                function c(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function A(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, s);
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function m(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: C(e.x), y: C(e.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function B(u) {
                    return viewEnv.pxToRem(u);
                }
                function C(u) {
                    return viewEnv.remToPx(u);
                }
                function h(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    x = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    y = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => l });
                const a = ['args'];
                const n = 2,
                    r = 16,
                    i = 32,
                    s = 64,
                    o = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var a in u)
                                        if ({}.hasOwnProperty.call(u, a)) {
                                            if (e.indexOf(a) >= 0) continue;
                                            t[a] = u[a];
                                        }
                                    return t;
                                })(e, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    l = {
                        close(u) {
                            o('popover' === u ? n : i);
                        },
                        minimize() {
                            o(s);
                        },
                        move(u) {
                            o(r, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
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
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var a = t(3138);
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
            9916: (u, e, t) => {
                'use strict';
                t.d(e, { B3: () => o, Gr: () => l, Z5: () => i.Z5, B0: () => s, ry: () => _ });
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
                var r = t(1358);
                var i = t(8613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    F = t(3138);
                const d = ['args'];
                function m(u, e, t, a, n, r, i) {
                    try {
                        var s = u[r](i),
                            o = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(o) : Promise.resolve(o).then(a, n);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    _ = (function () {
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
                                        function i(u) {
                                            m(r, a, n, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            m(r, a, n, i, s, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = (u, e) => {
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
                                })(e, d);
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
                    C = () => B(s.CLOSE),
                    h = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var g = t(7572);
                const v = n.instance,
                    p = {
                        DataTracker: r.Z,
                        ViewModel: g.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => B(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                A = o.height,
                                d = {
                                    x: F.O.view.pxToRem(l) + i.x,
                                    y: F.O.view.pxToRem(c) + i.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(A),
                                };
                            B(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: D(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => h(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            h(u, C);
                        },
                        handleViewEvent: B,
                        onBindingsReady: _,
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
                        ClickOutsideManager: v,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = p;
            },
            8613: (u, e, t) => {
                'use strict';
                t.d(e, { Z5: () => a, cy: () => n });
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
                    };
            },
            5074: (u, e, t) => {
                'use strict';
                var a = t(6179),
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
                var i = t(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
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
                })(o || (o = {}));
                const c = i.O.client.getSize('rem'),
                    E = c.width,
                    A = c.height,
                    F = Object.assign({ width: E, height: A }, l(E, A, s)),
                    d = (0, a.createContext)(F),
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
                    const n = (0, a.useContext)(d),
                        i = n.extraLarge,
                        s = n.large,
                        o = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        A = n.largeWidth,
                        F = n.mediumWidth,
                        D = n.smallWidth,
                        _ = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        C = n.largeHeight,
                        h = n.mediumHeight,
                        g = n.smallHeight,
                        v = n.extraSmallHeight,
                        p = { extraLarge: B, large: C, medium: h, small: g, extraSmall: v };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && s) return e;
                        if (t.medium && o) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return r(e, t, p);
                        if (t.largeWidth && A) return r(e, t, p);
                        if (t.mediumWidth && F) return r(e, t, p);
                        if (t.smallWidth && D) return r(e, t, p);
                        if (t.extraSmallWidth && _) return r(e, t, p);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && h) return e;
                            if (t.smallHeight && g) return e;
                            if (t.extraSmallHeight && v) return e;
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
                const _ = (u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    B = ({ children: u }) => {
                        const e = (0, a.useContext)(d),
                            t = (0, a.useState)(e),
                            r = t[0],
                            o = t[1],
                            c = (0, a.useCallback)((u, e) => {
                                const t = i.O.view.pxToRem(u),
                                    a = i.O.view.pxToRem(e);
                                o(Object.assign({ width: t, height: a }, l(t, a, s)));
                            }, []),
                            E = (0, a.useCallback)(() => {
                                const u = i.O.client.getSize('px');
                                c(u.width, u.height);
                            }, [c]);
                        _(() => {
                            i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', E);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', c),
                                        i.O.client.events.off('self.onScaleUpdated', E);
                                },
                                [c, E],
                            );
                        const A = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(d.Provider, { value: A }, u);
                    };
                var C = t(6483),
                    h = t.n(C),
                    g = t(926),
                    v = t.n(g);
                let p, f, b;
                !(function (u) {
                    (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = s.small.width)] = 'Small'),
                        (u[(u.Medium = s.medium.width)] = 'Medium'),
                        (u[(u.Large = s.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(p || (p = {})),
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
                        const u = (0, a.useContext)(d),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return p.ExtraLarge;
                                    case u.large:
                                        return p.Large;
                                    case u.medium:
                                        return p.Medium;
                                    case u.small:
                                        return p.Small;
                                    case u.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
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
                            i = ((u) => {
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
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function y() {
                    return (
                        (y = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        y.apply(null, arguments)
                    );
                }
                const S = {
                        [f.ExtraSmall]: '',
                        [f.Small]: v().SMALL_WIDTH,
                        [f.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [f.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL_HEIGHT,
                        [b.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [b.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [p.ExtraSmall]: '',
                        [p.Small]: v().SMALL,
                        [p.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [p.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [p.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    k = (u) => {
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
                            })(u, x);
                        const r = w(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return n().createElement('div', y({ className: h()(t, S[i], T[s], L[o]) }, a), e);
                    },
                    N = ['children'];
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
                        })(u, N);
                    return n().createElement(B, null, n().createElement(k, t, e));
                };
                var M = t(493),
                    P = t.n(M);
                function H(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const I = {
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
                let W, $;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(W || (W = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })($ || ($ = {}));
                const G = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: s,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: A,
                    onMouseUp: F,
                    onMouseLeave: d,
                    onClick: m,
                }) => {
                    const D = (0, a.useRef)(null),
                        _ = (0, a.useState)(t),
                        B = _[0],
                        C = _[1],
                        g = (0, a.useState)(!1),
                        v = g[0],
                        p = g[1];
                    return (
                        (0, a.useEffect)(() => {
                            function u(u) {
                                B && null !== D.current && !D.current.contains(u.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [B]),
                        (0, a.useEffect)(() => {
                            C(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: D,
                                className: h()(
                                    I.base,
                                    I[`base__${r}`],
                                    i && I.base__disabled,
                                    e && I[`base__${e}`],
                                    B && I.base__focus,
                                    v && I.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (u) {
                                    i || (null !== o && H(o), c && c(u));
                                },
                                onMouseMove: function (u) {
                                    E && E(u);
                                },
                                onMouseUp: function (u) {
                                    i || (F && F(u), p(!1));
                                },
                                onMouseDown: function (u) {
                                    i ||
                                        (null !== l && H(l),
                                        A && A(u),
                                        t && (i || (D.current && (D.current.focus(), C(!0)))),
                                        p(!0));
                                },
                                onMouseLeave: function (u) {
                                    i || (d && d(u), p(!1));
                                },
                                onClick: function (u) {
                                    i || (m && m(u));
                                },
                            },
                            r !== W.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: I.back }),
                                    n().createElement('span', { className: I.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: h()(I.state, I.state__default) },
                                n().createElement('span', { className: I.stateDisabled }),
                                n().createElement('span', { className: I.stateHighlightHover }),
                                n().createElement('span', { className: I.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: I.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                G.defaultProps = { type: W.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const V = G;
                var U = t(3403);
                const z = {
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
                    j = [
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
                function K() {
                    return (
                        (K = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        K.apply(null, arguments)
                    );
                }
                class q extends n().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && H(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && H(this.props.soundClick);
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
                            i = u.type,
                            s = u.classNames,
                            o = u.onMouseEnter,
                            l = u.onMouseLeave,
                            c = u.onMouseDown,
                            E = u.onMouseUp,
                            A =
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
                                })(u, j)),
                            F = h()(z.base, z[`base__${i}`], z[`base__${r}`], null == s ? void 0 : s.base),
                            d = h()(z.icon, z[`icon__${i}`], z[`icon__${r}`], null == s ? void 0 : s.icon),
                            m = h()(z.glow, null == s ? void 0 : s.glow),
                            D = h()(z.caption, z[`caption__${i}`], null == s ? void 0 : s.caption),
                            _ = h()(z.goto, null == s ? void 0 : s.goto);
                        return n().createElement(
                            'div',
                            K(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== i && n().createElement('div', { className: z.shine }),
                            n().createElement('div', { className: d }, n().createElement('div', { className: m })),
                            n().createElement('div', { className: D }, e),
                            a && n().createElement('div', { className: _ }, a),
                        );
                    }
                }
                q.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Y = t(5521),
                    Z = t(9916);
                const X = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Q(u = Y.n.NONE, e = X, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== Y.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === u) {
                                if (!n && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), e(a), t && a.stopPropagation();
                            }
                        }
                    }, [e, u, t, n]);
                }
                const J = 'page_close_a4',
                    uu = ({ onClose: u, className: e }) => {
                        var t;
                        return (
                            (t = u),
                            Q(Y.n.ESCAPE, t),
                            n().createElement(
                                'div',
                                { className: h()(J, e) },
                                n().createElement(q, {
                                    caption: R.strings.comp7.closeButtonLabel(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: u,
                                }),
                            )
                        );
                    };
                let eu;
                !(function (u) {
                    (u[(u.First = 6)] = 'First'),
                        (u[(u.Second = 5)] = 'Second'),
                        (u[(u.Third = 4)] = 'Third'),
                        (u[(u.Fourth = 3)] = 'Fourth'),
                        (u[(u.Fifth = 2)] = 'Fifth'),
                        (u[(u.Sixth = 1)] = 'Sixth');
                })(eu || (eu = {}));
                const tu = {
                        [eu.First]: 'first',
                        [eu.Second]: 'second',
                        [eu.Third]: 'third',
                        [eu.Fourth]: 'fourth',
                        [eu.Fifth]: 'fifth',
                        [eu.Sixth]: 'sixth',
                    },
                    au = (u) => tu[u];
                function nu() {}
                function ru() {
                    return !1;
                }
                console.log;
                var iu = t(9174);
                function su(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return ou(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? ou(u, e)
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
                function ou(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const lu = (u) => (0 === u ? window : window.subViews.get(u));
                function cu(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                const Eu = cu;
                function Au(u, e, t) {
                    if (Array.isArray(u)) return u.reduce(e, t);
                    let a = t;
                    for (let t = 0; t < u.length; t++) {
                        a = e(a, Eu(u, t), t, u);
                    }
                    return a;
                }
                var Fu = t(3946);
                function du(u) {
                    const e = {};
                    for (const t in u)
                        if (Object.prototype.hasOwnProperty.call(u, t)) {
                            const a = u[t];
                            e[t] = (0, iu.aD)(a);
                        }
                    return e;
                }
                let mu;
                !(function (u) {
                    (u.Idle = 'idle'),
                        (u.ShowPosition = 'showPosition'),
                        (u.ShowRank = 'showRank'),
                        (u.ShowRating = 'showRating'),
                        (u.ShowSummaryTitle = 'showSummaryTitle'),
                        (u.ShowSummary = 'showSummary'),
                        (u.ShowVehiclesTitle = 'showVehiclesTitle'),
                        (u.ShowVehicles = 'showVehicles'),
                        (u.ShowFooter = 'showFooter'),
                        (u.End = 'end');
                })(mu || (mu = {}));
                const Du = [
                        { step: mu.Idle, delay: 300 },
                        { step: mu.ShowPosition, delay: 300 },
                        { step: mu.ShowRank, delay: 300 },
                        { step: mu.ShowRating, delay: 300 },
                        { step: mu.ShowSummaryTitle, delay: 300 },
                        { step: mu.ShowSummary, delay: 1800 },
                        { step: mu.ShowVehiclesTitle, delay: 300 },
                        { step: mu.ShowVehicles, delay: 900 },
                        { step: mu.ShowFooter, delay: 100 },
                        { step: mu.End, delay: 0 },
                    ],
                    _u = (u) =>
                        Au(
                            u,
                            (e, t, a) => {
                                var n;
                                const r = null != (n = u[a + 1]) ? n : t;
                                return (e[t.step] = { nextStep: r.step, delay: t.delay, order: a }), e;
                            },
                            {},
                        ),
                    Bu = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: s, children: o, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, a, n) => {
                                        var r;
                                        const s = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = lu,
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
                                                        const o = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = i.O.view.addModelObserver(o, e, !0);
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
                                                        for (var u, t = su(n.keys()); !(u = t()).done; ) r(u.value, e);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (u) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(u)) : o.readByPath(u),
                                            E = (u) => c.current.push(u),
                                            A = u({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const a = null != e ? e : l(u),
                                                            n = iu.LO.box(a, { equals: ru });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, iu.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const a = null != e ? e : l(u),
                                                            n = iu.LO.box(a, { equals: ru });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, iu.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const a = l(e);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (u, e) => ((u[e] = iu.LO.box(a[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, iu.aD)((e) => {
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
                                                                i = r.reduce(
                                                                    (u, [e, t]) => ((u[t] = iu.LO.box(a[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, iu.aD)((u) => {
                                                                            r.forEach(([e, t]) => {
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
                                    d = F[0],
                                    m = F[1],
                                    D = (0, a.useState)(() => E(r, s, l)),
                                    _ = D[0],
                                    B = D[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        A.current ? B(E(d, s, l)) : (A.current = !0);
                                    }, [l, d, s]),
                                    (0, a.useEffect)(() => {
                                        m(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            _.externalModel.dispose(), c.current.forEach((u) => u());
                                        },
                                        [_],
                                    ),
                                    n().createElement(t.Provider, { value: _ }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = { root: u.object() },
                                t = u.array('summaryStatistics'),
                                a = u.array('vehicleStatistics'),
                                n = ((u = Du) => ({ animationState: iu.LO.box(), config: _u(u) }))(),
                                r = ((u) => ({
                                    isStepActive: (0, Fu.Om)(
                                        (e) => u.config[u.animationState.get()].order >= u.config[e].order,
                                    ),
                                    stepDelay: (0, Fu.Om)((e) => u.config[e].delay),
                                    getAnimationStepStyles: (0, Fu.Om)((e, t = 'base') =>
                                        Au(
                                            Object.entries(u.config),
                                            (a, [n, r]) => {
                                                const i = e[`${t}__${n}`];
                                                return (
                                                    r.order <= u.config[u.animationState.get()].order && i && a.push(i),
                                                    a
                                                );
                                            },
                                            [],
                                        ),
                                    ),
                                }))(n),
                                i = (0, Fu.Om)(() => e.root.get().leaderboardPosition < 3),
                                s = (0, Fu.Om)(() => t.get().length),
                                o = (0, Fu.Om)(
                                    (u) => {
                                        const e = cu(t.get(), u);
                                        if (!e) throw new Error(`summaryStatistic with index ${u} was not found`);
                                        return e;
                                    },
                                    { equals: ru },
                                ),
                                l = (0, Fu.Om)((u) => cu(a.get(), u), { equals: ru }),
                                c = (0, Fu.Om)((u) => (0 === s() ? 0 : u / s()));
                            return Object.assign({}, e, {
                                animation: { model: n, computes: r },
                                computes: {
                                    hasPositionIcon: i,
                                    summaryStatisticsLength: s,
                                    summaryStatistic: o,
                                    vehicleStatistic: l,
                                    summaryItemDelay: c,
                                },
                            });
                        },
                        ({ externalModel: u, model: e, cleanup: t }) => {
                            const a = ((u, e) => {
                                let t = 0;
                                e(() => window.clearTimeout(t));
                                const a = du({
                                        setAnimationState: (e) => {
                                            u.animationState.set(e);
                                        },
                                    }).setAnimationState,
                                    n = (e) => {
                                        if ((a(e), e === mu.End)) return;
                                        const r = u.config[e];
                                        t = window.setTimeout(() => {
                                            n(r.nextStep);
                                        }, r.delay);
                                    };
                                return du({
                                    start: () => {
                                        n(mu.Idle);
                                    },
                                });
                            })(e.animation.model, t);
                            return a.start(), { animation: a, close: u.createCallbackNoArgs('onClose') };
                        },
                    ),
                    Cu = Bu[0],
                    hu = Bu[1],
                    gu = () => hu().model.animation,
                    vu = {
                        '--pageContentWidth': '78vw',
                        base: 'App_base_bb',
                        header: 'App_header_e1',
                        content: 'App_content_fb',
                        rating: 'App_rating_88',
                        statistics: 'App_statistics_82',
                        summary: 'App_summary_7f',
                        buttonWrapper: 'App_buttonWrapper_a0',
                        base__idle: 'App_base__idle_b0',
                        base__showFooter: 'App_base__showFooter_5c',
                        button: 'App_button_7f',
                        close: 'App_close_2e',
                    };
                let pu;
                !(function (u) {
                    (u.default = 'default'), (u.x48 = 'x48'), (u.x80 = 'x80'), (u.x220 = 'x220');
                })(pu || (pu = {}));
                const fu = [
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
                function bu(u) {
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
                const wu = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Z.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    xu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            s = u.onMouseDown,
                            o = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            A = void 0 !== E && E,
                            F = u.decoratorId,
                            d = void 0 === F ? 0 : F,
                            m = u.isEnabled,
                            D = void 0 === m || m,
                            _ = u.targetId,
                            B = void 0 === _ ? 0 : _,
                            C = u.onShow,
                            h = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var a in u)
                                    if ({}.hasOwnProperty.call(u, a)) {
                                        if (e.indexOf(a) >= 0) continue;
                                        t[a] = u[a];
                                    }
                                return t;
                            })(u, fu);
                        const v = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            p = (0, a.useMemo)(
                                () =>
                                    B ||
                                    ((u = 1) => {
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
                                    })().resId,
                                [B],
                            ),
                            f = (0, a.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (wu(t, d, { isMouseEvent: !0, on: !0, arguments: bu(n) }, p),
                                    C && C(),
                                    (v.current.isVisible = !0));
                            }, [t, d, n, p, C]),
                            b = (0, a.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const u = v.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (v.current.timeoutId = 0)),
                                        wu(t, d, { on: !1 }, p),
                                        v.current.isVisible && h && h(),
                                        (v.current.isVisible = !1);
                                }
                            }, [t, d, p, h]),
                            w = (0, a.useCallback)((u) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(v.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const u = v.current.hideTimerId;
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
                                              ((x = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      r && r(u),
                                                      x && x(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              b(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && b(), null == o || o(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && b(), null == s || s(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : e;
                        var x;
                    },
                    yu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Su() {
                    return (
                        (Su = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        Su.apply(null, arguments)
                    );
                }
                const Tu = R.views.common.tooltip_window.simple_tooltip_content,
                    Lu = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            i = u.note,
                            s = u.alert,
                            o = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var a in u)
                                    if ({}.hasOwnProperty.call(u, a)) {
                                        if (e.indexOf(a) >= 0) continue;
                                        t[a] = u[a];
                                    }
                                return t;
                            })(u, yu);
                        const c = (0, a.useMemo)(() => {
                            const u = Object.assign({}, o, { body: t, header: r, note: i, alert: s });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [s, t, r, i, o]);
                        return n().createElement(
                            xu,
                            Su(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? Tu.SimpleTooltipHtmlContent('resId') : Tu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            e,
                        );
                        var E;
                    },
                    ku = (u) => {
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
                    Nu = 'TextOverflow_base_3b',
                    Ou = ['content', 'classMix', 'className'];
                function Mu() {
                    return (
                        (Mu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        Mu.apply(null, arguments)
                    );
                }
                const Ru = (u) => {
                        let e = u.content,
                            t = u.classMix,
                            r = u.className,
                            i = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var a in u)
                                    if ({}.hasOwnProperty.call(u, a)) {
                                        if (e.indexOf(a) >= 0) continue;
                                        t[a] = u[a];
                                    }
                                return t;
                            })(u, Ou);
                        const s = (0, a.useRef)(null),
                            o = (0, a.useState)(!0),
                            l = o[0],
                            c = o[1];
                        return (
                            (0, a.useEffect)(() =>
                                ku(() => {
                                    const u = s.current;
                                    u && u.offsetWidth >= u.scrollWidth && c(!1);
                                }),
                            ),
                            n().createElement(
                                Lu,
                                { isEnabled: l, body: e },
                                n().createElement('div', Mu({}, i, { ref: s, className: h()(Nu, r, t) }), e),
                            )
                        );
                    },
                    Pu = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Hu = { [pu.default]: 'c_24x24', [pu.x48]: 'c_48x48', [pu.x80]: 'c_80x80', [pu.x220]: 'c_220x220' },
                    Iu = ({ badgeID: u, size: e = pu.default, className: t }) => {
                        const a = R.images.gui.maps.icons.library.badges.$dyn(Hu[e]);
                        return n().createElement('div', {
                            className: h()(Pu.base, Pu[`base__${e}`], t),
                            style: { backgroundImage: `url(${a.$dyn(`badge_${u}`)})` },
                        });
                    };
                var Wu = t(1281);
                let $u;
                function Gu(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function Vu(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })($u || ($u = {}));
                const Uu = (u) => u.replace(/&nbsp;/g, ' '),
                    zu = (u, e, t) => {
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
                    Ku = (u, e, t = $u.left) => u.split(e).reduce(t === $u.left ? zu : ju, []),
                    qu = (() => {
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
                    Yu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Zu = (u, e = $u.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Yu.includes(t)) return qu(u);
                        if ('ja' === t) {
                            return (0, Wu.D4)()
                                .parse(u)
                                .map((u) => Uu(u));
                        }
                        return ((u, e = $u.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = Uu(u);
                            return Ku(n, /( )/, e).forEach((u) => (t = t.concat(Ku(u, a, $u.left)))), t;
                        })(u, e);
                    },
                    Xu = {
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
                    Qu = (0, a.memo)(({ tooltipHeaderName: u }) => {
                        const e = (0, a.useMemo)(
                                () => Vu(R.strings.tooltips.anonymizer.teamStats.header(), { name: u }),
                                [u],
                            ),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return n().createElement(
                            Lu,
                            { header: e, body: t },
                            n().createElement('div', { className: Xu.anonymizedIcon }),
                        );
                    });
                function Ju() {
                    return (
                        (Ju = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        Ju.apply(null, arguments)
                    );
                }
                const ue = { [pu.default]: 'c_64x24', [pu.x48]: 'c_68x28' },
                    ee = { [pu.default]: 'c_48x48', [pu.x48]: 'c_48x48' },
                    te = ({
                        userName: u,
                        clanAbbrev: e = '',
                        igrType: t = 0,
                        badge: r = { badgeID: '' },
                        suffixBadge: i = { badgeID: '' },
                        isInverted: s = !1,
                        isFakeNameVisible: o = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: E = pu.default,
                        userNameClassName: A = '',
                        clanTagClassName: F = '',
                    }) => {
                        const d = R.images.gui.maps.icons.library.badges.strips.$dyn(ue[E]),
                            m = (0, a.useMemo)(
                                () => ({ backgroundImage: `url(${d.$dyn(`strip_${i.badgeID}`)})` }),
                                [i, d],
                            ),
                            D = R.images.gui.maps.icons.library.badges.$dyn(ee[E]),
                            _ = (0, a.useMemo)(
                                () => ({ backgroundImage: `url(${D.$dyn(`badge_${i.badgeID}`)})` }),
                                [i, D],
                            ),
                            B = e ? `[${e}]` : '',
                            C = h()(Xu.base, Xu[`base__${E}`], s && Xu.base__inverted),
                            g = h()(Xu.userName, A),
                            v = h()(Xu.clanTag, F),
                            p = u !== c,
                            f = o ? `${c}${B}` : c,
                            b = Boolean(r.badgeID) && n().createElement(Iu, Ju({ size: E }, r, { key: 'badge' })),
                            w = Date.now(),
                            x = [
                                b,
                                [
                                    n().createElement(
                                        'div',
                                        { className: g, key: 'userName' },
                                        n().createElement(Ru, { content: u, key: w }),
                                    ),
                                    !o && Boolean(B) && n().createElement('div', { className: v, key: 'clanTag' }, B),
                                ],
                                0 !== t && n().createElement('div', { className: Xu.igrIcon, key: 'igrType' }),
                                Boolean(i.badgeID) &&
                                    n().createElement(
                                        'div',
                                        { className: Xu.suffixBadgeWrapper, key: 'suffixBadge' },
                                        n().createElement('div', { className: Xu.suffixBadgeStripe, style: m }),
                                        n().createElement('div', { className: Xu.suffixBadge, style: _ }),
                                    ),
                                l && p && n().createElement(Qu, { tooltipHeaderName: f, key: 'anonymizer' }),
                            ];
                        return n().createElement('div', { className: C }, s ? x.reverse() : x);
                    };
                let ae, ne, re;
                !(function (u) {
                    (u[(u.First = 6)] = 'First'),
                        (u[(u.Second = 5)] = 'Second'),
                        (u[(u.Third = 4)] = 'Third'),
                        (u[(u.Fourth = 3)] = 'Fourth'),
                        (u[(u.Fifth = 2)] = 'Fifth'),
                        (u[(u.Sixth = 1)] = 'Sixth');
                })(ae || (ae = {})),
                    (function (u) {
                        (u.First = 'first'), (u.Second = 'second'), (u.Third = 'third');
                    })(ne || (ne = {})),
                    (function (u) {
                        (u[(u.A = 1)] = 'A'),
                            (u[(u.B = 2)] = 'B'),
                            (u[(u.C = 3)] = 'C'),
                            (u[(u.D = 4)] = 'D'),
                            (u[(u.E = 5)] = 'E');
                    })(re || (re = {}));
                const ie = 'FormatText_base_d0',
                    se = ({ binding: u, text: e = '', classMix: t, alignment: r = $u.left, formatWithBrackets: i }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const s = i && u ? Gu(e, u) : e;
                        return n().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((e, i) =>
                                n().createElement(
                                    'div',
                                    { className: h()(ie, t), key: `${e}-${i}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : Zu(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => n().createElement(a.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    oe = {
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
                    le = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    ce = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ee = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Ae = (0, a.memo)(({ text: u, binding: e, classMix: t }) => {
                        const r = (0, a.useCallback)((u) => ({ color: `#${u}` }), []),
                            i = (0, a.useMemo)(() => e || {}, [e]);
                        let s = le.exec(u),
                            o = u,
                            l = 0;
                        for (; s; ) {
                            const t = s[0],
                                a = ce.exec(t),
                                c = Ee.exec(t),
                                E = s[1];
                            if (a && c) {
                                const u = a[0],
                                    s = u + l++ + u;
                                (o = o.replace(t, `%(${s})`)),
                                    (i[s] = oe[u]
                                        ? n().createElement(
                                              'span',
                                              { className: oe[u] },
                                              n().createElement(se, { text: E, binding: e }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: r(u) },
                                              n().createElement(se, { text: E, binding: e }),
                                          ));
                            }
                            s = le.exec(u);
                        }
                        return n().createElement(se, { text: o, classMix: t, binding: i });
                    }),
                    Fe = {
                        base: 'Header_base_11',
                        season: 'Header_season_b5',
                        title: 'Header_title_57',
                        nickName: 'Header_nickName_e1',
                        clanTag: 'Header_clanTag_21',
                        position: 'Header_position_18',
                        base__idle: 'Header_base__idle_91',
                        base__showPosition: 'Header_base__showPosition_5b',
                        order: 'Header_order_3d',
                        order__icon: 'Header_order__icon_d9',
                        order__first: 'Header_order__first_44',
                        order__second: 'Header_order__second_90',
                        order__third: 'Header_order__third_1f',
                    },
                    de = R.strings.comp7.seasonStatistics,
                    me = ['first', 'second', 'third'],
                    De = (0, U.Pi)(({ className: u }) => {
                        const e = hu().model,
                            t = gu(),
                            a = e.root.get(),
                            r = a.season,
                            i = a.leaderboardPosition,
                            s = a.clanTagColor,
                            o = a.userName,
                            l = a.clanTag,
                            c = e.computes.hasPositionIcon();
                        return n().createElement(
                            'div',
                            {
                                className: h()(Fe.base, u, t.computes.getAnimationStepStyles(Fe)),
                                style: { '--clanTagColor': s },
                            },
                            n().createElement(
                                'div',
                                { className: Fe.season },
                                n().createElement(Ae, {
                                    text: de.description.season(),
                                    binding: { seasonNameUpper: de.seasonNameUpper.$dyn(r) },
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: Fe.title },
                                n().createElement(Ae, {
                                    text: de.title(),
                                    binding: {
                                        name: n().createElement(
                                            'div',
                                            { className: Fe.nickName },
                                            n().createElement(te, {
                                                userName: o,
                                                clanAbbrev: l,
                                                clanTagClassName: h()(s && Fe.clanTag),
                                            }),
                                        ),
                                    },
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: Fe.position },
                                -1 !== i &&
                                    n().createElement(Ae, {
                                        text: de.description.leaderboardPosition(),
                                        binding: {
                                            position: n().createElement(
                                                'div',
                                                {
                                                    className: h()(
                                                        Fe.order,
                                                        c && Fe.order__icon,
                                                        c && Fe[`order__${me[i]}`],
                                                    ),
                                                },
                                                !c && i + 1,
                                            ),
                                        },
                                    }),
                            ),
                        );
                    }),
                    _e = (u, e) => {
                        const t = [];
                        for (let a = 0; a < u; a++) t.push(e(a));
                        return t;
                    };
                var Be = t(6112);
                const Ce = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function he() {
                    return (
                        (he = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        he.apply(null, arguments)
                    );
                }
                const ge = (0, a.forwardRef)(function (u, e) {
                        let t = u.src,
                            r = u.className,
                            s = u.autoplay,
                            o = void 0 !== s && s,
                            l = u.style,
                            c = u.loop,
                            E = void 0 !== c && c,
                            A = u.isPrebufferKeyframes,
                            F = u.keyframesNameConfig,
                            d = u.onClick,
                            m = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var a in u)
                                    if ({}.hasOwnProperty.call(u, a)) {
                                        if (e.indexOf(a) >= 0) continue;
                                        t[a] = u[a];
                                    }
                                return t;
                            })(u, Ce);
                        const D = e,
                            _ = (0, a.useRef)(null);
                        var B;
                        return (
                            (B = () =>
                                i.O.view.events.onDisplayChanged((u, e) => {
                                    var t, a;
                                    e === Be.W.hidden && (null == (t = _.current) || t.pause()),
                                        e === Be.W.shown && (null == (a = _.current) || a.play());
                                })),
                            (0, a.useEffect)(B, []),
                            (0, a.useEffect)(
                                () =>
                                    ku(() => {
                                        const u = _.current;
                                        if (!D || !u || !A)
                                            return void (null != u && u.cohFastSeek && (u.cohFastSeek = !1));
                                        const e = u.cohGetKeyframeTimestamps();
                                        e.length > 0
                                            ? ((u.cohFastSeek = !0),
                                              e.map((e) => {
                                                  null == u || u.cohPrebufferKeyframe(e);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [A, D],
                            ),
                            (0, a.useEffect)(() => {
                                if (D && _.current) {
                                    const u = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: nu,
                                        },
                                        e = () => {
                                            let e = 0;
                                            const t = (function (u) {
                                                    let e = 0;
                                                    return [
                                                        function t() {
                                                            u(), (e = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(e);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (_.current) {
                                                        const t = _.current,
                                                            a = t.currentTime,
                                                            n = t.duration;
                                                        if (
                                                            (e !== a &&
                                                                (u.changeTimeHandlers.forEach((u) =>
                                                                    u({ currentTime: a, duration: n }),
                                                                ),
                                                                (e = a)),
                                                            _.current.paused || !D || !A)
                                                        )
                                                            return;
                                                        const r = _.current.cohGetKeyframeTimestamps();
                                                        r.forEach((e, t) => {
                                                            a > r[t] - 0.02 &&
                                                                a < r[t] &&
                                                                u.changeKeyframeHandlers.forEach((u) => {
                                                                    const a = Object.keys(null != F ? F : {})[t];
                                                                    return u({
                                                                        time: e,
                                                                        name: `${F ? a : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                a = t[0],
                                                n = t[1];
                                            return a(), n;
                                        };
                                    u.changeTimeLoop = e();
                                    const t = (e) => (
                                            u.changeTimeHandlers.push(e),
                                            () => {
                                                const t = u.changeTimeHandlers,
                                                    a = t.indexOf(e);
                                                a < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(a, 1);
                                            }
                                        ),
                                        a = (e) => (
                                            u.changeKeyframeHandlers.push(e),
                                            () => {
                                                const t = u.changeKeyframeHandlers,
                                                    a = t.indexOf(e);
                                                a < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(a, 1);
                                            }
                                        ),
                                        n = () => {
                                            var u;
                                            return null == (u = _.current) ? void 0 : u.currentTime;
                                        },
                                        r = () => {
                                            var u;
                                            return null == (u = _.current) ? void 0 : u.duration;
                                        },
                                        i = (u) => {
                                            var e, t, a;
                                            _.current &&
                                                (_.current.currentTime =
                                                    ((e = 0),
                                                    (t = _.current.duration),
                                                    (a = u) < e ? e : a > t ? t : a));
                                        },
                                        s = () => {
                                            var u;
                                            return null == (u = _.current) ? void 0 : u.play();
                                        },
                                        o = () => {
                                            var u;
                                            return null == (u = _.current) ? void 0 : u.pause();
                                        },
                                        l = () => {
                                            o(), i(0);
                                        },
                                        c = () => {
                                            var u, e;
                                            return null !=
                                                (u = null == (e = _.current) ? void 0 : e.cohGetKeyframeTimestamps())
                                                ? u
                                                : [];
                                        },
                                        E = (u) => {
                                            i(u), s();
                                        },
                                        d = (u) => {
                                            i(u), o();
                                        },
                                        m = () => {
                                            (u.changeTimeHandlers = []),
                                                (u.changeKeyframeHandlers = []),
                                                null == u.changeTimeLoop || u.changeTimeLoop();
                                        },
                                        B = (u, e) => {
                                            var t;
                                            return (
                                                null == (t = _.current) || t.addEventListener(u, e),
                                                () => {
                                                    var t;
                                                    return null == (t = _.current)
                                                        ? void 0
                                                        : t.removeEventListener(u, e);
                                                }
                                            );
                                        },
                                        C = (u, e) => {
                                            var t;
                                            return (
                                                null == (t = _.current) || t.removeEventListener(u, e),
                                                () => {
                                                    var t;
                                                    return null == (t = _.current)
                                                        ? void 0
                                                        : t.removeEventListener(u, e);
                                                }
                                            );
                                        };
                                    return (
                                        (D.current = {
                                            on: B,
                                            off: C,
                                            play: s,
                                            pause: o,
                                            stop: l,
                                            cleanup: m,
                                            getCurrentTime: n,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: E,
                                            goToAndStop: d,
                                            setCurrentTime: i,
                                            domRef: _.current,
                                            onChangeTime: t,
                                            onKeyframes: a,
                                        }),
                                        () => {
                                            m(), (D.current = null);
                                        }
                                    );
                                }
                            }, [F, D, A]),
                            (0, a.useEffect)(() => {
                                _.current && o && _.current.play();
                            }, [o, E]),
                            (0, a.useEffect)(() => {
                                if (_.current)
                                    return () => {
                                        _.current && _.current.pause();
                                    };
                            }, []),
                            n().createElement(
                                'video',
                                he({ src: t, className: r, style: l, loop: E, ref: _, onClick: d }, m),
                            )
                        );
                    }),
                    ve = (0, a.memo)(ge),
                    pe = 'DivineGlow_base_65',
                    fe = 'DivineGlow_glow_6d',
                    be = 'DivineGlow_glow__bg_7c',
                    we = ({ className: u, classNames: e, animated: t = !0 }) =>
                        n().createElement(
                            'div',
                            { className: h()(pe, u) },
                            ((u) => !!i.O.client.graphicsQuality.isHigh() && u)(t)
                                ? n().createElement(ve, {
                                      className: h()(fe, null == e ? void 0 : e.glow),
                                      src: String(R.videos.comp7.divine_glow()),
                                      autoplay: !0,
                                      loop: !0,
                                  })
                                : n().createElement('div', { className: h()(fe, be, null == e ? void 0 : e.glow) }),
                        ),
                    xe = {
                        base: 'LaceDivider_base_1a',
                        lace: 'LaceDivider_lace_7f',
                        peak: 'LaceDivider_peak_f2',
                        peak__right: 'LaceDivider_peak__right_43',
                        line: 'LaceDivider_line_0d',
                    },
                    ye = ({ children: u, className: e, classNames: t }) =>
                        n().createElement(
                            'div',
                            { className: h()(xe.base, e) },
                            n().createElement(
                                'div',
                                {
                                    className: h()(
                                        xe.lace,
                                        xe.lace__left,
                                        null == t ? void 0 : t.lace,
                                        null == t ? void 0 : t.leftLace,
                                    ),
                                },
                                n().createElement('div', {
                                    className: h()(
                                        xe.peak,
                                        xe.peak__left,
                                        null == t ? void 0 : t.peak,
                                        null == t ? void 0 : t.leftPeak,
                                    ),
                                }),
                                n().createElement('div', {
                                    className: h()(
                                        xe.line,
                                        xe.line__left,
                                        null == t ? void 0 : t.line,
                                        null == t ? void 0 : t.leftLine,
                                    ),
                                }),
                            ),
                            u,
                            n().createElement(
                                'div',
                                {
                                    className: h()(
                                        xe.lace,
                                        xe.lace__right,
                                        null == t ? void 0 : t.lace,
                                        null == t ? void 0 : t.rightLace,
                                    ),
                                },
                                n().createElement('div', {
                                    className: h()(
                                        xe.line,
                                        xe.line__right,
                                        null == t ? void 0 : t.line,
                                        null == t ? void 0 : t.rightLine,
                                    ),
                                }),
                                n().createElement('div', {
                                    className: h()(
                                        xe.peak,
                                        xe.peak__right,
                                        null == t ? void 0 : t.peak,
                                        null == t ? void 0 : t.rightPeak,
                                    ),
                                }),
                            ),
                        );
                let Se, Te;
                !(function (u) {
                    (u[(u.A = 1)] = 'A'),
                        (u[(u.B = 2)] = 'B'),
                        (u[(u.C = 3)] = 'C'),
                        (u[(u.D = 4)] = 'D'),
                        (u[(u.E = 5)] = 'E');
                })(Se || (Se = {})),
                    (function (u) {
                        (u[(u.Achieved = 0)] = 'Achieved'),
                            (u[(u.Current = 1)] = 'Current'),
                            (u[(u.Inactive = 2)] = 'Inactive');
                    })(Te || (Te = {}));
                const Le = R.strings.comp7.division,
                    ke = { [Se.A]: 'A', [Se.B]: 'B', [Se.C]: 'C', [Se.D]: 'D', [Se.E]: 'E' },
                    Ne = (u) => Le.$dyn(ke[u]),
                    Oe = [eu.First, eu.Second, eu.Third, eu.Fourth],
                    Me = (u) => Oe.includes(u);
                let Re;
                !(function (u) {
                    (u[(u.x22 = 22)] = 'x22'),
                        (u[(u.x40 = 40)] = 'x40'),
                        (u[(u.x48 = 48)] = 'x48'),
                        (u[(u.x64 = 64)] = 'x64'),
                        (u[(u.x84 = 84)] = 'x84'),
                        (u[(u.x110 = 110)] = 'x110'),
                        (u[(u.x150 = 150)] = 'x150'),
                        (u[(u.x200 = 200)] = 'x200'),
                        (u[(u.x260 = 260)] = 'x260'),
                        (u[(u.x320 = 320)] = 'x320'),
                        (u[(u.x420 = 420)] = 'x420'),
                        (u[(u.x600 = 600)] = 'x600');
                })(Re || (Re = {}));
                const Pe = 'RankEmblem_base_ec',
                    He = ({ rank: u, size: e, division: t, seasonName: r, className: i }) => {
                        const s = (0, a.useMemo)(() => {
                            const a = R.images.gui.maps.icons.comp7.ranks.$dyn(r).$num(e),
                                n = Me(u) && void 0 !== t ? `_${Ne(t)}` : '';
                            return { backgroundImage: `url(${a.$dyn(`${au(u)}${n}`)})`, '--imageSize': `${e}rem` };
                        }, [r, e, u, t]);
                        return n().createElement('div', { className: h()(Pe, i), style: s });
                    },
                    Ie = {
                        [eu.First]: 'first',
                        [eu.Second]: 'second',
                        [eu.Third]: 'third',
                        [eu.Fourth]: 'fourth',
                        [eu.Fifth]: 'fifth',
                        [eu.Sixth]: 'sixth',
                    },
                    We = (u) => ((u, e) => `${u.$dyn(Ie[e])}`)(R.strings.comp7.rank, u),
                    $e = {
                        base__x16: 'SeasonPoint_base__x16_06',
                        base__x24: 'SeasonPoint_base__x24_b6',
                        base__x32: 'SeasonPoint_base__x32_f0',
                        base__x48: 'SeasonPoint_base__x48_8a',
                        icon: 'SeasonPoint_icon_b6',
                    };
                let Ge;
                !(function (u) {
                    (u.x16 = 'x16'), (u.x24 = 'x24'), (u.x32 = 'x32'), (u.x48 = 'x48');
                })(Ge || (Ge = {}));
                const Ve = R.images.gui.maps.icons.comp7.icons,
                    Ue = ({ state: u, season: e, className: t, size: a = Ge.x48 }) =>
                        n().createElement(
                            'div',
                            { className: h()($e.base, $e[`base__${a}`], $e[`base__${u}`], t) },
                            n().createElement('div', {
                                className: $e.icon,
                                style: {
                                    backgroundImage:
                                        'notAchieved' === u
                                            ? `url(${Ve.$dyn(`season_point_notAchieved_${a}`)})`
                                            : `url(${Ve.$dyn(`season_point_${e}_${a}`)})`,
                                },
                            }),
                        ),
                    ze = { base__notAchieved: 'Point_base__notAchieved_29' },
                    je = (u) => (u >= p.Medium ? Ge.x48 : Ge.x32),
                    Ke = (0, U.Pi)(({ pointIndex: u, className: e }) => {
                        const t = hu().model.root.get(),
                            a = t.season,
                            r = t.achievedSeasonPoints,
                            i = w().mediaSize,
                            s = u + 1 <= r ? 'achieved' : 'notAchieved';
                        return n().createElement(
                            xu,
                            {
                                contentId: R.views.lobby.comp7.tooltips.SeasonPointTooltip('resId'),
                                args: { state: s },
                                ignoreShowDelay: !0,
                            },
                            n().createElement(
                                'div',
                                { className: e },
                                n().createElement(Ue, {
                                    state: s,
                                    season: a,
                                    className: ze[`base__${s}`],
                                    size: je(i),
                                }),
                            ),
                        );
                    }),
                    qe = {
                        '--pageContentWidth': '78vw',
                        base: 'Rating_base_05',
                        shine: 'Rating_shine_53',
                        base__showRank: 'Rating_base__showRank_fc',
                        title: 'Rating_title_75',
                        subTitle: 'Rating_subTitle_dd',
                        subTitle__hide: 'Rating_subTitle__hide_6d',
                        rankEmblemContainer: 'Rating_rankEmblemContainer_d6',
                        rank: 'Rating_rank_a8',
                        glowContainer: 'Rating_glowContainer_3a',
                        glow: 'Rating_glow_ba',
                        content: 'Rating_content_53',
                        base__showRating: 'Rating_base__showRating_a6',
                        score: 'Rating_score_0f',
                        scoreDescription: 'Rating_scoreDescription_22',
                        laceDivider: 'Rating_laceDivider_18',
                        seasonPoints: 'Rating_seasonPoints_49',
                        point: 'Rating_point_b1',
                        pointDescription: 'Rating_pointDescription_24',
                    },
                    Ye = R.strings.comp7.seasonStatistics,
                    Ze = (0, U.Pi)(({ className: u }) => {
                        const e = hu().model,
                            t = w().mediaSize,
                            a = gu(),
                            r = e.root.get(),
                            i = r.rank,
                            s = r.division,
                            o = r.score,
                            l = r.season,
                            c = r.achievedSeasonPoints,
                            E = r.seasonPointsLimit,
                            A = ((u) =>
                                u >= p.ExtraLarge
                                    ? Re.x600
                                    : u >= p.Large
                                      ? Re.x320
                                      : u >= p.Medium
                                        ? Re.x260
                                        : Re.x200)(t);
                        return n().createElement(
                            'div',
                            { className: h()(qe.base, u, a.computes.getAnimationStepStyles(qe)) },
                            n().createElement('div', { className: qe.shine }),
                            n().createElement(
                                'div',
                                { className: qe.title },
                                ((u) => Vu(R.strings.comp7.rank.text(), { rank: We(u) }))(i),
                            ),
                            n().createElement(
                                'div',
                                { className: h()(qe.subTitle, !Me(i) && qe.subTitle__hide) },
                                ((u) => Vu(Le.text(), { division: Ne(u) }))(s),
                            ),
                            n().createElement(
                                'div',
                                { className: qe.rankEmblemContainer },
                                n().createElement(we, { className: qe.glowContainer, classNames: { glow: qe.glow } }),
                                n().createElement(He, {
                                    seasonName: l,
                                    rank: i,
                                    division: s,
                                    size: A,
                                    className: qe.rank,
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: qe.content },
                                n().createElement('div', { className: qe.score }, o),
                                n().createElement(
                                    'div',
                                    { className: qe.scoreDescription },
                                    Ye.description.finalScore(),
                                ),
                                n().createElement(ye, { className: qe.laceDivider }),
                                n().createElement(
                                    'div',
                                    { className: qe.seasonPoints },
                                    _e(E, (u) => n().createElement(Ke, { key: u, pointIndex: u, className: qe.point })),
                                ),
                                n().createElement(Ae, {
                                    text: Ye.description.seasonPoint(c),
                                    binding: { points: c },
                                    classMix: qe.pointDescription,
                                }),
                            ),
                        );
                    }),
                    Xe = 'HeaderSection_base_71',
                    Qe = 'HeaderSection_line_37',
                    Je = 'HeaderSection_line__leftSide_fd',
                    ut = 'HeaderSection_line__left_fa',
                    et = 'HeaderSection_line__right_d3',
                    tt = 'HeaderSection_line__rightSide_74',
                    at = 'HeaderSection_text_55',
                    nt = ({ text: u, className: e }) =>
                        n().createElement(
                            'div',
                            { className: h()(Xe, e) },
                            n().createElement('div', { className: h()(Qe, Je) }),
                            n().createElement('div', { className: h()(Qe, ut) }),
                            n().createElement('div', { className: at }, u),
                            n().createElement('div', { className: h()(Qe, et) }),
                            n().createElement('div', { className: h()(Qe, tt) }),
                        );
                class rt extends n().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = Z.B3.GOLD;
                        else u = Z.B3.INTEGRAL;
                        const e = Z.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                let it;
                (rt.defaultProps = { format: 'integral' }),
                    (function (u) {
                        (u.Battles = 'battles'),
                            (u.Damage = 'damage'),
                            (u.MaxPrestigePoints = 'maxPrestigePoints'),
                            (u.MaxFrags = 'maxFrags'),
                            (u.WinSeries = 'winSeries');
                    })(it || (it = {}));
                var st = t(7030);
                const ot = R.strings.comp7,
                    lt = ({ value: u, isPercentage: e = !1, fractionDigits: t = 2 }) =>
                        -1 === u
                            ? ot.dash()
                            : ((u, e, t) => {
                                  const a =
                                      Number.isInteger(u) || Number.isInteger(10 * u)
                                          ? Z.Z5.getRealFormat(u, Z.Gr.WO_ZERO_DIGITS)
                                          : Z.Z5.getRealFormat(parseFloat(u.toFixed(t)), Z.Gr.FRACTIONAL);
                                  return e ? Vu(ot.percentage(), { percentageValue: a }) : a;
                              })(u, e, t),
                    ct = 'LineDivider_base_01',
                    Et = 'LineDivider_divider_e1',
                    At = 'LineDivider_divider__center_ce',
                    Ft = 'LineDivider_divider__right_0f',
                    dt = ({ className: u }) =>
                        n().createElement(
                            'div',
                            { className: h()(ct, u) },
                            n().createElement('div', { className: Et }),
                            n().createElement('div', { className: h()(Et, At) }),
                            n().createElement('div', { className: h()(Et, Ft) }),
                        ),
                    mt = 'Card_base_4f',
                    Dt = 'Card_icon_83',
                    _t = 'Card_mainValue_a7',
                    Bt = 'Card_mainDescription_8e',
                    Ct = 'Card_divider_f6',
                    ht = 'Card_additional_7f',
                    gt = R.strings.comp7.seasonStatistics.section.statistics,
                    vt = R.images.gui.maps.icons.comp7.seasonStatistics,
                    pt = (u, e) => {
                        switch (u) {
                            case it.Battles:
                                return lt({ value: e, isPercentage: !0 });
                            case it.Damage:
                                return Math.trunc(e);
                            default:
                                return lt({ value: e });
                        }
                    },
                    ft = (0, U.Pi)(({ index: u, className: e }) => {
                        const t = hu().model,
                            a = gu(),
                            r = t.computes.summaryStatistic(u),
                            i = r.type,
                            s = r.main,
                            o = r.additional,
                            l = gt.$dyn(i),
                            c = t.computes.summaryItemDelay(a.computes.stepDelay(mu.ShowSummary)),
                            E = (0, st.useSpring)({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                delay: c * u,
                                pause: !a.computes.isStepActive(mu.ShowSummary),
                            });
                        return n().createElement(
                            st.animated.div,
                            { className: h()(mt, e), style: E },
                            n().createElement('div', {
                                className: Dt,
                                style: { backgroundImage: `url(${vt.$dyn(i)})` },
                            }),
                            n().createElement('div', { className: _t }, n().createElement(rt, { value: s })),
                            n().createElement(Ae, { text: l.$dyn('main'), classMix: Bt }),
                            n().createElement(dt, { className: Ct }),
                            n().createElement(Ae, {
                                text: String(l.$dyn('additional')),
                                classMix: ht,
                                binding: { additional: pt(i, o) },
                            }),
                        );
                    }),
                    bt = {
                        base: 'Summary_base_f1',
                        header: 'Summary_header_80',
                        base__idle: 'Summary_base__idle_55',
                        base__showSummaryTitle: 'Summary_base__showSummaryTitle_80',
                        cards: 'Summary_cards_2a',
                        card: 'Summary_card_87',
                        separator: 'Summary_separator_fe',
                        base__showVehicles: 'Summary_base__showVehicles_d9',
                    },
                    wt = (0, U.Pi)(({ className: u }) => {
                        const e = hu().model,
                            t = gu();
                        return n().createElement(
                            'div',
                            { className: h()(bt.base, u, t.computes.getAnimationStepStyles(bt)) },
                            n().createElement(nt, {
                                className: bt.header,
                                text: R.strings.comp7.seasonStatistics.section.statistics.title(),
                            }),
                            n().createElement(
                                'div',
                                { className: bt.cards },
                                _e(e.computes.summaryStatisticsLength(), (u) =>
                                    n().createElement(
                                        n().Fragment,
                                        { key: u },
                                        n().createElement('div', { className: bt.separator }),
                                        n().createElement(ft, { index: u, className: bt.card }),
                                    ),
                                ),
                                n().createElement('div', { className: bt.separator }),
                            ),
                        );
                    }),
                    xt = 'VehicleCard_base_76',
                    yt = 'VehicleCard_back_23',
                    St = 'VehicleCard_params_cd',
                    Tt = 'VehicleCard_vehicleName_9e',
                    Lt = 'VehicleCard_propsWrapper_e0',
                    kt = 'VehicleCard_propsName_f3',
                    Nt = 'VehicleCard_separator_f3',
                    Ot = 'VehicleCard_value_28',
                    Mt = 'VehicleCard_icon_df',
                    Rt = R.images.gui.maps.shop.vehicles,
                    Pt = R.images.gui.maps.icons.comp7.seasonStatistics,
                    Ht = R.strings.comp7.seasonStatistics.section.vehicles,
                    It = (0, U.Pi)(({ index: u }) => {
                        const e = hu().model,
                            t = w().mediaSize,
                            a = gu(),
                            r = e.computes.vehicleStatistic(u),
                            i = r
                                ? ((u) => (u >= p.Large ? Rt.c_360x270 : Rt.c_180x135))(t).$dyn(r.vehicleInfo.techName)
                                : ((u) => (u >= p.Large ? Pt.no_vehicle_360x270() : Pt.no_vehicle_180x135()))(t),
                            s = a.computes.stepDelay(mu.ShowVehicles) / $t,
                            o = (0, st.useSpring)({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                delay: s * u,
                                pause: !a.computes.isStepActive(mu.ShowVehicles),
                            });
                        return n().createElement(
                            st.animated.div,
                            { className: xt, style: o },
                            n().createElement('div', { className: yt }, u + 1),
                            n().createElement(
                                'div',
                                { className: St },
                                n().createElement('div', { className: Tt }, r ? r.vehicleInfo.name : Ht.noVehicles()),
                                n().createElement(
                                    'div',
                                    { className: Lt },
                                    n().createElement('div', { className: kt }, Ht.battles()),
                                    n().createElement('div', { className: Nt }),
                                    n().createElement('div', { className: Ot }, r ? r.battles : Ht.noData()),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Lt },
                                    n().createElement('div', { className: kt }, Ht.wins()),
                                    n().createElement('div', { className: Nt }),
                                    r
                                        ? n().createElement(
                                              'div',
                                              { className: Ot },
                                              lt({ value: r.winsPercent, isPercentage: !0 }),
                                          )
                                        : n().createElement('div', { className: Ot }, Ht.noData()),
                                ),
                            ),
                            n().createElement('div', { className: Mt, style: { backgroundImage: `url(${i})` } }),
                        );
                    }),
                    Wt = {
                        base: 'Vehicles_base_1f',
                        header: 'Vehicles_header_8a',
                        base__idle: 'Vehicles_base__idle_8a',
                        base__showVehiclesTitle: 'Vehicles_base__showVehiclesTitle_53',
                        cards: 'Vehicles_cards_1d',
                        vehiclePlace: 'Vehicles_vehiclePlace_b6',
                    },
                    $t = 3,
                    Gt = (0, U.Pi)(() => {
                        const u = gu();
                        return n().createElement(
                            'div',
                            { className: h()(Wt.base, u.computes.getAnimationStepStyles(Wt)) },
                            n().createElement(nt, {
                                className: Wt.header,
                                text: R.strings.comp7.seasonStatistics.section.vehicles.title(),
                            }),
                            n().createElement(
                                'div',
                                { className: Wt.cards },
                                _e($t, (u) => n().createElement(It, { key: u, index: u })),
                            ),
                            n().createElement('div', { className: Wt.vehiclePlace }),
                        );
                    }),
                    Vt = R.strings.comp7.seasonStatistics,
                    Ut = (0, U.Pi)(() => {
                        const u = hu(),
                            e = u.controls,
                            t = u.model,
                            a = gu(),
                            r = t.root.get(),
                            i = r.rank,
                            s = r.season;
                        return n().createElement(
                            'div',
                            { className: h()(vu.base, vu[`base__${s}Season`], a.computes.getAnimationStepStyles(vu)) },
                            n().createElement(De, { className: vu.header }),
                            n().createElement(
                                'div',
                                { className: vu.content },
                                n().createElement(Ze, { className: vu.rating }),
                                n().createElement(
                                    'div',
                                    { className: vu.statistics },
                                    n().createElement(wt, { className: vu.summary }),
                                    n().createElement(Gt, null),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: vu.buttonWrapper },
                                n().createElement(
                                    V,
                                    { type: W.primary, size: 'medium', onClick: e.close, mixClass: vu.button },
                                    Vt.button.$dyn(au(i)),
                                ),
                            ),
                            n().createElement(uu, { className: vu.close, onClose: e.close }),
                        );
                    });
                engine.whenReady.then(() => {
                    P().render(
                        n().createElement(Cu, null, n().createElement(O, null, n().createElement(Ut, null))),
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, a] = deferred[o], r = !0, i = 0; i < e.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, a];
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
        (__webpack_require__.j = 302),
        (() => {
            var u = { 302: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        n,
                        [r, i, s] = t,
                        o = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (e && e(t); o < r.length; o++)
                        (n = r[o]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [926], () => __webpack_require__(5074));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
