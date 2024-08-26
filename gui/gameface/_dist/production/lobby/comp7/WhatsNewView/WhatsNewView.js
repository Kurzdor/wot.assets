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
                        displayStatusIs: () => b,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => p,
                        isFocused: () => B,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => y,
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
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
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
                    y = Promise.all([
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
                t.d(u, { B0: () => s, ry: () => D });
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
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    d = t(3138);
                const A = ['args'];
                function _(e, u, t, a, n, r, i) {
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
                                            _(r, a, n, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            _(r, a, n, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
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
                                })(u, A);
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
                    h = () => C(s.CLOSE),
                    B = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var g = t(7572);
                const p = n.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: g.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => C(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => C(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                m = o.height,
                                A = {
                                    x: d.O.view.pxToRem(l) + i.x,
                                    y: d.O.view.pxToRem(c) + i.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(m),
                                };
                            C(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(A),
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
                        handleViewEvent: C,
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
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
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
            2517: (e, u, t) => {
                'use strict';
                var a = {};
                t.r(a),
                    t.d(a, {
                        Area: () => tu,
                        Bar: () => Je,
                        DefaultScroll: () => uu,
                        Direction: () => Pe,
                        defaultSettings: () => He,
                        useHorizontalScrollApi: () => Ie,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => Bu, Bar: () => Du, Default: () => hu, useVerticalScrollApi: () => au });
                var r = t(6179),
                    i = t.n(r);
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
                var o = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e, u, t) {
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
                })(c || (c = {}));
                const m = o.O.client.getSize('rem'),
                    d = m.width,
                    A = m.height,
                    _ = Object.assign({ width: d, height: A }, E(d, A, l)),
                    F = (0, r.createContext)(_),
                    D = ['children'];
                const C = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, D);
                    const a = (0, r.useContext)(F),
                        n = a.extraLarge,
                        i = a.large,
                        o = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        E = a.extraLargeWidth,
                        m = a.largeWidth,
                        d = a.mediumWidth,
                        A = a.smallWidth,
                        _ = a.extraSmallWidth,
                        C = a.extraLargeHeight,
                        h = a.largeHeight,
                        B = a.mediumHeight,
                        g = a.smallHeight,
                        p = a.extraSmallHeight,
                        v = { extraLarge: C, large: h, medium: B, small: g, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return u;
                        if (t.large && i) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return s(u, t, v);
                        if (t.largeWidth && m) return s(u, t, v);
                        if (t.mediumWidth && d) return s(u, t, v);
                        if (t.smallWidth && A) return s(u, t, v);
                        if (t.extraSmallWidth && _) return s(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && h) return u;
                            if (t.mediumHeight && B) return u;
                            if (t.smallHeight && g) return u;
                            if (t.extraSmallHeight && p) return u;
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
                (0, r.memo)(C);
                const h = (e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    B = ({ children: e }) => {
                        const u = (0, r.useContext)(F),
                            t = (0, r.useState)(u),
                            a = t[0],
                            n = t[1],
                            s = (0, r.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    a = o.O.view.pxToRem(u);
                                n(Object.assign({ width: t, height: a }, E(t, a, l)));
                            }, []),
                            c = (0, r.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        h(() => {
                            o.O.client.events.on('clientResized', s), o.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', s),
                                        o.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [s, c],
                            );
                        const m = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                        return i().createElement(F.Provider, { value: m }, e);
                    };
                var g = t(6483),
                    p = t.n(g),
                    v = t(926),
                    f = t.n(v);
                let b, w, y;
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
                    })(y || (y = {}));
                const x = () => {
                        const e = (0, r.useContext)(F),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
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
                                        return y.ExtraLarge;
                                    case e.largeHeight:
                                        return y.Large;
                                    case e.mediumHeight:
                                        return y.Medium;
                                    case e.smallHeight:
                                        return y.Small;
                                    case e.extraSmallHeight:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
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
                        [w.ExtraSmall]: '',
                        [w.Small]: f().SMALL_WIDTH,
                        [w.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [w.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [y.ExtraSmall]: '',
                        [y.Small]: f().SMALL_HEIGHT,
                        [y.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [y.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [b.ExtraSmall]: '',
                        [b.Small]: f().SMALL,
                        [b.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [b.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [b.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
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
                            })(e, S);
                        const n = x(),
                            r = n.mediaWidth,
                            s = n.mediaHeight,
                            o = n.mediaSize;
                        return i().createElement('div', T({ className: p()(t, N[r], M[s], L[o]) }, a), u);
                    },
                    O = ['children'];
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
                        })(e, O);
                    return i().createElement(B, null, i().createElement(k, t, u));
                };
                var H = t(493),
                    W = t.n(H);
                function I() {
                    return !1;
                }
                console.log;
                var V = t(9174);
                function $(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return U(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return U(e, u);
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
                function U(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const z = (e) => (0 === e ? window : window.subViews.get(e));
                const G = () => (e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: n, children: s, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    E = (t, a, n) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = z,
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
                                                        const s = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = o.O.view.addModelObserver(s, u, !0);
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
                                                        for (var e, t = $(n.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            s =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : s.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            m = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            n = V.LO.box(a, { equals: I });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, V.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            n = V.LO.box(a, { equals: I });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, V.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const a = l(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = V.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, V.aD)((u) => {
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
                                                                    (e, [u, t]) => ((e[t] = V.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, V.aD)((e) => {
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
                                                cleanup: E,
                                            }),
                                            d = { mode: t, model: m, externalModel: s, cleanup: E };
                                        return {
                                            model: m,
                                            controls: 'mocks' === t && n ? n.controls(d) : u(d),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    m = (0, r.useRef)(!1),
                                    d = (0, r.useState)(a),
                                    A = d[0],
                                    _ = d[1],
                                    F = (0, r.useState)(() => E(a, n, l)),
                                    D = F[0],
                                    C = F[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        m.current ? C(E(A, n, l)) : (m.current = !0);
                                    }, [l, A, n]),
                                    (0, r.useEffect)(() => {
                                        _(a);
                                    }, [a]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            D.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [D],
                                    ),
                                    i().createElement(t.Provider, { value: D }, s)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    },
                    j = G()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            season: e.primitives(
                                [
                                    'startTimestamp',
                                    'endTimestamp',
                                    'serverTimestamp',
                                    'state',
                                    'name',
                                    'hasTentativeDates',
                                ],
                                'season',
                            ),
                            year: e.primitives(['state'], 'year'),
                        }),
                        ({ externalModel: e }) => ({ pollServerTime: e.createCallbackNoArgs('season.pollServerTime') }),
                    ),
                    K = j[0],
                    q = j[1];
                var Y = t(3403),
                    X = t(7030);
                function Z(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
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
                    J = [
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
                function ee() {
                    return (
                        (ee =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ee.apply(this, arguments)
                    );
                }
                class ue extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Z(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Z(this.props.soundClick);
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
                            r = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            m =
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
                                })(e, J)),
                            d = p()(Q.base, Q[`base__${r}`], Q[`base__${n}`], null == s ? void 0 : s.base),
                            A = p()(Q.icon, Q[`icon__${r}`], Q[`icon__${n}`], null == s ? void 0 : s.icon),
                            _ = p()(Q.glow, null == s ? void 0 : s.glow),
                            F = p()(Q.caption, Q[`caption__${r}`], null == s ? void 0 : s.caption),
                            D = p()(Q.goto, null == s ? void 0 : s.goto);
                        return i().createElement(
                            'div',
                            ee(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== r && i().createElement('div', { className: Q.shine }),
                            i().createElement('div', { className: A }, i().createElement('div', { className: _ })),
                            i().createElement('div', { className: F }, u),
                            a && i().createElement('div', { className: D }, a),
                        );
                    }
                }
                ue.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var te = t(5521),
                    ae = t(9916);
                const ne = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function re(e = te.n.NONE, u = ne, t = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== te.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, a]);
                }
                function ie(e) {
                    re(te.n.ESCAPE, e);
                }
                const se = 'page_close_a4',
                    oe = ({ onClose: e, className: u }) => (
                        ie(e),
                        i().createElement(
                            'div',
                            { className: p()(se, u) },
                            i().createElement(ue, {
                                caption: R.strings.comp7.closeButtonLabel(),
                                type: 'close',
                                side: 'right',
                                onClick: e,
                            }),
                        )
                    ),
                    le = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: 300 } };
                function ce(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                var Ee = t(3946);
                const me = G()(
                        ({ observableModel: e }) => {
                            const u = Object.assign({}, e.primitives(['reconFlightDelay']), {
                                    vehicles: e.array('vehicles'),
                                }),
                                t = (0, Ee.Om)(
                                    (e) => {
                                        const t = ce(u.vehicles.get(), e);
                                        if (!t) throw new Error(`vehicle with index ${e} is not found`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: I },
                                );
                            return Object.assign({}, u, { computes: { vehicle: t } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            openVideo: e.createCallbackNoArgs('onVideoOpen'),
                        }),
                    ),
                    de = me[0],
                    Ae = me[1],
                    _e = 'App_base_96',
                    Fe = 'App_container_f4',
                    De = 'App_waiting_99',
                    Ce = 'Spinner_base_87',
                    he = 'Spinner_caption_cf',
                    Be = 'Spinner_gear_c4',
                    ge = 'Spinner_logo_bf',
                    pe = ({ message: e, className: u, classNames: t }) =>
                        i().createElement(
                            'div',
                            { className: p()(Ce, u) },
                            e && i().createElement('div', { className: p()(he, null == t ? void 0 : t.caption) }, e),
                            i().createElement('div', { className: p()(Be, null == t ? void 0 : t.gear) }),
                            i().createElement('div', { className: p()(ge, null == t ? void 0 : t.logo) }),
                        ),
                    ve = ({ className: e, onClose: u }) => (
                        ie(u), i().createElement('div', { className: p()(e) }, i().createElement(pe, null))
                    ),
                    fe = {
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
                let be, we;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(be || (be = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(we || (we = {}));
                const ye = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: n,
                    mixClass: s,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: m,
                    onMouseUp: d,
                    onMouseLeave: A,
                    onClick: _,
                }) => {
                    const F = (0, r.useRef)(null),
                        D = (0, r.useState)(t),
                        C = D[0],
                        h = D[1],
                        B = (0, r.useState)(!1),
                        g = B[0],
                        v = B[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                C && null !== F.current && !F.current.contains(e.target) && h(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, r.useEffect)(() => {
                            h(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: F,
                                className: p()(
                                    fe.base,
                                    fe[`base__${a}`],
                                    n && fe.base__disabled,
                                    u && fe[`base__${u}`],
                                    C && fe.base__focus,
                                    g && fe.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    n || (null !== o && Z(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    n || (d && d(e), v(!1));
                                },
                                onMouseDown: function (e) {
                                    n ||
                                        (null !== l && Z(l),
                                        m && m(e),
                                        t && (n || (F.current && (F.current.focus(), h(!0)))),
                                        v(!0));
                                },
                                onMouseLeave: function (e) {
                                    n || (A && A(e), v(!1));
                                },
                                onClick: function (e) {
                                    n || (_ && _(e));
                                },
                            },
                            a !== be.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: fe.back }),
                                    i().createElement('span', { className: fe.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: p()(fe.state, fe.state__default) },
                                i().createElement('span', { className: fe.stateDisabled }),
                                i().createElement('span', { className: fe.stateHighlightHover }),
                                i().createElement('span', { className: fe.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: fe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ye.defaultProps = { type: be.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const xe = ye,
                    Se = (e) => {
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
                    Te = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Ne = [];
                function Me(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), Ne)
                    );
                }
                function Le(e, u, t = []) {
                    const a = (0, r.useRef)(0),
                        n = (0, r.useCallback)(() => window.clearInterval(a.current), t || []);
                    (0, r.useEffect)(() => n, [n]);
                    const i = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            (a.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, i),
                        n,
                    ];
                }
                function Re(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return ke(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ke(e, u);
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
                function ke(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                function Oe(e, u, t) {
                    const a = (0, r.useMemo)(
                        () =>
                            (function (e, u, t, a) {
                                let n,
                                    r = !1,
                                    i = 0;
                                function s() {
                                    n && clearTimeout(n);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - i;
                                    function E() {
                                        (i = Date.now()), t.apply(l, o);
                                    }
                                    r ||
                                        (a && !n && E(),
                                        s(),
                                        void 0 === a && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (n = setTimeout(
                                                  a
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : E,
                                                  void 0 === a ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((a = t), (t = u), (u = void 0)),
                                    (o.cancel = function () {
                                        s(), (r = !0);
                                    }),
                                    o
                                );
                            })(t, e),
                        u,
                    );
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                }
                let Pe;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Pe || (Pe = {}));
                const He = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    We = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: a,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const s = (e, t) => {
                            const a = u(e),
                                n = a[0],
                                r = a[1];
                            return r <= n ? 0 : Te(n, r, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? He : c,
                                m = (0, r.useRef)(null),
                                d = (0, r.useRef)(null),
                                A = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        a = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (var a, n = Re(u(e).values()); !(a = n()).done; ) (0, a.value)(...t);
                                        };
                                    return (0, r.useMemo)(() => ({ on: t, off: a, trigger: n }), []);
                                })(),
                                _ = Oe(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, X.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), A.trigger('change', e), i && _());
                                    },
                                    onRest: (e) => A.trigger('rest', e),
                                    onStart: (e) => A.trigger('start', e),
                                    onPause: (e) => A.trigger('pause', e),
                                })),
                                D = F[0],
                                C = F[1],
                                h = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var a;
                                        const n = D.scrollPosition.get(),
                                            r = (null != (a = D.scrollPosition.goal) ? a : 0) - n;
                                        return s(e, u * t + r + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                B = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const a = m.current;
                                        a &&
                                            C.start({
                                                scrollPosition: s(a, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: s(a, D.scrollPosition.get()) },
                                            });
                                    },
                                    [C, E.animationConfig, D.scrollPosition],
                                ),
                                g = (0, r.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = d.current;
                                        if (!u || !t) return;
                                        const a = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            r = h(u, e, a);
                                        B(r);
                                    },
                                    [B, h, E.step],
                                ),
                                p = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && g(a(e)),
                                            m.current && A.trigger('mouseWheel', e, D.scrollPosition, u(m.current));
                                    },
                                    [D.scrollPosition, g, A],
                                ),
                                v = ((e, u = []) => {
                                    const t = (0, r.useRef)(),
                                        a = (0, r.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        Se(() => {
                                            const e = m.current;
                                            e &&
                                                (B(s(e, D.scrollPosition.goal), { immediate: !0 }),
                                                A.trigger('resizeHandled'));
                                        }),
                                    [B, D.scrollPosition.goal],
                                ),
                                f = Me(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = s(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && B(u, { immediate: !0 }),
                                        A.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? n(d.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? u(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: p,
                                    applyScroll: B,
                                    applyStepTo: g,
                                    contentRef: m,
                                    wrapperRef: d,
                                    scrollPosition: C,
                                    animationScroll: D,
                                    recalculateContent: f,
                                    events: { on: A.on, off: A.off },
                                }),
                                [D.scrollPosition, B, g, A.off, A.on, f, p, C, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Ie = We({
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
                        getDirection: (e) => (e.deltaY > 1 ? Pe.Next : Pe.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ve = 'HorizontalBar_base_49',
                    $e = 'HorizontalBar_base__nonActive_82',
                    Ue = 'HorizontalBar_leftButton_5f',
                    ze = 'HorizontalBar_rightButton_03',
                    Ge = 'HorizontalBar_track_0d',
                    je = 'HorizontalBar_thumb_fd',
                    Ke = 'HorizontalBar_rail_32',
                    qe = 'disable',
                    Ye = { pending: !1, offset: 0 },
                    Xe = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Ze = () => {},
                    Qe = (e, u) => Math.max(20, e.offsetWidth * u),
                    Je = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Xe, onDrag: a = Ze }) => {
                        const n = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            E = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            d = (0, r.useState)(Ye),
                            A = d[0],
                            _ = d[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    _(e),
                                        E.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [a],
                            ),
                            D = () => {
                                const u = c.current,
                                    t = E.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / n),
                                    o = Te(0, 1, r / (n - a)),
                                    m = (u.offsetWidth - Qe(u, i)) * o;
                                (t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && E.current) {
                                            if (0 === e)
                                                return s.current.classList.add(qe), void l.current.classList.remove(qe);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(qe), void l.current.classList.add(qe);
                                            var u, t;
                                            s.current.classList.remove(qe), l.current.classList.remove(qe);
                                        }
                                    })(m);
                            },
                            C = Me(() => {
                                (() => {
                                    const u = E.current,
                                        t = c.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && a && t)) return;
                                    const i = Math.min(1, a / r);
                                    (u.style.width = `${Qe(t, i)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === i ? n.current.classList.add($e) : n.current.classList.remove($e));
                                })(),
                                    D();
                            });
                        (0, r.useEffect)(() => Se(C)),
                            (0, r.useEffect)(
                                () =>
                                    Se(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = Ze;
                                        const a = () => {
                                            t(), (t = Se(C));
                                        };
                                        return (
                                            e.events.on('recalculateContent', C),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', C),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!A.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!r || !i) return;
                                        const s = c.current,
                                            o = E.current;
                                        if (!s || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - A.offset - s.getBoundingClientRect().x,
                                            m = (l / s.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: m });
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        u(), F(Ye);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, A.offset, A.pending, a, F]);
                        const h = Le((u) => e.applyStepTo(u), m, [e]),
                            B = h[0],
                            g = h[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', g, !0),
                                () => document.removeEventListener('mouseup', g, !0)
                            ),
                            [g],
                        );
                        const v = (e) => {
                            e.target.classList.contains(qe) || Z('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: p()(Ve, u.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: p()(Ue, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(qe) || 0 !== e.button || (Z('play'), B(Pe.Next));
                                },
                                onMouseUp: g,
                                ref: s,
                                onMouseEnter: v,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: p()(Ge, u.track),
                                    onMouseDown: (u) => {
                                        const a = E.current;
                                        if (a && 0 === u.button)
                                            if ((Z('play'), u.target === a))
                                                F({ pending: !0, offset: u.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const a = E.current,
                                                        n = e.contentRef.current;
                                                    if (!a || !n) return;
                                                    const r = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                })(u.screenX > a.getBoundingClientRect().x ? Pe.Prev : Pe.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                i().createElement('div', { ref: E, className: p()(je, u.thumb) }),
                                i().createElement('div', { className: p()(Ke, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: p()(ze, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(qe) || 0 !== e.button || (Z('play'), B(Pe.Prev));
                                },
                                onMouseUp: g,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    eu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    uu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        classNames: s,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: p()(eu.base, e.base) });
                            }, [a]),
                            m = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: p()(eu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(eu.defaultScrollArea, n) },
                                i().createElement(tu, { className: o, api: m, classNames: s }, e),
                            ),
                            i().createElement(Je, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    tu = ({ api: e, className: u, classNames: t, children: a }) => (
                        (0, r.useEffect)(() => Se(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: p()(eu.base, u) },
                            i().createElement(
                                'div',
                                {
                                    className: p()(eu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: p()(eu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (tu.Bar = Je), (tu.Default = uu);
                const au = We({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Pe.Next : Pe.Prev),
                    }),
                    nu = 'VerticalBar_base_f3',
                    ru = 'VerticalBar_base__nonActive_42',
                    iu = 'VerticalBar_topButton_d7',
                    su = 'VerticalBar_bottomButton_06',
                    ou = 'VerticalBar_track_df',
                    lu = 'VerticalBar_thumb_32',
                    cu = 'VerticalBar_rail_43',
                    Eu = 'disable',
                    mu = () => {},
                    du = { pending: !1, offset: 0 },
                    Au = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    _u = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Fu = (e, u) => Math.max(20, e.offsetHeight * u),
                    Du = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Au, onDrag: a = mu }) => {
                        const n = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            E = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            d = (0, r.useState)(du),
                            A = d[0],
                            _ = d[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    _(e),
                                        E.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [a],
                            ),
                            D = Me(() => {
                                const u = E.current,
                                    t = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && u && t)) return;
                                const i = Math.min(1, a / r);
                                return (
                                    (u.style.height = `${Fu(t, i)}px`),
                                    (u.style.display = 'flex'),
                                    n.current &&
                                        (1 === i ? n.current.classList.add(ru) : n.current.classList.remove(ru)),
                                    i
                                );
                            }),
                            C = Me(() => {
                                const u = c.current,
                                    t = E.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / n),
                                    o = Te(0, 1, r / (n - a)),
                                    m = (u.offsetHeight - Fu(u, i)) * o;
                                (t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && E.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(Eu), void l.current.classList.remove(Eu);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(Eu), void l.current.classList.add(Eu);
                                            var u, t;
                                            s.current.classList.remove(Eu), l.current.classList.remove(Eu);
                                        }
                                    })(m);
                            }),
                            h = Me(() => {
                                _u(e, () => {
                                    D(), C();
                                });
                            });
                        (0, r.useEffect)(() => Se(h)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    _u(e, () => {
                                        C();
                                    });
                                };
                                let t = mu;
                                const a = () => {
                                    t(), (t = Se(h));
                                };
                                return (
                                    e.events.on('recalculateContent', h),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', h),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!A.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        F(du);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        _u(e, (t) => {
                                            const n = c.current,
                                                r = E.current,
                                                i = e.getContainerSize();
                                            if (!n || !r || !i) return;
                                            const s = u.screenY - A.offset - n.getBoundingClientRect().y,
                                                o = (s / n.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: s, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, A.offset, A.pending, a, F]);
                        const B = Le((u) => e.applyStepTo(u), m, [e]),
                            g = B[0],
                            v = B[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Eu) || Z('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: p()(nu, u.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: p()(iu, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Eu) || 0 !== e.button || (Z('play'), g(Pe.Next));
                                },
                                ref: s,
                                onMouseEnter: f,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: p()(ou, u.track),
                                    onMouseDown: (u) => {
                                        const a = E.current;
                                        if (a && 0 === u.button)
                                            if ((Z('play'), u.target === a))
                                                F({ pending: !0, offset: u.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    E.current &&
                                                        _u(e, (a) => {
                                                            if (!a) return;
                                                            const n = t(e),
                                                                r = e.clampPosition(a, a.scrollTop + n * u);
                                                            e.applyScroll(r);
                                                        });
                                                })(u.screenY > a.getBoundingClientRect().y ? Pe.Prev : Pe.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                i().createElement('div', { ref: E, className: p()(lu, u.thumb) }),
                                i().createElement('div', { className: p()(cu, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: p()(su, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Eu) || 0 !== e.button || (Z('play'), g(Pe.Prev));
                                },
                                onMouseUp: v,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Cu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    hu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: s,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: p()(Cu.base, e.base) });
                            }, [a]),
                            m = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: p()(Cu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(Cu.area, n) },
                                i().createElement(Bu, { className: s, classNames: o, api: m }, e),
                            ),
                            i().createElement(Du, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Bu = ({ className: e, classNames: u, children: t, api: a }) => (
                        (0, r.useEffect)(() => Se(a.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: p()(Cu.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(Cu.content, null == u ? void 0 : u.content), ref: a.contentRef },
                                t,
                            ),
                        )
                    );
                Bu.Default = hu;
                const gu = { Vertical: n, Horizontal: a },
                    pu = 'grid_container_c5',
                    vu = 'grid_header_56',
                    fu = 'grid_row_3d',
                    bu = 'grid_cell_62';
                var wu = t(1281);
                let yu;
                function xu(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function Su(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function Tu(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(yu || (yu = {}));
                const Nu = (e) => e.replace(/&nbsp;/g, ' '),
                    Mu = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Lu = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Ru = (e, u, t = yu.left) => e.split(u).reduce(t === yu.left ? Mu : Lu, []),
                    ku = (() => {
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
                    Ou = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Pu = (e, u = yu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Ou.includes(t)) return ku(e);
                        if ('ja' === t) {
                            return (0, wu.D4)()
                                .parse(e)
                                .map((e) => Nu(e));
                        }
                        return ((e, u = yu.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = Nu(e);
                            return Ru(n, /( )/, u).forEach((e) => (t = t.concat(Ru(e, a, yu.left)))), t;
                        })(e, u);
                    },
                    Hu = 'FormatText_base_d0',
                    Wu = ({ binding: e, text: u = '', classMix: t, alignment: a = yu.left, formatWithBrackets: n }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const s = n && e ? xu(u, e) : u;
                        return i().createElement(
                            r.Fragment,
                            null,
                            s.split('\n').map((u, n) =>
                                i().createElement(
                                    'div',
                                    { className: p()(Hu, t), key: `${u}-${n}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : Pu(e, u))))(
                                        u,
                                        a,
                                        e,
                                    ).map((e, u) => i().createElement(r.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    Iu = {
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
                    Vu = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    $u = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Uu = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    zu = (0, r.memo)(({ text: e, binding: u, classMix: t }) => {
                        const a = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            n = (0, r.useMemo)(() => u || {}, [u]);
                        let s = Vu.exec(e),
                            o = e,
                            l = 0;
                        for (; s; ) {
                            const t = s[0],
                                r = $u.exec(t),
                                c = Uu.exec(t),
                                E = s[1];
                            if (r && c) {
                                const e = r[0],
                                    s = e + l++ + e;
                                (o = o.replace(t, `%(${s})`)),
                                    (n[s] = Iu[e]
                                        ? i().createElement(
                                              'span',
                                              { className: Iu[e] },
                                              i().createElement(Wu, { text: E, binding: u }),
                                          )
                                        : i().createElement(
                                              'span',
                                              { style: a(e) },
                                              i().createElement(Wu, { text: E, binding: u }),
                                          ));
                            }
                            s = Vu.exec(e);
                        }
                        return i().createElement(Wu, { text: o, classMix: t, binding: n });
                    }),
                    Gu = R.strings.comp7,
                    ju = (e, u) => String(e.$dyn(u)),
                    Ku = (e) => ju(Gu.seasonName, e);
                function qu(e, u, t) {
                    ((e, u) => {
                        const t = (0, r.useRef)(e);
                        (t.current = e),
                            (0, r.useEffect)(() => {
                                if (void 0 === u) return;
                                const e = window.setInterval(() => {
                                    t.current();
                                }, u);
                                return () => clearInterval(e);
                            }, [u]);
                    })(
                        () => {
                            t();
                        },
                        e < u ? 950 : void 0,
                    );
                }
                const Yu = [
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
                function Xu(e) {
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
                const Zu = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ae.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Qu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            m = void 0 !== E && E,
                            d = e.decoratorId,
                            A = void 0 === d ? 0 : d,
                            _ = e.isEnabled,
                            F = void 0 === _ || _,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            h = e.onShow,
                            B = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Yu);
                        const p = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, r.useMemo)(
                                () =>
                                    C ||
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
                                [C],
                            ),
                            f = (0, r.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (Zu(t, A, { isMouseEvent: !0, on: !0, arguments: Xu(a) }, v),
                                    h && h(),
                                    (p.current.isVisible = !0));
                            }, [t, A, a, v, h]),
                            b = (0, r.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        Zu(t, A, { on: !1 }, v),
                                        p.current.isVisible && B && B(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, A, v, B]),
                            w = (0, r.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            );
                        return F
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      n && n(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              b(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === m && b(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === m && b(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    Ju = ['children'];
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const ut = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, Ju);
                    return i().createElement(
                        Qu,
                        et(
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
                let tt;
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
                })(tt || (tt = {}));
                var at = t(8613);
                const nt = 60,
                    rt = 3600,
                    it = 86400,
                    st = (Date.now(), at.Ew.getRegionalDateTime),
                    ot = at.Ew.getFormattedDateTime;
                const lt = (0, r.memo)(({ datetime: e, format: u = tt.ShortDate, isConvertedToLocal: t = !0 }) =>
                        Object.values(tt).includes(u) ? st(e, u, t) : ot(e, u, t),
                    ),
                    ct = (e) => {
                        const u = Math.floor(e);
                        return {
                            totalSecondsLeft: u,
                            seconds: Math.floor(u % 60),
                            minutes: Math.floor(u / 60) % 60,
                            hours: Math.floor((u / 3600) % 24),
                            totalDays: Math.floor(u / 86400),
                        };
                    },
                    Et = R.strings.comp7.season,
                    mt = (e, u) => ({
                        startDate: i().createElement(lt, { datetime: e, format: tt.ShortDate }),
                        endDate: i().createElement(lt, { datetime: u, format: tt.ShortDate }),
                    }),
                    dt = (e, u, t) => {
                        const a = u - t,
                            n = ((e, u) => ct(e - u))(u, t);
                        return a >= 604800
                            ? i().createElement(Wu, { text: Et.range(), binding: mt(e, u) })
                            : a >= it
                              ? i().createElement(Wu, { text: Et.daysLeft(), binding: n })
                              : a >= rt
                                ? i().createElement(Wu, { text: Et.hoursLeft(), binding: n })
                                : a >= nt
                                  ? i().createElement(Wu, { text: Et.minutesLeft(), binding: n })
                                  : a >= 1
                                    ? i().createElement(Wu, { text: Et.secondsLeft(), binding: n })
                                    : void 0;
                    },
                    At = 'ActiveSeasonState_base_55',
                    _t = 'ActiveSeasonState_calendarIcon_df',
                    Ft = 'ActiveSeasonState_divider_5b',
                    Dt = ({
                        startTimestamp: e,
                        endTimestamp: u,
                        currentTimestamp: t,
                        seasonName: a,
                        tooltipId: n = '',
                        hasSeasonName: r = !0,
                        classNames: s,
                    }) =>
                        i().createElement(
                            ut,
                            { args: { tooltipId: n }, isEnabled: Boolean(n) },
                            i().createElement(
                                'div',
                                { className: At },
                                i().createElement('div', { className: p()(_t, null == s ? void 0 : s.calendarIcon) }),
                                r &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        Ku(a),
                                        i().createElement('div', { className: Ft }),
                                    ),
                                dt(e, u, t),
                            ),
                        ),
                    Ct = 'ScheduleSubheading_base_f7',
                    ht = (0, Y.Pi)(({ className: e, classNames: u, hasSeasonName: t = !0 }) => {
                        const a = q(),
                            n = a.model,
                            r = a.controls,
                            s = n.season.startTimestamp.get(),
                            o = n.season.endTimestamp.get(),
                            l = n.season.serverTimestamp.get(),
                            c = n.season.name.get();
                        return (
                            qu(l, o, r.pollServerTime),
                            i().createElement(
                                'div',
                                { className: p()(Ct, e) },
                                l < o
                                    ? i().createElement(
                                          'div',
                                          { className: null == u ? void 0 : u.activeSeasonState },
                                          i().createElement(Dt, {
                                              startTimestamp: s,
                                              endTimestamp: o,
                                              currentTimestamp: l,
                                              seasonName: c,
                                              tooltipId: n.root.get().tooltipId,
                                              hasSeasonName: t,
                                              classNames: null == u ? void 0 : u.scheduleClassNames,
                                          }),
                                      )
                                    : i().createElement(zu, {
                                          text: R.strings.comp7.season.over(),
                                          binding: { seasonName: Ku(c) },
                                      }),
                            )
                        );
                    }),
                    Bt = 'typography_h1_e1',
                    gt = 'typography_h2_18',
                    pt = 'typography_h3_79',
                    vt = 'typography_paragraphText_f5',
                    ft = 'Banner_base_a0',
                    bt = 'Banner_h3_80',
                    wt = 'Banner_date_db',
                    yt = 'WatchVideo_base_98',
                    xt = 'WatchVideo_backdrop_40',
                    St = 'WatchVideo_videoButton_57',
                    Tt = 'WatchVideo_text_92',
                    Nt = (0, Y.Pi)(() => {
                        const e = Ae().controls;
                        return i().createElement(
                            'div',
                            { className: yt, onClick: e.openVideo },
                            i().createElement('div', { className: xt }),
                            i().createElement('div', { className: St }),
                            i().createElement('div', { className: Tt }, R.strings.comp7.whatsNewView.watchVideo()),
                        );
                    }),
                    Mt = R.strings.comp7.whatsNewView.banner,
                    Lt = () =>
                        i().createElement(
                            'div',
                            { className: ft },
                            i().createElement('div', { className: p()(pt, bt) }, Mt.title.small()),
                            i().createElement('div', { className: Bt }, Mt.title.large()),
                            i().createElement('div', { className: wt }, i().createElement(ht, { hasSeasonName: !1 })),
                            i().createElement(Nt, null),
                        ),
                    Rt = {
                        main: { name: 'ratingUpdate', tagType: 'revamped' },
                        secondary: [
                            { name: 'assaultTankDestroyer', tagType: 'revamped' },
                            { name: 'reconFlight', tagType: 'revamped' },
                        ],
                    },
                    kt = {
                        main: { name: 'tournaments', tagType: 'new' },
                        secondary: [
                            { name: 'shopUpdates', tagType: 'seasonUpdate' },
                            { name: 'trainingRoom', tagType: 'revamped' },
                        ],
                    },
                    Ot = 'Introduction_row_38',
                    Pt = 'Introduction_h2_a8',
                    Ht = 'Introduction_seasonText_ff',
                    Wt = 'Introduction_introContainer_02',
                    It = 'Introduction_introBackgroundWrapper_60',
                    Vt = 'Introduction_introBackground_a7',
                    $t = 'Introduction_introDescription_5e',
                    Ut = R.strings.comp7.whatsNewView,
                    zt = () =>
                        i().createElement(
                            'div',
                            null,
                            i().createElement(
                                'div',
                                { className: p()(fu, Ot) },
                                i().createElement(
                                    'div',
                                    { className: p()(bu, Wt) },
                                    i().createElement(
                                        'div',
                                        { className: It },
                                        i().createElement('div', { className: Vt }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: $t },
                                        i().createElement(Wu, { classMix: p()(gt, Pt), text: Ut.intro.heading() }),
                                        i().createElement(Wu, { classMix: p()(vt, Ht), text: Ut.intro.description() }),
                                    ),
                                ),
                            ),
                        ),
                    Gt = {
                        '--pageContentWidth': '78vw',
                        base: 'Main_base_e5',
                        areaBaseWrapper: 'Main_areaBaseWrapper_81',
                        content: 'Main_content_e4',
                        content__first: 'Main_content__first_49',
                        content__second: 'Main_content__second_82',
                        content__third: 'Main_content__third_74',
                        scrollBar: 'Main_scrollBar_0a',
                        banner: 'Main_banner_44',
                        section: 'Main_section_87',
                        button: 'Main_button_8b',
                        slideUpIn: 'Main_slideUpIn_df',
                        container__1: 'Main_container__1_64',
                        container__2: 'Main_container__2_bb',
                        container__3: 'Main_container__3_31',
                        container__4: 'Main_container__4_f6',
                        container__5: 'Main_container__5_d0',
                        fadeIn: 'Main_fadeIn_46',
                        fadeInThreeQuarters: 'Main_fadeInThreeQuarters_25',
                        fadeInHalf: 'Main_fadeInHalf_e2',
                        fadeOut: 'Main_fadeOut_b9',
                        fadeInWithScale: 'Main_fadeInWithScale_00',
                        slideUp: 'Main_slideUp_df',
                        scale: 'Main_scale_5e',
                        raysAppearance: 'Main_raysAppearance_f5',
                        rotate: 'Main_rotate_ea',
                        'reverse-rotate': 'Main_reverse-rotate_3f',
                        glowAppearance: 'Main_glowAppearance_cf',
                        highlightAppearance: 'Main_highlightAppearance_bb',
                        blink: 'Main_blink_fa',
                    },
                    jt = {
                        base: 'Tag_base_b1',
                        base__new: 'Tag_base__new_6b',
                        base__changed: 'Tag_base__changed_95',
                        base__seasonUpdate: 'Tag_base__seasonUpdate_2c',
                        base__revamped: 'Tag_base__revamped_5c',
                        base__returned: 'Tag_base__returned_6d',
                    },
                    Kt = ({ type: e, className: u }) =>
                        i().createElement(
                            'div',
                            { className: p()(jt.base, jt[`base__${e}`], u) },
                            R.strings.comp7.whatsNewView.tag.$dyn(e),
                        ),
                    qt = [
                        { name: '11_murovanka', tag: 'new' },
                        { name: '44_north_america', tag: 'new' },
                        { name: '04_himmelsdorf', tag: 'returned' },
                    ],
                    Yt = {
                        base: 'Map_base_71',
                        gradient: 'Map_gradient_81',
                        content: 'Map_content_66',
                        nameContainer: 'Map_nameContainer_a3',
                        name: 'Map_name_70',
                        stamp: 'Map_stamp_37',
                        stamp__removed: 'Map_stamp__removed_46',
                        stamp__underDevelopment: 'Map_stamp__underDevelopment_2b',
                    },
                    Xt = ({ name: e, index: u, tag: t, stamp: a }) => {
                        const n = R.images.gui.maps.icons.comp7.whatsNewView.arenas.$dyn(`c_${u}`),
                            r = R.strings.arenas.$dyn(`c_${e}`);
                        return i().createElement(
                            'div',
                            { className: Yt.base, style: { backgroundImage: `url(${n})` } },
                            i().createElement('div', { className: Yt.gradient }),
                            a &&
                                i().createElement(
                                    'div',
                                    { className: p()(Yt.stamp, Yt[`stamp__${a}`]) },
                                    R.strings.comp7.whatsNewView.stamp.$dyn(a),
                                ),
                            i().createElement(
                                'div',
                                { className: Yt.content },
                                t && i().createElement(Kt, { type: t }),
                                i().createElement(
                                    'div',
                                    { className: Yt.nameContainer },
                                    i().createElement('div', { className: Yt.name }, r.$dyn('name')),
                                ),
                            ),
                        );
                    },
                    Zt = { header: 'MapChanges_header_5c', legend: 'MapChanges_legend_43' },
                    Qt = R.strings.comp7.whatsNewView.mapChanges,
                    Jt = () =>
                        i().createElement(
                            'div',
                            { className: Zt.base },
                            i().createElement(
                                'div',
                                { className: p()(vu, Zt.header) },
                                i().createElement('div', { className: gt }, Qt.heading()),
                                i().createElement(Kt, { type: 'seasonUpdate' }),
                            ),
                            i().createElement(
                                'div',
                                { className: fu },
                                qt.map(({ name: e, tag: u, stamp: t }, a) =>
                                    i().createElement(
                                        'div',
                                        { className: bu, key: e },
                                        i().createElement(Xt, { name: e, tag: u, stamp: t, index: a }),
                                    ),
                                ),
                            ),
                        ),
                    ea = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ua() {
                    return (
                        (ua =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ua.apply(this, arguments)
                    );
                }
                const ta = R.views.common.tooltip_window.simple_tooltip_content,
                    aa = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            n = e.note,
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
                            })(e, ea);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: a, note: n, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, a, n, o]);
                        return i().createElement(
                            Qu,
                            ua(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? ta.SimpleTooltipHtmlContent('resId') : ta.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    na = R.strings.comp7.modifier,
                    ra = [
                        {
                            type: 'vehicleDurability',
                            randomValue: R.strings.comp7.whatsNewView.modifiers.NA(),
                            previousSeasonValue: Su(na.valueType.percentage(), { percentage: 25 }),
                            currentSeasonValue: Su(na.valueType.HP(), { hp: 650 }),
                        },
                        {
                            type: 'timeRemainingVisible',
                            randomValue: Su(na.valueType.seconds(), { seconds: 10 }),
                            previousSeasonValue: Su(na.valueType.seconds(), { seconds: 3 }),
                            currentSeasonValue: Su(na.valueType.seconds(), { seconds: 4 }),
                        },
                    ],
                    ia = [
                        {
                            type: 'rangeOfPotentialDamage',
                            randomValue: Su(na.valueType.deviation(), { deviation: 25 }),
                            previousSeasonValue: Su(na.valueType.deviation(), { deviation: 25 }),
                            currentSeasonValue: Su(na.valueType.deviation(), { deviation: 12 }),
                        },
                        {
                            type: 'innerModuleDamageReduction',
                            randomValue: R.strings.comp7.whatsNewView.modifiers.NA(),
                            previousSeasonValue: R.strings.comp7.whatsNewView.modifiers.NA(),
                            currentSeasonValue: Su(na.valueType.percentage(), { percentage: 50 }),
                        },
                        {
                            type: 'engineFireChance',
                            randomValue: Su(na.valueType.percentage(), { percentage: '10-20' }),
                            previousSeasonValue: Su(na.valueType.percentage(), { percentage: '10-20' }),
                            currentSeasonValue: Su(na.valueType.percentage(), { percentage: 0 }),
                        },
                    ],
                    sa = 'Modifiers_base_c3',
                    oa = 'Modifiers_tableContainer_9a',
                    la = 'Modifiers_tableHeadingWrapper_b3',
                    ca = 'Modifiers_section_c3',
                    Ea = 'Modifiers_headingIcon_3c',
                    ma = 'Modifiers_sectionTitle_e5',
                    da = 'Modifiers_tableHeading_86',
                    Aa = 'Modifiers_description_e3',
                    _a = 'Modifiers_columnName_38',
                    Fa = 'Modifiers_row_c0',
                    Da = 'Modifiers_row__heading_7a',
                    Ca = 'Modifiers_dividerContainer_6c',
                    ha = 'Modifiers_dividerGradient_e7',
                    Ba = 'Modifiers_column_b1',
                    ga = 'Modifiers_column__first_bd',
                    pa = 'Modifiers_column__second_dc',
                    va = 'Modifiers_column__third_bb',
                    fa = 'Modifiers_column__fourth_c0',
                    ba = 'Modifiers_glow_54',
                    wa = 'Modifiers_glow__green_8b',
                    ya = 'Modifiers_glow__blue_22',
                    xa = 'Modifiers_verticalGlow_6d',
                    Sa = 'Modifiers_columnIcon_92',
                    Ta = 'Modifiers_columnIcon__random_c0',
                    Na = 'Modifiers_columnIcon__previousSeason_44',
                    Ma = 'Modifiers_columnIcon__currentSeason_4e',
                    La = 'Modifiers_positiveValue_95',
                    Ra = R.strings.comp7.modifier,
                    ka = ({
                        type: e,
                        randomValue: u,
                        previousSeasonValue: t,
                        currentSeasonValue: a,
                        hasBottomDivider: n = !0,
                    }) =>
                        i().createElement(
                            'div',
                            { className: Fa, key: e },
                            i().createElement('div', { className: p()(Ba, ga, vt) }, Ra.name.$dyn(e)),
                            i().createElement(
                                'div',
                                { className: p()(Ba, pa) },
                                i().createElement(Wu, { text: u, classMix: vt }),
                            ),
                            i().createElement(
                                'div',
                                { className: p()(Ba, va) },
                                i().createElement(Wu, { text: t, classMix: La }),
                            ),
                            i().createElement(
                                'div',
                                { className: p()(Ba, fa) },
                                i().createElement(Wu, { text: a, classMix: La }),
                            ),
                            n &&
                                i().createElement(
                                    'div',
                                    { className: Ca },
                                    i().createElement('div', { className: ha }),
                                ),
                        );
                function Oa() {
                    return (
                        (Oa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Oa.apply(this, arguments)
                    );
                }
                const Pa = R.strings.comp7.whatsNewView.modifiers,
                    Ha = (e, u) => e !== u.length - 1,
                    Wa = () => {
                        const e = x().mediaSize < b.Small;
                        return i().createElement(
                            'div',
                            { className: p()(sa, pu) },
                            i().createElement(
                                'div',
                                { className: p()(oa) },
                                i().createElement(
                                    'div',
                                    { className: la },
                                    i().createElement('div', { className: Ea }),
                                    i().createElement(
                                        'div',
                                        { className: da },
                                        i().createElement('div', { className: gt }, Pa.heading()),
                                        i().createElement('div', { className: p()(vt, Aa) }, Pa.description()),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: ca },
                                    i().createElement(
                                        'div',
                                        { className: p()(Fa, Da) },
                                        i().createElement(
                                            'div',
                                            { className: p()(Ba, ga) },
                                            i().createElement('div', { className: ma }, Pa.changed()),
                                            i().createElement(Kt, { type: 'revamped' }),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: p()(Ba, pa) },
                                            i().createElement(
                                                aa,
                                                { isEnabled: e, body: Pa.random() },
                                                i().createElement('div', { className: p()(Sa, Ta) }),
                                            ),
                                            i().createElement('div', { className: _a }, Pa.random()),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: p()(Ba, va) },
                                            i().createElement('div', { className: p()(ba, wa) }),
                                            i().createElement(
                                                aa,
                                                { isEnabled: e, body: Pa.previousSeason() },
                                                i().createElement('div', { className: p()(Sa, Na) }),
                                            ),
                                            i().createElement('div', { className: _a }, Pa.previousSeason()),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: p()(Ba, fa) },
                                            i().createElement('div', { className: xa }),
                                            i().createElement('div', { className: p()(ba, ya) }),
                                            i().createElement(
                                                aa,
                                                { isEnabled: e, body: Pa.currentSeason() },
                                                i().createElement('div', { className: p()(Sa, Ma) }),
                                            ),
                                            i().createElement('div', { className: _a }, Pa.currentSeason()),
                                        ),
                                    ),
                                    ra.map((e, u, t) =>
                                        i().createElement(ka, Oa({}, e, { key: e.type, hasBottomDivider: Ha(u, t) })),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: ca },
                                    i().createElement(
                                        'div',
                                        { className: p()(Fa, Da) },
                                        i().createElement(
                                            'div',
                                            { className: p()(Ba, ga) },
                                            i().createElement('div', { className: ma }, Pa.added()),
                                            i().createElement(Kt, { type: 'new' }),
                                        ),
                                        i().createElement('div', { className: p()(Ba, pa) }),
                                        i().createElement('div', { className: p()(Ba, va) }),
                                    ),
                                    ia.map((e, u, t) =>
                                        i().createElement(ka, Oa({}, e, { key: e.type, hasBottomDivider: Ha(u, t) })),
                                    ),
                                ),
                            ),
                        );
                    },
                    Ia = [
                        {
                            isPremium: !0,
                            name: R.strings.poland_vehicles.Pl21_CS_63_OSP3(),
                            nation: 'poland',
                            roleKey: 'role_MT_sniper',
                            tags: 'comp7_redline',
                            techName: 'Pl21_CS_63_OSP3',
                            tier: 10,
                            type: 'mediumTank',
                            vehicleCD: 52625,
                        },
                        {
                            isPremium: !0,
                            name: R.strings.china_vehicles.Ch41_WZ_111_QL(),
                            nation: 'china',
                            roleKey: 'role_HT_break',
                            tags: 'comp7_ally_support',
                            techName: 'Ch41_WZ_111_QL',
                            tier: 10,
                            type: 'heavyTank',
                            vehicleCD: 62257,
                        },
                        {
                            isPremium: !0,
                            name: '113 BO',
                            nation: 'china',
                            roleKey: 'role_HT_break',
                            tags: 'comp7_ally_support',
                            techName: 'Ch22_113_Beijing_Opera',
                            tier: 10,
                            type: 'heavyTank',
                            vehicleCD: 62513,
                        },
                        {
                            isPremium: !0,
                            name: R.strings.china_vehicles.Ch25_121_mod_1971B_MK(),
                            nation: 'china',
                            roleKey: 'role_MT_universal',
                            tags: 'comp7_aoe_inspire',
                            techName: 'Ch25_121_mod_1971B_MK',
                            tier: 10,
                            type: 'mediumTank',
                            vehicleCD: 58673,
                        },
                        {
                            isPremium: !0,
                            name: R.strings.ussr_vehicles.R126_Object_730_5_short(),
                            nation: 'ussr',
                            roleKey: 'role_ATSPG_universal',
                            tags: 'comp7_sure_shot',
                            techName: 'R126_Object_730_5',
                            tier: 10,
                            type: 'AT-SPG',
                            vehicleCD: 50689,
                        },
                        {
                            isPremium: !0,
                            name: R.strings.usa_vehicles.M60(),
                            nation: 'usa',
                            roleKey: 'role_MT_universal',
                            tags: 'comp7_aoe_inspire',
                            techName: 'A92_M60',
                            tier: 10,
                            type: 'mediumTank',
                            vehicleCD: 15905,
                        },
                        {
                            isPremium: !0,
                            name: R.strings.france_vehicles.AMX_50Fosh_155_short(),
                            nation: 'france',
                            roleKey: 'role_ATSPG_support',
                            tags: 'comp7_risky_attack',
                            techName: 'F64_AMX_50Fosh_155',
                            tier: 10,
                            type: 'AT-SPG',
                            vehicleCD: 13889,
                        },
                        {
                            isPremium: !0,
                            name: '121B',
                            nation: 'china',
                            roleKey: 'role_MT_universal',
                            tags: 'comp7_aoe_inspire',
                            techName: 'Ch25_121_mod_1971B',
                            tier: 10,
                            type: 'mediumTank',
                            vehicleCD: 63537,
                        },
                    ],
                    Va = 'NewVehicles_base_d3',
                    $a = 'NewVehicles_row_9f',
                    Ua = 'NewVehicles_header_e7',
                    za = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ga = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const ja = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Ka = (e) =>
                        ja
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = Ga.length - 1; t >= 0; t--)
                                      for (; e >= Ga[t]; ) (u += za[t]), (e -= Ga[t]);
                                  return u;
                              })(e),
                    qa = {
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
                let Ya;
                !(function (e) {
                    (e.x24 = '24x24'),
                        (e.x24Metal = '24x24_metal'),
                        (e.x48 = '48x48'),
                        (e.x60 = '60x54'),
                        (e.x64 = '64x64'),
                        (e.x80 = '80x80'),
                        (e.x83 = '83x74'),
                        (e.x180 = '180x135');
                })(Ya || (Ya = {}));
                const Xa = R.images.gui.maps.icons.vehicleTypes,
                    Za = (e) => {
                        switch (e) {
                            case Ya.x80:
                                return Xa.large;
                            case Ya.x83:
                                return Xa.big;
                            case Ya.x180:
                                return Xa.huge;
                            default:
                                return Xa.$dyn(`c_${e}`);
                        }
                    },
                    Qa = (0, r.memo)(
                        ({
                            name: e,
                            tier: u,
                            type: t,
                            size: a = Ya.x24Metal,
                            typeIconFolderPath: n = Za(a),
                            isPremium: r = !1,
                            className: s,
                            classNames: o,
                        }) => {
                            const l = `${Tu(t)}${r ? '_elite' : ''}`;
                            return i().createElement(
                                'div',
                                { className: p()(qa.base, qa[`base__${a}`], s) },
                                i().createElement('div', { className: null == o ? void 0 : o.level }, Ka(u)),
                                i().createElement(
                                    'div',
                                    {
                                        className: p()(
                                            qa.vehicleTypeContainer,
                                            null == o ? void 0 : o.vehicleTypeContainer,
                                        ),
                                    },
                                    i().createElement('div', {
                                        className: p()(qa.vehicleType, null == o ? void 0 : o.type),
                                        style: { backgroundImage: `url(${null == n ? void 0 : n.$dyn(l)})` },
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: p()(qa.shortName, null == o ? void 0 : o.shortName) },
                                    e,
                                ),
                            );
                        },
                    ),
                    Ja = 'Vehicle_base_af',
                    en = 'Vehicle_vehicle_0b',
                    un = 'Vehicle_shortName_53',
                    tn = 'Vehicle_level_18',
                    an = 'Vehicle_vehicleName_2b',
                    nn = 'Vehicle_typeIcon_ed',
                    rn = 'Vehicle_type_3a',
                    sn = 'Vehicle_perk_69',
                    on = { type: p()(nn, rn), vehicleTypeContainer: p()(nn, rn), shortName: un, level: tn },
                    ln = ({ vehicle: e }) => {
                        const u = e.nation,
                            t = e.techName,
                            a = e.tags,
                            n = e.vehicleCD,
                            r = e.name,
                            s = e.tier,
                            o = e.type,
                            l = e.isPremium;
                        return i().createElement(
                            'div',
                            {
                                className: Ja,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.comp7.whatsNewView.nations.$dyn(u)})`,
                                },
                            },
                            i().createElement('div', {
                                className: en,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.comp7.whatsNewView.newVehicles.$dyn(`${t.toLowerCase()}`)})`,
                                },
                            }),
                            i().createElement('div', {
                                className: sn,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.comp7.whatsNewView.perks.$dyn(a)})`,
                                },
                            }),
                            i().createElement(
                                ut,
                                { args: { vehicleCD: n, tooltipId: 'shopVehicle' } },
                                i().createElement(
                                    'div',
                                    { className: an },
                                    i().createElement(Qa, {
                                        name: r,
                                        tier: s,
                                        type: o,
                                        isPremium: l,
                                        classNames: on,
                                        typeIconFolderPath: R.images.gui.maps.icons.comp7.whatsNewView.vehicleTypes,
                                    }),
                                ),
                            ),
                        );
                    },
                    cn = R.strings.comp7.whatsNewView.newVehicles,
                    En = () =>
                        i().createElement(
                            'div',
                            { className: Va },
                            i().createElement(
                                'div',
                                { className: p()(vu, Ua) },
                                i().createElement('div', { className: gt }, cn.heading()),
                                i().createElement(Kt, { type: 'new' }),
                            ),
                            i().createElement(
                                'div',
                                { className: p()(fu, $a) },
                                Ia.map((e, u) => i().createElement(ln, { vehicle: e, key: u })),
                            ),
                        ),
                    mn = {
                        base: 'SeasonalChanges_base_5c',
                        row: 'SeasonalChanges_row_35',
                        row__assaultTankDestroyer: 'SeasonalChanges_row__assaultTankDestroyer_93',
                        row__shopUpdates: 'SeasonalChanges_row__shopUpdates_dd',
                        divider: 'SeasonalChanges_divider_29',
                        image: 'SeasonalChanges_image_6d',
                        row__reconFlight: 'SeasonalChanges_row__reconFlight_bc',
                        row__trainingRoom: 'SeasonalChanges_row__trainingRoom_bb',
                        rowContainer: 'SeasonalChanges_rowContainer_58',
                        headingContainer: 'SeasonalChanges_headingContainer_03',
                        heading: 'SeasonalChanges_heading_70',
                        headingTag: 'SeasonalChanges_headingTag_c9',
                        columnContainer: 'SeasonalChanges_columnContainer_83',
                        tournamentsContainer: 'SeasonalChanges_tournamentsContainer_1b',
                        tournamentsContainer__ratingUpdate: 'SeasonalChanges_tournamentsContainer__ratingUpdate_d4',
                        tournamentsContainer__tournaments: 'SeasonalChanges_tournamentsContainer__tournaments_d8',
                        ranks: 'SeasonalChanges_ranks_1d',
                    },
                    dn = R.strings.comp7.whatsNewView,
                    An = (0, Y.Pi)(({ changes: e }) => {
                        const u = Ae().model.reconFlightDelay.get();
                        return i().createElement(
                            'div',
                            { className: p()(fu, mn.base) },
                            i().createElement(
                                'div',
                                {
                                    className: p()(
                                        bu,
                                        mn.tournamentsContainer,
                                        mn[`tournamentsContainer__${e.main.name}`],
                                    ),
                                },
                                i().createElement('div', { className: mn.ranks }),
                                i().createElement(
                                    'div',
                                    { className: p()(mn.headingContainer, gt) },
                                    i().createElement(
                                        'div',
                                        { className: mn.heading },
                                        dn.sectionHeading.$dyn(e.main.name),
                                    ),
                                    i().createElement(Kt, { type: e.main.tagType, className: mn.headingTag }),
                                ),
                                i().createElement('div', { className: vt }, dn.sectionDescription.$dyn(e.main.name)),
                            ),
                            i().createElement(
                                'div',
                                { className: p()(bu, mn.columnContainer) },
                                e.secondary.map(({ name: e, tagType: t }, a, n) =>
                                    i().createElement(
                                        i().Fragment,
                                        { key: e },
                                        i().createElement(
                                            'div',
                                            { className: p()(mn.row, mn[`row__${e}`]) },
                                            i().createElement('div', { className: mn.image }),
                                            i().createElement(
                                                'div',
                                                { className: mn.rowContainer },
                                                i().createElement(
                                                    'div',
                                                    { className: p()(mn.headingContainer, gt) },
                                                    i().createElement(
                                                        'div',
                                                        { className: mn.heading },
                                                        dn.sectionHeading.$dyn(e),
                                                    ),
                                                    i().createElement(Kt, { type: t, className: mn.headingTag }),
                                                ),
                                                i().createElement(Wu, {
                                                    classMix: vt,
                                                    text: `${R.strings.comp7.whatsNewView.sectionDescription.$dyn(e)}`,
                                                    binding: { seconds: u },
                                                }),
                                            ),
                                        ),
                                        a !== n.length - 1 && i().createElement('div', { className: mn.divider }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    _n = {
                        base: 'VehicleRole_base_04',
                        base__22x22: 'VehicleRole_base__22x22_d4',
                        iconContainer: 'VehicleRole_iconContainer_0e',
                        icon: 'VehicleRole_icon_61',
                    };
                let Fn;
                !(function (e) {
                    e.x22 = '22x22';
                })(Fn || (Fn = {}));
                const Dn = R.images.gui.maps.icons.roleExp.roles,
                    Cn = R.strings.menu.roleExp,
                    hn = (0, r.memo)(
                        ({
                            role: e,
                            size: u = Fn.x22,
                            roleIconFolderPath: t = Dn.$dyn(`c_${u}`),
                            className: a,
                            classNames: n,
                        }) => {
                            const r = Tu(e);
                            return i().createElement(
                                'div',
                                { className: p()(_n.base, _n[`base__${u}`], a) },
                                i().createElement(
                                    'div',
                                    { className: p()(_n.iconContainer, null == n ? void 0 : n.iconContainer) },
                                    i().createElement('div', {
                                        className: p()(_n.icon, null == n ? void 0 : n.icon),
                                        style: { backgroundImage: `url(${null == t ? void 0 : t.$dyn(r)})` },
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: p()(_n.label, null == n ? void 0 : n.label) },
                                    i().createElement(Wu, {
                                        text: `${Cn.roleName.$dyn(r)}`,
                                        binding: { groupName: Cn.roleGroupName.$dyn(r) },
                                    }),
                                ),
                            );
                        },
                    ),
                    Bn = 'Vehicle_base_ae',
                    gn = 'Vehicle_gradient_8b',
                    pn = 'Vehicle_details_7d',
                    vn = 'Vehicle_shortName_02',
                    fn = 'Vehicle_level_e9',
                    bn = 'Vehicle_vehicleName_7c',
                    wn = 'Vehicle_typeIcon_20',
                    yn = 'Vehicle_type_01',
                    xn = 'Vehicle_vehicleRole_4c',
                    Sn = { type: p()(wn, yn), vehicleTypeContainer: p()(wn, yn), shortName: vn, level: fn },
                    Tn = (0, Y.Pi)(({ index: e }) => {
                        const u = Ae().model.computes.vehicle(e);
                        return i().createElement(
                            'div',
                            {
                                className: Bn,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.comp7.whatsNewView.vehiclesForRent.$num(u.vehicleCD)})`,
                                },
                            },
                            i().createElement('div', { className: gn }),
                            i().createElement(
                                'div',
                                { className: pn },
                                i().createElement(
                                    ut,
                                    { args: { vehicleCD: u.vehicleCD, tooltipId: 'shopVehicle' } },
                                    i().createElement(
                                        'div',
                                        null,
                                        i().createElement(Qa, {
                                            name: u.name,
                                            tier: u.tier,
                                            type: u.type,
                                            isPremium: u.isPremium,
                                            className: bn,
                                            classNames: Sn,
                                            typeIconFolderPath: R.images.gui.maps.icons.comp7.whatsNewView.vehicleTypes,
                                        }),
                                    ),
                                ),
                                i().createElement(
                                    Qu,
                                    {
                                        contentId: R.views.lobby.ranked.tooltips.RankedBattlesRolesTooltipView('resId'),
                                        args: { vehicleCD: u.vehicleCD },
                                    },
                                    i().createElement(
                                        'div',
                                        null,
                                        i().createElement(hn, { role: u.roleKey, className: xn }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Nn = { header: 'VehiclesForRent_header_2e' },
                    Mn = (0, Y.Pi)(() => {
                        const e = Ae().model;
                        return i().createElement(
                            'div',
                            { className: Nn.container },
                            i().createElement(
                                'div',
                                { className: p()(vu, Nn.header) },
                                i().createElement(
                                    'div',
                                    { className: gt },
                                    R.strings.comp7.whatsNewView.vehiclesForRent.heading(),
                                ),
                                i().createElement(Kt, { type: 'seasonUpdate' }),
                            ),
                            i().createElement(
                                'div',
                                { className: fu },
                                ((e, u) => {
                                    const t = [];
                                    for (let a = 0; a < e; a++) t.push(u(a));
                                    return t;
                                })(e.vehicles.get().length, (e) =>
                                    i().createElement(
                                        'div',
                                        { className: bu, key: e },
                                        i().createElement(Tn, { index: e }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Ln = { base: Gt.scrollBar },
                    Rn = (0, Y.Pi)(() => {
                        const e = Ae().controls,
                            u = q().model.season.name.get(),
                            t = au();
                        return i().createElement(
                            gu.Vertical.Default,
                            { className: Gt.base, barClassNames: Ln, scrollClassName: Gt.areaBaseWrapper, api: t },
                            i().createElement(
                                'div',
                                { className: p()(Gt.content, Gt[`content__${u}`]) },
                                i().createElement(
                                    'div',
                                    { className: p()(pu, Gt.banner, Gt.container__1) },
                                    i().createElement(Lt, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: p()(pu, Gt.section, Gt.container__2) },
                                    i().createElement(zt, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: p()(pu, Gt.section, Gt.container__3) },
                                    i().createElement(An, { changes: Rt }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: p()(pu, Gt.section, Gt.container__4) },
                                    i().createElement(Wa, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: p()(pu, Gt.section, Gt.container__5) },
                                    i().createElement(En, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: p()(pu, Gt.section, Gt.container__6) },
                                    i().createElement(An, { changes: kt }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: p()(pu, Gt.section, Gt.container__7) },
                                    i().createElement(Jt, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: p()(pu, Gt.container__8) },
                                    i().createElement(Mn, null),
                                ),
                                i().createElement(
                                    xe,
                                    { mixClass: Gt.button, onClick: e.close },
                                    R.strings.comp7.whatsNewView.button.ok(),
                                ),
                            ),
                        );
                    }),
                    kn = (0, Y.Pi)(() => {
                        const e = Ae().controls,
                            u = q().model.season.name.get(),
                            t = (0, X.useSpring)(le),
                            a = ((e) => {
                                const u = (0, r.useState)('pending'),
                                    t = u[0],
                                    a = u[1];
                                return (
                                    (0, r.useLayoutEffect)(() => {
                                        let u = 0,
                                            t = 0;
                                        const n = () => {
                                            u + t === e.length && a(0 === u ? 'success' : 'error');
                                        };
                                        e.forEach((e) => {
                                            const a = new Image();
                                            (a.src = e),
                                                a.addEventListener('load', () => {
                                                    t++, n();
                                                }),
                                                a.addEventListener('error', () => {
                                                    u++, n();
                                                });
                                        });
                                    }, [e]),
                                    t
                                );
                            })(
                                ((e) => [
                                    R.images.gui.maps.icons.comp7.whatsNewView.backdrop(),
                                    String(R.images.gui.maps.icons.comp7.whatsNewView.$dyn(`bg_${e}`)),
                                ])(u),
                            );
                        return i().createElement(
                            'div',
                            { className: _e },
                            'success' === a
                                ? i().createElement(
                                      X.animated.div,
                                      { className: Fe, style: t },
                                      i().createElement(Rn, null),
                                      i().createElement(oe, { onClose: e.close }),
                                  )
                                : i().createElement(ve, { onClose: e.close, className: De }),
                        );
                    }),
                    On = { context: 'model.scheduleInfo' };
                engine.whenReady.then(() => {
                    W().render(
                        i().createElement(
                            de,
                            null,
                            i().createElement(
                                P,
                                null,
                                i().createElement(K, { options: On }, i().createElement(kn, null)),
                            ),
                        ),
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
        (__webpack_require__.j = 707),
        (() => {
            var e = { 707: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [926], () => __webpack_require__(2517));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
