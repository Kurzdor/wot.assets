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
                    t.d(e, { mouse: () => E, off: () => o, on: () => s, onResize: () => r, onScaleUpdated: () => i });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    s = (u, e) => engine.on(u, e),
                    o = (u, e) => engine.off(u, e),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const E = (function () {
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
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => v,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => D,
                        getSize: () => A,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => m,
                        remToPx: () => B,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => R,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function o(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function F(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function m(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function C(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    f = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    R = Promise.all([
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
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
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
                t.d(e, { B3: () => o, Z5: () => i.Z5, B0: () => s, ry: () => m });
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
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    d = t(3138);
                const F = ['args'];
                function _(u, e, t, a, n, r, i) {
                    try {
                        var s = u[r](i),
                            o = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(o) : Promise.resolve(o).then(a, n);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    m = (function () {
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
                                            _(r, a, n, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            _(r, a, n, i, s, 'throw', u);
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
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
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
                    C = () => B(s.CLOSE),
                    g = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var p = t(7572);
                const h = n.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: E,
                        DateFormatType: c,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => B(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                E = o.y,
                                c = o.width,
                                A = o.height,
                                F = {
                                    x: d.O.view.pxToRem(l) + i.x,
                                    y: d.O.view.pxToRem(E) + i.y,
                                    width: d.O.view.pxToRem(c),
                                    height: d.O.view.pxToRem(A),
                                };
                            B(s.POP_OVER, {
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
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, C);
                        },
                        handleViewEvent: B,
                        onBindingsReady: m,
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
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = w;
            },
            8613: (u, e, t) => {
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
            2769: (u, e, t) => {
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
                const E = i.O.client.getSize('rem'),
                    c = E.width,
                    A = E.height,
                    d = Object.assign({ width: c, height: A }, l(c, A, s)),
                    F = (0, a.createContext)(d),
                    _ = ['children'];
                const D = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(u);
                            for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, _);
                    const n = (0, a.useContext)(F),
                        i = n.extraLarge,
                        s = n.large,
                        o = n.medium,
                        l = n.small,
                        E = n.extraSmall,
                        c = n.extraLargeWidth,
                        A = n.largeWidth,
                        d = n.mediumWidth,
                        D = n.smallWidth,
                        m = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        C = n.largeHeight,
                        g = n.mediumHeight,
                        p = n.smallHeight,
                        h = n.extraSmallHeight,
                        w = { extraLarge: B, large: C, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && s) return e;
                        if (t.medium && o) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && E) return e;
                    } else {
                        if (t.extraLargeWidth && c) return r(e, t, w);
                        if (t.largeWidth && A) return r(e, t, w);
                        if (t.mediumWidth && d) return r(e, t, w);
                        if (t.smallWidth && D) return r(e, t, w);
                        if (t.extraSmallWidth && m) return r(e, t, w);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && p) return e;
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
                const m = (u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    B = ({ children: u }) => {
                        const e = (0, a.useContext)(F),
                            t = (0, a.useState)(e),
                            r = t[0],
                            o = t[1],
                            E = (0, a.useCallback)((u, e) => {
                                const t = i.O.view.pxToRem(u),
                                    a = i.O.view.pxToRem(e);
                                o(Object.assign({ width: t, height: a }, l(t, a, s)));
                            }, []),
                            c = (0, a.useCallback)(() => {
                                const u = i.O.client.getSize('px');
                                E(u.width, u.height);
                            }, [E]);
                        m(() => {
                            i.O.client.events.on('clientResized', E), i.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', E),
                                        i.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [E, c],
                            );
                        const A = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(F.Provider, { value: A }, u);
                    };
                var C = t(6483),
                    g = t.n(C),
                    p = t(926),
                    h = t.n(p);
                let w, b, v;
                !(function (u) {
                    (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = s.small.width)] = 'Small'),
                        (u[(u.Medium = s.medium.width)] = 'Medium'),
                        (u[(u.Large = s.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(w || (w = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.width)] = 'Small'),
                            (u[(u.Medium = s.medium.width)] = 'Medium'),
                            (u[(u.Large = s.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.height)] = 'Small'),
                            (u[(u.Medium = s.medium.height)] = 'Medium'),
                            (u[(u.Large = s.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const f = () => {
                        const u = (0, a.useContext)(F),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return w.ExtraLarge;
                                    case u.large:
                                        return w.Large;
                                    case u.medium:
                                        return w.Medium;
                                    case u.small:
                                        return w.Small;
                                    case u.extraSmall:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(u),
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case u.largeWidth:
                                        return b.Large;
                                    case u.mediumWidth:
                                        return b.Medium;
                                    case u.smallWidth:
                                        return b.Small;
                                    case u.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case u.largeHeight:
                                        return v.Large;
                                    case u.mediumHeight:
                                        return v.Medium;
                                    case u.smallHeight:
                                        return v.Small;
                                    case u.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const y = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL_WIDTH,
                        [b.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [b.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_HEIGHT,
                        [v.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [v.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [w.ExtraSmall]: '',
                        [w.Small]: h().SMALL,
                        [w.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [w.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [w.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    x = (u) => {
                        let e = u.children,
                            t = u.className,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, T);
                        const r = f(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return n().createElement('div', S({ className: g()(t, y[i], P[s], L[o]) }, a), e);
                    },
                    O = ['children'];
                const M = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(u);
                            for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, O);
                    return n().createElement(B, null, n().createElement(x, t, e));
                };
                var N = t(493),
                    k = t.n(N);
                let I;
                !(function (u) {
                    (u.BUY_BATTLE_PASS = 'buyBattlePassReason'),
                        (u.BUY_BATTLE_PASS_LEVELS = 'buyBattlePassLevelsReason'),
                        (u.BUY_MULTIPLE_BATTLE_PASS = 'buyMultipleBattlePassReason'),
                        (u.BUY_BATTLE_PASS_WITH_LEVELS = 'buyBattlePassWithLevelsReason'),
                        (u.STYLE_UPGRADE = 'styleUpgradeReason'),
                        (u.DEFAULT = 'defaultReason');
                })(I || (I = {}));
                function U(u) {
                    return u;
                }
                function G() {
                    return !1;
                }
                console.log;
                var H = t(9174);
                function W(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return $(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return $(u, e);
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
                function $(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const V = (u) => (0 === u ? window : window.subViews.get(u));
                function Y(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, a) => e(null == u ? void 0 : u.value, t, a));
                }
                var q = t(3946);
                const z = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: s, children: o, mocks: l }) {
                                const E = (0, a.useRef)([]),
                                    c = (t, a, n) => {
                                        var r;
                                        const s = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = V,
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
                                                        for (var u, t = W(n.keys()); !(u = t()).done; ) r(u.value, e);
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
                                            c = (u) => E.current.push(u),
                                            A = u({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const a = null != e ? e : l(u),
                                                            n = H.LO.box(a, { equals: G });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, H.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const a = null != e ? e : l(u),
                                                            n = H.LO.box(a, { equals: G });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, H.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const a = l(e);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (u, e) => ((u[e] = H.LO.box(a[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, H.aD)((e) => {
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
                                                                    (u, [e, t]) => ((u[t] = H.LO.box(a[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, H.aD)((u) => {
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
                                                cleanup: c,
                                            }),
                                            d = { mode: t, model: A, externalModel: o, cleanup: c };
                                        return {
                                            model: A,
                                            controls: 'mocks' === t && n ? n.controls(d) : e(d),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    A = (0, a.useRef)(!1),
                                    d = (0, a.useState)(r),
                                    F = d[0],
                                    _ = d[1],
                                    D = (0, a.useState)(() => c(r, s, l)),
                                    m = D[0],
                                    B = D[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        A.current ? B(c(F, s, l)) : (A.current = !0);
                                    }, [l, F, s]),
                                    (0, a.useEffect)(() => {
                                        _(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            m.externalModel.dispose(), E.current.forEach((u) => u());
                                        },
                                        [m],
                                    ),
                                    n().createElement(t.Provider, { value: m }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = {
                                    root: u.object(),
                                    mainRewards: u.array('mainRewards.items'),
                                    additionalRewards: u.array('additionalRewards.items'),
                                    packageRewards: u.array('packageRewards.items'),
                                    canToOpenAdditionView: H.LO.box(!1),
                                },
                                t = (0, q.Om)(() => e.root.get().reason === I.BUY_BATTLE_PASS),
                                a = (0, q.Om)(() => e.root.get().reason === I.BUY_BATTLE_PASS_WITH_LEVELS),
                                n = (0, q.Om)(() => e.root.get().reason === I.BUY_MULTIPLE_BATTLE_PASS),
                                r = (0, q.Om)(() => t() || n() || a()),
                                i = (0, q.Om)(() => e.root.get().reason === I.STYLE_UPGRADE),
                                s = (0, q.Om)(
                                    () =>
                                        r() && !e.canToOpenAdditionView.get()
                                            ? Y(e.packageRewards.get(), U)
                                            : Y(e.additionalRewards.get(), U),
                                    { equals: G },
                                ),
                                o = (0, q.Om)(() => s().length),
                                l = (0, q.Om)(() => o() > 0),
                                E = (0, q.Om)(() => Y(e.mainRewards.get(), U), { equals: G }),
                                c = (0, q.Om)(() => {
                                    const u = E();
                                    if (1 === u.length) return u;
                                    const e = [...u],
                                        t = e[0];
                                    return (e[0] = e[1]), (e[1] = t), e;
                                }),
                                A = (0, q.Om)(() => (e.root.get().isFinalReward ? c() : E())),
                                d = (0, q.Om)(() => A().length),
                                F = (0, q.Om)(() => {
                                    const u = e.root.get().isFinalReward;
                                    return 1 === d() || u;
                                }),
                                _ = (0, q.Om)(() => {
                                    const u = e.root.get().isFinalReward;
                                    return (2 !== A().length && u) || r() || i();
                                });
                            return Object.assign({}, e, {
                                computes: {
                                    isReasonBuy: t,
                                    isReasonBuyWithLevels: a,
                                    isMultiplePurchase: n,
                                    isReasonBuyCurrently: r,
                                    isReasonStyleUpgrade: i,
                                    getAdditionalRewards: s,
                                    getAdditionalRewardsLength: o,
                                    hasAdditionalRewards: l,
                                    getRewards: A,
                                    getRewardsLength: d,
                                    hasBigSizeReward: F,
                                    getFinalRewards: c,
                                    hasGlowAnimation: _,
                                },
                            });
                        },
                        ({ model: u, externalModel: e }) => ({
                            enableToOpenAdditionView: (0, H.aD)(() => {
                                u.canToOpenAdditionView.set(!0);
                            }),
                            buy: e.createCallbackNoArgs('onBuyClick'),
                            close: e.createCallbackNoArgs('onClose'),
                        }),
                    ),
                    j = z[0],
                    X = z[1];
                function K(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const Q = {
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
                    Z = [
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
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        J.apply(this, arguments)
                    );
                }
                class uu extends n().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && K(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && K(this.props.soundClick);
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
                            E = u.onMouseDown,
                            c = u.onMouseUp,
                            A =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(u, Z)),
                            d = g()(Q.base, Q[`base__${i}`], Q[`base__${r}`], null == s ? void 0 : s.base),
                            F = g()(Q.icon, Q[`icon__${i}`], Q[`icon__${r}`], null == s ? void 0 : s.icon),
                            _ = g()(Q.glow, null == s ? void 0 : s.glow),
                            D = g()(Q.caption, Q[`caption__${i}`], null == s ? void 0 : s.caption),
                            m = g()(Q.goto, null == s ? void 0 : s.goto);
                        return n().createElement(
                            'div',
                            J(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== i && n().createElement('div', { className: Q.shine }),
                            n().createElement('div', { className: F }, n().createElement('div', { className: _ })),
                            n().createElement('div', { className: D }, e),
                            a && n().createElement('div', { className: m }, a),
                        );
                    }
                }
                uu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var eu = t(5521),
                    tu = t(9916);
                const au = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function nu(u = eu.n.NONE, e = au, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== eu.n.NONE)
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
                var ru = t(1281);
                let iu;
                function su(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function ou(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(iu || (iu = {}));
                const lu = (u) => u.replace(/&nbsp;/g, ' '),
                    Eu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    cu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Au = (u, e, t = iu.left) => u.split(e).reduce(t === iu.left ? Eu : cu, []),
                    du = (() => {
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
                    Fu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _u = (u, e = iu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Fu.includes(t)) return du(u);
                        if ('ja' === t) {
                            return (0, ru.D4)()
                                .parse(u)
                                .map((u) => lu(u));
                        }
                        return ((u, e = iu.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = lu(u);
                            return Au(n, /( )/, e).forEach((u) => (t = t.concat(Au(u, a, iu.left)))), t;
                        })(u, e);
                    };
                var Du = t(3403);
                let mu, Bu, Cu, gu;
                !(function (u) {
                    (u.Micro = 'micro'), (u.Small = 'small'), (u.Medium = 'medium');
                })(mu || (mu = {})),
                    (function (u) {
                        (u.ACTIVE = 'active'), (u.COMPLETED = 'completed'), (u.NOT_CHOSEN = 'notChosen');
                    })(Bu || (Bu = {})),
                    (function (u) {
                        (u.AwaitSeason = 'awaitSeason'),
                            (u.Bought = 'bought'),
                            (u.Free = 'free'),
                            (u.Completed = 'completed'),
                            (u.CompletedRightNow = 'completedRightNow'),
                            (u.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (u.NoVehiclesBase = 'noVehiclesBase'),
                            (u.ChapterNotChosen = 'chapterNotChosen');
                    })(Cu || (Cu = {})),
                    (function (u) {
                        (u.None = ''),
                            (u.ShowLevel = 'show'),
                            (u.HideLevel = 'hide'),
                            (u.HideLevelWithDelay = 'hideWithDelay');
                    })(gu || (gu = {}));
                const pu = (u, e, t = '') => {
                    const a = t.length > 0 ? `_${t}` : t,
                        n = u.$dyn(`c_${e}${a}`),
                        r = String(e).slice(-1),
                        i = u.$dyn(`default_${r}${a}`);
                    return n || i;
                };
                var hu = t(801);
                let wu, bu, vu, fu, Ru, Tu, Su, yu;
                !(function (u) {
                    (u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.Tankman = 'tankman'),
                        (u.Tankwoman = 'tankwoman'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.WtHunterLootbox = 'wt_hunter'),
                        (u.WtBossLootbox = 'wt_boss'),
                        (u.WtProgressPoints = 'stamp'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.DeluxeGift = 'deluxe_gift'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.OptionalDevice = 'optionalDevice'),
                        (u.EquipCoin = 'equipCoin'),
                        (u.WTCommanderClaimable = 'wtCommanderClaimable'),
                        (u.WTCommanderClaimed = 'wtCommanderClaimed');
                })(wu || (wu = {})),
                    (function (u) {
                        (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement'),
                            (u.EquipCoin = 'equipCoin');
                    })(bu || (bu = {})),
                    (function (u) {
                        (u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S64x64 = 's64x64'),
                            (u.S48x48 = 's48x48');
                    })(vu || (vu = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(fu || (fu = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Ru || (Ru = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(Tu || (Tu = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Su || (Su = {})),
                    (function (u) {
                        (u[(u.Engraving = 0)] = 'Engraving'), (u[(u.Background = 1)] = 'Background');
                    })(yu || (yu = {}));
                const Pu = ({ format: u, value: e }) => {
                        const t = ((u, e = 'integral') => {
                            let t;
                            t = 'gold' === e ? tu.B3.GOLD : tu.B3.INTEGRAL;
                            return void 0 === u ? '' : tu.Z5.getNumberFormat(u, t);
                        })(e, u);
                        return t ? n().createElement('span', null, t) : null;
                    },
                    Lu = [
                        wu.Items,
                        wu.Equipment,
                        wu.Xp,
                        wu.XpFactor,
                        wu.Blueprints,
                        wu.BlueprintsAny,
                        wu.Goodies,
                        wu.Berths,
                        wu.Slots,
                        wu.Tokens,
                        wu.CrewSkins,
                        wu.CrewBooks,
                        wu.Customizations,
                        wu.CreditsFactor,
                        wu.TankmenXp,
                        wu.TankmenXpFactor,
                        wu.FreeXpFactor,
                        wu.BattleToken,
                        wu.PremiumUniversal,
                        wu.NaturalCover,
                        wu.BpCoin,
                        wu.BattlePassSelectToken,
                        wu.BattlaPassFinalAchievement,
                        wu.BattleBadge,
                        wu.BonusX5,
                        wu.CrewBonusX3,
                        wu.NewYearInvoice,
                        wu.EpicSelectToken,
                        wu.WtHunterLootbox,
                        wu.WtBossLootbox,
                        wu.WtProgressPoints,
                        wu.Comp7TokenWeeklyReward,
                        wu.DeluxeGift,
                        wu.BattleBoosterGift,
                        wu.OptionalDevice,
                    ],
                    xu = [wu.Gold, wu.Credits, wu.Crystal, wu.FreeXp],
                    Ou = [wu.BattlePassPoints, wu.EquipCoin],
                    Mu = [wu.PremiumPlus, wu.Premium],
                    Nu = ['engravings', 'backgrounds'],
                    ku = ['engraving', 'background'],
                    Iu = (u, e = vu.Small) => {
                        const t = u.name,
                            a = u.type,
                            n = u.value,
                            r = u.icon,
                            i = u.item,
                            s = u.dogTagType,
                            o = ((u) => {
                                switch (u) {
                                    case vu.S600x450:
                                        return 'c_600x450';
                                    case vu.S400x300:
                                        return 'c_400x300';
                                    case vu.S296x222:
                                        return 'c_296x222';
                                    case vu.S232x174:
                                        return 'c_232x174';
                                    case vu.Big:
                                        return 'c_80x80';
                                    case vu.Small:
                                        return 'c_48x48';
                                    default:
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === e
                                    ? u.iconBig.replace('..', 'img://gui')
                                    : u.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${r}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const a = Nu[u];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(a),
                                            r = n.$dyn(t);
                                        return r ? `${r}` : `${n.$dyn(ku[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, e, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    Uu = [vu.Small, vu.Big],
                    Gu = [
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
                function Hu(u) {
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
                const Wu = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: tu.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    $u = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            s = u.onMouseDown,
                            o = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            d = u.decoratorId,
                            F = void 0 === d ? 0 : d,
                            _ = u.isEnabled,
                            D = void 0 === _ || _,
                            m = u.targetId,
                            B = void 0 === m ? 0 : m,
                            C = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, Gu);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, a.useMemo)(
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
                            b = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Wu(t, F, { isMouseEvent: !0, on: !0, arguments: Hu(n) }, w),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, F, n, w, C]),
                            v = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        Wu(t, F, { on: !1 }, w),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, F, w, g]),
                            f = (0, a.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const u = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', f, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === D && v();
                            }, [D, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
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
                                                      ((h.current.timeoutId = window.setTimeout(b, E ? 100 : 400)),
                                                      r && r(u),
                                                      T && T(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              v(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && v(), null == o || o(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && v(), null == s || s(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var T;
                    },
                    Vu = ['children'];
                function Yu() {
                    return (
                        (Yu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Yu.apply(this, arguments)
                    );
                }
                const qu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, Vu);
                        return n().createElement(
                            $u,
                            Yu(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            e,
                        );
                    },
                    zu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ju() {
                    return (
                        (ju =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        ju.apply(this, arguments)
                    );
                }
                const Xu = R.views.common.tooltip_window.simple_tooltip_content,
                    Ku = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            i = u.note,
                            s = u.alert,
                            o = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, zu);
                        const E = (0, a.useMemo)(() => {
                            const u = Object.assign({}, o, { body: t, header: r, note: i, alert: s });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [s, t, r, i, o]);
                        return n().createElement(
                            $u,
                            ju(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? Xu.SimpleTooltipHtmlContent('resId') : Xu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    };
                function Qu() {
                    return (
                        (Qu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Qu.apply(this, arguments)
                    );
                }
                const Zu = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const a = n().createElement('div', { className: t }, u);
                        if (e.header || e.body) return n().createElement(Ku, e, a);
                        const r = e.contentId;
                        return r ? n().createElement($u, Qu({}, e, { contentId: r }), a) : n().createElement(qu, e, a);
                    },
                    Ju = {
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
                    ue = ({
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: a = vu.Big,
                        special: r,
                        value: i,
                        valueType: s,
                        title: o,
                        style: l,
                        className: E,
                        classNames: c,
                        tooltipArgs: A,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const F = ((u, e) => {
                                if (void 0 === e || !Uu.includes(u)) return null;
                                switch (e) {
                                    case Ru.BATTLE_BOOSTER:
                                    case Ru.BATTLE_BOOSTER_REPLACE:
                                        return Tu.BATTLE_BOOSTER;
                                }
                            })(a, r),
                            _ = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case Ru.BATTLE_BOOSTER:
                                        return Su.BATTLE_BOOSTER;
                                    case Ru.BATTLE_BOOSTER_REPLACE:
                                        return Su.BATTLE_BOOSTER_REPLACE;
                                    case Ru.BUILT_IN_EQUIPMENT:
                                        return Su.BUILT_IN_EQUIPMENT;
                                    case Ru.EQUIPMENT_PLUS:
                                        return Su.EQUIPMENT_PLUS;
                                    case Ru.EQUIPMENT_TROPHY_BASIC:
                                        return Su.EQUIPMENT_TROPHY_BASIC;
                                    case Ru.EQUIPMENT_TROPHY_UPGRADED:
                                        return Su.EQUIPMENT_TROPHY_UPGRADED;
                                    case Ru.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Su.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Ru.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Su.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Ru.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Su.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Ru.PROGRESSION_STYLE_UPGRADED_1:
                                        return Su.PROGRESSION_STYLE_UPGRADED_1;
                                    case Ru.PROGRESSION_STYLE_UPGRADED_2:
                                        return Su.PROGRESSION_STYLE_UPGRADED_2;
                                    case Ru.PROGRESSION_STYLE_UPGRADED_3:
                                        return Su.PROGRESSION_STYLE_UPGRADED_3;
                                    case Ru.PROGRESSION_STYLE_UPGRADED_4:
                                        return Su.PROGRESSION_STYLE_UPGRADED_4;
                                    case Ru.PROGRESSION_STYLE_UPGRADED_5:
                                        return Su.PROGRESSION_STYLE_UPGRADED_5;
                                    case Ru.PROGRESSION_STYLE_UPGRADED_6:
                                        return Su.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(r),
                            D = ((u, e) => {
                                if (void 0 === u) return null;
                                switch (e) {
                                    case fu.MULTI: {
                                        const e = Number(u);
                                        return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                    }
                                    case fu.CURRENCY:
                                    case fu.NUMBER:
                                        return n().createElement(Pu, { format: 'integral', value: Number(u) });
                                    case fu.PREMIUM_PLUS: {
                                        const e = Number(u);
                                        return isNaN(e) ? u : null;
                                    }
                                    default:
                                        return u;
                                }
                            })(i, s);
                        return n().createElement(
                            'div',
                            { className: g()(Ju.base, Ju[`base__${a}`], E), style: l },
                            n().createElement(
                                Zu,
                                { tooltipArgs: A, className: Ju.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: g()(Ju.image, null == c ? void 0 : c.image) },
                                        F &&
                                            n().createElement('div', {
                                                className: g()(Ju.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${F}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            n().createElement('div', {
                                                className: g()(Ju.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        _ &&
                                            n().createElement('div', {
                                                className: g()(Ju.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    D &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: g()(
                                                    Ju.info,
                                                    Ju[`info__${u}`],
                                                    s === fu.MULTI && Ju.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            D,
                                        ),
                                    o && n().createElement('div', { className: Ju.title }, o),
                                ),
                            ),
                            t &&
                                n().createElement(
                                    Zu,
                                    { tooltipArgs: d },
                                    n().createElement('div', {
                                        className: g()(Ju.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var ee = t(7030);
                let te, ae;
                !(function (u) {
                    (u.Active = 'active'),
                        (u.Paused = 'paused'),
                        (u.Completed = 'completed'),
                        (u.NotStarted = 'notStarted');
                })(te || (te = {})),
                    (function (u) {
                        (u.Vehicle = 'vehicle'), (u.Style = 'style'), (u.Tankman = 'tankman');
                    })(ae || (ae = {}));
                var ne = t(8613);
                Date.now(), ne.Ew.getRegionalDateTime, ne.Ew.getFormattedDateTime;
                let re;
                !(function (u) {
                    (u.style = 'style'), (u.tankman = 'tankman');
                })(re || (re = {}));
                re.style, re.tankman;
                const ie = (u) => Math.sqrt(1 - Math.pow(u - 1, 2)),
                    se = (u, e) => {
                        if ('equipmentTrophyBasic' === e) {
                            const e = `trophyBasic${u.charAt(0).toUpperCase()}${u.slice(1)}`;
                            return { backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(e)})` };
                        }
                        return { backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(`${u}`)})` };
                    },
                    oe = 'AdditionalRewards_base_95',
                    le = 'AdditionalRewards_title_d2',
                    Ee = 'AdditionalRewards_title__updateAnimation_d7',
                    ce = 'AdditionalRewards_reward_18',
                    Ae = 'AdditionalRewards_rewardsList_52',
                    de = R.strings.battle_pass.battlePassAwardsView,
                    Fe = (0, Du.Pi)(({ rewards: u, pageNumber: e, className: t }) => {
                        const a = X().model.canToOpenAdditionView.get(),
                            r = f().mediaSize >= w.Large ? vu.Big : vu.Small,
                            i = 1 === e ? 1600 - (a ? 800 : 0) : 100,
                            s = (0, ee.useTransition)(u, {
                                from: { opacity: 0, y: '20rem' },
                                enter: { opacity: 1, y: '0rem' },
                                trail: 100,
                                config: { duration: 300, easing: ie },
                                onStart: () => K('bp_reward'),
                                delay: i,
                            });
                        return n().createElement(
                            'div',
                            { className: g()(oe, t) },
                            n().createElement('div', { className: g()(le, a && Ee) }, de.additionalRewards.subText()),
                            n().createElement(
                                'div',
                                { className: Ae },
                                s((u, e) => {
                                    const t = e.item || e.name,
                                        a = Iu(e, r),
                                        i =
                                            ((s = e.name),
                                            Lu.includes(s)
                                                ? fu.MULTI
                                                : xu.includes(s)
                                                  ? fu.CURRENCY
                                                  : Ou.includes(s)
                                                    ? fu.NUMBER
                                                    : Mu.includes(s)
                                                      ? fu.PREMIUM_PLUS
                                                      : fu.STRING);
                                    var s;
                                    const o = ((u, e, t) => {
                                        const a = e && { contentId: e };
                                        return Object.assign(
                                            {
                                                args: u,
                                                isEnabled: Boolean((u && u.tooltipId) || e),
                                                ignoreMouseClick: !0,
                                                ignoreShowDelay: !e,
                                            },
                                            a,
                                            t,
                                        );
                                    })({ tooltipId: e.tooltipId }, Number(e.tooltipContentId), { ignoreShowDelay: !0 });
                                    return n().createElement(
                                        ee.animated.div,
                                        { className: ce, style: u },
                                        n().createElement(ue, {
                                            name: t,
                                            image: a,
                                            special: e.overlayType,
                                            value: e.value,
                                            valueType: i,
                                            size: r,
                                            tooltipArgs: o,
                                        }),
                                    );
                                }),
                            ),
                        );
                    }),
                    _e = {
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
                let De, me;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(De || (De = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(me || (me = {}));
                const Be = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: s,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: c,
                    onMouseDown: A,
                    onMouseUp: d,
                    onMouseLeave: F,
                    onClick: _,
                }) => {
                    const D = (0, a.useRef)(null),
                        m = (0, a.useState)(t),
                        B = m[0],
                        C = m[1],
                        p = (0, a.useState)(!1),
                        h = p[0],
                        w = p[1];
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
                                className: g()(
                                    _e.base,
                                    _e[`base__${r}`],
                                    i && _e.base__disabled,
                                    e && _e[`base__${e}`],
                                    B && _e.base__focus,
                                    h && _e.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (u) {
                                    i || (null !== o && K(o), E && E(u));
                                },
                                onMouseMove: function (u) {
                                    c && c(u);
                                },
                                onMouseUp: function (u) {
                                    i || (d && d(u), w(!1));
                                },
                                onMouseDown: function (u) {
                                    i ||
                                        (null !== l && K(l),
                                        A && A(u),
                                        t && (i || (D.current && (D.current.focus(), C(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (u) {
                                    i || (F && F(u), w(!1));
                                },
                                onClick: function (u) {
                                    i || (_ && _(u));
                                },
                            },
                            r !== De.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: _e.back }),
                                    n().createElement('span', { className: _e.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: g()(_e.state, _e.state__default) },
                                n().createElement('span', { className: _e.stateDisabled }),
                                n().createElement('span', { className: _e.stateHighlightHover }),
                                n().createElement('span', { className: _e.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: _e.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                Be.defaultProps = { type: De.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ce = Be;
                let ge;
                !(function (u) {
                    (u[(u.Space = 32)] = 'Space'),
                        (u[(u.Enter = 13)] = 'Enter'),
                        (u[(u.A = 65)] = 'A'),
                        (u[(u.B = 66)] = 'B'),
                        (u[(u.C = 67)] = 'C'),
                        (u[(u.D = 68)] = 'D'),
                        (u[(u.E = 69)] = 'E'),
                        (u[(u.F = 70)] = 'F'),
                        (u[(u.G = 71)] = 'G'),
                        (u[(u.H = 72)] = 'H'),
                        (u[(u.I = 73)] = 'I'),
                        (u[(u.J = 74)] = 'J'),
                        (u[(u.K = 75)] = 'K'),
                        (u[(u.L = 76)] = 'L'),
                        (u[(u.M = 77)] = 'M'),
                        (u[(u.N = 78)] = 'N'),
                        (u[(u.O = 79)] = 'O'),
                        (u[(u.P = 80)] = 'P'),
                        (u[(u.Q = 81)] = 'Q'),
                        (u[(u.R = 82)] = 'R'),
                        (u[(u.S = 83)] = 'S'),
                        (u[(u.T = 84)] = 'T'),
                        (u[(u.U = 85)] = 'U'),
                        (u[(u.V = 86)] = 'V'),
                        (u[(u.W = 87)] = 'W'),
                        (u[(u.X = 88)] = 'X'),
                        (u[(u.Y = 89)] = 'Y'),
                        (u[(u.Z = 90)] = 'Z');
                })(ge || (ge = {}));
                const pe = (u = {}) => {
                        (0, a.useEffect)(() => {
                            const e = (e) => {
                                if (!e.altKey && !e.ctrlKey && !e.shiftKey) {
                                    const t = u[e.keyCode];
                                    'function' == typeof t && t(e);
                                }
                            };
                            return (
                                window.addEventListener('keyup', e),
                                () => {
                                    window.removeEventListener('keyup', e);
                                }
                            );
                        }, [u]);
                    },
                    he = 'Banner_base_54',
                    we = 'Banner_content_cd',
                    be = 'Banner_icon_44',
                    ve = 'Banner_description_54',
                    fe = 'Banner_title_17',
                    Re = 'Banner_text_86',
                    Te = 'Banner_buttonContainer_74',
                    Se = 'Banner_buttonWrapper_8d',
                    ye = 'Banner_buttonGlow_e9',
                    Pe = R.strings.battle_pass.battlePassAwardsView.footer,
                    Le = (0, Du.Pi)(({ className: u, parentRef: e }) => {
                        const t = X(),
                            a = t.model,
                            r = t.controls,
                            i = a.root.get(),
                            s = i.seasonStopped,
                            o = i.currentLevel;
                        pe({ [eu.n.ENTER]: r.buy, [eu.n.SPACE]: r.buy });
                        const l = f().mediaSize >= w.Medium;
                        return n().createElement(
                            'div',
                            { ref: e, className: g()(he, u) },
                            n().createElement(
                                'div',
                                { className: we },
                                n().createElement('div', { className: be }),
                                n().createElement(
                                    'div',
                                    { className: ve },
                                    n().createElement('div', { className: fe }, Pe.bpTitle()),
                                    n().createElement(
                                        'div',
                                        { className: Re },
                                        o >= 45 ? Pe.bpLastStagesTitle() : Pe.bpInProgressTitle(),
                                    ),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: Te },
                                n().createElement('div', { className: ye }),
                                n().createElement(
                                    'div',
                                    { className: Se },
                                    n().createElement(
                                        Ce,
                                        { disabled: s, type: De.main, size: l ? me.medium : me.small, onClick: r.buy },
                                        Pe.bpButtonTitle(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    xe = 'Footer_base_a9',
                    Oe = 'Footer_title_79',
                    Me = 'Footer_title__highlight_36',
                    Ne = 'Footer_buttonContainer_64',
                    ke = R.strings.battle_pass.battlePassAwardsView,
                    Ie = (0, Du.Pi)(({ button: u, className: e }) => {
                        const t = X().model,
                            a = f().mediaSize,
                            r = t.root.get(),
                            i = r.reason,
                            s = r.chapterID,
                            o = r.isBaseStyleLevel,
                            l = t.computes.isReasonBuyCurrently(),
                            E = ((u, e, t) => {
                                switch (u) {
                                    case I.BUY_BATTLE_PASS:
                                        return ou(ke.mainReward.bpBuyAwardsCaption(), {
                                            chapter: R.strings.battle_pass.chapter.fullName.$num(e),
                                        });
                                    case I.BUY_BATTLE_PASS_WITH_LEVELS:
                                        return ou(ke.mainReward.bpBuyWithLevels(), {
                                            chapter: R.strings.battle_pass.chapter.fullName.$num(e),
                                        });
                                    case I.BUY_MULTIPLE_BATTLE_PASS:
                                        return ke.footer.allChaptersText();
                                    case I.STYLE_UPGRADE:
                                        return t ? ke.footer.bpDescriptionGotStyle() : '';
                                    default:
                                        return '';
                                }
                            })(i, s, o),
                            c = a >= w.Medium;
                        return n().createElement(
                            'div',
                            { className: g()(xe, e) },
                            Boolean(E.length) && n().createElement('div', { className: g()(Oe, l && Me) }, E),
                            n().createElement(
                                'div',
                                { className: Ne },
                                n().createElement(
                                    Ce,
                                    { type: De.primary, size: c ? me.medium : me.small, onClick: u.onClick },
                                    u.text,
                                ),
                            ),
                        );
                    }),
                    Ue = (u, e) => {
                        const t = e.postfix ? `_${e.postfix}` : '';
                        return ((u) => {
                            const e = u.path.$dyn(`${u.name}_${u.id}`),
                                t = u.path.$dyn('default');
                            return e || t;
                        })(u).$dyn(`${e.name}${t}`);
                    };
                let Ge;
                !(function (u) {
                    (u.Season = 'season'), (u.Chapter = 'chapter');
                })(Ge || (Ge = {}));
                const He = 'ChapterLogo_base_46',
                    We = (0, Du.Pi)(() => {
                        const u = X().model,
                            e = u.root.get().chapterID,
                            t = f().mediaSize < w.Medium,
                            a = i.O.view.getScale(),
                            r = () => (2 !== a && t ? '_medium' : ''),
                            s = (() => {
                                if (u.computes.isMultiplePurchase())
                                    return {
                                        backgroundImage: `url(R.images.gui.maps.icons.battlePass.rewards.bp_icon_triple${r()})`,
                                    };
                                const t = {
                                        path: R.images.gui.maps.icons.battlePass.rewards.chapterLogo,
                                        name: Ge.Chapter,
                                        id: e,
                                    },
                                    a = { name: 'bp_icon', postfix: `${r().slice(1)}` };
                                return { backgroundImage: `url(${Ue(t, a)})` };
                            })();
                        return n().createElement('div', { className: He, style: s });
                    }),
                    $e = 'Glow_base_92',
                    Ve = 'Glow_glow_02',
                    Ye = ({ className: u }) =>
                        n().createElement(
                            'div',
                            { className: g()($e, u) },
                            n().createElement('img', {
                                className: Ve,
                                src: 'swf://gui/flash/animations/battlePass/rays.swf',
                                alt: '',
                            }),
                        );
                let qe, ze, je;
                !(function (u) {
                    (u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge');
                })(qe || (qe = {})),
                    (function (u) {
                        (u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.eliteXP = 'eliteXP'),
                            (u.equipCoin = 'equipCoin');
                    })(ze || (ze = {})),
                    (function (u) {
                        (u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG');
                    })(je || (je = {}));
                const Xe = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ke = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Qe = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Ze = (u) =>
                        Qe
                            ? `${u}`
                            : (function (u) {
                                  let e = '';
                                  for (let t = Ke.length - 1; t >= 0; t--)
                                      for (; u >= Ke[t]; ) (e += Xe[t]), (u -= Ke[t]);
                                  return e;
                              })(u),
                    Je = { base: 'TankName_base_d5', base__wide: 'TankName_base__wide_c6', type: 'TankName_type_4d' },
                    ut = (u, e) => ({
                        backgroundImage: `url(${`R.images.gui.maps.icons.vehicleTypes.big.${`${u.replace('-', '_')}${e ? '_elite' : ''}`}`})`,
                    }),
                    et = ({ isElite: u, vehicleName: e, vehicleType: t, vehicleLvl: a, isWide: r }) =>
                        n().createElement(
                            'div',
                            { className: g()(Je.base, r && Je.base__wide) },
                            n().createElement('div', { className: Je.level }, Ze(a)),
                            n().createElement('div', { className: Je.type, style: ut(t, u) }),
                            n().createElement('div', { className: Je.name }, e),
                        ),
                    tt = 'FormatText_base_d0',
                    at = ({ binding: u, text: e = '', classMix: t, alignment: r = iu.left, formatWithBrackets: i }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const s = i && u ? su(e, u) : e;
                        return n().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((e, i) =>
                                n().createElement(
                                    'div',
                                    { className: g()(tt, t), key: `${e}-${i}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : _u(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => n().createElement(a.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    nt = R.strings.battle_pass,
                    rt = ({ type: u, value: e }) => {
                        switch (u) {
                            case wu.BattlaPassFinalAchievement:
                                return n().createElement(at, {
                                    text: nt.battlePassAwardsView.mainReward.reward(),
                                    binding: { name: e },
                                });
                            case wu.TmanToken:
                                return n().createElement(at, {
                                    text: nt.battlePassAwardsView.mainReward.commander(),
                                    binding: { name: e },
                                });
                            case wu.Gold:
                            case wu.Credits:
                            case wu.Crystal:
                            case wu.EquipCoin:
                                return n().createElement(Pu, { format: 'integral', value: Number(e) });
                            default:
                                return n().createElement(n().Fragment, null, lu(e));
                        }
                    },
                    it = {
                        base: 'Title_base_24',
                        title: 'Title_title_20',
                        base__wide: 'Title_base__wide_bd',
                        base__credits: 'Title_base__credits_d6',
                        base__gold: 'Title_base__gold_e5',
                        base__crystal: 'Title_base__crystal_94',
                        subtitle: 'Title_subtitle_47',
                    },
                    st = R.strings.battle_pass,
                    ot = ({ reward: u, size: e, className: t }) => {
                        const a = u.name,
                            r = u.userName,
                            i = u.vehicleLvl,
                            s = u.vehicleName,
                            o = u.vehicleType,
                            l = u.isElite,
                            E = u.isCollectionEntity,
                            c = a === wu.Vehicles;
                        return n().createElement(
                            'div',
                            { className: g()(it.base, it[`base__${e}`], it[`base__${a}`], t) },
                            n().createElement(
                                'div',
                                { className: it.title },
                                c && i && s && o
                                    ? n().createElement(et, {
                                          vehicleLvl: i,
                                          vehicleName: s,
                                          vehicleType: o,
                                          isElite: l || !1,
                                          isWide: e === ct.Wide,
                                      })
                                    : n().createElement(rt, { type: a, value: r }),
                            ),
                            E && n().createElement('div', { className: it.subtitle }, st.common.collectionText()),
                        );
                    },
                    lt = {
                        base: 'Reward_base_14',
                        imageWrapper: 'Reward_imageWrapper_5a',
                        image: 'Reward_image_2d',
                        fadeInWithScale: 'Reward_fadeInWithScale_c5',
                        base__updateAnimation: 'Reward_base__updateAnimation_df',
                        base__wide: 'Reward_base__wide_fa',
                        base__small: 'Reward_base__small_e4',
                        title: 'Reward_title_3d',
                        fadeIn: 'Reward_fadeIn_f4',
                        count: 'Reward_count_22',
                        fadeOut: 'Reward_fadeOut_ee',
                        slideUp: 'Reward_slideUp_3e',
                        scale: 'Reward_scale_38',
                        rotate: 'Reward_rotate_4f',
                    },
                    Et = R.strings.battle_pass;
                let ct;
                !(function (u) {
                    (u.Normal = 'normal'), (u.Wide = 'wide'), (u.Small = 'small');
                })(ct || (ct = {}));
                const At = [wu.BattlaPassFinalAchievement, wu.TmanToken, wu.Vehicles],
                    dt = [
                        ze.credits,
                        ze.gold,
                        ze.crystal,
                        ze.xp,
                        ze.freeXP,
                        ze.equipCoin,
                        wu.BattlaPassFinalAchievement,
                        wu.TmanToken,
                        wu.Vehicles,
                        wu.PremiumPlus,
                    ],
                    Ft = (0, Du.Pi)(({ reward: u, rewardListIndex: e }) => {
                        const t = X().model,
                            a = t.canToOpenAdditionView.get(),
                            r = t.computes.hasBigSizeReward(),
                            i = t.computes.getRewardsLength(),
                            s = u.bigIcon,
                            o = u.overlayType,
                            l = u.tooltipContentId,
                            E = u.tooltipId,
                            c = u.name,
                            A = u.userName,
                            d = u.value,
                            F = ((_ = c), !dt.includes(_) && Number(d) > 1);
                        var _;
                        const D = ((u) => At.includes(u))(c) || (A && A.length > 0),
                            m = () => (r ? (1 === i || 1 === e ? ct.Wide : ct.Small) : ct.Normal);
                        return n().createElement(
                            'div',
                            { className: g()(lt.base, lt[`base__${m()}`], a && lt.base__updateAnimation) },
                            n().createElement(
                                $u,
                                { ignoreShowDelay: !0, contentId: Number(l), args: { tooltipId: E } },
                                n().createElement(
                                    'div',
                                    { className: lt.imageWrapper },
                                    n().createElement('div', { className: lt.image, style: se(s, o) }),
                                    F &&
                                        n().createElement(
                                            'div',
                                            { className: lt.count },
                                            ou(Et.common.multiplier(), { multiplier: d }),
                                        ),
                                ),
                            ),
                            D && n().createElement(ot, { reward: u, size: m(), className: lt.title }),
                        );
                    }),
                    _t = 'Rewards_base_05',
                    Dt = 'Rewards_base__updateSize_5b',
                    mt = (0, Du.Pi)(() => {
                        const u = X().model,
                            e = u.canToOpenAdditionView.get(),
                            t = u.computes.getRewards();
                        return n().createElement(
                            'div',
                            { className: g()(_t, e && Dt) },
                            t.map((u, e) =>
                                n().createElement(Ft, { reward: u, key: `reward-${e}`, rewardListIndex: e }),
                            ),
                        );
                    }),
                    Bt = 'Ribbon_base_e0',
                    Ct = 'Ribbon_base__indentWide_6b',
                    gt = (0, Du.Pi)(() => {
                        const u = X().model,
                            e = u.root.get(),
                            t = e.isBattlePassPurchased,
                            a = e.chapterID,
                            r = u.computes.hasBigSizeReward(),
                            i = u.computes.isReasonBuyCurrently(),
                            s = r || i,
                            o = ((u) => {
                                switch (u) {
                                    case w.ExtraSmall:
                                    case w.Small:
                                        return 'small';
                                    case w.Medium:
                                        return 'medium';
                                    default:
                                        return 'large';
                                }
                            })(f().mediaSize),
                            l = (() => {
                                const u = {
                                    path: R.images.gui.maps.icons.battlePass.logo.ribbon,
                                    name: Ge.Chapter,
                                    id: a,
                                };
                                return {
                                    backgroundImage: `url(${Ue(u, { name: 'ribbon', postfix: `${o}${t ? '_with_bp' : ''}` })})`,
                                };
                            })();
                        return n().createElement('div', { className: g()(Bt, s && Ct), style: l });
                    }),
                    pt = 'MainRewards_base_ad',
                    ht = 'MainRewards_glow_61',
                    wt = 'MainRewards_rays_20',
                    bt = (0, Du.Pi)(({ className: u }) => {
                        const e = X().model,
                            t = e.canToOpenAdditionView.get(),
                            r = e.computes.isReasonBuyCurrently(),
                            i = e.computes.hasGlowAnimation(),
                            s = (0, a.useState)(!1),
                            o = s[0],
                            l = s[1],
                            E = (0, ee.useSpring)({
                                from: { contentOpacity: 1 },
                                contentOpacity: t ? 1 : 0,
                                config: { duration: 400 },
                                onResolve: () => {
                                    t && l(!0);
                                },
                            }).contentOpacity;
                        return n().createElement(
                            'div',
                            { className: g()(pt, u) },
                            i && !t && n().createElement(Ye, { className: ht }),
                            n().createElement(gt, null),
                            n().createElement('div', { className: wt }),
                            r && !o
                                ? n().createElement(
                                      ee.animated.div,
                                      { style: { opacity: E.to({ output: [1, 0] }) } },
                                      n().createElement(We, null),
                                  )
                                : n().createElement(mt, null),
                        );
                    }),
                    vt = 'RewardsApp_base_94',
                    ft = 'RewardsApp_overlay_88',
                    Rt = 'RewardsApp_overlay__common_ff',
                    Tt = 'RewardsApp_main_72',
                    St = 'RewardsApp_close_c1',
                    yt = 'RewardsApp_content_59',
                    Pt = 'RewardsApp_header_6c',
                    Lt = 'RewardsApp_rewards_62',
                    xt = 'RewardsApp_rewards__additionalCentring_f7',
                    Ot = 'RewardsApp_additionalRewards_ba',
                    Mt = 'RewardsApp_additionalRewards__diffTop_ff',
                    Nt = 'RewardsApp_additionalRewards__slideTop_da',
                    kt = 'RewardsApp_base__buyWithLevels_ae',
                    It = 'RewardsApp_additionalRewards__animateSlide_6c',
                    Ut = 'RewardsApp_additionalRewards__indentS_b4',
                    Gt = 'RewardsApp_mainRewards_18',
                    Ht = 'RewardsApp_mainRewards__slideTop_ed',
                    Wt = 'RewardsApp_mainRewards__animateSlide_a7',
                    $t = 'RewardsApp_footer_1f',
                    Vt = 'RewardsApp_footer__hide_82',
                    Yt = 'RewardsApp_banner_25',
                    qt = 'RewardsApp_banner__showPreparation_5c',
                    zt = R.strings.battle_pass,
                    jt = (u) =>
                        u
                            ? ou(zt.battlePassAwardsView.header.bpTitle(), {
                                  chapter: zt.chapter.fullNameUppercased.$num(u),
                              })
                            : zt.battlePassAwardsView.header.bpTitleWithoutChapter(),
                    Xt = (u, e) => {
                        switch (u) {
                            case I.BUY_BATTLE_PASS:
                            case I.BUY_MULTIPLE_BATTLE_PASS:
                            case I.BUY_BATTLE_PASS_WITH_LEVELS:
                                return zt.battlePassAwardsView.header.bpTitleWithoutChapter();
                            case I.BUY_BATTLE_PASS_LEVELS:
                            case I.STYLE_UPGRADE:
                            case I.DEFAULT:
                                return jt(e);
                        }
                        return console.warn('Unknown title reason: ', u), jt(e);
                    },
                    Kt = (u, e, t) => {
                        switch (u) {
                            case I.BUY_BATTLE_PASS:
                            case I.BUY_MULTIPLE_BATTLE_PASS:
                            case I.BUY_BATTLE_PASS_WITH_LEVELS:
                                return zt.battlePassAwardsView.header.bpBoughtText();
                            case I.BUY_BATTLE_PASS_LEVELS:
                                return e
                                    ? zt.battlePassAwardsView.header.bpFinalLevelText()
                                    : zt.battlePassAwardsView.header.bpLevelsText();
                            case I.STYLE_UPGRADE:
                                return t
                                    ? zt.battlePassAwardsView.header.styleReceivedText()
                                    : zt.battlePassAwardsView.header.styleUpgradedText();
                            case I.DEFAULT:
                                return e
                                    ? zt.battlePassAwardsView.header.bpFinalLevelText()
                                    : zt.battlePassAwardsView.header.bpLevelsText();
                        }
                        return console.warn('Unknown status reason: ', u), '';
                    },
                    Qt = (u, e, t, a, n, r) => {
                        const i = ((u, e, t) =>
                            t
                                ? zt.battlePassAwardsView.additionalRewards.seeMoreButtonText()
                                : u
                                  ? ou(zt.battlePassAwardsView.additionalRewards.bpRemainLevelsAwardsText(), {
                                        remainingAwardsCount: e,
                                    })
                                  : zt.battlePassAwardsView.additionalRewards.button())(
                            n,
                            e > a * (t + 1) ? 10 : e - a * t,
                            u,
                        );
                        return { onClick: r, text: i };
                    },
                    Zt = (0, Du.Pi)(() => {
                        const u = X(),
                            e = u.model,
                            t = u.controls,
                            r = e.root.get(),
                            s = r.reason,
                            o = r.chapterID,
                            l = r.isFinalReward,
                            E = r.isBaseStyleLevel,
                            c = r.isNeedToShowOffer,
                            A = e.canToOpenAdditionView.get(),
                            d = e.computes.getAdditionalRewards(),
                            F = e.computes.getAdditionalRewardsLength(),
                            _ = e.computes.hasAdditionalRewards(),
                            D = e.computes.isReasonBuyCurrently(),
                            m = e.computes.isReasonBuyWithLevels(),
                            B = e.computes.isReasonStyleUpgrade(),
                            C = e.computes.hasBigSizeReward(),
                            p = e.computes.getRewards().length > 0,
                            h = (0, a.useState)(1),
                            w = h[0],
                            b = h[1],
                            v = (0, a.useState)(0),
                            f = v[0],
                            T = v[1],
                            S = (0, a.useState)(!1),
                            y = S[0],
                            P = S[1],
                            L = D && p && !A,
                            x = `${i.O.view.pxToRem(f)}rem`;
                        var O;
                        (O = t.close), nu(eu.n.ESCAPE, O);
                        const M = { title: Xt(s, o), subtitle: Kt(s, l, E) },
                            N = d.slice(10 * (w - 1), 10 * w),
                            k = N.length,
                            I = Math.ceil(F / 10),
                            U = w < I,
                            G = I > 1,
                            H = c && !B && !U,
                            W = H && G,
                            $ = !H || W,
                            V = (0, a.useRef)(null),
                            Y = () => {
                                ((u) => {
                                    let e,
                                        t = null;
                                    t = requestAnimationFrame(() => {
                                        t = requestAnimationFrame(() => {
                                            (t = null), (e = u());
                                        });
                                    });
                                })(() => {
                                    V && V.current && T(V.current.offsetHeight);
                                });
                            };
                        (0, a.useEffect)(() => {
                            Y(), P(!1);
                        }, [H, W]),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    Y(), P(!0);
                                };
                                return (
                                    window.addEventListener('resize', u),
                                    () => {
                                        window.removeEventListener('resize', u);
                                    }
                                );
                            }, []);
                        const q = Qt(L, F, w, k, U, () => {
                                L ? t.enableToOpenAdditionView() : U ? b(w + 1) : t.close();
                            }),
                            z = C && _,
                            j = {
                                backgroundImage: o
                                    ? `url(${pu(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, o)})`
                                    : 'url(R.images.gui.maps.icons.battlePass.backgrounds.common)',
                                '--banner-height': x,
                            };
                        return n().createElement(
                            'div',
                            { className: g()(vt, m && A && kt), style: j },
                            n().createElement('div', { className: g()(ft, !o && Rt) }),
                            n().createElement(
                                'div',
                                { className: Tt },
                                n().createElement(
                                    'div',
                                    { className: St },
                                    n().createElement(uu, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: yt },
                                    n().createElement(
                                        'div',
                                        { className: Pt },
                                        n().createElement(hu.h, { title: M.title, status: M.subtitle }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: g()(Lt, z && xt) },
                                        n().createElement(bt, { className: g()(Gt, W && Ht, W && !y && Wt) }),
                                        _ &&
                                            n().createElement(Fe, {
                                                rewards: N,
                                                pageNumber: w,
                                                className: g()(Ot, C && Ut, A && Mt, W && Nt, W && !y && It),
                                            }),
                                    ),
                                ),
                                $ && n().createElement(Ie, { button: q, className: g()($t, W && Vt) }),
                                H && n().createElement(Le, { className: g()(Yt, G && qt), parentRef: V }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    k().render(
                        n().createElement(j, null, n().createElement(M, null, n().createElement(Zt, null))),
                        document.getElementById('root'),
                    );
                });
            },
            801: (u, e, t) => {
                'use strict';
                t.d(e, { h: () => l });
                var a = t(6179),
                    n = t.n(a);
                const r = 'Header_base_a0',
                    i = 'Header_title_09',
                    s = 'Header_status_74',
                    o = 'Header_subtitle_3a',
                    l = ({ title: u, status: e, subtitle: t }) =>
                        n().createElement(
                            'div',
                            { className: r },
                            n().createElement('div', { className: i }, u),
                            n().createElement('div', { className: s }, e),
                            t && n().createElement('div', { className: o }, t),
                        );
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
        (__webpack_require__.j = 1981),
        (() => {
            var u = { 1981: 0, 2286: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(2769));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
