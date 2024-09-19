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
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => r, onScaleUpdated: () => i });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
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
                                        i = l[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        a(),
                                        () => {
                                            n &&
                                                (i(),
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
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var a = t(527),
                    n = t(2493);
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
                t.d(u, { ZP: () => i });
                var a = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, a.playSound)(n[u])), e), {}),
                    i = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
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
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => v,
                        events: () => r.U,
                        extraSize: () => b,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => p,
                        isFocused: () => h,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => R,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                function s(e) {
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
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    b = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    R = Promise.all([
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
                    i = 32,
                    s = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? n : i);
                        },
                        minimize() {
                            o(s);
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
                t.d(u, { B3: () => o, Z5: () => i.Z5, B0: () => s, ry: () => D });
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
                var i = t(8613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    m = t(3138);
                const _ = ['args'];
                function A(e, u, t, a, n, r, i) {
                    try {
                        var s = e[r](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(a, n);
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
                                        function i(e) {
                                            A(r, a, n, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(r, a, n, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
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
                    g = () => B(s.CLOSE),
                    h = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var C = t(7572);
                const p = n.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => B(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => B(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                E = o.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            B(s.POP_OVER, {
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
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, g);
                        },
                        handleViewEvent: B,
                        onBindingsReady: D,
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
                        ClickOutsideManager: p,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = w;
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
            1290: (e, u, t) => {
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
                var i = t(3138);
                const s = {
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
                const c = i.O.client.getSize('rem'),
                    d = c.width,
                    E = c.height,
                    m = Object.assign({ width: d, height: E }, l(d, E, s)),
                    _ = (0, a.createContext)(m),
                    A = ['children'];
                const F = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, A);
                    const n = (0, a.useContext)(_),
                        i = n.extraLarge,
                        s = n.large,
                        o = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        E = n.largeWidth,
                        m = n.mediumWidth,
                        F = n.smallWidth,
                        D = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        g = n.largeHeight,
                        h = n.mediumHeight,
                        C = n.smallHeight,
                        p = n.extraSmallHeight,
                        w = { extraLarge: B, large: g, medium: h, small: C, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return r(u, t, w);
                        if (t.largeWidth && E) return r(u, t, w);
                        if (t.mediumWidth && m) return r(u, t, w);
                        if (t.smallWidth && F) return r(u, t, w);
                        if (t.extraSmallWidth && D) return r(u, t, w);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && p) return u;
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
                            o = t[1],
                            c = (0, a.useCallback)((e, u) => {
                                const t = i.O.view.pxToRem(e),
                                    a = i.O.view.pxToRem(u);
                                o(Object.assign({ width: t, height: a }, l(t, a, s)));
                            }, []),
                            d = (0, a.useCallback)(() => {
                                const e = i.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        D(() => {
                            i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', c),
                                        i.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [c, d],
                            );
                        const E = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(_.Provider, { value: E }, e);
                    };
                var g = t(6483),
                    h = t.n(g),
                    C = t(926),
                    p = t.n(C);
                let w, f, v;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(w || (w = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const b = () => {
                        const e = (0, a.useContext)(_),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return w.ExtraLarge;
                                    case e.large:
                                        return w.Large;
                                    case e.medium:
                                        return w.Medium;
                                    case e.small:
                                        return w.Small;
                                    case e.extraSmall:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
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
                            i = ((e) => {
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
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
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
                const x = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL_WIDTH,
                        [f.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [f.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL_HEIGHT,
                        [v.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [v.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [w.ExtraSmall]: '',
                        [w.Small]: p().SMALL,
                        [w.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [w.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [w.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    N = (e) => {
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
                            })(e, y);
                        const r = b(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return n().createElement('div', S({ className: h()(t, x[i], T[s], k[o]) }, a), u);
                    },
                    L = ['children'];
                const P = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, L);
                    return n().createElement(B, null, n().createElement(N, t, u));
                };
                var I = t(493),
                    O = t.n(I);
                let M, U, H, $, G;
                !(function (e) {
                    (e[(e.Rank = 0)] = 'Rank'),
                        (e[(e.Division = 1)] = 'Division'),
                        (e[(e.RankRewards = 2)] = 'RankRewards'),
                        (e[(e.TokensRewards = 3)] = 'TokensRewards'),
                        (e[(e.QualificationRewards = 4)] = 'QualificationRewards'),
                        (e[(e.QualificationRank = 5)] = 'QualificationRank'),
                        (e[(e.YearlyVehicle = 6)] = 'YearlyVehicle'),
                        (e[(e.YearlyRewards = 7)] = 'YearlyRewards'),
                        (e[(e.SelectedRewards = 8)] = 'SelectedRewards');
                })(M || (M = {})),
                    (function (e) {
                        (e[(e.First = 6)] = 'First'),
                            (e[(e.Second = 5)] = 'Second'),
                            (e[(e.Third = 4)] = 'Third'),
                            (e[(e.Fourth = 3)] = 'Fourth'),
                            (e[(e.Fifth = 2)] = 'Fifth'),
                            (e[(e.Sixth = 1)] = 'Sixth');
                    })(U || (U = {})),
                    (function (e) {
                        (e[(e.A = 1)] = 'A'),
                            (e[(e.B = 2)] = 'B'),
                            (e[(e.C = 3)] = 'C'),
                            (e[(e.D = 4)] = 'D'),
                            (e[(e.E = 5)] = 'E');
                    })(H || (H = {})),
                    (function (e) {
                        (e.First = 'first'), (e.Second = 'second'), (e.Third = 'third');
                    })($ || ($ = {})),
                    (function (e) {
                        (e.None = 'none'), (e.Open = 'open'), (e.Discount = 'discount');
                    })(G || (G = {}));
                var W = t(3403),
                    Y = t(1281);
                let q;
                function j(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function V(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(q || (q = {}));
                const z = (e) => e.replace(/&nbsp;/g, ' '),
                    Q = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    X = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    K = (e, u, t = q.left) => e.split(u).reduce(t === q.left ? Q : X, []),
                    Z = (() => {
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
                    J = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ee = (e, u = q.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (J.includes(t)) return Z(e);
                        if ('ja' === t) {
                            return (0, Y.D4)()
                                .parse(e)
                                .map((e) => z(e));
                        }
                        return ((e, u = q.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = z(e);
                            return K(n, /( )/, u).forEach((e) => (t = t.concat(K(e, a, q.left)))), t;
                        })(e, u);
                    },
                    ue = 'FormatText_base_d0',
                    te = ({ binding: e, text: u = '', classMix: t, alignment: r = q.left, formatWithBrackets: i }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const s = i && e ? j(u, e) : u;
                        return n().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((u, i) =>
                                n().createElement(
                                    'div',
                                    { className: h()(ue, t), key: `${u}-${i}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : ee(e, u))))(
                                        u,
                                        r,
                                        e,
                                    ).map((e, u) => n().createElement(a.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    ae = {
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
                    ne = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    re = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    ie = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    se = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = (0, a.useMemo)(() => u || {}, [u]);
                        let s = ne.exec(e),
                            o = e,
                            l = 0;
                        for (; s; ) {
                            const t = s[0],
                                a = re.exec(t),
                                c = ie.exec(t),
                                d = s[1];
                            if (a && c) {
                                const e = a[0],
                                    s = e + l++ + e;
                                (o = o.replace(t, `%(${s})`)),
                                    (i[s] = ae[e]
                                        ? n().createElement(
                                              'span',
                                              { className: ae[e] },
                                              n().createElement(te, { text: d, binding: u }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: r(e) },
                                              n().createElement(te, { text: d, binding: u }),
                                          ));
                            }
                            s = ne.exec(e);
                        }
                        return n().createElement(te, { text: o, classMix: t, binding: i });
                    });
                let oe, le;
                !(function (e) {
                    (e[(e.A = 1)] = 'A'),
                        (e[(e.B = 2)] = 'B'),
                        (e[(e.C = 3)] = 'C'),
                        (e[(e.D = 4)] = 'D'),
                        (e[(e.E = 5)] = 'E');
                })(oe || (oe = {})),
                    (function (e) {
                        (e[(e.Achieved = 0)] = 'Achieved'),
                            (e[(e.Current = 1)] = 'Current'),
                            (e[(e.Inactive = 2)] = 'Inactive');
                    })(le || (le = {}));
                const ce = R.strings.comp7.division,
                    de = { [oe.A]: 'A', [oe.B]: 'B', [oe.C]: 'C', [oe.D]: 'D', [oe.E]: 'E' },
                    Ee = (e) => ce.$dyn(de[e]),
                    me = (e) => V(ce.text(), { division: Ee(e) });
                let _e;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(_e || (_e = {}));
                const Ae = {
                        [_e.First]: 'first',
                        [_e.Second]: 'second',
                        [_e.Third]: 'third',
                        [_e.Fourth]: 'fourth',
                        [_e.Fifth]: 'fifth',
                        [_e.Sixth]: 'sixth',
                    },
                    Fe = (e, u) => `${e.$dyn(Ae[u])}`,
                    De = (e) => Fe(R.strings.comp7.rank, e);
                function Be(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                var ge = t(7030);
                function he() {}
                function Ce() {
                    return !1;
                }
                console.log;
                var pe = t(9174);
                function we(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return fe(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return fe(e, u);
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
                function fe(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const ve = (e) => (0 === e ? window : window.subViews.get(e));
                function be(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const Re = be;
                function ye(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Se(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function xe(e, u = 0, t = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let a = Math.max(u, 0);
                            const n = Math.min(
                                t,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (a > n) return { done: !0, value: null };
                                    const u = e[a++];
                                    return u ? { value: ye(u), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function Te(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let a = t;
                    for (let t = 0; t < e.length; t++) {
                        a = u(a, Re(e, t), t, e);
                    }
                    return a;
                }
                var ke = t(3946);
                const Ne = {
                        0: 'comp_7_rank_iron',
                        2: 'comp_7_rank_bronze',
                        4: 'comp_7_rank_silver',
                        6: 'comp_7_rank_gold',
                        9: 'comp_7_rank_champion',
                        12: 'comp_7_rank_legend',
                    },
                    Le = {
                        [U.First]: { start: 0, end: 2 },
                        [U.Second]: { start: 2, end: 4 },
                        [U.Third]: { start: 4, end: 6 },
                        [U.Fourth]: { start: 6, end: 9 },
                        [U.Fifth]: { start: 9, end: 12 },
                        [U.Sixth]: { start: 12, end: 15 },
                    },
                    Pe = {
                        [M.Rank]: 'rank',
                        [M.Division]: 'division',
                        [M.RankRewards]: 'rankRewards',
                        [M.TokensRewards]: 'tokensRewards',
                        [M.QualificationRewards]: 'qualificationRewards',
                        [M.QualificationRank]: 'qualificationRank',
                        [M.YearlyVehicle]: 'yearlyVehicle',
                        [M.YearlyRewards]: 'yearlyRewards',
                        [M.SelectedRewards]: 'selectedRewards',
                    },
                    Ie = R.strings.comp7.rewardsScreen,
                    Oe = R.images.gui.maps.icons.comp7.backgrounds,
                    Me = [M.RankRewards, M.QualificationRewards],
                    Ue = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: s, children: o, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    d = (t, a, n) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ve,
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
                                                        const o = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = i.O.view.addModelObserver(o, u, !0);
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
                                                        for (var e, t = we(n.keys()); !(e = t()).done; ) r(e.value, u);
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
                                            l = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            n = pe.LO.box(a, { equals: Ce });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, pe.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            n = pe.LO.box(a, { equals: Ce });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, pe.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const a = l(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = pe.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, pe.aD)((u) => {
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
                                                                i = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = pe.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, pe.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: t, model: E, externalModel: o, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && n ? n.controls(m) : u(m),
                                            externalModel: o,
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
                                    n().createElement(t.Provider, { value: D }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    additionalRewards: e.array('additionalRewards'),
                                    mainRewards: e.array('mainRewards'),
                                    qualificationBattles: e.array('qualificationBattles'),
                                    rankList: e.array('rankList'),
                                    seasonsResults: e.array('seasonsResults'),
                                    vehicle: e.object('vehicle'),
                                },
                                t = (0, ke.Om)((e) => {
                                    const t = be(u.qualificationBattles.get(), e);
                                    if (!t) throw new Error(`qualification battle with index ${e} was not found`);
                                    return t.state;
                                }),
                                a = (0, ke.Om)(
                                    (e) => {
                                        const t = be(u.seasonsResults.get(), e);
                                        if (!t) throw new Error(`seasonResult with index ${e} was not found`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: Ce },
                                ),
                                n = (0, ke.Om)(() => Te(u.seasonsResults.get(), (e, u) => e + u.seasonPointsCount, 0)),
                                r = (0, ke.Om)(() => {
                                    const e = u.root.get(),
                                        t = e.type,
                                        a = e.shopInfoType;
                                    return Me.includes(t) && a !== G.None;
                                }),
                                i = (0, ke.Om)(() =>
                                    Se(u.rankList.get(), De).join(Ie.subtitle.qualificationRewardsSeparator()),
                                ),
                                s = (0, ke.Om)(() =>
                                    1 !== u.mainRewards.get().length || r()
                                        ? r()
                                            ? 'shopInfo'
                                            : ''
                                        : 'singleMainReward',
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    ranksList: i,
                                    qualificationBattleState: t,
                                    seasonResult: a,
                                    seasonPointsAmount: n,
                                    hasShopInfo: r,
                                    styleModifier: s,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            openShop: e.createCallbackNoArgs('onOpenShop'),
                        }),
                    ),
                    He = Ue[0],
                    $e = Ue[1],
                    Ge = {
                        [_e.First]: 'first',
                        [_e.Second]: 'second',
                        [_e.Third]: 'third',
                        [_e.Fourth]: 'fourth',
                        [_e.Fifth]: 'fifth',
                        [_e.Sixth]: 'sixth',
                    },
                    We = (e) => Ge[e],
                    Ye = [_e.First, _e.Second, _e.Third, _e.Fourth],
                    qe = (e) => Ye.includes(e);
                let je;
                !(function (e) {
                    (e[(e.x22 = 22)] = 'x22'),
                        (e[(e.x40 = 40)] = 'x40'),
                        (e[(e.x48 = 48)] = 'x48'),
                        (e[(e.x64 = 64)] = 'x64'),
                        (e[(e.x84 = 84)] = 'x84'),
                        (e[(e.x110 = 110)] = 'x110'),
                        (e[(e.x150 = 150)] = 'x150'),
                        (e[(e.x200 = 200)] = 'x200'),
                        (e[(e.x260 = 260)] = 'x260'),
                        (e[(e.x320 = 320)] = 'x320'),
                        (e[(e.x420 = 420)] = 'x420'),
                        (e[(e.x600 = 600)] = 'x600');
                })(je || (je = {}));
                const Ve = 'RankEmblem_base_ec',
                    ze = ({ rank: e, size: u, division: t, seasonName: r, className: i }) => {
                        const s = (0, a.useMemo)(() => {
                            const a = R.images.gui.maps.icons.comp7.ranks.$dyn(r).$num(u),
                                n = qe(e) && void 0 !== t ? `_${Ee(t)}` : '';
                            return { backgroundImage: `url(${a.$dyn(`${We(e)}${n}`)})`, '--imageSize': `${u}rem` };
                        }, [r, u, e, t]);
                        return n().createElement('div', { className: h()(Ve, i), style: s });
                    },
                    Qe = 33,
                    Xe = 0,
                    Ke = !0,
                    Ze = 'play';
                const Je = [
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
                const uu = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            r = e.getImageSource,
                            i = e.frameCount,
                            s = e.onAnimate,
                            o = e.frameTime,
                            l = void 0 === o ? Qe : o,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? Xe : c,
                            E = e.lastFrameIndex,
                            m = void 0 === E ? i - 1 : E,
                            _ = e.loop,
                            A = void 0 === _ ? Ke : _,
                            F = e.state,
                            D = void 0 === F ? Ze : F,
                            B = e.onAnimationDone,
                            g = e.onAnimationComplete,
                            h = e.poster,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Je);
                        const p = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = p.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const e = nu(d, m, r),
                                                u = tu(d, m),
                                                a = window.setInterval(() => {
                                                    const n = u(),
                                                        r = e.get(n);
                                                    r
                                                        ? (null == s || s(n, r),
                                                          t(r),
                                                          n === m &&
                                                              (null == g || g(),
                                                              A || (null == B || B(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && h ? { path: h, x: 0, y: 0 } : r(d),
                                                u = new Image();
                                            u.src = e.path;
                                            const a = () => t(au(e, u));
                                            return (
                                                u.addEventListener('load', a), () => u.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, d, m, A, s, g, B, h, D]),
                            n().createElement('canvas', eu({}, C, { width: u, height: t, ref: p }))
                        );
                    }),
                    tu = (e, u) => {
                        let t = e;
                        return () => {
                            const a = t;
                            return (t += 1), t > u && (t = e), a;
                        };
                    },
                    au = (e, u) => Object.assign({}, e, { img: u }),
                    nu = (e, u, t) => {
                        const a = new Map(),
                            n = {};
                        for (let r = e; r <= u; r++) {
                            const e = t(r),
                                u = n[e.path];
                            if (u) a.set(r, au(e, u));
                            else {
                                const u = new Image();
                                (n[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(r, au(e, u));
                            }
                        }
                        return a;
                    },
                    ru = 'AnimatedBackground_base_90',
                    iu = 'AnimatedBackground_rays_e2',
                    su = 'AnimatedBackground_sunShineCanvas_30',
                    ou = 'AnimatedBackground_staticHighlight_da',
                    lu = {
                        width: 400,
                        height: 400,
                        frameCount: 50,
                        chunk: { count: 2, rows: 5, columns: 5 },
                        getChunkPath:
                            ((cu = 'R.images.gui.maps.icons.sequence.sun_shine_big_sprite.sprite_'),
                            (e) => `${cu}${e}`),
                    };
                var cu;
                const du = (function (e) {
                        const u = e.chunk,
                            t = u.rows * u.columns;
                        return (a) => {
                            const n = a % t,
                                r = (n % u.columns) * e.width,
                                i = Math.trunc(n / u.columns) * e.height;
                            return { path: e.getChunkPath(Math.trunc(a / t)), x: r, y: i };
                        };
                    })(lu),
                    Eu = ({ className: e }) =>
                        n().createElement(
                            'div',
                            { className: h()(ru, e) },
                            i.O.client.graphicsQuality.isHigh()
                                ? n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement(uu, {
                                          onAnimationDone: he,
                                          width: lu.width,
                                          height: lu.height,
                                          frameCount: lu.frameCount,
                                          getImageSource: du,
                                          frameTime: 50,
                                          className: su,
                                      }),
                                      n().createElement('div', { className: iu }),
                                  )
                                : n().createElement('div', { className: ou }),
                        ),
                    mu = 'DivisionAchievement_base_5a',
                    _u = 'DivisionAchievement_backLayer_41',
                    Au = (0, W.Pi)(({ rankClassname: e }) => {
                        const u = $e().model.root.get(),
                            t = u.rank,
                            a = u.division,
                            r = u.seasonName;
                        return n().createElement(
                            'div',
                            { className: mu },
                            n().createElement(Eu, { className: _u }),
                            n().createElement(ze, { seasonName: r, rank: t, division: a, size: je.x600, className: e }),
                        );
                    }),
                    Fu = 'Notice_base_45',
                    Du = 'Notice_noticeTitle_cb',
                    Bu = 'Notice_noticeIcon_80',
                    gu = R.strings.comp7.rewardsScreen.notice,
                    hu = ({ className: e }) =>
                        n().createElement(
                            'div',
                            { className: h()(Fu, e) },
                            n().createElement(
                                'div',
                                { className: Du },
                                n().createElement('span', { className: Bu }),
                                gu.title(),
                            ),
                            gu.subTitle(),
                        );
                var Cu = t(6112);
                const pu = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    wu = (e) => {
                        (0, a.useEffect)(() => e, []);
                    },
                    fu = [
                        'src',
                        'className',
                        'autoplay',
                        'style',
                        'loop',
                        'isPrebufferKeyframes',
                        'keyframesNameConfig',
                        'onClick',
                    ];
                function vu() {
                    return (
                        (vu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        vu.apply(this, arguments)
                    );
                }
                const bu = (0, a.forwardRef)(function (e, u) {
                        let t = e.src,
                            r = e.className,
                            s = e.autoplay,
                            o = void 0 !== s && s,
                            l = e.style,
                            c = e.loop,
                            d = void 0 !== c && c,
                            E = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            _ = e.onClick,
                            A = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, fu);
                        const F = u,
                            D = (0, a.useRef)(null);
                        return (
                            pu(() =>
                                i.O.view.events.onDisplayChanged((e, u) => {
                                    var t, a;
                                    u === Cu.W.hidden && (null == (t = D.current) || t.pause());
                                    u === Cu.W.shown && (null == (a = D.current) || a.play());
                                }),
                            ),
                            (0, a.useEffect)(
                                () =>
                                    ((e) => {
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
                                    })(() => {
                                        const e = D.current;
                                        if (!F || !e || !E)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const u = e.cohGetKeyframeTimestamps();
                                        u.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              u.map((u) => {
                                                  null == e || e.cohPrebufferKeyframe(u);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [E, F],
                            ),
                            (0, a.useEffect)(() => {
                                if (F && D.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: he,
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
                                                    if (D.current) {
                                                        const t = D.current,
                                                            a = t.currentTime,
                                                            n = t.duration;
                                                        if (
                                                            (u !== a &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: a, duration: n }),
                                                                ),
                                                                (u = a)),
                                                            D.current.paused || !F || !E)
                                                        )
                                                            return;
                                                        const r = D.current.cohGetKeyframeTimestamps();
                                                        r.forEach((u, t) => {
                                                            a > r[t] - 0.02 &&
                                                                a < r[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const a = Object.keys(null != m ? m : {})[t];
                                                                    return e({
                                                                        time: u,
                                                                        name: `${m ? a : `Point_${t}`}`,
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
                                            return null == (e = D.current) ? void 0 : e.currentTime;
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            var u, t, a;
                                            D.current &&
                                                (D.current.currentTime =
                                                    ((u = 0),
                                                    (t = D.current.duration),
                                                    (a = e) < u ? u : a > t ? t : a));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.play();
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            o(), i(0);
                                        },
                                        c = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = D.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            i(e), s();
                                        },
                                        _ = (e) => {
                                            i(e), o();
                                        },
                                        A = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        B = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = D.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = D.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        g = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = D.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = D.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        };
                                    return (
                                        (F.current = {
                                            on: B,
                                            off: g,
                                            play: s,
                                            pause: o,
                                            stop: l,
                                            cleanup: A,
                                            getCurrentTime: n,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: d,
                                            goToAndStop: _,
                                            setCurrentTime: i,
                                            domRef: D.current,
                                            onChangeTime: t,
                                            onKeyframes: a,
                                        }),
                                        () => {
                                            A(), (F.current = null);
                                        }
                                    );
                                }
                            }, [m, F, E]),
                            (0, a.useEffect)(() => {
                                D.current && o && D.current.play();
                            }, [o, d]),
                            (0, a.useEffect)(() => {
                                if (D.current)
                                    return () => {
                                        D.current && D.current.pause();
                                    };
                            }, []),
                            n().createElement(
                                'video',
                                vu({ src: t, className: r, style: l, loop: d, ref: D, onClick: _ }, A),
                            )
                        );
                    }),
                    Ru = (0, a.memo)(bu),
                    yu = 'RankAnimation_base_ed',
                    Su = 'RankAnimation_rank_c0',
                    xu = 'RankAnimation_backLayer_5d',
                    Tu = 'RankAnimation_backLayer__visible_2f',
                    ku = 'RankAnimation_rankEmblemGhost_c7',
                    Nu = 'RankAnimation_rankEmblemGhost__visible_22',
                    Lu = new Set(),
                    Pu = (0, W.Pi)(
                        ({
                            playerRef: e,
                            onKeyframesLoaded: u,
                            onAnimationComplete: t,
                            className: r,
                            classNames: i,
                        }) => {
                            const s = $e().model.root.get(),
                                o = s.rank,
                                l = s.division,
                                c = s.seasonName,
                                d = Le[o],
                                E = qe(o),
                                m = (0, a.useState)(!1),
                                _ = m[0],
                                A = m[1],
                                F = (0, a.useRef)(!1),
                                D = (0, a.useCallback)(() => {
                                    var u;
                                    null == (u = e.current) || u.goToAndStop(d.end),
                                        A(!0),
                                        null == t || t(),
                                        (F.current = !0);
                                }, [t, e, d.end]),
                                B = ((e) => {
                                    const u = (0, a.useRef)(0);
                                    return (
                                        (0, a.useEffect)(() => () => cancelAnimationFrame(u.current), []),
                                        [
                                            () => {
                                                const t = () => {
                                                    e() && (u.current = requestAnimationFrame(t));
                                                };
                                                t();
                                            },
                                            () => cancelAnimationFrame(u.current),
                                        ]
                                    );
                                })(() => {
                                    var t;
                                    const a = null == (t = e.current) ? void 0 : t.getCachedKeyframes();
                                    return null == a || !a.length || (null == u || u(), !1);
                                }),
                                g = B[0],
                                C = B[1];
                            return (
                                pu(() => (g(), C)),
                                (0, a.useEffect)(() => {
                                    var u;
                                    null == (u = e.current) ||
                                        u.onChangeTime((e) => {
                                            if (F && !F.current) {
                                                const u = Math.trunc(e.currentTime),
                                                    t = Ne[u];
                                                if (u >= d.end) return void D();
                                                t && !Lu.has(t) && (Be(t), Lu.add(t));
                                            }
                                        });
                                }, [D, e, d.end]),
                                (0, a.useEffect)(() => {
                                    _ && Be('comp_7_ranks_shine');
                                }, [_]),
                                n().createElement(
                                    'div',
                                    { className: h()(yu, r) },
                                    n().createElement(Eu, {
                                        className: h()(xu, _ && Tu, null == i ? void 0 : i.backLayer),
                                    }),
                                    n().createElement(Ru, {
                                        className: h()(Su, null == i ? void 0 : i.rank),
                                        src: String(R.videos.comp7.$dyn(`rankAnimation_${c}`)),
                                        ref: e,
                                        autoplay: !1,
                                        preload: 'auto',
                                    }),
                                    E &&
                                        n().createElement(ze, {
                                            seasonName: c,
                                            rank: o,
                                            division: l,
                                            size: je.x600,
                                            className: h()(Su, ku, _ && Nu, null == i ? void 0 : i.rank),
                                        }),
                                )
                            );
                        },
                    ),
                    Iu = (0, W.Pi)(({ className: e }) => {
                        const u = $e().model.root.get().rank,
                            t = (0, a.useRef)(null);
                        return n().createElement(Pu, {
                            playerRef: t,
                            onKeyframesLoaded: () => {
                                var e;
                                return null == (e = t.current) ? void 0 : e.goToAndPlay(Le[u].start);
                            },
                            classNames: { rank: e },
                        });
                    }),
                    Ou = 'Achievement_base_df',
                    Mu = 'Achievement_container_2c',
                    Uu = 'Achievement_container__withNotice_88',
                    Hu = 'Achievement_rank_3d',
                    $u = 'Achievement_notice_fb',
                    Gu = (0, W.Pi)(() => {
                        const e = $e().model.root.get(),
                            u = e.type,
                            t = e.hasRankInactivity;
                        (0, a.useEffect)(() => Be('comp_7_new_rank'), []);
                        const r = (0, ge.useSpring)({
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            delay: 400,
                            config: { duration: 400 },
                        });
                        return n().createElement(
                            'div',
                            { className: Ou },
                            n().createElement(
                                ge.animated.div,
                                { className: h()(Mu, t && Uu), style: r },
                                (() => {
                                    switch (u) {
                                        case M.Rank:
                                            return n().createElement(Iu, { className: Hu });
                                        case M.Division:
                                            return n().createElement(Au, { rankClassname: Hu });
                                        default:
                                            return (
                                                console.error(
                                                    '[Achievement] Unreachable branch: add separate Achievement type',
                                                ),
                                                null
                                            );
                                    }
                                })(),
                            ),
                            t && n().createElement(hu, { className: $u }),
                        );
                    }),
                    Wu = {
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
                    Yu = [
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
                function qu() {
                    return (
                        (qu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        qu.apply(this, arguments)
                    );
                }
                class ju extends n().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Be(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Be(this.props.soundClick);
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
                            i = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
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
                                })(e, Yu)),
                            m = h()(Wu.base, Wu[`base__${i}`], Wu[`base__${r}`], null == s ? void 0 : s.base),
                            _ = h()(Wu.icon, Wu[`icon__${i}`], Wu[`icon__${r}`], null == s ? void 0 : s.icon),
                            A = h()(Wu.glow, null == s ? void 0 : s.glow),
                            F = h()(Wu.caption, Wu[`caption__${i}`], null == s ? void 0 : s.caption),
                            D = h()(Wu.goto, null == s ? void 0 : s.goto);
                        return n().createElement(
                            'div',
                            qu(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== i && n().createElement('div', { className: Wu.shine }),
                            n().createElement('div', { className: _ }, n().createElement('div', { className: A })),
                            n().createElement('div', { className: F }, u),
                            a && n().createElement('div', { className: D }, a),
                        );
                    }
                }
                ju.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Vu = t(5521),
                    zu = t(9916);
                const Qu = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Xu(e = Vu.n.NONE, u = Qu, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== Vu.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                const Ku = 'AppContainer_base_1f',
                    Zu = 'AppContainer_close_4d',
                    Ju = (0, W.Pi)(
                        ({ children: e, closeCallback: u }, t) => {
                            const a = $e().controls;
                            var r;
                            return (
                                (r = null != u ? u : a.close),
                                Xu(Vu.n.ESCAPE, r),
                                n().createElement(
                                    'div',
                                    { className: Ku, ref: t },
                                    e,
                                    n().createElement(
                                        'div',
                                        { className: Zu },
                                        n().createElement(ju, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: null != u ? u : a.close,
                                        }),
                                    ),
                                )
                            );
                        },
                        { forwardRef: !0 },
                    ),
                    et = 'AppHeader_base_e4',
                    ut = 'AppHeader_description_7a',
                    tt = 'AppHeader_title_92',
                    at = 'AppHeader_subTitle_c6',
                    nt = ({ description: e, title: u, subTitle: t, className: a, classNames: r }) =>
                        n().createElement(
                            'div',
                            { className: h()(et, a) },
                            e &&
                                n().createElement('div', { className: h()(ut, null == r ? void 0 : r.description) }, e),
                            u && n().createElement('div', { className: h()(tt, null == r ? void 0 : r.title) }, u),
                            t && n().createElement('div', { className: h()(at, null == r ? void 0 : r.subTitle) }, t),
                        ),
                    rt = (e) => `${Ie.title.$dyn(Pe[e])}`,
                    it = (e) => `${Ie.subtitle.$dyn(Pe[e])}`,
                    st = {
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
                let ot, lt;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ot || (ot = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(lt || (lt = {}));
                const ct = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: s,
                    soundHover: o,
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
                        C = (0, a.useState)(!1),
                        p = C[0],
                        w = C[1];
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
                                className: h()(
                                    st.base,
                                    st[`base__${r}`],
                                    i && st.base__disabled,
                                    u && st[`base__${u}`],
                                    B && st.base__focus,
                                    p && st.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== o && Be(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    i || (m && m(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== l && Be(l),
                                        E && E(e),
                                        t && (i || (F.current && (F.current.focus(), g(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (_ && _(e), w(!1));
                                },
                                onClick: function (e) {
                                    i || (A && A(e));
                                },
                            },
                            r !== ot.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: st.back }),
                                    n().createElement('span', { className: st.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: h()(st.state, st.state__default) },
                                n().createElement('span', { className: st.stateDisabled }),
                                n().createElement('span', { className: st.stateHighlightHover }),
                                n().createElement('span', { className: st.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: st.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ct.defaultProps = { type: ot.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const dt = ct,
                    Et = 'Buttons_base_c8',
                    mt = 'Buttons_button_f3',
                    _t = (0, W.Pi)(({ className: e, mainButtonText: u = Ie.button(), closeCallback: t }) => {
                        const a = $e(),
                            r = a.model,
                            i = a.controls;
                        return n().createElement(
                            'div',
                            { className: h()(Et, e) },
                            n().createElement(
                                dt,
                                { type: ot.primary, size: 'medium', onClick: null != t ? t : i.close, mixClass: mt },
                                u,
                            ),
                            r.computes.hasShopInfo() &&
                                n().createElement(
                                    dt,
                                    { type: ot.secondary, size: 'medium', onClick: i.openShop, mixClass: mt },
                                    Ie.buttonToShop(),
                                ),
                        );
                    });
                var At = t(9738);
                const Ft = ({ children: e, className: u }) => {
                        const t = (0, ge.useSpring)({
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            leave: { opacity: 0 },
                            config: At.config.molasses,
                        });
                        return n().createElement(ge.animated.div, { className: u, style: Object.assign({}, t) }, e);
                    },
                    Dt = 'ScreenBackground_base_ad',
                    Bt = 'ScreenBackground_layer_32',
                    gt = 'ScreenBackground_layer__blurred_52',
                    ht = ({ bgImage: e, isBlurred: u = !1, className: t, classNames: a }) =>
                        n().createElement(
                            'div',
                            { className: h()(Dt, t) },
                            n().createElement('div', {
                                className: h()(Bt, u && gt, null == a ? void 0 : a.layer),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        ),
                    Ct = (e, u) => {
                        var t;
                        const a = null == (t = Oe.$dyn(e)) ? void 0 : t.$dyn(We(u));
                        return a
                            ? `${a}`
                            : (console.error(`no background was found for rank ${u}, season ${e}`), R.invalid());
                    },
                    pt = 'DivisionApp_achievement_ff',
                    wt = 'DivisionApp_content_cc',
                    ft = (0, W.Pi)(() => {
                        const e = $e().model.root.get(),
                            u = e.type,
                            t = e.seasonName,
                            a = e.rank,
                            r = e.division;
                        return n().createElement(
                            Ju,
                            null,
                            n().createElement(ht, { bgImage: Ct(t, a), isBlurred: !0 }),
                            n().createElement(
                                Ft,
                                { className: wt },
                                n().createElement(nt, {
                                    description: Ie.description.season.$dyn(t),
                                    title: n().createElement(te, { text: rt(u), binding: { division: Ee(r) } }),
                                    subTitle: n().createElement(se, { text: it(u), binding: { rank: De(a) } }),
                                }),
                                n().createElement('div', { className: pt }, n().createElement(Gu, null)),
                                n().createElement(_t, null),
                            ),
                        );
                    });
                function vt(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return bt(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return bt(e, u);
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
                function bt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                function Rt() {
                    const e = (0, a.useRef)(0);
                    return (
                        wu(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, a.useMemo)(
                            () => ({
                                run: (u, t) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = 0), u();
                                        }, t));
                                },
                                clear: () => {
                                    window.clearTimeout(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const yt = (e) => () => {
                        const u = e.steps,
                            t = e.autoStart,
                            n = void 0 === t || t,
                            r = (0, a.useRef)(null),
                            i = (0, a.useRef)('idle'),
                            s = (() => {
                                const e = (0, a.useMemo)(() => ({}), []),
                                    u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                    t = (e, t) => {
                                        u(e).set(t, t);
                                    },
                                    n = (e, t) => {
                                        u(e).delete(t);
                                    },
                                    r = (e, ...t) => {
                                        for (var a, n = vt(u(e).values()); !(a = n()).done; ) (0, a.value)(...t);
                                    };
                                return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                            })(),
                            o = Rt(),
                            l = (function () {
                                const e = (0, a.useRef)(0);
                                return (
                                    wu(() => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
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
                            })(),
                            c = (0, a.useMemo)(() => {
                                const e = u[Symbol.iterator](),
                                    t = () => {
                                        const u = e.next();
                                        if (u.done) return (i.current = 'end'), void s.trigger('end');
                                        o.run(() => {
                                            if (r.current) {
                                                if (
                                                    (r.current.classList.add(u.value.name),
                                                    s.trigger('change', u.value),
                                                    u.value.stopNextSteps)
                                                )
                                                    return (i.current = 'paused'), void s.trigger('pause');
                                                t();
                                            } else
                                                console.error(
                                                    `${u.value.name} step don't know on what rootRef it should be set`,
                                                );
                                        }, u.value.delay),
                                            (i.current = 'running');
                                    };
                                return {
                                    rootRef: r,
                                    steps: u,
                                    delayUntilStep: (e) => {
                                        let t = 0;
                                        for (let a = 0; a < u.length; a++)
                                            if (((t += u[a].delay), u[a] === e)) return t;
                                        throw new Error(`delayUntilStep didn't find step: ${e.name}`);
                                    },
                                    events: { on: s.on, off: s.off },
                                    start: () => {
                                        t(), s.trigger('start');
                                    },
                                    resume: () => {
                                        'paused' === i.current
                                            ? (t(), s.trigger('resume'))
                                            : console.warn(
                                                  'api.resume() should be called only after paused animation, ignore resume() call',
                                              );
                                    },
                                    skipAll: () => {
                                        o.clear(),
                                            l.run(() => {
                                                u.forEach((e) => {
                                                    r.current
                                                        ? r.current.classList.add(e.name)
                                                        : console.error(
                                                              `${e} tried to be set, but rootRef was not received in api`,
                                                          );
                                                }),
                                                    (i.current = 'end'),
                                                    s.trigger('end');
                                            });
                                    },
                                };
                            }, [o, s, l, u]);
                        return (
                            pu(() => {
                                n && c.start();
                            }),
                            c
                        );
                    },
                    St = {
                        OpeningContent: { name: 'openingContent', delay: 100 },
                        ShowBattlesList: { name: 'showBattlesList', delay: 400 },
                        FillBattles: { name: 'fillBattles', delay: 500 },
                        PauseBeforeRank: { name: 'pauseBeforeShowRank', delay: 1e3 },
                        ShowRank: { name: 'showRank', delay: 200, stopNextSteps: !0 },
                        ChangeBack: { name: 'changeBack', delay: 0 },
                        ShowHeader: { name: 'showHeader', delay: 1e3 },
                        ShowFooter: { name: 'showFooter', delay: 700 },
                    },
                    xt = yt({
                        steps: [
                            St.OpeningContent,
                            St.ShowBattlesList,
                            St.FillBattles,
                            St.PauseBeforeRank,
                            St.ShowRank,
                            St.ChangeBack,
                            St.ShowHeader,
                            St.ShowFooter,
                        ],
                    }),
                    Tt = (0, a.createContext)(null),
                    kt = () => {
                        const e = (0, a.useContext)(Tt);
                        if (null === e)
                            throw new Error(
                                'useAnimationApi was called in component, which is not wrapped in AnimationProvider',
                            );
                        return e;
                    },
                    Nt = ({ children: e }) => {
                        const u = xt();
                        return n().createElement(Tt.Provider, { value: u }, e);
                    },
                    Lt = 'QualificationBackground_rankBg_f2',
                    Pt = 'QualificationBackground_rankBg__blurred_dd',
                    It = 'QualificationBackground_rankBg__active_e5',
                    Ot = 'QualificationBackground_qualification_57',
                    Mt = (0, W.Pi)(() => {
                        var e;
                        const u = $e().model.root.get(),
                            t = u.seasonName,
                            r = u.rank,
                            i = u.type,
                            s = (0, a.useState)(!1),
                            o = s[0],
                            l = s[1],
                            c = `url(${null == (e = Oe.$dyn(t)) ? void 0 : e.$dyn('qualification')})`,
                            d = `url(${Ct(t, r)})`,
                            E = kt();
                        return (
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    e === St.ChangeBack && l(!0);
                                };
                                return (
                                    E.events.on('change', e),
                                    () => {
                                        E.events.off('change', e);
                                    }
                                );
                            }, [E.events]),
                            n().createElement(
                                n().Fragment,
                                null,
                                n().createElement('div', { className: Ot, style: { backgroundImage: c } }),
                                n().createElement('div', {
                                    className: h()(Lt, i === M.QualificationRank && Pt, o && It),
                                    style: { backgroundImage: d },
                                }),
                            )
                        );
                    }),
                    Ut = {
                        header: 'QualificationApp_header_0b',
                        qualificationRank: 'QualificationApp_qualificationRank_8e',
                        rewardList: 'QualificationApp_rewardList_6a',
                        rewardList__singleMainReward: 'QualificationApp_rewardList__singleMainReward_43',
                        buttons: 'QualificationApp_buttons_35',
                    },
                    Ht = (e, u) => {
                        const t = [];
                        for (let a = 0; a < e; a++) t.push(u(a));
                        return t;
                    };
                var $t = t(7006);
                let Gt;
                !(function (e) {
                    (e.NotPlayed = 'notPlayed'),
                        (e.InProgress = 'inProgress'),
                        (e.Victory = 'victory'),
                        (e.Defeat = 'defeat');
                })(Gt || (Gt = {}));
                const Wt = {
                        '--pageContentWidth': '78vw',
                        base: 'QualificationBattleItem_base_0d',
                        base__size_234: 'QualificationBattleItem_base__size_234_ab',
                        battleBackground: 'QualificationBattleItem_battleBackground_67',
                        base__inProgress: 'QualificationBattleItem_base__inProgress_2a',
                        blink: 'QualificationBattleItem_blink_3b',
                        fadeIn: 'QualificationBattleItem_fadeIn_c9',
                        fadeInThreeQuarters: 'QualificationBattleItem_fadeInThreeQuarters_20',
                        fadeInHalf: 'QualificationBattleItem_fadeInHalf_89',
                        fadeOut: 'QualificationBattleItem_fadeOut_c3',
                        fadeInWithScale: 'QualificationBattleItem_fadeInWithScale_4f',
                        slideUp: 'QualificationBattleItem_slideUp_1f',
                        scale: 'QualificationBattleItem_scale_37',
                        raysAppearance: 'QualificationBattleItem_raysAppearance_8f',
                        rotate: 'QualificationBattleItem_rotate_2d',
                        'reverse-rotate': 'QualificationBattleItem_reverse-rotate_9d',
                        glowAppearance: 'QualificationBattleItem_glowAppearance_56',
                        highlightAppearance: 'QualificationBattleItem_highlightAppearance_a0',
                        slideUpIn: 'QualificationBattleItem_slideUpIn_be',
                    },
                    Yt = { notPlayed: 'notFinished', inProgress: 'notFinished', victory: 'victory', defeat: 'defeat' },
                    qt = { x173: 173, x234: 234 },
                    jt = ({ className: e, state: u, size: t = 'x173' }) => {
                        const a = qt[t],
                            r = R.images.gui.maps.icons.comp7.icons.$dyn(`battle_${Yt[u]}`);
                        return n().createElement(
                            'div',
                            { className: h()(Wt.base, e, Wt[`base__${u}`], Wt[`base__size_${a}`]) },
                            n().createElement('div', {
                                className: Wt.battleBackground,
                                style: { backgroundImage: `url(${r})`, '--imageSize': `${a}rem` },
                            }),
                        );
                    },
                    Vt = 'BattleItem_base_a2',
                    zt = 'BattleItem_item_ee',
                    Qt = (0, W.Pi)(({ index: e, className: u }) => {
                        const t = $e().model,
                            r = b().mediaSize,
                            i = kt(),
                            s = 100 * e,
                            o = Rt(),
                            l = t.computes.qualificationBattleState(e),
                            c = (0, a.useState)('notPlayed'),
                            d = c[0],
                            E = c[1],
                            m = (0, ge.useTransition)(d, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                config: Object.assign({}, ge.config.molasses, { duration: 100 }),
                                initial: { opacity: 1 },
                            });
                        return (
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    e === St.FillBattles &&
                                        o.run(() => {
                                            Be(
                                                ((e) => {
                                                    switch (e) {
                                                        case Gt.Victory:
                                                            return 'comp_7_rank_swords_green';
                                                        case Gt.Defeat:
                                                            return 'comp_7_rank_swords_red';
                                                        default:
                                                            return (
                                                                console.error(
                                                                    `sound for battleState ${e} was not implemented`,
                                                                ),
                                                                ''
                                                            );
                                                    }
                                                })(l),
                                            ),
                                                E(l);
                                        }, s);
                                };
                                return (
                                    i.events.on('change', e),
                                    () => {
                                        i.events.off('change', e), o.clear();
                                    }
                                );
                            }, [i.events, l, o, s]),
                            n().createElement(
                                'div',
                                { className: h()(Vt, u) },
                                m((e, u) =>
                                    n().createElement(
                                        $t.animated.div,
                                        { style: e, className: zt },
                                        n().createElement(jt, { state: u, size: r >= w.Medium ? 'x234' : 'x173' }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Xt = 'QualificationRank_base_6e',
                    Kt = 'QualificationRank_rank_a0',
                    Zt = 'QualificationRank_battleList_12',
                    Jt = 'QualificationRank_battleItem_a9',
                    ea = 'QualificationRank_notice_b3',
                    ua = { rank: 'QualificationRank_rankAnimation_18' },
                    ta = (0, W.Pi)(() => {
                        const e = $e().model,
                            u = e.root.get().hasRankInactivity,
                            t = (0, a.useRef)(null),
                            r = kt();
                        return (
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    var u;
                                    switch (e) {
                                        case St.OpeningContent:
                                            Be('comp_7_rank_appear');
                                            break;
                                        case St.ShowRank:
                                            null == (u = t.current) || u.goToAndPlay(0);
                                    }
                                };
                                return (
                                    r.events.on('change', e),
                                    () => {
                                        r.events.off('change', e);
                                    }
                                );
                            }, [r.events]),
                            n().createElement(
                                'div',
                                { className: Xt },
                                n().createElement(
                                    'div',
                                    { className: Kt },
                                    n().createElement(Pu, {
                                        playerRef: t,
                                        onAnimationComplete: r.resume,
                                        classNames: ua,
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Zt },
                                    Ht(e.qualificationBattles.get().length, (e) =>
                                        n().createElement(Qt, { index: e, key: e, className: Jt }),
                                    ),
                                ),
                                u && n().createElement(hu, { className: ea }),
                            )
                        );
                    }),
                    aa = (0, W.Pi)(() => {
                        const e = $e().model.root.get(),
                            u = e.type,
                            t = e.rank,
                            a = e.division;
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(nt, {
                                className: Ut.header,
                                description: Ie.description.qualificationEnded(),
                                title: n().createElement(se, {
                                    text: rt(u),
                                    binding: { rankUpperName: Fe(R.strings.comp7.rankUpper, t) },
                                }),
                                subTitle: qe(t) ? me(a) : void 0,
                            }),
                            n().createElement('div', { className: Ut.qualificationRank }, n().createElement(ta, null)),
                        );
                    }),
                    na = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(a);
                        };
                    };
                let ra, ia, sa, oa, la, ca, da, Ea;
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
                        (e.WtHunterLootbox = 'wt_hunter'),
                        (e.WtBossLootbox = 'wt_boss'),
                        (e.WtProgressPoints = 'stamp'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.WTCommanderClaimable = 'wtCommanderClaimable'),
                        (e.WTCommanderClaimed = 'wtCommanderClaimed');
                })(ra || (ra = {})),
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
                    })(ia || (ia = {})),
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
                    })(sa || (sa = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(oa || (oa = {})),
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
                    })(la || (la = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ca || (ca = {})),
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
                    })(da || (da = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(Ea || (Ea = {}));
                const ma = [
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
                function _a(e) {
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
                const Aa = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: zu.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Fa = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
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
                            h = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ma);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, a.useMemo)(
                                () =>
                                    B ||
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
                                [B],
                            ),
                            f = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (Aa(t, _, { isMouseEvent: !0, on: !0, arguments: _a(n) }, w),
                                    g && g(),
                                    (p.current.isVisible = !0));
                            }, [t, _, n, w, g]),
                            v = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        Aa(t, _, { on: !1 }, w),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, _, w, h]),
                            b = (0, a.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', b, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', b, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return F
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              v(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === E && v(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === E && v(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    Da = ['children'];
                function Ba() {
                    return (
                        (Ba =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ba.apply(this, arguments)
                    );
                }
                const ga = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Da);
                        return n().createElement(
                            Fa,
                            Ba(
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
                    ha = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ca() {
                    return (
                        (Ca =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ca.apply(this, arguments)
                    );
                }
                const pa = R.views.common.tooltip_window.simple_tooltip_content,
                    wa = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            i = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ha);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: r, note: i, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, i, o]);
                        return n().createElement(
                            Fa,
                            Ca(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? pa.SimpleTooltipHtmlContent('resId') : pa.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function fa() {
                    return (
                        (fa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        fa.apply(this, arguments)
                    );
                }
                const va = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = n().createElement('div', { className: t }, e);
                        if (u.header || u.body) return n().createElement(wa, u, a);
                        const r = u.contentId;
                        return r ? n().createElement(Fa, fa({}, u, { contentId: r }), a) : n().createElement(ga, u, a);
                    },
                    ba = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            t = 'gold' === u ? zu.B3.GOLD : zu.B3.INTEGRAL;
                            return void 0 === e ? '' : zu.Z5.getNumberFormat(e, t);
                        })(u, e);
                        return t ? n().createElement('span', null, t) : null;
                    },
                    Ra = [
                        ra.Items,
                        ra.Equipment,
                        ra.Xp,
                        ra.XpFactor,
                        ra.Blueprints,
                        ra.BlueprintsAny,
                        ra.Goodies,
                        ra.Berths,
                        ra.Slots,
                        ra.Tokens,
                        ra.CrewSkins,
                        ra.CrewBooks,
                        ra.Customizations,
                        ra.CreditsFactor,
                        ra.TankmenXp,
                        ra.TankmenXpFactor,
                        ra.FreeXpFactor,
                        ra.BattleToken,
                        ra.PremiumUniversal,
                        ra.NaturalCover,
                        ra.BpCoin,
                        ra.BattlePassSelectToken,
                        ra.BattlaPassFinalAchievement,
                        ra.BattleBadge,
                        ra.BonusX5,
                        ra.CrewBonusX3,
                        ra.NewYearInvoice,
                        ra.EpicSelectToken,
                        ra.WtHunterLootbox,
                        ra.WtBossLootbox,
                        ra.WtProgressPoints,
                        ra.Comp7TokenWeeklyReward,
                        ra.DeluxeGift,
                        ra.BattleBoosterGift,
                        ra.OptionalDevice,
                    ],
                    ya = [ra.Gold, ra.Credits, ra.Crystal, ra.FreeXp],
                    Sa = [ra.BattlePassPoints, ra.EquipCoin],
                    xa = [ra.PremiumPlus, ra.Premium],
                    Ta = (e) =>
                        Ra.includes(e)
                            ? oa.MULTI
                            : ya.includes(e)
                              ? oa.CURRENCY
                              : Sa.includes(e)
                                ? oa.NUMBER
                                : xa.includes(e)
                                  ? oa.PREMIUM_PLUS
                                  : oa.STRING,
                    ka = ['engravings', 'backgrounds'],
                    Na = ['engraving', 'background'],
                    La = (e, u = sa.Small) => {
                        const t = e.name,
                            a = e.type,
                            n = e.value,
                            r = e.icon,
                            i = e.item,
                            s = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case sa.S600x450:
                                        return 'c_600x450';
                                    case sa.S400x300:
                                        return 'c_400x300';
                                    case sa.S296x222:
                                        return 'c_296x222';
                                    case sa.S232x174:
                                        return 'c_232x174';
                                    case sa.Big:
                                        return 'c_80x80';
                                    case sa.Small:
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
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
                                    const a = ka[e];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            r = n.$dyn(t);
                                        return r ? `${r}` : `${n.$dyn(Na[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, u, r);
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
                    Pa = [sa.Small, sa.Big],
                    Ia = {
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
                    Oa = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = sa.Big,
                        special: r,
                        value: i,
                        valueType: s,
                        title: o,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const _ = ((e, u) => {
                                if (void 0 === u || !Pa.includes(e)) return null;
                                switch (u) {
                                    case la.BATTLE_BOOSTER:
                                    case la.BATTLE_BOOSTER_REPLACE:
                                        return ca.BATTLE_BOOSTER;
                                }
                            })(a, r),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case la.BATTLE_BOOSTER:
                                        return da.BATTLE_BOOSTER;
                                    case la.BATTLE_BOOSTER_REPLACE:
                                        return da.BATTLE_BOOSTER_REPLACE;
                                    case la.BUILT_IN_EQUIPMENT:
                                        return da.BUILT_IN_EQUIPMENT;
                                    case la.EQUIPMENT_PLUS:
                                        return da.EQUIPMENT_PLUS;
                                    case la.EQUIPMENT_TROPHY_BASIC:
                                        return da.EQUIPMENT_TROPHY_BASIC;
                                    case la.EQUIPMENT_TROPHY_UPGRADED:
                                        return da.EQUIPMENT_TROPHY_UPGRADED;
                                    case la.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return da.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case la.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return da.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case la.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return da.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case la.PROGRESSION_STYLE_UPGRADED_1:
                                        return da.PROGRESSION_STYLE_UPGRADED_1;
                                    case la.PROGRESSION_STYLE_UPGRADED_2:
                                        return da.PROGRESSION_STYLE_UPGRADED_2;
                                    case la.PROGRESSION_STYLE_UPGRADED_3:
                                        return da.PROGRESSION_STYLE_UPGRADED_3;
                                    case la.PROGRESSION_STYLE_UPGRADED_4:
                                        return da.PROGRESSION_STYLE_UPGRADED_4;
                                    case la.PROGRESSION_STYLE_UPGRADED_5:
                                        return da.PROGRESSION_STYLE_UPGRADED_5;
                                    case la.PROGRESSION_STYLE_UPGRADED_6:
                                        return da.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(r),
                            F = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case oa.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case oa.CURRENCY:
                                    case oa.NUMBER:
                                        return n().createElement(ba, { format: 'integral', value: Number(e) });
                                    case oa.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(i, s);
                        return n().createElement(
                            'div',
                            { className: h()(Ia.base, Ia[`base__${a}`], c), style: l },
                            n().createElement(
                                va,
                                { tooltipArgs: E, className: Ia.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: h()(Ia.image, null == d ? void 0 : d.image) },
                                        _ &&
                                            n().createElement('div', {
                                                className: h()(Ia.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            n().createElement('div', {
                                                className: h()(Ia.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        A &&
                                            n().createElement('div', {
                                                className: h()(Ia.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    F &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    Ia.info,
                                                    Ia[`info__${e}`],
                                                    s === oa.MULTI && Ia.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            F,
                                        ),
                                    o && n().createElement('div', { className: Ia.title }, o),
                                ),
                            ),
                            t &&
                                n().createElement(
                                    va,
                                    { tooltipArgs: m },
                                    n().createElement('div', {
                                        className: h()(Ia.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Ma = [sa.Big, sa.Small],
                    Ua = [sa.S232x174, sa.S296x222, sa.S400x300, sa.S600x450],
                    Ha = R.images.gui.maps.icons.comp7.rewards,
                    $a = (e, u) => 'styleProgress' === e.name && Ma.includes(u),
                    Ga = (e, u) =>
                        'progressLevel' in e && $a(e, u)
                            ? `progressionStyleUpgraded_${e.progressLevel}`
                            : e.overlayType,
                    Wa = (e) => ('vehicles_rent' === e.name ? e.label : e.value),
                    Ya = ({ reward: e, rank: u, index: t }) => {
                        const a = e.tooltipId,
                            n = e.tooltipContentId;
                        return ((e, u, t) => {
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
                        })(
                            Object.assign({ tooltipId: a }, void 0 !== u && { rank: u }, void 0 !== t && { index: t }),
                            Number(n),
                            { ignoreShowDelay: !0 },
                        );
                    },
                    qa = (e, u) => {
                        if ('tankman' === e.name) {
                            var t;
                            const a =
                                null == (t = R.images.gui.maps.icons.comp7.crew.$dyn(u)) ? void 0 : t.$dyn(e.groupName);
                            if (a) return `${a}`;
                            console.info(
                                `Folder for reward size ${u} was not found for crew with groupName: ${e.groupName}`,
                            );
                        }
                        if ($a(e, u)) return `R.images.gui.maps.icons.quests.bonuses.${u}.camouflage`;
                        if ('customizations' === e.name && Ua.includes(u)) {
                            var a;
                            const t = null == (a = Ha.$dyn(u)) ? void 0 : a.$dyn(`style_${e.styleID}`);
                            if (t) return `${t}`;
                            console.info(`Folder for reward size ${u} was not found for styleId: ${e.styleID}`);
                        }
                        return La(e, u);
                    },
                    ja = ({ reward: e, size: u, rank: t, index: a }) => {
                        const n = ((e, u) => {
                            if ('dogTagComponents' === e.name) {
                                if (u === sa.Big) return sa.S80x80;
                                if (u === sa.Small) return sa.S48x48;
                            }
                            return u;
                        })(e, u);
                        return Object.assign({}, e, {
                            size: n,
                            image: qa(e, n),
                            value: Wa(e),
                            valueType: Ta(e.name),
                            special: Ga(e, n),
                            tooltipArgs: Ya({ reward: e, rank: t, index: a }),
                            periodicIconTooltipArgs: {
                                header: R.strings.tooltips.periodicReward.header(),
                                body: R.strings.tooltips.periodicReward.comp7.body(),
                            },
                        });
                    };
                var Va = t(9272);
                const za = {
                        '--pageContentWidth': '78vw',
                        base: 'AnimatedReward_base_09',
                        entering: 'AnimatedReward_entering_44',
                        entered: 'AnimatedReward_entered_ef',
                        fadeIn: 'AnimatedReward_fadeIn_4b',
                        fadeInThreeQuarters: 'AnimatedReward_fadeInThreeQuarters_cc',
                        fadeInHalf: 'AnimatedReward_fadeInHalf_06',
                        fadeOut: 'AnimatedReward_fadeOut_a2',
                        fadeInWithScale: 'AnimatedReward_fadeInWithScale_26',
                        slideUp: 'AnimatedReward_slideUp_a4',
                        scale: 'AnimatedReward_scale_cc',
                        raysAppearance: 'AnimatedReward_raysAppearance_95',
                        rotate: 'AnimatedReward_rotate_db',
                        'reverse-rotate': 'AnimatedReward_reverse-rotate_4f',
                        glowAppearance: 'AnimatedReward_glowAppearance_4d',
                        highlightAppearance: 'AnimatedReward_highlightAppearance_5c',
                        blink: 'AnimatedReward_blink_1d',
                        slideUpIn: 'AnimatedReward_slideUpIn_61',
                    },
                    Qa = (e, u = 0) => ({ appear: u + 400 + 200 * e, enter: 600 }),
                    Xa = () => {
                        Be(R.sounds.bp_reward());
                    },
                    Ka = ({ rewardIndex: e, delay: u = 0, children: t }) =>
                        n().createElement(Va.ZP, { appear: !0, in: !0, timeout: Qa(e, u), onEntered: Xa }, (e) =>
                            n().createElement('div', { className: h()(za.base, za[e]) }, t),
                        ),
                    Za = 'AdditionalRewards_base_fd',
                    Ja = 'AdditionalRewards_reward_7c',
                    en = 'AdditionalRewards_vehiclesRentBase_a4',
                    un = 'AdditionalRewards_vehiclesRentLabel_c7',
                    tn = 10;
                function an() {
                    return (
                        (an =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        an.apply(this, arguments)
                    );
                }
                const nn = ({ delay: e, onAnimationComplete: u, classNames: t }) => {
                        const r = $e().model,
                            i = b().mediaSize >= w.Medium ? sa.Big : sa.Small,
                            s = r.additionalRewards.get().length,
                            o = s > tn;
                        const l = Qa(Math.min(r.additionalRewards.get().length, tn), e),
                            c = l.appear,
                            d = l.enter + c;
                        (0, a.useEffect)(
                            () =>
                                na(() => {
                                    null == u || u();
                                }, d),
                            [d, u],
                        );
                        const E = o ? [...xe(r.additionalRewards.get(), 0, 8)] : r.additionalRewards.get();
                        return n().createElement(
                            'div',
                            { className: Za },
                            Se(E, (u, a) => {
                                const r = 'vehicles_rent' === u.name;
                                return n().createElement(
                                    Ka,
                                    { key: a, rewardIndex: a, delay: e },
                                    n().createElement(
                                        'div',
                                        { className: h()(Ja, null == t ? void 0 : t.reward) },
                                        n().createElement(
                                            Oa,
                                            an({}, ja({ reward: u, size: i }), {
                                                className: h()(r && en),
                                                classNames: { info: h()(r && un) },
                                            }),
                                        ),
                                    ),
                                );
                            }),
                            o &&
                                n().createElement(
                                    Ka,
                                    { rewardIndex: E.length, delay: e },
                                    n().createElement(
                                        'div',
                                        { className: Ja },
                                        n().createElement(Oa, {
                                            name: '',
                                            image: `R.images.gui.maps.icons.quests.bonuses.${i}.default`,
                                            size: i,
                                            value: V(R.strings.tooltips.quests.awards.additional.bottom(), {
                                                count: s - tn + 1,
                                            }),
                                            tooltipArgs: {
                                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                                args: { showCount: 9 },
                                            },
                                        }),
                                    ),
                                ),
                        );
                    },
                    rn = {
                        '--pageContentWidth': '78vw',
                        base: 'MainRewards_base_0f',
                        ribbon: 'MainRewards_ribbon_6b',
                        fadeIn: 'MainRewards_fadeIn_95',
                        base__singleMainReward: 'MainRewards_base__singleMainReward_b0',
                        base__shopInfo: 'MainRewards_base__shopInfo_ba',
                        rewardWrapper: 'MainRewards_rewardWrapper_e4',
                        reward: 'MainRewards_reward_31',
                        rewardTimer: 'MainRewards_rewardTimer_db',
                        rewardLabel: 'MainRewards_rewardLabel_ea',
                        rewardLabel__multi: 'MainRewards_rewardLabel__multi_3c',
                        rewardLabel__credits: 'MainRewards_rewardLabel__credits_f2',
                        rewardLabel__gold: 'MainRewards_rewardLabel__gold_34',
                        rewardLabel__crystal: 'MainRewards_rewardLabel__crystal_6c',
                        rewardLabel__currency: 'MainRewards_rewardLabel__currency_6e',
                        fadeInThreeQuarters: 'MainRewards_fadeInThreeQuarters_25',
                        fadeInHalf: 'MainRewards_fadeInHalf_1a',
                        fadeOut: 'MainRewards_fadeOut_2a',
                        fadeInWithScale: 'MainRewards_fadeInWithScale_a2',
                        slideUp: 'MainRewards_slideUp_1b',
                        scale: 'MainRewards_scale_15',
                        raysAppearance: 'MainRewards_raysAppearance_d1',
                        rotate: 'MainRewards_rotate_9b',
                        'reverse-rotate': 'MainRewards_reverse-rotate_23',
                        glowAppearance: 'MainRewards_glowAppearance_91',
                        highlightAppearance: 'MainRewards_highlightAppearance_68',
                        blink: 'MainRewards_blink_9a',
                        slideUpIn: 'MainRewards_slideUpIn_03',
                    };
                function sn() {
                    return (
                        (sn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        sn.apply(this, arguments)
                    );
                }
                const on = { periodicIcon: rn.rewardTimer },
                    ln = (0, W.Pi)(({ className: e, classNames: u, rewardClassNames: t, onAnimationComplete: r }) => {
                        const i = $e().model,
                            s = i.mainRewards.get(),
                            o = ((e, u, t) =>
                                1 !== u || t
                                    ? e >= w.Large
                                        ? sa.S400x300
                                        : e >= w.Small
                                          ? sa.S296x222
                                          : sa.S232x174
                                    : e >= w.Large
                                      ? sa.S600x450
                                      : sa.S400x300)(b().mediaSize, s.length, i.computes.hasShopInfo()),
                            l = Qa(s.length).appear;
                        return (
                            (0, a.useEffect)(() => na(() => (null == r ? void 0 : r()), l), [l, r]),
                            n().createElement(
                                'div',
                                { className: h()(rn.base, e, rn[`base__${i.computes.styleModifier()}`]) },
                                n().createElement('div', { className: h()(rn.ribbon, null == u ? void 0 : u.ribbon) }),
                                Se(s, (e, a) => {
                                    const r = Ta(e.name);
                                    return n().createElement(
                                        Ka,
                                        { key: a, rewardIndex: a },
                                        n().createElement(
                                            'div',
                                            { className: rn.rewardWrapper },
                                            n().createElement(
                                                Oa,
                                                sn({}, ja({ reward: e, size: o }), {
                                                    className: rn.reward,
                                                    classNames: Object.assign({}, on, t),
                                                }),
                                            ),
                                            n().createElement(
                                                'div',
                                                {
                                                    className: h()(
                                                        rn.rewardLabel,
                                                        rn[`rewardLabel__${e.name}`],
                                                        rn[`rewardLabel__${r}`],
                                                        null == u ? void 0 : u.rewardLabel,
                                                    ),
                                                },
                                                e.label,
                                            ),
                                        ),
                                    );
                                }),
                            )
                        );
                    }),
                    cn = {
                        base: 'ShopInfo_base_e6',
                        icon: 'ShopInfo_icon_16',
                        icon__open: 'ShopInfo_icon__open_7a',
                        icon__discount: 'ShopInfo_icon__discount_56',
                        content: 'ShopInfo_content_e4',
                        header: 'ShopInfo_header_c8',
                        text: 'ShopInfo_text_f8',
                    },
                    dn = R.strings.comp7.rewardsScreen.shopInfo,
                    En = (0, W.Pi)(({ className: e }) => {
                        const u = $e().model.root.get().shopInfoType;
                        return n().createElement(
                            'div',
                            { className: h()(cn.base, e) },
                            n().createElement('div', { className: h()(cn.icon, cn[`icon__${u}`]) }),
                            n().createElement(
                                'div',
                                { className: cn.content },
                                n().createElement('div', { className: cn.header }, dn.header.$dyn(u)),
                                n().createElement('div', { className: cn.text }, dn.text.$dyn(u)),
                            ),
                        );
                    }),
                    mn = 'RewardList_base_63',
                    _n = 'RewardList_additional_c9',
                    An = 'RewardList_additionalTitle_27',
                    Fn = 'RewardList_shopInfoContainer_ab',
                    Dn = R.strings.comp7.rewardsScreen,
                    Bn = (0, W.Pi)(
                        ({
                            className: e,
                            mainRewardsClassName: u,
                            mainRewardsClassNames: t,
                            rewardClassNames: r,
                            additionalContainerClassName: i,
                            additionalTitleClassName: s,
                            additionalRewardsClassNames: o,
                            onMainRewardsAnimationComplete: l,
                            onAdditionalRewardsAnimationComplete: c,
                        }) => {
                            const d = $e().model,
                                E = d.mainRewards.get(),
                                m = d.additionalRewards.get().length,
                                _ = d.computes.hasShopInfo(),
                                A = Qa(E.length),
                                F = Qa(Math.min(tn, m)),
                                D = A.enter + A.appear,
                                B = D + (F.enter + F.appear);
                            return (
                                (0, a.useEffect)(() => na(() => Be('gui_reward_screen_general'), 400), []),
                                (0, a.useEffect)(
                                    () =>
                                        na(() => {
                                            _ && Be(R.sounds.comp_7_shop_info());
                                        }, B - 300),
                                    [_, B],
                                ),
                                n().createElement(
                                    'div',
                                    {
                                        className: h()(mn, e),
                                        style: {
                                            '--additionalTitleDelay': `${D}ms`,
                                            '--additionalTitleDuration': '300ms',
                                            '--shopInfoDelay': `${B}ms`,
                                            '--shopInfoDuration': '300ms',
                                        },
                                    },
                                    n().createElement(ln, {
                                        className: u,
                                        classNames: t,
                                        rewardClassNames: r,
                                        onAnimationComplete: l,
                                    }),
                                    n().createElement(
                                        'div',
                                        { className: h()(_n, i) },
                                        Boolean(m) &&
                                            n().createElement(
                                                n().Fragment,
                                                null,
                                                n().createElement(
                                                    'div',
                                                    { className: h()(An, s) },
                                                    Dn.additionalRewards(),
                                                ),
                                                n().createElement(nn, {
                                                    delay: D,
                                                    classNames: o,
                                                    onAnimationComplete: c,
                                                }),
                                            ),
                                    ),
                                    _ && n().createElement(En, { className: Fn }),
                                )
                            );
                        },
                    ),
                    gn = {
                        base: 'BaseRewardList_base_ed',
                        base__singleMainReward: 'BaseRewardList_base__singleMainReward_4c',
                        base__shopInfo: 'BaseRewardList_base__shopInfo_78',
                        additionalContainer: 'BaseRewardList_additionalContainer_bd',
                        additionalTitle: 'BaseRewardList_additionalTitle_b7',
                    },
                    hn = (0, W.Pi)(() => {
                        const e = $e().model;
                        return n().createElement(Bn, {
                            className: h()(gn.base, gn[`base__${e.computes.styleModifier()}`]),
                            additionalContainerClassName: gn.additionalContainer,
                            additionalTitleClassName: gn.additionalTitle,
                        });
                    }),
                    Cn = (0, W.Pi)(() => {
                        const e = $e().model,
                            u = e.root.get().type;
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(nt, {
                                className: Ut.header,
                                description: Ie.description.qualificationEnded(),
                                title: rt(u),
                                subTitle: n().createElement(se, {
                                    text: String(Ie.subtitle.qualificationRewards()),
                                    binding: { ranks: e.computes.ranksList() },
                                }),
                            }),
                            n().createElement(
                                'div',
                                { className: h()(Ut.rewardList, Ut[`rewardList__${e.computes.styleModifier()}`]) },
                                n().createElement(hn, null),
                            ),
                        );
                    }),
                    pn = (0, W.Pi)(() => {
                        const e = $e(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get().type,
                            i = kt(),
                            s = (0, a.useCallback)(() => {
                                t.close(), i.skipAll();
                            }, [i, t]);
                        return n().createElement(
                            Ju,
                            { closeCallback: s, ref: i.rootRef },
                            n().createElement(Mt, null),
                            r === M.QualificationRank && n().createElement(aa, null),
                            r === M.QualificationRewards && n().createElement(Cn, null),
                            n().createElement(_t, { className: Ut.buttons, closeCallback: s }),
                        );
                    }),
                    wn = {
                        content: 'RankApp_content_ee',
                        achievement: 'RankApp_achievement_ea',
                        rewardList: 'RankApp_rewardList_2d',
                        rewardList__singleMainReward: 'RankApp_rewardList__singleMainReward_89',
                    },
                    fn = (0, W.Pi)(() => {
                        const e = $e().model.root.get(),
                            u = e.type,
                            t = e.rank,
                            a = e.division,
                            r = e.seasonName;
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(nt, {
                                description: Ie.description.season.$dyn(r),
                                title: n().createElement(se, {
                                    text: rt(u),
                                    binding: { rankUpperName: Fe(R.strings.comp7.rankUpper, t) },
                                }),
                                subTitle: qe(t) ? me(a) : void 0,
                            }),
                            n().createElement('div', { className: wn.achievement }, n().createElement(Gu, null)),
                        );
                    }),
                    vn = (0, W.Pi)(() => {
                        const e = $e().model,
                            u = e.root.get(),
                            t = u.type,
                            a = u.rank,
                            r = u.seasonName;
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(nt, {
                                description: Ie.description.season.$dyn(r),
                                title: n().createElement(se, { text: rt(t) }),
                                subTitle: n().createElement(se, { text: it(t), binding: { rank: De(a) } }),
                            }),
                            n().createElement(
                                'div',
                                { className: h()(wn.rewardList, wn[`rewardList__${e.computes.styleModifier()}`]) },
                                n().createElement(hn, null),
                            ),
                        );
                    }),
                    bn = (0, W.Pi)(() => {
                        const e = $e().model.root.get(),
                            u = e.type,
                            t = e.seasonName,
                            a = e.rank;
                        return n().createElement(
                            Ju,
                            null,
                            n().createElement(ht, { bgImage: Ct(t, a), isBlurred: u === M.Rank }),
                            n().createElement(
                                Ft,
                                { className: wn.content },
                                u === M.Rank && n().createElement(fn, null),
                                u === M.RankRewards && n().createElement(vn, null),
                                n().createElement(_t, { mainButtonText: u === M.Rank ? Ie.buttonToRewards() : void 0 }),
                            ),
                        );
                    }),
                    Rn = {
                        content: 'SelectedRewardsApp_content_fb',
                        rewardList: 'SelectedRewardsApp_rewardList_95',
                        mainRewards: 'SelectedRewardsApp_mainRewards_87',
                        rewardList__singleMainReward: 'SelectedRewardsApp_rewardList__singleMainReward_de',
                        rewardLabel: 'SelectedRewardsApp_rewardLabel_9f',
                    },
                    yn = (0, W.Pi)(() => {
                        const e = $e().model,
                            u = e.mainRewards.get().length;
                        return (
                            pu(() => {
                                Be('comp_7_shop_purchase_module');
                            }),
                            n().createElement(
                                Ju,
                                null,
                                n().createElement(ht, { bgImage: Oe.yearly_rewards_screen_bg() }),
                                n().createElement(
                                    Ft,
                                    { className: Rn.content },
                                    n().createElement(nt, {
                                        description: Ie.description.year(),
                                        title: Ie.title.selectedRewards(u),
                                    }),
                                    n().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                Rn.rewardList,
                                                Rn[`rewardList__${e.computes.styleModifier()}`],
                                            ),
                                        },
                                        n().createElement(ln, {
                                            className: Rn.mainRewards,
                                            classNames: { rewardLabel: Rn.rewardLabel },
                                        }),
                                    ),
                                    n().createElement(_t, null),
                                ),
                            )
                        );
                    }),
                    Sn = {
                        content: 'TokensRewardsApp_content_ef',
                        rewardList: 'TokensRewardsApp_rewardList_88',
                        rewardList__singleMainReward: 'TokensRewardsApp_rewardList__singleMainReward_f3',
                    },
                    xn = (0, W.Pi)(() => {
                        const e = $e().model,
                            u = e.root.get(),
                            t = u.type,
                            a = u.tokensCount,
                            r = u.seasonName;
                        return n().createElement(
                            Ju,
                            null,
                            n().createElement(ht, { bgImage: Oe.tokens() }),
                            n().createElement(
                                Ft,
                                { className: Sn.content },
                                n().createElement(nt, {
                                    description: Ie.description.season.$dyn(r),
                                    title: rt(t),
                                    subTitle: n().createElement(se, {
                                        text: String(Ie.subtitle.tokensRewards(a)),
                                        binding: { tokensCount: a },
                                    }),
                                }),
                                n().createElement(
                                    'div',
                                    { className: h()(Sn.rewardList, Sn[`rewardList__${e.computes.styleModifier()}`]) },
                                    n().createElement(hn, null),
                                ),
                                n().createElement(_t, null),
                            ),
                        );
                    }),
                    Tn = {
                        ShowHeader: { name: 'showHeader', delay: 500 },
                        ShowResultsRanks: { name: 'showResultsRanks', delay: 400 },
                        HideResultsRanks: { name: 'hideResultsRanks', delay: 1400 },
                        ShowSeasonPoints: { name: 'showSeasonPoints', delay: 400 },
                        YearResult: { name: 'yearResult', delay: 800 },
                        ChangeVehicleBg: { name: 'changeVehicleBg', delay: 800 },
                        ShowYearlyVehicleContent: { name: 'showContent', delay: 500 },
                        ShowYearlyRewardsContent: { name: 'showContent', delay: 600, stopNextSteps: !0 },
                        ShowCrew: { name: 'showCrew', delay: 500, stopNextSteps: !0 },
                        ShowButtons: { name: 'showButtons', delay: 300 },
                    },
                    kn = (0, a.createContext)(null),
                    Nn = () => {
                        const e = (0, a.useContext)(kn);
                        if (null === e)
                            throw new Error(
                                'useAnimationApi was called in component, which is not wrapped in AnnualAwardsAnimationProvider',
                            );
                        return e;
                    },
                    Ln = yt({
                        steps: [
                            Tn.ShowHeader,
                            Tn.ShowResultsRanks,
                            Tn.HideResultsRanks,
                            Tn.ShowSeasonPoints,
                            Tn.YearResult,
                            Tn.ChangeVehicleBg,
                            Tn.ShowYearlyVehicleContent,
                            Tn.ShowCrew,
                            Tn.ShowButtons,
                        ],
                    }),
                    Pn = yt({
                        steps: [
                            Tn.ShowHeader,
                            Tn.ChangeVehicleBg,
                            Tn.ShowYearlyVehicleContent,
                            Tn.ShowCrew,
                            Tn.ShowButtons,
                        ],
                    }),
                    In = yt({
                        steps: [
                            Tn.ShowHeader,
                            Tn.ShowResultsRanks,
                            Tn.HideResultsRanks,
                            Tn.ShowSeasonPoints,
                            Tn.YearResult,
                            Tn.ShowYearlyRewardsContent,
                            Tn.ShowButtons,
                        ],
                    }),
                    On = yt({ steps: [Tn.ShowHeader, Tn.ShowYearlyRewardsContent, Tn.ShowButtons] }),
                    Mn = (0, W.Pi)(({ children: e }) => {
                        const u = Ln();
                        return n().createElement(kn.Provider, { value: u }, e);
                    }),
                    Un = (0, W.Pi)(({ children: e }) => {
                        const u = Pn();
                        return n().createElement(kn.Provider, { value: u }, e);
                    }),
                    Hn = (0, W.Pi)(({ children: e }) => {
                        const u = In();
                        return n().createElement(kn.Provider, { value: u }, e);
                    }),
                    $n = (0, W.Pi)(({ children: e }) => {
                        const u = On();
                        return n().createElement(kn.Provider, { value: u }, e);
                    }),
                    Gn = (0, W.Pi)(({ children: e }) => {
                        const u = $e().model.root.get(),
                            t = ((e, u) => (e ? (u ? Mn : Un) : u ? Hn : $n))(u.hasYearlyVehicle, u.showSeasonResults);
                        return n().createElement(t, null, e);
                    }),
                    Wn = {
                        base: 'LaceDivider_base_1a',
                        lace: 'LaceDivider_lace_7f',
                        peak: 'LaceDivider_peak_f2',
                        peak__right: 'LaceDivider_peak__right_43',
                        line: 'LaceDivider_line_0d',
                    },
                    Yn = ({ children: e, className: u, classNames: t }) =>
                        n().createElement(
                            'div',
                            { className: h()(Wn.base, u) },
                            n().createElement(
                                'div',
                                {
                                    className: h()(
                                        Wn.lace,
                                        Wn.lace__left,
                                        null == t ? void 0 : t.lace,
                                        null == t ? void 0 : t.leftLace,
                                    ),
                                },
                                n().createElement('div', {
                                    className: h()(
                                        Wn.peak,
                                        Wn.peak__left,
                                        null == t ? void 0 : t.peak,
                                        null == t ? void 0 : t.leftPeak,
                                    ),
                                }),
                                n().createElement('div', {
                                    className: h()(
                                        Wn.line,
                                        Wn.line__left,
                                        null == t ? void 0 : t.line,
                                        null == t ? void 0 : t.leftLine,
                                    ),
                                }),
                            ),
                            e,
                            n().createElement(
                                'div',
                                {
                                    className: h()(
                                        Wn.lace,
                                        Wn.lace__right,
                                        null == t ? void 0 : t.lace,
                                        null == t ? void 0 : t.rightLace,
                                    ),
                                },
                                n().createElement('div', {
                                    className: h()(
                                        Wn.line,
                                        Wn.line__right,
                                        null == t ? void 0 : t.line,
                                        null == t ? void 0 : t.rightLine,
                                    ),
                                }),
                                n().createElement('div', {
                                    className: h()(
                                        Wn.peak,
                                        Wn.peak__right,
                                        null == t ? void 0 : t.peak,
                                        null == t ? void 0 : t.rightPeak,
                                    ),
                                }),
                            ),
                        ),
                    qn = ({ size: e, seasonName: u, className: t }) => {
                        const a = R.images.gui.maps.icons.comp7.ranks.$dyn(u).$num(e);
                        return n().createElement('div', {
                            className: h()(Ve, t),
                            style: { backgroundImage: `url(${a.$dyn('qualification')})`, '--imageSize': `${e}rem` },
                        });
                    },
                    jn = R.strings.comp7,
                    Vn = (e, u) => String(e.$dyn(u)),
                    zn = 'SeasonResult_base_e5',
                    Qn = 'SeasonResult_animatedContainer_b7',
                    Xn = 'SeasonResult_rank_47',
                    Kn = 'SeasonResult_seasonPointsCounter_18',
                    Zn = 'SeasonResult_count_d8',
                    Jn = 'SeasonResult_icon_43',
                    er = 'SeasonResult_container_75',
                    ur = 'SeasonResult_result_cc',
                    tr = 'SeasonResult_seasonName_5d',
                    ar = je.x40,
                    nr = (0, W.Pi)(({ index: e, className: u }) => {
                        const t = $e().model.computes.seasonResult(e),
                            a = t.rank,
                            r = t.seasonName,
                            i = t.seasonPointsCount,
                            s = 0 === i;
                        return n().createElement(
                            'div',
                            { className: h()(zn, u) },
                            n().createElement(
                                'div',
                                { className: Qn },
                                s
                                    ? n().createElement(qn, { size: ar, seasonName: r, className: Xn })
                                    : n().createElement(ze, { rank: a, size: ar, seasonName: r, className: Xn }),
                                n().createElement(
                                    'div',
                                    { className: Kn },
                                    n().createElement('div', { className: Zn }, i),
                                    n().createElement('div', {
                                        className: Jn,
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.comp7.icons.$dyn(`season_point_${r}_x48`)})`,
                                        },
                                    }),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: er },
                                n().createElement(
                                    'div',
                                    { className: ur },
                                    s
                                        ? Ie.noSeasonResult()
                                        : ((e) => V(R.strings.comp7.rank.text(), { rank: De(e) }))(a),
                                ),
                                n().createElement('div', { className: tr }, ((o = r), Vn(jn.shortSeasonName, o))),
                            ),
                        );
                        var o;
                    }),
                    rr = 'YearResult_base_13',
                    ir = 'YearResult_counter_64',
                    sr = 'YearResult_count_8d',
                    or = 'YearResult_icon_e8',
                    lr = 'YearResult_iconBg_ee',
                    cr = 'YearResult_description_60',
                    dr = (0, W.Pi)(({ className: e }) => {
                        const u = $e().model.computes.seasonPointsAmount();
                        return n().createElement(
                            'div',
                            { className: h()(rr, e) },
                            n().createElement(
                                'div',
                                { className: ir },
                                n().createElement('div', { className: sr }, u),
                                n().createElement(
                                    'div',
                                    { className: or },
                                    n().createElement('div', { className: lr }),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: cr },
                                n().createElement(se, { text: Ie.seasonPointsAmount() }),
                            ),
                        );
                    }),
                    Er = 'SeasonsResultsHeading_base_ac',
                    mr = 'SeasonsResultsHeading_plus_b0',
                    _r = 'SeasonsResultsHeading_divider_e9',
                    Ar = 'SeasonsResultsHeading_yearResult_5f',
                    Fr = (0, W.Pi)(({ className: e }) => {
                        const u = $e().model.seasonsResults.get().length;
                        return n().createElement(
                            'div',
                            { className: h()(Er, e) },
                            Ht(u, (e) =>
                                n().createElement(
                                    n().Fragment,
                                    { key: e },
                                    n().createElement(nr, { index: e }),
                                    e !== u - 1 && n().createElement('div', { className: mr }),
                                ),
                            ),
                            n().createElement('div', { className: _r }),
                            n().createElement(dr, { className: Ar }),
                        );
                    }),
                    Dr = 'YearlyAwardsBackground_base_10',
                    Br = 'YearlyAwardsBackground_background_53',
                    gr = 'YearlyAwardsBackground_baseVehicleBg_02',
                    hr = 'YearlyAwardsBackground_highlightedVehicleBg_4b',
                    Cr = (0, W.Pi)(() => {
                        const e = $e().model,
                            u = e.root.get().hasYearlyVehicle,
                            t = e.root.get().type,
                            r = (0, a.useState)(u),
                            i = r[0],
                            s = r[1];
                        return (
                            (0, a.useEffect)(() => {
                                t === M.YearlyRewards && s(!1);
                            }, [u, t]),
                            n().createElement(
                                'div',
                                { className: Dr },
                                n().createElement('div', {
                                    className: Br,
                                    style: { backgroundImage: `url(${Oe.yearly_rewards_screen_bg()})` },
                                }),
                                i &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: gr }),
                                        n().createElement('div', { className: hr }),
                                    ),
                            )
                        );
                    }),
                    pr = {
                        content: 'YearlyAwardsApp_content_30',
                        header: 'YearlyAwardsApp_header_5e',
                        laceBase: 'YearlyAwardsApp_laceBase_27',
                        laceContainer: 'YearlyAwardsApp_laceContainer_b5',
                        titleInner: 'YearlyAwardsApp_titleInner_d7',
                        yearlyVehicle: 'YearlyAwardsApp_yearlyVehicle_f1',
                        rewardList: 'YearlyAwardsApp_rewardList_fa',
                        mainRewards: 'YearlyAwardsApp_mainRewards_bc',
                        rewardInfo: 'YearlyAwardsApp_rewardInfo_44',
                        rewardList__singleMainReward: 'YearlyAwardsApp_rewardList__singleMainReward_8a',
                        ribbon: 'YearlyAwardsApp_ribbon_f1',
                        additionalRewardsContainer: 'YearlyAwardsApp_additionalRewardsContainer_08',
                        additionalTitle: 'YearlyAwardsApp_additionalTitle_1e',
                        reward: 'YearlyAwardsApp_reward_ea',
                        vehicleName: 'YearlyAwardsApp_vehicleName_e8',
                        buttons: 'YearlyAwardsApp_buttons_7e',
                    },
                    wr = { ribbon: pr.ribbon },
                    fr = { info: pr.rewardInfo },
                    vr = (0, W.Pi)(() => {
                        const e = $e().model,
                            u = Nn(),
                            t = e.additionalRewards.get().length > 0;
                        return n().createElement(Bn, {
                            className: h()(pr.rewardList, pr[`rewardList__${e.computes.styleModifier()}`]),
                            mainRewardsClassName: pr.mainRewards,
                            mainRewardsClassNames: wr,
                            rewardClassNames: fr,
                            additionalContainerClassName: pr.additionalRewardsContainer,
                            additionalTitleClassName: pr.additionalTitle,
                            onMainRewardsAnimationComplete: t ? void 0 : u.resume,
                            onAdditionalRewardsAnimationComplete: t ? u.resume : void 0,
                        });
                    }),
                    br = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Rr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const yr = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Sr = (e) =>
                        yr
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = Rr.length - 1; t >= 0; t--)
                                      for (; e >= Rr[t]; ) (u += br[t]), (e -= Rr[t]);
                                  return u;
                              })(e),
                    xr = {
                        base: 'VehicleName_base_3b',
                        base__24x24: 'VehicleName_base__24x24_a7',
                        base__24x24_metal: 'VehicleName_base__24x24_metal_92',
                        base__48x48: 'VehicleName_base__48x48_6a',
                        base__64x64: 'VehicleName_base__64x64_d2',
                        base__83x74: 'VehicleName_base__83x74_ba',
                        vehicleTypeContainer: 'VehicleName_vehicleTypeContainer_f2',
                        base__60x54: 'VehicleName_base__60x54_08',
                        vehicleType: 'VehicleName_vehicleType_c3',
                    };
                let Tr;
                !(function (e) {
                    (e.x24 = '24x24'),
                        (e.x24Metal = '24x24_metal'),
                        (e.x48 = '48x48'),
                        (e.x60 = '60x54'),
                        (e.x64 = '64x64'),
                        (e.x80 = '80x80'),
                        (e.x83 = '83x74'),
                        (e.x180 = '180x135');
                })(Tr || (Tr = {}));
                const kr = R.images.gui.maps.icons.vehicleTypes,
                    Nr = (e) => {
                        switch (e) {
                            case Tr.x80:
                                return kr.large;
                            case Tr.x83:
                                return kr.big;
                            case Tr.x180:
                                return kr.huge;
                            default:
                                return kr.$dyn(`c_${e}`);
                        }
                    },
                    Lr = (0, a.memo)(
                        ({
                            name: e,
                            tier: u,
                            type: t,
                            size: a = Tr.x24Metal,
                            typeIconFolderPath: r = Nr(a),
                            isPremium: i = !1,
                            className: s,
                            classNames: o,
                        }) => {
                            const l = `${((c = t), c.replace(/-/g, '_'))}${i ? '_elite' : ''}`;
                            var c;
                            return n().createElement(
                                'div',
                                { className: h()(xr.base, xr[`base__${a}`], s) },
                                n().createElement('div', { className: null == o ? void 0 : o.level }, Sr(u)),
                                n().createElement(
                                    'div',
                                    {
                                        className: h()(
                                            xr.vehicleTypeContainer,
                                            null == o ? void 0 : o.vehicleTypeContainer,
                                        ),
                                    },
                                    n().createElement('div', {
                                        className: h()(xr.vehicleType, null == o ? void 0 : o.type),
                                        style: { backgroundImage: `url(${null == r ? void 0 : r.$dyn(l)})` },
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: h()(xr.shortName, null == o ? void 0 : o.shortName) },
                                    e,
                                ),
                            );
                        },
                    );
                function Pr() {
                    return (
                        (Pr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Pr.apply(this, arguments)
                    );
                }
                const Ir = { reward: pr.reward },
                    Or = (0, W.Pi)(() => {
                        const e = $e().model.vehicle.get(),
                            u = Nn(),
                            t = u.steps.reduce(
                                (e, u, t) => (
                                    -1 === e.index && (e.delay += u.delay), u === Tn.ShowCrew && (e.index = t), e
                                ),
                                { index: -1, delay: 0 },
                            ).delay;
                        return n().createElement(
                            'div',
                            { className: pr.yearlyVehicle },
                            n().createElement(
                                ga,
                                { args: { vehicleCD: e.vehicleCD, tooltipId: 'shopVehicle' }, ignoreShowDelay: !0 },
                                n().createElement(
                                    'div',
                                    null,
                                    n().createElement(Lr, Pr({}, e, { size: Tr.x48, className: pr.vehicleName })),
                                ),
                            ),
                            n().createElement('div', { className: pr.additionalTitle }, Ie.yearlyVehicleCrew()),
                            n().createElement(nn, { delay: t, onAnimationComplete: u.resume, classNames: Ir }),
                        );
                    }),
                    Mr = (0, W.Pi)(() => {
                        const e = $e(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get(),
                            i = r.type,
                            s = r.hasYearlyVehicle,
                            o = r.showSeasonResults,
                            l = (0, a.useState)(s),
                            c = l[0],
                            d = l[1],
                            E = Nn(),
                            m = (0, a.useCallback)(() => {
                                t.close(), E.skipAll();
                            }, [E, t]);
                        return (
                            pu(() => {
                                i === M.YearlyVehicle && Be('comp_7_annual_reward_tank');
                            }),
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    switch (e) {
                                        case Tn.ShowHeader:
                                            Be('comp_7_ranks_shine');
                                            break;
                                        case Tn.HideResultsRanks:
                                        case Tn.YearResult:
                                            Be('comp_7_annual_reward_rank_points');
                                    }
                                    'showContent' === e.name && d(!0);
                                };
                                return (
                                    E.events.on('change', e),
                                    () => {
                                        E.events.off('change', e);
                                    }
                                );
                            }, [E.events]),
                            n().createElement(
                                Ju,
                                { ref: E.rootRef, closeCallback: m },
                                n().createElement(Cr, null),
                                n().createElement(
                                    'div',
                                    { className: pr.content },
                                    n().createElement(nt, {
                                        description: Ie.description.year(),
                                        title: n().createElement(
                                            Yn,
                                            { className: pr.laceBase, classNames: { lace: pr.laceContainer } },
                                            n().createElement(
                                                'div',
                                                { className: pr.titleInner },
                                                Ie.title.yearlyRewards(),
                                            ),
                                        ),
                                        className: pr.header,
                                    }),
                                    o && n().createElement(Fr, null),
                                    i === M.YearlyVehicle && n().createElement(Or, null),
                                    i === M.YearlyRewards && c && n().createElement(vr, null),
                                    n().createElement(_t, {
                                        mainButtonText: i === M.YearlyVehicle ? Ie.buttonToOtherRewards() : void 0,
                                        className: pr.buttons,
                                        closeCallback: m,
                                    }),
                                ),
                            )
                        );
                    }),
                    Ur = (0, W.Pi)(() => {
                        const e = $e().model.root.get().type;
                        switch (e) {
                            case M.QualificationRank:
                            case M.QualificationRewards:
                                return n().createElement(Nt, null, n().createElement(pn, null));
                            case M.Rank:
                            case M.RankRewards:
                                return n().createElement(bn, null);
                            case M.Division:
                                return n().createElement(ft, null);
                            case M.TokensRewards:
                                return n().createElement(xn, null);
                            case M.YearlyVehicle:
                            case M.YearlyRewards:
                                return n().createElement(Gn, null, n().createElement(Mr, null));
                            case M.SelectedRewards:
                                return n().createElement(yn, null);
                            default:
                                return (
                                    console.error('[AppFactory]: Provide application for reward screen type: ', e), null
                                );
                        }
                    });
                engine.whenReady.then(() => {
                    O().render(
                        n().createElement(P, null, n().createElement(He, null, n().createElement(Ur, null))),
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
                    for (var [u, t, a] = deferred[o], r = !0, i = 0; i < u.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
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
        (__webpack_require__.j = 373),
        (() => {
            var e = { 373: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, i, s] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        (n = r[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [926], () => __webpack_require__(1290));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
