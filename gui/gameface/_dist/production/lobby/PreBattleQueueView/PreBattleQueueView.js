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
                    t.d(e, { mouse: () => E, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    o = (u, e) => engine.on(u, e),
                    s = (u, e) => engine.off(u, e),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    E = (function () {
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
                                        function o(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, o),
                                            a(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(r, o),
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
                        graphicsQuality: () => o,
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
                const o = {
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
                        addModelObserver: () => A,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => p,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => E,
                        getDisplayStatus: () => f,
                        getScale: () => B,
                        getSize: () => c,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => w,
                        isFocused: () => g,
                        pxToRem: () => C,
                        remToPx: () => m,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => S,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                const o = 15;
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, o);
                }
                function E(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function A(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function F(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, o);
                }
                function c(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function D(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: m(e.x), y: m(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function B() {
                    return viewEnv.getScale();
                }
                function C(u) {
                    return viewEnv.pxToRem(u);
                }
                function m(u) {
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
                function w() {
                    return viewEnv.isEventHandled();
                }
                function p() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(n.W).reduce(
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
                    S = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => r });
                const a = ['args'],
                    n = (u, e) => {
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
                    r = {
                        close(u) {
                            n('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(u) {
                            n(16, { isMouseEvent: !0, on: u });
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
                t.d(e, { ry: () => C });
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
                var r = t(1358),
                    i = t(8613);
                let o;
                var s;
                ((s = o || (o = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var c = t(5521),
                    d = t(3138);
                const D = ['args'];
                function _(u, e, t, a, n, r, i) {
                    try {
                        var o = u[r](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(a, n);
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
                                    return new Promise(function (a, n) {
                                        var r = u.apply(e, t);
                                        function i(u) {
                                            _(r, a, n, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            _(r, a, n, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    m = (u, e) => {
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
                                })(e, D);
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
                    h = () => m(o.CLOSE),
                    g = (u, e) => {
                        u.keyCode === c.n.ESCAPE && e();
                    };
                var v = t(7572);
                const w = n.instance,
                    p = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: E,
                        TimeFormatType: A,
                        DateFormatType: F,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => m(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => m(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            m(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                E = s.y,
                                A = s.width,
                                F = s.height,
                                c = {
                                    x: d.O.view.pxToRem(l) + i.x,
                                    y: d.O.view.pxToRem(E) + i.y,
                                    width: d.O.view.pxToRem(A),
                                    height: d.O.view.pxToRem(F),
                                };
                            m(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(c),
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
                            g(u, h);
                        },
                        handleViewEvent: m,
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
                        ClickOutsideManager: w,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = p;
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
            2673: (u, e, t) => {
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
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
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
                })(s || (s = {}));
                const E = i.O.client.getSize('rem'),
                    A = E.width,
                    F = E.height,
                    c = Object.assign({ width: A, height: F }, l(A, F, o)),
                    d = (0, a.createContext)(c),
                    D = ['children'],
                    _ = (u) => {
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
                            })(u, D);
                        const n = (0, a.useContext)(d),
                            i = n.extraLarge,
                            o = n.large,
                            s = n.medium,
                            l = n.small,
                            E = n.extraSmall,
                            A = n.extraLargeWidth,
                            F = n.largeWidth,
                            c = n.mediumWidth,
                            _ = n.smallWidth,
                            B = n.extraSmallWidth,
                            C = n.extraLargeHeight,
                            m = n.largeHeight,
                            h = n.mediumHeight,
                            g = n.smallHeight,
                            v = n.extraSmallHeight,
                            w = { extraLarge: C, large: m, medium: h, small: g, extraSmall: v };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return e;
                            if (t.large && o) return e;
                            if (t.medium && s) return e;
                            if (t.small && l) return e;
                            if (t.extraSmall && E) return e;
                        } else {
                            if (t.extraLargeWidth && A) return r(e, t, w);
                            if (t.largeWidth && F) return r(e, t, w);
                            if (t.mediumWidth && c) return r(e, t, w);
                            if (t.smallWidth && _) return r(e, t, w);
                            if (t.extraSmallWidth && B) return r(e, t, w);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && C) return e;
                                if (t.largeHeight && m) return e;
                                if (t.mediumHeight && h) return e;
                                if (t.smallHeight && g) return e;
                                if (t.extraSmallHeight && v) return e;
                            }
                        }
                        return null;
                    };
                (_.defaultProps = {
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
                    (0, a.memo)(_);
                const B = ({ children: u }) => {
                    const e = (0, a.useContext)(d),
                        t = (0, a.useState)(e),
                        r = t[0],
                        s = t[1],
                        E = (0, a.useCallback)((u, e) => {
                            const t = i.O.view.pxToRem(u),
                                a = i.O.view.pxToRem(e);
                            s(Object.assign({ width: t, height: a }, l(t, a, o)));
                        }, []),
                        A = (0, a.useCallback)(() => {
                            const u = i.O.client.getSize('px');
                            E(u.width, u.height);
                        }, [E]);
                    ((u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    })(() => {
                        i.O.client.events.on('clientResized', E), i.O.client.events.on('self.onScaleUpdated', A);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                i.O.client.events.off('clientResized', E),
                                    i.O.client.events.off('self.onScaleUpdated', A);
                            },
                            [E, A],
                        );
                    const F = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return n().createElement(d.Provider, { value: F }, u);
                };
                var C = t(6483),
                    m = t.n(C),
                    h = t(926),
                    g = t.n(h);
                let v, w, p;
                !(function (u) {
                    (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = o.small.width)] = 'Small'),
                        (u[(u.Medium = o.medium.width)] = 'Medium'),
                        (u[(u.Large = o.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.width)] = 'Small'),
                            (u[(u.Medium = o.medium.width)] = 'Medium'),
                            (u[(u.Large = o.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.height)] = 'Small'),
                            (u[(u.Medium = o.medium.height)] = 'Medium'),
                            (u[(u.Large = o.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(p || (p = {}));
                const f = ['children', 'className'];
                function b() {
                    return (
                        (b = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        b.apply(null, arguments)
                    );
                }
                const x = {
                        [w.ExtraSmall]: '',
                        [w.Small]: g().SMALL_WIDTH,
                        [w.Medium]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH}`,
                        [w.Large]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH} ${g().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [p.ExtraSmall]: '',
                        [p.Small]: g().SMALL_HEIGHT,
                        [p.Medium]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT}`,
                        [p.Large]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT} ${g().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT} ${g().LARGE_HEIGHT} ${g().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [v.ExtraSmall]: '',
                        [v.Small]: g().SMALL,
                        [v.Medium]: `${g().SMALL} ${g().MEDIUM}`,
                        [v.Large]: `${g().SMALL} ${g().MEDIUM} ${g().LARGE}`,
                        [v.ExtraLarge]: `${g().SMALL} ${g().MEDIUM} ${g().LARGE} ${g().EXTRA_LARGE}`,
                    },
                    y = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var a in u)
                                    if ({}.hasOwnProperty.call(u, a)) {
                                        if (e.indexOf(a) >= 0) continue;
                                        t[a] = u[a];
                                    }
                                return t;
                            })(u, f);
                        const i = (() => {
                                const u = (0, a.useContext)(d),
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
                                                return (
                                                    console.error('Unreachable media context resolution'), v.ExtraSmall
                                                );
                                        }
                                    })(u),
                                    r = ((u) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'), w.ExtraSmall
                                                );
                                        }
                                    })(u),
                                    i = ((u) => {
                                        switch (!0) {
                                            case u.extraLargeHeight:
                                                return p.ExtraLarge;
                                            case u.largeHeight:
                                                return p.Large;
                                            case u.mediumHeight:
                                                return p.Medium;
                                            case u.smallHeight:
                                                return p.Small;
                                            case u.extraSmallHeight:
                                                return p.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), p.ExtraSmall
                                                );
                                        }
                                    })(u);
                                return {
                                    mediaSize: n,
                                    mediaWidth: r,
                                    mediaHeight: i,
                                    remScreenWidth: e,
                                    remScreenHeight: t,
                                };
                            })(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return n().createElement('div', b({ className: m()(t, x[o], S[s], L[l]) }, r), e);
                    },
                    M = ['children'],
                    O = (u) => {
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
                            })(u, M);
                        return n().createElement(B, null, n().createElement(y, t, e));
                    };
                var T = t(493),
                    k = t.n(T);
                function P(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const H = {
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
                let W, N;
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
                    })(N || (N = {}));
                const I = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: c,
                    onMouseLeave: d,
                    onClick: D,
                }) => {
                    const _ = (0, a.useRef)(null),
                        B = (0, a.useState)(t),
                        C = B[0],
                        h = B[1],
                        g = (0, a.useState)(!1),
                        v = g[0],
                        w = g[1];
                    return (
                        (0, a.useEffect)(() => {
                            function u(u) {
                                C && null !== _.current && !_.current.contains(u.target) && h(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [C]),
                        (0, a.useEffect)(() => {
                            h(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: _,
                                className: m()(
                                    H.base,
                                    H[`base__${r}`],
                                    i && H.base__disabled,
                                    e && H[`base__${e}`],
                                    C && H.base__focus,
                                    v && H.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (u) {
                                    i || (null !== s && P(s), E && E(u));
                                },
                                onMouseMove: function (u) {
                                    A && A(u);
                                },
                                onMouseUp: function (u) {
                                    i || (c && c(u), w(!1));
                                },
                                onMouseDown: function (u) {
                                    i ||
                                        (null !== l && P(l),
                                        F && F(u),
                                        t && (i || (_.current && (_.current.focus(), h(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (u) {
                                    i || (d && d(u), w(!1));
                                },
                                onClick: function (u) {
                                    i || (D && D(u));
                                },
                            },
                            r !== W.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: H.back }),
                                    n().createElement('span', { className: H.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: m()(H.state, H.state__default) },
                                n().createElement('span', { className: H.stateDisabled }),
                                n().createElement('span', { className: H.stateHighlightHover }),
                                n().createElement('span', { className: H.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: H.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                I.defaultProps = { type: W.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const U = I,
                    G = ({
                        children: u,
                        moveSpace: e,
                        onMouseOver3dScene: t,
                        onDragStateChange: r,
                        isMoveSpaceEnabled: i = !0,
                    }) => {
                        const o = (0, a.useState)(!1),
                            s = o[0],
                            l = o[1],
                            E = (0, a.useState)({ x: 0, y: 0 }),
                            A = E[0],
                            F = E[1],
                            c = (0, a.createRef)(),
                            d = (0, a.useCallback)(() => {
                                l(!1), null == r || r(!1);
                            }, [r]);
                        (0, a.useEffect)(
                            () => (
                                window.addEventListener('mouseup', d), () => window.removeEventListener('mouseup', d)
                            ),
                            [d],
                        );
                        const D = (0, a.useCallback)(
                                (u) => {
                                    if (!c.current) return;
                                    const e = c.current.getBoundingClientRect(),
                                        t = e.width,
                                        a = e.height;
                                    return !(
                                        0 === u.clientX ||
                                        0 === u.clientY ||
                                        u.clientX >= t - 1 ||
                                        u.clientY >= a - 1
                                    );
                                },
                                [c],
                            ),
                            _ = (0, a.useCallback)(
                                (u) => {
                                    u.preventDefault(),
                                        0 === u.button &&
                                            D(u) &&
                                            i &&
                                            (l(!0), null == r || r(!0), F({ x: u.clientX, y: u.clientY }));
                                },
                                [D, i, r],
                            ),
                            B = (0, a.useCallback)(
                                (u) => {
                                    if ((u.preventDefault(), s)) {
                                        if (!D(u)) return;
                                        const t = u.clientX !== A.x ? u.clientX - A.x : 0,
                                            a = u.clientY !== A.y ? u.clientY - A.y : 0;
                                        F({ x: u.clientX, y: u.clientY }), e({ dx: t, dy: a, dz: 0 });
                                    }
                                },
                                [D, s, A.x, A.y, e],
                            ),
                            C = (0, a.useCallback)(
                                (u) => {
                                    if ((u.preventDefault(), !i || !D(u))) return;
                                    const t = u.deltaY < 0;
                                    e({ dx: 0, dy: 0, dz: t ? -600 : 600 });
                                },
                                [D, i, e],
                            ),
                            h = (0, a.useCallback)(() => {
                                l(!1), null == r || r(!1);
                            }, [r]),
                            g = (0, a.useCallback)(() => {
                                t({ isOver3dScene: !0 });
                            }, [t]),
                            v = (0, a.useCallback)(() => {
                                t({ isOver3dScene: !1 });
                            }, [t]);
                        return n().createElement(
                            'div',
                            {
                                ref: c,
                                className: m()(
                                    'SceneWrapper_base_99',
                                    s && 'SceneWrapper_base__down_65',
                                    !i && 'SceneWrapper_base__moveSpaceDisabled_fe',
                                ),
                                onMouseDown: _,
                                onMouseMove: B,
                                onMouseUp: h,
                                onWheel: C,
                                onMouseOver: g,
                                onMouseOut: v,
                            },
                            u,
                        );
                    },
                    V = {
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
                function j() {
                    return (
                        (j = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        j.apply(null, arguments)
                    );
                }
                class z extends n().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && P(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && P(this.props.soundClick);
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
                            o = u.classNames,
                            s = u.onMouseEnter,
                            l = u.onMouseLeave,
                            E = u.onMouseDown,
                            A = u.onMouseUp,
                            F =
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
                                })(u, $)),
                            c = m()(V.base, V[`base__${i}`], V[`base__${r}`], null == o ? void 0 : o.base),
                            d = m()(V.icon, V[`icon__${i}`], V[`icon__${r}`], null == o ? void 0 : o.icon),
                            D = m()(V.glow, null == o ? void 0 : o.glow),
                            _ = m()(V.caption, V[`caption__${i}`], null == o ? void 0 : o.caption),
                            B = m()(V.goto, null == o ? void 0 : o.goto);
                        return n().createElement(
                            'div',
                            j(
                                {
                                    className: c,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                F,
                            ),
                            'info' !== i && n().createElement('div', { className: V.shine }),
                            n().createElement('div', { className: d }, n().createElement('div', { className: D })),
                            n().createElement('div', { className: _ }, e),
                            a && n().createElement('div', { className: B }, a),
                        );
                    }
                }
                function q() {}
                function K() {
                    return !1;
                }
                (z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    console.log;
                var Y = t(5521);
                t(9916);
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
                var Z = t(3403),
                    J = t(9174);
                function uu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const eu = (u) => (0 === u ? window : window.subViews.get(u)),
                    tu = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: r, children: o, mocks: s }) {
                                const l = (0, a.useRef)([]),
                                    E = (u, t, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = eu,
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
                                                const o = (u) => {
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
                                                        const s = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = i.O.view.addModelObserver(s, e, !0);
                                                        return n.set(l, t), u && t(o(r)), l;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (u, e) => {
                                                        const t = o(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = o(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var u,
                                                                t = (function (u, e) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            u[Symbol.iterator]) ||
                                                                        u['@@iterator'];
                                                                    if (t) return (t = t.call(u)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(u) ||
                                                                        (t = (function (u, e) {
                                                                            if (u) {
                                                                                if ('string' == typeof u)
                                                                                    return uu(u, e);
                                                                                var t = {}.toString
                                                                                    .call(u)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        u.constructor &&
                                                                                        (t = u.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(u)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? uu(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(u = t()).done;

                                                        )
                                                            r(u.value, e);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            o =
                                                'real' === u
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === u ? (null == a ? void 0 : a.getter(e)) : o.readByPath(e),
                                            E = (u) => l.current.push(u),
                                            A = (({ observableModel: u }) => ({ root: u.object() }))({
                                                mode: u,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = J.LO.box(a, { equals: K });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, J.aD)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = J.LO.box(a, { equals: K });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, J.aD)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (u, e) => ((u[e] = J.LO.box(a[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, J.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                r = Object.entries(n),
                                                                i = r.reduce(
                                                                    (u, [e, t]) => ((u[t] = J.LO.box(a[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, J.aD)((u) => {
                                                                            r.forEach(([e, t]) => {
                                                                                i[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            F = { mode: u, model: A, externalModel: o, cleanup: E };
                                        return {
                                            model: A,
                                            controls: 'mocks' === u && a ? a.controls(F) : e(F),
                                            externalModel: o,
                                            mode: u,
                                        };
                                    },
                                    A = (0, a.useRef)(!1),
                                    F = (0, a.useState)(u),
                                    c = F[0],
                                    d = F[1],
                                    D = (0, a.useState)(() => E(u, r, s)),
                                    _ = D[0],
                                    B = D[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        A.current ? B(E(c, r, s)) : (A.current = !0);
                                    }, [s, c, r]),
                                    (0, a.useEffect)(() => {
                                        d(u);
                                    }, [u]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            _.externalModel.dispose(), l.current.forEach((u) => u());
                                        },
                                        [_],
                                    ),
                                    n().createElement(t.Provider, { value: _ }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: u }) => ({
                        moveSpace: u.createCallback((u) => u, 'onMoveSpace'),
                        mouseOver3dScene: u.createCallback((u) => ({ isOver3dScene: u }), 'onOverScene'),
                        exitBattle: u.createCallbackNoArgs('onExitBattle'),
                        openMenu: u.createCallbackNoArgs('onEscape'),
                    })),
                    au = tu[0],
                    nu = tu[1];
                let ru;
                t(1281),
                    (function (u) {
                        (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                    })(ru || (ru = {})),
                    new RegExp(
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
                var iu = t(8613);
                const ou = 3600;
                Date.now(), iu.Ew.getRegionalDateTime, iu.Ew.getFormattedDateTime;
                const su = ({ className: u }) => {
                        const e = (0, a.useState)(0),
                            t = e[0],
                            r = e[1];
                        (0, a.useEffect)(() => {
                            const u = Date.now(),
                                e = setInterval(() => {
                                    const e = Math.max(Math.floor((Date.now() - u) / 1e3));
                                    r(e);
                                }, 1e3);
                            return () => clearInterval(e);
                        }, []);
                        const i = (function (u = 0) {
                                let e = u;
                                const t = Math.trunc(e / 86400);
                                e -= 86400 * t;
                                const a = Math.trunc(e / ou);
                                e -= a * ou;
                                const n = Math.trunc(e / 60);
                                return (e -= 60 * n), { days: t, hours: a, minutes: n, seconds: e };
                            })(t),
                            o = i.minutes,
                            s = i.seconds;
                        return n().createElement('div', { className: u }, `${o}:${String(s).padStart(2, '0')}`);
                    },
                    lu = R.strings.halloween_lobby.preBattle,
                    Eu = (0, Z.Pi)(() => {
                        const u = nu(),
                            e = u.model,
                            t = u.controls,
                            a = e.root.get(),
                            r = a.selectedDifficultyLevel,
                            i = a.isExitButtonAvailable;
                        var o;
                        return (
                            (o = t.openMenu),
                            Q(Y.n.ESCAPE, o),
                            n().createElement(
                                'div',
                                { className: 'PreBattleQueueViewApp_base_0c' },
                                i &&
                                    n().createElement(z, {
                                        classNames: { base: 'PreBattleQueueViewApp_closeBtn_3f' },
                                        caption: lu.uppercase.leave(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.exitBattle,
                                    }),
                                n().createElement('div', { className: 'PreBattleQueueViewApp_vignette_02' }),
                                n().createElement(
                                    'div',
                                    { className: 'PreBattleQueueViewApp_sceneWrapper_ba' },
                                    n().createElement(G, { moveSpace: t.moveSpace, onMouseOver3dScene: q }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'PreBattleQueueViewApp_container_4a' },
                                    n().createElement(
                                        'div',
                                        { className: 'PreBattleQueueViewApp_containerIcon_00' },
                                        n().createElement('div', { className: 'PreBattleQueueViewApp_smoke_41' }),
                                        n().createElement('div', {
                                            className: 'PreBattleQueueViewApp_icon_3d',
                                            style: {
                                                backgroundImage: `url('R.images.halloween.gui.maps.icons.difficulties.c_112x112.diff_${r}')`,
                                            },
                                        }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: 'PreBattleQueueViewApp_title_c2' },
                                        R.strings.halloween_lobby.difficult.uppercase.$dyn(`level_${r}`),
                                    ),
                                    n().createElement(su, { className: 'PreBattleQueueViewApp_timer_ec' }),
                                    n().createElement(
                                        'div',
                                        { className: 'PreBattleQueueViewApp_searching_e4' },
                                        lu.searching(),
                                    ),
                                    i &&
                                        n().createElement(
                                            'div',
                                            { className: 'PreBattleQueueViewApp_leaveBtn_6c' },
                                            n().createElement(
                                                U,
                                                { type: W.primary, size: N.medium, onClick: t.exitBattle },
                                                lu.leave(),
                                            ),
                                        ),
                                    n().createElement('div', { className: 'PreBattleQueueViewApp_tip_34' }, lu.tip()),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    k().render(
                        n().createElement(O, null, n().createElement(au, null, n().createElement(Eu, null))),
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
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, a] = deferred[s], r = !0, i = 0; i < e.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, a];
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
        (__webpack_require__.j = 709),
        (() => {
            var u = { 709: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        n,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < r.length; s++)
                        (n = r[s]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(2673));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
