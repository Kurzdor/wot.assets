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
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => a, onScaleUpdated: () => i });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${u}`,
                                            i = l[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            n(),
                                            () => {
                                                r &&
                                                    (i(),
                                                    window.removeEventListener(a, s),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                (e.enabled = !1), n();
                            },
                            enable() {
                                (e.enabled = !0), n();
                            },
                            enableOutside() {
                                e.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, r.R)(!1);
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
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
                function a(e = 'px') {
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
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => n });
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
                t.d(u, { O: () => a });
                var n = t(5959),
                    r = t(514);
                const a = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    i = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(2472);
                const r = {
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
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getScale: () => g,
                        getSize: () => _,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => f,
                        isFocused: () => p,
                        pxToRem: () => h,
                        remToPx: () => D,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => T,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    i = t(8566);
                const s = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
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
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => a });
                const n = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
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
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    a = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, r;
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
                    })(r || (r = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(3138);
                class r {
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
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                r.__instance = void 0;
                const a = r;
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
                t.d(u, { B3: () => l, Z5: () => i.Z5, B0: () => s, ry: () => h });
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
                const r = n;
                var a = t(1358),
                    i = t(8613);
                let s;
                var o;
                ((o = s || (s = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    A = t(3138);
                const m = ['args'];
                function F(e, u, t, n, r, a, i) {
                    try {
                        var s = e[a](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function i(e) {
                                            F(a, n, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(a, n, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, m);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    B = () => D(s.CLOSE),
                    p = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var C = t(7572);
                const f = r.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: C.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => D(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => D(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const i = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                d = o.height,
                                _ = {
                                    x: A.O.view.pxToRem(l) + i.x,
                                    y: A.O.view.pxToRem(c) + i.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(d),
                                };
                            D(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: g(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, B);
                        },
                        handleViewEvent: D,
                        onBindingsReady: h,
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
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            2482: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t.n(n);
                const a = (e, u, t) =>
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
                        r = (function (e, u) {
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
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
                    E = c.width,
                    d = c.height,
                    _ = Object.assign({ width: E, height: d }, l(E, d, s)),
                    A = (0, n.createContext)(_),
                    m = ['children'],
                    F = (e) => {
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
                            })(e, m);
                        const r = (0, n.useContext)(A),
                            i = r.extraLarge,
                            s = r.large,
                            o = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            E = r.extraLargeWidth,
                            d = r.largeWidth,
                            _ = r.mediumWidth,
                            F = r.smallWidth,
                            g = r.extraSmallWidth,
                            h = r.extraLargeHeight,
                            D = r.largeHeight,
                            B = r.mediumHeight,
                            p = r.smallHeight,
                            C = r.extraSmallHeight,
                            f = { extraLarge: h, large: D, medium: B, small: p, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && s) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return a(u, t, f);
                            if (t.largeWidth && d) return a(u, t, f);
                            if (t.mediumWidth && _) return a(u, t, f);
                            if (t.smallWidth && F) return a(u, t, f);
                            if (t.extraSmallWidth && g) return a(u, t, f);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && h) return u;
                                if (t.largeHeight && D) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && p) return u;
                                if (t.extraSmallHeight && C) return u;
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
                    (0, n.memo)(F);
                const g = ({ children: e }) => {
                    const u = (0, n.useContext)(A),
                        t = (0, n.useState)(u),
                        a = t[0],
                        o = t[1],
                        c = (0, n.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                n = i.O.view.pxToRem(u);
                            o(Object.assign({ width: t, height: n }, l(t, n, s)));
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
                    const d = (0, n.useMemo)(() => Object.assign({}, a), [a]);
                    return r().createElement(A.Provider, { value: d }, e);
                };
                var h = t(6483),
                    D = t.n(h),
                    B = t(926),
                    p = t.n(B);
                let C, f, b;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(C || (C = {})),
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
                    })(b || (b = {}));
                const v = () => {
                        const e = (0, n.useContext)(A),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return C.ExtraLarge;
                                    case e.large:
                                        return C.Large;
                                    case e.medium:
                                        return C.Medium;
                                    case e.small:
                                        return C.Small;
                                    case e.extraSmall:
                                        return C.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), C.ExtraSmall;
                                }
                            })(e),
                            a = ((e) => {
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
                                        return b.ExtraLarge;
                                    case e.largeHeight:
                                        return b.Large;
                                    case e.mediumHeight:
                                        return b.Medium;
                                    case e.smallHeight:
                                        return b.Small;
                                    case e.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: a, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    w = ['children', 'className'];
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
                const T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL_WIDTH,
                        [f.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [f.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL_HEIGHT,
                        [b.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [b.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    S = {
                        [C.ExtraSmall]: '',
                        [C.Small]: p().SMALL,
                        [C.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [C.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [C.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
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
                            })(e, w);
                        const a = v(),
                            i = a.mediaWidth,
                            s = a.mediaHeight,
                            o = a.mediaSize;
                        return r().createElement('div', y({ className: D()(t, T[i], x[s], S[o]) }, n), u);
                    },
                    L = ['children'],
                    k = (e) => {
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
                            })(e, L);
                        return r().createElement(g, null, r().createElement(O, t, u));
                    };
                var P = t(493),
                    M = t.n(P);
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
                    bezier: (e, u, t, n) => (r) =>
                        (1 - r) * (1 - r) * (1 - r) * e +
                        3 * (1 - r) * (1 - r) * r * u +
                        3 * (1 - r) * r * r * t +
                        r * r * r * n,
                };
                var I = t(7030);
                const U = { x: 0, y: 0, opacity: 0, transform: 'scale(1) rotate(0deg)' },
                    H = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' };
                let G;
                !(function (e) {
                    (e.Linear = 'linear'),
                        (e.EaseIn = 'easeIn'),
                        (e.EaseOut = 'easeOut'),
                        (e.EaseInOut = 'easeInOut'),
                        (e.EaseOutBack = 'easeOutBack'),
                        (e.EaseOutQuint = 'easeOutQuint'),
                        (e.EaseOutExpo = 'easeOutExpo');
                })(G || (G = {}));
                const W = {
                        [G.Linear]: N.linear,
                        [G.EaseIn]: N.easeInCubic,
                        [G.EaseOut]: N.easeOutCubic,
                        [G.EaseInOut]: N.easeInOutCubic,
                        [G.EaseOutBack]: N.easeOutBack,
                        [G.EaseOutQuint]: (e) => 1 - Math.pow(1 - e, 5),
                        [G.EaseOutExpo]: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
                    },
                    $ = ({
                        children: e,
                        from: u = U,
                        to: t = H,
                        config: a,
                        isCanceled: i = !1,
                        isDisabled: s = !1,
                        duration: o = 250,
                        delay: l = 0,
                        transformOrigin: c = '50% 50%',
                        easingType: E = G.EaseInOut,
                        onRest: d,
                        onStart: _,
                        trigger: A,
                        className: m,
                        isReverse: F = !1,
                    }) => {
                        const g = W[E],
                            h = (0, I.useSpring)(() => u),
                            D = h[0],
                            B = h[1],
                            p = i && !s ? t : Object.assign({}, D, { transformOrigin: c });
                        return (
                            (0, n.useEffect)(() => {
                                B.start({
                                    from: u,
                                    to: t,
                                    delay: l,
                                    immediate: i,
                                    config: a ? Object.assign({}, a) : { duration: o, easing: g },
                                    cancel: i || s,
                                    reverse: F,
                                    onRest: (e) => {
                                        !0 === e.finished && d && d();
                                    },
                                    onStart: () => {
                                        _ && _();
                                    },
                                });
                            }, [B, l, o, g, u, i, d, t, A, s, F, _, a]),
                            r().createElement(I.animated.div, { className: m, style: p }, e)
                        );
                    };
                var q = t(9916);
                const j = [
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
                const K = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: q.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Y = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            _ = e.decoratorId,
                            A = void 0 === _ ? 0 : _,
                            m = e.isEnabled,
                            F = void 0 === m || m,
                            g = e.targetId,
                            h = void 0 === g ? 0 : g,
                            D = e.onShow,
                            B = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, j);
                        const C = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(
                                () =>
                                    h ||
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
                                [h],
                            ),
                            b = (0, n.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (K(t, A, { isMouseEvent: !0, on: !0, arguments: z(r) }, f),
                                    D && D(),
                                    (C.current.isVisible = !0));
                            }, [t, A, r, f, D]),
                            v = (0, n.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        K(t, A, { on: !1 }, f),
                                        C.current.isVisible && B && B(),
                                        (C.current.isVisible = !1);
                                }
                            }, [t, A, f, B]),
                            w = (0, n.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(C.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = C.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            ),
                            F
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((C.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          a && a(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  v(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === d && v(), null == o || o(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === d && v(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var y;
                    },
                    V = ['children'];
                function X() {
                    return (
                        (X = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        X.apply(null, arguments)
                    );
                }
                const Q = (e) => {
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
                            })(e, V);
                        return r().createElement(
                            Y,
                            X(
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
                    Z = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                            a = e.header,
                            i = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Z);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: a, note: i, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, a, i, o]);
                        return r().createElement(
                            Y,
                            J(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
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
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(ue, u, n);
                    const a = u.contentId;
                    return a ? r().createElement(Y, te({}, u, { contentId: a }), n) : r().createElement(Q, u, n);
                };
                var re = t(8045);
                const ae = {
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
                let se, oe, le;
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
                    })(se || (se = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(oe || (oe = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(le || (le = {}));
                const ce = { [le.NBSP]: se.NoBreakSymbol, [le.ZWNBSP]: se.NoBreakSymbol, [le.NEW_LINE]: se.LineBreak },
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
                    me = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? de[n]
                                ? r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: D()(_e, de[n]) },
                                      e,
                                  )
                                : r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: _e, style: Ae(n) },
                                      e,
                                  )
                            : r().createElement('span', { key: t, 'data-block-type': u.blockType, className: _e }, e);
                    },
                    Fe = {
                        [se.Word]: me,
                        [se.NoBreakSymbol]: me,
                        [se.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            r().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => r().createElement(r().Fragment, { key: t }, e)),
                            ),
                        [se.LineBreak]: ({ key: e }) =>
                            r().createElement('span', {
                                key: e,
                                'data-block-type': se.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [se.NewLine]: ({ elementList: e, key: u }) =>
                            r().createElement(
                                'span',
                                { key: u, 'data-block-type': se.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [se.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            r().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': se.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    ge = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, a) => {
                                const i = `${t}_${a}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        u = e.blockType,
                                        t = ge(e, Fe[u], i);
                                    n.push(...t);
                                } else n.push(u({ elementList: [r], textBlock: e, key: i }));
                            }),
                            n
                        );
                    },
                    he = (e, u, t, n) => {
                        let r = u.exec(e),
                            a = 0;
                        for (; r; ) a !== r.index && t(e.slice(a, r.index)), n(r), (a = u.lastIndex), (r = u.exec(e));
                        a !== e.length && t(e.slice(a));
                    },
                    De = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    Be = Ee
                        ? (e) => {
                              const u = [];
                              return (
                                  he(
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
                                                      he(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var t;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? u.push(...((t = e), t.match(De) || []))
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
                              const r = [];
                              let a = 0;
                              for (; n; ) {
                                  const i = u.justifyContent === oe.FlexEnd ? n.index : t.lastIndex;
                                  r.push(e.slice(a, i)), (a = i), (n = t.exec(e));
                              }
                              return a !== e.length && r.push(e.slice(a)), r;
                          },
                    pe = (e, u = '', t) => {
                        const n = [];
                        return (
                            he(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: se.Word, colorTag: u, childList: Be(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        r = ce[t.charAt(0)];
                                    r === se.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: se.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: se.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : n.push({ blockType: r, colorTag: u, childList: [t] });
                                },
                            ),
                            n
                        );
                    },
                    Ce = (e, u, t = '', n) => {
                        const r = [];
                        return (
                            he(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...pe(e, t, n));
                                },
                                (e) => {
                                    const a = e[1],
                                        i = void 0 === u[a] ? e[0] : u[a];
                                    'string' == typeof i || 'number' == typeof i
                                        ? r.push(...pe(String(i), t, n))
                                        : r.push({ blockType: se.Binding, colorTag: t, childList: [i] });
                                },
                            ),
                            r
                        );
                    },
                    fe = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === se.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: se.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    be = (e, u = {}, t) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === se.NoBreakSymbol
                                        ? ((t = !0), u.push(...fe(u.pop(), e)))
                                        : (t ? u.push(...fe(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const n = [];
                                return (
                                    he(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...Ce(e, u, '', t));
                                        },
                                        (e) => {
                                            n.push(...Ce(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    n
                                );
                            })(((r = e), r.replace(/&nbsp;/g, ' ')).replace(/&zwnbsp;/g, '\ufeff'), u, t),
                        );
                        var r;
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                n = e.blockType,
                                                r = Fe[n],
                                                a = ge(e, r, u);
                                            return (
                                                n === se.NoBreakWrapper
                                                    ? t.push(r({ elementList: a, textBlock: e, key: `${u}` }))
                                                    : t.push(...a),
                                                t
                                            );
                                        })(e, t),
                                    );
                                }),
                                u
                            );
                        })(n);
                    },
                    ve = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    we = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    ye = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = we(e, u),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / a);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const s = Math.max(t + i, 0);
                        return r < s ? [!1, 0] : [!0, s];
                    },
                    Te = (e, u, t, n, a, i) => {
                        let s = -1,
                            o = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === se.LineBreak || c === se.NewLine || c === se.Binding) continue;
                            const E = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = ye(t, n, a),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (a -= d);
                                    continue;
                                }
                                const _ = E.slice(0, E.length - d) + i,
                                    A = u[l];
                                (o = r().cloneElement(A, A.props, _)), (s = l);
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    d = c.props.children,
                                    _ = Te(e, d, e.length - 1, n, a, i),
                                    A = _[0],
                                    m = _[1];
                                if (!(A < 0)) {
                                    const e = d.slice(0, A);
                                    (o = r().cloneElement(c, c.props, e, m)), (s = l);
                                    break;
                                }
                                a -= E.length;
                            }
                        }
                        return [s, o];
                    },
                    xe = r().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: a,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: s = !1,
                            customTooltipArgs: o,
                            targetId: l,
                            justifyContent: c = oe.FlexStart,
                            alignContent: E = oe.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const _ = (0, n.useRef)(null),
                                A = (0, n.useRef)({ height: 0, width: 0 }),
                                m = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                F = m[0],
                                g = m[1],
                                h = (0, n.useMemo)(() => be(e, a, { justifyContent: c }), [a, c, e]),
                                B = (0, n.useMemo)(() => {
                                    if (
                                        i &&
                                        F.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, o, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [a, i, l, e, o, F.isTruncated]),
                                p = (0, n.useCallback)(
                                    (e) => {
                                        (A.current.width = e.contentRect.width),
                                            (A.current.height = e.contentRect.height);
                                        const u = ((e, u, t, n = '...') => {
                                                const r = [...u],
                                                    a = e.current;
                                                if (!a) return [r, !1];
                                                const i = t.height,
                                                    s = t.width,
                                                    o = a.lastElementChild;
                                                if (!ve(o, i) && we(o, s) <= 0) return [r, !1];
                                                const l = a.children,
                                                    c = ((e, u) => {
                                                        let t = 0,
                                                            n = e.length - 1;
                                                        for (; n - t >= 0; ) {
                                                            const r = t + Math.ceil(0.5 * (n - t));
                                                            ve(e[r], u) ? (n = r - 1) : (t = r + 1);
                                                        }
                                                        return t - 1;
                                                    })(l, i);
                                                if (c < 0) return [r, !1];
                                                const E = Te(l, r, c, s, n.length, n),
                                                    d = E[0],
                                                    _ = E[1];
                                                return _ && (r.splice(d, 1, _), r.splice(d + 1)), [r, !0];
                                            })(_, h, A.current, d),
                                            n = u[0],
                                            r = u[1];
                                        g({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                    },
                                    [t, d, h],
                                ),
                                C = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: E }), [E, c]);
                            return (
                                ((e, u, t = !0) => {
                                    const r = (0, n.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new re.Z((e) => r(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [r, t, e]);
                                })(_, p, s),
                                r().createElement(
                                    'div',
                                    {
                                        className: D()(
                                            ae.base,
                                            u,
                                            ae.base__zeroPadding,
                                            s && ae.base__isTruncationAvailable,
                                        ),
                                        style: C,
                                    },
                                    r().createElement('div', { className: ae.unTruncated, ref: _ }, h),
                                    r().createElement(
                                        ne,
                                        {
                                            tooltipArgs: B,
                                            className: D()(
                                                ae.tooltip,
                                                ae[`tooltip__justify-${c}`],
                                                ae[`tooltip__align-${E}`],
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            {
                                                className: D()(
                                                    ae.truncated,
                                                    !F.isTruncateFinished && s && ae.truncated__hide,
                                                ),
                                                style: C,
                                            },
                                            F.isTruncateFinished && s ? F.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Se = {
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
                let Re;
                !(function (e) {
                    (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Red = 'red'),
                        (e.LightRed = 'lightRed'),
                        (e.Currency = 'currency'),
                        (e.Heading = 'heading'),
                        (e.MetaHeading = 'metaHeading');
                })(Re || (Re = {}));
                const Oe = ['type', 'shadow', 'grunge', 'className'];
                function Le() {
                    return (
                        (Le = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Le.apply(null, arguments)
                    );
                }
                const ke = (e) => {
                        let u = e.type,
                            t = e.shadow,
                            n = void 0 !== t && t,
                            a = e.grunge,
                            i = void 0 !== a && a,
                            s = e.className,
                            o = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Oe);
                        return r().createElement(
                            'div',
                            { className: D()(Se.base, Se[`base__${u}`], s), lang: R.strings.settings.LANGUAGE_CODE() },
                            r().createElement(xe, Le({ classMix: D()(Se.layer0, n && Se.layer0__shadow) }, o)),
                            (u === Re.Heading || u === Re.MetaHeading) &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(xe, Le({ classMix: Se.layer1 }, o)),
                                    r().createElement(xe, Le({ classMix: Se.layer2 }, o)),
                                ),
                            r().createElement(xe, Le({ classMix: Se.layer3 }, o)),
                            i && r().createElement(xe, Le({ classMix: Se.layer4 }, o)),
                        );
                    },
                    Pe = {
                        base: 'VehicleType_base_13',
                        base__c_24x24: 'VehicleType_base__c_24x24_8a',
                        base__c_38x38: 'VehicleType_base__c_38x38_c5',
                        base__c_48x48: 'VehicleType_base__c_48x48_83',
                        base__c_83x74: 'VehicleType_base__c_83x74_a3',
                    };
                let Me, Ne;
                !(function (e) {
                    (e.C24x24 = 'c_24x24'), (e.C38x38 = 'c_38x38'), (e.C48x48 = 'c_48x48'), (e.C83x74 = 'c_83x74');
                })(Me || (Me = {})),
                    (function (e) {
                        (e.Silver = 'silver'),
                            (e.Gray = 'gray'),
                            (e.Elite = 'elite'),
                            (e.WhiteSpanish = 'whitespanish'),
                            (e.WhiteSpanishBright = 'whitespanish_bright');
                    })(Ne || (Ne = {}));
                const Ie = (0, n.memo)(function ({ type: e, color: u, className: t, size: n = Me.C24x24 }) {
                    return r().createElement('div', {
                        className: D()(Pe.base, Pe[`base__${n}`], t),
                        style: {
                            backgroundImage: `url('R.images.halloween.gui.maps.icons.vehicleTypes.flat.${u}.${n}.${((a = e), a.replace(/-/g, '_'))}')`,
                        },
                    });
                    var a;
                });
                function Ue(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const He = {
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
                let Ge, We;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Ge || (Ge = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(We || (We = {}));
                const $e = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: i,
                    mixClass: s,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: _,
                    onMouseLeave: A,
                    onClick: m,
                }) => {
                    const F = (0, n.useRef)(null),
                        g = (0, n.useState)(t),
                        h = g[0],
                        B = g[1],
                        p = (0, n.useState)(!1),
                        C = p[0],
                        f = p[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                h && null !== F.current && !F.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, n.useEffect)(() => {
                            B(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: F,
                                className: D()(
                                    He.base,
                                    He[`base__${a}`],
                                    i && He.base__disabled,
                                    u && He[`base__${u}`],
                                    h && He.base__focus,
                                    C && He.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== o && Ue(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    i || (_ && _(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== l && Ue(l),
                                        d && d(e),
                                        t && (i || (F.current && (F.current.focus(), B(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (A && A(e), f(!1));
                                },
                                onClick: function (e) {
                                    i || (m && m(e));
                                },
                            },
                            a !== Ge.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: He.back }),
                                    r().createElement('span', { className: He.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: D()(He.state, He.state__default) },
                                r().createElement('span', { className: He.stateDisabled }),
                                r().createElement('span', { className: He.stateHighlightHover }),
                                r().createElement('span', { className: He.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: He.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                $e.defaultProps = { type: Ge.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const qe = $e,
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
                    ze = [
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
                function Ke() {
                    return (
                        (Ke = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ke.apply(null, arguments)
                    );
                }
                class Ye extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Ue(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Ue(this.props.soundClick);
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
                            i = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
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
                                })(e, ze)),
                            _ = D()(je.base, je[`base__${i}`], je[`base__${a}`], null == s ? void 0 : s.base),
                            A = D()(je.icon, je[`icon__${i}`], je[`icon__${a}`], null == s ? void 0 : s.icon),
                            m = D()(je.glow, null == s ? void 0 : s.glow),
                            F = D()(je.caption, je[`caption__${i}`], null == s ? void 0 : s.caption),
                            g = D()(je.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            Ke(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== i && r().createElement('div', { className: je.shine }),
                            r().createElement('div', { className: A }, r().createElement('div', { className: m })),
                            r().createElement('div', { className: F }, u),
                            n && r().createElement('div', { className: g }, n),
                        );
                    }
                }
                Ye.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Ve = t(6112);
                function Xe() {}
                function Qe() {
                    return !1;
                }
                console.log;
                const Ze = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function Je() {
                    return (
                        (Je = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Je.apply(null, arguments)
                    );
                }
                const eu = (0, n.forwardRef)(function (e, u) {
                        let t = e.src,
                            a = e.className,
                            s = e.autoplay,
                            o = void 0 !== s && s,
                            l = e.style,
                            c = e.loop,
                            E = void 0 !== c && c,
                            d = e.isPrebufferKeyframes,
                            _ = e.keyframesNameConfig,
                            A = e.onClick,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Ze);
                        const F = u,
                            g = (0, n.useRef)(null);
                        var h;
                        return (
                            (h = () =>
                                i.O.view.events.onDisplayChanged((e, u) => {
                                    var t, n;
                                    u === Ve.W.hidden && (null == (t = g.current) || t.pause()),
                                        u === Ve.W.shown && (null == (n = g.current) || n.play());
                                })),
                            (0, n.useEffect)(h, []),
                            (0, n.useEffect)(
                                () =>
                                    ((e) => {
                                        let u,
                                            t = null;
                                        return (
                                            (t = requestAnimationFrame(() => {
                                                t = requestAnimationFrame(() => {
                                                    (t = null),
                                                        (u = (() => {
                                                            const e = g.current;
                                                            if (!F || !e || !d)
                                                                return void (
                                                                    null != e &&
                                                                    e.cohFastSeek &&
                                                                    (e.cohFastSeek = !1)
                                                                );
                                                            const u = e.cohGetKeyframeTimestamps();
                                                            u.length > 0
                                                                ? ((e.cohFastSeek = !0),
                                                                  u.map((u) => {
                                                                      null == e || e.cohPrebufferKeyframe(u);
                                                                  }))
                                                                : console.warn(
                                                                      "Can't prebuffered keyframes, keyframes was not found",
                                                                  );
                                                        })());
                                                });
                                            })),
                                            () => {
                                                'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                                            }
                                        );
                                    })(),
                                [d, F],
                            ),
                            (0, n.useEffect)(() => {
                                if (F && g.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: Xe,
                                        },
                                        u = () => {
                                            let u = 0;
                                            const t = (function (t) {
                                                    let n = 0;
                                                    return [
                                                        function t() {
                                                            (() => {
                                                                if (g.current) {
                                                                    const t = g.current,
                                                                        n = t.currentTime,
                                                                        r = t.duration;
                                                                    if (
                                                                        (u !== n &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: n, duration: r }),
                                                                            ),
                                                                            (u = n)),
                                                                        g.current.paused || !F || !d)
                                                                    )
                                                                        return;
                                                                    const a = g.current.cohGetKeyframeTimestamps();
                                                                    a.forEach((u, t) => {
                                                                        n > a[t] - 0.02 &&
                                                                            n < a[t] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const n = Object.keys(
                                                                                    null != _ ? _ : {},
                                                                                )[t];
                                                                                return e({
                                                                                    time: u,
                                                                                    name: `${_ ? n : `Point_${t}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (n = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(),
                                                n = t[0],
                                                r = t[1];
                                            return n(), r;
                                        };
                                    e.changeTimeLoop = u();
                                    const t = (u) => (
                                            e.changeTimeHandlers.push(u),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        n = (u) => (
                                            e.changeKeyframeHandlers.push(u),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.currentTime;
                                        },
                                        a = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            var u, t;
                                            g.current &&
                                                (g.current.currentTime =
                                                    ((u = g.current.duration), (t = e) < 0 ? 0 : t > u ? u : t));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.play();
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            o(), i(0);
                                        },
                                        c = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = g.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        E = (e) => {
                                            i(e), s();
                                        },
                                        A = (e) => {
                                            i(e), o();
                                        },
                                        m = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        h = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = g.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = g.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        D = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = g.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = g.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        };
                                    return (
                                        (F.current = {
                                            on: h,
                                            off: D,
                                            play: s,
                                            pause: o,
                                            stop: l,
                                            cleanup: m,
                                            getCurrentTime: r,
                                            getDuration: a,
                                            getCachedKeyframes: c,
                                            goToAndPlay: E,
                                            goToAndStop: A,
                                            setCurrentTime: i,
                                            domRef: g.current,
                                            onChangeTime: t,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            m(), (F.current = null);
                                        }
                                    );
                                }
                            }, [_, F, d]),
                            (0, n.useEffect)(() => {
                                g.current && o && g.current.play();
                            }, [o, E]),
                            (0, n.useEffect)(() => {
                                if (g.current)
                                    return () => {
                                        g.current && g.current.pause();
                                    };
                            }, []),
                            r().createElement(
                                'video',
                                Je({ src: t, className: a, style: l, loop: E, ref: g, onClick: A }, m),
                            )
                        );
                    }),
                    uu = (0, n.memo)(eu);
                var tu = t(5521);
                const nu = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ru(e = tu.n.NONE, u = nu, t = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== tu.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, r]);
                }
                var au = t(3403),
                    iu = t(9174);
                function su(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const ou = (e) => (0 === e ? window : window.subViews.get(e)),
                    lu = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: s, mocks: o }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, t, n) => {
                                        var r;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ou,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const r = t(u),
                                                        a = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const o = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return r.set(l, t), e && t(s(a)), l;
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
                                                                                    return su(e, u);
                                                                                var t = {}.toString
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
                                                                                          ? su(e, u)
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
                                                                })(r.keys());
                                                            !(e = t()).done;

                                                        )
                                                            a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e }) => ({
                                                root: e.object(),
                                                rewards: e.array('rewards', []),
                                            }))({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : o(u),
                                                            r = iu.LO.box(n, { equals: Qe });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, iu.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : o(u),
                                                            r = iu.LO.box(n, { equals: Qe });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, iu.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = o(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = iu.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, iu.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                a = Object.entries(r),
                                                                i = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = iu.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, iu.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
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
                                                cleanup: c,
                                            }),
                                            d = { mode: e, model: E, externalModel: s, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && n ? n.controls(d) : u(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    d = (0, n.useState)(e),
                                    _ = d[0],
                                    A = d[1],
                                    m = (0, n.useState)(() => c(e, a, o)),
                                    F = m[0],
                                    g = m[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? g(c(_, a, o)) : (E.current = !0);
                                    }, [o, _, a]),
                                    (0, n.useEffect)(() => {
                                        A(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    r().createElement(t.Provider, { value: F }, s)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        garage: e.createCallbackNoArgs('onToGarageClick'),
                        outro: e.createCallbackNoArgs('onToOutroClick'),
                    })),
                    cu = lu[0],
                    Eu = lu[1],
                    du = { y: 5, opacity: 0 },
                    _u = { y: 0, opacity: 1 };
                let Au;
                !(function (e) {
                    (e.TITLE = 'title'),
                        (e.HEADER = 'header'),
                        (e.NAME = 'name'),
                        (e.REWARDS = 'rewards'),
                        (e.BUTTONS = 'buttons');
                })(Au || (Au = {}));
                const mu = 500,
                    Fu = {
                        [Au.TITLE]: { from: du, to: _u, delay: 1e3, duration: mu },
                        [Au.HEADER]: { from: du, to: _u, delay: 1200, duration: mu },
                        [Au.NAME]: { from: du, to: _u, delay: 1400, duration: mu },
                        [Au.REWARDS]: { from: { y: -5, opacity: 0 }, to: _u, delay: 1800, duration: mu },
                        [Au.BUTTONS]: { from: { y: 10, opacity: 0 }, to: _u, delay: 3200, duration: 1200 },
                    };
                let gu, hu, Du, Bu, pu, Cu, fu, bu;
                var vu;
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
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin');
                })(gu || (gu = {})),
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
                    })(hu || (hu = {})),
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
                    })(Du || (Du = {})),
                    ((vu = Bu || (Bu = {})).MULTI = 'multi'),
                    (vu.CURRENCY = 'currency'),
                    (vu.PREMIUM_PLUS = 'premium_plus'),
                    (vu.NUMBER = 'number'),
                    (vu.STRING = 'string'),
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
                    })(pu || (pu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Cu || (Cu = {})),
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
                    })(fu || (fu = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(bu || (bu = {}));
                class wu extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? q.B3.GOLD : q.B3.INTEGRAL;
                        const u = q.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                wu.defaultProps = { format: 'integral' };
                const yu = [
                        gu.Items,
                        gu.Equipment,
                        gu.Xp,
                        gu.XpFactor,
                        gu.Blueprints,
                        gu.BlueprintsAny,
                        gu.Goodies,
                        gu.Berths,
                        gu.Slots,
                        gu.Tokens,
                        gu.CrewSkins,
                        gu.CrewBooks,
                        gu.Customizations,
                        gu.CreditsFactor,
                        gu.TankmenXp,
                        gu.TankmenXpFactor,
                        gu.FreeXpFactor,
                        gu.BattleToken,
                        gu.PremiumUniversal,
                        gu.NaturalCover,
                        gu.BpCoin,
                        gu.BattlePassSelectToken,
                        gu.BattlaPassFinalAchievement,
                        gu.BattleBadge,
                        gu.BonusX5,
                        gu.CrewBonusX3,
                        gu.NewYearInvoice,
                        gu.EpicSelectToken,
                        gu.Comp7TokenWeeklyReward,
                        gu.DeluxeGift,
                        gu.BattleBoosterGift,
                        gu.OptionalDevice,
                    ],
                    Tu = [gu.Gold, gu.Credits, gu.Crystal, gu.FreeXp],
                    xu = [gu.BattlePassPoints, gu.EquipCoin],
                    Su = [gu.PremiumPlus, gu.Premium],
                    Ru = (e) =>
                        yu.includes(e)
                            ? Bu.MULTI
                            : Tu.includes(e)
                              ? Bu.CURRENCY
                              : xu.includes(e)
                                ? Bu.NUMBER
                                : Su.includes(e)
                                  ? Bu.PREMIUM_PLUS
                                  : Bu.STRING,
                    Ou = ['engravings', 'backgrounds'],
                    Lu = ['engraving', 'background'],
                    ku = [Du.Small, Du.Big],
                    Pu = {
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
                    Mu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = Du.Big,
                        special: a,
                        value: i,
                        valueType: s,
                        title: o,
                        style: l,
                        className: c,
                        classNames: E,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const A = ((e, u) => {
                                if (void 0 === u || !ku.includes(e)) return null;
                                switch (u) {
                                    case pu.BATTLE_BOOSTER:
                                    case pu.BATTLE_BOOSTER_REPLACE:
                                        return Cu.BATTLE_BOOSTER;
                                }
                            })(n, a),
                            m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case pu.BATTLE_BOOSTER:
                                        return fu.BATTLE_BOOSTER;
                                    case pu.BATTLE_BOOSTER_REPLACE:
                                        return fu.BATTLE_BOOSTER_REPLACE;
                                    case pu.BUILT_IN_EQUIPMENT:
                                        return fu.BUILT_IN_EQUIPMENT;
                                    case pu.EQUIPMENT_PLUS:
                                        return fu.EQUIPMENT_PLUS;
                                    case pu.EQUIPMENT_TROPHY_BASIC:
                                        return fu.EQUIPMENT_TROPHY_BASIC;
                                    case pu.EQUIPMENT_TROPHY_UPGRADED:
                                        return fu.EQUIPMENT_TROPHY_UPGRADED;
                                    case pu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return fu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case pu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return fu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case pu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return fu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case pu.PROGRESSION_STYLE_UPGRADED_1:
                                        return fu.PROGRESSION_STYLE_UPGRADED_1;
                                    case pu.PROGRESSION_STYLE_UPGRADED_2:
                                        return fu.PROGRESSION_STYLE_UPGRADED_2;
                                    case pu.PROGRESSION_STYLE_UPGRADED_3:
                                        return fu.PROGRESSION_STYLE_UPGRADED_3;
                                    case pu.PROGRESSION_STYLE_UPGRADED_4:
                                        return fu.PROGRESSION_STYLE_UPGRADED_4;
                                    case pu.PROGRESSION_STYLE_UPGRADED_5:
                                        return fu.PROGRESSION_STYLE_UPGRADED_5;
                                    case pu.PROGRESSION_STYLE_UPGRADED_6:
                                        return fu.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(a),
                            F = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Bu.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Bu.CURRENCY:
                                    case Bu.NUMBER:
                                        return r().createElement(wu, { format: 'integral', value: Number(e) });
                                    case Bu.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(i, s);
                        return r().createElement(
                            'div',
                            { className: D()(Pu.base, Pu[`base__${n}`], c), style: l },
                            r().createElement(
                                ne,
                                { tooltipArgs: d, className: Pu.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: D()(Pu.image, null == E ? void 0 : E.image) },
                                        A &&
                                            r().createElement('div', {
                                                className: D()(Pu.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${A}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: D()(Pu.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        m &&
                                            r().createElement('div', {
                                                className: D()(Pu.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_overlay)`,
                                                },
                                            }),
                                    ),
                                    F &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: D()(
                                                    Pu.info,
                                                    Pu[`info__${e}`],
                                                    s === Bu.MULTI && Pu.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            F,
                                        ),
                                    o && r().createElement('div', { className: Pu.title }, o),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    ne,
                                    { tooltipArgs: _ },
                                    r().createElement('div', {
                                        className: D()(Pu.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Nu = 'hw_bonus_crew_100',
                    Iu = (e, u = Du.Small) => {
                        switch (e.name) {
                            case 'hw_artefact_key':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.keys`;
                            case 'vehicles':
                            case 'items':
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                            case 'hw_artefact':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.video`;
                            case Nu:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.bonus_crew`;
                            case 'tokens':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                        }
                        return ((e, u = Du.Small) => {
                            const t = e.name,
                                n = e.type,
                                r = e.value,
                                a = e.icon,
                                i = e.item,
                                s = e.dogTagType,
                                o = ((e) => {
                                    switch (e) {
                                        case Du.S600x450:
                                            return 'c_600x450';
                                        case Du.S400x300:
                                            return 'c_400x300';
                                        case Du.S296x222:
                                            return 'c_296x222';
                                        case Du.S232x174:
                                            return 'c_232x174';
                                        case Du.Big:
                                            return 'c_80x80';
                                        case Du.Small:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u);
                            switch (t) {
                                case 'basic':
                                case 'plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                                case 'premium':
                                case 'premium_plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                                case 'items':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                                case 'blueprints':
                                case 'blueprintsAny':
                                case 'finalBlueprints':
                                    return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                                case 'tokens':
                                case 'lootBox':
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
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                                case 'crewBooks':
                                    return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                                case 'dogTagComponents':
                                    return ((e, u, t) => {
                                        const n = Ou[e];
                                        if (n) {
                                            const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                                a = r.$dyn(t);
                                            return a ? `${a}` : `${r.$dyn(Lu[e])}`;
                                        }
                                        return (
                                            console.error(
                                                'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                            ),
                                            ''
                                        );
                                    })(s, u, a);
                                case 'dossier_badge':
                                    return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${a}`;
                                case 'dossier_achievement':
                                    return `R.images.gui.maps.icons.achievement.${o}.${a}`;
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
                                    return `R.images.gui.maps.icons.collectionItems.${o}.${a}`;
                                default:
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                            }
                        })(e, u);
                    },
                    Uu = (e) =>
                        Ru(e.name) === Bu.MULTI && e.value.startsWith('x') ? e.value.replace('x', '') : e.value,
                    Hu = (e) =>
                        e.name === Nu
                            ? {
                                  contentId:
                                      R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                          'resId',
                                      ),
                                  header: R.strings.halloween_tooltips.hw_bonus_crew_100.header(),
                                  body: R.strings.halloween_tooltips.hw_bonus_crew_100.body(),
                              }
                            : ((e, u, t) => {
                                  const n = u && { contentId: u };
                                  return Object.assign(
                                      {
                                          args: e,
                                          isEnabled: Boolean((e && e.tooltipId) || u),
                                          ignoreMouseClick: !0,
                                          ignoreShowDelay: !u,
                                      },
                                      n,
                                      void 0,
                                  );
                              })({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                    Gu = (0, n.memo)(function ({ reward: e, index: u, className: t }) {
                        const a = v().mediaSize <= C.Small ? Du.Small : Du.Big,
                            s = (0, I.useSpring)(() => ({ y: -10, opacity: 0 })),
                            o = s[0],
                            l = s[1];
                        return (
                            (0, n.useEffect)(() => {
                                l.start({
                                    to: { y: 0, opacity: 1 },
                                    delay: Fu.rewards.delay + 200 + 120 * u,
                                    config: { tension: 75, friction: 8 },
                                    onStart: () => {
                                        i.O.sound.play.sound('ev_hw_reward_screen_icon');
                                    },
                                });
                            }, [l, u]),
                            r().createElement(
                                I.animated.div,
                                { className: D()('RewardWrapper_base_f1', t), style: o },
                                r().createElement(Mu, {
                                    key: `${e.name}${u}`,
                                    name: e.name,
                                    value: Uu(e),
                                    className: 'RewardWrapper_reward_c7',
                                    size: a,
                                    special: e.overlayType,
                                    image: Iu(e, a),
                                    valueType: Ru(e.name),
                                    tooltipArgs: Hu(e),
                                }),
                            )
                        );
                    }),
                    Wu = {
                        base: 'KingRewardCongratsApp_base_3f',
                        closeBtn: 'KingRewardCongratsApp_closeBtn_7f',
                        vignetteBg: 'KingRewardCongratsApp_vignetteBg_8b',
                        background: 'KingRewardCongratsApp_background_ea',
                        fadeIn: 'KingRewardCongratsApp_fadeIn_33',
                        container: 'KingRewardCongratsApp_container_7d',
                        title: 'KingRewardCongratsApp_title_dd',
                        header: 'KingRewardCongratsApp_header_97',
                        tankName: 'KingRewardCongratsApp_tankName_ed',
                        icon: 'KingRewardCongratsApp_icon_62',
                        video_static_frame: 'KingRewardCongratsApp_video_static_frame_f4',
                        video: 'KingRewardCongratsApp_video_8c',
                        tank: 'KingRewardCongratsApp_tank_1c',
                        rewardList: 'KingRewardCongratsApp_rewardList_c8',
                        rewardsTitle: 'KingRewardCongratsApp_rewardsTitle_b2',
                        buttons: 'KingRewardCongratsApp_buttons_6a',
                        button: 'KingRewardCongratsApp_button_80',
                        bottomContainer: 'KingRewardCongratsApp_bottomContainer_b1',
                    };
                function $u() {
                    return (
                        ($u = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        $u.apply(null, arguments)
                    );
                }
                const qu = R.strings.halloween_lobby.kingRewardCongratsView,
                    ju = (0, au.Pi)(() => {
                        const e = Eu(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            a = n.vehicleType,
                            s = n.vehicleUserName,
                            o = n.vehicleLevel,
                            l = n.vehicleIsPremium;
                        var c;
                        (c = t.close), ru(tu.n.ESCAPE, c);
                        const E = v().mediaSize;
                        return r().createElement(
                            'div',
                            { className: Wu.base },
                            r().createElement(Ye, {
                                classNames: { base: Wu.closeBtn },
                                caption: R.strings.halloween_lobby.common.close(),
                                type: 'close',
                                side: 'right',
                                onClick: t.close,
                            }),
                            r().createElement(
                                'div',
                                { className: Wu.background },
                                r().createElement('div', { className: Wu.tank }),
                                i.O.client.graphicsQuality.isLow()
                                    ? r().createElement('div', { className: Wu.video_static_frame })
                                    : r().createElement(uu, {
                                          src: R.videos.halloween.king_reward(),
                                          className: Wu.video,
                                          loop: !0,
                                          autoplay: !0,
                                      }),
                            ),
                            r().createElement('div', { className: Wu.vignetteBg }),
                            r().createElement(
                                'div',
                                { className: Wu.container },
                                r().createElement(
                                    $,
                                    Fu[Au.TITLE],
                                    r().createElement('div', { className: Wu.title }, qu.title()),
                                ),
                                r().createElement(
                                    $,
                                    Fu[Au.HEADER],
                                    r().createElement(ke, {
                                        text: qu.header(),
                                        type: Re.Heading,
                                        className: Wu.header,
                                        justifyContent: oe.Center,
                                        shadow: !0,
                                    }),
                                ),
                                r().createElement(
                                    $,
                                    Fu[Au.NAME],
                                    r().createElement(xe, {
                                        classMix: Wu.tankName,
                                        text: qu.tankName(),
                                        binding: {
                                            level: r().createElement('div', { className: Wu.level }, o),
                                            icon: r().createElement(Ie, {
                                                type: a,
                                                size: E <= C.Small ? Me.C48x48 : Me.C83x74,
                                                color: l ? Ne.Elite : Ne.Silver,
                                                className: Wu.icon,
                                            }),
                                            userName: r().createElement(
                                                'div',
                                                { className: Wu.userName },
                                                s.toUpperCase(),
                                            ),
                                        },
                                    }),
                                ),
                                r().createElement(
                                    $,
                                    $u({}, Fu[Au.REWARDS], { className: Wu.bottomContainer }),
                                    r().createElement(
                                        'div',
                                        { className: Wu.rewardList },
                                        r().createElement('div', { className: Wu.rewardsTitle }, qu.rewardsTitle()),
                                        ((d = u.rewards.get()),
                                        (_ = (e, u) => r().createElement(Gu, { key: e.name, reward: e, index: u })),
                                        Array.isArray(d)
                                            ? d.map(_)
                                            : d.map((e, u, t) => _(null == e ? void 0 : e.value, u))),
                                    ),
                                ),
                                r().createElement(
                                    $,
                                    $u({}, Fu[Au.BUTTONS], { className: Wu.bottomContainer }),
                                    r().createElement(
                                        'div',
                                        { className: Wu.buttons },
                                        r().createElement(
                                            qe,
                                            {
                                                type: Ge.primary,
                                                size: We.medium,
                                                onClick: t.garage,
                                                mixClass: Wu.button,
                                            },
                                            qu.btn.garage(),
                                        ),
                                        r().createElement(
                                            qe,
                                            {
                                                type: Ge.secondary,
                                                size: We.medium,
                                                onClick: t.outro,
                                                mixClass: Wu.button,
                                            },
                                            qu.btn.outro(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                        var d, _;
                    });
                engine.whenReady.then(() => {
                    M().render(
                        r().createElement(k, null, r().createElement(cu, null, r().createElement(ju, null))),
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
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], a = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
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
        (__webpack_require__.j = 658),
        (() => {
            var e = { 658: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, i, s] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        (r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(2482));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
