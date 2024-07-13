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
                    t.d(u, { mouse: () => l, off: () => o, on: () => i, onResize: () => s, onScaleUpdated: () => r });
                var n = t(2472),
                    a = t(1176);
                const s = (0, n.E)('clientResized'),
                    r = (0, n.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    d = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    l = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, a.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, a.R)(!1);
                        }
                        const s = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const s = `mouse${u}`,
                                            r = d[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(s, i),
                                            n(),
                                            () => {
                                                a &&
                                                    (r(),
                                                    window.removeEventListener(s, i),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, s, {
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
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => s,
                        graphicsQuality: () => i,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
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
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => s });
                var n = t(5959),
                    a = t(514);
                const s = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => r });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    r = { play: Object.assign({}, s, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => l,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => v,
                        events: () => s.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => b,
                        getScale: () => A,
                        getSize: () => _,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => B,
                        isFocused: () => p,
                        pxToRem: () => F,
                        remToPx: () => C,
                        resize: () => E,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => T,
                    });
                var n = t(3722),
                    a = t(6112),
                    s = t(6538),
                    r = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function d(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function l(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function c(e) {
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
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
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
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
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
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => s });
                const n = ['args'],
                    a = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const s = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (t = s[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, n);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = s),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    s = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, a;
                t.d(u, { n: () => n }),
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => s });
                var n = t(3138);
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
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = n.O.view.addModelObserver(e, t, a);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(s) : (this._views[t] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const s = a;
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
                t.d(u, { Sw: () => s.Z, B3: () => d, Z5: () => r.Z5, B0: () => i, ry: () => C });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                var s = t(1358),
                    r = t(8613);
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
                const d = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    m = t(3138);
                const g = ['args'];
                function A(e, u, t, n, a, s, r) {
                    try {
                        var i = e[s](r),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                    return new Promise(function (n, a) {
                                        var s = e.apply(u, t);
                                        function r(e) {
                                            A(s, n, a, r, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(s, n, a, r, i, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (t = s[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    p = () => D(i.CLOSE),
                    h = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var B = t(7572);
                const f = a.instance,
                    b = {
                        DataTracker: s.Z,
                        ViewModel: B.Z,
                        ViewEventType: i,
                        NumberFormatType: d,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => D(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), s) => {
                            const r = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                d = o.x,
                                l = o.y,
                                c = o.width,
                                _ = o.height,
                                E = {
                                    x: m.O.view.pxToRem(d) + r.x,
                                    y: m.O.view.pxToRem(l) + r.y,
                                    width: m.O.view.pxToRem(c),
                                    height: m.O.view.pxToRem(_),
                                };
                            D(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: F(E),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, p);
                        },
                        handleViewEvent: D,
                        onBindingsReady: C,
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
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => s, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    s = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            7720: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n), t.d(n, { p: () => Rt });
                var a = t(6179),
                    s = t.n(a);
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
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var d;
                function l(e, u, t) {
                    const n = (function (e, u) {
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
                        a = (function (e, u) {
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
                        s = Math.min(n, a);
                    return {
                        extraLarge: s === t.extraLarge.weight,
                        large: s === t.large.weight,
                        medium: s === t.medium.weight,
                        small: s === t.small.weight,
                        extraSmall: s === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
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
                })(d || (d = {}));
                const c = i.O.client.getSize('rem'),
                    _ = c.width,
                    E = c.height,
                    m = Object.assign({ width: _, height: E }, l(_, E, o)),
                    g = (0, a.createContext)(m),
                    A = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (t = s[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, A);
                        const n = (0, a.useContext)(g),
                            s = n.extraLarge,
                            i = n.large,
                            o = n.medium,
                            d = n.small,
                            l = n.extraSmall,
                            c = n.extraLargeWidth,
                            _ = n.largeWidth,
                            E = n.mediumWidth,
                            m = n.smallWidth,
                            F = n.extraSmallWidth,
                            C = n.extraLargeHeight,
                            D = n.largeHeight,
                            p = n.mediumHeight,
                            h = n.smallHeight,
                            B = n.extraSmallHeight,
                            f = { extraLarge: C, large: D, medium: p, small: h, extraSmall: B };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && i) return u;
                            if (t.medium && o) return u;
                            if (t.small && d) return u;
                            if (t.extraSmall && l) return u;
                        } else {
                            if (t.extraLargeWidth && c) return r(u, t, f);
                            if (t.largeWidth && _) return r(u, t, f);
                            if (t.mediumWidth && E) return r(u, t, f);
                            if (t.smallWidth && m) return r(u, t, f);
                            if (t.extraSmallWidth && F) return r(u, t, f);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && C) return u;
                                if (t.largeHeight && D) return u;
                                if (t.mediumHeight && p) return u;
                                if (t.smallHeight && h) return u;
                                if (t.extraSmallHeight && B) return u;
                            }
                        }
                        return null;
                    };
                (F.defaultProps = {
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
                    (0, a.memo)(F);
                const C = ({ children: e }) => {
                    const u = (0, a.useContext)(g),
                        t = (0, a.useState)(u),
                        n = t[0],
                        r = t[1],
                        d = (0, a.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                n = i.O.view.pxToRem(u);
                            r(Object.assign({ width: t, height: n }, l(t, n, o)));
                        }, []),
                        c = (0, a.useCallback)(() => {
                            const e = i.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    ((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        i.O.client.events.on('clientResized', d), i.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                i.O.client.events.off('clientResized', d),
                                    i.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [d, c],
                        );
                    const _ = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                    return s().createElement(g.Provider, { value: _ }, e);
                };
                var D = t(6483),
                    p = t.n(D),
                    h = t(926),
                    B = t.n(h);
                let f, b, v;
                !(function (e) {
                    (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const w = () => {
                        const e = (0, a.useContext)(g),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return f.ExtraLarge;
                                    case e.large:
                                        return f.Large;
                                    case e.medium:
                                        return f.Medium;
                                    case e.small:
                                        return f.Small;
                                    case e.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
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
                            r = ((e) => {
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
                        return { mediaSize: n, mediaWidth: s, mediaHeight: r, remScreenWidth: u, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const S = {
                        [b.ExtraSmall]: '',
                        [b.Small]: B().SMALL_WIDTH,
                        [b.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [b.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    I = {
                        [v.ExtraSmall]: '',
                        [v.Small]: B().SMALL_HEIGHT,
                        [v.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [v.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [f.ExtraSmall]: '',
                        [f.Small]: B().SMALL,
                        [f.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [f.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [f.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (t = s[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, T);
                        const a = w(),
                            r = a.mediaWidth,
                            i = a.mediaHeight,
                            o = a.mediaSize;
                        return s().createElement('div', P({ className: p()(t, S[r], I[i], x[o]) }, n), u);
                    },
                    y = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (t = s[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, y);
                        return s().createElement(C, null, s().createElement(L, t, u));
                    };
                var N = t(493),
                    k = t.n(N);
                function M(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const G = {
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
                    H = [
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
                function U() {
                    return (
                        (U =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        U.apply(this, arguments)
                    );
                }
                class q extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && M(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && M(this.props.soundClick);
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
                            n = e.goto,
                            a = e.side,
                            r = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            d = e.onMouseLeave,
                            l = e.onMouseDown,
                            c = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (t = s[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, H)),
                            E = p()(G.base, G[`base__${r}`], G[`base__${a}`], null == i ? void 0 : i.base),
                            m = p()(G.icon, G[`icon__${r}`], G[`icon__${a}`], null == i ? void 0 : i.icon),
                            g = p()(G.glow, null == i ? void 0 : i.glow),
                            A = p()(G.caption, G[`caption__${r}`], null == i ? void 0 : i.caption),
                            F = p()(G.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            U(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(d),
                                    onMouseDown: this._onMouseDown(l),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== r && s().createElement('div', { className: G.shine }),
                            s().createElement('div', { className: m }, s().createElement('div', { className: g })),
                            s().createElement('div', { className: A }, u),
                            n && s().createElement('div', { className: F }, n),
                        );
                    }
                }
                q.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Q = t(5521),
                    $ = t(9916);
                const W = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function j(e = Q.n.NONE, u = W, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== Q.n.NONE)
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
                var V = t(3403),
                    z = t(7030);
                const Y = R.images.fun_random.gui.maps.icons.feature.asset_packs,
                    X = (e, u) => ('string' == typeof u ? e.$dyn(u) : u.reduce((e, u) => e.$dyn(u), e)),
                    Z = (e, { poFileName: u, assetsPointer: t, isSubMode: n } = {}) => {
                        const a = u ? R.strings.$dyn(u) : R.strings.fun_random;
                        if (!a || 'string' == typeof a) throw Error("Incorrect 'poFileName' argument");
                        const s = n ? 'sub_modes' : 'modes',
                            r = (t ? a.$dyn(s)[t] : a) || a.$dyn(s)[void 0];
                        return e
                            ? { staticTexts: X(a, e), dynamicTexts: X(r, e) }
                            : { staticTexts: a, dynamicTexts: r };
                    },
                    K = (e, u) => {
                        var t;
                        const n = u ? 'sub_modes' : 'modes',
                            a = Y.$dyn(n);
                        return null != (t = a.$dyn(e)) ? t : a.$dyn('undefined');
                    },
                    J = {
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
                        easeOutBack: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                        bezier: (e, u, t, n) => (a) =>
                            (1 - a) * (1 - a) * (1 - a) * e +
                            3 * (1 - a) * (1 - a) * a * u +
                            3 * (1 - a) * a * a * t +
                            a * a * a * n,
                    },
                    ee = (e, u) => {
                        const t = [];
                        for (let n = 0; n < e; n++) t.push(u(n));
                        return t;
                    };
                var ue = t(9174),
                    te = t(3946);
                let ne, ae, se, re, ie, oe, de, le, ce, _e;
                !(function (e) {
                    (e.Inactive = 'inactive'),
                        (e.Active = 'active'),
                        (e.Detached = 'detached'),
                        (e.Detaching = 'detaching'),
                        (e.DetachingActive = 'detaching_active'),
                        (e.Deactivating = 'deactivating'),
                        (e.Activating = 'activating');
                })(ne || (ne = {})),
                    (function (e) {
                        (e.None = 'none'), (e.HidingGlow = 'hiding_glow'), (e.ShowingGlow = 'showing_glow');
                    })(ae || (ae = {})),
                    (function (e) {
                        (e.EvFepCounterChange = 'ev_fep_counter_change'),
                            (e.EvFepTearOffCard = 'ev_fep_tear_off_card'),
                            (e.EvFepCongratulate = 'ev_fep_congratulate'),
                            (e.EvFepCardStartMove = 'ev_fep_card_start_move'),
                            (e.EvFepCardStopMove = 'ev_fep_card_stop_move'),
                            (e.EvFepCardChange = 'ev_fep_card_change'),
                            (e.EvFepInfStepTransition = 'ev_fep_inf_step_transition'),
                            (e.RtpcExtFepWheelRotation = 'RTPC_ext_fep_wheel_rotation');
                    })(se || (se = {})),
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
                    })(re || (re = {})),
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
                    })(ie || (ie = {})),
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
                    })(oe || (oe = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(de || (de = {})),
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
                    })(le || (le = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ce || (ce = {})),
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
                    })(_e || (_e = {}));
                class Ee extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? $.B3.GOLD : $.B3.INTEGRAL;
                        const u = $.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Ee.defaultProps = { format: 'integral' };
                const me = [
                        re.Items,
                        re.Equipment,
                        re.Xp,
                        re.XpFactor,
                        re.Blueprints,
                        re.BlueprintsAny,
                        re.Goodies,
                        re.Berths,
                        re.Slots,
                        re.Tokens,
                        re.CrewSkins,
                        re.CrewBooks,
                        re.Customizations,
                        re.CreditsFactor,
                        re.TankmenXp,
                        re.TankmenXpFactor,
                        re.FreeXpFactor,
                        re.BattleToken,
                        re.PremiumUniversal,
                        re.NaturalCover,
                        re.BpCoin,
                        re.BattlePassSelectToken,
                        re.BattlaPassFinalAchievement,
                        re.BattleBadge,
                        re.BonusX5,
                        re.CrewBonusX3,
                        re.NewYearInvoice,
                        re.EpicSelectToken,
                        re.Comp7TokenWeeklyReward,
                        re.DeluxeGift,
                        re.BattleBoosterGift,
                        re.OptionalDevice,
                    ],
                    ge = [re.Gold, re.Credits, re.Crystal, re.FreeXp],
                    Ae = [re.BattlePassPoints, re.EquipCoin],
                    Fe = [re.PremiumPlus, re.Premium],
                    Ce = ['engravings', 'backgrounds'],
                    De = ['engraving', 'background'],
                    pe = (e, u = oe.Small) => {
                        const t = e.name,
                            n = e.type,
                            a = e.value,
                            s = e.icon,
                            r = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case oe.S600x450:
                                        return 'c_600x450';
                                    case oe.S400x300:
                                        return 'c_400x300';
                                    case oe.S296x222:
                                        return 'c_296x222';
                                    case oe.S232x174:
                                        return 'c_232x174';
                                    case oe.Big:
                                        return 'c_80x80';
                                    case oe.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${s}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${s}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = Ce[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            s = a.$dyn(t);
                                        return s ? `${s}` : `${a.$dyn(De[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, s);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${s}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${s}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${o}.${s}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    he = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    },
                    Be = [oe.Small, oe.Big];
                let fe;
                function be(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                !(function (e) {
                    (e.DISABLED = 'disabled'),
                        (e.ACTIVE_FINAL = 'activeFinal'),
                        (e.ACTIVE_RESETTABLE = 'activeResettable'),
                        (e.COMPLETED_FINAL = 'completedFinal'),
                        (e.COMPLETED_RESETTABLE = 'completedResettable'),
                        (e.ACTIVE_INFINITE_RESETTABLE = 'activeInfiniteResettable'),
                        (e.ACTIVE_INFINITE_FINAL = 'activeInfiniteFinal');
                })(fe || (fe = {}));
                const ve = be;
                function we(e, u) {
                    for (let t = 0; t < e.length; t++) if (u(ve(e, t), t, e)) return t;
                }
                const Te = (e, u) => {
                        return (
                            (t = e),
                            (n = (e) => {
                                return {
                                    name: e.name,
                                    image: pe(e, u),
                                    value: e.value,
                                    special: le[e.overlayType],
                                    valueType:
                                        ((t = e.name),
                                        me.includes(t)
                                            ? de.MULTI
                                            : ge.includes(t)
                                              ? de.CURRENCY
                                              : Ae.includes(t)
                                                ? de.NUMBER
                                                : Fe.includes(t)
                                                  ? de.PREMIUM_PLUS
                                                  : de.STRING),
                                    tooltipArgs: he({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                };
                                var t;
                            }),
                            Array.isArray(t) ? t.map(n) : t.map((e, u, t) => n(null == e ? void 0 : e.value))
                        );
                        var t, n;
                    },
                    Pe = {
                        [fe.DISABLED]: fe.DISABLED,
                        [fe.ACTIVE_FINAL]: fe.ACTIVE_FINAL,
                        [fe.ACTIVE_RESETTABLE]: fe.ACTIVE_RESETTABLE,
                        [fe.ACTIVE_INFINITE_FINAL]: fe.ACTIVE_FINAL,
                        [fe.ACTIVE_INFINITE_RESETTABLE]: fe.ACTIVE_RESETTABLE,
                        [fe.COMPLETED_FINAL]: fe.ACTIVE_FINAL,
                        [fe.COMPLETED_RESETTABLE]: fe.ACTIVE_RESETTABLE,
                    },
                    Re = (e) => ({
                        isActive: [fe.ACTIVE_FINAL, fe.ACTIVE_RESETTABLE].includes(e),
                        isInfinite: [fe.ACTIVE_INFINITE_FINAL, fe.ACTIVE_INFINITE_RESETTABLE].includes(e),
                        isCompleted: [fe.COMPLETED_FINAL, fe.COMPLETED_RESETTABLE].includes(e),
                        isResettable: [
                            fe.ACTIVE_RESETTABLE,
                            fe.COMPLETED_RESETTABLE,
                            fe.ACTIVE_INFINITE_RESETTABLE,
                        ].includes(e),
                    }),
                    Se = (e, u, t) => Math.min(t, Math.max(u, e)),
                    Ie = (e, u, t) => Math.min(u, Math.max(t, e));
                let xe, Le;
                !(function (e) {
                    (e[(e.Idle = 0)] = 'Idle'),
                        (e[(e.Scrolling = 1)] = 'Scrolling'),
                        (e[(e.Dragging = 2)] = 'Dragging'),
                        (e[(e.InertialMovement = 3)] = 'InertialMovement'),
                        (e[(e.FirstAnimation = 4)] = 'FirstAnimation'),
                        (e[(e.Normalization = 5)] = 'Normalization'),
                        (e[(e.ShowProgress = 6)] = 'ShowProgress'),
                        (e[(e.FinalAnimation = 7)] = 'FinalAnimation'),
                        (e[(e.Blocked = 8)] = 'Blocked');
                })(xe || (xe = {})),
                    (function (e) {
                        (e[(e.Init = 0)] = 'Init'),
                            (e[(e.Detaching = 1)] = 'Detaching'),
                            (e[(e.Scroll = 2)] = 'Scroll'),
                            (e[(e.Finish = 3)] = 'Finish');
                    })(Le || (Le = {}));
                const ye = [xe.FirstAnimation, xe.ShowProgress, xe.FinalAnimation, xe.Blocked];
                let Oe;
                !(function (e) {
                    (e[(e.RunCounter = 0)] = 'RunCounter'),
                        (e[(e.Detach = 1)] = 'Detach'),
                        (e[(e.HideGlow = 2)] = 'HideGlow'),
                        (e[(e.DeactivateCurrent = 3)] = 'DeactivateCurrent'),
                        (e[(e.ActivateNext = 4)] = 'ActivateNext'),
                        (e[(e.ShowGlow = 5)] = 'ShowGlow'),
                        (e[(e.Scroll = 6)] = 'Scroll'),
                        (e[(e.FinishActivating = 7)] = 'FinishActivating'),
                        (e[(e.Finish = 8)] = 'Finish');
                })(Oe || (Oe = {}));
                const Ne = [
                        { delay: 100, duration: 400, action: Oe.RunCounter },
                        { duration: 300, action: Oe.HideGlow },
                    ],
                    ke = [
                        { delay: 100, duration: 700, action: Oe.Detach },
                        { delay: 300, action: Oe.DeactivateCurrent },
                        { duration: 300, action: Oe.ActivateNext },
                    ],
                    Me = [{ duration: 500, action: Oe.Scroll }],
                    Ge = [{ action: Oe.FinishActivating }],
                    He = [{ delay: 200, action: Oe.Finish }],
                    Ue = [{ duration: 300, action: Oe.ShowGlow }],
                    qe = {
                        [xe.Idle]: {},
                        [xe.Scrolling]: { duration: 400, easing: J.linear },
                        [xe.Dragging]: { duration: 400, easing: J.easeOutQuint },
                        [xe.InertialMovement]: { duration: 800, easing: J.linear },
                        [xe.FirstAnimation]: { duration: 1e4, easing: J.easeInOutQuint },
                        [xe.Normalization]: { duration: 1e3, easing: J.easeOutQuint },
                        [xe.ShowProgress]: { duration: 500, easing: J.easeOutQuint },
                        [xe.FinalAnimation]: { duration: 2e3, easing: J.easeInOutQuint },
                        [xe.Blocked]: { duration: 0 },
                    },
                    Qe = () => {
                        const e = { rotation: ue.LO.box(0), changeTime: ue.LO.box(new Date()), filled: ue.LO.box(!1) },
                            u = (0, ue.aD)((u, t) => {
                                e.rotation.set(u), e.changeTime.set(t), e.filled.set(!0);
                            }),
                            t = (0, ue.aD)(() => {
                                e.filled.set(!1);
                            });
                        return Object.assign({}, e, { setRotation: u, clear: t });
                    },
                    $e = (e, u) => {
                        const t = (e) =>
                                (0, ue.aD)((...t) => {
                                    if (u.userActionsAllowed.get()) return e(...t);
                                }),
                            n = (0, ue.aD)((u) => {
                                e.state.set(u);
                            }),
                            a = (0, ue.aD)(() => {
                                e.rotationStats.prev.clear(),
                                    e.rotationStats.last.setRotation(e.currentRotation.get(), new Date());
                            }),
                            s = (0, ue.aD)((u) => {
                                e.rotationStats.prev.setRotation(
                                    e.rotationStats.last.rotation.get(),
                                    e.rotationStats.last.changeTime.get(),
                                ),
                                    e.rotationStats.last.setRotation(u, new Date()),
                                    e.currentRotation.set(u);
                            }),
                            r = (0, ue.aD)((t) => {
                                e.targetRotation.set(Ie(t, u.minRotation.get(), u.maxRotation.get()));
                            }),
                            o = (0, ue.aD)(() => {
                                if (e.progress.finalCard.get() !== e.progress.currentCard.get()) {
                                    n(xe.ShowProgress);
                                    const t = -e.cardRotation.get() * e.progress.currentCard.get();
                                    s(Ie(t, u.minRotation.get(), u.maxRotation.get()));
                                } else D[Oe.RunCounter](), n(xe.Idle);
                            }),
                            d = (0, ue.aD)((t) => {
                                const a = (-e.cardRotation.get() * (t - 1)) / 2,
                                    s = Ie(a, u.minRotation.get(), u.maxRotation.get());
                                e.currentRotation.get() === s
                                    ? (c(!0), n(xe.Blocked), i.O.sound.play.sound(se.EvFepCongratulate))
                                    : (n(xe.FinalAnimation), r(a));
                            }),
                            l = (0, ue.aD)((t, a, i, d, l) => {
                                if (
                                    (e.cardsCount.set(t),
                                    e.progress.currentCard.set(a),
                                    e.progress.finalCard.set(i),
                                    e.progress.state.cards.push(
                                        ...ee(t, (e) => {
                                            return (
                                                (u = ((e, u, t) =>
                                                    t
                                                        ? ne.Detached
                                                        : e === u
                                                          ? ne.Active
                                                          : e > u
                                                            ? ne.Detached
                                                            : ne.Inactive)(a, e, l)),
                                                (t = ae.None),
                                                { state: ue.LO.box(u), animation: ue.LO.box(t) }
                                            );
                                            var u, t;
                                        }),
                                    ),
                                    d)
                                )
                                    s(-e.cardRotation.get() * u.maxRightCard.get()),
                                        n(xe.FirstAnimation),
                                        r(-e.cardRotation.get() * a);
                                else if (l) {
                                    const u = (-e.cardRotation.get() * (t - 1)) / 2;
                                    s(u), r(u), c(!0), n(xe.Blocked);
                                } else {
                                    const t = Se(a, u.minLeftCard.get(), u.maxRightCard.get());
                                    s(-e.cardRotation.get() * t),
                                        r(e.currentRotation.get()),
                                        a !== i ? o() : D[Oe.RunCounter]();
                                }
                            }),
                            c = (0, ue.aD)((u) => {
                                e.assembled.set(u);
                            }),
                            _ = t((t) => {
                                const a = Ie(
                                    e.targetRotation.get() - (e.cardRotation.get() * t) / -2,
                                    u.minRotation.get(),
                                    u.maxRotation.get(),
                                );
                                return n(xe.Scrolling), r(a), e.targetRotation.get();
                            }),
                            E = t((u) => {
                                e.dragging.speed.set(u);
                            }),
                            m = t((u) => {
                                e.state.set(xe.Dragging),
                                    e.dragging.lastMousePosition.set(u),
                                    e.dragging.speed.set(0),
                                    e.targetRotation.set(e.currentRotation.get());
                            }),
                            g = t(() => {
                                e.state.set(xe.InertialMovement), e.dragging.lastMousePosition.set(0);
                            }),
                            A = t((t, n) => {
                                e.state.get() === xe.Dragging &&
                                    (e.dragging.speed.set(
                                        (180 * Math.atan((n - e.dragging.lastMousePosition.get()) / t)) / Math.PI,
                                    ),
                                    e.dragging.lastMousePosition.set(n),
                                    e.targetRotation.set(
                                        Ie(
                                            e.targetRotation.get() + e.dragging.speed.get(),
                                            u.minRotation.get(),
                                            u.maxRotation.get(),
                                        ),
                                    ));
                            }),
                            F = (0, ue.aD)((u, t) => {
                                u >= 0 && u < e.progress.state.cards.length && e.progress.state.cards[u].state.set(t);
                            }),
                            C = (0, ue.aD)((u, t) => {
                                u >= 0 &&
                                    u <= e.progress.state.cards.length &&
                                    e.progress.state.cards[u].animation.set(t);
                            }),
                            D = {
                                [Oe.RunCounter]: (0, ue.aD)(() => {
                                    e.progress.state.runCounter.set(!0);
                                }),
                                [Oe.Detach]: (0, ue.aD)(() => {
                                    F(e.progress.currentCard.get(), ne.DetachingActive),
                                        e.progress.animation.set(Le.Detaching);
                                }),
                                [Oe.HideGlow]: (0, ue.aD)(() => {
                                    C(e.progress.currentCard.get(), ae.HidingGlow);
                                }),
                                [Oe.DeactivateCurrent]: (0, ue.aD)(() => {
                                    F(e.progress.currentCard.get(), ne.Deactivating);
                                }),
                                [Oe.ActivateNext]: (0, ue.aD)(() => {
                                    const u = e.progress.currentCard.get() + 1;
                                    F(u, ne.Activating), e.progress.currentCard.set(u);
                                }),
                                [Oe.ShowGlow]: (0, ue.aD)(() => {
                                    C(e.progress.currentCard.get(), ae.ShowingGlow);
                                }),
                                [Oe.FinishActivating]: (0, ue.aD)(() => {
                                    const u = e.progress.currentCard.get() - 1;
                                    F(u, ne.Detached);
                                }),
                                [Oe.Scroll]: (0, ue.aD)(() => {
                                    if (
                                        (e.progress.animation.set(Le.Scroll),
                                        e.progress.currentCard.get() > u.minLeftCard.get())
                                    ) {
                                        const t = Ie(
                                            -e.cardRotation.get() * e.progress.currentCard.get(),
                                            u.minRotation.get(),
                                            u.maxRotation.get(),
                                        );
                                        r(t);
                                    }
                                }),
                                [Oe.Finish]: (0, ue.aD)(() => {
                                    e.progress.finalCard.get() < e.cardsCount.get() &&
                                        F(e.progress.finalCard.get(), ne.Active),
                                        e.progress.animation.set(Le.Finish),
                                        n(xe.Idle);
                                }),
                            };
                        return {
                            initCardsFan: l,
                            startRotation: a,
                            scroll: _,
                            runProgressionAnimation: o,
                            runFinalAnimation: d,
                            setAssembled: c,
                            setState: n,
                            setCurrentRotation: s,
                            setTargetRotation: r,
                            setDraggingSpeed: E,
                            startDragging: m,
                            stopDragging: g,
                            drag: A,
                            progress: D,
                        };
                    };
                function We() {}
                function je() {
                    return !1;
                }
                function Ve(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                console.log;
                const ze = (e) => (0 === e ? window : window.subViews.get(e)),
                    Ye = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: r, mocks: o }) {
                                const d = (0, a.useRef)([]),
                                    l = (e, t, n) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ze,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function s(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = a.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const r = (e) => {
                                                    const a = t(u),
                                                        s = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? s
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, s);
                                                };
                                                return {
                                                    subscribe: (t, s) => {
                                                        const o = 'string' == typeof s ? `${n}.${s}` : n,
                                                            d = i.O.view.addModelObserver(o, u, !0);
                                                        return a.set(d, t), e && t(r(s)), d;
                                                    },
                                                    readByPath: r,
                                                    createCallback: (e, u) => {
                                                        const t = r(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = r(e);
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
                                                                                    return Ve(e, u);
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
                                                                                          ? Ve(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = t()).done;

                                                        )
                                                            s(e.value, u);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(t),
                                            r =
                                                'real' === e
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : r.readByPath(u),
                                            l = (e) => d.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        stages: e.array('stages'),
                                                        state: e.object('state'),
                                                        quests: e.array('condition.conditions', []),
                                                        status: e.object('state.status'),
                                                        condition: e.primitives(
                                                            [
                                                                'currentPoints',
                                                                'prevPoints',
                                                                'maximumPoints',
                                                                'title',
                                                                'text',
                                                                'conditionIcon',
                                                                'statusTimer',
                                                            ],
                                                            'condition',
                                                        ),
                                                        infiniteCondition: e.object('infiniteCondition'),
                                                        infiniteQuests: e.array('infiniteCondition.conditions'),
                                                        infiniteStage: e.object('infiniteStage'),
                                                    },
                                                    t = (0, te.Om)(
                                                        (e) => {
                                                            const t = be(u.quests.get(), e);
                                                            if (!t) throw new Error(`Unexpected quest index: ${e}`);
                                                            return Object.assign({}, t);
                                                        },
                                                        { equals: je },
                                                    ),
                                                    n = (0, te.Om)(
                                                        () => {
                                                            const e = be(u.infiniteQuests.get(), 0);
                                                            if (!e) throw new Error('Unexpected quest index: 0');
                                                            return Object.assign({}, e);
                                                        },
                                                        { equals: je },
                                                    ),
                                                    a = (0, te.Om)(
                                                        (e, t, n = !1) => {
                                                            const a = n ? u.infiniteStage.get() : be(u.stages.get(), e);
                                                            if (!a) throw new Error(`Unexpected card index: ${e}`);
                                                            const s = e + 1,
                                                                r = o.cardState(e);
                                                            return Object.assign({}, a, {
                                                                rewards: Te(a.rewards, t),
                                                                cardNumber: s,
                                                                progressionState: r,
                                                            });
                                                        },
                                                        { equals: je },
                                                    ),
                                                    s = (0, te.Om)(() => {
                                                        const e =
                                                            u.condition.currentPoints.get() ===
                                                            u.condition.maximumPoints.get()
                                                                ? u.stages.get().length
                                                                : 0;
                                                        return we(u.stages.get(), (e) => !e.isCompleted) || e;
                                                    }),
                                                    r = (0, te.Om)(() => {
                                                        const e = be(u.stages.get(), 0);
                                                        if (e && e.maximumPoints > u.condition.prevPoints.get())
                                                            return 0;
                                                        const t = u.stages.get().length - 1;
                                                        return (
                                                            we(
                                                                u.stages.get(),
                                                                (e) => e.maximumPoints > u.condition.prevPoints.get(),
                                                            ) || t
                                                        );
                                                    }),
                                                    i = (({ cardRotation: e, displayCardsCount: u }) => ({
                                                        cardRotation: ue.LO.box(e),
                                                        displayCardsCount: ue.LO.box(u),
                                                        cardsCount: ue.LO.box(0),
                                                        state: ue.LO.box(xe.Idle),
                                                        currentRotation: ue.LO.box(0),
                                                        targetRotation: ue.LO.box(0),
                                                        assembled: ue.LO.box(!1),
                                                        rotationStats: { prev: Qe(), last: Qe() },
                                                        progress: {
                                                            currentCard: ue.LO.box(0),
                                                            animation: ue.LO.box(Le.Init),
                                                            finalCard: ue.LO.box(0),
                                                            state: { runCounter: ue.LO.box(!1), cards: [] },
                                                        },
                                                        dragging: {
                                                            lastMousePosition: ue.LO.box(0),
                                                            speed: ue.LO.box(0),
                                                        },
                                                    }))({ cardRotation: 10, displayCardsCount: 12 }),
                                                    o = ((e) => {
                                                        const u = (0, ue.Fl)(() => (e.cardsCount.get() >= 5 ? 2 : 1)),
                                                            t = (0, ue.Fl)(() =>
                                                                e.cardsCount.get() <= 3
                                                                    ? e.cardsCount.get() - 2
                                                                    : e.cardsCount.get() <= 5
                                                                      ? e.cardsCount.get() - 3
                                                                      : e.cardsCount.get() - 1,
                                                            ),
                                                            n = (0, ue.Fl)(() =>
                                                                ee(e.cardsCount.get(), (u) => ({
                                                                    key: u,
                                                                    order: e.cardsCount.get() - u - 1,
                                                                })),
                                                            ),
                                                            a = (0, ue.Fl)(() =>
                                                                Se(
                                                                    Math.round(
                                                                        (Math.abs(e.currentRotation.get()) /
                                                                            (e.cardRotation.get() *
                                                                                e.cardsCount.get())) *
                                                                            e.cardsCount.get(),
                                                                    ),
                                                                    u.get(),
                                                                    t.get(),
                                                                ),
                                                            ),
                                                            s = (0, ue.Fl)(
                                                                () =>
                                                                    Math.max(0, Se(a.get(), u.get(), t.get())) -
                                                                    Math.ceil(e.displayCardsCount.get() / 2),
                                                            ),
                                                            r = (0, ue.Fl)(
                                                                () =>
                                                                    Math.min(e.cardsCount.get(), a.get()) +
                                                                    Math.ceil(e.displayCardsCount.get() / 2),
                                                            ),
                                                            i = (0, ue.Fl)(() => -e.cardRotation.get() * u.get()),
                                                            o = (0, ue.Fl)(() => -e.cardRotation.get() * t.get()),
                                                            d = (0, ue.Fl)(() =>
                                                                e.state.get() === xe.FirstAnimation
                                                                    ? Object.assign({}, qe[xe.FirstAnimation], {
                                                                          duration: 150 * e.cardsCount.get(),
                                                                      })
                                                                    : qe[e.state.get()],
                                                            ),
                                                            l = (0, ue.Fl)(() => !ye.includes(e.state.get())),
                                                            c = (0, ue.Fl)(() => {
                                                                const t = [];
                                                                t.push(...Ne);
                                                                for (
                                                                    let n = e.progress.currentCard.get();
                                                                    n < e.progress.finalCard.get();
                                                                    n++
                                                                ) {
                                                                    const e = n >= u.get();
                                                                    t.push(...ke), e && t.push(...Me), t.push(...Ge);
                                                                }
                                                                return (
                                                                    e.progress.finalCard.get() < e.cardsCount.get() &&
                                                                        t.push(...Ue),
                                                                    t.push(...He),
                                                                    t
                                                                );
                                                            }),
                                                            _ = (0, te.Om)((u) =>
                                                                e.progress.state.cards[u]
                                                                    ? {
                                                                          state: e.progress.state.cards[u].state.get(),
                                                                          animation:
                                                                              e.progress.state.cards[u].animation.get(),
                                                                      }
                                                                    : null,
                                                            ),
                                                            E = (0, ue.Fl)(() => {
                                                                if (
                                                                    !e.rotationStats.last.filled.get() ||
                                                                    !e.rotationStats.prev.filled.get()
                                                                )
                                                                    return;
                                                                const u =
                                                                        e.rotationStats.last.rotation.get() -
                                                                        e.rotationStats.prev.rotation.get(),
                                                                    t =
                                                                        e.rotationStats.last.changeTime
                                                                            .get()
                                                                            .getTime() -
                                                                        e.rotationStats.prev.changeTime.get().getTime();
                                                                var n, a, s;
                                                                return 0 !== t
                                                                    ? ((a = 0.4),
                                                                      ((s = u / t) < (n = -0.4) ? n : s > a ? a : s) /
                                                                          -0.4)
                                                                    : void 0;
                                                            }),
                                                            m = (0, ue.Fl)(() => e.state.get() !== xe.Blocked),
                                                            g = (0, ue.Fl)(() => e.cardsCount.get() >= 6),
                                                            A = (0, ue.Fl)(() =>
                                                                l.get() && g.get()
                                                                    ? e.state.get() === xe.Dragging
                                                                        ? 'grabbing'
                                                                        : 'grab'
                                                                    : 'default',
                                                            );
                                                        return {
                                                            velocity: E,
                                                            minLeftCard: u,
                                                            maxRightCard: t,
                                                            cardsMap: n,
                                                            currentCard: a,
                                                            minVisibleCard: s,
                                                            maxVisibleCard: r,
                                                            minRotation: i,
                                                            maxRotation: o,
                                                            animationConfig: d,
                                                            userActionsAllowed: l,
                                                            progressSchedule: c,
                                                            cardState: _,
                                                            soundEnabled: m,
                                                            cursor: A,
                                                        };
                                                    })(i),
                                                    d = (0, te.Om)(
                                                        () =>
                                                            u.condition.prevPoints.get() <
                                                                u.condition.currentPoints.get() &&
                                                            u.condition.currentPoints.get() ===
                                                                u.condition.maximumPoints.get(),
                                                    ),
                                                    l = (0, te.Om)(() =>
                                                        (!d() &&
                                                            u.condition.currentPoints.get() ===
                                                                u.condition.maximumPoints.get()) ||
                                                        i.progress.animation.get() === Le.Finish
                                                            ? u.state.get().status
                                                            : Pe[u.state.get().status],
                                                    ),
                                                    c = (0, te.Om)(() => {
                                                        const e = d(),
                                                            u = l(),
                                                            t = Re(u).isCompleted;
                                                        return {
                                                            completedWithAnimation: e && t,
                                                            completedNoAnimation: !e && t,
                                                        };
                                                    });
                                                return Object.assign({}, u, {
                                                    cardsFan: { model: i, computes: o },
                                                    computes: {
                                                        quest: t,
                                                        card: a,
                                                        cardActiveIndex: s,
                                                        progressAnimationStartFrom: r,
                                                        infiniteQuest: n,
                                                        pageStatus: l,
                                                        needChangePage: d,
                                                        finalAnimationStatus: c,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: r,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : o(u),
                                                            a = ue.LO.box(n, { equals: je });
                                                        return (
                                                            'real' === e &&
                                                                r.subscribe(
                                                                    (0, ue.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : o(u),
                                                            a = ue.LO.box(n, { equals: je });
                                                        return (
                                                            'real' === e &&
                                                                r.subscribe(
                                                                    (0, ue.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = o(t);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (e, u) => ((e[u] = ue.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    r.subscribe(
                                                                        (0, ue.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                a[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = u,
                                                                s = Object.entries(a),
                                                                i = s.reduce(
                                                                    (e, [u, t]) => ((e[t] = ue.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    r.subscribe(
                                                                        (0, ue.aD)((e) => {
                                                                            s.forEach(([u, t]) => {
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
                                                cleanup: l,
                                            }),
                                            _ = { mode: e, model: c, externalModel: r, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && n ? n.controls(_) : u(_),
                                            externalModel: r,
                                            mode: e,
                                        };
                                    },
                                    c = (0, a.useRef)(!1),
                                    _ = (0, a.useState)(e),
                                    E = _[0],
                                    m = _[1],
                                    g = (0, a.useState)(() => l(e, n, o)),
                                    A = g[0],
                                    F = g[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        c.current ? F(l(E, n, o)) : (c.current = !0);
                                    }, [o, E, n]),
                                    (0, a.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            A.externalModel.dispose(), d.current.forEach((e) => e());
                                        },
                                        [A],
                                    ),
                                    s().createElement(t.Provider, { value: A }, r)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e, model: u }) => ({
                        cardsFun: $e(u.cardsFan.model, u.cardsFan.computes),
                        close: e.createCallbackNoArgs('onClose'),
                        showInfo: e.createCallbackNoArgs('onShowInfo'),
                        onOpenTierList: e.createCallbackNoArgs('onOpenTierList'),
                    })),
                    Xe = Ye[0],
                    Ze = Ye[1],
                    Ke = {
                        base: 'Card_base_74',
                        base__big: 'Card_base__big_79',
                        glow: 'Card_glow_c0',
                        base__active: 'Card_base__active_5a',
                        base__animation_hiding_glow: 'Card_base__animation_hiding_glow_89',
                        base__animation_showing_glow: 'Card_base__animation_showing_glow_6b',
                        showGlow: 'Card_showGlow_a5',
                        hideGlow: 'Card_hideGlow_25',
                        particles: 'Card_particles_f2',
                        base__detaching: 'Card_base__detaching_f9',
                        base__detaching_active: 'Card_base__detaching_active_d5',
                        dissolve: 'Card_dissolve_d6',
                        blink: 'Card_blink_00',
                        image: 'Card_image_62',
                        shadow: 'Card_shadow_17',
                        'completed-congrats': 'Card_completed-congrats_46',
                        'completed-glow': 'Card_completed-glow_0d',
                        'card-show': 'Card_card-show_73',
                        'card-show-presentment': 'Card_card-show-presentment_f6',
                        edge: 'Card_edge_8b',
                        'blink-edge': 'Card_blink-edge_8f',
                        'show-down': 'Card_show-down_14',
                        'show-up': 'Card_show-up_9a',
                        show: 'Card_show_40',
                        hide: 'Card_hide_3a',
                        pointFadeOut: 'Card_pointFadeOut_e0',
                        pointFadeIn: 'Card_pointFadeIn_01',
                        first2void: 'Card_first2void_8a',
                        second2firstTranslate: 'Card_second2firstTranslate_f3',
                        second2firstRotate: 'Card_second2firstRotate_22',
                        third2second: 'Card_third2second_a9',
                    },
                    Je = [
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
                function eu(e) {
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
                const uu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: $.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    tu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            s = e.onMouseEnter,
                            r = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            d = e.ignoreShowDelay,
                            l = void 0 !== d && d,
                            c = e.ignoreMouseClick,
                            _ = void 0 !== c && c,
                            E = e.decoratorId,
                            m = void 0 === E ? 0 : E,
                            g = e.isEnabled,
                            A = void 0 === g || g,
                            F = e.targetId,
                            C = void 0 === F ? 0 : F,
                            D = e.onShow,
                            p = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (t = s[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Je);
                        const B = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    C ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [C],
                            ),
                            b = (0, a.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (uu(t, m, { isMouseEvent: !0, on: !0, arguments: eu(n) }, f),
                                    D && D(),
                                    (B.current.isVisible = !0));
                            }, [t, m, n, f, D]),
                            v = (0, a.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        uu(t, m, { on: !1 }, f),
                                        B.current.isVisible && p && p(),
                                        (B.current.isVisible = !1);
                                }
                            }, [t, m, f, p]),
                            w = (0, a.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = B.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === A && v();
                            }, [A, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            ),
                            A
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((B.current.timeoutId = window.setTimeout(b, l ? 100 : 400)),
                                                          s && s(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  v(), null == r || r(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === _ && v(), null == o || o(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === _ && v(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var T;
                    },
                    nu = ['children'];
                function au() {
                    return (
                        (au =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        au.apply(this, arguments)
                    );
                }
                const su = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (t = s[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, nu);
                        return s().createElement(
                            tu,
                            au(
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
                    ru = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function iu() {
                    return (
                        (iu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        iu.apply(this, arguments)
                    );
                }
                const ou = R.views.common.tooltip_window.simple_tooltip_content,
                    du = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            i = e.alert,
                            o = e.args,
                            d = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (t = s[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, ru);
                        const l = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: r, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, r, o]);
                        return s().createElement(
                            tu,
                            iu(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? ou.SimpleTooltipHtmlContent('resId') : ou.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                d,
                            ),
                            u,
                        );
                        var c;
                    };
                function lu() {
                    return (
                        (lu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        lu.apply(this, arguments)
                    );
                }
                const cu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(du, u, n);
                        const a = u.contentId;
                        return a ? s().createElement(tu, lu({}, u, { contentId: a }), n) : s().createElement(su, u, n);
                    },
                    _u = {
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
                    Eu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = oe.Big,
                        special: a,
                        value: r,
                        valueType: i,
                        style: o,
                        className: d,
                        classNames: l,
                        tooltipArgs: c,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const E = ((e, u) => {
                                if (void 0 === u || !Be.includes(e)) return null;
                                switch (u) {
                                    case le.BATTLE_BOOSTER:
                                    case le.BATTLE_BOOSTER_REPLACE:
                                        return ce.BATTLE_BOOSTER;
                                }
                            })(n, a),
                            m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case le.BATTLE_BOOSTER:
                                        return _e.BATTLE_BOOSTER;
                                    case le.BATTLE_BOOSTER_REPLACE:
                                        return _e.BATTLE_BOOSTER_REPLACE;
                                    case le.BUILT_IN_EQUIPMENT:
                                        return _e.BUILT_IN_EQUIPMENT;
                                    case le.EQUIPMENT_PLUS:
                                        return _e.EQUIPMENT_PLUS;
                                    case le.EQUIPMENT_TROPHY_BASIC:
                                        return _e.EQUIPMENT_TROPHY_BASIC;
                                    case le.EQUIPMENT_TROPHY_UPGRADED:
                                        return _e.EQUIPMENT_TROPHY_UPGRADED;
                                    case le.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return _e.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case le.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return _e.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case le.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return _e.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case le.PROGRESSION_STYLE_UPGRADED_1:
                                        return _e.PROGRESSION_STYLE_UPGRADED_1;
                                    case le.PROGRESSION_STYLE_UPGRADED_2:
                                        return _e.PROGRESSION_STYLE_UPGRADED_2;
                                    case le.PROGRESSION_STYLE_UPGRADED_3:
                                        return _e.PROGRESSION_STYLE_UPGRADED_3;
                                    case le.PROGRESSION_STYLE_UPGRADED_4:
                                        return _e.PROGRESSION_STYLE_UPGRADED_4;
                                    case le.PROGRESSION_STYLE_UPGRADED_5:
                                        return _e.PROGRESSION_STYLE_UPGRADED_5;
                                    case le.PROGRESSION_STYLE_UPGRADED_6:
                                        return _e.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(a),
                            g = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case de.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case de.CURRENCY:
                                    case de.NUMBER:
                                        return s().createElement(Ee, { format: 'integral', value: Number(e) });
                                    case de.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, i);
                        return s().createElement(
                            'div',
                            { className: p()(_u.base, _u[`base__${n}`], d), style: o },
                            s().createElement(
                                cu,
                                { tooltipArgs: c, className: _u.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: p()(_u.image, null == l ? void 0 : l.image) },
                                        E &&
                                            s().createElement('div', {
                                                className: p()(_u.highlight, null == l ? void 0 : l.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${E}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: p()(_u.icon, null == l ? void 0 : l.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        m &&
                                            s().createElement('div', {
                                                className: p()(_u.overlay, null == l ? void 0 : l.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: p()(
                                                    _u.info,
                                                    _u[`info__${e}`],
                                                    i === de.MULTI && _u.info__multi,
                                                    null == l ? void 0 : l.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    cu,
                                    { tooltipArgs: _ },
                                    s().createElement('div', {
                                        className: p()(_u.timer, null == l ? void 0 : l.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    mu = 'base',
                    gu = ({ imagesRoot: e, partName: u, rarity: t, size: n }) =>
                        `url(${e.$dyn(u).$dyn(`${t}_${n}_1`)})`,
                    Au = {
                        base: 'CardContent_base_67',
                        rewards: 'CardContent_rewards_ef',
                        base__big: 'CardContent_base__big_61',
                        rewardSlot: 'CardContent_rewardSlot_e7',
                        reward: 'CardContent_reward_3f',
                        base__detached: 'CardContent_base__detached_05',
                        base__detaching: 'CardContent_base__detaching_52',
                        base__detaching_active: 'CardContent_base__detaching_active_97',
                        base__deactivating: 'CardContent_base__deactivating_ae',
                        base__small: 'CardContent_base__small_8d',
                        rewardInfo: 'CardContent_rewardInfo_14',
                        rewardImage: 'CardContent_rewardImage_f8',
                        rewardImage__battleToken: 'CardContent_rewardImage__battleToken_ee',
                        base__ordinary: 'CardContent_base__ordinary_57',
                        cardNumber: 'CardContent_cardNumber_bc',
                        base__unusual: 'CardContent_base__unusual_a6',
                        base__rare: 'CardContent_base__rare_f8',
                        base__legendary: 'CardContent_base__legendary_a8',
                        base__epic: 'CardContent_base__epic_6c',
                        infinity: 'CardContent_infinity_56',
                        shadow: 'CardContent_shadow_35',
                        base__inactive: 'CardContent_base__inactive_22',
                        pattern: 'CardContent_pattern_13',
                        'completed-congrats': 'CardContent_completed-congrats_1b',
                        'completed-glow': 'CardContent_completed-glow_9a',
                        'card-show': 'CardContent_card-show_d9',
                        'card-show-presentment': 'CardContent_card-show-presentment_a3',
                        edge: 'CardContent_edge_f0',
                        dissolve: 'CardContent_dissolve_a8',
                        'blink-edge': 'CardContent_blink-edge_c8',
                        blink: 'CardContent_blink_31',
                        'show-down': 'CardContent_show-down_ff',
                        'show-up': 'CardContent_show-up_d3',
                        show: 'CardContent_show_c9',
                        hide: 'CardContent_hide_cb',
                        showGlow: 'CardContent_showGlow_60',
                        hideGlow: 'CardContent_hideGlow_96',
                        pointFadeOut: 'CardContent_pointFadeOut_69',
                        pointFadeIn: 'CardContent_pointFadeIn_91',
                        first2void: 'CardContent_first2void_b7',
                        second2firstTranslate: 'CardContent_second2firstTranslate_b5',
                        second2firstRotate: 'CardContent_second2firstRotate_e0',
                        third2second: 'CardContent_third2second_54',
                    };
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                const Cu = (0, V.Pi)(({ index: e = 0, state: u, rewardsSize: t, infinite: n, classMix: a }) => {
                        const r = Ze().model,
                            i = r.root.get().assetsPointer,
                            o = r.computes.card(e, t, n),
                            d = o.progressionState,
                            l = o.rarity,
                            c = o.cardNumber,
                            _ = o.rewards,
                            E = u || (null == d ? void 0 : d.state),
                            m = K(i).progression.cards,
                            g = gu({ imagesRoot: m, partName: mu, rarity: l, size: t }),
                            A = String(m.infinity_sign.$dyn(l));
                        return s().createElement(
                            'div',
                            {
                                className: p()(
                                    Au.base,
                                    Au[`base__${l}`],
                                    Au[`base__${t}`],
                                    Au[`base__${E}`],
                                    null == a ? void 0 : a.content,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: Au.rewards },
                                ee(4, (e) =>
                                    s().createElement(
                                        'div',
                                        { key: e, className: Au.rewardSlot },
                                        _.length > e &&
                                            s().createElement(
                                                Eu,
                                                Fu({}, _[e], {
                                                    size: t,
                                                    className: Au.reward,
                                                    classNames: {
                                                        info: Au.rewardInfo,
                                                        image: p()(
                                                            Au.rewardImage,
                                                            'battleToken' === _[e].name && Au.rewardImage__battleToken,
                                                        ),
                                                    },
                                                }),
                                            ),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: Au.cardNumber },
                                n
                                    ? s().createElement('div', {
                                          className: Au.infinity,
                                          style: { backgroundImage: `url(${A})` },
                                      })
                                    : c,
                            ),
                            s().createElement('div', {
                                className: p()(Au.pattern, null == a ? void 0 : a.pattern),
                                style: { maskImage: g },
                            }),
                            s().createElement('div', {
                                className: p()(Au.shadow, null == a ? void 0 : a.shadow),
                                style: { maskImage: g },
                            }),
                        );
                    }),
                    Du = {
                        base: 'CardEdge_base_be',
                        base__active: 'CardEdge_base__active_7b',
                        base__big: 'CardEdge_base__big_b5',
                        base__detached: 'CardEdge_base__detached_e9',
                        base__deactivating: 'CardEdge_base__deactivating_15',
                        base__detaching: 'CardEdge_base__detaching_44',
                        base__detaching_active: 'CardEdge_base__detaching_active_77',
                        edge: 'CardEdge_edge_42',
                        pattern: 'CardEdge_pattern_ff',
                        base__ordinary: 'CardEdge_base__ordinary_1c',
                        pointsTitle: 'CardEdge_pointsTitle_ea',
                        base__unusual: 'CardEdge_base__unusual_75',
                        base__rare: 'CardEdge_base__rare_8f',
                        base__legendary: 'CardEdge_base__legendary_cf',
                        base__epic: 'CardEdge_base__epic_28',
                        pointsValue: 'CardEdge_pointsValue_67',
                        blinkEdge: 'CardEdge_blinkEdge_cc',
                        'blink-edge': 'CardEdge_blink-edge_3e',
                        shadow: 'CardEdge_shadow_8b',
                        base__inactive: 'CardEdge_base__inactive_e8',
                        'completed-congrats': 'CardEdge_completed-congrats_24',
                        'completed-glow': 'CardEdge_completed-glow_85',
                        'card-show': 'CardEdge_card-show_32',
                        'card-show-presentment': 'CardEdge_card-show-presentment_c0',
                        dissolve: 'CardEdge_dissolve_77',
                        blink: 'CardEdge_blink_9c',
                        'show-down': 'CardEdge_show-down_1f',
                        'show-up': 'CardEdge_show-up_48',
                        show: 'CardEdge_show_eb',
                        hide: 'CardEdge_hide_a5',
                        showGlow: 'CardEdge_showGlow_5e',
                        hideGlow: 'CardEdge_hideGlow_71',
                        pointFadeOut: 'CardEdge_pointFadeOut_75',
                        pointFadeIn: 'CardEdge_pointFadeIn_0b',
                        first2void: 'CardEdge_first2void_af',
                        second2firstTranslate: 'CardEdge_second2firstTranslate_79',
                        second2firstRotate: 'CardEdge_second2firstRotate_39',
                        third2second: 'CardEdge_third2second_40',
                    },
                    pu = (0, V.Pi)(({ index: e = 0, state: u, rewardsSize: t, infinite: n, classMix: a }) => {
                        const r = Ze().model,
                            i = r.root.get().assetsPointer,
                            o = r.computes.card(e, t, n),
                            d = o.progressionState,
                            l = o.rarity,
                            c = o.maximumPoints,
                            _ = u || (null == d ? void 0 : d.state),
                            E = null == d ? void 0 : d.animation,
                            m = K(i).progression.cards,
                            g = gu({ imagesRoot: m, partName: 'edge', rarity: l, size: t });
                        return s().createElement(
                            'div',
                            {
                                className: p()(
                                    Du.edge,
                                    Du.base,
                                    Du[`base__${l}`],
                                    Du[`base__animation_${E}`],
                                    t === oe.Big && Du.base__big,
                                    Du[`base__${_}`],
                                    null == a ? void 0 : a.edge,
                                ),
                                style: { backgroundImage: g },
                            },
                            s().createElement('div', { className: Du.blinkEdge }),
                            s().createElement(
                                'div',
                                { className: Du.pointsTitle },
                                s().createElement('div', null, R.strings.fun_random.progression.cards.points()),
                            ),
                            s().createElement('div', { className: Du.pointsValue }, s().createElement('div', null, c)),
                            s().createElement('div', {
                                className: p()(Du.pattern, null == a ? void 0 : a.pattern),
                                style: { maskImage: g },
                            }),
                            s().createElement('div', {
                                className: p()(Du.shadow, null == a ? void 0 : a.shadow),
                                style: { maskImage: g },
                            }),
                        );
                    }),
                    hu = (0, V.Pi)(({ index: e = 0, state: u, rewardsSize: t, classMix: n, infinite: r }) => {
                        const o = Ze().model,
                            d = o.root.get().assetsPointer,
                            l = o.computes.card(e, t, r),
                            c = l.progressionState,
                            _ = l.rarity,
                            E = u || (null == c ? void 0 : c.state),
                            m = null == c ? void 0 : c.animation,
                            g = K(d).progression.cards,
                            A = gu({ imagesRoot: g, partName: mu, rarity: _, size: t });
                        return (
                            (0, a.useEffect)(() => {
                                (E !== ne.DetachingActive && E !== ne.Detaching) ||
                                    i.O.sound.play.sound(se.EvFepTearOffCard);
                            }, [E]),
                            s().createElement(
                                'div',
                                {
                                    className: p()(
                                        Ke.base,
                                        Ke[`base__${_}`],
                                        Ke[`base__animation_${m}`],
                                        t === oe.Big && Ke.base__big,
                                        Ke[`base__${E}`],
                                        null == n ? void 0 : n.base,
                                    ),
                                },
                                s().createElement('div', { className: Ke.glow }),
                                s().createElement(pu, { index: e, state: u, rewardsSize: t, classMix: n, infinite: r }),
                                s().createElement('div', { className: Ke.blink }),
                                s().createElement('div', { className: Ke.particles }),
                                s().createElement('div', { className: Ke.image, style: { backgroundImage: A } }),
                                s().createElement(Cu, { index: e, state: u, rewardsSize: t, classMix: n, infinite: r }),
                            )
                        );
                    });
                var Bu = t(7006),
                    fu = t(7641);
                const bu = (e) => {
                    (0, a.useEffect)(() => e, []);
                };
                function vu() {
                    const e = (0, a.useRef)(0);
                    return (
                        bu(() => {
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
                const wu = [xe.Dragging, xe.ShowProgress, xe.Blocked],
                    Tu = (e, u) => Math.abs(e - u) < 0.2,
                    Pu = ({ mediaHeight: e, mediaWidth: u }) => e >= v.Large && u >= b.Small,
                    Ru = (0, V.Pi)(
                        ({
                            children: e,
                            transformRadius: u,
                            cardHeight: t,
                            defaultSelectedElement: n = 0,
                            className: r,
                        }) => {
                            const o = w(),
                                d = o.mediaHeight,
                                l = o.mediaWidth,
                                c = o.remScreenWidth,
                                _ = o.remScreenHeight,
                                E = Ze(),
                                m = E.model.cardsFan,
                                g = m.model,
                                A = m.computes,
                                F = E.controls.cardsFun,
                                C = Pu({ mediaHeight: d, mediaWidth: l }),
                                D = (({ isAssembled: e, mediaHeight: u, mediaWidth: t }) => {
                                    const n = Pu({ mediaHeight: u, mediaWidth: t });
                                    return e ? (!n && u >= v.Medium ? 90 : n ? 60 : 50) : 0;
                                })({ mediaHeight: d, mediaWidth: l, isAssembled: g.assembled.get() }),
                                h = E.model.computes.finalAnimationStatus(),
                                B = h.completedWithAnimation,
                                f = h.completedNoAnimation,
                                b = (({
                                    cardsCount: e,
                                    prevCard: u,
                                    activeCard: t,
                                    isFirstOpen: n,
                                    isBlocked: s,
                                    model: r,
                                    computes: o,
                                    actions: d,
                                }) => {
                                    const l = vu(),
                                        c = l.run,
                                        _ = l.clear,
                                        E = (() => {
                                            const e = (0, a.useRef)([]);
                                            return (0, a.useMemo)(
                                                () => ({
                                                    runSchedule: (u) => {
                                                        e.current.forEach(clearTimeout), (e.current = []);
                                                        let t = 0;
                                                        u.forEach(({ delay: u, action: n, duration: a }) => {
                                                            var s;
                                                            t += u || 0;
                                                            const r = setTimeout(n, t);
                                                            null == (s = e.current) || s.push(r), (t += a || 0);
                                                        });
                                                    },
                                                    clearAll: () => {
                                                        e.current.forEach(clearTimeout), (e.current = []);
                                                    },
                                                }),
                                                [],
                                            );
                                        })(),
                                        m = E.runSchedule,
                                        g = E.clearAll,
                                        A = (0, Bu.useSpring)(() => ({
                                            rotate: r.currentRotation.get(),
                                            onStart: () => {
                                                d.startRotation(),
                                                    o.soundEnabled.get() && i.O.sound.play.sound(se.EvFepCardStartMove);
                                            },
                                            onRest: () => {
                                                o.soundEnabled.get() && i.O.sound.play.sound(se.EvFepCardStopMove);
                                            },
                                            onChange: (e) => {
                                                d.setCurrentRotation(e.value.rotate);
                                            },
                                        }));
                                    bu(() => i.O.sound.play.sound(se.EvFepCardStopMove));
                                    const F = A[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const a = (0, ue.U5)(
                                                    () => o.velocity.get(),
                                                    (e) => {
                                                        void 0 !== e &&
                                                            o.soundEnabled.get() &&
                                                            i.O.sound.setRTPC(se.RtpcExtFepWheelRotation, Math.abs(e));
                                                    },
                                                ),
                                                l = (0, ue.U5)(
                                                    () => r.currentRotation.get(),
                                                    () => {
                                                        if (
                                                            Tu(r.targetRotation.get(), r.currentRotation.get()) &&
                                                            !wu.includes(r.state.get())
                                                        )
                                                            r.state.get() === xe.FirstAnimation
                                                                ? d.runProgressionAnimation()
                                                                : r.state.get() === xe.FinalAnimation
                                                                  ? (d.setAssembled(!0),
                                                                    d.setState(xe.Blocked),
                                                                    i.O.sound.setRTPC(se.RtpcExtFepWheelRotation, 0),
                                                                    i.O.sound.play.sound(se.EvFepCardStopMove),
                                                                    i.O.sound.play.sound(se.EvFepCongratulate))
                                                                  : d.setState(xe.Idle);
                                                        else if (r.state.get() === xe.InertialMovement) {
                                                            const e = 0.75 * r.dragging.speed.get();
                                                            d.setDraggingSpeed(e),
                                                                d.setTargetRotation(r.targetRotation.get() + e);
                                                        }
                                                        (r.state.get() === xe.Idle ||
                                                            (r.state.get() === xe.ShowProgress &&
                                                                r.progress.animation.get() === Le.Init)) &&
                                                            F.set({ rotate: r.currentRotation.get() });
                                                    },
                                                ),
                                                E = (0, ue.U5)(
                                                    () => r.targetRotation.get(),
                                                    () => {
                                                        r.state.get() !== xe.Idle &&
                                                            F.start({
                                                                rotate: r.targetRotation.get(),
                                                                config: o.animationConfig.get(),
                                                            });
                                                    },
                                                ),
                                                A = (0, ue.U5)(
                                                    () => r.state.get(),
                                                    () => {
                                                        r.state.get() === xe.InertialMovement &&
                                                            Tu(r.currentRotation.get(), r.targetRotation.get()) &&
                                                            d.setState(xe.Idle),
                                                            r.state.get() !== xe.Idle ||
                                                            Tu(
                                                                r.currentRotation.get(),
                                                                -r.cardRotation.get() * o.currentCard.get(),
                                                            )
                                                                ? _()
                                                                : c(() => {
                                                                      d.setState(xe.Normalization),
                                                                          d.setTargetRotation(
                                                                              -r.cardRotation.get() *
                                                                                  o.currentCard.get(),
                                                                          );
                                                                  }, 1e3),
                                                            r.state.get() === xe.FirstAnimation &&
                                                                F.set({ rotate: r.currentRotation.get() }),
                                                            r.state.get() === xe.ShowProgress &&
                                                                m(
                                                                    o.progressSchedule
                                                                        .get()
                                                                        .map(
                                                                            ({ delay: e, action: u, duration: t }) => ({
                                                                                delay: e,
                                                                                duration: t,
                                                                                action: d.progress[u],
                                                                            }),
                                                                        ),
                                                                );
                                                    },
                                                ),
                                                C = (0, ue.EH)(() => {
                                                    d.initCardsFan(e, u, t, n, s);
                                                });
                                            return () => {
                                                C(), l(), E(), A(), _(), g(), a();
                                            };
                                        }, [t, F, e, _, g, c, n, s, u, m]),
                                        A
                                    );
                                })({
                                    cardsCount: E.model.stages.get().length,
                                    prevCard: E.model.computes.progressAnimationStartFrom(),
                                    activeCard: E.model.computes.cardActiveIndex(),
                                    isFirstOpen: E.model.root.get().isFirstOpen,
                                    isBlocked: f,
                                    model: g,
                                    computes: A,
                                    actions: F,
                                }),
                                T = b[0].rotate,
                                P = b[1];
                            return (
                                (0, a.useEffect)(() => {
                                    const e = (e) => {
                                        const u = e.deltaY > 1 ? 1 : -1;
                                        F.scroll(u);
                                    };
                                    return (
                                        document.addEventListener('wheel', e),
                                        function () {
                                            document.removeEventListener('wheel', e);
                                        }
                                    );
                                }, [P, F]),
                                (0, a.useEffect)(
                                    () =>
                                        ((e) => {
                                            let n,
                                                a = null;
                                            return (
                                                (a = requestAnimationFrame(() => {
                                                    a = requestAnimationFrame(() => {
                                                        (a = null),
                                                            (n = (() => {
                                                                const e = (e) => {
                                                                        F.startDragging((0, fu.pxToRem)(e.screenX));
                                                                    },
                                                                    n = (e) => {
                                                                        if (g.state.get() === xe.Dragging)
                                                                            if (
                                                                                (0, fu.pxToRem)(e.screenX) < 20 ||
                                                                                (0, fu.pxToRem)(e.screenY) < 20 ||
                                                                                (0, fu.pxToRem)(e.screenY) > _ - 20 ||
                                                                                (0, fu.pxToRem)(e.screenX) > c - 20
                                                                            )
                                                                                F.stopDragging();
                                                                            else {
                                                                                const n =
                                                                                    u + t - (0, fu.pxToRem)(e.screenY);
                                                                                F.drag(n, (0, fu.pxToRem)(e.screenX));
                                                                            }
                                                                    },
                                                                    a = () => {
                                                                        F.stopDragging();
                                                                    },
                                                                    s = () => {
                                                                        F.stopDragging();
                                                                    };
                                                                return (
                                                                    document.addEventListener('mousedown', e),
                                                                    document.addEventListener('mousemove', n),
                                                                    document.addEventListener('mouseup', a),
                                                                    document.addEventListener('mouseleave', s),
                                                                    function () {
                                                                        document.removeEventListener('mousedown', e),
                                                                            document.removeEventListener(
                                                                                'mousemove',
                                                                                n,
                                                                            ),
                                                                            document.removeEventListener('mouseup', a),
                                                                            document.removeEventListener(
                                                                                'mouseleave',
                                                                                s,
                                                                            );
                                                                    }
                                                                );
                                                            })());
                                                    });
                                                })),
                                                () => {
                                                    'function' == typeof n && n(),
                                                        null !== a && cancelAnimationFrame(a);
                                                }
                                            );
                                        })(),
                                    [F, u, t, g.state, _, c],
                                ),
                                s().createElement(
                                    'div',
                                    {
                                        className: p()(
                                            'CardsFan_base_fa',
                                            r,
                                            C && 'CardsFan_base__big_70',
                                            B && 'CardsFan_base__final_1a',
                                        ),
                                    },
                                    s().createElement(
                                        Bu.animated.div,
                                        {
                                            className: 'CardsFan_cardHolder_86',
                                            style: { transformOrigin: `center ${u}rem`, rotate: T },
                                        },
                                        (function (e, u, t) {
                                            const n = [];
                                            for (let a = 0; a < e.length; a++) {
                                                const s = ve(e, a);
                                                u(s, a, e) && n.push(t(s, a, e));
                                            }
                                            return n;
                                        })(
                                            A.cardsMap.get(),
                                            ({ order: e }) =>
                                                e >= A.minVisibleCard.get() && e <= A.maxVisibleCard.get(),
                                            (t) =>
                                                s().createElement(
                                                    'div',
                                                    {
                                                        key: t.key,
                                                        className: p()(
                                                            'CardsFan_card_31',
                                                            t.order === n && 'CardsFan_card__active_02',
                                                        ),
                                                        style: {
                                                            transformOrigin: `center ${u}rem`,
                                                            transform: `rotate(${g.cardRotation.get() * t.order}deg) translateY(${D}%)`,
                                                        },
                                                    },
                                                    e[t.order],
                                                ),
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                function Su() {
                    return (
                        (Su =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Su.apply(this, arguments)
                    );
                }
                const Iu = { cardHeight: 400, transformRadius: 1500, rewardsSize: oe.Big },
                    xu = { cardHeight: 261, transformRadius: 990, rewardsSize: oe.Small },
                    Lu = (0, V.Pi)(({ className: e }) => {
                        const u = Ze(),
                            t = u.model,
                            n = u.controls,
                            r = t.stages.get().length,
                            i = t.computes.finalAnimationStatus().completedWithAnimation,
                            o = t.cardsFan.model.progress.currentCard.get(),
                            d = w(),
                            l = d.mediaHeight,
                            c = d.mediaWidth,
                            _ = l >= v.Large && c >= b.Small ? Iu : xu;
                        return (
                            (0, a.useEffect)(() => {
                                i && n.cardsFun.runFinalAnimation(r);
                            }, [i, r, n.cardsFun]),
                            s().createElement(
                                'div',
                                { className: p()('CardsProgression_base_a3', e) },
                                s().createElement(
                                    Ru,
                                    Su({}, _, { defaultSelectedElement: o, className: 'CardsProgression_cardsFan_3e' }),
                                    ee(r, (e) =>
                                        s().createElement(hu, { key: e, index: e, rewardsSize: _.rewardsSize }),
                                    ),
                                ),
                            )
                        );
                    }),
                    yu = {
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
                let Ou, Nu;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Ou || (Ou = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Nu || (Nu = {}));
                const ku = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: i,
                    soundHover: o,
                    soundClick: d,
                    onMouseEnter: l,
                    onMouseMove: c,
                    onMouseDown: _,
                    onMouseUp: E,
                    onMouseLeave: m,
                    onClick: g,
                }) => {
                    const A = (0, a.useRef)(null),
                        F = (0, a.useState)(t),
                        C = F[0],
                        D = F[1],
                        h = (0, a.useState)(!1),
                        B = h[0],
                        f = h[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                C && null !== A.current && !A.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, a.useEffect)(() => {
                            D(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: A,
                                className: p()(
                                    yu.base,
                                    yu[`base__${n}`],
                                    r && yu.base__disabled,
                                    u && yu[`base__${u}`],
                                    C && yu.base__focus,
                                    B && yu.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== o && M(o), l && l(e));
                                },
                                onMouseMove: function (e) {
                                    c && c(e);
                                },
                                onMouseUp: function (e) {
                                    r || (E && E(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== d && M(d),
                                        _ && _(e),
                                        t && (r || (A.current && (A.current.focus(), D(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (m && m(e), f(!1));
                                },
                                onClick: function (e) {
                                    r || (g && g(e));
                                },
                            },
                            n !== Ou.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: yu.back }),
                                    s().createElement('span', { className: yu.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: p()(yu.state, yu.state__default) },
                                s().createElement('span', { className: yu.stateDisabled }),
                                s().createElement('span', { className: yu.stateHighlightHover }),
                                s().createElement('span', { className: yu.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: yu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ku.defaultProps = { type: Ou.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Mu = ku;
                var Gu = t(1281);
                let Hu;
                function Uu(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Hu || (Hu = {}));
                const qu = (e) => e.replace(/&nbsp;/g, ' '),
                    Qu = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    $u = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Wu = (e, u, t = Hu.left) => e.split(u).reduce(t === Hu.left ? Qu : $u, []),
                    ju = (() => {
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
                    Vu = ['zh_cn', 'zh_sg', 'zh_tw'];
                function zu(e, u, t) {
                    const n = (0, a.useContext)(g);
                    let s = Object.entries(n).filter(([e, u]) => !0 === u && e in d);
                    return (
                        t && (s = s.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const n = s.map((e) =>
                                p()(
                                    u[((e, u) => e + '__' + u)(t, e[0])],
                                    u[
                                        ((e, u) => {
                                            return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                            var t;
                                        })(t, e[0])
                                    ],
                                ),
                            );
                            return (e[t] = p()(u[t], ...n)), e;
                        }, {})
                    );
                }
                let Yu, Xu;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(Yu || (Yu = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(Xu || (Xu = {}));
                var Zu = t(8613);
                Date.now(), Zu.Ew.getRegionalDateTime, Zu.Ew.getFormattedDateTime;
                const Ku = () => {};
                let Ju;
                $.Sw.instance,
                    (function (e) {
                        (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                    })(Ju || (Ju = {})),
                    $.Sw.instance;
                const et = (e = 0, u, t = 0, n = Ku) => {
                        const s = (0, a.useState)(e),
                            r = s[0],
                            i = s[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    i(e);
                                    const a = Date.now(),
                                        s = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - a) / 1e3);
                                                null !== t && u <= t ? (i(t), n && n(), clearInterval(s)) : i(u);
                                            },
                                            1e3 * (u || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [e, u, t, n]),
                            r
                        );
                    },
                    ut = (e) => e.toString().padStart(2, '0'),
                    tt = R.images.gui.maps.icons.components.countdown,
                    nt = (e, u) => {
                        const t = 2 === u ? tt.big : tt;
                        switch (e) {
                            case Yu.Timer:
                                return t.clock();
                            case Yu.Countdown:
                                return t.hourglass();
                            case Yu.Cooldown:
                                return t.lock();
                        }
                    },
                    at = (0, a.memo)(
                        ({
                            duration: e,
                            icon: u = Yu.Timer,
                            style: t = Xu.Description,
                            onTimeReached: n,
                            className: r = '',
                            classNames: o = {},
                        }) => {
                            const d = t !== Xu.Description ? 1 : void 0,
                                l = et(e, d),
                                c = (() => {
                                    const e = (0, a.useState)(i.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const e = () => {
                                                t(i.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        u
                                    );
                                })();
                            n && n[l] && n[l]();
                            const _ = ((e, u) => {
                                switch (u) {
                                    case Xu.Description:
                                        return ((e, u = !0) =>
                                            e.days > 7 && u
                                                ? Uu(R.strings.common.duration.days(), { days: e.days })
                                                : e.days >= 1
                                                  ? 0 === e.hours
                                                      ? Uu(R.strings.common.duration.days(), { days: e.days })
                                                      : `${Uu(R.strings.common.duration.days(), { days: e.days })} ${Uu(R.strings.common.duration.hours(), { hours: e.hours })}`
                                                  : e.hours >= 1
                                                    ? 0 === e.minutes
                                                        ? Uu(R.strings.common.duration.hours(), { hours: e.hours })
                                                        : `${Uu(R.strings.common.duration.hours(), { hours: e.hours })} ${Uu(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                                    : Uu(R.strings.common.duration.minutes(), {
                                                          minutes: e.minutes || 1,
                                                      }))(e);
                                    case Xu.Short:
                                        return `${ut(e.minutes)}:${ut(e.seconds)}`;
                                    case Xu.Long:
                                        return `${ut(e.hours)}:${ut(e.minutes)}:${ut(e.seconds)}`;
                                    case Xu.Extended:
                                        return `${Uu(R.strings.common.duration.days(), { days: e.days })} | ${ut(e.hours)}:${ut(e.minutes)}:${ut(e.seconds)}`;
                                }
                            })(
                                (function (e = 0) {
                                    let u = e;
                                    const t = Math.trunc(u / 86400);
                                    u -= 86400 * t;
                                    const n = Math.trunc(u / 3600);
                                    u -= 3600 * n;
                                    const a = Math.trunc(u / 60);
                                    return (u -= 60 * a), { days: t, hours: n, minutes: a, seconds: u };
                                })(l),
                                t,
                            );
                            return s().createElement(
                                'div',
                                { className: p()('Countdown_base_fe', r) },
                                u !== Yu.None &&
                                    s().createElement('div', {
                                        className: p()('Countdown_icon_8b', o.icon),
                                        style: { backgroundImage: `url('${nt(u, c)}')` },
                                    }),
                                s().createElement('div', { className: p()('Countdown_description_8d', o.text) }, _),
                            );
                        },
                    ),
                    st = ({ binding: e, text: u = '', classMix: t, alignment: n = Hu.left, formatWithBrackets: r }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const i = r && e ? Uu(u, e) : u;
                        return s().createElement(
                            a.Fragment,
                            null,
                            i.split('\n').map((u, r) =>
                                s().createElement(
                                    'div',
                                    { className: p()('FormatText_base_d0', t), key: `${u}-${r}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = Hu.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return Vu.includes(t)
                                                          ? ju(e)
                                                          : 'ja' === t
                                                            ? (0, Gu.D4)()
                                                                  .parse(e)
                                                                  .map((e) => qu(e))
                                                            : ((e, u = Hu.left) => {
                                                                  let t = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      a = qu(e);
                                                                  return (
                                                                      Wu(a, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(Wu(e, n, Hu.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, n, e).map((e, u) =>
                                        s().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    rt = 'Timer_line_d3',
                    it = 'Timer_point_f4',
                    ot = (0, V.Pi)(({ classNames: e }) => {
                        const u = Ze().model,
                            t = u.computes.pageStatus(),
                            n = Re(t),
                            a = n.isResettable,
                            r = n.isInfinite,
                            i = u.computes.finalAnimationStatus().completedWithAnimation,
                            o = u.infiniteCondition.get(),
                            d = { statusTimer: u.condition.statusTimer.get() },
                            l = (r ? o : d).statusTimer,
                            c = a
                                ? R.strings.fun_random.progression.questsList.questsRenewTimerTitle()
                                : R.strings.fun_random.progression.questsList.questsFinishTimerTitle();
                        return s().createElement(
                            'div',
                            { className: p()('Timer_base_77', i && 'Timer_base__hide_e9', e) },
                            s().createElement(
                                'div',
                                { className: 'Timer_titleSeparatorLeft_23' },
                                s().createElement('div', { className: rt }),
                                s().createElement('div', { className: it }),
                            ),
                            s().createElement(st, {
                                classMix: 'Timer_questsRenewTimerTitle_4c',
                                text: c,
                                binding: { time: s().createElement(at, { duration: l }) },
                            }),
                            s().createElement(
                                'div',
                                { className: 'Timer_titleSeparatorRight_6f' },
                                s().createElement('div', { className: it }),
                                s().createElement('div', { className: rt }),
                            ),
                        );
                    }),
                    dt = {
                        base: 'CompletedProgression_base_c2',
                        container: 'CompletedProgression_container_ad',
                        base__final: 'CompletedProgression_base__final_14',
                        'show-up': 'CompletedProgression_show-up_ec',
                        base__static: 'CompletedProgression_base__static_32',
                        base__resettable: 'CompletedProgression_base__resettable_5c',
                        base__large: 'CompletedProgression_base__large_40',
                        base__extraLarge: 'CompletedProgression_base__extraLarge_0e',
                        base__medium: 'CompletedProgression_base__medium_a7',
                        icon: 'CompletedProgression_icon_00',
                        glow: 'CompletedProgression_glow_a4',
                        'completed-glow': 'CompletedProgression_completed-glow_84',
                        title: 'CompletedProgression_title_ff',
                        congrats: 'CompletedProgression_congrats_9f',
                        congratsSubtitle: 'CompletedProgression_congratsSubtitle_57',
                        'completed-congrats': 'CompletedProgression_completed-congrats_e7',
                        timer: 'CompletedProgression_timer_68',
                        button: 'CompletedProgression_button_5a',
                        show: 'CompletedProgression_show_16',
                        'card-show': 'CompletedProgression_card-show_e3',
                        'card-show-presentment': 'CompletedProgression_card-show-presentment_ba',
                        edge: 'CompletedProgression_edge_e9',
                        dissolve: 'CompletedProgression_dissolve_8c',
                        'blink-edge': 'CompletedProgression_blink-edge_72',
                        blink: 'CompletedProgression_blink_09',
                        'show-down': 'CompletedProgression_show-down_84',
                        hide: 'CompletedProgression_hide_c2',
                        showGlow: 'CompletedProgression_showGlow_04',
                        hideGlow: 'CompletedProgression_hideGlow_c3',
                        pointFadeOut: 'CompletedProgression_pointFadeOut_aa',
                        pointFadeIn: 'CompletedProgression_pointFadeIn_37',
                        first2void: 'CompletedProgression_first2void_74',
                        second2firstTranslate: 'CompletedProgression_second2firstTranslate_44',
                        second2firstRotate: 'CompletedProgression_second2firstRotate_37',
                        third2second: 'CompletedProgression_third2second_90',
                    },
                    lt = (0, V.Pi)(() => {
                        const e = Ze(),
                            u = e.model,
                            t = e.controls,
                            n = u.computes.pageStatus(),
                            a = Re(n),
                            r = a.isCompleted,
                            i = a.isResettable,
                            o = u.root.get().assetsPointer,
                            d = Z('progression', { assetsPointer: o }).dynamicTexts,
                            l = !u.computes.needChangePage(),
                            c = zu(['base'], dt),
                            _ = K(o).battle_type.c_136x136.fun_random();
                        return r
                            ? s().createElement(
                                  'div',
                                  {
                                      className: p()(
                                          c.base,
                                          dt.base__final,
                                          l && dt.base__static,
                                          i && dt.base__resettable,
                                      ),
                                  },
                                  s().createElement(
                                      'div',
                                      { className: dt.container },
                                      s().createElement('div', {
                                          className: dt.icon,
                                          style: { backgroundImage: `url('${_}')` },
                                      }),
                                      s().createElement('div', { className: dt.title }, d.title()),
                                      s().createElement('div', { className: dt.glow }),
                                      s().createElement(
                                          'div',
                                          { className: dt.congrats },
                                          d.complete.congratulations(),
                                      ),
                                      s().createElement('div', { className: dt.congratsSubtitle }, d.complete.title()),
                                      s().createElement(ot, { classNames: dt.timer }),
                                  ),
                                  s().createElement(
                                      Mu,
                                      { mixClass: dt.button, onClick: t.close },
                                      R.strings.fun_random.progression.complete.affirmative(),
                                  ),
                              )
                            : null;
                    }),
                    ct = {
                        base: 'Header_base_d2',
                        base__hide: 'Header_base__hide_ef',
                        title: 'Header_title_dd',
                        title__faded: 'Header_title__faded_ff',
                        base__medium: 'Header_base__medium_fd',
                        base__large: 'Header_base__large_30',
                        base__extraLarge: 'Header_base__extraLarge_98',
                        base__active: 'Header_base__active_b3',
                        congratsSubtitle: 'Header_congratsSubtitle_a8',
                        'completed-congrats': 'Header_completed-congrats_69',
                        'completed-glow': 'Header_completed-glow_31',
                        'card-show': 'Header_card-show_89',
                        'card-show-presentment': 'Header_card-show-presentment_72',
                        edge: 'Header_edge_14',
                        dissolve: 'Header_dissolve_ae',
                        'blink-edge': 'Header_blink-edge_de',
                        blink: 'Header_blink_8c',
                        'show-down': 'Header_show-down_f0',
                        'show-up': 'Header_show-up_bd',
                        show: 'Header_show_eb',
                        hide: 'Header_hide_e1',
                        showGlow: 'Header_showGlow_94',
                        hideGlow: 'Header_hideGlow_af',
                        pointFadeOut: 'Header_pointFadeOut_0a',
                        pointFadeIn: 'Header_pointFadeIn_bb',
                        first2void: 'Header_first2void_b4',
                        second2firstTranslate: 'Header_second2firstTranslate_97',
                        second2firstRotate: 'Header_second2firstRotate_49',
                        third2second: 'Header_third2second_49',
                    },
                    _t = (0, V.Pi)(({ className: e }) => {
                        const u = Ze().model,
                            t = u.computes.pageStatus(),
                            n = u.computes.finalAnimationStatus(),
                            a = n.completedWithAnimation,
                            r = n.completedNoAnimation,
                            i = Re(t).isActive,
                            o = u.root.get().assetsPointer,
                            d = Z('progression', { assetsPointer: o }).dynamicTexts,
                            l = zu(['base'], ct);
                        return r
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: p()(l.base, a && ct.base__hide, i && ct.base__active, e) },
                                  s().createElement('div', { className: ct.title }, d.title()),
                                  s().createElement(ot, null),
                              );
                    });
                var Et = t(8475);
                const mt = {
                        base: 'InfiniteCard_base_b8',
                        'card-show': 'InfiniteCard_card-show_fe',
                        base__first: 'InfiniteCard_base__first_89',
                        base__second: 'InfiniteCard_base__second_68',
                        base__third: 'InfiniteCard_base__third_1c',
                        base__fourth: 'InfiniteCard_base__fourth_c1',
                        show: 'InfiniteCard_show_5a',
                        base__presentment: 'InfiniteCard_base__presentment_64',
                        'card-show-presentment': 'InfiniteCard_card-show-presentment_24',
                        shadow: 'InfiniteCard_shadow_9c',
                        cardWrapper: 'InfiniteCard_cardWrapper_1f',
                        cardWrapper__enter: 'InfiniteCard_cardWrapper__enter_ab',
                        first2void: 'InfiniteCard_first2void_95',
                        cardWrapper__enterDone: 'InfiniteCard_cardWrapper__enterDone_d5',
                        second2firstTranslate: 'InfiniteCard_second2firstTranslate_3d',
                        second2firstRotate: 'InfiniteCard_second2firstRotate_50',
                        third2second: 'InfiniteCard_third2second_38',
                        'completed-congrats': 'InfiniteCard_completed-congrats_d4',
                        'completed-glow': 'InfiniteCard_completed-glow_e5',
                        edge: 'InfiniteCard_edge_75',
                        dissolve: 'InfiniteCard_dissolve_bd',
                        'blink-edge': 'InfiniteCard_blink-edge_df',
                        blink: 'InfiniteCard_blink_4b',
                        'show-down': 'InfiniteCard_show-down_ce',
                        'show-up': 'InfiniteCard_show-up_4b',
                        hide: 'InfiniteCard_hide_b2',
                        showGlow: 'InfiniteCard_showGlow_47',
                        hideGlow: 'InfiniteCard_hideGlow_19',
                        pointFadeOut: 'InfiniteCard_pointFadeOut_50',
                        pointFadeIn: 'InfiniteCard_pointFadeIn_aa',
                    },
                    gt = 'first',
                    At = 'second',
                    Ft = 'third',
                    Ct = 'fourth',
                    Dt = {
                        [Ct]: { timeout: 1e3, nextOnEntering: !1 },
                        [Ft]: { timeout: 1400, nextOnEntering: !1 },
                        [At]: { timeout: 1400, nextOnEntering: !0 },
                        [gt]: { timeout: 2500, nextOnEntering: !1 },
                    },
                    pt = (0, V.Pi)(({ postfix: e, isDetached: u, nextTrigger: t, isBig: n, isTransitionActive: r }) => {
                        const o = Ze().model,
                            d = (0, a.useRef)(!0),
                            l = o.computes.needChangePage(),
                            c = Dt[e],
                            _ = c.timeout,
                            E = c.nextOnEntering,
                            m = e === gt,
                            g = e === Ct,
                            A = n ? oe.Big : oe.Small,
                            F = u ? ne.Detaching : ne.Inactive;
                        return s().createElement(
                            'div',
                            {
                                className: p()(
                                    mt.base,
                                    n && mt.base__big,
                                    mt[`base__${e}`],
                                    !m && mt.base__completed,
                                    l && mt.base__presentment,
                                ),
                                key: e,
                                onAnimationStart: () => {
                                    d.current && !g && (i.O.sound.play.sound(se.EvFepCardChange), (d.current = !1));
                                },
                            },
                            s().createElement(
                                Et.Z,
                                {
                                    onEntered: E ? We : t,
                                    onEntering: E ? t : We,
                                    in: r,
                                    timeout: _,
                                    key: e,
                                    className: mt.cardWrapper,
                                    classNames: { enter: mt.cardWrapper__enter, enterDone: mt.cardWrapper__enterDone },
                                },
                                s().createElement(
                                    'div',
                                    { className: mt.cardWrapper },
                                    s().createElement(hu, {
                                        infinite: !0,
                                        classMix: { content: mt.content, shadow: mt.shadow, pattern: mt.pattern },
                                        state: F,
                                        rewardsSize: A,
                                    }),
                                ),
                            ),
                        );
                    }),
                    ht = [Ct, Ft, At, gt],
                    Bt = ({ startAllowed: e, progressLevelUps: u }) => {
                        const t = vu(),
                            n = w(),
                            r = n.mediaHeight,
                            o = n.mediaWidth,
                            d = (0, a.useState)(0),
                            l = d[0],
                            c = d[1],
                            _ = (0, a.useState)(!1),
                            E = _[0],
                            m = _[1],
                            g = (0, a.useState)(u),
                            A = g[0],
                            F = g[1],
                            C = r >= v.Medium && o >= b.Small;
                        return (
                            (0, a.useEffect)(
                                () => (
                                    e &&
                                        A > 0 &&
                                        t.run(() => {
                                            c(1), m(!0);
                                        }, 300),
                                    () => {
                                        t.clear();
                                    }
                                ),
                                [e, A, E, t],
                            ),
                            s().createElement(
                                'div',
                                { className: p()('InfiniteCards_base_39', C && 'InfiniteCards_base__big_1a') },
                                ht.map((e, u) =>
                                    s().createElement(pt, {
                                        key: e,
                                        nextTrigger: () =>
                                            ((e) => {
                                                i.O.sound.play.sound(se.EvFepCardChange),
                                                    0 === e ? (F((e) => e - 1), m(!1), c(0)) : c(ht.length + 1 - e);
                                            })(u),
                                        isTransitionActive: l > ht.length - 1 - u,
                                        postfix: e,
                                        isDetached: E && l > 0 && 'first' === e,
                                        isBig: C,
                                    }),
                                ),
                            )
                        );
                    };
                var ft = t(2558);
                let bt;
                !(function (e) {
                    (e.Active = 'active'), (e.Completed = 'completed');
                })(bt || (bt = {}));
                const vt = {
                        base: 'Quest_base_24',
                        base__completed: 'Quest_base__completed_19',
                        base__single_quest: 'Quest_base__single_quest_2b',
                        base__infinite: 'Quest_base__infinite_3e',
                        base__cursor_grab: 'Quest_base__cursor_grab_c0',
                        conditionIcon: 'Quest_conditionIcon_13',
                        questIcon: 'Quest_questIcon_2e',
                        questContent: 'Quest_questContent_01',
                        base__big: 'Quest_base__big_f0',
                        questProgress: 'Quest_questProgress_40',
                        questProgressCurrent: 'Quest_questProgressCurrent_93',
                        questTitle: 'Quest_questTitle_07',
                        questPoints: 'Quest_questPoints_88',
                        questPoint: 'Quest_questPoint_ef',
                        questPointTitle: 'Quest_questPointTitle_e9',
                        questPointScore: 'Quest_questPointScore_dc',
                        questPointBreak: 'Quest_questPointBreak_ae',
                    },
                    wt = ({ mainBonusCount: e, state: u, totalPoints: t, altBonusCount: n }) => {
                        const a = R.strings.fun_random.progression.questsList.quest.progressChangeLabel;
                        return u === bt.Completed
                            ? [{ labelTemplate: a.pointsEarned(), valueTemplate: null, value: t.toString() }]
                            : n
                              ? [
                                    {
                                        labelTemplate: a.forWin(),
                                        valueTemplate: R.strings.fun_random.progression.questsList.quest.pointsPlus(),
                                        value: e,
                                    },
                                    {
                                        labelTemplate: a.forLoss(),
                                        valueTemplate: R.strings.fun_random.progression.questsList.quest.pointsPlus(),
                                        value: n,
                                    },
                                ]
                              : [
                                    {
                                        labelTemplate: a.forCompletion(),
                                        valueTemplate: R.strings.fun_random.progression.questsList.quest.pointsPlus(),
                                        value: e,
                                    },
                                ];
                    },
                    Tt = (0, V.Pi)(({ className: e, index: u = 0 }) => {
                        const t = Ze().model,
                            n = t.computes.quest(u),
                            a = t.cardsFan.computes.cursor,
                            r = w(),
                            i = r.mediaWidth,
                            o = r.remScreenWidth,
                            d = 1 === t.quests.get().length,
                            l = ((e, u, t) => {
                                const n = t >= b.Large ? 64 : 32;
                                return {
                                    backgroundImage: `url(${u === bt.Completed ? R.images.fun_random.gui.maps.icons.feature.quest.icon_mission_completed() : R.images.gui.maps.icons.missions.icons.$dyn(`c_${n}_${e}_silver`)})`,
                                };
                            })(n.iconKey, n.state, i),
                            c = wt(n),
                            _ = c[0],
                            E = c[1],
                            m = o >= 1500 ? 'big' : 'small';
                        return s().createElement(
                            'div',
                            {
                                className: p()(
                                    vt.base,
                                    vt[`base__${m}`],
                                    vt[`base__${n.state}`],
                                    vt[`base__cursor_${a}`],
                                    d && vt.base__single_quest,
                                    e,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: vt.conditionIcon },
                                s().createElement('div', { className: vt.questIcon, style: l }),
                            ),
                            s().createElement(
                                'div',
                                { className: vt.questContent },
                                n.totalProgress >= 99
                                    ? s().createElement(
                                          'div',
                                          { className: vt.questProgress },
                                          R.strings.fun_random.progression.questsList.quest.infinityProgress(),
                                      )
                                    : s().createElement(st, {
                                          text: R.strings.fun_random.progression.questsList.quest.progressTitle(),
                                          classMix: vt.questProgress,
                                          binding: {
                                              currentPoints: s().createElement(
                                                  'div',
                                                  { className: vt.questProgressCurrent },
                                                  n.currentProgress,
                                              ),
                                              totalPoints: n.totalProgress,
                                          },
                                      }),
                                s().createElement('div', { className: vt.questTitle }, n.description),
                                s().createElement(
                                    'div',
                                    { className: vt.questPoints },
                                    s().createElement(st, {
                                        text: _.labelTemplate,
                                        classMix: vt.questPointTitle,
                                        binding: {
                                            points: _.valueTemplate
                                                ? s().createElement(st, {
                                                      text: _.valueTemplate,
                                                      classMix: vt.questPointScore,
                                                      binding: { pointsCount: _.value },
                                                  })
                                                : s().createElement('div', { className: vt.questPointScore }, _.value),
                                        },
                                    }),
                                    E &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', { className: vt.questPointBreak }),
                                            s().createElement(st, {
                                                text: E.labelTemplate,
                                                classMix: vt.questPointTitle,
                                                binding: {
                                                    points: E.valueTemplate
                                                        ? s().createElement(st, {
                                                              text: E.valueTemplate,
                                                              classMix: vt.questPointScore,
                                                              binding: { pointsCount: E.value },
                                                          })
                                                        : s().createElement(
                                                              'div',
                                                              { className: vt.questPointScore },
                                                              E.value,
                                                          ),
                                                },
                                            }),
                                        ),
                                ),
                            ),
                        );
                    }),
                    Pt = {
                        base: 'InfiniteQuestCondition_base_a3',
                        conditionsDescription: 'InfiniteQuestCondition_conditionsDescription_c8',
                        conditionsPoints: 'InfiniteQuestCondition_conditionsPoints_1c',
                        conditionsPointsItem: 'InfiniteQuestCondition_conditionsPointsItem_64',
                        currentPoint: 'InfiniteQuestCondition_currentPoint_2a',
                        currentPointItem: 'InfiniteQuestCondition_currentPointItem_27',
                        currentPointItem__enter: 'InfiniteQuestCondition_currentPointItem__enter_d5',
                        pointFadeIn: 'InfiniteQuestCondition_pointFadeIn_42',
                        currentPointItem__exit: 'InfiniteQuestCondition_currentPointItem__exit_3a',
                        pointFadeOut: 'InfiniteQuestCondition_pointFadeOut_c1',
                        'completed-congrats': 'InfiniteQuestCondition_completed-congrats_8a',
                        'completed-glow': 'InfiniteQuestCondition_completed-glow_ce',
                        'card-show': 'InfiniteQuestCondition_card-show_07',
                        'card-show-presentment': 'InfiniteQuestCondition_card-show-presentment_3f',
                        edge: 'InfiniteQuestCondition_edge_6a',
                        dissolve: 'InfiniteQuestCondition_dissolve_69',
                        'blink-edge': 'InfiniteQuestCondition_blink-edge_f8',
                        blink: 'InfiniteQuestCondition_blink_8d',
                        'show-down': 'InfiniteQuestCondition_show-down_23',
                        'show-up': 'InfiniteQuestCondition_show-up_37',
                        show: 'InfiniteQuestCondition_show_36',
                        hide: 'InfiniteQuestCondition_hide_cd',
                        showGlow: 'InfiniteQuestCondition_showGlow_c6',
                        hideGlow: 'InfiniteQuestCondition_hideGlow_78',
                        first2void: 'InfiniteQuestCondition_first2void_1f',
                        second2firstTranslate: 'InfiniteQuestCondition_second2firstTranslate_b6',
                        second2firstRotate: 'InfiniteQuestCondition_second2firstRotate_0a',
                        third2second: 'InfiniteQuestCondition_third2second_a5',
                    },
                    Rt = (0, V.Pi)(({ points: e, className: u, delay: t }) => {
                        const n = Ze().model.infiniteCondition.get().maximumPoints;
                        return s().createElement(
                            'div',
                            { className: p()(Pt.base, u) },
                            s().createElement(
                                'div',
                                { className: Pt.conditionsPoints },
                                s().createElement(
                                    'div',
                                    { className: Pt.conditionsDescription },
                                    R.strings.fun_random.progression.infinite.pointsEarned(),
                                ),
                                s().createElement(
                                    'div',
                                    { className: p()(Pt.conditionsPointsItem, Pt.conditionsPointsItem__divider) },
                                    s().createElement(st, {
                                        text: R.strings.fun_random.progression.infinite.steps(),
                                        binding: {
                                            done: s().createElement(
                                                ft.Z,
                                                { className: Pt.currentPoint },
                                                s().createElement(
                                                    Et.Z,
                                                    {
                                                        key: `points-${e}`,
                                                        timeout: t,
                                                        onExited: () => {
                                                            i.O.sound.play.sound(se.EvFepCounterChange);
                                                        },
                                                        classNames: {
                                                            enter: Pt.currentPointItem__enter,
                                                            exit: Pt.currentPointItem__exit,
                                                        },
                                                    },
                                                    s().createElement('div', { className: Pt.currentPointItem }, e),
                                                ),
                                            ),
                                            total: s().createElement('div', { className: Pt.conditionsPointsItem }, n),
                                        },
                                    }),
                                ),
                            ),
                        );
                    }),
                    St = 'InfiniteQuest_questPointTitle_40',
                    It = 'InfiniteQuest_questPointScore_88',
                    xt = (0, V.Pi)(({ progress: e }) => {
                        const u = Ze().model,
                            t = u.root.get().assetsPointer,
                            a = u.computes.infiniteQuest(),
                            r = Z('progression', { assetsPointer: t }).dynamicTexts,
                            i = wt(a),
                            o = i[0],
                            d = i[1];
                        return s().createElement(
                            'div',
                            { className: 'InfiniteQuest_base_9e' },
                            s().createElement(
                                'div',
                                { className: 'InfiniteQuest_questContent_fe' },
                                s().createElement(st, {
                                    text: r.questsList.quest.infinityStageProgress(),
                                    classMix: 'InfiniteQuest_questProgress_e6',
                                    binding: {
                                        currentPoints: s().createElement(
                                            ft.Z,
                                            { className: 'InfiniteQuest_questProgressCurrent_28' },
                                            s().createElement(
                                                Et.Z,
                                                {
                                                    key: `progress-${e}`,
                                                    timeout: n.TRANSITION_DELAY,
                                                    classNames: {
                                                        enter: 'InfiniteQuest_questProgressCurrentItem__enter_eb',
                                                        exit: 'InfiniteQuest_questProgressCurrentItem__exit_f3',
                                                    },
                                                },
                                                s().createElement(
                                                    'div',
                                                    { className: 'InfiniteQuest_questProgressCurrentItem_f4' },
                                                    e,
                                                ),
                                            ),
                                        ),
                                        infinitySign: s().createElement('div', {
                                            className: 'InfiniteQuest_infinity_b3',
                                        }),
                                    },
                                }),
                                s().createElement('div', { className: 'InfiniteQuest_questTitle_cd' }, a.description),
                                s().createElement(
                                    'div',
                                    { className: 'InfiniteQuest_questPoints_6e' },
                                    s().createElement(st, {
                                        text: o.labelTemplate,
                                        classMix: St,
                                        binding: {
                                            points: o.valueTemplate
                                                ? s().createElement(st, {
                                                      text: o.valueTemplate,
                                                      classMix: It,
                                                      binding: { pointsCount: o.value },
                                                  })
                                                : s().createElement('div', { className: It }, o.value),
                                        },
                                    }),
                                    d &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', { className: 'InfiniteQuest_questPointBreak_8a' }),
                                            s().createElement(st, {
                                                text: d.labelTemplate,
                                                classMix: St,
                                                binding: {
                                                    points: d.valueTemplate
                                                        ? s().createElement(st, {
                                                              text: d.valueTemplate,
                                                              classMix: It,
                                                              binding: { pointsCount: d.value },
                                                          })
                                                        : s().createElement('div', { className: It }, d.value),
                                                },
                                            }),
                                        ),
                                ),
                            ),
                        );
                    }),
                    Lt = {
                        base: 'InfiniteTitle_base_90',
                        base__shown: 'InfiniteTitle_base__shown_67',
                        'show-down': 'InfiniteTitle_show-down_1b',
                        glow: 'InfiniteTitle_glow_b3',
                        glow__show: 'InfiniteTitle_glow__show_5c',
                        show: 'InfiniteTitle_show_47',
                        hide: 'InfiniteTitle_hide_e7',
                        base__medium: 'InfiniteTitle_base__medium_69',
                        base__large: 'InfiniteTitle_base__large_64',
                        base__extraLarge: 'InfiniteTitle_base__extraLarge_78',
                        title: 'InfiniteTitle_title_2c',
                        mainHeader: 'InfiniteTitle_mainHeader_64',
                        congrats: 'InfiniteTitle_congrats_6f',
                        congrats__hidden: 'InfiniteTitle_congrats__hidden_0b',
                        subtitle: 'InfiniteTitle_subtitle_e9',
                        subtitle__uppercase: 'InfiniteTitle_subtitle__uppercase_e0',
                        subtitle__faded: 'InfiniteTitle_subtitle__faded_a3',
                        congratsSubtitle: 'InfiniteTitle_congratsSubtitle_c7',
                        congratsSubtitle__hidden: 'InfiniteTitle_congratsSubtitle__hidden_40',
                        'completed-congrats': 'InfiniteTitle_completed-congrats_f8',
                        'completed-glow': 'InfiniteTitle_completed-glow_25',
                        'card-show': 'InfiniteTitle_card-show_1e',
                        'card-show-presentment': 'InfiniteTitle_card-show-presentment_f8',
                        edge: 'InfiniteTitle_edge_8e',
                        dissolve: 'InfiniteTitle_dissolve_8f',
                        'blink-edge': 'InfiniteTitle_blink-edge_6f',
                        blink: 'InfiniteTitle_blink_82',
                        'show-up': 'InfiniteTitle_show-up_d7',
                        showGlow: 'InfiniteTitle_showGlow_74',
                        hideGlow: 'InfiniteTitle_hideGlow_68',
                        pointFadeOut: 'InfiniteTitle_pointFadeOut_93',
                        pointFadeIn: 'InfiniteTitle_pointFadeIn_a3',
                        first2void: 'InfiniteTitle_first2void_67',
                        second2firstTranslate: 'InfiniteTitle_second2firstTranslate_ea',
                        second2firstRotate: 'InfiniteTitle_second2firstRotate_07',
                        third2second: 'InfiniteTitle_third2second_2e',
                    },
                    yt = (0, V.Pi)(() => {
                        const e = Ze().model,
                            u = e.root.get().assetsPointer,
                            t = e.computes.needChangePage(),
                            n = e.infiniteCondition.get().title,
                            r = Z('progression', { assetsPointer: u }).dynamicTexts,
                            i = zu(['base'], Lt),
                            o = (0, a.useState)(!1),
                            d = o[0],
                            l = o[1],
                            c = (0, a.useState)(!t),
                            _ = c[0],
                            E = c[1],
                            m = (0, a.useState)(!t),
                            g = m[0],
                            A = m[1];
                        return s().createElement(
                            'div',
                            {
                                className: p()(i.base, Lt.base__shown),
                                onAnimationEnd: () => {
                                    t && l(!0);
                                },
                            },
                            s().createElement('div', {
                                className: p()(Lt.glow, d && Lt.glow__show),
                                onAnimationEnd: () => E(!0),
                            }),
                            s().createElement('div', { className: Lt.title }, n),
                            g
                                ? s().createElement(
                                      'div',
                                      { className: Lt.mainHeader },
                                      s().createElement(
                                          'div',
                                          { className: p()(Lt.subtitle, Lt.subtitle__main, Lt.subtitle__uppercase) },
                                          r.infinite.infinityStep(),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: p()(Lt.subtitle, Lt.subtitle__main) },
                                          s().createElement(ot, null),
                                      ),
                                  )
                                : s().createElement(
                                      'div',
                                      {
                                          className: p()(Lt.congrats, _ && Lt.congrats__hidden),
                                          onTransitionEnd: () => A(!0),
                                      },
                                      s().createElement(
                                          'div',
                                          { className: Lt.subtitle },
                                          r.infinite.congratulations(),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: p()(Lt.congratsSubtitle, _ && Lt.congratsSubtitle__hidden) },
                                          r.infinite.mainProgressionFinished(),
                                      ),
                                  ),
                        );
                    }),
                    Ot = {
                        base: 'InfiniteProgression_base_e3',
                        content: 'InfiniteProgression_content_68',
                        questContainer: 'InfiniteProgression_questContainer_fe',
                        'show-up': 'InfiniteProgression_show-up_84',
                        base__medium: 'InfiniteProgression_base__medium_ba',
                        base__large: 'InfiniteProgression_base__large_52',
                        base__extraLarge: 'InfiniteProgression_base__extraLarge_da',
                        questCondition: 'InfiniteProgression_questCondition_b5',
                        'completed-congrats': 'InfiniteProgression_completed-congrats_18',
                        'completed-glow': 'InfiniteProgression_completed-glow_6d',
                        'card-show': 'InfiniteProgression_card-show_fb',
                        'card-show-presentment': 'InfiniteProgression_card-show-presentment_a5',
                        edge: 'InfiniteProgression_edge_10',
                        dissolve: 'InfiniteProgression_dissolve_23',
                        'blink-edge': 'InfiniteProgression_blink-edge_d6',
                        blink: 'InfiniteProgression_blink_b9',
                        'show-down': 'InfiniteProgression_show-down_73',
                        show: 'InfiniteProgression_show_c1',
                        hide: 'InfiniteProgression_hide_87',
                        showGlow: 'InfiniteProgression_showGlow_0f',
                        hideGlow: 'InfiniteProgression_hideGlow_fa',
                        pointFadeOut: 'InfiniteProgression_pointFadeOut_74',
                        pointFadeIn: 'InfiniteProgression_pointFadeIn_07',
                        first2void: 'InfiniteProgression_first2void_92',
                        second2firstTranslate: 'InfiniteProgression_second2firstTranslate_fb',
                        second2firstRotate: 'InfiniteProgression_second2firstRotate_86',
                        third2second: 'InfiniteProgression_third2second_77',
                    },
                    Nt = (0, V.Pi)(() => {
                        const e = vu(),
                            u = Ze().model,
                            t = u.computes.needChangePage(),
                            n = u.infiniteCondition.get(),
                            r = n.prevCompleteCount,
                            i = n.completeCount,
                            o = n.prevPoints,
                            d = n.currentPoints,
                            l = (0, a.useState)({ previous: o, current: d }),
                            c = l[0],
                            _ = l[1],
                            E = (0, a.useState)(r),
                            m = E[0],
                            g = E[1],
                            A = zu(['base'], Ot),
                            F = t ? 4100 : 3500,
                            C = c.previous === c.current && m === i;
                        return (
                            (0, a.useEffect)(
                                () => (
                                    _({ previous: o, current: d }),
                                    g(r),
                                    e.run(() => {
                                        _((e) => ({ previous: e.current, current: e.current })), g(i);
                                    }, F),
                                    () => {
                                        e.clear();
                                    }
                                ),
                                [i, e, F, o, d, r],
                            ),
                            s().createElement(
                                'div',
                                { className: A.base },
                                s().createElement(yt, null),
                                s().createElement(
                                    'div',
                                    { className: Ot.content },
                                    s().createElement(Bt, { startAllowed: C, progressLevelUps: i - r }),
                                    s().createElement(
                                        'div',
                                        { className: Ot.questContainer },
                                        s().createElement(xt, { progress: m }),
                                        s().createElement(Rt, {
                                            className: Ot.questCondition,
                                            delay: i - r > 0 ? 4400 : 1e3,
                                            points: c.previous,
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    kt = 'CurrentPoints_base_85',
                    Mt = ({ prevPoints: e, currentPoints: u, animate: t, className: n }) => (
                        (0, a.useEffect)(() => {
                            t && e !== u && i.O.sound.play.sound(se.EvFepCounterChange);
                        }, [t, u, e]),
                        t && e !== u
                            ? s().createElement(
                                  'div',
                                  { className: p()(kt, n) },
                                  s().createElement('div', { className: 'CurrentPoints_text_63' }, u),
                                  s().createElement('div', { className: 'CurrentPoints_prev_d0' }, e),
                                  s().createElement('div', { className: 'CurrentPoints_current_5c' }, u),
                              )
                            : s().createElement('div', { className: p()(kt, n) }, e)
                    ),
                    Gt = {
                        base: 'QuestsList_base_db',
                        base__hide: 'QuestsList_base__hide_e1',
                        toQuestsUpdate: 'QuestsList_toQuestsUpdate_5a',
                        oneQuest: 'QuestsList_oneQuest_a8',
                        oneQuest__completed: 'QuestsList_oneQuest__completed_e1',
                        severalQuests: 'QuestsList_severalQuests_49',
                        questsList: 'QuestsList_questsList_37',
                        quest: 'QuestsList_quest_3a',
                        base__bigQuests: 'QuestsList_base__bigQuests_86',
                        currentProgress: 'QuestsList_currentProgress_db',
                        base__minScreen: 'QuestsList_base__minScreen_22',
                        currentProgressTitle: 'QuestsList_currentProgressTitle_50',
                        currentProgressPoints: 'QuestsList_currentProgressPoints_6a',
                        currentProgressPointsEarned: 'QuestsList_currentProgressPointsEarned_17',
                        'completed-congrats': 'QuestsList_completed-congrats_35',
                        'completed-glow': 'QuestsList_completed-glow_56',
                        'card-show': 'QuestsList_card-show_e9',
                        'card-show-presentment': 'QuestsList_card-show-presentment_98',
                        edge: 'QuestsList_edge_c5',
                        dissolve: 'QuestsList_dissolve_c5',
                        'blink-edge': 'QuestsList_blink-edge_8d',
                        blink: 'QuestsList_blink_22',
                        'show-down': 'QuestsList_show-down_71',
                        'show-up': 'QuestsList_show-up_43',
                        show: 'QuestsList_show_4a',
                        hide: 'QuestsList_hide_fd',
                        showGlow: 'QuestsList_showGlow_33',
                        hideGlow: 'QuestsList_hideGlow_83',
                        pointFadeOut: 'QuestsList_pointFadeOut_94',
                        pointFadeIn: 'QuestsList_pointFadeIn_c0',
                        first2void: 'QuestsList_first2void_29',
                        second2firstTranslate: 'QuestsList_second2firstTranslate_2a',
                        second2firstRotate: 'QuestsList_second2firstRotate_81',
                        third2second: 'QuestsList_third2second_a8',
                    },
                    Ht = (0, V.Pi)(({ className: e }) => {
                        const u = Ze().model,
                            t = u.root.get().assetsPointer,
                            n = u.condition.prevPoints.get(),
                            a = u.condition.currentPoints.get(),
                            r = u.condition.maximumPoints.get(),
                            i = u.computes.finalAnimationStatus(),
                            o = i.completedWithAnimation,
                            d = i.completedNoAnimation,
                            l = u.cardsFan.model.progress.state.runCounter.get(),
                            c = u.quests.get().length,
                            _ = w().remScreenWidth,
                            E = 1 === c ? 'oneQuest' : 'severalQuests',
                            m = c > 0 ? u.computes.quest(0).state : bt.Active,
                            g = Z('progression', { assetsPointer: t }).dynamicTexts;
                        return d
                            ? null
                            : s().createElement(
                                  'div',
                                  {
                                      className: p()(
                                          Gt.base,
                                          _ >= 1500 && Gt.base__bigQuests,
                                          _ <= 1024 && Gt.base__minScreen,
                                          o && Gt.base__hide,
                                          e,
                                      ),
                                  },
                                  s().createElement(
                                      'div',
                                      { className: p()(Gt[E], Gt[`${E}__${m}`]) },
                                      s().createElement(
                                          'div',
                                          { className: Gt.questsList },
                                          ee(c, (e) =>
                                              s().createElement(Tt, { key: e, className: Gt.quest, index: e }),
                                          ),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: Gt.currentProgress },
                                          c > 1
                                              ? s().createElement(st, {
                                                    text: g.questsList.totalPointsEarned(),
                                                    classMix: Gt.currentProgressTitle,
                                                    binding: {
                                                        progressionSteps: s().createElement(st, {
                                                            text: R.strings.fun_random.progression.steps(),
                                                            classMix: Gt.currentProgressPoints,
                                                            binding: {
                                                                done: s().createElement(Mt, {
                                                                    className: Gt.currentProgressPointsEarned,
                                                                    prevPoints: n,
                                                                    currentPoints: a,
                                                                    animate: l,
                                                                }),
                                                                total: r,
                                                            },
                                                        }),
                                                    },
                                                })
                                              : s().createElement(
                                                    s().Fragment,
                                                    null,
                                                    s().createElement(
                                                        'div',
                                                        { className: Gt.currentProgressTitle },
                                                        g.questsList.totalPointsEarnedStandAloneTitle(),
                                                    ),
                                                    s().createElement(st, {
                                                        text: R.strings.fun_random.progression.steps(),
                                                        classMix: Gt.currentProgressPoints,
                                                        binding: {
                                                            done: s().createElement(Mt, {
                                                                className: Gt.currentProgressPointsEarned,
                                                                prevPoints: n,
                                                                currentPoints: a,
                                                                animate: l,
                                                            }),
                                                            total: r,
                                                        },
                                                    }),
                                                ),
                                      ),
                                  ),
                              );
                    }),
                    Ut = (e, u) => {
                        const t = K(e).progression.random_rewards;
                        return u >= v.Large
                            ? t.random_rewards_icon_big()
                            : u >= v.Medium
                              ? t.random_rewards_icon_medium()
                              : t.random_rewards_icon_small();
                    },
                    qt = ({ assetsPointer: e, onClick: u, className: t }) => {
                        const n = w().mediaHeight,
                            a = Z('progression', { assetsPointer: e }).dynamicTexts;
                        return s().createElement(
                            'div',
                            {
                                className: p()('RandomRewardsButton_base_e6', t),
                                onMouseEnter: () => i.O.sound.play.highlight(),
                                onClick: () => {
                                    i.O.sound.play.click(), u();
                                },
                            },
                            s().createElement('div', {
                                className: 'RandomRewardsButton_randomRewardsImage_1a',
                                style: { backgroundImage: `url(${Ut(e, n)})` },
                            }),
                            s().createElement(
                                'div',
                                { className: 'RandomRewardsButton_randomRewardsText_d7' },
                                a.cardsFan.listOfRandomRewards(),
                            ),
                        );
                    },
                    Qt = {
                        base: 'App_base_80',
                        base__cursor_default: 'App_base__cursor_default_d8',
                        base__cursor_grab: 'App_base__cursor_grab_75',
                        base__cursor_grabbing: 'App_base__cursor_grabbing_b5',
                        close: 'App_close_ec',
                        info: 'App_info_30',
                        debugButton: 'App_debugButton_4a',
                        bg: 'App_bg_04',
                        header: 'App_header_2e',
                        progressionContainer: 'App_progressionContainer_9a',
                        base__completed: 'App_base__completed_5b',
                        ordinaryProgression: 'App_ordinaryProgression_be',
                        questsList: 'App_questsList_7c',
                        cardProgressionContainer: 'App_cardProgressionContainer_f2',
                        cardProgression: 'App_cardProgression_0e',
                        base__completedAnimated: 'App_base__completedAnimated_42',
                        fadeBackground: 'App_fadeBackground_35',
                        fadeLeft: 'App_fadeLeft_74',
                        fadeRight: 'App_fadeRight_e0',
                        toRandomRewards: 'App_toRandomRewards_2a',
                        completedProgression: 'App_completedProgression_79',
                        'completed-congrats': 'App_completed-congrats_9b',
                        'completed-glow': 'App_completed-glow_20',
                        'card-show': 'App_card-show_dd',
                        'card-show-presentment': 'App_card-show-presentment_ea',
                        edge: 'App_edge_13',
                        dissolve: 'App_dissolve_0b',
                        'blink-edge': 'App_blink-edge_38',
                        blink: 'App_blink_6d',
                        'show-down': 'App_show-down_5e',
                        'show-up': 'App_show-up_6e',
                        show: 'App_show_1d',
                        hide: 'App_hide_cf',
                        showGlow: 'App_showGlow_cc',
                        hideGlow: 'App_hideGlow_eb',
                        pointFadeOut: 'App_pointFadeOut_ae',
                        pointFadeIn: 'App_pointFadeIn_56',
                        first2void: 'App_first2void_a9',
                        second2firstTranslate: 'App_second2firstTranslate_53',
                        second2firstRotate: 'App_second2firstRotate_23',
                        third2second: 'App_third2second_31',
                    },
                    $t = (0, V.Pi)(() => {
                        const e = Ze(),
                            u = e.model,
                            t = e.controls,
                            n = u.computes.finalAnimationStatus(),
                            r = n.completedWithAnimation,
                            o = n.completedNoAnimation,
                            d = u.computes.pageStatus(),
                            l = u.computes.needChangePage(),
                            c = u.cardsFan.computes.cursor,
                            _ = u.root.get().assetsPointer,
                            E = Re(d),
                            m = E.isActive,
                            g = E.isInfinite,
                            A = E.isCompleted,
                            F = (0, a.useState)(g && !l),
                            C = F[0],
                            D = F[1],
                            h = (0, a.useState)(!1),
                            B = h[0],
                            f = h[1];
                        var b;
                        (b = t.close),
                            j(Q.n.ESCAPE, b),
                            (0, a.useEffect)(() => {
                                D(g && !l);
                            }, [g, l]);
                        const v = (0, z.useSpring)(() => ({
                                from: { opacity: 1, transform: 'translateY(0rem)' },
                                config: { duration: 500 },
                                onRest: () => D(!0),
                                onStart: () => {
                                    i.O.sound.play.sound(se.EvFepInfStepTransition), f(!0);
                                },
                            })),
                            w = v[0],
                            T = v[1];
                        return (
                            (0, a.useEffect)(() => {
                                g && l && T.start({ to: { opacity: 0, transform: 'translateY(20rem)' }, delay: 800 });
                            }, [g, l, T, m]),
                            (0, a.useEffect)(() => {
                                B && (t.cardsFun.setState(xe.Blocked), t.cardsFun.setAssembled(!0));
                            }, [t.cardsFun, B]),
                            s().createElement(
                                'div',
                                {
                                    className: p()(
                                        Qt.base,
                                        Qt[`base__${d}`],
                                        Qt[`base__cursor_${c.get()}`],
                                        A && Qt.base__completed,
                                        r && Qt.base__completedAnimated,
                                    ),
                                },
                                s().createElement('div', {
                                    className: Qt.bg,
                                    style: { backgroundImage: `url('${K(_).library.progression_bg()}')` },
                                }),
                                s().createElement(
                                    'div',
                                    { className: Qt.close },
                                    s().createElement(q, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Qt.info },
                                    s().createElement(q, {
                                        caption: R.strings.menu.viewHeader.aboutBtn.label(),
                                        type: 'info',
                                        side: 'left',
                                        onClick: t.showInfo,
                                    }),
                                ),
                                C
                                    ? s().createElement(Nt, null)
                                    : s().createElement(
                                          'div',
                                          { className: Qt.progressionContainer },
                                          s().createElement(
                                              z.animated.div,
                                              { style: w, className: Qt.ordinaryProgression },
                                              s().createElement(_t, { className: Qt.header }),
                                              s().createElement(Ht, { className: Qt.questsList }),
                                              s().createElement(
                                                  'div',
                                                  { className: Qt.cardProgressionContainer },
                                                  s().createElement(Lu, { className: Qt.cardProgression }),
                                              ),
                                          ),
                                      ),
                                A &&
                                    s().createElement(
                                        'div',
                                        { className: Qt.completedProgression },
                                        s().createElement(lt, null),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: Qt.fadeBackground },
                                    s().createElement('div', { className: Qt.fadeLeft }),
                                    s().createElement('div', { className: Qt.fadeRight }),
                                ),
                                !o &&
                                    s().createElement(qt, {
                                        className: Qt.toRandomRewards,
                                        onClick: t.onOpenTierList,
                                        assetsPointer: _,
                                    }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    k().render(
                        s().createElement(Xe, null, s().createElement(O, null, s().createElement($t, null))),
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], s = !0, r = 0; r < u.length; r++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[r]))
                            ? u.splice(r--, 1)
                            : ((s = !1), n < a && (a = n));
                    if (s) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 314),
        (() => {
            var e = { 314: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [s, r, i] = t,
                        o = 0;
                    if (s.some((u) => 0 !== e[u])) {
                        for (n in r) __webpack_require__.o(r, n) && (__webpack_require__.m[n] = r[n]);
                        if (i) var d = i(__webpack_require__);
                    }
                    for (u && u(t); o < s.length; o++)
                        (a = s[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7720));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
