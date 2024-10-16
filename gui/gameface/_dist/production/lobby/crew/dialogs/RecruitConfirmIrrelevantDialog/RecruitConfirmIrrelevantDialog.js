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
                    u.d(t, { mouse: () => c, off: () => s, on: () => l, onResize: () => i, onScaleUpdated: () => r });
                var n = u(2472),
                    a = u(1176);
                const i = (0, n.E)('clientResized'),
                    r = (0, n.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
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
                    const i = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        r = o[t]((e) => u([e, 'outside']));
                                    function l(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, l),
                                        n(),
                                        () => {
                                            a &&
                                                (r(),
                                                window.removeEventListener(i, l),
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
                    return Object.assign({}, i, {
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
                        getMouseGlobalPosition: () => r,
                        getSize: () => i,
                        graphicsQuality: () => l,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = u(527),
                    a = u(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const l = {
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
                u.d(t, { O: () => i });
                var n = u(5959),
                    a = u(514);
                const i = { view: u(7641), client: n, sound: a.ZP };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => r });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    r = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => C,
                        events: () => i.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getScale: () => f,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => D,
                        isFocused: () => b,
                        pxToRem: () => h,
                        remToPx: () => F,
                        resize: () => E,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => y,
                    });
                var n = u(3722),
                    a = u(6112),
                    i = u(6538),
                    r = u(8566);
                const l = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, l);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function d(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, l);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function A(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
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
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const C = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    k = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => o });
                const n = ['args'];
                const a = 2,
                    i = 16,
                    r = 32,
                    l = 64,
                    s = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            u[n] = e[n];
                                        }
                                    return u;
                                })(t, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    o = {
                        close(e) {
                            s('popover' === e ? a : r);
                        },
                        minimize() {
                            s(l);
                        },
                        move(e) {
                            s(i, { isMouseEvent: !0, on: e });
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
                u.d(t, { Z: () => i });
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
                        const i = n.O.view.addModelObserver(e, u, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(i) : (this._views[u] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                const i = a;
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
                u.d(t, { Sw: () => i.Z, B3: () => s, Z5: () => r.Z5, B0: () => l, ry: () => f, Eu: () => h });
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
                var i = u(1358);
                var r = u(8613);
                let l;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(l || (l = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(5521),
                    m = u(3138);
                const E = ['args'];
                function A(e, t, u, n, a, i, r) {
                    try {
                        var l = e[i](r),
                            s = l.value;
                    } catch (e) {
                        return void u(e);
                    }
                    l.done ? t(s) : Promise.resolve(s).then(n, a);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    f = (function () {
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
                                        var i = e.apply(t, u);
                                        function r(e) {
                                            A(i, n, a, r, l, 'next', e);
                                        }
                                        function l(e) {
                                            A(i, n, a, r, l, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    F = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            u[n] = e[n];
                                        }
                                    return u;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    p = () => F(l.CLOSE),
                    b = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var v = u(7572);
                const D = a.instance,
                    B = {
                        DataTracker: i.Z,
                        ViewModel: v.Z,
                        ViewEventType: l,
                        NumberFormatType: s,
                        RealFormatType: o,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => F(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => F(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            F(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), i) => {
                            const r = m.O.view.getViewGlobalPosition(),
                                s = u.getBoundingClientRect(),
                                o = s.x,
                                c = s.y,
                                d = s.width,
                                _ = s.height,
                                E = {
                                    x: m.O.view.pxToRem(o) + r.x,
                                    y: m.O.view.pxToRem(c) + r.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            F(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: g(E),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => b(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, p);
                        },
                        handleViewEvent: F,
                        onBindingsReady: f,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
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
                        ClickOutsideManager: D,
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = B;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => i, Z5: () => n, cy: () => a });
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
                    i = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            3909: (e, t, u) => {
                'use strict';
                var n = u(6179),
                    a = u.n(n);
                const i = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var r = u(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function o(e, t, u) {
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
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === u.extraLarge.weight,
                        large: i === u.large.weight,
                        medium: i === u.medium.weight,
                        small: i === u.small.weight,
                        extraSmall: i === u.extraSmall.weight,
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
                })(s || (s = {}));
                const c = r.O.client.getSize('rem'),
                    d = c.width,
                    _ = c.height,
                    m = Object.assign({ width: d, height: _ }, o(d, _, l)),
                    E = (0, n.createContext)(m),
                    A = ['children'];
                const g = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, A);
                    const a = (0, n.useContext)(E),
                        r = a.extraLarge,
                        l = a.large,
                        s = a.medium,
                        o = a.small,
                        c = a.extraSmall,
                        d = a.extraLargeWidth,
                        _ = a.largeWidth,
                        m = a.mediumWidth,
                        g = a.smallWidth,
                        f = a.extraSmallWidth,
                        h = a.extraLargeHeight,
                        F = a.largeHeight,
                        p = a.mediumHeight,
                        b = a.smallHeight,
                        v = a.extraSmallHeight,
                        D = { extraLarge: h, large: F, medium: p, small: b, extraSmall: v };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && r) return t;
                        if (u.large && l) return t;
                        if (u.medium && s) return t;
                        if (u.small && o) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && d) return i(t, u, D);
                        if (u.largeWidth && _) return i(t, u, D);
                        if (u.mediumWidth && m) return i(t, u, D);
                        if (u.smallWidth && g) return i(t, u, D);
                        if (u.extraSmallWidth && f) return i(t, u, D);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && h) return t;
                            if (u.largeHeight && F) return t;
                            if (u.mediumHeight && p) return t;
                            if (u.smallHeight && b) return t;
                            if (u.extraSmallHeight && v) return t;
                        }
                    }
                    return null;
                };
                g.defaultProps = {
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
                (0, n.memo)(g);
                const f = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    h = ({ children: e }) => {
                        const t = (0, n.useContext)(E),
                            u = (0, n.useState)(t),
                            i = u[0],
                            s = u[1],
                            c = (0, n.useCallback)((e, t) => {
                                const u = r.O.view.pxToRem(e),
                                    n = r.O.view.pxToRem(t);
                                s(Object.assign({ width: u, height: n }, o(u, n, l)));
                            }, []),
                            d = (0, n.useCallback)(() => {
                                const e = r.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        f(() => {
                            r.O.client.events.on('clientResized', c), r.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    r.O.client.events.off('clientResized', c),
                                        r.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [c, d],
                            );
                        const _ = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return a().createElement(E.Provider, { value: _ }, e);
                    };
                var F = u(6483),
                    p = u.n(F),
                    b = u(926),
                    v = u.n(b);
                let D, B, w;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(D || (D = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(B || (B = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const C = () => {
                        const e = (0, n.useContext)(E),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return D.ExtraLarge;
                                    case e.large:
                                        return D.Large;
                                    case e.medium:
                                        return D.Medium;
                                    case e.small:
                                        return D.Small;
                                    case e.extraSmall:
                                        return D.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), D.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return B.ExtraLarge;
                                    case e.largeWidth:
                                        return B.Large;
                                    case e.mediumWidth:
                                        return B.Medium;
                                    case e.smallWidth:
                                        return B.Small;
                                    case e.extraSmallWidth:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
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
                        return { mediaSize: a, mediaWidth: i, mediaHeight: r, remScreenWidth: t, remScreenHeight: u };
                    },
                    k = ['children', 'className'];
                function y() {
                    return (
                        (y = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        y.apply(null, arguments)
                    );
                }
                const x = {
                        [B.ExtraSmall]: '',
                        [B.Small]: v().SMALL_WIDTH,
                        [B.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [B.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_HEIGHT,
                        [w.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [w.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [D.ExtraSmall]: '',
                        [D.Small]: v().SMALL,
                        [D.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [D.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [D.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, k);
                        const i = C(),
                            r = i.mediaWidth,
                            l = i.mediaHeight,
                            s = i.mediaSize;
                        return a().createElement('div', y({ className: p()(u, x[r], S[l], T[s]) }, n), t);
                    },
                    O = ['children'];
                const I = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, O);
                    return a().createElement(h, null, a().createElement(L, u, t));
                };
                var N = u(493),
                    M = u.n(N);
                u(1281);
                let P;
                function W(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(P || (P = {}));
                const H = (e) => e.replace(/&nbsp;/g, ' '),
                    j =
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
                        (e) => {
                            return (
                                (t = R.strings.common.percentValue()),
                                (u = { value: e }),
                                t.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]))
                            );
                            var t, u;
                        });
                var $ = u(9916),
                    G = u(8613);
                Date.now(), G.Ew.getRegionalDateTime, G.Ew.getFormattedDateTime;
                const U = (e, t) => {
                        const u = (0, n.useRef)();
                        return (
                            (0, n.useEffect)(() => {
                                (t && !t(e)) || (u.current = e);
                            }, [t, e]),
                            u.current
                        );
                    },
                    V = (e = 1) => {
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
                    },
                    z = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    q = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    K = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    Y = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = z(`${e}.${u}`, window);
                                return q(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    Z = (e) => {
                        const t = ((e) => {
                                const t = V(),
                                    u = t.caller,
                                    n = t.resId,
                                    a = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: a, modelPath: K(a, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const a = z(K(u, `${t}.${n}`), window);
                                    return q(a) ? (e.push(a.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    X = $.Sw.instance;
                let J;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(J || (J = {}));
                const Q = (e = 'model', t = J.Deep) => {
                        const u = (0, n.useState)(0),
                            a = (u[0], u[1]),
                            i = (0, n.useMemo)(() => V(), []),
                            r = i.caller,
                            l = i.resId,
                            s = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== r ? `subViews.${r}.${e}` : e),
                                [r, e],
                            ),
                            o = (0, n.useState)(() =>
                                ((e) => {
                                    const t = z(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return q(t) ? t.value : t;
                                })(Y(s)),
                            ),
                            c = o[0],
                            d = o[1],
                            _ = (0, n.useRef)(-1);
                        return (
                            f(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? J.Deep : J.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== J.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === J.Deep
                                                ? (e === c && a((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        n = Z(e);
                                    _.current = X.addCallback(n, u, l, t === J.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (t !== J.None)
                                    return () => {
                                        X.removeCallback(_.current, l);
                                    };
                            }, [l, t]),
                            c
                        );
                    },
                    ee = ($.Sw.instance, U);
                var te = u(5521);
                const ue = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ne(e = te.n.NONE, t = ue, u = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== te.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && r.O.view.isEventHandled()) return;
                                r.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u, a]);
                }
                const ae = /<link.*?>/g,
                    ie = /\.\.\//g,
                    re = /<script.*?>/g,
                    le = 'default.css',
                    se = (e) => {
                        const t = e.match(ie);
                        return t && t.join('');
                    },
                    oe = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const u = t[e];
                            if (!u.href.includes(le)) return u.href;
                        }
                        return '';
                    },
                    ce = (e) => {
                        const t = oe(),
                            u = se(t);
                        let n,
                            a = e;
                        for (; null !== (n = re.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = u + e[2].replace(ie, '');
                                a = a.replace(e[2], t);
                            }
                        }
                        return a;
                    },
                    de = 'SubView_base_df',
                    _e = 'subViews.onChanged',
                    me = 'subView:inject->',
                    Ee = (() => {
                        const e = [];
                        let t = !1;
                        const u = () => {
                            if (!e.length) return void (t = !1);
                            const n = e.shift();
                            n && ((t = !0), n().then(() => u()));
                        };
                        return {
                            add: (n) => {
                                e.push(n), t || u();
                            },
                        };
                    })(),
                    Ae = (0, n.memo)(({ id: e, fallback: t, onLoadCallback: u, mixClass: i }) => {
                        const r = (0, n.useState)(''),
                            l = r[0],
                            s = r[1],
                            o = (0, n.useMemo)(() => ({ __html: ce(l) }), [l]),
                            c = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            d = (0, n.useState)(!1),
                            _ = d[0],
                            m = d[1],
                            E = (0, n.useCallback)(
                                (e) => {
                                    e.includes(c) &&
                                        (m(!0), engine.off(_e, E), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            A = (0, n.useCallback)((e) => {
                                Ee.add(
                                    () =>
                                        new Promise((t) => {
                                            s(e);
                                            const u = new MutationObserver(() => {
                                                    u.disconnect(), t();
                                                }),
                                                n = document.getElementById('root');
                                            n && u.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    u = t.path;
                                let n;
                                if ((n = u.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, t)),
                                        engine.on(`${me}${n}`, A),
                                        (({ path: e, name: t }) => {
                                            const u = new XMLHttpRequest();
                                            (u.onreadystatechange = () => {
                                                4 === u.readyState &&
                                                    (200 === u.status
                                                        ? (0, $.Eu)().then(() => {
                                                              console.info(`Sub view ${t} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${t}`,
                                                                      u.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${u.status} - can't get bundle`,
                                                          ));
                                            }),
                                                u.open('GET', e),
                                                u.send();
                                        })({ name: n, path: u }),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`${me}${n}`, A),
                                                console.info(`Sub view ${n} is destroyed: ${u}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(_e, E);
                        }, [E, A, e, _]),
                            (0, n.useEffect)(
                                () => () => {
                                    l &&
                                        ((e) => {
                                            const t = se(oe());
                                            let u;
                                            for (; null !== (u = ae.exec(e)); ) {
                                                const e = u[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const u = t + e[1].replace(ie, ''),
                                                        n = document.head.querySelector(`[href="${u}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(l);
                                },
                                [l],
                            );
                        const g = p()(de, i);
                        if (l) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const u = oe(),
                                        n = se(u);
                                    for (; null !== (t = ae.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(le) && n) {
                                            const t = n + e[1].replace(ie, ''),
                                                u = document.createElement('link');
                                            (u.href = t), (u.rel = 'stylesheet'), document.head.appendChild(u);
                                        }
                                    }
                                })(l),
                                u && u(e),
                                a().createElement('div', { className: g, dangerouslySetInnerHTML: o })
                            );
                        }
                        return t ? a().createElement('div', { className: g }, a().createElement(t, null)) : null;
                    });
                function ge(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const fe = {
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
                let he, Fe;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(he || (he = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Fe || (Fe = {}));
                const pe = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: i,
                    disabled: r,
                    mixClass: l,
                    soundHover: s,
                    soundClick: o,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: E,
                    onClick: A,
                }) => {
                    const g = (0, n.useRef)(null),
                        f = (0, n.useState)(u),
                        h = f[0],
                        F = f[1],
                        b = (0, n.useState)(!1),
                        v = b[0],
                        D = b[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                h && null !== g.current && !g.current.contains(e.target) && F(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, n.useEffect)(() => {
                            F(u);
                        }, [u]),
                        a().createElement(
                            'div',
                            {
                                ref: g,
                                className: p()(
                                    fe.base,
                                    fe[`base__${i}`],
                                    r && fe.base__disabled,
                                    t && fe[`base__${t}`],
                                    h && fe.base__focus,
                                    v && fe.base__highlightActive,
                                    l,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== s && ge(s), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    r || (m && m(e), D(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== o && ge(o),
                                        _ && _(e),
                                        u && (r || (g.current && (g.current.focus(), F(!0)))),
                                        D(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (E && E(e), D(!1));
                                },
                                onClick: function (e) {
                                    r || (A && A(e));
                                },
                            },
                            i !== he.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: fe.back }),
                                    a().createElement('span', { className: fe.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: p()(fe.state, fe.state__default) },
                                a().createElement('span', { className: fe.stateDisabled }),
                                a().createElement('span', { className: fe.stateHighlightHover }),
                                a().createElement('span', { className: fe.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: fe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                pe.defaultProps = { type: he.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const be = pe,
                    ve = [
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
                function De(e) {
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
                const Be = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: $.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    we = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            r = e.onMouseLeave,
                            l = e.onMouseDown,
                            s = e.onClick,
                            o = e.ignoreShowDelay,
                            c = void 0 !== o && o,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            m = e.decoratorId,
                            E = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            f = e.targetId,
                            h = void 0 === f ? 0 : f,
                            F = e.onShow,
                            p = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, ve);
                        const v = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, n.useMemo)(() => h || V().resId, [h]),
                            B = (0, n.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (Be(u, E, { isMouseEvent: !0, on: !0, arguments: De(a) }, D),
                                    F && F(),
                                    (v.current.isVisible = !0));
                            }, [u, E, a, D, F]),
                            w = (0, n.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        Be(u, E, { on: !1 }, D),
                                        v.current.isVisible && p && p(),
                                        (v.current.isVisible = !1);
                                }
                            }, [u, E, D, p]),
                            C = (0, n.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(v.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', C, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', C, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === g && w();
                            }, [g, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return g
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(B, c ? 100 : 400)),
                                                      i && i(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              w(), null == r || r(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === _ && w(), null == s || s(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === _ && w(), null == l || l(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : t;
                        var k;
                    },
                    Ce = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ke() {
                    return (
                        (ke = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        ke.apply(null, arguments)
                    );
                }
                const ye = R.views.common.tooltip_window.simple_tooltip_content,
                    xe = (e) => {
                        let t = e.children,
                            u = e.body,
                            i = e.header,
                            r = e.note,
                            l = e.alert,
                            s = e.args,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, Ce);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: u, header: i, note: r, alert: l });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [l, u, i, r, s]);
                        return a().createElement(
                            we,
                            ke(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? ye.SimpleTooltipHtmlContent('resId') : ye.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                o,
                            ),
                            t,
                        );
                        var d;
                    },
                    Se = 'TextOverflow_base_3b',
                    Te = ['content', 'classMix', 'className'];
                function Le() {
                    return (
                        (Le = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Le.apply(null, arguments)
                    );
                }
                const Oe = (e) => {
                    let t = e.content,
                        u = e.classMix,
                        i = e.className,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, Te);
                    const l = (0, n.useRef)(null),
                        s = (0, n.useState)(!0),
                        o = s[0],
                        c = s[1];
                    return (
                        (0, n.useEffect)(() =>
                            ((e) => {
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
                            })(() => {
                                const e = l.current;
                                e && e.offsetWidth >= e.scrollWidth && c(!1);
                            }),
                        ),
                        a().createElement(
                            xe,
                            { isEnabled: o, body: t },
                            a().createElement('div', Le({}, r, { ref: l, className: p()(Se, i, u) }), t),
                        )
                    );
                };
                let Re;
                !(function (e) {
                    (e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent');
                })(Re || (Re = {}));
                const Ie = 'DialogTemplateButton_base_0b',
                    Ne = 'DialogTemplateButton_label_83',
                    Me = 'DialogTemplateButton_label__noTooltip_14',
                    Pe = (0, n.memo)(
                        ({ onClick: e, isFocused: t, buttonID: u, isDisabled: i, label: r, tooltip: l, type: s }) => {
                            const o = (0, n.useCallback)(() => {
                                    e({ buttonID: u });
                                }, [e, u]),
                                c = (0, n.useMemo)(() => {
                                    return (
                                        (e = l.type),
                                        (t = { buttonID: u }),
                                        {
                                            isEnabled: e !== Re.absent,
                                            args: t,
                                            contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                            decoratorId:
                                                e === Re.normal
                                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                          'resId',
                                                      )
                                                    : void 0,
                                            ignoreShowDelay: e === Re.backport,
                                            ignoreMouseClick: !0,
                                        }
                                    );
                                    var e, t;
                                }, [l.type, u]),
                                d = p()(Ne, l.type !== Re.absent && Me);
                            return a().createElement(
                                we,
                                c,
                                a().createElement(
                                    'div',
                                    { className: Ie },
                                    a().createElement(
                                        be,
                                        { size: Fe.medium, type: s, disabled: i, onClick: o, isFocused: t },
                                        a().createElement(Oe, { classMix: d, content: r || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    We = 'DialogTemplateButtonList_base_8e';
                function He() {
                    return (
                        (He = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        He.apply(null, arguments)
                    );
                }
                const je = (0, n.memo)(() => {
                        const e = Q('model').onButtonClicked,
                            t = Q('model.focus'),
                            u = t.focusedIndex,
                            i = t.onTabPressed,
                            r = Q('model.buttons'),
                            l = (0, n.useCallback)(
                                (e) => {
                                    i({ shift: e.shiftKey });
                                },
                                [i],
                            );
                        ne(te.n.TAB, l);
                        const s = (0, n.useCallback)(
                            (t) => {
                                if (u < 0 || u >= r.length) return;
                                const n = r[u].value;
                                t.altKey || n.isDisabled || e({ buttonID: n.buttonID });
                            },
                            [r, u, e],
                        );
                        return (
                            ne(te.n.ENTER, s),
                            a().createElement(
                                'div',
                                { className: We },
                                r.map(({ value: t }, n) =>
                                    a().createElement(Pe, He({ key: t.buttonID, isFocused: n === u, onClick: e }, t)),
                                ),
                            )
                        );
                    }),
                    $e = 'DialogTemplateWrapper_base_f7',
                    Ge = 'DialogTemplateWrapper_base__hidden_5f',
                    Ue = 'DialogTemplateWrapper_subView_30';
                function Ve() {
                    return (
                        (Ve = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Ve.apply(null, arguments)
                    );
                }
                const ze = (0, n.memo)(({ Template: e }) => {
                    const t = Q('model', J.None),
                        u = t.onCloseClicked,
                        i = t.placeHolders,
                        r = t.background,
                        l = t.dimmerAlpha,
                        s = t.displayFlags;
                    (0, n.useEffect)(() => {
                        const e = document.getElementById('root');
                        e && e.setAttribute('id', 'stubDialogTemplate');
                    }, []);
                    const o = s.map(({ value: e }) => e),
                        c = (0, n.useRef)(i.map(({ value: e }) => e.resourceID)),
                        d = (0, n.useState)(0 !== c.current.length),
                        _ = d[0],
                        m = d[1],
                        E = (0, n.useCallback)(
                            (e = 'default') => {
                                u({ reason: e });
                            },
                            [u],
                        ),
                        A = (0, n.useCallback)(() => {
                            E('escape');
                        }, [E]);
                    var g;
                    (g = A), ne(te.n.ESCAPE, g);
                    const f = (0, n.useCallback)((e) => {
                            const t = c.current,
                                u = t.indexOf(e);
                            u > -1 && (t.splice(u, 1), 0 === t.length && m(!1));
                        }, []),
                        F = (0, n.useMemo)(() => {
                            const e = { backgroundColor: `rgba(19, 18, 16, ${l})` };
                            return r && (e.backgroundImage = `url(${r})`), e;
                        }, [r, l]),
                        b = (0, n.useMemo)(
                            () =>
                                i.reduce(
                                    (e, { value: t }) => (
                                        (e[t.placeHolder] = a().createElement(Ae, {
                                            key: t.placeHolder,
                                            id: t.resourceID,
                                            mixClass: Ue,
                                            onLoadCallback: f,
                                        })),
                                        e
                                    ),
                                    {},
                                ),
                            [f, i],
                        ),
                        v = p()($e, _ && Ge);
                    return a().createElement(
                        h,
                        null,
                        a().createElement(
                            'div',
                            { className: v, style: F },
                            a().createElement(
                                e,
                                Ve(
                                    { onClose: E, buttons: a().createElement(je, null), displayFlags: o, isShown: !_ },
                                    b,
                                ),
                            ),
                        ),
                    );
                });
                var qe = u(3403);
                const Ke = ['children'];
                function Ye() {
                    return (
                        (Ye = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Ye.apply(null, arguments)
                    );
                }
                const Ze = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, Ke);
                    return a().createElement(
                        we,
                        Ye(
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
                };
                function Xe() {
                    return (
                        (Xe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Xe.apply(null, arguments)
                    );
                }
                const Je = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(xe, t, n);
                    const i = t.contentId;
                    return i ? a().createElement(we, Xe({}, t, { contentId: i }), n) : a().createElement(Ze, t, n);
                };
                var Qe = u(8045);
                const et = {
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
                let tt, ut, nt;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(tt || (tt = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(ut || (ut = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(nt || (nt = {}));
                const at = { [nt.NBSP]: tt.NoBreakSymbol, [nt.ZWNBSP]: tt.NoBreakSymbol, [nt.NEW_LINE]: tt.LineBreak },
                    it = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    rt = {
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
                    lt = 'renderers_noBreakWrapper_10',
                    st = 'renderers_lineBreak_b5',
                    ot = 'renderers_newLine_bd',
                    ct = 'renderers_word_f3',
                    dt = (e) => ({ color: `#${e}` }),
                    _t = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? rt[n]
                                ? a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: p()(ct, rt[n]) },
                                      e,
                                  )
                                : a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: ct, style: dt(n) },
                                      e,
                                  )
                            : a().createElement('span', { key: u, 'data-block-type': t.blockType, className: ct }, e);
                    },
                    mt = {
                        [tt.Word]: _t,
                        [tt.NoBreakSymbol]: _t,
                        [tt.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: u }, e)),
                            ),
                        [tt.LineBreak]: ({ key: e }) =>
                            a().createElement('span', { key: e, 'data-block-type': tt.LineBreak, className: st }),
                        [tt.NewLine]: ({ elementList: e, key: t }) =>
                            a().createElement('span', { key: t, 'data-block-type': tt.NewLine, className: ot }, e),
                        [tt.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': tt.NoBreakWrapper, className: lt },
                                e,
                            ),
                    },
                    Et = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, i) => {
                                const r = `${u}_${i}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        t = e.blockType,
                                        u = Et(e, mt[t], r);
                                    n.push(...u);
                                } else n.push(t({ elementList: [a], textBlock: e, key: r }));
                            }),
                            n
                        );
                    },
                    At = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            n = e.blockType,
                                            a = mt[n],
                                            i = Et(e, a, t);
                                        return (
                                            n === tt.NoBreakWrapper
                                                ? u.push(a({ elementList: i, textBlock: e, key: `${t}` }))
                                                : u.push(...i),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    },
                    gt = (e, t, u, n) => {
                        let a = t.exec(e),
                            i = 0;
                        for (; a; ) i !== a.index && u(e.slice(i, a.index)), n(a), (i = t.lastIndex), (a = t.exec(e));
                        i !== e.length && u(e.slice(i));
                    },
                    ft = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    ht = (e) => {
                        const t = [];
                        return (
                            gt(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var u;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((u = e), u.match(ft) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    Ft = it
                        ? (e) => {
                              const t = [];
                              return (
                                  gt(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...ht(e[0]));
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
                              let i = 0;
                              for (; n; ) {
                                  const r = t.justifyContent === ut.FlexEnd ? n.index : u.lastIndex;
                                  a.push(e.slice(i, r)), (i = r), (n = u.exec(e));
                              }
                              return i !== e.length && a.push(e.slice(i)), a;
                          },
                    pt = (e, t = '', u) => {
                        const n = [];
                        return (
                            gt(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: tt.Word, colorTag: t, childList: Ft(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        a = at[u.charAt(0)];
                                    a === tt.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: tt.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: tt.NewLine,
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
                    bt = (e, t, u = '', n) => {
                        const a = [];
                        return (
                            gt(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...pt(e, u, n));
                                },
                                (e) => {
                                    const i = e[1],
                                        r = void 0 === t[i] ? e[0] : t[i];
                                    'string' == typeof r || 'number' == typeof r
                                        ? a.push(...pt(String(r), u, n))
                                        : a.push({ blockType: tt.Binding, colorTag: u, childList: [r] });
                                },
                            ),
                            a
                        );
                    },
                    vt = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === tt.NoBreakWrapper) e.childList.push(n), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: tt.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    Dt = (e, t = {}, u) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === tt.NoBreakSymbol
                                        ? ((u = !0), t.push(...vt(t.pop(), e)))
                                        : (u ? t.push(...vt(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    gt(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...bt(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...bt(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })(H(e).replace(/&zwnbsp;/g, '\ufeff'), t, u),
                        );
                        return At(n);
                    },
                    Bt = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    wt = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Ct = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = wt(e, t),
                            a = e.textContent.length,
                            i = e.offsetWidth / a,
                            r = Math.ceil(n / i);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / i);
                            return n >= u ? [!0, u + r] : [!1, n];
                        }
                        const l = Math.max(u + r, 0);
                        return a < l ? [!1, 0] : [!0, l];
                    },
                    kt = (e, t, u, n, i, r) => {
                        let l = -1,
                            s = null;
                        for (let o = u; o >= 0; o--) {
                            const u = e[o],
                                c = Number(e[o].getAttribute('data-block-type'));
                            if (c === tt.LineBreak || c === tt.NewLine || c === tt.Binding) continue;
                            const d = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = Ct(u, n, i),
                                    c = e[0],
                                    _ = e[1];
                                if (!c) {
                                    _ > 0 && (i -= _);
                                    continue;
                                }
                                const m = d.slice(0, d.length - _) + r,
                                    E = t[o];
                                (s = a().cloneElement(E, E.props, m)), (l = o);
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[o],
                                    _ = c.props.children,
                                    m = kt(e, _, e.length - 1, n, i, r),
                                    E = m[0],
                                    A = m[1];
                                if (!(E < 0)) {
                                    const e = _.slice(0, E);
                                    (s = a().cloneElement(c, c.props, e, A)), (l = o);
                                    break;
                                }
                                i -= d.length;
                            }
                        }
                        return [l, s];
                    },
                    yt = (e, t, u, n = '...') => {
                        const a = [...t],
                            i = e.current;
                        if (!i) return [a, !1];
                        const r = u.height,
                            l = u.width,
                            s = i.lastElementChild;
                        if (!Bt(s, r) && wt(s, l) <= 0) return [a, !1];
                        const o = i.children,
                            c = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const a = u + Math.ceil(0.5 * (n - u));
                                    Bt(e[a], t) ? (n = a - 1) : (u = a + 1);
                                }
                                return u - 1;
                            })(o, r);
                        if (c < 0) return [a, !1];
                        const d = kt(o, a, c, l, n.length, n),
                            _ = d[0],
                            m = d[1];
                        return m && (a.splice(_, 1, m), a.splice(_ + 1)), [a, !0];
                    },
                    xt = a().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: i,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: l = !1,
                            customTooltipArgs: s,
                            targetId: o,
                            justifyContent: c = ut.FlexStart,
                            alignContent: d = ut.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const m = (0, n.useRef)(null),
                                E = (0, n.useRef)({ height: 0, width: 0 }),
                                A = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                g = A[0],
                                f = A[1],
                                h = (0, n.useMemo)(() => Dt(e, i, { justifyContent: c }), [i, c, e]),
                                F = (0, n.useMemo)(() => {
                                    if (
                                        r &&
                                        g.isTruncated &&
                                        (!i || !Object.values(i).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, s, {
                                                stringifyKwargs: i ? JSON.stringify(i) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [i, r, o, e, s, g.isTruncated]),
                                b = (0, n.useCallback)(
                                    (e) => {
                                        (E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height);
                                        const t = yt(m, h, E.current, _),
                                            n = t[0],
                                            a = t[1];
                                        f({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), u && u(a);
                                    },
                                    [u, _, h],
                                ),
                                v = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: d }), [d, c]);
                            return (
                                ((e, t, u = !0) => {
                                    const a = (0, n.useCallback)(
                                        (e) => {
                                            const u = e[0];
                                            t && t(u);
                                        },
                                        [t],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !u) return;
                                        const t = new Qe.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, u, e]);
                                })(m, b, l),
                                a().createElement(
                                    'div',
                                    {
                                        className: p()(
                                            et.base,
                                            t,
                                            et.base__zeroPadding,
                                            l && et.base__isTruncationAvailable,
                                        ),
                                        style: v,
                                    },
                                    a().createElement('div', { className: et.unTruncated, ref: m }, h),
                                    a().createElement(
                                        Je,
                                        {
                                            tooltipArgs: F,
                                            className: p()(
                                                et.tooltip,
                                                et[`tooltip__justify-${c}`],
                                                et[`tooltip__align-${d}`],
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            {
                                                className: p()(
                                                    et.truncated,
                                                    !g.isTruncateFinished && l && et.truncated__hide,
                                                ),
                                                style: v,
                                            },
                                            g.isTruncateFinished && l ? g.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    St = {
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
                    Tt = [
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
                function Lt() {
                    return (
                        (Lt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Lt.apply(null, arguments)
                    );
                }
                class Ot extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && ge(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && ge(this.props.soundClick);
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
                            i = e.side,
                            r = e.type,
                            l = e.classNames,
                            s = e.onMouseEnter,
                            o = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            u[n] = e[n];
                                        }
                                    return u;
                                })(e, Tt)),
                            m = p()(St.base, St[`base__${r}`], St[`base__${i}`], null == l ? void 0 : l.base),
                            E = p()(St.icon, St[`icon__${r}`], St[`icon__${i}`], null == l ? void 0 : l.icon),
                            A = p()(St.glow, null == l ? void 0 : l.glow),
                            g = p()(St.caption, St[`caption__${r}`], null == l ? void 0 : l.caption),
                            f = p()(St.goto, null == l ? void 0 : l.goto);
                        return a().createElement(
                            'div',
                            Lt(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(o),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== r && a().createElement('div', { className: St.shine }),
                            a().createElement('div', { className: E }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: g }, t),
                            n && a().createElement('div', { className: f }, n),
                        );
                    }
                }
                let Rt;
                (Ot.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.responsiveHeader = 'responsiveHeader'),
                            (e.responsiveClosePosition = 'responsiveClosePosition'),
                            (e.disableResponsiveContentPosition = 'disableResponsiveContentPosition');
                    })(Rt || (Rt = {}));
                function It(e, t, u) {
                    const a = (0, n.useContext)(E);
                    let i = Object.entries(a).filter(([e, t]) => !0 === t && e in s);
                    return (
                        u && (i = i.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const n = i.map((e) =>
                                p()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + W(t))(u, e[0])]),
                            );
                            return (e[u] = p()(t[u], ...n)), e;
                        }, {})
                    );
                }
                const Nt = {
                        base: 'DefaultDialogTemplate_base_d2',
                        topRight: 'DefaultDialogTemplate_topRight_eb',
                        center: 'DefaultDialogTemplate_center_b4',
                        center__shown: 'DefaultDialogTemplate_center__shown_e1',
                        windowIn: 'DefaultDialogTemplate_windowIn_3b',
                        center__withIcon: 'DefaultDialogTemplate_center__withIcon_f9',
                        base__extraSmallHeight: 'DefaultDialogTemplate_base__extraSmallHeight_f5',
                        center__responsive: 'DefaultDialogTemplate_center__responsive_21',
                        base__smallHeight: 'DefaultDialogTemplate_base__smallHeight_52',
                        icon: 'DefaultDialogTemplate_icon_36',
                        icon__responsive: 'DefaultDialogTemplate_icon__responsive_e0',
                        title: 'DefaultDialogTemplate_title_c6',
                        title__responsive: 'DefaultDialogTemplate_title__responsive_6e',
                        content: 'DefaultDialogTemplate_content_22',
                        footer: 'DefaultDialogTemplate_footer_4e',
                        buttons: 'DefaultDialogTemplate_buttons_f7',
                        divider: 'DefaultDialogTemplate_divider_d5',
                        divider__noContent: 'DefaultDialogTemplate_divider__noContent_3f',
                        divider__noFooter: 'DefaultDialogTemplate_divider__noFooter_10',
                        closeBtn: 'DefaultDialogTemplate_closeBtn_5e',
                        closeBtn__responsive: 'DefaultDialogTemplate_closeBtn__responsive_49',
                    },
                    Mt = (0, n.memo)(
                        ({
                            isShown: e = !0,
                            classMix: t,
                            onClose: u,
                            icon: i,
                            topRight: r,
                            title: l,
                            content: s,
                            buttons: o,
                            footer: c,
                            displayFlags: d,
                            classNames: _,
                        }) => {
                            const m = ((e, t) => Object.keys(t).reduce((t, u) => ((t[u] = e.includes(u)), t), {}))(
                                    d,
                                    Rt,
                                ),
                                E = m.responsiveHeader,
                                A = m.responsiveClosePosition,
                                g = m.disableResponsiveContentPosition,
                                f = It(['base'], Nt),
                                h = (0, n.useCallback)(() => {
                                    u && u();
                                }, [u]),
                                F = p()(f.base, t),
                                b = p()(
                                    Nt.center,
                                    i && Nt.center__withIcon,
                                    e && Nt.center__shown,
                                    !g && Nt.center__responsive,
                                    null == _ ? void 0 : _.center,
                                ),
                                v = p()(Nt.icon, E && Nt.icon__responsive, null == _ ? void 0 : _.icon),
                                D = p()(Nt.title, E && Nt.title__responsive),
                                B = p()(Nt.closeBtn, A && Nt.closeBtn__responsive),
                                w = p()(
                                    Nt.divider,
                                    !s && Nt.divider__noContent,
                                    !c && Nt.divider__noFooter,
                                    null == _ ? void 0 : _.divider,
                                );
                            return a().createElement(
                                'div',
                                { className: F },
                                a().createElement(
                                    'div',
                                    { className: Nt.topRight },
                                    r,
                                    a().createElement(
                                        'div',
                                        { className: B },
                                        a().createElement(Ot, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: h,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: b },
                                    i && a().createElement('div', { className: v }, i),
                                    l && a().createElement('div', { className: D }, l),
                                    s && a().createElement('div', { className: Nt.content }, s),
                                    a().createElement('div', { className: w }),
                                    c && a().createElement('div', { className: Nt.footer }, c),
                                    o && a().createElement('div', { className: Nt.buttons }, o),
                                ),
                            );
                        },
                    ),
                    Pt = 'RecruitIcon_base_dd',
                    Wt = 'RecruitIcon_block_ea',
                    Ht = 'RecruitIcon_block__backgroundIcon_32',
                    jt = 'RecruitIcon_icon_06',
                    $t = 'RecruitIcon_icon__standartIcon_0e',
                    Gt = 'RecruitIcon_voiceoverIcon_97',
                    Ut = 'RecruitIcon_separator_b7',
                    Vt = 'RecruitIcon_separator__small_8f',
                    zt = (e) => (e ? { backgroundImage: `url(${e})` } : void 0),
                    qt = ({ hasVoiceover: e = !1, icon: t, bgIcon: u }) =>
                        a().createElement(
                            'div',
                            { className: Pt },
                            a().createElement(
                                'div',
                                { className: p()(Wt, u && Ht), style: zt(u) },
                                a().createElement('div', { className: p()(jt, u && $t), style: zt(t) }),
                            ),
                            a().createElement('div', { className: p()(Ut, u && Vt) }),
                            e && a().createElement('div', { className: Gt }),
                        );
                function Kt() {}
                function Yt() {
                    return !1;
                }
                console.log;
                var Zt = u(9174);
                function Xt(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return Jt(e, t);
                                var u = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === u && e.constructor && (u = e.constructor.name),
                                    'Map' === u || 'Set' === u
                                        ? Array.from(e)
                                        : 'Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                          ? Jt(e, t)
                                          : void 0
                                );
                            }
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
                function Jt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const Qt = (e) => (0 === e ? window : window.subViews.get(e));
                var eu = u(3946);
                const tu = (e) => {
                        const t = {
                            skillsDataBefore: e.object('tankmanBefore.skillList'),
                            skillsDataAfter: e.object('tankmanAfter.skillList'),
                            majorSkillsBefore: e.array('tankmanBefore.skillList.majorSkills'),
                            bonusSkillsBefore: e.array('tankmanBefore.skillList.bonusSkills'),
                            majorSkillsAfter: e.array('tankmanAfter.skillList.majorSkills'),
                            bonusSkillsAfter: e.array('tankmanAfter.skillList.bonusSkills'),
                        };
                        return {
                            skillsDataBefore: (0, eu.Om)(
                                () => ({
                                    skillsEfficiency: t.skillsDataBefore.get().skillsEfficiency,
                                    majorSkills: t.majorSkillsBefore.get(),
                                    bonusSkills: t.bonusSkillsBefore.get(),
                                }),
                                { equals: Yt },
                            ),
                            skillsDataAfter: (0, eu.Om)(
                                () => ({
                                    skillsEfficiency: t.skillsDataAfter.get().skillsEfficiency,
                                    majorSkills: t.majorSkillsAfter.get(),
                                    bonusSkills: t.bonusSkillsAfter.get(),
                                }),
                                { equals: Yt },
                            ),
                        };
                    },
                    uu = ((e, t) => {
                        const u = (0, n.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: l, children: s, mocks: o }) {
                                const c = (0, n.useRef)([]),
                                    d = (u, n, a) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = Qt,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
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
                                                const l = (e) => {
                                                    const a = u(t),
                                                        i = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (u, i) => {
                                                        const s = 'string' == typeof i ? `${n}.${i}` : n,
                                                            o = r.O.view.addModelObserver(s, t, !0);
                                                        return a.set(o, u), e && u(l(i)), o;
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, t) => {
                                                        const u = l(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = l(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = Xt(a.keys()); !(e = u()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            s =
                                                'real' === u
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === u ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            _ = e({
                                                mode: u,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : o(e),
                                                            a = Zt.LO.box(n, { equals: Yt });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, Zt.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : o(e),
                                                            a = Zt.LO.box(n, { equals: Yt });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, Zt.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = o(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = Zt.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, Zt.aD)((t) => {
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
                                                                i = Object.entries(a),
                                                                r = i.reduce(
                                                                    (e, [t, u]) => ((e[u] = Zt.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, Zt.aD)((e) => {
                                                                            i.forEach(([t, u]) => {
                                                                                r[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: u, model: _, externalModel: s, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === u && a ? a.controls(m) : t(m),
                                            externalModel: s,
                                            mode: u,
                                        };
                                    },
                                    _ = (0, n.useRef)(!1),
                                    m = (0, n.useState)(i),
                                    E = m[0],
                                    A = m[1],
                                    g = (0, n.useState)(() => d(i, l, o)),
                                    f = g[0],
                                    h = g[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        _.current ? h(d(E, l, o)) : (_.current = !0);
                                    }, [o, E, l]),
                                    (0, n.useEffect)(() => {
                                        A(i);
                                    }, [i]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    a().createElement(u.Provider, { value: f }, s)
                                );
                            },
                            () => (0, n.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['name']), {
                                iconModel: e.object('iconModel.icon'),
                                bgIconModel: e.object('iconModel.bgIcon'),
                                computes: tu(e),
                            }),
                        Kt,
                    ),
                    nu = uu[0],
                    au = uu[1],
                    iu = 'WarningText_base_10',
                    ru = 'WarningText_alertIcon_8f',
                    lu = (0, n.memo)(({ className: e, children: t }) =>
                        a().createElement(
                            'div',
                            { className: p()(iu, e) },
                            a().createElement('div', { className: ru }),
                            t,
                        ),
                    );
                var su = u(7030);
                const ou = {
                    base: 'RoleIcon_base_51',
                    base__small: 'RoleIcon_base__small_68',
                    base__c_14x14: 'RoleIcon_base__c_14x14_8f',
                    base__c_18x18: 'RoleIcon_base__c_18x18_0b',
                    base__c_24x24_new: 'RoleIcon_base__c_24x24_new_fe',
                    base__c_24x24: 'RoleIcon_base__c_24x24_52',
                    base__c_30x30_red: 'RoleIcon_base__c_30x30_red_85',
                    base__c_30x30: 'RoleIcon_base__c_30x30_e9',
                    base__c_40x40: 'RoleIcon_base__c_40x40_99',
                    base__medium: 'RoleIcon_base__medium_5d',
                    base__white: 'RoleIcon_base__white_2a',
                    base__big: 'RoleIcon_base__big_b4',
                };
                let cu;
                !(function (e) {
                    (e.small = 'small'),
                        (e.c14x14 = 'c_14x14'),
                        (e.c18x18 = 'c_18x18'),
                        (e.c24x24 = 'c_24x24'),
                        (e.c24x24_new = 'c_24x24_new'),
                        (e.c30x30 = 'c_30x30'),
                        (e.c40x40 = 'c_40x40'),
                        (e.c30x30_red = 'c_30x30_red'),
                        (e.medium = 'medium'),
                        (e.white = 'white'),
                        (e.big = 'big');
                })(cu || (cu = {}));
                const du = a().memo(function ({ role: e, size: t = cu.c30x30, className: u }) {
                        const i = (0, n.useMemo)(() => {
                            try {
                                var u;
                                const n =
                                    null == (u = R.images.gui.maps.icons.tankmen.roles.$dyn(t))
                                        ? void 0
                                        : u.$dyn(e.replace(/-/g, '_'));
                                if (!n) throw Error;
                                return { backgroundImage: `url(${n})` };
                            } catch (t) {
                                console.error('Cant find resource in RoleIcon: ', e);
                            }
                        }, [e, t]);
                        return a().createElement('div', { style: i, className: p()(ou.base, ou[`base__${t}`], u) });
                    }),
                    _u = 100,
                    mu = 'new_skill';
                let Eu;
                function Au(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
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
                })(Eu || (Eu = {}));
                function gu(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function fu(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function hu(e) {
                    if (0 !== e.length) return Au(e, e.length - 1);
                }
                const Fu = {
                    base: 'EfficiencyIndicator_base_34',
                    base__big: 'EfficiencyIndicator_base__big_a1',
                    base__large: 'EfficiencyIndicator_base__large_dc',
                    base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
                let pu;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large');
                })(pu || (pu = {}));
                const bu = (0, n.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = -1,
                        className: u,
                        targetId: n = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: i = pu.Normal,
                    }) => {
                        const r = -1 === e,
                            l = r
                                ? { tooltipId: 'crewSkillUntrained' }
                                : { tooltipId: 'skillsEfficiency', skillEfficiency: e, tankmanID: t };
                        return a().createElement(
                            Ze,
                            { targetId: n, args: l, isEnabled: -1 !== t },
                            a().createElement(
                                'div',
                                { className: p()(Fu.base, Fu[`base__${i}`], r && Fu.base__untrained, u) },
                                r
                                    ? a().createElement('div', { className: Fu.icon })
                                    : a().createElement(
                                          'div',
                                          { className: p()(Fu.percent, 1 === e && Fu.percent__full) },
                                          j($.Z5.getNumberFormat(100 * e, $.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let vu;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(vu || (vu = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let Du;
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
                })(Du || (Du = {}));
                let Bu;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(Bu || (Bu = {}));
                const wu = a().memo(function ({ blinkStyle: e, isEnabled: t, children: u }) {
                        return a().createElement(su.animated.div, { style: t && e ? e : void 0 }, u);
                    }),
                    Cu = 'AcceleratedTrainingIcon_base_4f',
                    ku = 'AcceleratedTrainingIcon_icon_45',
                    yu = (0, n.memo)(({ classMix: e, targetId: t }) =>
                        a().createElement(
                            xe,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                                targetId: t,
                            },
                            a().createElement(
                                'div',
                                { className: p()(Cu, e) },
                                a().createElement('div', { className: ku }),
                            ),
                        ),
                    );
                let xu, Su, Tu, Lu, Ou, Ru, Iu;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Default = 'default'),
                        (e.Overlap = 'overlap'),
                        (e.ExtraOverlap = 'extraOverlap');
                })(xu || (xu = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp');
                    })(Su || (Su = {})),
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
                    })(Tu || (Tu = {})),
                    (function (e) {
                        (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                    })(Lu || (Lu = {})),
                    (function (e) {
                        (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                    })(Ou || (Ou = {})),
                    (function (e) {
                        (e.Major = 'major'), (e.Bonus = 'bonus');
                    })(Ru || (Ru = {})),
                    (function (e) {
                        (e.Learned = 'learned'), (e.Learning = 'learning');
                    })(Iu || (Iu = {}));
                const Nu = (e) => (e.level < _u ? Iu.Learning : Iu.Learned),
                    Mu = (e) =>
                        (function (e, t) {
                            for (let u = e.length - 1; u >= 0; u--) {
                                const n = gu(e[u]);
                                if (t(n, u, e)) return n;
                            }
                        })(e, (e) => e.level === _u),
                    Pu = ({ name: e, level: t, customName: u, skillType: n, skillIndex: a, tooltipData: i }) => {
                        const r = { targetId: i.targetId, isEnabled: i.isEnabled };
                        return e === mu
                            ? n === Ru.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: i.tankmanID, skillIndex: a }, i.args),
                                      },
                                      r,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      r,
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
                                              tankmanID: i.tankmanID,
                                              skillName: e,
                                              isBonus: n === Ru.Bonus,
                                              level: t,
                                              customName: u,
                                          },
                                          i.args,
                                      ),
                                  },
                                  r,
                              );
                    },
                    Wu = (e, t) => (e === Ou.c44x44 ? pu.Large : t ? pu.Big : pu.Normal),
                    Hu = (e, t) => {
                        const u = Au(e, t);
                        return null == u ? void 0 : u.name;
                    },
                    ju = (e, t) => {
                        const u = Au(e, t);
                        return null == u ? void 0 : u.level;
                    },
                    $u = 33,
                    Gu = 0,
                    Uu = !0,
                    Vu = 'play';
                const zu = [
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
                function qu() {
                    return (
                        (qu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        qu.apply(null, arguments)
                    );
                }
                const Ku = (0, n.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            i = e.getImageSource,
                            r = e.frameCount,
                            l = e.onAnimate,
                            s = e.frameTime,
                            o = void 0 === s ? $u : s,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? Gu : c,
                            _ = e.lastFrameIndex,
                            m = void 0 === _ ? r - 1 : _,
                            E = e.loop,
                            A = void 0 === E ? Uu : E,
                            g = e.state,
                            f = void 0 === g ? Vu : g,
                            h = e.onAnimationDone,
                            F = e.onAnimationComplete,
                            p = e.poster,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, zu);
                        const v = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = v.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y);
                                    };
                                switch (f) {
                                    case 'play':
                                        return (function () {
                                            const e = Xu(d, m, i),
                                                t = Yu(d, m),
                                                n = window.setInterval(() => {
                                                    const a = t(),
                                                        i = e.get(a);
                                                    i
                                                        ? (null == l || l(a, i),
                                                          u(i),
                                                          a === m &&
                                                              (null == F || F(),
                                                              A || (null == h || h(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, o);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && p ? { path: p, x: 0, y: 0 } : i(d),
                                                t = new Image();
                                            t.src = e.path;
                                            const n = () => u(Zu(e, t));
                                            return (
                                                t.addEventListener('load', n), () => t.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [o, i, d, m, A, l, F, h, p, f]),
                            a().createElement('canvas', qu({}, b, { width: t, height: u, ref: v }))
                        );
                    }),
                    Yu = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return (u += 1), u > t && (u = e), n;
                        };
                    },
                    Zu = (e, t) => Object.assign({}, e, { img: t }),
                    Xu = (e, t, u) => {
                        const n = new Map(),
                            a = {};
                        for (let i = e; i <= t; i++) {
                            const e = u(i),
                                t = a[e.path];
                            if (t) n.set(i, Zu(e, t));
                            else {
                                const t = new Image();
                                (a[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${i})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(i, Zu(e, t));
                            }
                        }
                        return n;
                    };
                function Ju(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (n) => {
                        const a = n % u,
                            i = (a % t.columns) * e.width,
                            r = Math.trunc(a / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / u)), x: i, y: r };
                    };
                }
                function Qu(e) {
                    return (t) => `${e}${t}`;
                }
                const en = () => {
                        const e = (0, n.useState)(r.O.view.getScale()),
                            t = e[0],
                            u = e[1];
                        return (
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    u(r.O.view.getScale());
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
                    tn = [
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
                function un() {
                    return (
                        (un = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        un.apply(null, arguments)
                    );
                }
                let nn;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(nn || (nn = {}));
                const an = (e, t, u) => {
                        const n = new Image();
                        (n.src = u(t)), e.push(n);
                    },
                    rn =
                        ((0, n.memo)((e) => {
                            let t = e.width,
                                u = e.height,
                                i = e.getSrcByFrame,
                                r = e.frameCount,
                                l = e.onAnimate,
                                s = void 0 === l ? () => {} : l,
                                o = e.frameTime,
                                c = void 0 === o ? 33 : o,
                                d = e.initialFrameIndex,
                                _ = void 0 === d ? 0 : d,
                                m = e.loop,
                                E = void 0 === m || m,
                                A = e.state,
                                g = void 0 === A ? nn.Play : A,
                                f = e.onAnimationComplete,
                                h = void 0 === f ? () => {} : f,
                                F = e.revers,
                                p = void 0 !== F && F,
                                b = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            u[n] = e[n];
                                        }
                                    return u;
                                })(e, tn);
                            const v = (0, n.useRef)(null);
                            return (
                                (0, n.useEffect)(() => {
                                    const e = v.current;
                                    if (!e) return;
                                    const n = r - 1,
                                        a = e.getContext('2d'),
                                        l = (n) => {
                                            a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, t, u);
                                        };
                                    if ('stop' === g) {
                                        const e = i(0),
                                            t = new Image();
                                        t.src = e;
                                        const u = () => l(t);
                                        return t.addEventListener('load', u), () => t.removeEventListener('load', u);
                                    }
                                    const o = ((e, t, u) => {
                                            const n = [];
                                            if (u) for (let u = e; u >= 0; u--) an(n, u, t);
                                            else for (let u = 0; u < e; u++) an(n, u, t);
                                            return n;
                                        })(r, i, p),
                                        d = ((e, t = 0) => {
                                            let u = t;
                                            return () => {
                                                const t = u;
                                                return (u += 1), u > e && (u = 0), t;
                                            };
                                        })(n, _),
                                        m = setInterval(() => {
                                            const e = d(),
                                                t = o[e];
                                            l(o[e]), s(e, t), e === n && (h(), E || clearInterval(m));
                                        }, c);
                                    return () => clearInterval(m);
                                }, [r, c, i, u, _, E, s, h, g, t, p]),
                                a().createElement('canvas', un({}, b, { width: t, height: u, ref: v }))
                            );
                        }),
                        (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2)),
                    ln = (e) => -(Math.cos(Math.PI * e) - 1) / 2,
                    sn = {
                        base: 'AnimatedLostSkill_base_55',
                        base__c_24x24: 'AnimatedLostSkill_base__c_24x24_d5',
                        base__c_44x44: 'AnimatedLostSkill_base__c_44x44_72',
                        icon: 'AnimatedLostSkill_icon_d4',
                    },
                    on = a().memo(function ({ type: e, index: t, totalAmount: u, className: i, size: l }) {
                        const s = (0, n.useState)(nn.Stop),
                            o = s[0],
                            c = s[1],
                            d = en(),
                            _ =
                                l === Ou.c44x44
                                    ? ((e) => ({
                                          width: 96,
                                          height: 96,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 2, columns: 21 },
                                          getChunkPath: Qu(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                          ),
                                      }))(e)
                                    : ((e) => ({
                                          width: 64,
                                          height: 64,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 1, columns: 24 },
                                          getChunkPath: Qu(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                          ),
                                      }))(e),
                            m = Ju(_),
                            E = l === Ou.c44x44 ? 60 : 36,
                            A = (0, su.useSpring)(
                                () => ({
                                    from: { x: 0 },
                                    to: { x: r.O.view.remToPx(E) },
                                    config: { duration: 300, easing: rn },
                                    delay: 600 - 100 * t,
                                }),
                                [t, E, d],
                            )[0];
                        return (
                            (0, n.useEffect)(() => {
                                const e = setTimeout(() => c(nn.Play), 100 * (u - 1) - 100 * t);
                                return () => clearTimeout(e);
                            }, [t, u]),
                            a().createElement(
                                xe,
                                { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                                a().createElement(
                                    su.animated.div,
                                    { style: A, className: p()(sn.base, sn[`base__${l}`], i) },
                                    a().createElement(
                                        'div',
                                        { className: sn.icon },
                                        a().createElement(Ku, {
                                            width: _.width,
                                            height: _.height,
                                            frameCount: _.frameCount,
                                            getImageSource: m,
                                            loop: !1,
                                            state: o,
                                            style: { transform: `scale(${d})` },
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    cn = 'AnimatedNewSkill_base_0f';
                function dn(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return _n(e, t);
                                var u = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === u && e.constructor && (u = e.constructor.name),
                                    'Map' === u || 'Set' === u
                                        ? Array.from(e)
                                        : 'Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                          ? _n(e, t)
                                          : void 0
                                );
                            }
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
                function _n(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const mn = new Map();
                let En = null;
                const An = () => {
                        mn.size
                            ? En ||
                              (En = window.setInterval(() => {
                                  for (var e, t = dn(mn.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : En && (clearInterval(En), (En = null));
                    },
                    gn = ({ type: e, state: t }) => {
                        const u = ((e, t) => ({
                                width: 24,
                                height: 24,
                                frameCount: 42,
                                chunk: { count: 1, columns: 42, rows: 1 },
                                getChunkPath: Qu(`R.images.gui.maps.icons.sequence.new_skill.${e}_${t}_`),
                            }))(e, t),
                            i = Ju(u),
                            r = (0, n.useState)(nn.Stop),
                            l = r[0],
                            s = r[1];
                        return (
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    s(nn.Play);
                                };
                                var t;
                                return (
                                    (t = e),
                                    mn.set(t, t),
                                    An(),
                                    () =>
                                        ((e) => {
                                            mn.delete(e), An();
                                        })(e)
                                );
                            }, []),
                            a().createElement(Ku, {
                                width: u.width,
                                height: u.height,
                                frameCount: u.frameCount,
                                getImageSource: i,
                                loop: !1,
                                state: l,
                                onAnimationDone: () => {
                                    s(nn.Stop);
                                },
                                className: cn,
                            })
                        );
                    },
                    fn = ({ size: e, children: t, className: u }) => {
                        const n = en(),
                            i = e === Ou.c44x44 ? 48 : 26,
                            r = (0, su.useSpring)({
                                from: { opacity: 0, marginRight: -i * n },
                                to: [{ marginRight: 0 }, { opacity: 1 }],
                                config: { duration: 400, easing: ln },
                                delay: 800,
                            });
                        return a().createElement(su.animated.div, { style: r, className: u }, t);
                    },
                    hn = a().memo(function ({ isEnabled: e, className: t, children: u }) {
                        const i = (0, su.useSpring)(() => ({ from: { scale: 1 } })),
                            r = i[0],
                            l = i[1];
                        return (
                            (0, n.useEffect)(() => {
                                e &&
                                    l.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: ln },
                                    });
                            }, [e, l]),
                            a().createElement(su.animated.div, { style: e ? r : void 0, className: t }, u)
                        );
                    });
                let Fn;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale');
                })(Fn || (Fn = {}));
                const pn = a().memo(function ({
                        size: e,
                        skillsSignature: t,
                        animationType: u,
                        className: n,
                        children: i,
                    }) {
                        return u === Fn.Scale
                            ? a().createElement(hn, { isEnabled: !0, className: n }, i)
                            : u === Fn.FadeIn
                              ? a().createElement(fn, { size: e, key: t, className: n }, i)
                              : a().createElement('div', { className: n }, i);
                    }),
                    bn = a().memo(function ({ size: e, className: t, children: u }) {
                        const n = e === Ou.c44x44 ? 48 : 26,
                            i = en(),
                            r = (0, su.useSpring)(
                                () => ({
                                    from: { opacity: 1, marginRight: 0 },
                                    to: [{ opacity: 0 }, { marginRight: -n * i }],
                                    config: { duration: 400, easing: ln },
                                }),
                                [i, n],
                            )[0];
                        return a().createElement(su.animated.div, { style: r, className: t }, u);
                    }),
                    vn = ['className', 'children'];
                const Dn = (e) => {
                    let t = e.className,
                        u = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, vn);
                    return a().createElement(Je, { tooltipArgs: Pu(n), className: t }, u);
                };
                let Bn;
                !(function (e) {
                    (e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved');
                })(Bn || (Bn = {}));
                const wn = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let Cn;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(Cn || (Cn = {}));
                const kn = a().memo(function ({ iconName: e, size: t = Cn.c24x24, className: u }) {
                        var n;
                        const i = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e);
                        return a().createElement('div', {
                            style: null !== i ? { backgroundImage: `url(${i})` } : void 0,
                            className: p()(wn.base, wn[`base__${t}`], u),
                        });
                    }),
                    yn = {
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
                    xn = { [Ou.c24x24]: Cn.c22x22, [Ou.c44x44]: Cn.c52x52 },
                    Sn = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: u,
                        type: n,
                        iconName: i,
                        name: r,
                        skillState: l,
                        battleBooster: s,
                        className: o,
                    }) => {
                        const c = s !== Bn.None,
                            d = ((e, t, u, n, a = Bu.Normal) =>
                                e === mu
                                    ? Lu.LightYellow
                                    : a === Bu.Untrained || n
                                      ? t === Iu.Learning
                                          ? Lu.Yellow
                                          : Lu.Grey
                                      : a === Bu.Low
                                        ? u
                                            ? Lu.Grey
                                            : Lu.Red
                                        : t === Iu.Learning
                                          ? Lu.Yellow
                                          : Lu.Grey)(r, l, c, t, u),
                            _ = (!c && u === Bu.Untrained) || t,
                            m = i === mu;
                        return a().createElement(
                            'div',
                            {
                                className: p()(
                                    yn.base,
                                    yn[`base__type${W(n)}`],
                                    yn[`base__state${W(l)}`],
                                    yn[`base__border${W(d)}`],
                                    yn[`base__${e}`],
                                    _ && yn.base__disabled,
                                    o,
                                ),
                            },
                            a().createElement('div', {
                                className: yn.background,
                                style:
                                    n === Ru.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${d}')`,
                                          }
                                        : void 0,
                            }),
                            m && l === Iu.Learned && a().createElement('div', { className: yn.newSkillHighLight }),
                            a().createElement(kn, { iconName: i, size: xn[e], className: yn.icon }),
                            _ && a().createElement('div', { className: yn.disabledOverlay }),
                        );
                    };
                function Tn() {
                    return (
                        (Tn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Tn.apply(null, arguments)
                    );
                }
                const Ln = (e, t) => (e ? Fn.Scale : t ? Fn.FadeIn : Fn.None),
                    On = ({
                        index: e,
                        skill: t,
                        previousSkill: u,
                        skillState: n,
                        skillType: i,
                        size: r,
                        efficiencyState: l,
                        tooltipData: s,
                        skillsSignature: o,
                        blinkStyle: c,
                        isNewSkillAnimated: d = !1,
                        skillAnimationType: _ = Su.None,
                        className: m,
                    }) => {
                        const E = _ === Su.Blink || _ === Su.SlideOutAndBlink,
                            A = _ === Su.SlideOutAndBlink || _ === Su.SlideOut,
                            g = _ === Su.FadeIn,
                            f = {
                                skillIndex: e,
                                name: t.name,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: s,
                                skillType: i,
                            };
                        return d && t.name === mu && r === Ou.c24x24
                            ? a().createElement(
                                  Dn,
                                  Tn({}, f, { className: m }),
                                  a().createElement(gn, { type: i, state: n }),
                              )
                            : a().createElement(
                                  a().Fragment,
                                  null,
                                  u &&
                                      A &&
                                      a().createElement(
                                          bn,
                                          { size: r, className: m, key: u.name },
                                          a().createElement(
                                              wu,
                                              { blinkStyle: c, isEnabled: E },
                                              a().createElement(
                                                  Sn,
                                                  Tn({ size: r, type: i, efficiencyState: l, skillState: n }, u),
                                              ),
                                          ),
                                      ),
                                  a().createElement(
                                      pn,
                                      {
                                          size: r,
                                          skillsSignature: o,
                                          className: m,
                                          animationType: Ln(_ === Su.ScaleUp, g),
                                      },
                                      a().createElement(
                                          Dn,
                                          f,
                                          a().createElement(
                                              wu,
                                              { blinkStyle: c, isEnabled: E },
                                              a().createElement(
                                                  Sn,
                                                  Tn({ size: r, type: i, efficiencyState: l, skillState: n }, t),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    },
                    Rn = {
                        base: 'LostLevelAnimation_base_f6',
                        level: 'LostLevelAnimation_level_f0',
                        level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                        level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                        base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                        base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                    },
                    In = a().memo(function ({ size: e, level: t, withSlideOut: u = !0 }) {
                        const n = (0, su.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                            i = (0, su.useSpring)(() => ({
                                from: { x: r.O.view.remToPx(-5), opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                config: { duration: 300, easing: rn },
                                delay: 700,
                            }))[0],
                            l = (0, su.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [{ opacity: 1 }, { opacity: 0 }],
                                    config: { duration: 150, easing: rn },
                                }),
                                [t],
                            )[0];
                        return a().createElement(
                            'div',
                            { className: p()(Rn.base, Rn[`base__${e}`]) },
                            a().createElement(
                                su.animated.div,
                                { style: u ? i : void 0, className: p()(Rn.level, Rn.level__skillLost) },
                                n.val.to((e) => j(Math.floor(e))),
                            ),
                            a().createElement(
                                su.animated.div,
                                {
                                    style: u ? Object.assign({}, i, l) : l,
                                    className: p()(Rn.level, Rn.level__skillBlur),
                                },
                                n.val.to((e) => j(Math.floor(e))),
                            ),
                        );
                    }),
                    Nn = 'SkillLevel_base_d2',
                    Mn = 'SkillLevel_base__highlighted_e3',
                    Pn = ({ skillLevel: e, isHighlighted: t = !1, className: u }) =>
                        a().createElement(
                            'div',
                            { className: p()(Nn, t && Mn, u) },
                            j(
                                e > 0 && e < 0.01
                                    ? 0.01
                                    : ((e, t = 2) => {
                                          const u = Math.pow(10, t);
                                          return e % 1 > 0 ? Math.round(e * u) / u : e;
                                      })(e),
                            ),
                        ),
                    Wn = ({
                        skillsAmountDiff: e,
                        size: t,
                        skillType: u,
                        wasLearned: n,
                        isAllMajorSkillsLearned: i,
                        skill: r,
                        possibleSkill: l,
                        blinkStyle: s,
                        className: o,
                    }) => {
                        const c = l || r,
                            d = void 0 !== r && void 0 !== l ? l.level - r.level : 0,
                            _ = e > 0,
                            m = e < 0 || d > 0;
                        return !c ||
                            (c.level === _u && 0 === d) ||
                            ((null == l ? void 0 : l.level) === _u && u === Ru.Bonus && d > 0 && !i)
                            ? null
                            : _ || (d < 0 && 0 === e)
                              ? a().createElement(In, { size: t, level: c.level, withSlideOut: _ })
                              : a().createElement(
                                    hn,
                                    { isEnabled: Boolean(n) },
                                    a().createElement(
                                        wu,
                                        { blinkStyle: s, isEnabled: m },
                                        a().createElement(Pn, { skillLevel: c.level, isHighlighted: m, className: o }),
                                    ),
                                );
                    },
                    Hn = {
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
                    jn = ({
                        skills: e,
                        skillType: t = Ru.Major,
                        possibleSkills: u,
                        isAcceleratedTrainingVisible: n = !1,
                        collapseLayout: i = Tu.None,
                        efficiencyState: r,
                        size: l,
                        tooltipData: s,
                        blinkStyle: o,
                        isSkillsEfficiencyLearning: c = !1,
                        isAllMajorSkillsLearned: d = !1,
                        isNewSkillAnimated: _ = !1,
                        className: m,
                    }) => {
                        const E = void 0 === u ? e : u,
                            A = ee(e),
                            g = ee(E),
                            f = A && hu(A),
                            h = hu(e),
                            F = Mu(E),
                            b = hu(E),
                            v = u ? e.length - u.length : 0,
                            D = r !== Bu.Low || c,
                            B = ((e) => fu(e, (e) => e.name).join())(E);
                        return a().createElement(
                            'div',
                            { className: p()(Hn.base, Hn[`base__${l}`], Hn[`base__collapse${W(i)}`], m) },
                            ((e, t, u, n, a) => {
                                if (!n || !t) return fu(u, (e, t) => a(e, Su.None, t));
                                const i = new Map(fu(t, ({ name: e, level: t }) => [e, t])),
                                    r = new Map(fu(e, ({ name: e, level: t }) => [e, t]));
                                let l = !1;
                                return fu(u, (s, o) => {
                                    const c = s.name,
                                        d = s.level,
                                        _ = c === mu,
                                        m = Hu(e, o),
                                        E = _ ? ju(e, o) : r.get(c),
                                        A = _ ? ju(t, o) : i.get(c),
                                        g = Hu(u, o - 1),
                                        f = Hu(n, o),
                                        h = Hu(n, o + 1);
                                    let F = Su.None;
                                    return (
                                        l || c !== h || g === f || _ || m !== mu
                                            ? _ && o === u.length - 1 && l
                                                ? (F = Su.FadeIn)
                                                : (!_ && !r.has(c)) || (void 0 === m && _) || (E !== d && d === _u)
                                                  ? (F = Su.Blink)
                                                  : A !== E && (F = Su.ScaleUp)
                                            : ((l = !0), (F = r.has(c) ? Su.SlideOut : Su.SlideOutAndBlink)),
                                        a(s, F, o)
                                    );
                                });
                            })(e, A, E, g, (e, u, n) => {
                                const i = Nu(e);
                                return a().createElement(On, {
                                    key: n,
                                    index: n,
                                    skill: e,
                                    skillState: i,
                                    skillType: t,
                                    previousSkill: g && Au(g, n),
                                    skillAnimationType: u,
                                    size: l,
                                    skillsSignature: B,
                                    efficiencyState: r,
                                    tooltipData: s,
                                    blinkStyle: o,
                                    isNewSkillAnimated: _,
                                    className: p()(
                                        Hn.skill,
                                        Hn[`skill__state${W(i)}`],
                                        e === b && Hn.skill__last,
                                        e === F && Hn.skill__lastLearnedSkill,
                                    ),
                                });
                            }),
                            D &&
                                a().createElement(Wn, {
                                    skillsAmountDiff: v,
                                    size: l,
                                    wasLearned: f && h && f.level !== h.level,
                                    skillType: t,
                                    isAllMajorSkillsLearned: d,
                                    skill: h,
                                    possibleSkill: b,
                                    blinkStyle: o,
                                    className: Hn.level,
                                }),
                            n &&
                                a().createElement(yu, {
                                    classMix: Hn.acceleratedTrainingIcon,
                                    targetId: null == s ? void 0 : s.targetId,
                                }),
                            v > 0 &&
                                ((e, t) => {
                                    const u = [];
                                    for (let n = 0; n < e; n++) u.push(t(n));
                                    return u;
                                })(v, (e) =>
                                    a().createElement(on, {
                                        key: e,
                                        index: e,
                                        totalAmount: v,
                                        type: t,
                                        className: Hn.lostSkill,
                                        size: l,
                                    }),
                                ),
                        );
                    };
                function $n() {
                    return (
                        ($n = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        $n.apply(null, arguments)
                    );
                }
                const Gn = ({
                        skills: e,
                        collapseLayout: t = Tu.None,
                        skillType: u = Ru.Major,
                        efficiencyState: n,
                        size: i,
                        tooltipData: r,
                        className: l,
                        isAcceleratedTrainingVisible: s,
                    }) => {
                        const o = hu(e),
                            c = Mu(e),
                            d = n !== Bu.Low && (null == o ? void 0 : o.level) !== _u;
                        return a().createElement(
                            'div',
                            { className: p()(Hn.base, Hn[`base__${i}`], Hn[`base__collapse${W(t)}`], l) },
                            fu(e, (e, t) => {
                                const l = Nu(e);
                                return a().createElement(
                                    Dn,
                                    {
                                        key: t,
                                        skillIndex: t,
                                        name: e.name,
                                        customName: e.customName,
                                        level: e.level,
                                        tooltipData: r,
                                        skillType: u,
                                        className: p()(
                                            Hn.skill,
                                            Hn[`skill__state${W(l)}`],
                                            e === o && Hn.skill__last,
                                            e === c && Hn.skill__lastLearnedSkill,
                                        ),
                                    },
                                    a().createElement(
                                        Sn,
                                        $n({ size: i, type: u, efficiencyState: n, skillState: l }, e),
                                    ),
                                );
                            }),
                            d && o && a().createElement(Pn, { skillLevel: o.level, className: Hn.level }),
                            s &&
                                a().createElement(yu, {
                                    classMix: Hn.acceleratedTrainingIcon,
                                    targetId: null == r ? void 0 : r.targetId,
                                }),
                        );
                    },
                    Un = {
                        base: 'Skills_base_ec',
                        efficiency: 'Skills_efficiency_d0',
                        base__c_44x44: 'Skills_base__c_44x44_c0',
                        rows: 'Skills_rows_e8',
                        bonusRow: 'Skills_bonusRow_4a',
                    };
                function Vn() {
                    return (
                        (Vn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Vn.apply(null, arguments)
                    );
                }
                const zn = ({
                        data: e,
                        dataToCompare: t,
                        classes: u,
                        tankmanID: n = -1,
                        size: i = Ou.c24x24,
                        collapseType: r = xu.None,
                        isSkillTooltipEnabled: l = !1,
                        isAcceleratedTrainingVisible: s = !1,
                        isNewSkillAnimated: o = !1,
                        isEfficiencyVisible: c = !1,
                        isBonusSkillsVisible: d = !0,
                        tooltipsTargetId: _ = R.invalid('resId'),
                        tooltipArgs: m,
                        blinkStyle: E,
                        children: A,
                    }) => {
                        const g = e.majorSkills,
                            f = e.bonusSkills,
                            h = e.skillsEfficiency,
                            F = (null == t ? void 0 : t.skillsEfficiency) || h,
                            b = ((e) => (-1 === e ? Bu.Untrained : e < 1 ? Bu.Low : Bu.Normal))(h),
                            v = void 0 !== t && t.skillsEfficiency !== h,
                            D = b !== Bu.Normal || c || v,
                            B = null == t ? void 0 : t.majorSkills,
                            w = null == t ? void 0 : t.bonusSkills,
                            C = w || f,
                            k = hu(C),
                            y = d && C.length > 0,
                            x = o || void 0 !== t,
                            S = 6 === (null == B ? void 0 : B.length),
                            T = ((e, t, u, n) => {
                                if (9 !== t) return Tu.None;
                                switch (e) {
                                    case xu.Default:
                                        if (u && n) return Tu.NoMargins;
                                        break;
                                    case xu.Overlap:
                                        if (u) return n ? Tu.Overlap : Tu.ReducedMargins;
                                        if (n) return Tu.OnlyLearningOverlap;
                                        break;
                                    case xu.ExtraOverlap:
                                        return u && n
                                            ? Tu.ExtraOverlapWithLevelAndEfficiency
                                            : u
                                              ? Tu.ExtraOverlapWithEfficiency
                                              : n
                                                ? Tu.ExtraOverlapWithLevel
                                                : Tu.ExtraOverlap;
                                }
                                return Tu.None;
                            })(r, C.length, D, b !== Bu.Low && void 0 !== k && k.level < _u),
                            L = {
                                size: i,
                                efficiencyState: b,
                                tooltipData: { targetId: _, isEnabled: l, tankmanID: n, args: m },
                            };
                        return a().createElement(
                            'div',
                            { className: p()(Un.base, Un[`base__${i}`], null == u ? void 0 : u.base) },
                            D &&
                                a().createElement(
                                    wu,
                                    { blinkStyle: E, isEnabled: v && x },
                                    a().createElement(bu, {
                                        efficiencyValue: F,
                                        tankmanID: n,
                                        className: Un.efficiency,
                                        size: Wu(i, y),
                                        targetId: _,
                                    }),
                                ),
                            A,
                            a().createElement(
                                'div',
                                { className: Un.rows },
                                x
                                    ? a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(
                                              jn,
                                              Vn(
                                                  {
                                                      skills: g,
                                                      possibleSkills: B,
                                                      blinkStyle: E,
                                                      isAcceleratedTrainingVisible: s,
                                                      isNewSkillAnimated: o,
                                                      isSkillsEfficiencyLearning: v,
                                                  },
                                                  L,
                                              ),
                                          ),
                                          y &&
                                              a().createElement(
                                                  jn,
                                                  Vn(
                                                      {
                                                          skills: f,
                                                          skillType: Ru.Bonus,
                                                          possibleSkills: w,
                                                          className: Un.bonusRow,
                                                          collapseLayout: T,
                                                          blinkStyle: E,
                                                          isNewSkillAnimated: o,
                                                          isAllMajorSkillsLearned: S,
                                                      },
                                                      L,
                                                  ),
                                              ),
                                      )
                                    : a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(Gn, Vn({ skills: g, isAcceleratedTrainingVisible: s }, L)),
                                          y &&
                                              a().createElement(
                                                  Gn,
                                                  Vn(
                                                      {
                                                          skills: f,
                                                          skillType: Ru.Bonus,
                                                          className: Un.bonusRow,
                                                          collapseLayout: T,
                                                      },
                                                      L,
                                                  ),
                                              ),
                                      ),
                            ),
                        );
                    },
                    qn = 'SkillsWithRole_base_92',
                    Kn = 'SkillsWithRole_role_66',
                    Yn = 'SkillsWithRole_role__glow_93',
                    Zn = ['role', 'size', 'withRoleGlow', 'className', 'isEfficiencyVisible'];
                function Xn() {
                    return (
                        (Xn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Xn.apply(null, arguments)
                    );
                }
                const Jn = (e) => {
                    let t = e.role,
                        u = e.size,
                        n = void 0 === u ? Ou.c44x44 : u,
                        i = e.withRoleGlow,
                        r = e.className,
                        l = e.isEfficiencyVisible,
                        s = void 0 === l || l,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, Zn);
                    return a().createElement(
                        'div',
                        { className: qn },
                        t && a().createElement(du, { role: t, className: p()(Kn, i && Yn) }),
                        a().createElement(zn, Xn({ classes: { base: r }, isEfficiencyVisible: s, size: n }, o)),
                    );
                };
                let Qn;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(Qn || (Qn = {}));
                const ea = (e) => (e < 0.5 ? 4 * Math.pow(e, 3) : 4 * Math.pow(e - 1, 3) + 1),
                    ta = {
                        base: 'Frame_base_e1',
                        base__gray: 'Frame_base__gray_08',
                        base__red: 'Frame_base__red_6b',
                        base__yellow: 'Frame_base__yellow_2d',
                        base__empty: 'Frame_base__empty_31',
                    };
                let ua;
                !(function (e) {
                    (e.Gray = 'gray'), (e.Red = 'red'), (e.Yellow = 'yellow'), (e.Empty = 'empty');
                })(ua || (ua = {}));
                const na = (e, t, u, n) =>
                        n
                            ? e === Bu.Low
                                ? ua.Gray
                                : t < _u
                                  ? ua.Yellow
                                  : ua.Gray
                            : u || t < _u
                              ? e === Bu.Low
                                  ? ua.Red
                                  : ua.Yellow
                              : e === Bu.Low
                                ? ua.Red
                                : ua.Gray,
                    aa = a().memo(function ({
                        isNewSkill: e,
                        isIrrelevant: t,
                        efficiencyState: u,
                        skillLevel: n,
                        className: i,
                    }) {
                        return a().createElement('div', { className: p()(ta.base, ta[`base__${na(u, n, e, t)}`], i) });
                    }),
                    ia = {
                        base: 'TankmanSkill_base_51',
                        base__c_24x24: 'TankmanSkill_base__c_24x24_98',
                        base__c_44x44: 'TankmanSkill_base__c_44x44_62',
                        icon: 'TankmanSkill_icon_fe',
                        icon__new: 'TankmanSkill_icon__new_7a',
                        icon__disable: 'TankmanSkill_icon__disable_fb',
                        disabledPattern: 'TankmanSkill_disabledPattern_da',
                        level: 'TankmanSkill_level_3b',
                        level__skillLost: 'TankmanSkill_level__skillLost_8c',
                        level__skillBlur: 'TankmanSkill_level__skillBlur_6d',
                    };
                let ra;
                !(function (e) {
                    (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                })(ra || (ra = {}));
                a().memo(function ({
                    iconName: e,
                    level: t,
                    size: u = ra.c44x44,
                    isLevelVisible: i = t < _u,
                    isIrrelevant: r,
                    efficiencyState: l,
                    className: s,
                    isSkillLost: o,
                }) {
                    const c = e === mu,
                        d = (l === Bu.Untrained || r) && !c,
                        _ = (0, su.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                        m = (0, su.useSpring)(() => ({ from: { x: -5, opacity: 0 } })),
                        E = m[0],
                        A = m[1],
                        g = (0, su.useSpring)(() => ({ t: 0 })),
                        f = g[0],
                        h = g[1];
                    return (
                        (0, n.useEffect)(() => {
                            h.start({ from: { t: 1 }, to: { t: 0 }, config: { duration: 500 } });
                        }, [A, h, t]),
                        (0, n.useEffect)(
                            () => (
                                A.set({ x: -5, opacity: 0 }),
                                A.start({
                                    reset: !0,
                                    pause: !1,
                                    to: { x: 0, opacity: 1 },
                                    config: { duration: 300, easing: ea },
                                    delay: o ? 700 : 0,
                                    immediate: !o,
                                }),
                                () => {
                                    A.stop();
                                }
                            ),
                            [A, o],
                        ),
                        a().createElement(
                            'div',
                            { className: p()(ia.base, ia[`base__${u}`], s) },
                            a().createElement(kn, {
                                iconName: e,
                                size: Cn.c52x52,
                                className: p()(ia.icon, d && ia.icon__disable, c && ia.icon__new),
                            }),
                            d && a().createElement('div', { className: ia.disabledPattern }),
                            !c &&
                                a().createElement(aa, {
                                    isNewSkill: c,
                                    efficiencyState: l,
                                    skillLevel: t,
                                    isIrrelevant: r,
                                }),
                            i &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        su.animated.div,
                                        { style: E, className: p()(ia.level, o && ia.level__skillLost) },
                                        _.val.to((e) => j(Math.floor(e))),
                                    ),
                                    a().createElement(
                                        su.animated.div,
                                        {
                                            style: Object.assign({}, E, { opacity: f.t.to((e) => e) }),
                                            className: p()(ia.level, ia.level__skillBlur),
                                        },
                                        j(Math.floor(t)),
                                    ),
                                ),
                        )
                    );
                });
                const la = (e) => Math.round(Math.abs(e)),
                    sa = (e, t) => {
                        const u = (0, n.useRef)(null),
                            a = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            r = (0, n.useRef)({
                                isImmediate: !1,
                                isAnimationActive: !0,
                                previousBeforeShift: 0,
                                previousAfterShift: 0,
                            }),
                            l = (0, su.useSpring)(() => ({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                config: { duration: 500, easing: rn },
                                delay: 150,
                                pause: !0,
                            })),
                            s = l[0],
                            o = l[1],
                            c = (0, su.useSpring)(() => ({ opacity: 0 })),
                            d = c[0],
                            _ = c[1],
                            m = (0, su.useSpring)(() => ({ x: 0, opacity: 0 })),
                            E = m[0],
                            A = m[1],
                            g = (0, su.useSpring)(() => ({ x: 0 })),
                            f = g[0],
                            h = g[1];
                        return (
                            ((e, t) => {
                                (0, n.useEffect)(() => {
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
                            })(
                                () => (
                                    (() => {
                                        if (e && u.current && a.current && i.current) {
                                            const e = r.current,
                                                t = e.isImmediate,
                                                n = e.isAnimationActive,
                                                l = e.previousBeforeShift,
                                                s = e.previousAfterShift,
                                                c = u.current.getBoundingClientRect(),
                                                d = a.current.getBoundingClientRect(),
                                                _ = i.current.getBoundingClientRect(),
                                                m = t && n,
                                                E = m ? l : la(_.left - c.right - l),
                                                g = m ? s : la(_.right - d.left + s);
                                            (r.current.isImmediate = !0),
                                                (r.current.previousBeforeShift = E),
                                                (r.current.previousAfterShift = g),
                                                t || o.start({ reset: !0, pause: !1 }),
                                                h.start({
                                                    from: { x: -l },
                                                    to: { x: -E },
                                                    config: { duration: 500, easing: rn },
                                                    delay: 0,
                                                    immediate: t,
                                                }),
                                                A.start({
                                                    from: { x: s, opacity: 0 },
                                                    to: { x: g, opacity: 1 },
                                                    config: { duration: 500, easing: rn },
                                                    delay: 0,
                                                    immediate: t,
                                                    onRest: () => {
                                                        r.current.isAnimationActive = !1;
                                                    },
                                                });
                                        }
                                    })(),
                                    () => {
                                        A.stop();
                                    }
                                ),
                                [o, h, e, A, ...t],
                            ),
                            (0, n.useEffect)(() => {
                                _.start({
                                    from: { opacity: 0 },
                                    to: { opacity: 1 },
                                    config: { duration: 300, easing: rn },
                                    delay: 0,
                                });
                            }, [_]),
                            {
                                arrowStyles: s,
                                skillsAfterStyles: d,
                                skillsAfterMoveStyles: E,
                                skillsBeforeMoveStyles: f,
                                skillsBeforeRef: u,
                                skillsAfterRef: a,
                                arrowRef: i,
                            }
                        );
                    },
                    oa = 'SkillsResult_base_ec',
                    ca = 'SkillsResult_base__withBonusSkills_60',
                    da = 'SkillsResult_background_01',
                    _a = 'SkillsResult_arrowWrapper_69',
                    ma = 'SkillsResult_arrow_12',
                    Ea = 'SkillsResult_skillsWrapper_70',
                    Aa = 'SkillsResult_skillsWrapper__after_06',
                    ga = (0, qe.Pi)(() => {
                        const e = (0, n.useState)(!1),
                            t = e[0],
                            u = e[1],
                            i = au().model,
                            r = C().mediaSize,
                            l = i.computes.skillsDataBefore(),
                            s = i.computes.skillsDataAfter(),
                            o = l.bonusSkills.length > 0,
                            c = r < D.Medium ? ra.c24x24 : ra.c44x44,
                            d = sa(t, [c, s.bonusSkills.length, s.majorSkills.length]),
                            _ = d.arrowStyles,
                            m = d.skillsBeforeMoveStyles,
                            E = d.skillsAfterMoveStyles,
                            A = d.skillsAfterStyles,
                            g = d.skillsAfterRef,
                            f = d.skillsBeforeRef,
                            h = d.arrowRef;
                        return (
                            (0, n.useEffect)(() => {
                                const e = setTimeout(() => u(!0), 200);
                                return () => clearTimeout(e);
                            }, []),
                            a().createElement(
                                'div',
                                { className: p()(oa, o && ca) },
                                a().createElement('div', { className: da }),
                                a().createElement(
                                    'div',
                                    { className: Ea },
                                    a().createElement(
                                        su.animated.div,
                                        { style: Object.assign({}, m), ref: f },
                                        a().createElement(Jn, { data: l, size: c, isEfficiencyVisible: !1 }),
                                    ),
                                ),
                                t &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(
                                            su.animated.div,
                                            { style: _, className: _a, ref: h },
                                            a().createElement('div', { className: ma }),
                                        ),
                                        a().createElement(
                                            'div',
                                            { className: p()(Ea, Aa) },
                                            a().createElement(
                                                su.animated.div,
                                                { style: E, ref: g },
                                                a().createElement(
                                                    su.animated.div,
                                                    { style: Object.assign({}, A) },
                                                    a().createElement(Jn, {
                                                        data: l,
                                                        dataToCompare: s,
                                                        size: c,
                                                        isEfficiencyVisible: !1,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                            )
                        );
                    }),
                    fa = 'Content_base_9e',
                    ha = 'Content_warning_49',
                    Fa = () =>
                        a().createElement(
                            'div',
                            { className: fa },
                            a().createElement(ga, null),
                            a().createElement(
                                lu,
                                { className: ha },
                                R.strings.dialogs.recruitConversionConfirm.warning(),
                            ),
                        ),
                    pa = ['onClose', 'buttons', 'isShown', 'displayFlags'];
                function ba() {
                    return (
                        (ba = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        ba.apply(null, arguments)
                    );
                }
                const va = (0, qe.Pi)((e) => {
                    let t = e.onClose,
                        u = e.buttons,
                        n = e.isShown,
                        i = e.displayFlags,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, pa);
                    const l = au().model;
                    return a().createElement(
                        Mt,
                        ba({ onClose: t, buttons: u, displayFlags: i, isShown: n }, r, {
                            title: a().createElement(xt, { text: l.name.get(), justifyContent: ut.Center }),
                            icon: a().createElement(qt, {
                                icon: l.iconModel.get().path,
                                bgIcon: l.bgIconModel.get().path,
                            }),
                            content: a().createElement(Fa, null),
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    M().render(
                        a().createElement(
                            nu,
                            null,
                            a().createElement(I, null, a().createElement(ze, { Template: va })),
                        ),
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
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, u, n] = deferred[s], i = !0, r = 0; r < t.length; r++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[r]))
                            ? t.splice(r--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(s--, 1);
                        var l = u();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, u, n];
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
        (__webpack_require__.j = 9326),
        (() => {
            var e = { 9326: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [i, r, l] = u,
                        s = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in r) __webpack_require__.o(r, n) && (__webpack_require__.m[n] = r[n]);
                        if (l) var o = l(__webpack_require__);
                    }
                    for (t && t(u); s < i.length; s++)
                        (a = i[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(o);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(3909));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
