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
                    u.d(t, { mouse: () => h, off: () => l, on: () => n, onResize: () => r, onScaleUpdated: () => o });
                var i = u(472),
                    a = u(176);
                const r = (0, i.E)('clientResized'),
                    o = (0, i.E)('self.onScaleUpdated'),
                    n = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    s = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') };
                const h = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function i() {
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
                                        o = s[t]((e) => u([e, 'outside']));
                                    function n(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, n),
                                        i(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(r, n),
                                                (e.listeners -= 1),
                                                i(),
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
                            (e.enabled = !1), i();
                        },
                        enable() {
                            (e.enabled = !0), i();
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
            959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => i,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => n,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var i = u(527),
                    a = u(493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const n = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, u) => {
                'use strict';
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => i });
            },
            493: (e, t, u) => {
                'use strict';
                function i(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => a, G: () => i });
            },
            472: (e, t, u) => {
                'use strict';
                function i(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => i });
            },
            138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => r });
                var i = u(959),
                    a = u(514);
                const r = { view: u(641), client: i, sound: a.ZP };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => o });
                var i = u(959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, i.playSound)(a[t])), e), {}),
                    o = { play: Object.assign({}, r, { sound: i.playSound }), setRTPC: i.setRTPC };
            },
            722: (e, t, u) => {
                'use strict';
                function i(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${i(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => i });
            },
            112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => a });
                var i = u(472);
                const a = {
                    onTextureFrozen: (0, i.E)('self.onTextureFrozen'),
                    onTextureReady: (0, i.E)('self.onTextureReady'),
                    onDomBuilt: (0, i.E)('self.onDomBuilt'),
                    onLoaded: (0, i.E)('self.onLoaded'),
                    onDisplayChanged: (0, i.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, i.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, i.E)('children.onAdded'),
                        onLoaded: (0, i.E)('children.onLoaded'),
                        onRemoved: (0, i.E)('children.onRemoved'),
                        onAttached: (0, i.E)('children.onAttached'),
                        onTextureReady: (0, i.E)('children.onTextureReady'),
                        onRequestPosition: (0, i.E)('children.requestPosition'),
                    },
                };
            },
            641: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => h,
                        addPreloadTexture: () => n,
                        children: () => i,
                        displayStatus: () => a.W,
                        displayStatusIs: () => v,
                        events: () => r.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => _,
                        getScale: () => m,
                        getSize: () => d,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => B,
                        isFocused: () => p,
                        pxToRem: () => F,
                        remToPx: () => f,
                        resize: () => g,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => x,
                    });
                var i = u(722),
                    a = u(112),
                    r = u(538),
                    o = u(566);
                function n(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function s(e, t, u, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, i);
                }
                function h(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function _() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    S = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => s });
                const i = ['args'];
                const a = 2,
                    r = 16,
                    o = 32,
                    n = 64,
                    l = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, i);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    s = {
                        close(e) {
                            l('popover' === e ? a : o);
                        },
                        minimize() {
                            l(n);
                        },
                        move(e) {
                            l(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            521: (e, t, u) => {
                'use strict';
                let i, a;
                u.d(t, { n: () => i }),
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
                    })(i || (i = {})),
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
            358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var i = u(138);
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
                        const r = i.O.view.addModelObserver(e, u, a);
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
                            const i = this._callbacks[u];
                            void 0 !== i && i(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
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
            916: (e, t, u) => {
                'use strict';
                u.d(t, { ry: () => F, Eu: () => f });
                class i {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let i = e.target;
                                    do {
                                        if (i === t) return;
                                        i = i.parentNode;
                                    } while (i);
                                    u();
                                });
                            });
                    }
                    static get instance() {
                        return i.__instance || (i.__instance = new i()), i.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const u = e,
                            i = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== i)),
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
                i.__instance = void 0;
                const a = i;
                var r = u(358);
                var o = u(613);
                let n;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(n || (n = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    s = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    h = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = u(521),
                    g = u(138);
                const E = ['args'];
                function A(e, t, u, i, a, r, o) {
                    try {
                        var n = e[r](o),
                            l = n.value;
                    } catch (e) {
                        return void u(e);
                    }
                    n.done ? t(l) : Promise.resolve(l).then(i, a);
                }
                const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                    return new Promise(function (i, a) {
                                        var r = e.apply(t, u);
                                        function o(e) {
                                            A(r, i, a, o, n, 'next', e);
                                        }
                                        function n(e) {
                                            A(r, i, a, o, n, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    D = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((i = a),
                                              Object.entries(i).map(([e, t]) => {
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
                        var i;
                    },
                    p = () => D(n.CLOSE),
                    C = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var B = u(572);
                const w = a.instance,
                    _ = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: n,
                        NumberFormatType: l,
                        RealFormatType: s,
                        TimeFormatType: h,
                        DateFormatType: c,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => D(n.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => D(n.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            D(n.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, i, a = R.invalid('resId'), r) => {
                            const o = g.O.view.getViewGlobalPosition(),
                                l = u.getBoundingClientRect(),
                                s = l.x,
                                h = l.y,
                                c = l.width,
                                d = l.height,
                                E = {
                                    x: g.O.view.pxToRem(s) + o.x,
                                    y: g.O.view.pxToRem(h) + o.y,
                                    width: g.O.view.pxToRem(c),
                                    height: g.O.view.pxToRem(d),
                                };
                            D(n.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: m(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, p);
                        },
                        handleViewEvent: D,
                        onBindingsReady: F,
                        onLayoutReady: f,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(n.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(n.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(n.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const a = Object.prototype.toString.call(t[i]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[i];
                                        u[i] = [];
                                        for (let t = 0; t < a.length; t++) u[i].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[i] = e(t[i]))
                                            : (u[i] = t[i]);
                                }
                            return u;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = _;
            },
            613: (e, t, u) => {
                'use strict';
                u.d(t, { Z5: () => i, cy: () => a });
                const i = {
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
                    };
            },
            29: (e, t, u) => {
                'use strict';
                var i = {};
                u.r(i),
                    u.d(i, {
                        Area: () => St,
                        Bar: () => wt,
                        DefaultScroll: () => vt,
                        Direction: () => nt,
                        defaultSettings: () => lt,
                        useHorizontalScrollApi: () => ht,
                    });
                var a = {};
                u.r(a), u.d(a, { Area: () => $t, Bar: () => Wt, Default: () => zt, useVerticalScrollApi: () => xt });
                var r = u(179),
                    o = u.n(r);
                const n = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var l = u(138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var h;
                function c(e, t, u) {
                    const i = (function (e, t) {
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
                        r = Math.min(i, a);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: i === u.extraLarge.weight,
                        largeWidth: i === u.large.weight,
                        mediumWidth: i === u.medium.weight,
                        smallWidth: i === u.small.weight,
                        extraSmallWidth: i === u.extraSmall.weight,
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
                })(h || (h = {}));
                const d = l.O.client.getSize('rem'),
                    g = d.width,
                    E = d.height,
                    A = Object.assign({ width: g, height: E }, c(g, E, s)),
                    m = (0, r.createContext)(A),
                    F = ['children'];
                const f = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, F);
                    const i = (0, r.useContext)(m),
                        a = i.extraLarge,
                        o = i.large,
                        l = i.medium,
                        s = i.small,
                        h = i.extraSmall,
                        c = i.extraLargeWidth,
                        d = i.largeWidth,
                        g = i.mediumWidth,
                        E = i.smallWidth,
                        A = i.extraSmallWidth,
                        f = i.extraLargeHeight,
                        D = i.largeHeight,
                        p = i.mediumHeight,
                        C = i.smallHeight,
                        B = i.extraSmallHeight,
                        w = { extraLarge: f, large: D, medium: p, small: C, extraSmall: B };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && a) return t;
                        if (u.large && o) return t;
                        if (u.medium && l) return t;
                        if (u.small && s) return t;
                        if (u.extraSmall && h) return t;
                    } else {
                        if (u.extraLargeWidth && c) return n(t, u, w);
                        if (u.largeWidth && d) return n(t, u, w);
                        if (u.mediumWidth && g) return n(t, u, w);
                        if (u.smallWidth && E) return n(t, u, w);
                        if (u.extraSmallWidth && A) return n(t, u, w);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && f) return t;
                            if (u.largeHeight && D) return t;
                            if (u.mediumHeight && p) return t;
                            if (u.smallHeight && C) return t;
                            if (u.extraSmallHeight && B) return t;
                        }
                    }
                    return null;
                };
                f.defaultProps = {
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
                (0, r.memo)(f);
                const D = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    p = ({ children: e }) => {
                        const t = (0, r.useContext)(m),
                            u = (0, r.useState)(t),
                            i = u[0],
                            a = u[1],
                            n = (0, r.useCallback)((e, t) => {
                                const u = l.O.view.pxToRem(e),
                                    i = l.O.view.pxToRem(t);
                                a(Object.assign({ width: u, height: i }, c(u, i, s)));
                            }, []),
                            h = (0, r.useCallback)(() => {
                                const e = l.O.client.getSize('px');
                                n(e.width, e.height);
                            }, [n]);
                        D(() => {
                            l.O.client.events.on('clientResized', n), l.O.client.events.on('self.onScaleUpdated', h);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    l.O.client.events.off('clientResized', n),
                                        l.O.client.events.off('self.onScaleUpdated', h);
                                },
                                [n, h],
                            );
                        const d = (0, r.useMemo)(() => Object.assign({}, i), [i]);
                        return o().createElement(m.Provider, { value: d }, e);
                    };
                var C = u(483),
                    B = u.n(C),
                    w = u(926),
                    _ = u.n(w);
                let v, S, x;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(S || (S = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(x || (x = {}));
                const b = () => {
                        const e = (0, r.useContext)(m),
                            t = e.width,
                            u = e.height,
                            i = ((e) => {
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
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return S.ExtraLarge;
                                    case e.largeWidth:
                                        return S.Large;
                                    case e.mediumWidth:
                                        return S.Medium;
                                    case e.smallWidth:
                                        return S.Small;
                                    case e.extraSmallWidth:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return x.ExtraLarge;
                                    case e.largeHeight:
                                        return x.Large;
                                    case e.mediumHeight:
                                        return x.Medium;
                                    case e.smallHeight:
                                        return x.Small;
                                    case e.extraSmallHeight:
                                        return x.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), x.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: i, mediaWidth: a, mediaHeight: o, remScreenWidth: t, remScreenHeight: u };
                    },
                    L = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const P = {
                        [S.ExtraSmall]: '',
                        [S.Small]: _().SMALL_WIDTH,
                        [S.Medium]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH}`,
                        [S.Large]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH}`,
                        [S.ExtraLarge]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH} ${_().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [x.ExtraSmall]: '',
                        [x.Small]: _().SMALL_HEIGHT,
                        [x.Medium]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT}`,
                        [x.Large]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT} ${_().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [v.ExtraSmall]: '',
                        [v.Small]: _().SMALL,
                        [v.Medium]: `${_().SMALL} ${_().MEDIUM}`,
                        [v.Large]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE}`,
                        [v.ExtraLarge]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE} ${_().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let t = e.children,
                            u = e.className,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, L);
                        const a = b(),
                            r = a.mediaWidth,
                            n = a.mediaHeight,
                            l = a.mediaSize;
                        return o().createElement('div', y({ className: B()(u, P[r], T[n], O[l]) }, i), t);
                    },
                    M = ['children'];
                const U = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, M);
                    return o().createElement(p, null, o().createElement(k, u, t));
                };
                var N = u(986),
                    I = u.n(N);
                function H(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const W = {
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
                    G = [
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
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        z.apply(this, arguments)
                    );
                }
                class $ extends o().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && H(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && H(this.props.soundClick);
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
                            i = e.goto,
                            a = e.side,
                            r = e.type,
                            n = e.classNames,
                            l = e.onMouseEnter,
                            s = e.onMouseLeave,
                            h = e.onMouseDown,
                            c = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, G)),
                            g = B()(W.base, W[`base__${r}`], W[`base__${a}`], null == n ? void 0 : n.base),
                            E = B()(W.icon, W[`icon__${r}`], W[`icon__${a}`], null == n ? void 0 : n.icon),
                            A = B()(W.glow, null == n ? void 0 : n.glow),
                            m = B()(W.caption, W[`caption__${r}`], null == n ? void 0 : n.caption),
                            F = B()(W.goto, null == n ? void 0 : n.goto);
                        return o().createElement(
                            'div',
                            z(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(s),
                                    onMouseDown: this._onMouseDown(h),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                d,
                            ),
                            'info' !== r && o().createElement('div', { className: W.shine }),
                            o().createElement('div', { className: E }, o().createElement('div', { className: A })),
                            o().createElement('div', { className: m }, t),
                            i && o().createElement('div', { className: F }, i),
                        );
                    }
                }
                $.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var q = u(521),
                    j = u(916);
                const V = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function X(e = q.n.NONE, t = V, u = !1, i = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== q.n.NONE)
                            return (
                                window.addEventListener('keydown', a, u),
                                () => {
                                    window.removeEventListener('keydown', a, u);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!i && l.O.view.isEventHandled()) return;
                                l.O.view.setEventHandled(), t(a), u && a.stopPropagation();
                            }
                        }
                    }, [t, e, u, i]);
                }
                var Y = u(515);
                let K;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(K || (K = {}));
                const Z = (e, t) => (e >= 2560 && t >= 1440 ? 'ultraSize' : '');
                function Q() {
                    return !1;
                }
                console.log;
                var J = u(174);
                function ee(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return te(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return te(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var i = 0;
                        return function () {
                            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function te(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, i = new Array(t); u < t; u++) i[u] = e[u];
                    return i;
                }
                const ue = (e) => (0 === e ? window : window.subViews.get(e));
                const ie = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: a, children: n, mocks: s }) {
                            const h = (0, r.useRef)([]),
                                c = (u, i, a) => {
                                    var r;
                                    const o = (function ({
                                            initializer: e = !0,
                                            rootId: t = 0,
                                            getRoot: u = ue,
                                            context: i = 'model',
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
                                            const o = (e) => {
                                                const a = u(t),
                                                    r = i.split('.').reduce((e, t) => e[t], a);
                                                return 'string' != typeof e || 0 === e.length
                                                    ? r
                                                    : e.split('.').reduce((e, t) => {
                                                          const u = e[t];
                                                          return 'function' == typeof u ? u.bind(e) : u;
                                                      }, r);
                                            };
                                            return {
                                                subscribe: (u, r) => {
                                                    const n = 'string' == typeof r ? `${i}.${r}` : i,
                                                        s = l.O.view.addModelObserver(n, t, !0);
                                                    return a.set(s, u), e && u(o(r)), s;
                                                },
                                                readByPath: o,
                                                createCallback: (e, t) => {
                                                    const u = o(t);
                                                    return (...t) => {
                                                        u(e(...t));
                                                    };
                                                },
                                                createCallbackNoArgs: (e) => {
                                                    const t = o(e);
                                                    return () => {
                                                        t();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var e, u = ee(a.keys()); !(e = u()).done; ) r(e.value, t);
                                                },
                                                unsubscribe: r,
                                            };
                                        })(i),
                                        n =
                                            'real' === u
                                                ? o
                                                : Object.assign({}, o, {
                                                      readByPath:
                                                          null != (r = null == a ? void 0 : a.getter) ? r : () => {},
                                                  }),
                                        s = (e) =>
                                            'mocks' === u ? (null == a ? void 0 : a.getter(e)) : n.readByPath(e),
                                        c = (e) => h.current.push(e),
                                        d = e({
                                            mode: u,
                                            readByPath: s,
                                            externalModel: n,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const i = null != t ? t : s(e),
                                                        a = J.LO.box(i, { equals: Q });
                                                    return (
                                                        'real' === u &&
                                                            n.subscribe(
                                                                (0, J.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : s(e),
                                                        a = J.LO.box(i, { equals: Q });
                                                    return (
                                                        'real' === u &&
                                                            n.subscribe(
                                                                (0, J.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const i = s(t);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, t) => ((e[t] = J.LO.box(i[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                n.subscribe(
                                                                    (0, J.aD)((t) => {
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
                                                            o = r.reduce(
                                                                (e, [t, u]) => ((e[u] = J.LO.box(i[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                n.subscribe(
                                                                    (0, J.aD)((e) => {
                                                                        r.forEach(([t, u]) => {
                                                                            o[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: c,
                                        }),
                                        g = { mode: u, model: d, externalModel: n, cleanup: c };
                                    return {
                                        model: d,
                                        controls: 'mocks' === u && a ? a.controls(g) : t(g),
                                        externalModel: n,
                                        mode: u,
                                    };
                                },
                                d = (0, r.useRef)(!1),
                                g = (0, r.useState)(i),
                                E = g[0],
                                A = g[1],
                                m = (0, r.useState)(() => c(i, a, s)),
                                F = m[0],
                                f = m[1];
                            return (
                                (0, r.useEffect)(() => {
                                    d.current ? f(c(E, a, s)) : (d.current = !0);
                                }, [s, E, a]),
                                (0, r.useEffect)(() => {
                                    A(i);
                                }, [i]),
                                (0, r.useEffect)(
                                    () => () => {
                                        F.externalModel.dispose(), h.current.forEach((e) => e());
                                    },
                                    [F],
                                ),
                                o().createElement(u.Provider, { value: F }, n)
                            );
                        },
                        () => (0, r.useContext)(u),
                    ];
                };
                function ae(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function re(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                const oe = re;
                function ne(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function le(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, i) => t(null == e ? void 0 : e.value, u, i));
                }
                function se(e, t) {
                    for (let u = 0; u < e.length; u++) {
                        const i = ne(e[u]);
                        if (t(i, u, e)) return i;
                    }
                }
                function he(e, t) {
                    return (function (e, t, u) {
                        const i = [];
                        for (let a = 0; a < e.length; a++) {
                            const r = oe(e, a);
                            t(r, a, e) && i.push(u(r, a, e));
                        }
                        return i;
                    })(e, ae, t);
                }
                var ce = u(281);
                let de;
                function ge(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function Ee(e) {
                    return e.replace(/_\w/g, (e) => e[1].toUpperCase());
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(de || (de = {}));
                const Ae = (e) => e.replace(/&nbsp;/g, ' '),
                    me = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    Fe = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    fe = (e, t, u = de.left) => e.split(t).reduce(u === de.left ? me : Fe, []),
                    De = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    pe = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Ce = (e, t = de.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (pe.includes(u)) return De(e);
                        if ('ja' === u) {
                            return (0, ce.D4)()
                                .parse(e)
                                .map((e) => Ae(e));
                        }
                        return ((e, t = de.left) => {
                            let u = [];
                            const i =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = Ae(e);
                            return fe(a, /( )/, t).forEach((e) => (u = u.concat(fe(e, i, de.left)))), u;
                        })(e, t);
                    };
                var Be = u(946);
                let we, _e, ve, Se, xe, be, Le, ye;
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
                })(we || (we = {})),
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
                    })(_e || (_e = {})),
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
                    })(ve || (ve = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Se || (Se = {})),
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
                    })(xe || (xe = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(be || (be = {})),
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
                    })(Le || (Le = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(ye || (ye = {}));
                const Pe = [
                        we.Items,
                        we.Equipment,
                        we.Xp,
                        we.XpFactor,
                        we.Blueprints,
                        we.BlueprintsAny,
                        we.Goodies,
                        we.Berths,
                        we.Slots,
                        we.Tokens,
                        we.CrewSkins,
                        we.CrewBooks,
                        we.Customizations,
                        we.CreditsFactor,
                        we.TankmenXp,
                        we.TankmenXpFactor,
                        we.FreeXpFactor,
                        we.BattleToken,
                        we.PremiumUniversal,
                        we.NaturalCover,
                        we.BpCoin,
                        we.BattlePassSelectToken,
                        we.BattlaPassFinalAchievement,
                        we.BattleBadge,
                        we.BonusX5,
                        we.CrewBonusX3,
                        we.NewYearInvoice,
                        we.EpicSelectToken,
                        we.WtHunterLootbox,
                        we.WtBossLootbox,
                        we.WtProgressPoints,
                        we.Comp7TokenWeeklyReward,
                        we.DeluxeGift,
                        we.BattleBoosterGift,
                        we.OptionalDevice,
                    ],
                    Te = [we.Gold, we.Credits, we.Crystal, we.FreeXp],
                    Re = [we.BattlePassPoints, we.EquipCoin],
                    Oe = [we.PremiumPlus, we.Premium],
                    ke = ['engravings', 'backgrounds'],
                    Me = ['engraving', 'background'],
                    Ue = (e, t = ve.Small) => {
                        const u = e.name,
                            i = e.type,
                            a = e.value,
                            r = e.icon,
                            o = e.item,
                            n = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case ve.S600x450:
                                        return 'c_600x450';
                                    case ve.S400x300:
                                        return 'c_400x300';
                                    case ve.S296x222:
                                        return 'c_296x222';
                                    case ve.S232x174:
                                        return 'c_232x174';
                                    case ve.Big:
                                        return 'c_80x80';
                                    case ve.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${r}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const i = ke[e];
                                    if (i) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(i),
                                            r = a.$dyn(u);
                                        return r ? `${r}` : `${a.$dyn(Me[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(n, t, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    Ne = (e, t, u) => {
                        const i = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            i,
                            u,
                        );
                    };
                ve.Small, ve.Big;
                let Ie, He;
                !(function (e) {
                    (e.New = 'new'), (e.Received = 'received'), (e.Unreceived = 'unreceived');
                })(Ie || (Ie = {})),
                    (function (e) {
                        (e.JustReceived = 'justReceived'), (e.Received = 'received'), (e.Unreceived = 'unreceived');
                    })(He || (He = {}));
                const We = (e, t) => {
                        let u = e;
                        const i = t.split('.');
                        for (let e = 0; e < i.length; e++) {
                            if (!u) return '';
                            if (('string' != typeof u && (u = u.$dyn(i[e])), 'string' == typeof u)) return u;
                        }
                        return '';
                    },
                    Ge = (e, t, u) => (u < e ? e : u > t ? t : u),
                    ze = {
                        defaultConfig: {
                            generalBackgroundColor: '#0D1525',
                            pages: [
                                {
                                    items: {
                                        3: {
                                            assetConfig: {
                                                extraSmall: { top: -73, left: -96, width: 193, height: 112 },
                                                small: { top: -73, left: -96, width: 193, height: 112 },
                                                medium: { top: -87, left: -130, width: 266, height: 154 },
                                                large: { top: -103, left: -160, width: 326, height: 189 },
                                                extraLarge: { top: -140, left: -238, width: 482, height: 280 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        6: {
                                            assetConfig: {
                                                extraSmall: { top: 25, left: 215, width: 156, height: 240 },
                                                small: { top: 25, left: 215, width: 156, height: 240 },
                                                medium: { top: 45, left: 296, width: 215, height: 329 },
                                                large: { top: 60, left: 364, width: 264, height: 404 },
                                                extraLarge: { top: 102, left: 538, width: 390, height: 598 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        8: {
                                            assetConfig: {
                                                extraSmall: { top: 67, left: -210, width: 134, height: 164 },
                                                small: { top: 67, left: -210, width: 134, height: 164 },
                                                medium: { top: 103, left: -288, width: 184, height: 225 },
                                                large: { top: 131, left: -354, width: 226, height: 276 },
                                                extraLarge: { top: 209, left: -524, width: 334, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        12: {
                                            assetConfig: {
                                                extraSmall: { top: -23, left: 69, width: 129, height: 158 },
                                                small: { top: -23, left: 69, width: 129, height: 158 },
                                                medium: { top: -21, left: 96, width: 178, height: 217 },
                                                large: { top: -21, left: 118, width: 218, height: 266 },
                                                extraLarge: { top: -17, left: 174, width: 322, height: 394 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        16: {
                                            assetConfig: {
                                                extraSmall: { top: -141, left: 156, width: 220, height: 72 },
                                                small: { top: -141, left: 156, width: 220, height: 72 },
                                                medium: { top: -183, left: 216, width: 303, height: 98 },
                                                large: { top: -218, left: 265, width: 372, height: 121 },
                                                extraLarge: { top: -309, left: 392, width: 550, height: 178 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        19: {
                                            assetConfig: {
                                                extraSmall: { top: -139, left: -240, width: 92, height: 92 },
                                                small: { top: -139, left: -240, width: 92, height: 92 },
                                                medium: { top: -181, left: -330, width: 126, height: 127 },
                                                large: { top: -217, left: -404, width: 154, height: 156 },
                                                extraLarge: { top: -307, left: -600, width: 228, height: 230 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        21: {
                                            assetConfig: {
                                                extraSmall: { top: 69, left: -68, width: 140, height: 166 },
                                                small: { top: 69, left: -68, width: 140, height: 166 },
                                                medium: { top: 105, left: -94, width: 193, height: 228 },
                                                large: { top: 135, left: -114, width: 237, height: 280 },
                                                extraLarge: { top: 213, left: -171, width: 350, height: 414 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        1: {
                                            assetConfig: {
                                                extraSmall: { top: 48, left: -186, width: 200, height: 128 },
                                                small: { top: 48, left: -186, width: 200, height: 128 },
                                                medium: { top: 77, left: -256, width: 275, height: 176 },
                                                large: { top: 100, left: -314, width: 338, height: 216 },
                                                extraLarge: { top: 162, left: -464, width: 500, height: 320 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        4: {
                                            assetConfig: {
                                                extraSmall: { top: -69, left: 42, width: 136, height: 206 },
                                                small: { top: -69, left: 42, width: 136, height: 206 },
                                                medium: { top: -85, left: 58, width: 187, height: 283 },
                                                large: { top: -98, left: 70, width: 230, height: 347 },
                                                extraLarge: { top: -132, left: 106, width: 340, height: 514 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        9: {
                                            assetConfig: {
                                                extraSmall: { top: -15, left: 216, width: 135, height: 113 },
                                                small: { top: -15, left: 216, width: 135, height: 113 },
                                                medium: { top: -11, left: 297, width: 185, height: 156 },
                                                large: { top: -7, left: 364, width: 227, height: 191 },
                                                extraLarge: { top: 3, left: 542, width: 336, height: 282 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        11: {
                                            assetConfig: {
                                                extraSmall: { top: -102, left: -219, width: 116, height: 145 },
                                                small: { top: -102, left: -219, width: 116, height: 145 },
                                                medium: { top: -130, left: -302, width: 160, height: 200 },
                                                large: { top: -153, left: -371, width: 196, height: 245 },
                                                extraLarge: { top: -214, left: -548, width: 290, height: 362 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        13: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 168, width: 108, height: 107 },
                                                small: { top: -127, left: 168, width: 108, height: 107 },
                                                medium: { top: -166, left: 231, width: 149, height: 147 },
                                                large: { top: -198, left: 283, width: 183, height: 180 },
                                                extraLarge: { top: -279, left: 422, width: 270, height: 266 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        14: {
                                            assetConfig: {
                                                extraSmall: { top: 89, left: 121, width: 209, height: 91 },
                                                small: { top: 89, left: 121, width: 209, height: 91 },
                                                medium: { top: 133, left: 167, width: 288, height: 125 },
                                                large: { top: 169, left: 204, width: 353, height: 153 },
                                                extraLarge: { top: 262, left: 304, width: 522, height: 226 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        17: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: -43, width: 78, height: 88 },
                                                small: { top: 88, left: -43, width: 78, height: 88 },
                                                medium: { top: 132, left: -59, width: 107, height: 121 },
                                                large: { top: 168, left: -73, width: 131, height: 149 },
                                                extraLarge: { top: 263, left: -105, width: 194, height: 220 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        20: {
                                            assetConfig: {
                                                extraSmall: { top: -106, left: -95, width: 125, height: 173 },
                                                small: { top: -106, left: -95, width: 125, height: 173 },
                                                medium: { top: -136, left: -130, width: 172, height: 238 },
                                                large: { top: -161, left: -160, width: 211, height: 292 },
                                                extraLarge: { top: -226, left: -235, width: 312, height: 432 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        2: {
                                            assetConfig: {
                                                extraSmall: { top: 58, left: 105, width: 209, height: 150 },
                                                small: { top: 58, left: 105, width: 209, height: 150 },
                                                medium: { top: 90, left: 145, width: 288, height: 206 },
                                                large: { top: 116, left: 177, width: 353, height: 253 },
                                                extraLarge: { top: 186, left: 265, width: 522, height: 374 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        5: {
                                            assetConfig: {
                                                extraSmall: { top: -77, left: -77, width: 145, height: 200 },
                                                small: { top: -77, left: -77, width: 145, height: 200 },
                                                medium: { top: -95, left: -105, width: 200, height: 275 },
                                                large: { top: -112, left: -130, width: 245, height: 338 },
                                                extraLarge: { top: -151, left: -190, width: 362, height: 500 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        7: {
                                            assetConfig: {
                                                extraSmall: { top: 68, left: -220, width: 135, height: 149 },
                                                small: { top: 68, left: -220, width: 135, height: 149 },
                                                medium: { top: 103, left: -303, width: 185, height: 205 },
                                                large: { top: 133, left: -372, width: 227, height: 252 },
                                                extraLarge: { top: 209, left: -549, width: 336, height: 372 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        10: {
                                            assetConfig: {
                                                extraSmall: { top: -93, left: -217, width: 129, height: 164 },
                                                small: { top: -93, left: -217, width: 129, height: 164 },
                                                medium: { top: -117, left: -298, width: 178, height: 225 },
                                                large: { top: -138, left: -367, width: 218, height: 276 },
                                                extraLarge: { top: -190, left: -541, width: 322, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        15: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 47, width: 94, height: 100 },
                                                small: { top: -127, left: 47, width: 94, height: 100 },
                                                medium: { top: -165, left: 64, width: 129, height: 138 },
                                                large: { top: -195, left: 78, width: 158, height: 169 },
                                                extraLarge: { top: -276, left: 118, width: 234, height: 250 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        18: {
                                            assetConfig: {
                                                extraSmall: { top: 80, left: -56, width: 101, height: 105 },
                                                small: { top: 80, left: -56, width: 101, height: 105 },
                                                medium: { top: 119, left: -77, width: 139, height: 145 },
                                                large: { top: 152, left: -95, width: 171, height: 177 },
                                                extraLarge: { top: 239, left: -138, width: 252, height: 262 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        22: {
                                            assetConfig: {
                                                extraSmall: { top: -105, left: 210, width: 227, height: 168 },
                                                small: { top: -105, left: 210, width: 227, height: 168 },
                                                medium: { top: -134, left: 290, width: 312, height: 230 },
                                                large: { top: -157, left: 354, width: 383, height: 283 },
                                                extraLarge: { top: -220, left: 527, width: 566, height: 418 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                            ],
                        },
                        battlePass10: {
                            generalBackgroundColor: '#0D1525',
                            pages: [
                                {
                                    items: {
                                        3: {
                                            assetConfig: {
                                                extraSmall: { top: -73, left: -96, width: 193, height: 112 },
                                                small: { top: -73, left: -96, width: 193, height: 112 },
                                                medium: { top: -87, left: -130, width: 266, height: 154 },
                                                large: { top: -103, left: -160, width: 326, height: 189 },
                                                extraLarge: { top: -140, left: -238, width: 482, height: 280 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        6: {
                                            assetConfig: {
                                                extraSmall: { top: 25, left: 215, width: 156, height: 240 },
                                                small: { top: 25, left: 215, width: 156, height: 240 },
                                                medium: { top: 45, left: 296, width: 215, height: 329 },
                                                large: { top: 60, left: 364, width: 264, height: 404 },
                                                extraLarge: { top: 102, left: 538, width: 390, height: 598 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        8: {
                                            assetConfig: {
                                                extraSmall: { top: 67, left: -210, width: 134, height: 164 },
                                                small: { top: 67, left: -210, width: 134, height: 164 },
                                                medium: { top: 103, left: -288, width: 184, height: 225 },
                                                large: { top: 131, left: -354, width: 226, height: 276 },
                                                extraLarge: { top: 209, left: -524, width: 334, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        12: {
                                            assetConfig: {
                                                extraSmall: { top: -23, left: 69, width: 129, height: 158 },
                                                small: { top: -23, left: 69, width: 129, height: 158 },
                                                medium: { top: -21, left: 96, width: 178, height: 217 },
                                                large: { top: -21, left: 118, width: 218, height: 266 },
                                                extraLarge: { top: -17, left: 174, width: 322, height: 394 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        16: {
                                            assetConfig: {
                                                extraSmall: { top: -141, left: 156, width: 220, height: 72 },
                                                small: { top: -141, left: 156, width: 220, height: 72 },
                                                medium: { top: -183, left: 216, width: 303, height: 98 },
                                                large: { top: -218, left: 265, width: 372, height: 121 },
                                                extraLarge: { top: -309, left: 392, width: 550, height: 178 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        19: {
                                            assetConfig: {
                                                extraSmall: { top: -139, left: -240, width: 92, height: 92 },
                                                small: { top: -139, left: -240, width: 92, height: 92 },
                                                medium: { top: -181, left: -330, width: 126, height: 127 },
                                                large: { top: -217, left: -404, width: 154, height: 156 },
                                                extraLarge: { top: -307, left: -600, width: 228, height: 230 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        21: {
                                            assetConfig: {
                                                extraSmall: { top: 69, left: -68, width: 140, height: 166 },
                                                small: { top: 69, left: -68, width: 140, height: 166 },
                                                medium: { top: 105, left: -94, width: 193, height: 228 },
                                                large: { top: 135, left: -114, width: 237, height: 280 },
                                                extraLarge: { top: 213, left: -171, width: 350, height: 414 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        1: {
                                            assetConfig: {
                                                extraSmall: { top: 48, left: -186, width: 200, height: 128 },
                                                small: { top: 48, left: -186, width: 200, height: 128 },
                                                medium: { top: 77, left: -256, width: 275, height: 176 },
                                                large: { top: 100, left: -314, width: 338, height: 216 },
                                                extraLarge: { top: 162, left: -464, width: 500, height: 320 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        4: {
                                            assetConfig: {
                                                extraSmall: { top: -69, left: 42, width: 136, height: 206 },
                                                small: { top: -69, left: 42, width: 136, height: 206 },
                                                medium: { top: -85, left: 58, width: 187, height: 283 },
                                                large: { top: -98, left: 70, width: 230, height: 347 },
                                                extraLarge: { top: -132, left: 106, width: 340, height: 514 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        9: {
                                            assetConfig: {
                                                extraSmall: { top: -15, left: 216, width: 135, height: 113 },
                                                small: { top: -15, left: 216, width: 135, height: 113 },
                                                medium: { top: -11, left: 297, width: 185, height: 156 },
                                                large: { top: -7, left: 364, width: 227, height: 191 },
                                                extraLarge: { top: 3, left: 542, width: 336, height: 282 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        11: {
                                            assetConfig: {
                                                extraSmall: { top: -102, left: -219, width: 116, height: 145 },
                                                small: { top: -102, left: -219, width: 116, height: 145 },
                                                medium: { top: -130, left: -302, width: 160, height: 200 },
                                                large: { top: -153, left: -371, width: 196, height: 245 },
                                                extraLarge: { top: -214, left: -548, width: 290, height: 362 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        13: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 168, width: 108, height: 107 },
                                                small: { top: -127, left: 168, width: 108, height: 107 },
                                                medium: { top: -166, left: 231, width: 149, height: 147 },
                                                large: { top: -198, left: 283, width: 183, height: 180 },
                                                extraLarge: { top: -279, left: 422, width: 270, height: 266 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        14: {
                                            assetConfig: {
                                                extraSmall: { top: 89, left: 121, width: 209, height: 91 },
                                                small: { top: 89, left: 121, width: 209, height: 91 },
                                                medium: { top: 133, left: 167, width: 288, height: 125 },
                                                large: { top: 169, left: 204, width: 353, height: 153 },
                                                extraLarge: { top: 262, left: 304, width: 522, height: 226 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        17: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: -43, width: 78, height: 88 },
                                                small: { top: 88, left: -43, width: 78, height: 88 },
                                                medium: { top: 132, left: -59, width: 107, height: 121 },
                                                large: { top: 168, left: -73, width: 131, height: 149 },
                                                extraLarge: { top: 263, left: -105, width: 194, height: 220 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        20: {
                                            assetConfig: {
                                                extraSmall: { top: -106, left: -95, width: 125, height: 173 },
                                                small: { top: -106, left: -95, width: 125, height: 173 },
                                                medium: { top: -136, left: -130, width: 172, height: 238 },
                                                large: { top: -161, left: -160, width: 211, height: 292 },
                                                extraLarge: { top: -226, left: -235, width: 312, height: 432 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        2: {
                                            assetConfig: {
                                                extraSmall: { top: 58, left: 105, width: 209, height: 150 },
                                                small: { top: 58, left: 105, width: 209, height: 150 },
                                                medium: { top: 90, left: 145, width: 288, height: 206 },
                                                large: { top: 116, left: 177, width: 353, height: 253 },
                                                extraLarge: { top: 186, left: 265, width: 522, height: 374 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        5: {
                                            assetConfig: {
                                                extraSmall: { top: -77, left: -77, width: 145, height: 200 },
                                                small: { top: -77, left: -77, width: 145, height: 200 },
                                                medium: { top: -95, left: -105, width: 200, height: 275 },
                                                large: { top: -112, left: -130, width: 245, height: 338 },
                                                extraLarge: { top: -151, left: -190, width: 362, height: 500 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        7: {
                                            assetConfig: {
                                                extraSmall: { top: 68, left: -220, width: 135, height: 149 },
                                                small: { top: 68, left: -220, width: 135, height: 149 },
                                                medium: { top: 103, left: -303, width: 185, height: 205 },
                                                large: { top: 133, left: -372, width: 227, height: 252 },
                                                extraLarge: { top: 209, left: -549, width: 336, height: 372 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        10: {
                                            assetConfig: {
                                                extraSmall: { top: -93, left: -217, width: 129, height: 164 },
                                                small: { top: -93, left: -217, width: 129, height: 164 },
                                                medium: { top: -117, left: -298, width: 178, height: 225 },
                                                large: { top: -138, left: -367, width: 218, height: 276 },
                                                extraLarge: { top: -190, left: -541, width: 322, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        15: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 47, width: 94, height: 100 },
                                                small: { top: -127, left: 47, width: 94, height: 100 },
                                                medium: { top: -165, left: 64, width: 129, height: 138 },
                                                large: { top: -195, left: 78, width: 158, height: 169 },
                                                extraLarge: { top: -276, left: 118, width: 234, height: 250 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        18: {
                                            assetConfig: {
                                                extraSmall: { top: 80, left: -56, width: 101, height: 105 },
                                                small: { top: 80, left: -56, width: 101, height: 105 },
                                                medium: { top: 119, left: -77, width: 139, height: 145 },
                                                large: { top: 152, left: -95, width: 171, height: 177 },
                                                extraLarge: { top: 239, left: -138, width: 252, height: 262 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        22: {
                                            assetConfig: {
                                                extraSmall: { top: -105, left: 210, width: 227, height: 168 },
                                                small: { top: -105, left: 210, width: 227, height: 168 },
                                                medium: { top: -134, left: 290, width: 312, height: 230 },
                                                large: { top: -157, left: 354, width: 383, height: 283 },
                                                extraLarge: { top: -220, left: 527, width: 566, height: 418 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                            ],
                        },
                        battlePass11: {
                            generalBackgroundColor: '#0D1525',
                            pages: [
                                {
                                    items: {
                                        1: {
                                            assetConfig: {
                                                extraSmall: { top: 45, left: -186, width: 200, height: 128 },
                                                small: { top: 45, left: -186, width: 200, height: 128 },
                                                medium: { top: 72, left: -256, width: 275, height: 176 },
                                                large: { top: 94, left: -314, width: 338, height: 216 },
                                                extraLarge: { top: 153, left: -464, width: 500, height: 320 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        4: {
                                            assetConfig: {
                                                extraSmall: { top: -68, left: 41, width: 136, height: 206 },
                                                small: { top: -68, left: 41, width: 136, height: 206 },
                                                medium: { top: -83, left: 55, width: 187, height: 283 },
                                                large: { top: -96, left: 68, width: 230, height: 347 },
                                                extraLarge: { top: -128, left: 103, width: 340, height: 514 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        7: {
                                            assetConfig: {
                                                extraSmall: { top: -16, left: 205, width: 155, height: 114 },
                                                small: { top: -16, left: 205, width: 155, height: 114 },
                                                medium: { top: -11, left: 283, width: 213, height: 157 },
                                                large: { top: -8, left: 348, width: 261, height: 192 },
                                                extraLarge: { top: 0, left: 518, width: 386, height: 284 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        10: {
                                            assetConfig: {
                                                extraSmall: { top: -102, left: -221, width: 116, height: 145 },
                                                small: { top: -102, left: -221, width: 116, height: 145 },
                                                medium: { top: -130, left: -303, width: 160, height: 200 },
                                                large: { top: -154, left: -372, width: 196, height: 245 },
                                                extraLarge: { top: -213, left: -550, width: 290, height: 362 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        13: {
                                            assetConfig: {
                                                extraSmall: { top: -129, left: 169, width: 108, height: 107 },
                                                small: { top: -129, left: 169, width: 108, height: 107 },
                                                medium: { top: -167, left: 233, width: 149, height: 147 },
                                                large: { top: -200, left: 285, width: 183, height: 180 },
                                                extraLarge: { top: -281, left: 426, width: 270, height: 266 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        14: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: 150, width: 186, height: 92 },
                                                small: { top: 88, left: 150, width: 186, height: 92 },
                                                medium: { top: 132, left: 207, width: 256, height: 126 },
                                                large: { top: 167, left: 254, width: 314, height: 154 },
                                                extraLarge: { top: 261, left: 378, width: 464, height: 228 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        17: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: -14, width: 136, height: 104 },
                                                small: { top: 88, left: -14, width: 136, height: 104 },
                                                medium: { top: 131, left: -20, width: 187, height: 143 },
                                                large: { top: 167, left: -24, width: 230, height: 176 },
                                                extraLarge: { top: 261, left: -33, width: 340, height: 260 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        20: {
                                            assetConfig: {
                                                extraSmall: { top: -106, left: -94, width: 125, height: 173 },
                                                small: { top: -106, left: -94, width: 125, height: 173 },
                                                medium: { top: -137, left: -129, width: 172, height: 238 },
                                                large: { top: -162, left: -159, width: 211, height: 292 },
                                                extraLarge: { top: -226, left: -233, width: 312, height: 432 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        2: {
                                            assetConfig: {
                                                extraSmall: { top: -79, left: -97, width: 193, height: 112 },
                                                small: { top: -79, left: -97, width: 193, height: 112 },
                                                medium: { top: -98, left: -131, width: 266, height: 154 },
                                                large: { top: -113, left: -163, width: 326, height: 189 },
                                                extraLarge: { top: -155, left: -239, width: 482, height: 280 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        5: {
                                            assetConfig: {
                                                extraSmall: { top: 23, left: 215, width: 156, height: 240 },
                                                small: { top: 23, left: 215, width: 156, height: 240 },
                                                medium: { top: 42, left: 296, width: 215, height: 329 },
                                                large: { top: 58, left: 362, width: 264, height: 404 },
                                                extraLarge: { top: 98, left: 538, width: 390, height: 598 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        8: {
                                            assetConfig: {
                                                extraSmall: { top: 64, left: -212, width: 134, height: 164 },
                                                small: { top: 64, left: -212, width: 134, height: 164 },
                                                medium: { top: 98, left: -289, width: 184, height: 225 },
                                                large: { top: 126, left: -356, width: 226, height: 276 },
                                                extraLarge: { top: 201, left: -526, width: 334, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        11: {
                                            assetConfig: {
                                                extraSmall: { top: -23, left: 69, width: 129, height: 158 },
                                                small: { top: -23, left: 69, width: 129, height: 158 },
                                                medium: { top: -21, left: 96, width: 178, height: 217 },
                                                large: { top: -21, left: 117, width: 218, height: 266 },
                                                extraLarge: { top: -16, left: 175, width: 322, height: 394 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        15: {
                                            assetConfig: {
                                                extraSmall: { top: -143, left: 157, width: 220, height: 72 },
                                                small: { top: -143, left: 157, width: 220, height: 72 },
                                                medium: { top: -186, left: 216, width: 303, height: 98 },
                                                large: { top: -222, left: 264, width: 372, height: 121 },
                                                extraLarge: { top: -316, left: 394, width: 550, height: 178 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        18: {
                                            assetConfig: {
                                                extraSmall: { top: -139, left: -241, width: 92, height: 92 },
                                                small: { top: -139, left: -241, width: 92, height: 92 },
                                                medium: { top: -180, left: -330, width: 126, height: 127 },
                                                large: { top: -216, left: -407, width: 154, height: 156 },
                                                extraLarge: { top: -306, left: -601, width: 228, height: 230 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        21: {
                                            assetConfig: {
                                                extraSmall: { top: 68, left: -69, width: 140, height: 166 },
                                                small: { top: 68, left: -69, width: 140, height: 166 },
                                                medium: { top: 103, left: -95, width: 193, height: 228 },
                                                large: { top: 133, left: -118, width: 237, height: 280 },
                                                extraLarge: { top: 211, left: -172, width: 350, height: 414 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        3: {
                                            assetConfig: {
                                                extraSmall: { top: 58, left: 138, width: 226, height: 150 },
                                                small: { top: 58, left: 138, width: 226, height: 150 },
                                                medium: { top: 90, left: 190, width: 311, height: 206 },
                                                large: { top: 116, left: 232, width: 381, height: 253 },
                                                extraLarge: { top: 186, left: 347, width: 564, height: 374 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        6: {
                                            assetConfig: {
                                                extraSmall: { top: -79, left: -77, width: 145, height: 200 },
                                                small: { top: -79, left: -77, width: 145, height: 200 },
                                                medium: { top: -96, left: -105, width: 200, height: 275 },
                                                large: { top: -114, left: -130, width: 245, height: 338 },
                                                extraLarge: { top: -155, left: -190, width: 362, height: 500 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        9: {
                                            assetConfig: {
                                                extraSmall: { top: 72, left: -222, width: 135, height: 149 },
                                                small: { top: 72, left: -222, width: 135, height: 149 },
                                                medium: { top: 110, left: -305, width: 185, height: 205 },
                                                large: { top: 140, left: -375, width: 227, height: 252 },
                                                extraLarge: { top: 220, left: -553, width: 336, height: 372 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        12: {
                                            assetConfig: {
                                                extraSmall: { top: -94, left: -220, width: 129, height: 164 },
                                                small: { top: -94, left: -220, width: 129, height: 164 },
                                                medium: { top: -118, left: -301, width: 178, height: 225 },
                                                large: { top: -140, left: -370, width: 218, height: 276 },
                                                extraLarge: { top: -195, left: -546, width: 322, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        16: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 47, width: 94, height: 100 },
                                                small: { top: -127, left: 47, width: 94, height: 100 },
                                                medium: { top: -165, left: 64, width: 129, height: 138 },
                                                large: { top: -195, left: 78, width: 158, height: 169 },
                                                extraLarge: { top: -276, left: 118, width: 234, height: 250 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        19: {
                                            assetConfig: {
                                                extraSmall: { top: 80, left: -36, width: 101, height: 105 },
                                                small: { top: 80, left: -36, width: 101, height: 105 },
                                                medium: { top: 119, left: -49, width: 139, height: 145 },
                                                large: { top: 152, left: -61, width: 171, height: 177 },
                                                extraLarge: { top: 239, left: -87, width: 252, height: 262 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        22: {
                                            assetConfig: {
                                                extraSmall: { top: -105, left: 209, width: 227, height: 168 },
                                                small: { top: -105, left: 209, width: 227, height: 168 },
                                                medium: { top: -134, left: 288, width: 312, height: 230 },
                                                large: { top: -158, left: 353, width: 383, height: 283 },
                                                extraLarge: { top: -220, left: 525, width: 566, height: 418 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                            ],
                        },
                        battlePass12: {
                            generalBackgroundColor: '#000',
                            pages: [
                                {
                                    items: {
                                        1: {
                                            assetConfig: {
                                                extraSmall: { top: -109, left: -66, width: 199, height: 150 },
                                                small: { top: -109, left: -66, width: 199, height: 150 },
                                                medium: { top: -140, left: -91, width: 273, height: 206 },
                                                large: { top: -165, left: -112, width: 335, height: 253 },
                                                extraLarge: { top: -232, left: -164, width: 496, height: 374 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        4: {
                                            assetConfig: {
                                                extraSmall: { top: 85, left: -207, width: 153, height: 116 },
                                                small: { top: 85, left: -207, width: 153, height: 116 },
                                                medium: { top: 128, left: -284, width: 211, height: 160 },
                                                large: { top: 163, left: -349, width: 258, height: 196 },
                                                extraLarge: { top: 255, left: -517, width: 382, height: 290 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        7: {
                                            assetConfig: {
                                                extraSmall: { top: -4, left: 100, width: 127, height: 241 },
                                                small: { top: -4, left: 100, width: 127, height: 241 },
                                                medium: { top: 4, left: 138, width: 174, height: 332 },
                                                large: { top: 11, left: 169, width: 214, height: 407 },
                                                extraLarge: { top: 29, left: 251, width: 316, height: 602 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        10: {
                                            assetConfig: {
                                                extraSmall: { top: 61, left: 226, width: 120, height: 159 },
                                                small: { top: 61, left: 226, width: 120, height: 159 },
                                                medium: { top: 93, left: 312, width: 164, height: 218 },
                                                large: { top: 121, left: 382, width: 202, height: 268 },
                                                extraLarge: { top: 192, left: 567, width: 298, height: 396 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        14: {
                                            assetConfig: {
                                                extraSmall: { top: -103, left: 224, width: 116, height: 163 },
                                                small: { top: -103, left: 224, width: 116, height: 163 },
                                                medium: { top: -131, left: 308, width: 160, height: 224 },
                                                large: { top: -156, left: 378, width: 196, height: 275 },
                                                extraLarge: { top: -217, left: 561, width: 290, height: 406 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        17: {
                                            assetConfig: {
                                                extraSmall: { top: -40, left: -227, width: 116, height: 127 },
                                                small: { top: -40, left: -227, width: 116, height: 127 },
                                                medium: { top: -44, left: -313, width: 159, height: 174 },
                                                large: { top: -49, left: -385, width: 195, height: 214 },
                                                extraLarge: { top: -59, left: -568, width: 288, height: 316 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        21: {
                                            assetConfig: {
                                                extraSmall: { top: 60, left: -54, width: 147, height: 183 },
                                                small: { top: 60, left: -54, width: 147, height: 183 },
                                                medium: { top: 93, left: -73, width: 202, height: 251 },
                                                large: { top: 119, left: -90, width: 248, height: 308 },
                                                extraLarge: { top: 189, left: -133, width: 366, height: 456 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        2: {
                                            assetConfig: {
                                                extraSmall: { top: 67, left: 172, width: 228, height: 147 },
                                                small: { top: 67, left: 172, width: 228, height: 147 },
                                                medium: { top: 102, left: 236, width: 314, height: 202 },
                                                large: { top: 132, left: 289, width: 385, height: 248 },
                                                extraLarge: { top: 209, left: 429, width: 570, height: 366 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        5: {
                                            assetConfig: {
                                                extraSmall: { top: 67, left: -220, width: 136, height: 148 },
                                                small: { top: 67, left: -220, width: 136, height: 148 },
                                                medium: { top: 102, left: -302, width: 186, height: 203 },
                                                large: { top: 132, left: -372, width: 229, height: 249 },
                                                extraLarge: { top: 209, left: -551, width: 338, height: 368 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        8: {
                                            assetConfig: {
                                                extraSmall: { top: -75, left: -77, width: 142, height: 212 },
                                                small: { top: -75, left: -77, width: 142, height: 212 },
                                                medium: { top: -93, left: -107, width: 195, height: 291 },
                                                large: { top: -108, left: -131, width: 239, height: 357 },
                                                extraLarge: { top: -147, left: -193, width: 354, height: 528 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        11: {
                                            assetConfig: {
                                                extraSmall: { top: -96, left: -221, width: 135, height: 172 },
                                                small: { top: -96, left: -221, width: 135, height: 172 },
                                                medium: { top: -121, left: -303, width: 185, height: 237 },
                                                large: { top: -143, left: -373, width: 227, height: 291 },
                                                extraLarge: { top: -198, left: -551, width: 336, height: 430 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        15: {
                                            assetConfig: {
                                                extraSmall: { top: -96, left: 47, width: 103, height: 172 },
                                                small: { top: -96, left: 47, width: 103, height: 172 },
                                                medium: { top: -122, left: 66, width: 141, height: 237 },
                                                large: { top: -143, left: 80, width: 173, height: 291 },
                                                extraLarge: { top: -199, left: 120, width: 256, height: 430 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        18: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: -10, width: 128, height: 107 },
                                                small: { top: 88, left: -10, width: 128, height: 107 },
                                                medium: { top: 132, left: -14, width: 175, height: 147 },
                                                large: { top: 167, left: -17, width: 215, height: 180 },
                                                extraLarge: { top: 260, left: -24, width: 318, height: 266 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        20: {
                                            assetConfig: {
                                                extraSmall: { top: -109, left: 201, width: 200, height: 167 },
                                                small: { top: -109, left: 201, width: 200, height: 167 },
                                                medium: { top: -140, left: 277, width: 274, height: 229 },
                                                large: { top: -166, left: 339, width: 337, height: 281 },
                                                extraLarge: { top: -232, left: 504, width: 498, height: 416 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        3: {
                                            assetConfig: {
                                                extraSmall: { top: 66, left: -184, width: 209, height: 154 },
                                                small: { top: 66, left: -184, width: 209, height: 154 },
                                                medium: { top: 100, left: -251, width: 288, height: 212 },
                                                large: { top: 129, left: -309, width: 353, height: 260 },
                                                extraLarge: { top: 205, left: -457, width: 522, height: 384 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        6: {
                                            assetConfig: {
                                                extraSmall: { top: 93, left: 193, width: 190, height: 101 },
                                                small: { top: 93, left: 193, width: 190, height: 101 },
                                                medium: { top: 137, left: 266, width: 261, height: 139 },
                                                large: { top: 174, left: 326, width: 320, height: 171 },
                                                extraLarge: { top: 271, left: 484, width: 474, height: 252 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        9: {
                                            assetConfig: {
                                                extraSmall: { top: -76, left: 44, width: 143, height: 218 },
                                                small: { top: -76, left: 44, width: 143, height: 218 },
                                                medium: { top: -96, left: 61, width: 196, height: 300 },
                                                large: { top: -111, left: 74, width: 241, height: 368 },
                                                extraLarge: { top: -151, left: 111, width: 356, height: 544 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        12: {
                                            assetConfig: {
                                                extraSmall: { top: -100, left: -222, width: 119, height: 172 },
                                                small: { top: -100, left: -222, width: 119, height: 172 },
                                                medium: { top: -128, left: -305, width: 163, height: 236 },
                                                large: { top: -150, left: -374, width: 200, height: 289 },
                                                extraLarge: { top: -210, left: -553, width: 296, height: 428 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        13: {
                                            assetConfig: {
                                                extraSmall: { top: -123, left: 209, width: 122, height: 120 },
                                                small: { top: -123, left: 209, width: 122, height: 120 },
                                                medium: { top: -160, left: 287, width: 168, height: 164 },
                                                large: { top: -190, left: 352, width: 206, height: 202 },
                                                extraLarge: { top: -268, left: 522, width: 304, height: 298 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        16: {
                                            assetConfig: {
                                                extraSmall: { top: -10, left: 202, width: 169, height: 95 },
                                                small: { top: -10, left: 202, width: 169, height: 95 },
                                                medium: { top: -6, left: 278, width: 233, height: 130 },
                                                large: { top: -2, left: 342, width: 285, height: 160 },
                                                extraLarge: { top: 12, left: 508, width: 422, height: 236 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        19: {
                                            assetConfig: {
                                                extraSmall: { top: 91, left: -6, width: 138, height: 109 },
                                                small: { top: 91, left: -6, width: 138, height: 109 },
                                                medium: { top: 134, left: -8, width: 190, height: 150 },
                                                large: { top: 170, left: -10, width: 233, height: 184 },
                                                extraLarge: { top: 266, left: -14, width: 344, height: 272 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        22: {
                                            assetConfig: {
                                                extraSmall: { top: -102, left: -94, width: 129, height: 179 },
                                                small: { top: -102, left: -94, width: 129, height: 179 },
                                                medium: { top: -132, left: -129, width: 178, height: 246 },
                                                large: { top: -156, left: -159, width: 218, height: 302 },
                                                extraLarge: { top: -219, left: -234, width: 322, height: 446 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                    $e = 'defaultConfig',
                    qe = ie()(
                        ({ observableModel: e }) => {
                            const t = Object.assign({}, e.primitives(['currentCollection']), e.primitives(['page']), {
                                    root: e.object(),
                                    tabs: e.array('tabs'),
                                    items: e.array('items'),
                                    pagesBackgrounds: e.array('pagesBackgrounds'),
                                    rewardsInfo: e.array('rewardsInfo'),
                                    pageNumber: J.LO.box(-1),
                                    isReadyForProgressAnimation: J.LO.box(!1),
                                    displayCollection: J.LO.box('none'),
                                }),
                                u = (0, Be.Om)(
                                    () => {
                                        const e = t.root.get().currentCollection;
                                        return ze[Ee(e)] || ze.defaultConfig;
                                    },
                                    { equals: Q },
                                ),
                                i = (0, Be.Om)(
                                    () => {
                                        const e = re(t.pagesBackgrounds.get(), t.pageNumber.get());
                                        return {
                                            main: null == e ? void 0 : e.main,
                                            logicalCircuit: null == e ? void 0 : e.logicalCircuit,
                                        };
                                    },
                                    { equals: Q },
                                ),
                                a = (0, Be.Om)(() => {
                                    const e = { pages: [], items: {}, bubbles: [] },
                                        i = u(),
                                        a = t.items.get();
                                    return (
                                        i.pages.forEach(({ items: t }) => {
                                            const u = [],
                                                i = {};
                                            let r = 0;
                                            for (const e in t)
                                                if (Object.prototype.hasOwnProperty.call(t, e)) {
                                                    const o = Number(e),
                                                        n = se(a, (e) => e.itemId === o);
                                                    if (!n) continue;
                                                    (i[o] = Object.assign(t[e], n)),
                                                        u.push(i[o]),
                                                        i[o].state === Ie.New && r++;
                                                }
                                            e.pages.push({ pageItems: u }),
                                                Object.assign(e.items, i),
                                                e.bubbles.push(r);
                                        }),
                                        e
                                    );
                                }),
                                r = (0, Be.Om)(() =>
                                    le(t.tabs.get(), (e) =>
                                        e.hasNewItems
                                            ? {
                                                  id: e.collectionName,
                                                  title: We(
                                                      R.strings,
                                                      `collection_${e.collectionName}.collection.season`,
                                                  ),
                                                  notification: { type: 'dot', size: 'large' },
                                              }
                                            : {
                                                  id: e.collectionName,
                                                  title: We(
                                                      R.strings,
                                                      `collection_${e.collectionName}.collection.season`,
                                                  ),
                                              },
                                    ),
                                ),
                                o = (0, Be.Om)(() => a().items),
                                n = (0, Be.Om)(() => t.pageNumber.get()),
                                l = (0, Be.Om)(() => a().pages[n()].pageItems, { equals: Q }),
                                s = (0, Be.Om)(() => {
                                    const e = t.root.get().currentCollection;
                                    return !ze[Ee(e)] || e === $e;
                                }),
                                h = (0, Be.Om)(() => {
                                    const e = t.root.get();
                                    return e.prevReceivedItemsCount === e.maxItemsCount;
                                }),
                                c = (0, Be.Om)(
                                    () => {
                                        let e = !1;
                                        const u = (u) =>
                                            u === He.JustReceived
                                                ? e || !t.isReadyForProgressAnimation.get()
                                                    ? He.Unreceived
                                                    : ((e = !0), He.JustReceived)
                                                : u;
                                        return le(t.rewardsInfo.get(), ({ state: e, requiredItemsCount: t }) => ({
                                            state: u(e),
                                            requiredItemsCount: t,
                                        }));
                                    },
                                    { equals: Q },
                                ),
                                d = (0, Be.Om)((e) => se(t.rewardsInfo.get(), (t) => t.requiredItemsCount === e), {
                                    equals: Q,
                                }),
                                g = (0, Be.Om)(
                                    (e) => {
                                        const t = d(e);
                                        return t
                                            ? he(t.rewards, (e) => {
                                                  return {
                                                      index: e.index,
                                                      name: e.name,
                                                      getImage: (t) => Ue(e, t),
                                                      value: e.value,
                                                      valueType:
                                                          ((t = e.name),
                                                          Pe.includes(t)
                                                              ? Se.MULTI
                                                              : Te.includes(t)
                                                                ? Se.CURRENCY
                                                                : Re.includes(t)
                                                                  ? Se.NUMBER
                                                                  : Oe.includes(t)
                                                                    ? Se.PREMIUM_PLUS
                                                                    : Se.STRING),
                                                      special: e.overlayType,
                                                      tooltipArgs: Ne(
                                                          { tooltipId: e.tooltipId },
                                                          Number(e.tooltipContentId),
                                                          { ignoreShowDelay: !0 },
                                                      ),
                                                  };
                                                  var t;
                                              })
                                            : [];
                                    },
                                    { equals: Q },
                                ),
                                E = (0, Be.Om)(() => {
                                    const e = a().bubbles;
                                    let t = 0,
                                        u = 0,
                                        i = -1;
                                    return (
                                        e.forEach((e, a) => {
                                            a < n() ? (t += e) : a > n() && (u += e), e > 0 && i < 0 && (i = a);
                                        }),
                                        { prevBubbleCount: t, nextBubbleCount: u, firstPageWithBubble: i }
                                    );
                                }),
                                A = (0, Be.Om)(() => {
                                    const e = t.root.get(),
                                        u = e.receivedItemsCount,
                                        i = e.prevReceivedItemsCount,
                                        a = e.maxItemsCount;
                                    return {
                                        value: t.isReadyForProgressAnimation.get() ? u : i,
                                        deltaFrom: i,
                                        maxItemsCount: a,
                                    };
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getTabs: r,
                                    getPageCount: (0, Be.Om)(() => a().pages.length),
                                    getPageNumber: n,
                                    getCurrentPageCollectionElements: l,
                                    getItems: o,
                                    getItem: (0, Be.Om)((e) => {
                                        var t;
                                        return null == (t = o()) ? void 0 : t[e];
                                    }),
                                    levelInfo: c,
                                    getRewardsByLevel: g,
                                    getProgressParams: A,
                                    getConfig: u,
                                    isDefaultTemplate: s,
                                    isProgressAnimationEnded: h,
                                    getCountOfNewElementsPerPage: E,
                                    getData: a,
                                    getPageBackgrounds: i,
                                },
                            });
                        },
                        ({ model: e, externalModel: t, cleanup: u }) => {
                            const i = (0, J.aD)(() => {
                                    e.isReadyForProgressAnimation.get() || e.isReadyForProgressAnimation.set(!0);
                                }),
                                a = t.createCallbackNoArgs('onFinishTutorial'),
                                r = (t) => {
                                    const u = Ge(0, e.computes.getPageCount() - 1, t);
                                    u === t && (e.pageNumber.set(u), i(), e.root.get().isTutorial && a());
                                },
                                o = (0, J.aD)((t) => {
                                    const u = e.currentCollection.get();
                                    if (e.displayCollection.get() === u) return;
                                    e.displayCollection.set(u);
                                    const i = e.page.get();
                                    i < 0
                                        ? t < 0
                                            ? (e.pageNumber.set(0), e.isReadyForProgressAnimation.set(!0))
                                            : e.pageNumber.set(t)
                                        : e.pageNumber.set(i);
                                });
                            u(
                                (0, J.EH)(() => {
                                    const t = e.computes.getCountOfNewElementsPerPage().firstPageWithBubble;
                                    o(t);
                                }),
                            );
                            const n = (0, J.aD)(() => r(e.computes.getPageNumber() + 1)),
                                l = (0, J.aD)(() => r(e.computes.getPageNumber() - 1)),
                                s = t.createCallback((e) => ({ collectionName: e }), 'onTabSelected'),
                                h = (0, J.aD)((t) => {
                                    t !== e.root.get().currentCollection && s(t);
                                });
                            return {
                                enableProgressAnimation: i,
                                finishTutorial: a,
                                nextPage: n,
                                previousPage: l,
                                selectTab: h,
                                setItemReceived: t.createCallback((e) => ({ itemId: e }), 'onSetItemReceived'),
                                openItemPreview: t.createCallback(
                                    (e, t) => ({ itemId: e, currentPage: t }),
                                    'onOpenItemPreview',
                                ),
                                setProgressItemsReceived: t.createCallbackNoArgs('onSetProgressItemsReceived'),
                                setRewardReceived: t.createCallback(
                                    (e) => ({ requiredItemsCount: e }),
                                    'onSetRewardReceived',
                                ),
                                close: t.createCallbackNoArgs('onClose'),
                                viewLoaded: t.createCallback(
                                    () => ({ pagesCount: e.computes.getPageCount() }),
                                    'onViewLoaded',
                                ),
                            };
                        },
                    ),
                    je =
                        (qe[0],
                        qe[1],
                        ie()(
                            ({ observableModel: e }) => {
                                const t = {
                                        root: e.object(),
                                        vehicleInfo: e.object('vehicleInfo'),
                                        pagesBlurredBackgrounds: e.array('pagesBlurredBackgrounds'),
                                    },
                                    u = (0, Be.Om)(() => {
                                        const e = t.root.get().currentCollection;
                                        return ze[Ee(e)] || ze.defaultConfig;
                                    }),
                                    i = (0, Be.Om)(() => {
                                        const e = t.root.get().page,
                                            i = u(),
                                            a = re(t.pagesBlurredBackgrounds.get(), e);
                                        return { asset: null == a ? void 0 : a.main, color: i.generalBackgroundColor };
                                    });
                                return Object.assign({}, t, { computes: { getConfig: u, overlayBackground: i } });
                            },
                            ({ externalModel: e }) => ({
                                closePreview: e.createCallbackNoArgs('onClosePreview'),
                                openPreview: e.createCallback((e) => ({ currentPage: e }), 'onOpenPreview'),
                            }),
                        )),
                    Ve = je[0],
                    Xe = je[1],
                    Ye = {
                        base: 'App_base_93',
                        animationMain: 'App_animationMain_5a',
                        fadeIn: 'App_fadeIn_9e',
                        mainBg: 'App_mainBg_01',
                        base__ultraSize: 'App_base__ultraSize_fb',
                        darkBg: 'App_darkBg_7f',
                        animationBg: 'App_animationBg_a3',
                        close: 'App_close_90',
                    },
                    Ke = 'FormatText_base_d0',
                    Ze = ({ binding: e, text: t = '', classMix: u, alignment: i = de.left, formatWithBrackets: a }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const n = a && e ? ge(t, e) : t;
                        return o().createElement(
                            r.Fragment,
                            null,
                            n.split('\n').map((t, a) =>
                                o().createElement(
                                    'div',
                                    { className: B()(Ke, u), key: `${t}-${a}` },
                                    ((e, t, u) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : Ce(e, t))))(
                                        t,
                                        i,
                                        e,
                                    ).map((e, t) => o().createElement(r.Fragment, { key: `${t}-${e}` }, e)),
                                ),
                            ),
                        );
                    };
                let Qe;
                !(function (e) {
                    (e.Photo = 'photo'),
                        (e.Note = 'note'),
                        (e.Tankman = 'tankman'),
                        (e.Medal = 'medal'),
                        (e.Style2d = 'style2d'),
                        (e.Style3d = 'style3d'),
                        (e.OtherCustomization = 'otherCustomization');
                })(Qe || (Qe = {}));
                const Je = (e) => {
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
                    et = [];
                function tt(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), et)
                    );
                }
                function ut(e, t, u = []) {
                    const i = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(i.current), u || []);
                    (0, r.useEffect)(() => a, [a]);
                    const o = (null != u ? u : []).concat([t]);
                    return [
                        (0, r.useCallback)((u) => {
                            (i.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, o),
                        a,
                    ];
                }
                function it(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return at(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return at(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var i = 0;
                        return function () {
                            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function at(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, i = new Array(t); u < t; u++) i[u] = e[u];
                    return i;
                }
                function rt(e, t, u) {
                    const i = (0, r.useMemo)(
                        () =>
                            (function (e, t, u, i) {
                                let a,
                                    r = !1,
                                    o = 0;
                                function n() {
                                    a && clearTimeout(a);
                                }
                                function l(...l) {
                                    const s = this,
                                        h = Date.now() - o;
                                    function c() {
                                        (o = Date.now()), u.apply(s, l);
                                    }
                                    r ||
                                        (i && !a && c(),
                                        n(),
                                        void 0 === i && h > e
                                            ? c()
                                            : !0 !== t &&
                                              (a = setTimeout(
                                                  i
                                                      ? function () {
                                                            a = void 0;
                                                        }
                                                      : c,
                                                  void 0 === i ? e - h : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((i = u), (u = t), (t = void 0)),
                                    (l.cancel = function () {
                                        n(), (r = !0);
                                    }),
                                    l
                                );
                            })(u, e),
                        t,
                    );
                    return (0, r.useEffect)(() => i.cancel, [i]), i;
                }
                var ot = u(30);
                let nt;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(nt || (nt = {}));
                const lt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    st = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: i,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const n = (e, u) => {
                            const i = t(e),
                                a = i[0],
                                r = i[1];
                            return r <= a ? 0 : Ge(a, r, u);
                        };
                        return (s = {}) => {
                            const h = s.settings,
                                c = void 0 === h ? lt : h,
                                d = (0, r.useRef)(null),
                                g = (0, r.useRef)(null),
                                E = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        i = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        a = (e, ...u) => {
                                            for (var i, a = it(t(e).values()); !(i = a()).done; ) (0, i.value)(...u);
                                        };
                                    return (0, r.useMemo)(() => ({ on: u, off: i, trigger: a }), []);
                                })(),
                                A = rt(
                                    () => {
                                        l.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                m = (0, ot.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (u(t, e), E.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                F = m[0],
                                f = m[1],
                                D = (0, r.useCallback)(
                                    (e, t, u) => {
                                        var i;
                                        const a = F.scrollPosition.get(),
                                            r = (null != (i = F.scrollPosition.goal) ? i : 0) - a;
                                        return n(e, t * u + r + a);
                                    },
                                    [F.scrollPosition],
                                ),
                                p = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const i = d.current;
                                        i &&
                                            f.start({
                                                scrollPosition: n(i, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: n(i, F.scrollPosition.get()) },
                                            });
                                    },
                                    [f, c.animationConfig, F.scrollPosition],
                                ),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            u = g.current;
                                        if (!t || !u) return;
                                        const i = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return a(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            r = D(t, e, i);
                                        p(r);
                                    },
                                    [p, D, c.step],
                                ),
                                B = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(i(e)),
                                            d.current && E.trigger('mouseWheel', e, F.scrollPosition, t(d.current));
                                    },
                                    [F.scrollPosition, C, E],
                                ),
                                w = ((e, t = []) => {
                                    const u = (0, r.useRef)(),
                                        i = (0, r.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [i],
                                        ),
                                        i
                                    );
                                })(
                                    () =>
                                        Je(() => {
                                            const e = d.current;
                                            e &&
                                                (p(n(e, F.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [p, F.scrollPosition.goal],
                                ),
                                _ = tt(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = n(e, F.scrollPosition.goal);
                                    t !== F.scrollPosition.goal && p(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', w),
                                    () => {
                                        window.removeEventListener('resize', w);
                                    }
                                ),
                                [w],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (g.current ? a(g.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: n,
                                    handleMouseWheel: B,
                                    applyScroll: p,
                                    applyStepTo: C,
                                    contentRef: d,
                                    wrapperRef: g,
                                    scrollPosition: f,
                                    animationScroll: F,
                                    recalculateContent: _,
                                    events: { on: E.on, off: E.off },
                                }),
                                [F.scrollPosition, p, C, E.off, E.on, _, B, f, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    ht = st({
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
                        getDirection: (e) => (e.deltaY > 1 ? nt.Next : nt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    ct = 'HorizontalBar_base_49',
                    dt = 'HorizontalBar_base__nonActive_82',
                    gt = 'HorizontalBar_leftButton_5f',
                    Et = 'HorizontalBar_rightButton_03',
                    At = 'HorizontalBar_track_0d',
                    mt = 'HorizontalBar_thumb_fd',
                    Ft = 'HorizontalBar_rail_32',
                    ft = 'disable',
                    Dt = { pending: !1, offset: 0 },
                    pt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ct = () => {},
                    Bt = (e, t) => Math.max(20, e.offsetWidth * t),
                    wt = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = pt, onDrag: i = Ct }) => {
                        const a = (0, r.useRef)(null),
                            n = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            h = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = e.stepTimeout || 100,
                            g = (0, r.useState)(Dt),
                            E = g[0],
                            A = g[1],
                            m = (0, r.useCallback)(
                                (e) => {
                                    A(e),
                                        c.current && i({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [i],
                            ),
                            F = () => {
                                const t = h.current,
                                    u = c.current,
                                    i = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(i && t && u && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, i / a),
                                    l = Ge(0, 1, r / (a - i)),
                                    d = (t.offsetWidth - Bt(t, o)) * l;
                                (u.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (n.current && s.current && h.current && c.current) {
                                            if (0 === e)
                                                return n.current.classList.add(ft), void s.current.classList.remove(ft);
                                            if (
                                                ((t = h.current),
                                                (u = c.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return n.current.classList.remove(ft), void s.current.classList.add(ft);
                                            var t, u;
                                            n.current.classList.remove(ft), s.current.classList.remove(ft);
                                        }
                                    })(d);
                            },
                            f = tt(() => {
                                (() => {
                                    const t = c.current,
                                        u = h.current,
                                        i = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && i && u)) return;
                                    const o = Math.min(1, i / r);
                                    (t.style.width = `${Bt(u, o)}px`),
                                        (t.style.display = 'flex'),
                                        a.current &&
                                            (1 === o ? a.current.classList.add(dt) : a.current.classList.remove(dt));
                                })(),
                                    F();
                            });
                        (0, r.useEffect)(() => Je(f)),
                            (0, r.useEffect)(
                                () =>
                                    Je(() => {
                                        const t = () => {
                                            F();
                                        };
                                        let u = Ct;
                                        const i = () => {
                                            u(), (u = Je(f));
                                        };
                                        return (
                                            e.events.on('recalculateContent', f),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', i),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', f),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', i);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const t = l.O.client.events.mouse.move(([t, u]) => {
                                        var a;
                                        const r = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!r || !o) return;
                                        const n = h.current,
                                            l = c.current;
                                        if (!n || !l) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const s = t.clientX - E.offset - n.getBoundingClientRect().x,
                                            d = (s / n.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            i({ type: 'dragging', thumb: l, thumbOffset: s, contentOffset: d });
                                    }),
                                    u = l.O.client.events.mouse.up(() => {
                                        t(), m(Dt);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, i, m]);
                        const D = ut((t) => e.applyStepTo(t), d, [e]),
                            p = D[0],
                            C = D[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const w = (e) => {
                            e.target.classList.contains(ft) || H('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: B()(ct, t.base), ref: a, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: B()(gt, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ft) || 0 !== e.button || (H('play'), p(nt.Next));
                                },
                                onMouseUp: C,
                                ref: n,
                                onMouseEnter: w,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: B()(At, t.track),
                                    onMouseDown: (t) => {
                                        const i = c.current;
                                        if (i && 0 === t.button)
                                            if ((H('play'), t.target === i))
                                                m({ pending: !0, offset: t.screenX - i.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const i = c.current,
                                                        a = e.contentRef.current;
                                                    if (!i || !a) return;
                                                    const r = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > i.getBoundingClientRect().x ? nt.Prev : nt.Next);
                                            }
                                    },
                                    ref: h,
                                    onMouseEnter: w,
                                },
                                o().createElement('div', { ref: c, className: B()(mt, t.thumb) }),
                                o().createElement('div', { className: B()(Ft, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: B()(Et, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ft) || 0 !== e.button || (H('play'), p(nt.Prev));
                                },
                                onMouseUp: C,
                                ref: s,
                                onMouseEnter: w,
                            }),
                        );
                    }),
                    _t = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    vt = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: i,
                        areaClassName: a,
                        classNames: n,
                        scrollClassName: l,
                        getStepByRailClick: s,
                        onDrag: h,
                    }) => {
                        const c = (0, r.useMemo)(() => {
                                const e = i || {};
                                return Object.assign({}, e, { base: B()(_t.base, e.base) });
                            }, [i]),
                            d = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: B()(_t.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: B()(_t.defaultScrollArea, a) },
                                o().createElement(St, { className: l, api: d, classNames: n }, e),
                            ),
                            o().createElement(wt, { getStepByRailClick: s, api: t, onDrag: h, classNames: c }),
                        );
                    },
                    St = ({ api: e, className: t, classNames: u, children: i }) => (
                        (0, r.useEffect)(() => Je(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: B()(_t.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: B()(_t.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: B()(_t.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    i,
                                ),
                            ),
                        )
                    );
                (St.Bar = wt), (St.Default = vt);
                const xt = st({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? nt.Next : nt.Prev),
                    }),
                    bt = 'VerticalBar_base_f3',
                    Lt = 'VerticalBar_base__nonActive_42',
                    yt = 'VerticalBar_topButton_d7',
                    Pt = 'VerticalBar_bottomButton_06',
                    Tt = 'VerticalBar_track_df',
                    Rt = 'VerticalBar_thumb_32',
                    Ot = 'VerticalBar_rail_43',
                    kt = 'disable',
                    Mt = () => {},
                    Ut = { pending: !1, offset: 0 },
                    Nt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    It = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Ht = (e, t) => Math.max(20, e.offsetHeight * t),
                    Wt = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Nt, onDrag: i = Mt }) => {
                        const a = (0, r.useRef)(null),
                            n = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            h = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = e.stepTimeout || 100,
                            g = (0, r.useState)(Ut),
                            E = g[0],
                            A = g[1],
                            m = (0, r.useCallback)(
                                (e) => {
                                    A(e),
                                        c.current && i({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [i],
                            ),
                            F = tt(() => {
                                const t = c.current,
                                    u = h.current,
                                    i = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(i && r && t && u)) return;
                                const o = Math.min(1, i / r);
                                return (
                                    (t.style.height = `${Ht(u, o)}px`),
                                    (t.style.display = 'flex'),
                                    a.current &&
                                        (1 === o ? a.current.classList.add(Lt) : a.current.classList.remove(Lt)),
                                    o
                                );
                            }),
                            f = tt(() => {
                                const t = h.current,
                                    u = c.current,
                                    i = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(i && t && u && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, i / a),
                                    l = Ge(0, 1, r / (a - i)),
                                    d = (t.offsetHeight - Ht(t, o)) * l;
                                (u.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (n.current && s.current && h.current && c.current) {
                                            if (0 === Math.round(e))
                                                return n.current.classList.add(kt), void s.current.classList.remove(kt);
                                            if (
                                                ((t = h.current),
                                                (u = c.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return n.current.classList.remove(kt), void s.current.classList.add(kt);
                                            var t, u;
                                            n.current.classList.remove(kt), s.current.classList.remove(kt);
                                        }
                                    })(d);
                            }),
                            D = tt(() => {
                                It(e, () => {
                                    F(), f();
                                });
                            });
                        (0, r.useEffect)(() => Je(D)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    It(e, () => {
                                        f();
                                    });
                                };
                                let u = Mt;
                                const i = () => {
                                    u(), (u = Je(D));
                                };
                                return (
                                    e.events.on('recalculateContent', D),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', i),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', D),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', i);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const t = l.O.client.events.mouse.up(() => {
                                        m(Ut);
                                    }),
                                    u = l.O.client.events.mouse.move(([t]) => {
                                        It(e, (u) => {
                                            const a = h.current,
                                                r = c.current,
                                                o = e.getContainerSize();
                                            if (!a || !r || !o) return;
                                            const n = t.screenY - E.offset - a.getBoundingClientRect().y,
                                                l = (n / a.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                i({ type: 'dragging', thumb: r, thumbOffset: n, contentOffset: l });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, i, m]);
                        const p = ut((t) => e.applyStepTo(t), d, [e]),
                            C = p[0],
                            w = p[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', w, !0),
                                () => document.removeEventListener('mouseup', w, !0)
                            ),
                            [w],
                        );
                        const _ = (e) => {
                            e.target.classList.contains(kt) || H('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: B()(bt, t.base), ref: a, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: B()(yt, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(kt) || 0 !== e.button || (H('play'), C(nt.Next));
                                },
                                ref: n,
                                onMouseEnter: _,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: B()(Tt, t.track),
                                    onMouseDown: (t) => {
                                        const i = c.current;
                                        if (i && 0 === t.button)
                                            if ((H('play'), t.target === i))
                                                m({ pending: !0, offset: t.screenY - i.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        It(e, (i) => {
                                                            if (!i) return;
                                                            const a = u(e),
                                                                r = e.clampPosition(i, i.scrollTop + a * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > i.getBoundingClientRect().y ? nt.Prev : nt.Next);
                                            }
                                    },
                                    ref: h,
                                    onMouseEnter: _,
                                },
                                o().createElement('div', { ref: c, className: B()(Rt, t.thumb) }),
                                o().createElement('div', { className: B()(Ot, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: B()(Pt, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(kt) || 0 !== e.button || (H('play'), C(nt.Prev));
                                },
                                onMouseUp: w,
                                ref: s,
                                onMouseEnter: _,
                            }),
                        );
                    }),
                    Gt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    zt = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: i,
                        areaClassName: a,
                        scrollClassName: n,
                        scrollClassNames: l,
                        getStepByRailClick: s,
                        onDrag: h,
                    }) => {
                        const c = (0, r.useMemo)(() => {
                                const e = i || {};
                                return Object.assign({}, e, { base: B()(Gt.base, e.base) });
                            }, [i]),
                            d = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: B()(Gt.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: B()(Gt.area, a) },
                                o().createElement($t, { className: n, classNames: l, api: d }, e),
                            ),
                            o().createElement(Wt, { getStepByRailClick: s, api: t, onDrag: h, classNames: c }),
                        );
                    },
                    $t = ({ className: e, classNames: t, children: u, api: i }) => (
                        (0, r.useEffect)(() => Je(i.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: B()(Gt.base, e), ref: i.wrapperRef, onWheel: i.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: B()(Gt.content, null == t ? void 0 : t.content), ref: i.contentRef },
                                u,
                            ),
                        )
                    );
                $t.Default = zt;
                const qt = { Vertical: a, Horizontal: i };
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
                const jt = 'ElementDescription_base_af',
                    Vt = 'ElementDescription_base__scroll_93',
                    Xt = 'ElementDescription_text_cb',
                    Yt = 'ElementDescription_scrollBarPosition_d7';
                function Kt(e, t, u, i, a, r, o) {
                    try {
                        var n = e[r](o),
                            l = n.value;
                    } catch (e) {
                        return void u(e);
                    }
                    n.done ? t(l) : Promise.resolve(l).then(i, a);
                }
                const Zt = (0, Y.Pi)(() => {
                        const e = Xe().model.root.get().description,
                            t = (0, r.useState)(!1),
                            u = t[0],
                            i = t[1],
                            a = (0, r.useRef)(null),
                            n = () => {
                                var e, t, u;
                                a.current &&
                                    i(
                                        ((e = a.current),
                                        (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetHeight)
                                            ? t
                                            : 0) < e.offsetHeight),
                                    );
                            };
                        var l;
                        (0, r.useEffect)(() => {
                            n();
                        }, [a]),
                            (l = () => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                yield (0, j.Eu)(),
                                                    yield new Promise((e) => {
                                                        requestAnimationFrame(() => {
                                                            requestAnimationFrame(() => {
                                                                e();
                                                            });
                                                        });
                                                    }),
                                                    n();
                                            }),
                                            function () {
                                                var t = this,
                                                    u = arguments;
                                                return new Promise(function (i, a) {
                                                    var r = e.apply(t, u);
                                                    function o(e) {
                                                        Kt(r, i, a, o, n, 'next', e);
                                                    }
                                                    function n(e) {
                                                        Kt(r, i, a, o, n, 'throw', e);
                                                    }
                                                    o(void 0);
                                                });
                                            });
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }),
                            (0, r.useEffect)(l, []);
                        const s = xt();
                        return o().createElement(
                            'div',
                            { className: B()(jt, u && Vt) },
                            u
                                ? o().createElement(
                                      qt.Vertical.Default,
                                      { api: s, barClassNames: { base: Yt } },
                                      o().createElement(
                                          'div',
                                          { className: Xt, ref: a },
                                          o().createElement(Ze, { text: e }),
                                      ),
                                  )
                                : o().createElement(
                                      'div',
                                      { className: Xt, ref: a },
                                      o().createElement(Ze, { text: e }),
                                  ),
                        );
                    }),
                    Qt = 'LoupeButton_base_7c',
                    Jt = 'LoupeButton_icon_59',
                    eu = 'LoupeButton_iconHover_0e',
                    tu = 'LoupeButton_hoverText_e7',
                    uu = ({ onClick: e }) =>
                        o().createElement(
                            'div',
                            {
                                className: Qt,
                                onClick: () => {
                                    H('play'), e();
                                },
                                onMouseEnter: () => H('highlight'),
                            },
                            o().createElement('div', { className: Jt }, o().createElement('div', { className: eu })),
                            o().createElement(
                                'div',
                                { className: tu },
                                R.strings.collections.overlays.preview.previewButton.text(),
                            ),
                        ),
                    iu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    au = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function ru(e) {
                    let t = '';
                    for (let u = au.length - 1; u >= 0; u--) for (; e >= au[u]; ) (t += iu[u]), (e -= au[u]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const ou = 'VehicleInfo_base_24',
                    nu = 'VehicleInfo_type_e3',
                    lu = 'VehicleInfo_ico_ca',
                    su = ({ level: e, name: t, type: u, isElite: i, className: a }) => {
                        const r = R.images.gui.maps.icons.vehicleTypes.big.$dyn(
                            `${((n = u), n.replace(/-/g, '_'))}${i ? '_elite' : ''}`,
                        );
                        var n;
                        return o().createElement(
                            'div',
                            { className: B()(ou, a) },
                            ru(e),
                            o().createElement(
                                'div',
                                { className: nu, lang: R.strings.settings.LANGUAGE_CODE() },
                                o().createElement('div', { className: lu, style: { backgroundImage: `url(${r})` } }),
                            ),
                            t,
                        );
                    },
                    hu = {
                        base: 'CollectionElement_base_76',
                        image: 'CollectionElement_image_6f',
                        base__style3d: 'CollectionElement_base__style3d_98',
                        base__style2d: 'CollectionElement_base__style2d_4a',
                        base__photo: 'CollectionElement_base__photo_f0',
                        base__note: 'CollectionElement_base__note_99',
                        title: 'CollectionElement_title_ce',
                        title__style3d: 'CollectionElement_title__style3d_b3',
                        vehicleString: 'CollectionElement_vehicleString_98',
                        type: 'CollectionElement_type_84',
                    },
                    cu = (0, Y.Pi)(() => {
                        const e = Xe(),
                            t = e.controls,
                            u = e.model,
                            i = u.root.get(),
                            a = i.type,
                            r = i.name,
                            n = i.largeImage,
                            l = i.mediumImage,
                            s = i.smallImage,
                            h = i.description,
                            c = i.page,
                            d = u.vehicleInfo.get(),
                            g = d.vehicleLvl,
                            E = d.vehicleName,
                            A = d.vehicleType,
                            m = d.isElite,
                            F = b().mediaSize;
                        return o().createElement(
                            'div',
                            { className: B()(hu.base, hu[`base__${a}`]) },
                            o().createElement(
                                'div',
                                {
                                    className: hu.image,
                                    style: { backgroundImage: `url(${F < v.Large ? s : F === v.Large ? l : n || l})` },
                                },
                                (a === Qe.Style3d || a === Qe.Style2d) &&
                                    o().createElement(uu, { onClick: () => t.openPreview(c) }),
                            ),
                            Boolean(r) &&
                                o().createElement(
                                    'div',
                                    { className: B()(hu.title, a === Qe.Style3d && hu.title__style3d) },
                                    a === Qe.Style3d
                                        ? o().createElement(Ze, {
                                              text: R.strings.collections.overlays.preview.style.title.text(),
                                              binding: {
                                                  styleName: r,
                                                  vehicleInfo: o().createElement(su, {
                                                      level: g,
                                                      name: E,
                                                      type: A,
                                                      isElite: m,
                                                      className: hu.vehicleString,
                                                  }),
                                              },
                                          })
                                        : r,
                                ),
                            Boolean(h) && o().createElement(Zt, null),
                        );
                    }),
                    du = (0, Y.Pi)(() => {
                        const e = Xe(),
                            t = e.controls,
                            u = e.model,
                            i = b(),
                            a = i.remScreenWidth,
                            r = i.remScreenHeight,
                            n = u.computes.overlayBackground(),
                            l = n.color,
                            s = n.asset;
                        var h;
                        return (
                            (h = t.closePreview),
                            X(q.n.ESCAPE, h),
                            o().createElement(
                                'div',
                                { className: B()(Ye.base, Ye[`base__${Z(a, r)}`]) },
                                o().createElement('div', { className: Ye.animationBg }),
                                o().createElement(
                                    'div',
                                    { className: Ye.animationMain },
                                    s &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: Ye.mainBg,
                                                style: { backgroundColor: l, backgroundImage: `url(${s})` },
                                            },
                                            o().createElement('div', { className: Ye.darkBg }),
                                        ),
                                    o().createElement(
                                        'div',
                                        { className: Ye.close },
                                        o().createElement($, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: t.closePreview,
                                        }),
                                    ),
                                    o().createElement(cu, null),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        o().createElement(Ve, null, o().createElement(U, null, o().createElement(du, null))),
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
        (__webpack_require__.O = (e, t, u, i) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, u, i] = deferred[l], r = !0, o = 0; o < t.length; o++)
                        (!1 & i || a >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((r = !1), i < a && (a = i));
                    if (r) {
                        deferred.splice(l--, 1);
                        var n = u();
                        void 0 !== n && (e = n);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > i; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, u, i];
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
        (__webpack_require__.j = 117),
        (() => {
            var e = { 117: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var i,
                        a,
                        [r, o, n] = u,
                        l = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (i in o) __webpack_require__.o(o, i) && (__webpack_require__.m[i] = o[i]);
                        if (n) var s = n(__webpack_require__);
                    }
                    for (t && t(u); l < r.length; l++)
                        (a = r[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(s);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [314], () => __webpack_require__(29));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
