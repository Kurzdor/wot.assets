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
                    t.d(u, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
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
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const r = `mouse${u}`,
                                            i = l[u]((e) => t([e, 'outside']));
                                        function o(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, o),
                                            n(),
                                            () => {
                                                a &&
                                                    (i(),
                                                    window.removeEventListener(r, o),
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
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
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
                t.d(u, { O: () => r });
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => b,
                        events: () => r.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getScale: () => h,
                        getSize: () => _,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => f,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                const o = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function F(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
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
                function C() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const n = ['args'],
                    a = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((a = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    r = {
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
                t.d(u, { Z: () => r });
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
                        const r = n.O.view.addModelObserver(e, t, a);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => l, Z5: () => i.Z5, B0: () => o, ry: () => D });
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
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    A = t(3138);
                const F = ['args'];
                function m(e, u, t, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, a);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            m(r, n, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            m(r, n, a, i, o, 'throw', e);
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
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, F);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => B(o.CLOSE),
                    C = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var p = t(7572);
                const f = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: p.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => B(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const i = A.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                d = s.height,
                                _ = {
                                    x: A.O.view.pxToRem(l) + i.x,
                                    y: A.O.view.pxToRem(c) + i.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(d),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: h(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, g);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => n, cy: () => a });
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
                    };
            },
            8641: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t.n(n);
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
                var s;
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
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
                })(s || (s = {}));
                const c = i.O.client.getSize('rem'),
                    E = c.width,
                    d = c.height,
                    _ = Object.assign({ width: E, height: d }, l(E, d, o)),
                    A = (0, n.createContext)(_),
                    F = ['children'],
                    m = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, F);
                        const a = (0, n.useContext)(A),
                            i = a.extraLarge,
                            o = a.large,
                            s = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            E = a.extraLargeWidth,
                            d = a.largeWidth,
                            _ = a.mediumWidth,
                            m = a.smallWidth,
                            h = a.extraSmallWidth,
                            D = a.extraLargeHeight,
                            B = a.largeHeight,
                            g = a.mediumHeight,
                            C = a.smallHeight,
                            p = a.extraSmallHeight,
                            f = { extraLarge: D, large: B, medium: g, small: C, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && o) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return r(u, t, f);
                            if (t.largeWidth && d) return r(u, t, f);
                            if (t.mediumWidth && _) return r(u, t, f);
                            if (t.smallWidth && m) return r(u, t, f);
                            if (t.extraSmallWidth && h) return r(u, t, f);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && D) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && g) return u;
                                if (t.smallHeight && C) return u;
                                if (t.extraSmallHeight && p) return u;
                            }
                        }
                        return null;
                    };
                (m.defaultProps = {
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
                    (0, n.memo)(m);
                const h = ({ children: e }) => {
                    const u = (0, n.useContext)(A),
                        t = (0, n.useState)(u),
                        r = t[0],
                        s = t[1],
                        c = (0, n.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                n = i.O.view.pxToRem(u);
                            s(Object.assign({ width: t, height: n }, l(t, n, o)));
                        }, []),
                        E = (0, n.useCallback)(() => {
                            const e = i.O.client.getSize('px');
                            c(e.width, e.height);
                        }, [c]);
                    ((e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', E);
                    }),
                        (0, n.useEffect)(
                            () => () => {
                                i.O.client.events.off('clientResized', c),
                                    i.O.client.events.off('self.onScaleUpdated', E);
                            },
                            [c, E],
                        );
                    const d = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                    return a().createElement(A.Provider, { value: d }, e);
                };
                var D = t(6483),
                    B = t.n(D),
                    g = t(926),
                    C = t.n(g);
                let p, f, v;
                !(function (e) {
                    (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(p || (p = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const w = () => {
                        const e = (0, n.useContext)(A),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return p.ExtraLarge;
                                    case e.large:
                                        return p.Large;
                                    case e.medium:
                                        return p.Medium;
                                    case e.small:
                                        return p.Small;
                                    case e.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
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
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    b = ['children', 'className'];
                function y() {
                    return (
                        (y = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        y.apply(null, arguments)
                    );
                }
                const x = {
                        [f.ExtraSmall]: '',
                        [f.Small]: C().SMALL_WIDTH,
                        [f.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [f.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [v.ExtraSmall]: '',
                        [v.Small]: C().SMALL_HEIGHT,
                        [v.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [v.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [p.ExtraSmall]: '',
                        [p.Small]: C().SMALL,
                        [p.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [p.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [p.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    O = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, b);
                        const r = w(),
                            i = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return a().createElement('div', y({ className: B()(t, x[i], T[o], L[s]) }, n), u);
                    },
                    k = ['children'],
                    S = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, k);
                        return a().createElement(h, null, a().createElement(O, t, u));
                    };
                var M = t(493),
                    I = t.n(M);
                const N = {
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
                };
                var H = t(7030);
                const P = { x: 0, y: 0, opacity: 0, transform: 'scale(1) rotate(0deg)' },
                    W = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' };
                let j;
                !(function (e) {
                    (e.Linear = 'linear'),
                        (e.EaseIn = 'easeIn'),
                        (e.EaseOut = 'easeOut'),
                        (e.EaseInOut = 'easeInOut'),
                        (e.EaseOutBack = 'easeOutBack'),
                        (e.EaseOutQuint = 'easeOutQuint'),
                        (e.EaseOutExpo = 'easeOutExpo');
                })(j || (j = {}));
                const G = {
                        [j.Linear]: N.linear,
                        [j.EaseIn]: N.easeInCubic,
                        [j.EaseOut]: N.easeOutCubic,
                        [j.EaseInOut]: N.easeInOutCubic,
                        [j.EaseOutBack]: N.easeOutBack,
                        [j.EaseOutQuint]: (e) => 1 - Math.pow(1 - e, 5),
                        [j.EaseOutExpo]: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
                    },
                    U = ({
                        children: e,
                        from: u = P,
                        to: t = W,
                        config: r,
                        isCanceled: i = !1,
                        isDisabled: o = !1,
                        duration: s = 250,
                        delay: l = 0,
                        transformOrigin: c = '50% 50%',
                        easingType: E = j.EaseInOut,
                        onRest: d,
                        onStart: _,
                        trigger: A,
                        className: F,
                        isReverse: m = !1,
                    }) => {
                        const h = G[E],
                            D = (0, H.useSpring)(() => u),
                            B = D[0],
                            g = D[1],
                            C = i && !o ? t : Object.assign({}, B, { transformOrigin: c });
                        return (
                            (0, n.useEffect)(() => {
                                g.start({
                                    from: u,
                                    to: t,
                                    delay: l,
                                    immediate: i,
                                    config: r ? Object.assign({}, r) : { duration: s, easing: h },
                                    cancel: i || o,
                                    reverse: m,
                                    onRest: (e) => {
                                        !0 === e.finished && d && d();
                                    },
                                    onStart: () => {
                                        _ && _();
                                    },
                                });
                            }, [g, l, s, h, u, i, d, t, A, o, m, _, r]),
                            a().createElement(H.animated.div, { className: F, style: C }, e)
                        );
                    };
                var $ = t(9916);
                const V = [
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
                function z(e) {
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
                const q = (e, u, t = {}, n = 0) => {
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
                    K = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            _ = e.decoratorId,
                            A = void 0 === _ ? 0 : _,
                            F = e.isEnabled,
                            m = void 0 === F || F,
                            h = e.targetId,
                            D = void 0 === h ? 0 : h,
                            B = e.onShow,
                            g = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, V);
                        const p = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(
                                () =>
                                    D ||
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
                                [D],
                            ),
                            v = (0, n.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (q(t, A, { isMouseEvent: !0, on: !0, arguments: z(a) }, f),
                                    B && B(),
                                    (p.current.isVisible = !0));
                            }, [t, A, a, f, B]),
                            w = (0, n.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        q(t, A, { on: !1 }, f),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, A, f, g]),
                            b = (0, n.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', b, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', b, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === m && w();
                            }, [m, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            ),
                            m
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          r && r(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  w(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === d && w(), null == s || s(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === d && w(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : u
                        );
                        var y;
                    },
                    Y = ['children'];
                function Z() {
                    return (
                        (Z = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Z.apply(null, arguments)
                    );
                }
                const X = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Y);
                        return a().createElement(
                            K,
                            Z(
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
                    Q = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function J() {
                    return (
                        (J = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        J.apply(null, arguments)
                    );
                }
                const ee = R.views.common.tooltip_window.simple_tooltip_content,
                    ue = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            i = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Q);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, i, s]);
                        return a().createElement(
                            K,
                            J(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? ee.SimpleTooltipHtmlContent('resId') : ee.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function te() {
                    return (
                        (te = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        te.apply(null, arguments)
                    );
                }
                const ne = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = a().createElement('div', { className: t }, e);
                    if (u.header || u.body) return a().createElement(ue, u, n);
                    const r = u.contentId;
                    return r ? a().createElement(K, te({}, u, { contentId: r }), n) : a().createElement(X, u, n);
                };
                var ae = t(8045);
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
                let ie;
                t(1281),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(ie || (ie = {}));
                let oe, se, le;
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
                ),
                    (function (e) {
                        (e[(e.Word = 0)] = 'Word'),
                            (e[(e.LineBreak = 1)] = 'LineBreak'),
                            (e[(e.NewLine = 2)] = 'NewLine'),
                            (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (e[(e.Binding = 5)] = 'Binding');
                    })(oe || (oe = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(se || (se = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(le || (le = {}));
                const ce = { [le.NBSP]: oe.NoBreakSymbol, [le.ZWNBSP]: oe.NoBreakSymbol, [le.NEW_LINE]: oe.LineBreak },
                    Ee = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    de = {
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
                    _e = 'renderers_word_f3',
                    Ae = (e) => ({ color: `#${e}` }),
                    Fe = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? de[n]
                                ? a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: B()(_e, de[n]) },
                                      e,
                                  )
                                : a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: _e, style: Ae(n) },
                                      e,
                                  )
                            : a().createElement('span', { key: t, 'data-block-type': u.blockType, className: _e }, e);
                    },
                    me = {
                        [oe.Word]: Fe,
                        [oe.NoBreakSymbol]: Fe,
                        [oe.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: t }, e)),
                            ),
                        [oe.LineBreak]: ({ key: e }) =>
                            a().createElement('span', {
                                key: e,
                                'data-block-type': oe.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [oe.NewLine]: ({ elementList: e, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': oe.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [oe.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            a().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': oe.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    he = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const i = `${t}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        u = e.blockType,
                                        t = he(e, me[u], i);
                                    n.push(...t);
                                } else n.push(u({ elementList: [a], textBlock: e, key: i }));
                            }),
                            n
                        );
                    },
                    De = (e, u, t, n) => {
                        let a = u.exec(e),
                            r = 0;
                        for (; a; ) r !== a.index && t(e.slice(r, a.index)), n(a), (r = u.lastIndex), (a = u.exec(e));
                        r !== e.length && t(e.slice(r));
                    },
                    Be = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    ge = Ee
                        ? (e) => {
                              const u = [];
                              return (
                                  De(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(
                                              ...((e) => {
                                                  const u = [];
                                                  return (
                                                      De(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var t;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? u.push(...((t = e), t.match(Be) || []))
                                                                  : u.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              u.push(e[0]);
                                                          },
                                                      ),
                                                      u
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(e);
                              if (!n) return [e];
                              const a = [];
                              let r = 0;
                              for (; n; ) {
                                  const i = u.justifyContent === se.FlexEnd ? n.index : t.lastIndex;
                                  a.push(e.slice(r, i)), (r = i), (n = t.exec(e));
                              }
                              return r !== e.length && a.push(e.slice(r)), a;
                          },
                    Ce = (e, u = '', t) => {
                        const n = [];
                        return (
                            De(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: oe.Word, colorTag: u, childList: ge(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        a = ce[t.charAt(0)];
                                    a === oe.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: oe.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: oe.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : n.push({ blockType: a, colorTag: u, childList: [t] });
                                },
                            ),
                            n
                        );
                    },
                    pe = (e, u, t = '', n) => {
                        const a = [];
                        return (
                            De(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...Ce(e, t, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        i = void 0 === u[r] ? e[0] : u[r];
                                    'string' == typeof i || 'number' == typeof i
                                        ? a.push(...Ce(String(i), t, n))
                                        : a.push({ blockType: oe.Binding, colorTag: t, childList: [i] });
                                },
                            ),
                            a
                        );
                    },
                    fe = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === oe.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: oe.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    ve = (e, u = {}, t) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === oe.NoBreakSymbol
                                        ? ((t = !0), u.push(...fe(u.pop(), e)))
                                        : (t ? u.push(...fe(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const n = [];
                                return (
                                    De(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...pe(e, u, '', t));
                                        },
                                        (e) => {
                                            n.push(...pe(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    n
                                );
                            })(((a = e), a.replace(/&nbsp;/g, ' ')).replace(/&zwnbsp;/g, '\ufeff'), u, t),
                        );
                        var a;
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                n = e.blockType,
                                                a = me[n],
                                                r = he(e, a, u);
                                            return (
                                                n === oe.NoBreakWrapper
                                                    ? t.push(a({ elementList: r, textBlock: e, key: `${u}` }))
                                                    : t.push(...r),
                                                t
                                            );
                                        })(e, t),
                                    );
                                }),
                                u
                            );
                        })(n);
                    },
                    we = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    be = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    ye = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = be(e, u),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            i = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / r);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const o = Math.max(t + i, 0);
                        return a < o ? [!1, 0] : [!0, o];
                    },
                    xe = (e, u, t, n, r, i) => {
                        let o = -1,
                            s = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === oe.LineBreak || c === oe.NewLine || c === oe.Binding) continue;
                            const E = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = ye(t, n, r),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (r -= d);
                                    continue;
                                }
                                const _ = E.slice(0, E.length - d) + i,
                                    A = u[l];
                                (s = a().cloneElement(A, A.props, _)), (o = l);
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    d = c.props.children,
                                    _ = xe(e, d, e.length - 1, n, r, i),
                                    A = _[0],
                                    F = _[1];
                                if (!(A < 0)) {
                                    const e = d.slice(0, A);
                                    (s = a().cloneElement(c, c.props, e, F)), (o = l);
                                    break;
                                }
                                r -= E.length;
                            }
                        }
                        return [o, s];
                    },
                    Te = a().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: r,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: o = !1,
                            customTooltipArgs: s,
                            targetId: l,
                            justifyContent: c = se.FlexStart,
                            alignContent: E = se.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const _ = (0, n.useRef)(null),
                                A = (0, n.useRef)({ height: 0, width: 0 }),
                                F = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                m = F[0],
                                h = F[1],
                                D = (0, n.useMemo)(() => ve(e, r, { justifyContent: c }), [r, c, e]),
                                g = (0, n.useMemo)(() => {
                                    if (
                                        i &&
                                        m.isTruncated &&
                                        (!r || !Object.values(r).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, s, {
                                                stringifyKwargs: r ? JSON.stringify(r) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [r, i, l, e, s, m.isTruncated]),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        (A.current.width = e.contentRect.width),
                                            (A.current.height = e.contentRect.height);
                                        const u = ((e, u, t, n = '...') => {
                                                const a = [...u],
                                                    r = e.current;
                                                if (!r) return [a, !1];
                                                const i = t.height,
                                                    o = t.width,
                                                    s = r.lastElementChild;
                                                if (!we(s, i) && be(s, o) <= 0) return [a, !1];
                                                const l = r.children,
                                                    c = ((e, u) => {
                                                        let t = 0,
                                                            n = e.length - 1;
                                                        for (; n - t >= 0; ) {
                                                            const a = t + Math.ceil(0.5 * (n - t));
                                                            we(e[a], u) ? (n = a - 1) : (t = a + 1);
                                                        }
                                                        return t - 1;
                                                    })(l, i);
                                                if (c < 0) return [a, !1];
                                                const E = xe(l, a, c, o, n.length, n),
                                                    d = E[0],
                                                    _ = E[1];
                                                return _ && (a.splice(d, 1, _), a.splice(d + 1)), [a, !0];
                                            })(_, D, A.current, d),
                                            n = u[0],
                                            a = u[1];
                                        h({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), t && t(a);
                                    },
                                    [t, d, D],
                                ),
                                p = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: E }), [E, c]);
                            return (
                                ((e, u, t = !0) => {
                                    const a = (0, n.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new ae.Z((e) => a(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [a, t, e]);
                                })(_, C, o),
                                a().createElement(
                                    'div',
                                    {
                                        className: B()(
                                            re.base,
                                            u,
                                            re.base__zeroPadding,
                                            o && re.base__isTruncationAvailable,
                                        ),
                                        style: p,
                                    },
                                    a().createElement('div', { className: re.unTruncated, ref: _ }, D),
                                    a().createElement(
                                        ne,
                                        {
                                            tooltipArgs: g,
                                            className: B()(
                                                re.tooltip,
                                                re[`tooltip__justify-${c}`],
                                                re[`tooltip__align-${E}`],
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    re.truncated,
                                                    !m.isTruncateFinished && o && re.truncated__hide,
                                                ),
                                                style: p,
                                            },
                                            m.isTruncateFinished && o ? m.elementList : D,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Le = {
                        base: 'Text_base_3f',
                        base__whiteSpanish: 'Text_base__whiteSpanish_9d',
                        base__red: 'Text_base__red_f1',
                        base__currency: 'Text_base__currency_66',
                        base__heading: 'Text_base__heading_72',
                        base__lightRed: 'Text_base__lightRed_ee',
                        base__metaHeading: 'Text_base__metaHeading_73',
                        layer0: 'Text_layer0_29',
                        layer0__shadow: 'Text_layer0__shadow_c3',
                        layer1: 'Text_layer1_81',
                        layer2: 'Text_layer2_ff',
                        layer3: 'Text_layer3_47',
                        layer4: 'Text_layer4_f7',
                    };
                let Oe;
                !(function (e) {
                    (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Red = 'red'),
                        (e.LightRed = 'lightRed'),
                        (e.Currency = 'currency'),
                        (e.Heading = 'heading'),
                        (e.MetaHeading = 'metaHeading');
                })(Oe || (Oe = {}));
                const ke = ['type', 'shadow', 'grunge', 'className'];
                function Se() {
                    return (
                        (Se = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Se.apply(null, arguments)
                    );
                }
                const Me = (e) => {
                    let u = e.type,
                        t = e.shadow,
                        n = void 0 !== t && t,
                        r = e.grunge,
                        i = void 0 !== r && r,
                        o = e.className,
                        s = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, ke);
                    return a().createElement(
                        'div',
                        { className: B()(Le.base, Le[`base__${u}`], o), lang: R.strings.settings.LANGUAGE_CODE() },
                        a().createElement(Te, Se({ classMix: B()(Le.layer0, n && Le.layer0__shadow) }, s)),
                        (u === Oe.Heading || u === Oe.MetaHeading) &&
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Te, Se({ classMix: Le.layer1 }, s)),
                                a().createElement(Te, Se({ classMix: Le.layer2 }, s)),
                            ),
                        a().createElement(Te, Se({ classMix: Le.layer3 }, s)),
                        i && a().createElement(Te, Se({ classMix: Le.layer4 }, s)),
                    );
                };
                function Re(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const Ie = {
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
                let Ne, He;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Ne || (Ne = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(He || (He = {}));
                const Pe = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: _,
                    onMouseLeave: A,
                    onClick: F,
                }) => {
                    const m = (0, n.useRef)(null),
                        h = (0, n.useState)(t),
                        D = h[0],
                        g = h[1],
                        C = (0, n.useState)(!1),
                        p = C[0],
                        f = C[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                D && null !== m.current && !m.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [D]),
                        (0, n.useEffect)(() => {
                            g(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: m,
                                className: B()(
                                    Ie.base,
                                    Ie[`base__${r}`],
                                    i && Ie.base__disabled,
                                    u && Ie[`base__${u}`],
                                    D && Ie.base__focus,
                                    p && Ie.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== s && Re(s), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    i || (_ && _(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== l && Re(l),
                                        d && d(e),
                                        t && (i || (m.current && (m.current.focus(), g(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (A && A(e), f(!1));
                                },
                                onClick: function (e) {
                                    i || (F && F(e));
                                },
                            },
                            r !== Ne.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Ie.back }),
                                    a().createElement('span', { className: Ie.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: B()(Ie.state, Ie.state__default) },
                                a().createElement('span', { className: Ie.stateDisabled }),
                                a().createElement('span', { className: Ie.stateHighlightHover }),
                                a().createElement('span', { className: Ie.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: Ie.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Pe.defaultProps = { type: Ne.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const We = Pe,
                    je = {
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
                    Ge = [
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
                function Ue() {
                    return (
                        (Ue = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ue.apply(null, arguments)
                    );
                }
                class $e extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Re(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Re(this.props.soundClick);
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
                            r = e.side,
                            i = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, Ge)),
                            _ = B()(je.base, je[`base__${i}`], je[`base__${r}`], null == o ? void 0 : o.base),
                            A = B()(je.icon, je[`icon__${i}`], je[`icon__${r}`], null == o ? void 0 : o.icon),
                            F = B()(je.glow, null == o ? void 0 : o.glow),
                            m = B()(je.caption, je[`caption__${i}`], null == o ? void 0 : o.caption),
                            h = B()(je.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            Ue(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== i && a().createElement('div', { className: je.shine }),
                            a().createElement('div', { className: A }, a().createElement('div', { className: F })),
                            a().createElement('div', { className: m }, u),
                            n && a().createElement('div', { className: h }, n),
                        );
                    }
                }
                $e.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Ve = t(5521);
                const ze = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function qe(e = Ve.n.NONE, u = ze, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== Ve.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, a]);
                }
                function Ke(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var Ye = t(3403);
                const Ze = { y: 0, opacity: 1 };
                let Xe;
                !(function (e) {
                    (e.TITLE = 'title'),
                        (e.HEADER_ITEM = 'headerItem'),
                        (e.LIP = 'lip'),
                        (e.HEADER_ITEM_TXT = 'headerItemTxt'),
                        (e.ROW = 'row'),
                        (e.ROW_ITEM = 'rowItem'),
                        (e.ROW_ITEM_DECOR = 'rowItemDecor'),
                        (e.BUTTON = 'button');
                })(Xe || (Xe = {}));
                const Qe = 650,
                    Je = 350,
                    eu = {
                        [Xe.TITLE]: {
                            from: { y: -5, transform: 'translate(-50%)', mixBlendMode: 'screen', opacity: 0 },
                            to: { y: 0, transform: 'translate(-50%)', mixBlendMode: 'screen', opacity: 1 },
                            delay: 0,
                            duration: Je,
                        },
                        [Xe.LIP]: {
                            from: { y: 0, opacity: 0, transform: 'translateX(-50%)' },
                            to: { y: 0, opacity: 1, transform: 'translateX(-50%)' },
                            delay: 250,
                            duration: Je,
                        },
                        [Xe.HEADER_ITEM]: { from: { y: -10, opacity: 0 }, to: Ze, delay: 250, duration: Je },
                        [Xe.HEADER_ITEM_TXT]: { from: { y: 10, opacity: 0 }, to: Ze, delay: 0, duration: Je },
                        [Xe.ROW]: { from: { y: -15, opacity: 0 }, to: Ze, delay: 0, duration: Je },
                        [Xe.ROW_ITEM]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 0,
                            duration: Je,
                        },
                        [Xe.ROW_ITEM_DECOR]: {
                            from: { filter: 'blur(10px)', transform: 'translate(-50%) scale(1.5, 4)', opacity: 1 },
                            to: { filter: 'blur(0px)', transform: 'translate(-50%) scale(1, 0.1)', opacity: 0 },
                            delay: 0,
                            duration: 1750,
                            easingType: j.EaseOutQuint,
                        },
                        [Xe.BUTTON]: {
                            from: { y: -5, transform: 'translate(-50%)', opacity: 0 },
                            to: { y: 0, transform: 'translate(-50%)', opacity: 1 },
                            delay: 3825,
                            duration: 700,
                        },
                    };
                function uu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return tu(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? tu(e, u)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function tu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const nu = [
                        {
                            name: 'france_F17_AMX_13_90_Halloween_event',
                            vehicleType: 'lightTank',
                            ttcType: 'magazine',
                            damage: 550,
                            speed: 64,
                            armour: 1200,
                        },
                        {
                            name: 'uk_GB24_Centurion_Mk3_Halloween_event',
                            vehicleType: 'mediumTank ',
                            ttcType: 'crit_chance',
                            damage: 793,
                            speed: 50,
                            armour: 1720,
                        },
                        {
                            name: 'ussr_R171_IS_3_II_hw21',
                            vehicleType: 'heavyTank',
                            ttcType: 'double_gun',
                            damage: 420,
                            speed: 50,
                            armour: 1800,
                        },
                        {
                            name: 'usa_A100_T49_Halloween_event',
                            vehicleType: 'lightTank',
                            ttcType: 'autoloader_2',
                            damage: 548,
                            speed: 65,
                            armour: 1400,
                        },
                        {
                            name: 'ussr_R40_T_54_Halloween_event',
                            vehicleType: 'mediumTank',
                            ttcType: 'crit_resistance',
                            damage: 638,
                            speed: 56,
                            armour: 1650,
                        },
                        {
                            name: 'italy_It19_Progetto_C50_mod_66_hw21',
                            vehicleType: 'heavyTank ',
                            ttcType: 'autoloader_4',
                            damage: 560,
                            speed: 50,
                            armour: 1850,
                        },
                    ],
                    au = ((e, u) => {
                        const t = [];
                        let n = [];
                        for (var a, r = uu(e); !(a = r()).done; ) {
                            const e = a.value;
                            for (var i, o = uu(u); !(i = o()).done; ) {
                                const u = i.value;
                                n.push(u[e]);
                            }
                            t.push({ categoryName: e, values: n }), (n = []);
                        }
                        return t;
                    })([Object.keys(nu[0])[3], Object.keys(nu[0])[4], Object.keys(nu[0])[5]], nu),
                    ru = (e, u, t) => {
                        const n = u - 0.25 * (t - u),
                            a = t - n,
                            r = e - n;
                        return Math.floor((100 * r) / a);
                    },
                    iu = (e) => e,
                    ou = (e, u) => {
                        const t = Math.floor(e);
                        return u ? $.Z5.getNumberFormat(t, $.B3.INTEGRAL) : t;
                    },
                    su = (0, n.memo)(function ({
                        renderText: e = (e) => a().createElement(H.animated.div, null, e),
                        prefix: u = '',
                        currentNumber: t,
                        previousNumber: n = 0,
                        delay: r,
                        duration: i,
                        className: o,
                        isCanceled: s,
                        isFormatted: l = !1,
                        onStart: c,
                        onRest: E,
                    }) {
                        const d = (0, H.useSpring)({
                            from: { val: n },
                            to: { val: t },
                            delay: r,
                            config: { duration: i, easing: iu },
                            cancel: s,
                            reverse: s,
                            onStart: c,
                            onRest: E,
                        });
                        return a().createElement(
                            'div',
                            { className: B()('NumberAnimation_base_9f', o) },
                            u,
                            s ? e(ou(t, l)) : a().createElement(H.animated.div, null, e(d.val.to((e) => ou(e, l)))),
                        );
                    });
                let lu;
                !(function (e) {
                    (e.TITLE = 'title'),
                        (e.HEADER = 'header'),
                        (e.NAME = 'name'),
                        (e.REWARDS = 'rewards'),
                        (e.BUTTONS = 'buttons');
                })(lu || (lu = {}));
                const cu = (lu.TITLE, lu.HEADER, lu.NAME, lu.REWARDS, lu.BUTTONS, 'Bar_base_47'),
                    Eu = a().memo(function ({
                        index: e,
                        hiLevelIndex: u,
                        proportion: t,
                        isAnimationCanceled: n,
                        onRest: r,
                        className: i,
                    }) {
                        return a().createElement(
                            'div',
                            { className: B()(cu, i) },
                            a().createElement('div', { className: 'Bar_bar_21' }),
                            a().createElement(U, {
                                from: { width: '0%' },
                                to: { width: `${t}%` },
                                delay: 1375 + u * Qe + 75 * e,
                                easingType: j.EaseOutQuint,
                                duration: 500,
                                className: 'Bar_barLine_24',
                                isCanceled: n,
                                onRest: r,
                            }),
                        );
                    }),
                    du = 'DataItem_base__prime_40';
                function _u() {
                    return (
                        (_u = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        _u.apply(null, arguments)
                    );
                }
                const Au = a().memo(function ({
                    index: e,
                    hiLevelIndex: u,
                    value: t,
                    valueMin: r,
                    valueMax: o,
                    isAnimationCanceled: s,
                    className: l,
                }) {
                    const c = (0, n.useState)(!1),
                        E = c[0],
                        d = c[1],
                        _ = t === o,
                        A = (0, n.useCallback)(() => {
                            _ && d(!0);
                        }, [_]),
                        F = (0, n.useCallback)(() => {
                            i.O.sound.play.sound('ev_hw_mirny13_hangar_comparison_highest_value_anim');
                        }, []);
                    return a().createElement(
                        U,
                        _u({}, eu[Xe.ROW_ITEM], {
                            delay: 1075 + u * Qe + 75 * e,
                            className: B()('DataItem_base_97', E && du, s && _ && du, l),
                            isCanceled: s,
                        }),
                        a().createElement('div', { className: 'DataItem_decor_6e' }),
                        E &&
                            a().createElement(
                                U,
                                _u({}, eu[Xe.ROW_ITEM_DECOR], { className: 'DataItem_maxValueDecor_fc', onStart: F }),
                            ),
                        a().createElement(su, {
                            className: 'DataItem_number_4e',
                            isFormatted: !0,
                            currentNumber: t,
                            delay: 1375 + u * Qe + 75 * e,
                            duration: Je,
                            isCanceled: s,
                        }),
                        a().createElement(Eu, {
                            index: e,
                            hiLevelIndex: u,
                            className: 'DataItem_bar_0f',
                            proportion: ru(t, r, o),
                            isAnimationCanceled: s,
                            onRest: A,
                        }),
                    );
                });
                function Fu() {
                    return (
                        (Fu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Fu.apply(null, arguments)
                    );
                }
                const mu = R.strings.halloween_lobby.comparisonWindow.categoryName,
                    hu = ({ index: e, categoryName: u, values: t, isAnimationCanceled: r, className: o }) => {
                        const s = w().mediaSize,
                            l = e,
                            c = (0, n.useCallback)(() => {
                                i.O.sound.play.sound('ev_hw_mirny13_hangar_comparison_value_anim');
                            }, []);
                        return a().createElement(
                            U,
                            Fu({}, eu[Xe.ROW], {
                                isCanceled: r,
                                delay: 1e3 + e * Qe,
                                className: B()('DataRow_base_12', o),
                                onStart: c,
                            }),
                            a().createElement(
                                'div',
                                { className: 'DataRow_container_b5' },
                                a().createElement(
                                    'div',
                                    { className: 'DataRow_iconContainer_11' },
                                    a().createElement(
                                        ue,
                                        {
                                            body: ((E = mu.$dyn(u)), E.replace(/\n/g, ' ')),
                                            isEnabled: s === p.ExtraSmall,
                                        },
                                        a().createElement('div', {
                                            className: 'DataRow_icon_04',
                                            style: {
                                                backgroundImage: `url('${R.images.halloween.gui.maps.icons.comparisonWindow.categoryIcons.$dyn(u)}')`,
                                            },
                                        }),
                                    ),
                                ),
                                s > p.ExtraSmall &&
                                    a().createElement(Te, { classMix: 'DataRow_description_12', text: mu.$dyn(u) }),
                            ),
                            Ke(t, (e, u) =>
                                a().createElement(Au, {
                                    key: `dataItem_${u}`,
                                    index: u,
                                    hiLevelIndex: l,
                                    value: e,
                                    valueMin: Math.min(...t),
                                    valueMax: Math.max(...t),
                                    isAnimationCanceled: r,
                                }),
                            ),
                        );
                        var E;
                    },
                    Du = {
                        base: 'VehicleType_base_13',
                        base__c_24x24: 'VehicleType_base__c_24x24_8a',
                        base__c_38x38: 'VehicleType_base__c_38x38_c5',
                        base__c_48x48: 'VehicleType_base__c_48x48_83',
                        base__c_83x74: 'VehicleType_base__c_83x74_a3',
                    };
                let Bu, gu;
                !(function (e) {
                    (e.C24x24 = 'c_24x24'), (e.C38x38 = 'c_38x38'), (e.C48x48 = 'c_48x48'), (e.C83x74 = 'c_83x74');
                })(Bu || (Bu = {})),
                    (function (e) {
                        (e.Silver = 'silver'),
                            (e.Gray = 'gray'),
                            (e.Elite = 'elite'),
                            (e.WhiteSpanish = 'whitespanish'),
                            (e.WhiteSpanishBright = 'whitespanish_bright');
                    })(gu || (gu = {}));
                const Cu = (0, n.memo)(function ({ type: e, color: u, className: t, size: n = Bu.C24x24 }) {
                        return a().createElement('div', {
                            className: B()(Du.base, Du[`base__${n}`], t),
                            style: {
                                backgroundImage: `url('R.images.halloween.gui.maps.icons.vehicleTypes.flat.${u}.${n}.${((r = e), r.replace(/-/g, '_'))}')`,
                            },
                        });
                        var r;
                    }),
                    pu = 'HeaderItem_divider_9c';
                function fu() {
                    return (
                        (fu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        fu.apply(null, arguments)
                    );
                }
                const vu = R.strings.halloween_lobby.comparisonWindow.tank,
                    wu = ({
                        index: e,
                        name: u,
                        vehicleType: t,
                        ttcType: n,
                        isAnimationCanceled: r,
                        isLast: i,
                        className: o,
                    }) =>
                        a().createElement(
                            U,
                            fu({}, eu[Xe.HEADER_ITEM], {
                                isCanceled: r,
                                delay: 250 + 75 * e,
                                className: B()('HeaderItem_base_86', o),
                            }),
                            a().createElement(
                                'div',
                                { className: 'HeaderItem_name_15' },
                                a().createElement(Cu, { size: Bu.C24x24, color: gu.WhiteSpanishBright, type: t }),
                                vu.name.$dyn(u),
                            ),
                            a().createElement('div', {
                                className: 'HeaderItem_icon_e4',
                                style: { backgroundImage: `url('${R.images.gui.maps.icons.vehicle.$dyn(u)}')` },
                            }),
                            a().createElement(
                                U,
                                fu({}, eu[Xe.HEADER_ITEM_TXT], {
                                    isCanceled: r,
                                    delay: 400 + 75 * e,
                                    className: 'HeaderItem_container_f4',
                                }),
                                a().createElement(
                                    'div',
                                    { className: 'HeaderItem_ttcIconContainer_1f' },
                                    a().createElement('div', {
                                        className: 'HeaderItem_ttcIcon_a3',
                                        style: {
                                            backgroundImage: `url('${R.images.halloween.gui.maps.icons.comparisonWindow.ttcIcons.$dyn(n)}')`,
                                        },
                                    }),
                                ),
                                a().createElement(Te, {
                                    classMix: 'HeaderItem_ttcDescription_90',
                                    text: vu.ttcType.$dyn(n),
                                    isTruncationAvailable: !0,
                                    isTooltipEnable: !0,
                                }),
                            ),
                            a().createElement(
                                'div',
                                {
                                    className: B()(
                                        'HeaderItem_dividerContainer_47',
                                        i && 'HeaderItem_dividerContainer__last_96',
                                    ),
                                },
                                a().createElement('div', { className: pu }),
                                a().createElement('div', { className: B()(pu, 'HeaderItem_divider__next_5a') }),
                            ),
                        );
                function bu() {
                    return (
                        (bu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        bu.apply(null, arguments)
                    );
                }
                const yu = a().memo(function ({ className: e, isAnimationCanceled: u }) {
                    return (
                        (0, n.useEffect)(() => i.O.sound.play.sound('ev_hw_mirny13_hangar_comparison_tanks_anim'), []),
                        a().createElement(
                            'div',
                            { className: B()('Header_base_53', e) },
                            Ke(nu, (e, t) =>
                                a().createElement(
                                    wu,
                                    bu(
                                        {
                                            key: `${nu[t].name}`,
                                            isLast: t === nu.length - 1,
                                            isAnimationCanceled: u,
                                            index: t,
                                        },
                                        e,
                                    ),
                                ),
                            ),
                        )
                    );
                });
                function xu() {
                    return (
                        (xu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        xu.apply(null, arguments)
                    );
                }
                const Tu = (0, Ye.Pi)(() => {
                    const e = (0, n.useState)(!1),
                        u = e[0],
                        t = e[1];
                    var r;
                    return (
                        (r = () => i.O.view.sendEvent.close()),
                        qe(Ve.n.ESCAPE, r),
                        qe(Ve.n.ENTER, () => i.O.view.sendEvent.close()),
                        (0, n.useEffect)(() => {
                            const e = () => {
                                t(!0);
                            };
                            return (
                                window.addEventListener('keydown', e),
                                () => {
                                    window.removeEventListener('keydown', e);
                                }
                            );
                        }, []),
                        a().createElement(
                            'div',
                            { className: 'ComparisonWindowApp_base_a2', onClick: () => t(!0) },
                            a().createElement($e, {
                                classNames: { base: 'ComparisonWindowApp_closeBtn_ac' },
                                caption: R.strings.halloween_lobby.common.close(),
                                type: 'close',
                                side: 'right',
                                onClick: () => i.O.view.sendEvent.close(),
                            }),
                            a().createElement(
                                'div',
                                { className: 'ComparisonWindowApp_content_45' },
                                a().createElement(
                                    U,
                                    xu({}, eu[Xe.TITLE], {
                                        isCanceled: u,
                                        className: 'ComparisonWindowApp_titleContainer_72',
                                    }),
                                    a().createElement(Me, {
                                        type: Oe.MetaHeading,
                                        text: R.strings.halloween_lobby.comparisonWindow.title(),
                                        justifyContent: se.Center,
                                        className: 'ComparisonWindowApp_title_01',
                                        shadow: !0,
                                    }),
                                ),
                                a().createElement(
                                    U,
                                    xu({}, eu[Xe.LIP], { isCanceled: u, className: 'ComparisonWindowApp_lip_7b' }),
                                ),
                                a().createElement(yu, {
                                    className: 'ComparisonWindowApp_headerRow_be',
                                    isAnimationCanceled: u,
                                }),
                                a().createElement(
                                    'div',
                                    { className: 'ComparisonWindowApp_categories_08' },
                                    Ke(au, (e, t) =>
                                        a().createElement(
                                            hu,
                                            xu({ key: `${au[t].categoryName}`, isAnimationCanceled: u, index: t }, e),
                                        ),
                                    ),
                                ),
                                a().createElement(
                                    U,
                                    xu({}, eu[Xe.BUTTON], { isCanceled: u, className: 'ComparisonWindowApp_btn_bb' }),
                                    a().createElement(
                                        We,
                                        {
                                            type: Ne.primary,
                                            size: He.medium,
                                            onClick: () => i.O.view.sendEvent.close(),
                                            isFocused: !0,
                                        },
                                        R.strings.halloween_lobby.common.yes(),
                                    ),
                                ),
                            ),
                        )
                    );
                });
                engine.whenReady.then(() => {
                    I().render(
                        a().createElement(S, null, a().createElement(Tu, null)),
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
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], r = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
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
        (__webpack_require__.j = 562),
        (() => {
            var e = { 562: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(8641));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
