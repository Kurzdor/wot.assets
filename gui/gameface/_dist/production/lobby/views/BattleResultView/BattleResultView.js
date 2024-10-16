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
                    t.d(u, { mouse: () => c, off: () => o, on: () => i, onResize: () => r, onScaleUpdated: () => s });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    c = (function () {
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
                                            s = l[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, i),
                                            a(),
                                            () => {
                                                n &&
                                                    (s(),
                                                    window.removeEventListener(r, i),
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
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var a = t(527),
                    n = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
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
                t.d(u, { ZP: () => s });
                var a = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, a.playSound)(n[u])), e), {}),
                    s = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
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
                        addModelObserver: () => m,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getScale: () => p,
                        getSize: () => E,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => C,
                        isFocused: () => B,
                        pxToRem: () => b,
                        remToPx: () => g,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => y,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    s = t(8566);
                const i = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, i);
                }
                function c(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function m(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, i);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    S = {
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
                t.d(u, { qP: () => r });
                const a = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    r = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
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
                t.d(u, {
                    Sw: () => r.Z,
                    B3: () => l,
                    Z5: () => s.Z5,
                    B0: () => i,
                    c9: () => g,
                    ry: () => b,
                    Sy: () => D,
                });
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
                var r = t(1358),
                    s = t(8613);
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    d = t(3138);
                const A = ['args'];
                function F(e, u, t, a, n, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, n);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                        function s(e) {
                                            F(r, a, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            F(r, a, n, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
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
                    D = () => g(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var h = t(7572);
                const C = n.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => g(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => g(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const s = d.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                m = o.width,
                                _ = o.height,
                                E = {
                                    x: d.O.view.pxToRem(l) + s.x,
                                    y: d.O.view.pxToRem(c) + s.y,
                                    width: d.O.view.pxToRem(m),
                                    height: d.O.view.pxToRem(_),
                                };
                            g(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: p(E),
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
                            B(e, D);
                        },
                        handleViewEvent: g,
                        onBindingsReady: b,
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
                        ClickOutsideManager: C,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
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
            3584: (e, u, t) => {
                'use strict';
                var a = {};
                t.r(a),
                    t.d(a, {
                        Area: () => Ke,
                        Bar: () => qe,
                        DefaultScroll: () => Ye,
                        Direction: () => Oe,
                        defaultSettings: () => Ie,
                        useHorizontalScrollApi: () => He,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => ou, Bar: () => ru, Default: () => iu, useVerticalScrollApi: () => Ze });
                var r = t(6179),
                    s = t.n(r);
                const i = (e, u, t) =>
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
                function m(e, u, t) {
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
                const _ = o.O.client.getSize('rem'),
                    E = _.width,
                    d = _.height,
                    A = Object.assign({ width: E, height: d }, m(E, d, l)),
                    F = (0, r.createContext)(A),
                    p = ['children'],
                    b = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, p);
                        const a = (0, r.useContext)(F),
                            n = a.extraLarge,
                            s = a.large,
                            o = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            m = a.extraLargeWidth,
                            _ = a.largeWidth,
                            E = a.mediumWidth,
                            d = a.smallWidth,
                            A = a.extraSmallWidth,
                            b = a.extraLargeHeight,
                            g = a.largeHeight,
                            D = a.mediumHeight,
                            B = a.smallHeight,
                            h = a.extraSmallHeight,
                            C = { extraLarge: b, large: g, medium: D, small: B, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && s) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && m) return i(u, t, C);
                            if (t.largeWidth && _) return i(u, t, C);
                            if (t.mediumWidth && E) return i(u, t, C);
                            if (t.smallWidth && d) return i(u, t, C);
                            if (t.extraSmallWidth && A) return i(u, t, C);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && b) return u;
                                if (t.largeHeight && g) return u;
                                if (t.mediumHeight && D) return u;
                                if (t.smallHeight && B) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                (b.defaultProps = {
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
                    (0, r.memo)(b);
                const g = (e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    D = ({ children: e }) => {
                        const u = (0, r.useContext)(F),
                            t = (0, r.useState)(u),
                            a = t[0],
                            n = t[1],
                            i = (0, r.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    a = o.O.view.pxToRem(u);
                                n(Object.assign({ width: t, height: a }, m(t, a, l)));
                            }, []),
                            c = (0, r.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        g(() => {
                            o.O.client.events.on('clientResized', i), o.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', i),
                                        o.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [i, c],
                            );
                        const _ = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                        return s().createElement(F.Provider, { value: _ }, e);
                    };
                var B = t(6483),
                    h = t.n(B),
                    C = t(926),
                    v = t.n(C);
                let f, w, S;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
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
                    })(S || (S = {}));
                const y = () => {
                        const e = (0, r.useContext)(F),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
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
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return S.ExtraLarge;
                                    case e.largeHeight:
                                        return S.Large;
                                    case e.mediumHeight:
                                        return S.Medium;
                                    case e.smallHeight:
                                        return S.Small;
                                    case e.extraSmallHeight:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    P = ['children', 'className'];
                function L() {
                    return (
                        (L = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        L.apply(null, arguments)
                    );
                }
                const T = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_WIDTH,
                        [w.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [w.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [S.ExtraSmall]: '',
                        [S.Small]: v().SMALL_HEIGHT,
                        [S.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [S.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [f.ExtraSmall]: '',
                        [f.Small]: v().SMALL,
                        [f.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [f.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [f.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, P);
                        const n = y(),
                            r = n.mediaWidth,
                            i = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', L({ className: h()(t, T[r], x[i], N[o]) }, a), u);
                    },
                    M = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, M);
                        return s().createElement(D, null, s().createElement(k, t, u));
                    };
                var I = t(493),
                    W = t.n(I);
                function H(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const $ = {
                    playHighlight() {
                        H('highlight');
                    },
                    playClick() {
                        H('play');
                    },
                    playYes() {
                        H('yes1');
                    },
                };
                function G() {
                    return (
                        (G = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        G.apply(null, arguments)
                    );
                }
                const U = 'tabs-role';
                var z;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(z || (z = {}));
                class j extends r.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const u = e.find((e) => e.props[z.TAB]);
                                return u && u.props[z.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = s().Children.toArray(this.props.children),
                            u = e.findIndex((e) => e.props[U] === z.LIST);
                        if (u < 0) return;
                        const t =
                            this.props.activeKey || this._getFirstTabKey(s().Children.toArray(e[u].props.children));
                        (e[u] = s().cloneElement(e[u], {
                            children: s()
                                .Children.toArray(e[u].props.children)
                                .map((e) => s().cloneElement(e, { key: e.props[z.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = u),
                            this.handleSetActiveKey(t);
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, u) {
                        if (null === this.tabsListIndex) return;
                        const t = s().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = t.props.children.reduce(
                                (e, u, t) => ((e[t] = u.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            n =
                                ((r = this.tabsProps),
                                (i = a),
                                !(
                                    Object.keys(r).length === Object.keys(i).length &&
                                    Object.keys(r).every(
                                        (e) => Object.prototype.hasOwnProperty.call(i, e) && r[e] === i[e],
                                    )
                                ));
                        var r, i;
                        const o = h()(
                                'Tabs_wrapper_2d',
                                t.props.className,
                                this.props.isTabsCentered && 'Tabs_wrapper__centered_d8',
                                this.props.isVerticalTabs && 'Tabs_wrapper__vertical_a5',
                            ),
                            l = h()('Tabs_list_0a', this.props.isTabsCentered && 'Tabs_list__centered_dc');
                        if (u.activeKey !== this.state.activeKey || n) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[U] === z.CONTENT) return e.props[z.TAB].includes(this.state.activeKey);
                                }),
                                u = this.elementsList.filter((u, t) => [this.tabsListIndex, e].includes(t)),
                                n = u[0].props.children,
                                r = n.map((e, u) =>
                                    s().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[u],
                                            { key: u, isActive: this.state.activeKey === e.props[z.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === u, isLast: u === n.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const t = a[u][z.TAB];
                                                    this.state.activeKey === t ||
                                                        (a[u].onClick && a[u].onClick(e),
                                                        this.handleSetActiveKey(t),
                                                        this.props.onClickSound && H(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    a[u].onMouseEnter && a[u].onMouseEnter(e),
                                                        this.props.onMouseEnterSound && H(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        s().createElement(
                                            'div',
                                            { className: l, key: z.LIST },
                                            s().createElement('div', G({}, t.props, { className: o }), r),
                                        ),
                                        u[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            u = h()('Tabs_base_d9', this.props.isVerticalTabs && 'Tabs_base__vertical_c0');
                        return s().createElement('div', { className: u }, e);
                    }
                }
                j.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const V = ['children', 'className', 'activeKey', 'onClickSound', 'onMouseEnterSound', 'isTabsCentered'];
                function q() {
                    return (
                        (q = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        q.apply(null, arguments)
                    );
                }
                const X = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = e.activeKey,
                            n = e.onClickSound,
                            r = e.onMouseEnterSound,
                            i = e.isTabsCentered,
                            o = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, V);
                        return s().createElement(
                            'div',
                            q({ className: t }, o),
                            s().createElement(
                                j,
                                { activeKey: a, onClickSound: n, onMouseEnterSound: r, isTabsCentered: i },
                                u,
                            ),
                        );
                    },
                    Y = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    K = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Z() {
                    return (
                        (Z = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Z.apply(null, arguments)
                    );
                }
                const Q = (e) => {
                    let u = e.size,
                        t = e.value,
                        a = e.isEmpty,
                        n = e.fadeInAnimation,
                        r = e.hide,
                        i = e.maximumNumber,
                        o = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, K);
                    const c = a ? null : t,
                        m = 'string' == typeof c;
                    if ((c && !m && c < 0) || 0 === c) return null;
                    const _ = c && !m && c > i,
                        E = h()(
                            Y.base,
                            Y[`base__${u}`],
                            n && Y.base__animated,
                            r && Y.base__hidden,
                            !c && Y.base__pattern,
                            a && Y.base__empty,
                            o,
                        );
                    return s().createElement(
                        'div',
                        Z({ className: E }, l),
                        s().createElement('div', { className: Y.bg }),
                        s().createElement('div', { className: Y.pattern }),
                        s().createElement(
                            'div',
                            { className: h()(Y.value, m && Y.value__text) },
                            _ ? i : c,
                            _ && s().createElement('span', { className: Y.plus }, '+'),
                        ),
                    );
                };
                Q.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const J = ({ children: e, component: u, props: t = {} }) =>
                        u ? s().createElement(u, t, e) : e || null,
                    ee = 'Tab_base__first_4a',
                    ue = 'Tab_base__last_96',
                    te = 'Tab_base__medium_ec',
                    ae = 'Tab_base__active_5d',
                    ne = 'Tab_stateBorder_64',
                    re = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function se() {
                    return (
                        (se = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        se.apply(null, arguments)
                    );
                }
                const ie = (0, r.memo)((e) => {
                        let u = e.isActive,
                            t = void 0 !== u && u,
                            a = e.isFirst,
                            n = void 0 !== a && a,
                            r = e.isLast,
                            i = void 0 !== r && r,
                            o = e.isMedium,
                            l = void 0 !== o && o,
                            c = e.isNotified,
                            m = void 0 !== c && c,
                            _ = e.children,
                            E = void 0 === _ ? 'Tab' : _,
                            d = e.wrapper,
                            A = void 0 === d ? {} : d,
                            F = e.counter,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, re);
                        return s().createElement(
                            J,
                            A,
                            s().createElement(
                                'div',
                                se(
                                    {
                                        className: h()(
                                            'Tab_base_dd',
                                            { [ae]: t },
                                            { [ee]: n },
                                            { [ue]: i },
                                            { [te]: l },
                                        ),
                                    },
                                    p,
                                ),
                                s().createElement(
                                    'span',
                                    { className: 'Tab_state_6c' },
                                    s().createElement('span', { className: 'Tab_stateHighlight_1e' }),
                                    s().createElement('span', {
                                        className: h()(ne, 'Tab_stateBorder__positionLeft_e7'),
                                    }),
                                    s().createElement('span', {
                                        className: h()(ne, 'Tab_stateBorder__positionRight_db'),
                                    }),
                                ),
                                E,
                                !i &&
                                    !t &&
                                    s().createElement('span', {
                                        className: h()('Tab_divider_ca', 'Tab_divider__show_62'),
                                    }),
                                (Boolean(F) || m) &&
                                    s().createElement(
                                        'div',
                                        { className: 'Tab_counter_e1' },
                                        s().createElement(Q, { value: F, isEmpty: m }),
                                    ),
                            ),
                        );
                    }),
                    oe = {
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
                    le = [
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
                function ce() {
                    return (
                        (ce = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        ce.apply(null, arguments)
                    );
                }
                class me extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && H(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && H(this.props.soundClick);
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
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(e, le)),
                            E = h()(oe.base, oe[`base__${r}`], oe[`base__${n}`], null == i ? void 0 : i.base),
                            d = h()(oe.icon, oe[`icon__${r}`], oe[`icon__${n}`], null == i ? void 0 : i.icon),
                            A = h()(oe.glow, null == i ? void 0 : i.glow),
                            F = h()(oe.caption, oe[`caption__${r}`], null == i ? void 0 : i.caption),
                            p = h()(oe.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            ce(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== r && s().createElement('div', { className: oe.shine }),
                            s().createElement('div', { className: d }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: F }, u),
                            a && s().createElement('div', { className: p }, a),
                        );
                    }
                }
                me.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const _e = (e) => {
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
                };
                var Ee = t(5521),
                    de = t(9916);
                const Ae = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Fe(e = Ee.n.NONE, u = Ae, t = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== Ee.n.NONE)
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
                const pe = (e = 1) => {
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
                    },
                    be = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    ge = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    De = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    Be = de.Sw.instance;
                let he;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(he || (he = {}));
                const Ce = (e = 'model', u = he.Deep) => {
                    const t = (0, r.useState)(0),
                        a = (t[0], t[1]),
                        n = (0, r.useMemo)(() => pe(), []),
                        s = n.caller,
                        i = n.resId,
                        o = (0, r.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        l = (0, r.useState)(() =>
                            ((e) => {
                                const u = be(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return ge(u) ? u.value : u;
                            })(
                                ((e) =>
                                    ((e, u) =>
                                        e.split('.').reduce((e, u) => {
                                            const t = be(`${e}.${u}`, window);
                                            return ge(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                        }))(e))(o),
                            ),
                        ),
                        c = l[0],
                        m = l[1],
                        _ = (0, r.useRef)(-1);
                    return (
                        g(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? he.Deep : he.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== he.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === he.Deep
                                            ? (e === c && a((e) => e + 1), m(e))
                                            : m(Object.assign([], e));
                                    },
                                    n = ((e) => {
                                        const u = ((e) => {
                                                const u = pe(),
                                                    t = u.caller,
                                                    a = u.resId,
                                                    n =
                                                        window.__feature && window.__feature !== t && t
                                                            ? `subViews.${t}`
                                                            : '';
                                                return { modelPrefix: n, modelPath: De(n, ''), resId: a };
                                            })(),
                                            t = u.modelPrefix,
                                            a = e.split('.');
                                        if (a.length > 0) {
                                            const e = [a[0]];
                                            return (
                                                a.reduce((u, a) => {
                                                    const n = be(De(t, `${u}.${a}`), window);
                                                    return ge(n)
                                                        ? (e.push(n.id), `${u}.${a}.value`)
                                                        : (e.push(a), `${u}.${a}`);
                                                }),
                                                e.reduce((e, u) => e + '.' + u)
                                            );
                                        }
                                        return '';
                                    })(e);
                                _.current = Be.addCallback(n, t, i, u === he.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (u !== he.None)
                                return () => {
                                    Be.removeCallback(_.current, i);
                                };
                        }, [i, u]),
                        c
                    );
                };
                var ve = t(8664);
                const fe = 'App_tabContent_cd',
                    we = 'App_tabContent__visible_99',
                    Se = 'AppAnimations_baseEnterDone_dd',
                    ye = { enterActive: 'AppAnimations_baseEnterActive_54', enterDone: Se },
                    Pe = { enterActive: 'AppAnimations_background_b7', enterDone: Se },
                    Le = { enterActive: 'AppAnimations_horizontalTabs_1a', enterDone: Se },
                    Te = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Re = [];
                function xe(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), Re)
                    );
                }
                function Ne(e, u, t = []) {
                    const a = (0, r.useRef)(0),
                        n = (0, r.useCallback)(() => window.clearInterval(a.current), t || []);
                    (0, r.useEffect)(() => n, [n]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            (a.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        n,
                    ];
                }
                function ke(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                var Me = t(7030);
                let Oe;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Oe || (Oe = {}));
                const Ie = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    We = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: a,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (e, t) => {
                            const a = u(e),
                                n = a[0],
                                r = a[1];
                            return r <= n ? 0 : Te(n, r, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                m = void 0 === c ? Ie : c,
                                _ = (0, r.useRef)(null),
                                E = (0, r.useRef)(null),
                                d = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        a = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (
                                                var a,
                                                    n = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return ke(e, u);
                                                                    var t = {}.toString.call(e).slice(8, -1);
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
                                                                              ? ke(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
                                                            var a = 0;
                                                            return function () {
                                                                return a >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[a++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(a = n()).done;

                                            )
                                                (0, a.value)(...t);
                                        };
                                    return (0, r.useMemo)(() => ({ on: t, off: a, trigger: n }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const a = (0, r.useMemo)(
                                        () =>
                                            (function (e, u, t, a) {
                                                let n,
                                                    r = !1,
                                                    s = 0;
                                                function i() {
                                                    n && clearTimeout(n);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function m() {
                                                        (s = Date.now()), t.apply(l, o);
                                                    }
                                                    r ||
                                                        (a && !n && m(),
                                                        i(),
                                                        void 0 === a && c > e
                                                            ? m()
                                                            : !0 !== u &&
                                                              (n = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : m,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((a = t), (t = u), (u = void 0)),
                                                    (o.cancel = function () {
                                                        i(), (r = !0);
                                                    }),
                                                    o
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                                })(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Me.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = _.current;
                                        u && (t(u, e), d.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                p = F[0],
                                b = F[1],
                                g = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var a;
                                        const n = p.scrollPosition.get(),
                                            r = (null != (a = p.scrollPosition.goal) ? a : 0) - n;
                                        return i(e, u * t + r + n);
                                    },
                                    [p.scrollPosition],
                                ),
                                D = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const a = _.current;
                                        a &&
                                            b.start({
                                                scrollPosition: i(a, e),
                                                immediate: u,
                                                reset: t,
                                                config: m.animationConfig,
                                                from: { scrollPosition: i(a, p.scrollPosition.get()) },
                                            });
                                    },
                                    [b, m.animationConfig, p.scrollPosition],
                                ),
                                B = (0, r.useCallback)(
                                    (e) => {
                                        const u = _.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const a = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, m.step),
                                            r = g(u, e, a);
                                        D(r);
                                    },
                                    [D, g, m.step],
                                ),
                                h = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && B(a(e)),
                                            _.current && d.trigger('mouseWheel', e, p.scrollPosition, u(_.current));
                                    },
                                    [p.scrollPosition, B, d],
                                ),
                                C = ((e, u = []) => {
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
                                        _e(() => {
                                            const e = _.current;
                                            e &&
                                                (D(i(e, p.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [D, p.scrollPosition.goal],
                                ),
                                v = xe(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const u = i(e, p.scrollPosition.goal);
                                    u !== p.scrollPosition.goal && D(u, { immediate: !0 }),
                                        d.trigger('recalculateContent');
                                });
                            return (
                                (0, r.useEffect)(
                                    () => (
                                        window.addEventListener('resize', C),
                                        () => {
                                            window.removeEventListener('resize', C);
                                        }
                                    ),
                                    [C],
                                ),
                                (0, r.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (E.current ? n(E.current) : void 0),
                                        getContainerSize: () => (_.current ? e(_.current) : void 0),
                                        getBounds: () =>
                                            _.current
                                                ? u(_.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: m.step.clampedArrowStepTimeout,
                                        clampPosition: i,
                                        handleMouseWheel: h,
                                        applyScroll: D,
                                        applyStepTo: B,
                                        contentRef: _,
                                        wrapperRef: E,
                                        scrollPosition: b,
                                        animationScroll: p,
                                        recalculateContent: v,
                                        events: { on: d.on, off: d.off },
                                    }),
                                    [p.scrollPosition, D, B, d.off, d.on, v, h, b, m.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    He = We({
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
                        getDirection: (e) => (e.deltaY > 1 ? Oe.Next : Oe.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    $e = 'HorizontalBar_base__nonActive_82',
                    Ge = 'disable',
                    Ue = { pending: !1, offset: 0 },
                    ze = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    je = () => {},
                    Ve = (e, u) => Math.max(20, e.offsetWidth * u),
                    qe = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = ze, onDrag: a = je }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            m = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, r.useState)(Ue),
                            d = E[0],
                            A = E[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    A(e),
                                        m.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                },
                                [a],
                            ),
                            p = () => {
                                const u = c.current,
                                    t = m.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    o = Te(0, 1, r / (n - a)),
                                    _ = (u.offsetWidth - Ve(u, s)) * o;
                                (t.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && m.current) {
                                            if (0 === e)
                                                return i.current.classList.add(Ge), void l.current.classList.remove(Ge);
                                            if (
                                                ((u = c.current),
                                                (t = m.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(Ge), void l.current.classList.add(Ge);
                                            var u, t;
                                            i.current.classList.remove(Ge), l.current.classList.remove(Ge);
                                        }
                                    })(_);
                            },
                            b = xe(() => {
                                (() => {
                                    const u = m.current,
                                        t = c.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && a && t)) return;
                                    const s = Math.min(1, a / r);
                                    (u.style.width = `${Ve(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add($e) : n.current.classList.remove($e));
                                })(),
                                    p();
                            });
                        (0, r.useEffect)(() => _e(b)),
                            (0, r.useEffect)(
                                () =>
                                    _e(() => {
                                        const u = () => {
                                            p();
                                        };
                                        let t = je;
                                        const a = () => {
                                            t(), (t = _e(b));
                                        };
                                        return (
                                            e.events.on('recalculateContent', b),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', b),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!d.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const i = c.current,
                                            o = m.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - d.offset - i.getBoundingClientRect().x,
                                            _ = (l / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: _ });
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        u(), F(Ue);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, d.offset, d.pending, a, F]);
                        const g = Ne((u) => e.applyStepTo(u), _, [e]),
                            D = g[0],
                            B = g[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Ge) || H('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ge) || 0 !== e.button || (H('play'), D(Oe.Next));
                                },
                                onMouseUp: B,
                                ref: i,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const a = m.current;
                                        a &&
                                            0 === u.button &&
                                            (H('play'),
                                            u.target === a
                                                ? F({ pending: !0, offset: u.screenX - a.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const a = m.current,
                                                          n = e.contentRef.current;
                                                      if (!a || !n) return;
                                                      const r = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                  })(u.screenX > a.getBoundingClientRect().x ? Oe.Prev : Oe.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: m, className: h()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: h()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ge) || 0 !== e.button || (H('play'), D(Oe.Prev));
                                },
                                onMouseUp: B,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Xe = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ye = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: h()(Xe.base, e.base) });
                            }, [a]),
                            _ = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: h()(Xe.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(Xe.defaultScrollArea, n) },
                                s().createElement(Ke, { className: o, api: _, classNames: i }, e),
                            ),
                            s().createElement(qe, { getStepByRailClick: l, api: u, onDrag: c, classNames: m }),
                        );
                    },
                    Ke = ({ api: e, className: u, classNames: t, children: a }) => (
                        (0, r.useEffect)(() => _e(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(Xe.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: h()(Xe.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: h()(Xe.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (Ke.Bar = qe), (Ke.Default = Ye);
                const Ze = We({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Oe.Next : Oe.Prev),
                    }),
                    Qe = 'VerticalBar_base__nonActive_42',
                    Je = 'disable',
                    eu = () => {},
                    uu = { pending: !1, offset: 0 },
                    tu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    au = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    nu = (e, u) => Math.max(20, e.offsetHeight * u),
                    ru = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = tu, onDrag: a = eu }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            m = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, r.useState)(uu),
                            d = E[0],
                            A = E[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    A(e),
                                        m.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                },
                                [a],
                            ),
                            p = xe(() => {
                                const u = m.current,
                                    t = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && u && t)) return;
                                const s = Math.min(1, a / r);
                                return (
                                    (u.style.height = `${nu(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(Qe) : n.current.classList.remove(Qe)),
                                    s
                                );
                            }),
                            b = xe(() => {
                                const u = c.current,
                                    t = m.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    o = Te(0, 1, r / (n - a)),
                                    _ = (u.offsetHeight - nu(u, s)) * o;
                                (t.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && m.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(Je), void l.current.classList.remove(Je);
                                            if (
                                                ((u = c.current),
                                                (t = m.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(Je), void l.current.classList.add(Je);
                                            var u, t;
                                            i.current.classList.remove(Je), l.current.classList.remove(Je);
                                        }
                                    })(_);
                            }),
                            g = xe(() => {
                                au(e, () => {
                                    p(), b();
                                });
                            });
                        (0, r.useEffect)(() => _e(g)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    au(e, () => {
                                        b();
                                    });
                                };
                                let t = eu;
                                const a = () => {
                                    t(), (t = _e(g));
                                };
                                return (
                                    e.events.on('recalculateContent', g),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', g),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!d.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        F(uu);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        au(e, (t) => {
                                            const n = c.current,
                                                r = m.current,
                                                s = e.getContainerSize();
                                            if (!n || !r || !s) return;
                                            const i = u.screenY - d.offset - n.getBoundingClientRect().y,
                                                o = (i / n.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, d.offset, d.pending, a, F]);
                        const D = Ne((u) => e.applyStepTo(u), _, [e]),
                            B = D[0],
                            C = D[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Je) || H('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Je) || 0 !== e.button || (H('play'), B(Oe.Next));
                                },
                                ref: i,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const a = m.current;
                                        var n;
                                        a &&
                                            0 === u.button &&
                                            (H('play'),
                                            u.target === a
                                                ? F({ pending: !0, offset: u.screenY - a.getBoundingClientRect().y })
                                                : ((n = u.screenY > a.getBoundingClientRect().y ? Oe.Prev : Oe.Next),
                                                  m.current &&
                                                      au(e, (u) => {
                                                          if (!u) return;
                                                          const a = t(e),
                                                              r = e.clampPosition(u, u.scrollTop + a * n);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: m, className: h()('VerticalBar_thumb_32', u.thumb) }),
                                s().createElement('div', { className: h()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Je) || 0 !== e.button || (H('play'), B(Oe.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    su = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    iu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: h()(su.base, e.base) });
                            }, [a]),
                            _ = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: h()(su.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(su.area, n) },
                                s().createElement(ou, { className: i, classNames: o, api: _ }, e),
                            ),
                            s().createElement(ru, { getStepByRailClick: l, api: u, onDrag: c, classNames: m }),
                        );
                    },
                    ou = ({ className: e, classNames: u, children: t, api: a }) => (
                        (0, r.useEffect)(() => _e(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(su.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(su.content, null == u ? void 0 : u.content), ref: a.contentRef },
                                t,
                            ),
                        )
                    );
                ou.Default = iu;
                const lu = { Vertical: n, Horizontal: a };
                let cu;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(cu || (cu = {}));
                const mu = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: n,
                        isEnabled: s = !0,
                        onMouseDown: i,
                    }) => {
                        const o = (0, r.useCallback)(() => {
                                (0, de.c9)(de.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: n,
                                }),
                                    $.playYes();
                            }, [n, u, t, a]),
                            l = (0, r.useCallback)(() => {
                                (0, de.c9)(de.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === cu.RIGHT)(e) && o();
                                },
                                [i, o],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    _u = ['children'];
                function Eu() {
                    return (
                        (Eu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Eu.apply(null, arguments)
                    );
                }
                const du = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, _u);
                    return s().createElement(
                        mu,
                        Eu({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                        u,
                    );
                };
                class Au extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? de.B3.GOLD : de.B3.INTEGRAL;
                        const u = de.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Au.defaultProps = { format: 'integral' };
                const Fu = [
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
                function pu(e) {
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
                const bu = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: de.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    gu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            _ = void 0 !== m && m,
                            E = e.decoratorId,
                            d = void 0 === E ? 0 : E,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            p = e.targetId,
                            b = void 0 === p ? 0 : p,
                            g = e.onShow,
                            D = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Fu);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, r.useMemo)(() => b || pe().resId, [b]),
                            v = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (bu(t, d, { isMouseEvent: !0, on: !0, arguments: pu(a) }, C),
                                    g && g(),
                                    (h.current.isVisible = !0));
                            }, [t, d, a, C, g]),
                            f = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        bu(t, d, { on: !1 }, C),
                                        h.current.isVisible && D && D(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, d, C, D]),
                            w = (0, r.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            ),
                            F
                                ? (0, r.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  f(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === _ && f(), null == o || o(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === _ && f(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          B,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    Du = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Bu() {
                    return (
                        (Bu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Bu.apply(null, arguments)
                    );
                }
                const hu = R.views.common.tooltip_window.simple_tooltip_content,
                    Cu = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            n = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Du);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: a, note: n, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, a, n, o]);
                        return s().createElement(
                            gu,
                            Bu(
                                {
                                    contentId:
                                        ((m = null == o ? void 0 : o.hasHtmlContent),
                                        m ? hu.SimpleTooltipHtmlContent('resId') : hu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var m;
                    },
                    vu = ['content', 'classMix', 'className'];
                function fu() {
                    return (
                        (fu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        fu.apply(null, arguments)
                    );
                }
                const wu = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            a = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, vu);
                        const i = (0, r.useRef)(null),
                            o = (0, r.useState)(!0),
                            l = o[0],
                            c = o[1];
                        return (
                            (0, r.useEffect)(() =>
                                _e(() => {
                                    const e = i.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            s().createElement(
                                Cu,
                                { isEnabled: l, body: u },
                                s().createElement(
                                    'div',
                                    fu({}, n, { ref: i, className: h()('TextOverflow_base_3b', a, t) }),
                                    u,
                                ),
                            )
                        );
                    },
                    Su = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    yu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                var Pu = t(1281);
                let Lu;
                function Tu(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Lu || (Lu = {}));
                const Ru = (e) => e.replace(/&nbsp;/g, ' '),
                    xu = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Nu = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ku = (e, u, t = Lu.left) => e.split(u).reduce(t === Lu.left ? xu : Nu, []),
                    Mu = (() => {
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
                    Iu = {
                        base: 'Content_base_2f',
                        base__platoon: 'Content_base__platoon_ec',
                        name: 'Content_name_07',
                        base__rowBrPlayer: 'Content_base__rowBrPlayer_89',
                        userName: 'Content_userName_70',
                        clanTag: 'Content_clanTag_a0',
                        anonymizer: 'Content_anonymizer_94',
                        base__hover: 'Content_base__hover_a7',
                        vehicle: 'Content_vehicle_c0',
                        vehicleTypeIcon: 'Content_vehicleTypeIcon_f8',
                        vehicleName: 'Content_vehicleName_ac',
                        level: 'Content_level_ef',
                        damage: 'Content_damage_e6',
                        kills: 'Content_kills_de',
                    },
                    Wu = s().memo(({ isPlatoon: e, type: u, anonymizerNick: t, user: a, isRowHovered: n }) => {
                        const i = a.userName,
                            o = a.clanAbbrev,
                            l = a.vehicleName,
                            c = a.vehicleType,
                            m = a.vehicleLevel,
                            _ = a.damage,
                            E = a.kills,
                            d = a.databaseID,
                            A = a.hiddenUserName,
                            F = 'rowBrPlayer' === u || 'rowBrPlatoon' === u,
                            p = (0, r.useState)(!1),
                            b = p[0],
                            g = p[1],
                            D = h()(Iu.base, Iu[`base__${u}`], e && Iu.base__platoon, (F || n || b) && Iu.base__hover),
                            B = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.vehicleTypes.$dyn(c)})`,
                                }),
                                [c],
                            ),
                            C = o ? `[${o}]` : null,
                            v = (0, r.useCallback)(() => {
                                e && g(!0);
                            }, [e]),
                            f = (0, r.useCallback)(() => {
                                e && g(!1);
                            }, [e]),
                            w = (0, r.useMemo)(() => ({ userName: i, databaseID: d, hiddenUserName: A }), [i, d, A]),
                            S =
                                'rowBrEnemy' === u
                                    ? R.strings.battle_royale.battleResult.stats.anonymizer.enemy.header()
                                    : R.strings.battle_royale.battleResult.stats.anonymizer.header();
                        return s().createElement(
                            'div',
                            { className: D, onMouseEnter: v, onMouseLeave: f },
                            s().createElement(
                                'div',
                                { className: Iu.name },
                                i &&
                                    s().createElement(
                                        du,
                                        { args: w },
                                        s().createElement(
                                            'div',
                                            { className: Iu.userName },
                                            s().createElement(wu, { content: i }),
                                        ),
                                    ),
                                C && s().createElement('span', { className: Iu.clanTag }, C),
                                t &&
                                    s().createElement(
                                        Cu,
                                        {
                                            isEnabled: !0,
                                            header: Tu(S, { name: t }),
                                            body: R.strings.battle_royale.battleResult.stats.anonymizer.body(),
                                        },
                                        s().createElement('div', { className: Iu.anonymizer }),
                                    ),
                            ),
                            s().createElement(
                                'div',
                                { className: Iu.vehicle },
                                s().createElement('div', { className: Iu.vehicleTypeIcon, style: B }),
                                s().createElement('span', { className: Iu.vehicleName }, l),
                            ),
                            s().createElement(
                                'span',
                                { className: Iu.level },
                                (function (e) {
                                    let u = '';
                                    for (let t = yu.length - 1; t >= 0; t--)
                                        for (; e >= yu[t]; ) (u += Su[t]), (e -= yu[t]);
                                    return u;
                                })(m),
                            ),
                            s().createElement(
                                'span',
                                { className: Iu.damage },
                                s().createElement(Au, { value: _, format: 'integral' }),
                            ),
                            s().createElement('span', { className: Iu.kills }, E),
                        );
                    });
                function Hu() {
                    return (
                        (Hu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Hu.apply(null, arguments)
                    );
                }
                const $u = s().memo(({ place: e, isSquadMode: u, playersList: t, index: a }) => {
                    const n = (0, r.useState)(!1),
                        i = n[0],
                        o = n[1],
                        l = h()(
                            'LeaderboardRow_base_8c',
                            0 === a && 'LeaderboardRow_base__leader_44',
                            u && 'LeaderboardRow_base__platoon_ce',
                        ),
                        c = (0, r.useCallback)(() => {
                            u || o(!0);
                        }, [u]),
                        m = (0, r.useCallback)(() => {
                            u || o(!1);
                        }, [u]);
                    return s().createElement(
                        'div',
                        { className: l, onMouseEnter: c, onMouseLeave: m },
                        s().createElement('div', { className: 'LeaderboardRow_place_db' }, e),
                        s().createElement(
                            'div',
                            { className: 'LeaderboardRow_players_be' },
                            t.map(({ value: e }, t) =>
                                s().createElement(
                                    Wu,
                                    Hu({ key: `${t}_${e.user.userName}` }, e, { isPlatoon: u, isRowHovered: i }),
                                ),
                            ),
                        ),
                    );
                });
                function Gu() {
                    return (
                        (Gu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Gu.apply(null, arguments)
                    );
                }
                const Uu = s().memo(() => {
                        const e = Ce('model.leaderboardLobbyModel').placesList,
                            u = Ze(),
                            t = (0, r.useContext)(F);
                        return s().createElement(
                            'div',
                            {
                                className: h()(
                                    'Leaderboard_base_ac',
                                    (t.extraLarge || t.large) && 'Leaderboard_base__large_f8',
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: 'Leaderboard_middle_66' },
                                e &&
                                    s().createElement(
                                        'div',
                                        { className: 'Leaderboard_content_e8' },
                                        s().createElement(
                                            'div',
                                            { className: 'Leaderboard_legend_f3' },
                                            s().createElement('div', { className: 'Leaderboard_damage_0e' }),
                                            s().createElement('div', { className: 'Leaderboard_kills_cf' }),
                                        ),
                                        s().createElement(
                                            lu.Vertical.Area.Default,
                                            { api: u },
                                            s().createElement(
                                                'div',
                                                { className: 'Leaderboard_scrollContent_9d' },
                                                e.map(({ value: e }, u) =>
                                                    s().createElement($u, Gu({ key: e.place, index: u }, e)),
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    zu = 'progressionCompleted';
                let ju;
                var Vu;
                ((Vu = ju || (ju = {})).Active = 'active'), (Vu.Paused = 'paused'), (Vu.Completed = 'completed');
                const qu = {
                        base: 'StatItem_base_09',
                        wreathImage: 'StatItem_wreathImage_4e',
                        statImage: 'StatItem_statImage_af',
                        statText: 'StatItem_statText_10',
                        divider: 'StatItem_divider_bf',
                        maxValue: 'StatItem_maxValue_d6',
                        titleText: 'StatItem_titleText_c6',
                    },
                    Xu = s().memo(({ currentValue: e, maxValue: u, type: t }) => {
                        const a = de.Z5.getNumberFormat(e, de.B3.INTEGRAL),
                            n = R.strings.battle_royale.battleResult.stats.$dyn(t),
                            i = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.stat_list.$dyn(t)})`,
                                }),
                                [t],
                            );
                        return s().createElement(
                            Cu,
                            { header: n.header(), body: n.body(), isEnabled: t.length > 0 },
                            s().createElement(
                                'div',
                                { className: qu.base },
                                s().createElement('div', { className: qu.wreathImage }),
                                s().createElement('div', { className: qu.statImage, style: i }),
                                s().createElement(
                                    'div',
                                    { className: qu.statText },
                                    s().createElement('span', { className: qu.currentValue }, a),
                                    u >= 0 &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('span', { className: qu.divider }, '/'),
                                            s().createElement('span', { className: qu.maxValue }, u),
                                        ),
                                ),
                                s().createElement('div', { className: qu.titleText }, n.title()),
                            ),
                        );
                    }),
                    Yu = s().memo(
                        ({
                            statsList: e,
                            animationTrigger: u,
                            isAnimationSkipped: t,
                            onAnimationComplete: a,
                            transitionTimeout: n,
                            itemStartState: i,
                            itemFinishState: o,
                            isWinner: l,
                        }) => {
                            const c = (0, r.useState)(-1),
                                m = c[0],
                                _ = c[1],
                                E = e.length,
                                d = (0, r.useCallback)(() => {
                                    if (t) return;
                                    const e = m + 1;
                                    e < E ? (H(R.sounds.BR_result_effectiveness()), _(e)) : a && a();
                                }, [E, m, a, t]);
                            return (
                                (0, r.useEffect)(() => {
                                    u && !t && (H(R.sounds.BR_result_effectiveness()), _(0));
                                }, [u, t]),
                                (0, r.useEffect)(() => {
                                    t && _(e.length);
                                }, [t, e.length]),
                                s().createElement(
                                    'div',
                                    { className: 'StatsList_base_0a' },
                                    e.map(({ value: e }, u) =>
                                        s().createElement(
                                            ve.Z,
                                            {
                                                key: `${e.type}_${e.currentValue}`,
                                                timeout: n || 300,
                                                in: m >= u,
                                                enter: !t,
                                                onEntered: d,
                                                classNames: o,
                                            },
                                            s().createElement(
                                                'div',
                                                { className: i },
                                                !(l && 'place' === e.type) && s().createElement(Xu, e),
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Ku = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(a);
                        };
                    },
                    Zu = 'TitleAnimations_baseEnterDone_b1',
                    Qu = {
                        enterActive: 'TitleAnimations_wreathIcon_98',
                        enterDone: 'TitleAnimations_wreathIcon__enterDone_b7',
                    },
                    Ju = {
                        enterActive: 'TitleAnimations_titleBg_ab',
                        enterDone: 'TitleAnimations_titleBg__enterDone_69',
                    },
                    et = { enterActive: 'TitleAnimations_title_ed', enterDone: Zu },
                    ut = { enterActive: 'TitleAnimations_place_31', enterDone: 'TitleAnimations_place__enterDone_a5' },
                    tt = { enterActive: 'TitleAnimations_vehicle_a1', enterDone: Zu };
                var at;
                !(function (e) {
                    (e[(e.WREATH_ENTER = 0)] = 'WREATH_ENTER'),
                        (e[(e.BG_ENTER = 1)] = 'BG_ENTER'),
                        (e[(e.TITLE_ENTER = 2)] = 'TITLE_ENTER'),
                        (e[(e.VEHICLE_ENTER = 3)] = 'VEHICLE_ENTER');
                })(at || (at = {}));
                const nt = [200, 200, 500],
                    rt = [600, 400, 500, 300],
                    st = s().memo(
                        ({
                            isFirstPlace: e,
                            isWinner: u,
                            place: t,
                            finishResultLabel: a,
                            vehicleType: n,
                            vehicleName: i,
                            onAnimationComplete: o,
                            animationTrigger: l,
                            isAnimationSkipped: c,
                        }) => {
                            const m = (0, r.useState)(-1),
                                _ = m[0],
                                E = m[1],
                                d = (0, r.useMemo)(
                                    () => ({
                                        backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.vehicleTypes.$dyn(n)})`,
                                    }),
                                    [n],
                                );
                            (0, r.useEffect)(() => {
                                l && !c && E(0);
                            }, [l, c]),
                                (0, r.useEffect)(() => {
                                    c && E(at.VEHICLE_ENTER);
                                }, [c]),
                                (0, r.useEffect)(() => {
                                    if (!(_ < at.WREATH_ENTER || _ >= at.VEHICLE_ENTER || c))
                                        return Ku(() => E(_ + 1), nt[_]);
                                }, [_, c]);
                            const A = (0, r.useCallback)(() => {
                                    c || (o && o());
                                }, [o, c]),
                                F = h()(
                                    'Title_base_1c',
                                    u && 'Title_base__win_c4',
                                    !u && 'Title_base__lose_0d',
                                    u && !e && 'Title_base__winner_8d',
                                    e && 'Title_base__firstPlace_24',
                                );
                            return s().createElement(
                                'div',
                                { className: F },
                                u &&
                                    s().createElement(
                                        ve.Z,
                                        {
                                            timeout: rt[at.WREATH_ENTER],
                                            in: _ >= at.WREATH_ENTER,
                                            enter: !c,
                                            classNames: Qu,
                                        },
                                        s().createElement('div', { className: 'Title_wreathIcon_96' }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: 'Title_titleWrapper_be' },
                                    u &&
                                        s().createElement(
                                            ve.Z,
                                            {
                                                timeout: rt[at.TITLE_ENTER],
                                                in: _ >= at.TITLE_ENTER,
                                                enter: !c,
                                                classNames: ut,
                                            },
                                            s().createElement('div', { className: 'Title_place_31' }, t),
                                        ),
                                    e &&
                                        s().createElement(
                                            ve.Z,
                                            {
                                                timeout: rt[at.BG_ENTER],
                                                in: _ >= at.BG_ENTER,
                                                enter: !c,
                                                classNames: Ju,
                                            },
                                            s().createElement('div', { className: 'Title_titleBg_52' }),
                                        ),
                                    s().createElement(
                                        ve.Z,
                                        {
                                            timeout: rt[at.TITLE_ENTER],
                                            in: _ >= at.TITLE_ENTER,
                                            enter: !c,
                                            classNames: et,
                                        },
                                        s().createElement('div', { className: 'Title_titleText_8c' }, a),
                                    ),
                                    s().createElement(
                                        ve.Z,
                                        {
                                            timeout: rt[at.VEHICLE_ENTER],
                                            in: _ >= at.VEHICLE_ENTER,
                                            enter: !c,
                                            onEntered: A,
                                            classNames: tt,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: 'Title_vehicle_71' },
                                            s().createElement('div', {
                                                className: 'Title_vehicleTypeIcon_12',
                                                style: d,
                                            }),
                                            s().createElement('div', { className: 'Title_vehicleName_88' }, i),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    it = {
                        base: 'PremiumRewardItem_base_07',
                        image: 'PremiumRewardItem_image_71',
                        base__crystal: 'PremiumRewardItem_base__crystal_06',
                        base__xp: 'PremiumRewardItem_base__xp_a4',
                        base__credits: 'PremiumRewardItem_base__credits_3d',
                        base__brcoin: 'PremiumRewardItem_base__brcoin_f1',
                        base__brProgressionToken: 'PremiumRewardItem_base__brProgressionToken_3a',
                        base__battlePassPoints: 'PremiumRewardItem_base__battlePassPoints_0c',
                    },
                    ot = s().memo(({ value: e, type: u }) => {
                        const t = de.Z5.getNumberFormat(e, de.B3.INTEGRAL),
                            a = h()(it.base, it[`base__${u}`]),
                            n = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.battle_reward.rewards.$dyn(`${u}_small`)})`,
                                }),
                                [u],
                            );
                        return s().createElement(
                            O,
                            null,
                            s().createElement(
                                Cu,
                                { body: R.strings.battle_royale.battleResult.premiumRewards.tooltip() },
                                s().createElement(
                                    'div',
                                    { className: a },
                                    s().createElement('div', { className: it.image, style: n }),
                                    s().createElement('span', null, t),
                                ),
                            ),
                        );
                    }),
                    lt = 'PremiumRewards_ribbonLine_e4',
                    ct = 'PremiumRewards_ribbonDot_cd',
                    mt = 'PremiumRewards_premiumLine_7b',
                    _t = s().memo(({ battleRewardsList: e }) =>
                        s().createElement(
                            'div',
                            { className: 'PremiumRewards_base_a9' },
                            s().createElement(
                                'div',
                                { className: 'PremiumRewards_premium_26' },
                                s().createElement(
                                    'div',
                                    { className: mt },
                                    s().createElement('div', {
                                        className: h()(lt, 'PremiumRewards_ribbonLine__left_1d'),
                                    }),
                                    s().createElement('div', {
                                        className: h()(ct, 'PremiumRewards_ribbonDot__left_55'),
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'PremiumRewards_premiumTitleWrapper_98' },
                                    s().createElement('div', { className: 'PremiumRewards_premiumIcon_70' }),
                                    s().createElement(
                                        'div',
                                        { className: 'PremiumRewards_premiumText_78' },
                                        R.strings.battle_royale.battleResult.premiumRewards.title(),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'PremiumRewards_premiumWrapper_4e' },
                                    s().createElement(
                                        'div',
                                        { className: 'PremiumRewards_rewardsList_a1' },
                                        e.map(({ value: e }) =>
                                            s().createElement(
                                                'div',
                                                {
                                                    className: 'PremiumRewards_rewardsItem_03',
                                                    key: `${e.type}_${e.value}`,
                                                },
                                                s().createElement(ot, e),
                                            ),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: mt },
                                    s().createElement('div', {
                                        className: h()(lt, 'PremiumRewards_ribbonLine__right_3e'),
                                    }),
                                    s().createElement('div', {
                                        className: h()(ct, 'PremiumRewards_ribbonDot__right_8e'),
                                    }),
                                ),
                            ),
                        ),
                    ),
                    Et = 'Ribbon_shadow_8d',
                    dt = 'Ribbon_ribbonLine_e2',
                    At = s().memo(({ battleRewardsListWithPremium: e, isWinner: u, hasPremium: t }) =>
                        s().createElement(
                            'div',
                            {
                                className: h()(
                                    'Ribbon_base_21',
                                    u && (t ? 'Ribbon_base__prem_70' : 'Ribbon_base__win_57'),
                                    !u && (t ? 'Ribbon_base__lose_prem_cc' : 'Ribbon_base__lose_94'),
                                ),
                            },
                            s().createElement('div', { className: h()(Et, 'Ribbon_shadow__top_49') }),
                            s().createElement('div', { className: 'Ribbon_ribbonIcon_0f' }),
                            s().createElement(
                                'div',
                                { className: 'Ribbon_topLine_4f' },
                                s().createElement('div', { className: dt }),
                            ),
                            t &&
                                s().createElement(
                                    'div',
                                    { className: 'Ribbon_bottomLine_fc' },
                                    s().createElement('div', { className: dt }),
                                ),
                            !t && e.length > 0 && s().createElement(_t, { battleRewardsList: e }),
                            s().createElement('div', { className: h()(Et, 'Ribbon_shadow__bottom_90') }),
                        ),
                    ),
                    Ft = {
                        base: 'Reward_base_a1',
                        image: 'Reward_image_0d',
                        base__crystal: 'Reward_base__crystal_3f',
                        base__xp: 'Reward_base__xp_74',
                        base__credits: 'Reward_base__credits_75',
                        base__brcoin: 'Reward_base__brcoin_6e',
                        base__brProgressionToken: 'Reward_base__brProgressionToken_61',
                        base__battlePassPoints: 'Reward_base__battlePassPoints_19',
                    },
                    pt = s().memo(({ value: e, type: u }) => {
                        const t = de.Z5.getNumberFormat(e, de.B3.INTEGRAL),
                            a = h()(Ft.base, Ft[`base__${u}`]),
                            n = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.battle_reward.rewards.$dyn(u)})`,
                                }),
                                [u],
                            );
                        return s().createElement(
                            'div',
                            { className: a },
                            s().createElement('div', { className: Ft.image, style: n }),
                            s().createElement('span', null, t),
                        );
                    }),
                    bt = (0, r.memo)(({ value: e, type: u, classMix: t }) => {
                        const a = (0, r.useMemo)(() => ({ currencyType: u }), [u]);
                        return s().createElement(
                            gu,
                            {
                                contentId: R.views.battle_royale.lobby.tooltips.RewardCurrencyTooltipView('resId'),
                                args: a,
                            },
                            s().createElement('div', null, s().createElement(pt, { value: e, type: u, classMix: t })),
                        );
                    }),
                    gt = s().memo(
                        ({
                            battleRewardsList: e,
                            animationTrigger: u,
                            isAnimationSkipped: t,
                            onAnimationComplete: a,
                            transitionTimeout: n,
                            itemStartState: i,
                            itemFinishState: o,
                        }) => {
                            const l = (0, r.useState)(-1),
                                c = l[0],
                                m = l[1],
                                _ = e.length,
                                E = (0, r.useCallback)(() => {
                                    if (t) return;
                                    const e = c + 1;
                                    e < _ ? (H(R.sounds.BR_result_numbers()), m(e)) : a && a();
                                }, [_, c, a, t]);
                            return (
                                (0, r.useEffect)(() => {
                                    u && !t && (H(R.sounds.BR_result_numbers()), m(0));
                                }, [u, t]),
                                (0, r.useEffect)(() => {
                                    t && m(_);
                                }, [_, t]),
                                s().createElement(
                                    O,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: 'BattleRewardList_base_92' },
                                        e.map(({ value: e }, u) =>
                                            s().createElement(
                                                ve.Z,
                                                {
                                                    key: `${e.type}_${e.value}`,
                                                    timeout: n || 300,
                                                    in: c >= u,
                                                    enter: !t,
                                                    onEntered: E,
                                                    classNames: o,
                                                },
                                                s().createElement('div', { className: i }, s().createElement(bt, e)),
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Dt = ({ binding: e, text: u = '', classMix: t, alignment: a = Lu.left, formatWithBrackets: n }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const i = n && e ? Tu(u, e) : u;
                        return s().createElement(
                            r.Fragment,
                            null,
                            i.split('\n').map((u, n) =>
                                s().createElement(
                                    'div',
                                    { className: h()('FormatText_base_d0', t), key: `${u}-${n}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = Lu.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return Ou.includes(t)
                                                          ? Mu(e)
                                                          : 'ja' === t
                                                            ? (0, Pu.D4)()
                                                                  .parse(e)
                                                                  .map((e) => Ru(e))
                                                            : ((e, u = Lu.left) => {
                                                                  let t = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      n = Ru(e);
                                                                  return (
                                                                      ku(n, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(ku(e, a, Lu.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, a, e).map((e, u) =>
                                        s().createElement(r.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    Bt = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let ht, Ct;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(ht || (ht = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Ct || (Ct = {}));
                const vt = ({ size: e = ht.Default }) => {
                        const u = h()(Bt.background, Bt[`background__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    ft = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    wt = ({ size: e }) => {
                        const u = h()(ft.base, ft[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    St = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    yt = (0, r.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: n, withoutBounce: r }) => {
                            const i = h()(
                                    St.base,
                                    St[`base__${e}`],
                                    t && St.base__disabled,
                                    n && St.base__finished,
                                    r && St.base__withoutBounce,
                                ),
                                o = !t && !n;
                            return s().createElement(
                                'div',
                                { className: i, style: a, ref: u },
                                s().createElement('div', { className: St.pattern }),
                                s().createElement('div', { className: St.gradient }),
                                o && s().createElement(wt, { size: e }),
                            );
                        },
                    ),
                    Pt = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: n }) => {
                        const i = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, r.useEffect)(() => {
                                o && n && n();
                            }, [o, n]),
                            s().createElement(yt, { size: e, disabled: a, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    };
                let Lt, Tt;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Lt || (Lt = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Tt || (Tt = {}));
                const Rt = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < a,
                                m = (0, r.useState)(Tt.Idle),
                                _ = m[0],
                                E = m[1],
                                d = _ === Tt.In,
                                A = _ === Tt.End,
                                F = _ === Tt.Idle,
                                p = (0, r.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, r.useEffect)(() => {
                                if (F && !t)
                                    return Ku(() => {
                                        p(Tt.In);
                                    }, u);
                            }, [p, t, F, u]),
                                (0, r.useEffect)(() => {
                                    if (d)
                                        return Ku(() => {
                                            o && o(), p(Tt.End);
                                        }, e + u);
                                }, [p, d, o, u, e]);
                            const b = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                g = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                D = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(a - i)}%`, left: `${c ? i : a}%` }),
                                    [a, c, i],
                                );
                            return A
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: D },
                                      s().createElement(
                                          'div',
                                          { style: F ? b : g, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(wt, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    xt = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(yt, {
                                    size: u,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: i,
                                    baseStyles: m,
                                }),
                                t >= 0 &&
                                    s().createElement(Rt, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Nt = (e) => (e ? { left: 0 } : { right: 0 }),
                    kt = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Mt = (e) => ({ transitionDuration: `${e}ms` }),
                    Ot = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = i < a,
                                _ = (0, r.useState)(Lt.Idle),
                                E = _[0],
                                d = _[1],
                                A = E === Lt.End,
                                F = E === Lt.Idle,
                                p = E === Lt.Grow,
                                b = E === Lt.Shrink,
                                g = (0, r.useCallback)(
                                    (e) => {
                                        d(e), l && l(e);
                                    },
                                    [l],
                                ),
                                D = (0, r.useCallback)(
                                    (e, u) =>
                                        Ku(() => {
                                            g(e);
                                        }, u),
                                    [g],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? D(Lt.Grow, u)
                                        : p
                                          ? D(Lt.Shrink, e)
                                          : b
                                            ? D(Lt.End, e)
                                            : void (A && o && o());
                            }, [D, t, A, p, F, b, o, u, e]);
                            const B = (0, r.useMemo)(() => Object.assign({ width: '100%' }, Mt(e), Nt(m)), [m, e]),
                                C = (0, r.useMemo)(() => Object.assign({ width: '0%' }, Mt(e), Nt(m)), [m, e]),
                                v = (0, r.useMemo)(() => Object.assign({ width: '0%' }, kt(m, a), Mt(e)), [a, m, e]),
                                f = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - a)}%` }, kt(m, a), Mt(e)),
                                    [a, m, i, e],
                                );
                            if (A) return null;
                            const w = h()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                m && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: F ? v : f, className: w },
                                s().createElement(
                                    'div',
                                    { style: b ? C : B, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(wt, { size: n }),
                                ),
                            );
                        },
                    ),
                    It = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < t,
                                _ = (0, r.useState)(!1),
                                E = _[0],
                                d = _[1],
                                A = (0, r.useCallback)(
                                    (e) => {
                                        e === Lt.Shrink && d(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                F = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                p = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(yt, {
                                    size: u,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: i,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: E ? p : F,
                                }),
                                t >= 0 &&
                                    s().createElement(Ot, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    Wt = ['onComplete', 'onEndAnimation'];
                function Ht() {
                    return (
                        (Ht = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Ht.apply(null, arguments)
                    );
                }
                const $t = (0, r.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Wt);
                        const n = (0, r.useState)(!1),
                            i = n[0],
                            o = n[1],
                            l = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== i && o(e), e && u && u(), t && t();
                            }, [i, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case Ct.Simple:
                                return s().createElement(xt, Ht({}, a, { onEndAnimation: l, isComplete: i }));
                            case Ct.Growing:
                                return s().createElement(It, Ht({}, a, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    Gt = ['onEndAnimation'];
                function Ut() {
                    return (
                        (Ut = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Ut.apply(null, arguments)
                    );
                }
                const zt = (0, r.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, Gt);
                    const a = (0, r.useRef)({}),
                        n = (0, r.useCallback)(() => {
                            (a.current.from = void 0), u && u();
                        }, [u]),
                        i = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = i),
                        s().createElement($t, Ut({}, t, { onEndAnimation: n, key: `${i}-${t.to}`, from: i }))
                    );
                });
                function jt() {
                    return (
                        (jt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        jt.apply(null, arguments)
                    );
                }
                const Vt = (0, r.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: n,
                            animationSettings: r,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (n === u)
                                return s().createElement(Pt, {
                                    key: `${n}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: n,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: a,
                                animationSettings: r,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return r.withStack
                                ? s().createElement(zt, c)
                                : s().createElement($t, jt({ key: `${n}-${u}` }, c));
                        },
                    ),
                    qt = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    Xt = (e, u, t) => ('number' == typeof t ? (Te(0, u, t) / u) * 100 : e),
                    Yt = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    Kt = {
                        freezed: !1,
                        withStack: !1,
                        type: Ct.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Zt = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Yt,
                            size: t = ht.Default,
                            animationSettings: a = Kt,
                            disabled: n = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: m,
                            onEndAnimation: _,
                            onComplete: E,
                        }) => {
                            const d = ((e, u, t) =>
                                (0, r.useMemo)(() => {
                                    const a = (Te(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: Xt(a, u, t) };
                                }, [t, u, e]))(o, e, l);
                            return s().createElement(
                                'div',
                                { className: h()(Bt.base, Bt[`base__${t}`]), style: qt(u) },
                                !i && s().createElement(vt, { size: t }),
                                s().createElement(Vt, {
                                    size: t,
                                    lineRef: c,
                                    disabled: n,
                                    value: d.value,
                                    deltaFrom: d.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: _,
                                    onChangeAnimationState: m,
                                    onComplete: E,
                                }),
                            );
                        },
                    );
                var Qt = t(3403);
                function Jt() {
                    return !1;
                }
                console.log;
                var ea = t(9174);
                function ua(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const ta = (e) => (0 === e ? window : window.subViews.get(e)),
                    aa = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: n, mocks: i }) {
                                const l = (0, r.useRef)([]),
                                    c = (e, t, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ta,
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
                                                        const i = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = o.O.view.addModelObserver(i, u, !0);
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
                                                                                    return ua(e, u);
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
                                                                                          ? ua(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(e = t()).done;

                                                        )
                                                            r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            m = (({ observableModel: e }) => ({
                                                root: e.object(),
                                                battlePassProgress: e.object('personalResults.battlePassProgress'),
                                                userInfo: e.object('playerBattleTypeStatus.user'),
                                                battleTypeInfo: e.object('playerBattleTypeStatus'),
                                            }))({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            n = ea.LO.box(a, { equals: Jt });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ea.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            n = ea.LO.box(a, { equals: Jt });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ea.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = i(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = ea.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ea.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                r = Object.entries(n),
                                                                i = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = ea.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ea.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
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
                                            _ = { mode: e, model: m, externalModel: s, cleanup: c };
                                        return {
                                            model: m,
                                            controls: 'mocks' === e && a ? a.controls(_) : u(_),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    m = (0, r.useRef)(!1),
                                    _ = (0, r.useState)(e),
                                    E = _[0],
                                    d = _[1],
                                    A = (0, r.useState)(() => c(e, a, i)),
                                    F = A[0],
                                    p = A[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        m.current ? p(c(E, a, i)) : (m.current = !0);
                                    }, [i, E, a]),
                                    (0, r.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    s().createElement(t.Provider, { value: F }, n)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        submit: e.createCallbackNoArgs('personalResults.battlePassProgress.onSubmitClick'),
                        invite: e.createCallbackNoArgs('playerBattleTypeStatus.onInviteToPlatoon'),
                    })),
                    na = aa[0],
                    ra = aa[1];
                let sa, ia, oa, la;
                var ca;
                !(function (e) {
                    (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                })(sa || (sa = {})),
                    (function (e) {
                        (e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen');
                    })(ia || (ia = {})),
                    ((ca = oa || (oa = {})).AwaitSeason = 'awaitSeason'),
                    (ca.Bought = 'bought'),
                    (ca.Free = 'free'),
                    (ca.Completed = 'completed'),
                    (ca.CompletedRightNow = 'completedRightNow'),
                    (ca.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                    (ca.NoVehiclesBase = 'noVehiclesBase'),
                    (ca.ChapterNotChosen = 'chapterNotChosen'),
                    (function (e) {
                        (e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay');
                    })(la || (la = {}));
                const ma = (e, u, t = '') => {
                        const a = t.length > 0 ? `_${t}` : t,
                            n = e.$dyn(`c_${u}${a}`),
                            r = String(u).slice(-1),
                            s = e.$dyn(`default_${r}${a}`);
                        return n || s;
                    },
                    _a = (e, u, t) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            n = u ? 'BP' : '',
                            r = `${((e) => {
                                switch (e) {
                                    case sa.Micro:
                                        return 's';
                                    case sa.Small:
                                        return 'm';
                                    default:
                                        return 'l';
                                }
                            })(t)}${n}`;
                        return { backgroundImage: `url(${ma(a, e, r)})` };
                    };
                let Ea, da, Aa, Fa, pa, ba, ga, Da;
                var Ba, ha, Ca, va;
                let fa, wa;
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
                })(Ea || (Ea = {})),
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
                    })(da || (da = {})),
                    ((va = Aa || (Aa = {})).Big = 'big'),
                    (va.Small = 'small'),
                    (va.Mini = 'mini'),
                    (va.S600x450 = 's600x450'),
                    (va.S400x300 = 's400x300'),
                    (va.S296x222 = 's296x222'),
                    (va.S232x174 = 's232x174'),
                    (va.S180x135 = 's180x135'),
                    (va.S128x100 = 's128x100'),
                    (va.S80x80 = 's80x80'),
                    (va.S64x64 = 's64x64'),
                    (va.S48x48 = 's48x48'),
                    ((Ca = Fa || (Fa = {})).MULTI = 'multi'),
                    (Ca.CURRENCY = 'currency'),
                    (Ca.PREMIUM_PLUS = 'premium_plus'),
                    (Ca.NUMBER = 'number'),
                    (Ca.STRING = 'string'),
                    ((ha = pa || (pa = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (ha.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (ha.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (ha.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (ha.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (ha.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (ha.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (ha.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (ha.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (ha.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (ha.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (ha.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (ha.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    (ha.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                    (ha.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                    ((ba || (ba = {})).BATTLE_BOOSTER = 'battleBooster'),
                    ((Ba = ga || (ga = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (Ba.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (Ba.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (Ba.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (Ba.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (Ba.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (Ba.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (Ba.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (Ba.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (Ba.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (Ba.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (Ba.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (Ba.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    (Ba.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                    (Ba.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(Da || (Da = {})),
                    Ea.Items,
                    Ea.Equipment,
                    Ea.Xp,
                    Ea.XpFactor,
                    Ea.Blueprints,
                    Ea.BlueprintsAny,
                    Ea.Goodies,
                    Ea.Berths,
                    Ea.Slots,
                    Ea.Tokens,
                    Ea.CrewSkins,
                    Ea.CrewBooks,
                    Ea.Customizations,
                    Ea.CreditsFactor,
                    Ea.TankmenXp,
                    Ea.TankmenXpFactor,
                    Ea.FreeXpFactor,
                    Ea.BattleToken,
                    Ea.PremiumUniversal,
                    Ea.NaturalCover,
                    Ea.BpCoin,
                    Ea.BattlePassSelectToken,
                    Ea.BattlaPassFinalAchievement,
                    Ea.BattleBadge,
                    Ea.BonusX5,
                    Ea.CrewBonusX3,
                    Ea.NewYearInvoice,
                    Ea.EpicSelectToken,
                    Ea.Comp7TokenWeeklyReward,
                    Ea.DeluxeGift,
                    Ea.BattleBoosterGift,
                    Ea.OptionalDevice,
                    Ea.Gold,
                    Ea.Credits,
                    Ea.Crystal,
                    Ea.FreeXp,
                    Ea.BattlePassPoints,
                    Ea.EquipCoin,
                    Ea.PremiumPlus,
                    Ea.Premium,
                    Aa.Small,
                    Aa.Big,
                    (function (e) {
                        (e.Active = 'active'),
                            (e.Paused = 'paused'),
                            (e.Completed = 'completed'),
                            (e.NotStarted = 'notStarted');
                    })(fa || (fa = {})),
                    (function (e) {
                        (e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman');
                    })(wa || (wa = {}));
                var Sa = t(8613);
                let ya;
                var Pa;
                Date.now(),
                    Sa.Ew.getRegionalDateTime,
                    Sa.Ew.getFormattedDateTime,
                    ((Pa = ya || (ya = {})).style = 'style'),
                    (Pa.tankman = 'tankman'),
                    ya.style,
                    ya.tankman;
                const La = (e, u) => {
                    const t = u.postfix ? `_${u.postfix}` : '';
                    return ((e) => {
                        const u = e.path.$dyn(`${e.name}_${e.id}`),
                            t = e.path.$dyn('default');
                        return u || t;
                    })(e).$dyn(`${u.name}${t}`);
                };
                let Ta;
                !(function (e) {
                    (e.Season = 'season'), (e.Chapter = 'chapter');
                })(Ta || (Ta = {}));
                const Ra = {
                        base: 'Emblem_base_be',
                        progress: 'Emblem_progress_37',
                        progress__small: 'Emblem_progress__small_42',
                        progress__completed: 'Emblem_progress__completed_69',
                        hideProgress: 'Emblem_hideProgress_b4',
                        progress__hidden: 'Emblem_progress__hidden_6d',
                        image: 'Emblem_image_dc',
                        image__clickable: 'Emblem_image__clickable_b7',
                        image__micro: 'Emblem_image__micro_aa',
                        image__small: 'Emblem_image__small_ce',
                        extra: 'Emblem_extra_d4',
                        extra__micro: 'Emblem_extra__micro_f7',
                        extra__small: 'Emblem_extra__small_28',
                        hideLevel: 'Emblem_hideLevel_f2',
                        showLevel: 'Emblem_showLevel_c5',
                        hideLevelSmall: 'Emblem_hideLevelSmall_cc',
                        showLevelSmall: 'Emblem_showLevelSmall_31',
                        hideLevelMicro: 'Emblem_hideLevelMicro_15',
                        showLevelMicro: 'Emblem_showLevelMicro_bc',
                        showIcon: 'Emblem_showIcon_c2',
                        showIconSmall: 'Emblem_showIconSmall_1d',
                        showIconMicro: 'Emblem_showIconMicro_f8',
                    },
                    xa = {
                        base: 'Label_base_85',
                        textWithBlend: 'Label_textWithBlend_07',
                        textWithBlend__show: 'Label_textWithBlend__show_fa',
                        show: 'Label_show_69',
                        textWithBlend__new: 'Label_textWithBlend__new_4a',
                        textWithBlend__hide: 'Label_textWithBlend__hide_f1',
                        hide: 'Label_hide_33',
                        textMask: 'Label_textMask_7f',
                        textMask__gold: 'Label_textMask__gold_71',
                        textMask__goldContrast: 'Label_textMask__goldContrast_05',
                        textMask__animated: 'Label_textMask__animated_38',
                        maskAppearance: 'Label_maskAppearance_26',
                        textMask__micro: 'Label_textMask__micro_37',
                        textMask__small: 'Label_textMask__small_54',
                        textMask__medium: 'Label_textMask__medium_eb',
                        textMask__large: 'Label_textMask__large_0a',
                        textMask__extraLarge: 'Label_textMask__extraLarge_4c',
                        text: 'Label_text_67',
                        text__micro: 'Label_text__micro_a4',
                        text__small: 'Label_text__small_e0',
                        text__large: 'Label_text__large_65',
                        text__extraLarge: 'Label_text__extraLarge_22',
                        text__blended: 'Label_text__blended_67',
                        text__filtered: 'Label_text__filtered_86',
                        text__rewardScreen: 'Label_text__rewardScreen_68',
                        textAppearance: 'Label_textAppearance_31',
                        text__show: 'Label_text__show_95',
                        text__hide: 'Label_text__hide_37',
                        text__hideWithDelay: 'Label_text__hideWithDelay_53',
                        text__new: 'Label_text__new_a0',
                        hideLevel: 'Label_hideLevel_61',
                        showLevel: 'Label_showLevel_55',
                        hideLevelSmall: 'Label_hideLevelSmall_9d',
                        showLevelSmall: 'Label_showLevelSmall_96',
                        hideLevelMicro: 'Label_hideLevelMicro_9e',
                        showLevelMicro: 'Label_showLevelMicro_50',
                        showIcon: 'Label_showIcon_0f',
                        showIconSmall: 'Label_showIconSmall_96',
                        hideProgress: 'Label_hideProgress_0c',
                        showIconMicro: 'Label_showIconMicro_1e',
                    },
                    Na = ({
                        level: e,
                        size: u,
                        isGold: t,
                        isForRewardScreen: a,
                        curState: n,
                        isFirstLevel: r,
                        showProgressionCompleted: i,
                    }) => {
                        const o = h()(xa.base, xa[`base__${u}`]),
                            l = h()(
                                xa.text,
                                xa.text__filtered,
                                xa[`text__${u}`],
                                xa[`text__${n}`],
                                i && xa.text__hideWithDelay,
                                r && xa.text__new,
                                a && xa.text__rewardScreen,
                            ),
                            c = h()(
                                xa.textWithBlend,
                                r && xa.text__new,
                                i && xa.text__hideWithDelay,
                                xa[`textWithBlend__${n}`],
                            ),
                            m = h()(xa.text, xa.text__blended, xa[`text__${u}`], a && xa.text__rewardScreen),
                            _ = h()(
                                xa.textMask,
                                t && xa.textMask__gold,
                                a && xa.textMask__animated,
                                t && a && xa.textMask__goldContrast,
                                xa[`textMask__${u}`],
                            );
                        return s().createElement(
                            'div',
                            { className: o },
                            s().createElement('div', { className: l }, e),
                            s().createElement(
                                'div',
                                { className: c },
                                s().createElement('div', { className: m }, e),
                                s().createElement('div', { className: _ }),
                            ),
                        );
                    },
                    ka = {
                        label: 'EmblemLabels_label_14',
                        label__small: 'EmblemLabels_label__small_a3',
                        label__micro: 'EmblemLabels_label__micro_4b',
                        label__hasProgress: 'EmblemLabels_label__hasProgress_26',
                        label__hasProgressProgression: 'EmblemLabels_label__hasProgressProgression_77',
                        label__hasProgressSmall: 'EmblemLabels_label__hasProgressSmall_c1',
                        label__show: 'EmblemLabels_label__show_3d',
                        showLevel: 'EmblemLabels_showLevel_04',
                        label__showSmall: 'EmblemLabels_label__showSmall_7e',
                        showLevelSmall: 'EmblemLabels_showLevelSmall_2f',
                        label__hide: 'EmblemLabels_label__hide_28',
                        hideLevel: 'EmblemLabels_hideLevel_be',
                        label_hideSmall: 'EmblemLabels_label_hideSmall_65',
                        hideLevelSmall: 'EmblemLabels_hideLevelSmall_c1',
                        label__hideWithDelay: 'EmblemLabels_label__hideWithDelay_68',
                        label__hideWithDelaySmall: 'EmblemLabels_label__hideWithDelaySmall_36',
                        label__new: 'EmblemLabels_label__new_d7',
                        label__newSmall: 'EmblemLabels_label__newSmall_c1',
                        label__disabled: 'EmblemLabels_label__disabled_b6',
                        icon: 'EmblemLabels_icon_40',
                        icon__small: 'EmblemLabels_icon__small_f3',
                        icon__micro: 'EmblemLabels_icon__micro_cf',
                        icon__animated: 'EmblemLabels_icon__animated_09',
                        showIcon: 'EmblemLabels_showIcon_d3',
                        icon__animatedSmall: 'EmblemLabels_icon__animatedSmall_e4',
                        icon__animatedMicro: 'EmblemLabels_icon__animatedMicro_10',
                        showIconSmall: 'EmblemLabels_showIconSmall_cb',
                        hideLevelMicro: 'EmblemLabels_hideLevelMicro_65',
                        showLevelMicro: 'EmblemLabels_showLevelMicro_ab',
                        hideProgress: 'EmblemLabels_hideProgress_7f',
                        showIconMicro: 'EmblemLabels_showIconMicro_5c',
                    },
                    Ma = (0, r.memo)(
                        ({
                            newLevel: e,
                            level: u,
                            size: t,
                            battlePassState: a,
                            hasProgression: n,
                            isGolden: r,
                            labelAnimation: i,
                            newLabelAnimation: o,
                            isChapterChosen: l = !1,
                            chapterID: c = 0,
                            seasonNum: m = -1,
                            isProgressionCompleted: _ = !1,
                            hasBeenActive: E = !1,
                            isChapterSelection: d = !1,
                            isProgression: A = !1,
                        }) => {
                            let F = '',
                                p = '';
                            t === sa.Small
                                ? ((F = 'Small'), (p = '__small'))
                                : t === sa.Micro && ((F = 'Micro'), (p = '__micro'));
                            const b = a === oa.SwitchedChapterRightNow,
                                g = a === oa.CompletedRightNow,
                                D = ((e, u, t, a, n) => (e || n ? u || !t : u || !a))(d, _, E, l, A),
                                B = !A && !d;
                            return s().createElement(
                                s().Fragment,
                                null,
                                D
                                    ? s().createElement('div', {
                                          className: h()(ka.icon, p && ka[`icon${p}`], g && ka[`icon__animated${F}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      u = ((e, u) => {
                                                          const t = e ? 'BP' : '';
                                                          return `${((e) => {
                                                              switch (e) {
                                                                  case sa.Small:
                                                                      return 'l';
                                                                  case sa.Micro:
                                                                      return 's';
                                                                  default:
                                                                      return 'xl';
                                                              }
                                                          })(u)}${t}`;
                                                      })(r, t);
                                                  if (B) {
                                                      if (_) {
                                                          const t = { path: e.icon, name: Ta.Season, id: m };
                                                          return La(t, { name: 'icon', postfix: u });
                                                      }
                                                      if (!l) return e.$dyn('not_chosen');
                                                  }
                                                  return ma(e.chapterIcons, c, u);
                                              })()})`,
                                          },
                                      })
                                    : s().createElement(
                                          'div',
                                          {
                                              className: h()(
                                                  ka.label,
                                                  ka[`label${p}`],
                                                  b && ka.label__new,
                                                  b && ka[`label__new${F}`],
                                                  !g && _ && ka.label__disabled,
                                                  ka[`label__${i}${F}`],
                                                  n && ka[`label__hasProgress${F}`],
                                                  n && ka[`label__hasProgress${F}${A ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          s().createElement(Na, {
                                              level: u,
                                              size: t,
                                              isGold: r,
                                              isFirstLevel: b,
                                              curState: i,
                                              showProgressionCompleted: g,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                ka.label,
                                                ka[`label${p}`],
                                                b && ka.label__new,
                                                b && ka[`label__new${F}`],
                                                ka[`label__${o}${F}`],
                                                n && ka[`label__hasProgress${F}`],
                                            ),
                                        },
                                        s().createElement(Na, {
                                            level: e,
                                            size: t,
                                            isGold: r,
                                            isFirstLevel: b,
                                            curState: o,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    ),
                    Oa = {
                        base: 'EmblemProgressBar_base_5c',
                        base__small: 'EmblemProgressBar_base__small_6c',
                        base__completed: 'EmblemProgressBar_base__completed_6d',
                        hideProgress: 'EmblemProgressBar_hideProgress_18',
                        base__completePostProgression: 'EmblemProgressBar_base__completePostProgression_20',
                        base__hidden: 'EmblemProgressBar_base__hidden_8b',
                        hideLevel: 'EmblemProgressBar_hideLevel_1e',
                        showLevel: 'EmblemProgressBar_showLevel_5d',
                        hideLevelSmall: 'EmblemProgressBar_hideLevelSmall_ae',
                        showLevelSmall: 'EmblemProgressBar_showLevelSmall_df',
                        hideLevelMicro: 'EmblemProgressBar_hideLevelMicro_13',
                        showLevelMicro: 'EmblemProgressBar_showLevelMicro_ae',
                        showIcon: 'EmblemProgressBar_showIcon_55',
                        showIconSmall: 'EmblemProgressBar_showIconSmall_26',
                        showIconMicro: 'EmblemProgressBar_showIconMicro_78',
                    },
                    Ia = (0, r.memo)(
                        ({
                            progression: e,
                            isNoVehicles: u = !1,
                            showProgressionCompleted: t,
                            isProgressionCompleted: a,
                            size: n,
                        }) => {
                            const r = h()(
                                Oa.base,
                                Oa[`base__${n}`],
                                t && Oa.base__completed,
                                !t && a && Oa.base__hidden,
                            );
                            return s().createElement(
                                'div',
                                { className: r },
                                s().createElement(Zt, {
                                    key: e.to,
                                    size: ht.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: u,
                                }),
                            );
                        },
                    );
                function Wa() {
                    return (
                        (Wa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Wa.apply(null, arguments)
                    );
                }
                let Ha, $a;
                !(function (e) {
                    (e.Closed = 'closed'), (e.Open = 'open');
                })(Ha || (Ha = {})),
                    (function (e) {
                        (e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial');
                    })($a || ($a = {}));
                const Ga = (e, u, t, a, n) => {
                        const r = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: Ta.Chapter, id: a },
                            s = e ? Ha.Open : Ha.Closed,
                            i = ((e, u) =>
                                e
                                    ? $a.Gold
                                    : u === oa.Completed || u === oa.CompletedRightNow
                                      ? $a.Completed
                                      : $a.Initial)(u, t),
                            o = n.length > 0 ? `_${n}` : '';
                        return { backgroundImage: `url(${La(r, { name: 'emblem', postfix: `${s}_${i}${o}` })})` };
                    },
                    Ua = (e, u) => {
                        const t = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: Ta.Season, id: e };
                        return { backgroundImage: `url(${La(t, { name: 'extra', postfix: u })})` };
                    },
                    za = (0, r.memo)((e) => {
                        const u = e.progression,
                            t = e.size,
                            a = e.battlePassState,
                            n = e.hasBattlePass,
                            r = e.isChapterChosen,
                            i = e.hasBeenActive,
                            o = void 0 !== i && i,
                            l = e.isChapterSelection,
                            c = void 0 !== l && l,
                            m = e.isOpen,
                            _ = void 0 !== m && m,
                            E = e.isProgression,
                            d = void 0 !== E && E,
                            A = e.showProgressBar,
                            F = void 0 === A || A,
                            p = e.isExtra,
                            b = void 0 !== p && p,
                            g = e.chapterID,
                            D = e.seasonNum,
                            B = e.clickable,
                            C = void 0 === B || B,
                            v = ((e) => {
                                switch (e) {
                                    case sa.Small:
                                        return 'small';
                                    case sa.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(t),
                            f = a === oa.CompletedRightNow,
                            w = n || a === oa.Bought,
                            S = (a === oa.Completed || f) && w,
                            y = (a === oa.Completed || f) && !w,
                            P = S || y,
                            L = void 0 !== u.from,
                            T = F && ((L && r) || o);
                        return s().createElement(
                            'div',
                            { className: Ra.base },
                            b &&
                                s().createElement('div', {
                                    className: h()(Ra.extra, v && Ra[`extra__${v}`]),
                                    style: Ua(D, v),
                                }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(Ra.image, v && Ra[`image__${v}`], C && Ra.image__clickable),
                                    style: Ga(_, w, a, g, v),
                                },
                                a !== oa.AwaitSeason &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            Ma,
                                            Wa(
                                                {
                                                    hasProgression: L,
                                                    isGolden: w,
                                                    isProgressionCompleted: P,
                                                    isChapterChosen: r,
                                                    hasBeenActive: o,
                                                    isChapterSelection: c,
                                                    isProgression: d,
                                                },
                                                e,
                                                u,
                                            ),
                                        ),
                                        T &&
                                            s().createElement(Ia, {
                                                key: u.to,
                                                progression: u,
                                                showProgressionCompleted: f,
                                                isProgressionCompleted: P,
                                                size: t,
                                            }),
                                    ),
                            ),
                        );
                    }),
                    ja = (e, u) => {
                        const t = R.images.gui.maps.icons.battlePass.logo.flag;
                        return { backgroundImage: `url(${ma(t, e, u ? 's' : 'm')})` };
                    },
                    Va = (0, Qt.Pi)(() => {
                        const e = ra(),
                            u = e.model,
                            t = e.controls,
                            a = u.battlePassProgress.get(),
                            n = a.hasExtra,
                            r = a.freePoints,
                            i = a.chapterID,
                            o = a.currentLevel,
                            l = a.currentLevelPoints,
                            c = a.isBattlePassPurchased,
                            m = a.progressionState,
                            _ = a.chapterState,
                            E = a.seasonNum,
                            d = { level: o, from: l },
                            A = m === zu,
                            F = 0 !== i && _ === ju.Active,
                            p = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))(d),
                            b = p && F,
                            g = A ? oa.Completed : b ? (c ? oa.Bought : oa.Free) : oa.ChapterNotChosen,
                            D = y().mediaSize <= f.Small,
                            B = D ? sa.Micro : sa.Small,
                            C = g === oa.Completed,
                            v = b && !C,
                            w = g === oa.Bought,
                            S = A && r > 0;
                        return s().createElement(
                            'div',
                            {
                                className: 'BattlePassEmblem_base_fb',
                                onClick: t.submit,
                                onMouseDown: () => {
                                    $.playClick();
                                },
                                onMouseOver: () => {
                                    $.playHighlight();
                                },
                            },
                            !A &&
                                b &&
                                s().createElement('div', {
                                    className: h()(
                                        'BattlePassEmblem_flag_a4',
                                        v && 'BattlePassEmblem_flag__isChapterChosen_ab',
                                    ),
                                    style: ja(i, D),
                                }),
                            s().createElement(
                                'div',
                                { className: 'BattlePassEmblem_emblem_ec' },
                                s().createElement(za, {
                                    progression: d,
                                    size: B,
                                    battlePassState: g,
                                    hasBattlePass: c,
                                    isChapterChosen: F,
                                    isProgression: !1,
                                    chapterID: i,
                                    seasonNum: E,
                                    hasBeenActive: b,
                                    showProgressBar: !1,
                                    isOpen: v || S,
                                    isExtra: n,
                                    clickable: !1,
                                }),
                                v &&
                                    s().createElement('div', {
                                        className: 'BattlePassEmblem_chapterLogoIcon_95',
                                        style: _a(i, w, B),
                                    }),
                                S && s().createElement('div', { className: 'BattlePassEmblem_freePoints_0d' }, r),
                            ),
                        );
                    }),
                    qa = {
                        base: 'BattlePassWidget_base_8d',
                        content: 'BattlePassWidget_content_e3',
                        base__progress: 'BattlePassWidget_base__progress_c7',
                        title: 'BattlePassWidget_title_82',
                        base__progressionCompleted: 'BattlePassWidget_base__progressionCompleted_cf',
                        base__chapterNotChosen: 'BattlePassWidget_base__chapterNotChosen_94',
                        progressionContainer: 'BattlePassWidget_progressionContainer_cb',
                        progressionBar: 'BattlePassWidget_progressionBar_d9',
                        achievedPoints: 'BattlePassWidget_achievedPoints_00',
                        plus: 'BattlePassWidget_plus_41',
                        pointsStats: 'BattlePassWidget_pointsStats_32',
                        pointsMax: 'BattlePassWidget_pointsMax_c1',
                        icon: 'BattlePassWidget_icon_62',
                        progressionCompleted: 'BattlePassWidget_progressionCompleted_a9',
                        chapterNotChosen: 'BattlePassWidget_chapterNotChosen_a9',
                        notUsedPoints: 'BattlePassWidget_notUsedPoints_c8',
                    },
                    Xa = (0, Qt.Pi)(({ animationTrigger: e, isAnimationSkipped: u }) => {
                        const t = ra().model.battlePassProgress.get(),
                            a = t.maxPoints,
                            n = t.earnedPoints,
                            i = t.currentLevelPoints,
                            o = t.progressionState,
                            l = t.chapterID,
                            c = t.chapterState,
                            m = t.freePoints,
                            _ = R.strings.battle_royale.battleResult.battlePassWidget,
                            E = (0, r.useState)(Kt.delta.duration),
                            d = E[0],
                            A = E[1],
                            F = (0, r.useState)(!0),
                            p = F[0],
                            b = F[1],
                            g = Boolean(n),
                            D = o === zu,
                            B = 0 !== l && c === ju.Active,
                            C = D
                                ? _.tooltips.progressionCompleted()
                                : B
                                  ? _.tooltips.inProgress()
                                  : _.tooltips.chapterNotChosen(),
                            v = Object.assign({}, Kt, { freezed: p, delta: { duration: d, delay: 0 } });
                        (0, r.useEffect)(() => {
                            if (g && e && !u)
                                return (
                                    b(!1),
                                    H(R.sounds.bp_progress_bar_start()),
                                    Ku(() => {
                                        H(R.sounds.bp_progress_bar_stop());
                                    }, Kt.delta.duration)
                                );
                        }, [e, u, g]),
                            (0, r.useEffect)(() => {
                                g && u && (A(0), H(R.sounds.bp_progress_bar_stop()), e || b(!1));
                            }, [e, u, g]);
                        const f = h()(
                            qa.base,
                            qa[`base__${o}`],
                            !D && B && qa.base__progress,
                            !D && !B && qa.base__chapterNotChosen,
                        );
                        return s().createElement(
                            'div',
                            { className: f },
                            s().createElement(
                                Cu,
                                { body: C },
                                s().createElement('div', null, s().createElement(Va, null)),
                            ),
                            s().createElement(
                                'div',
                                { className: qa.content },
                                s().createElement('div', { className: qa.title }, _.title()),
                                !D &&
                                    !B &&
                                    s().createElement(
                                        'div',
                                        { className: qa.chapterNotChosen },
                                        s().createElement(Dt, {
                                            classMix: qa.chapterText,
                                            text: _.chapterNotChosen(),
                                            binding: {
                                                points: s().createElement('span', { className: qa.notUsedPoints }, m),
                                                icon: s().createElement('span', { className: qa.icon }),
                                            },
                                        }),
                                    ),
                                D &&
                                    s().createElement(
                                        'div',
                                        { className: qa.progressionCompleted },
                                        _.progressionCompleted(),
                                    ),
                                !D &&
                                    B &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            'div',
                                            { className: qa.progressionContainer },
                                            s().createElement(
                                                'div',
                                                { className: qa.progressionBar },
                                                s().createElement(Zt, {
                                                    deltaFrom: i - n,
                                                    value: i,
                                                    maxValue: a,
                                                    animationSettings: v,
                                                }),
                                            ),
                                            g &&
                                                s().createElement(
                                                    'div',
                                                    { className: qa.achievedPoints },
                                                    s().createElement('span', { className: qa.plus }, '+'),
                                                    n,
                                                ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: qa.pointsStats },
                                            i,
                                            '/',
                                            s().createElement('span', { className: qa.pointsMax }, a),
                                            s().createElement('span', { className: qa.icon }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Ya = 'Result_widget_14',
                    Ka = 'ResultAnimations_baseEnterDone_a9',
                    Za = { enterActive: 'ResultAnimations_baseEnterActive_7d', enterDone: Ka },
                    Qa = { enterActive: 'ResultAnimations_itemsBase_c0', enterDone: Ka },
                    Ja = { enterActive: 'ResultAnimations_ribbon_0a', enterDone: Ka },
                    en = { enterActive: 'ResultAnimations_battlePassWidget_f9', enterDone: Ka },
                    un = { enterActive: 'ResultAnimations_battleQuetsWidget_57', enterDone: Ka },
                    tn = ['children'];
                function an() {
                    return (
                        (an = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        an.apply(null, arguments)
                    );
                }
                const nn = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, tn);
                        return s().createElement(
                            gu,
                            an(
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
                    rn = (0, r.memo)(({ questCompleted: e }) => {
                        const u = (0, r.useMemo)(() => ({ tooltipId: 'QuestCompletedTooltip' }), []),
                            t = R.strings.battle_royale.battleResult.battleQuestsWidget;
                        return s().createElement(
                            O,
                            null,
                            s().createElement(
                                nn,
                                { args: u, isEnabled: !0 },
                                s().createElement(
                                    'div',
                                    { className: 'BattleQuestsWidget_base_50' },
                                    s().createElement(
                                        'div',
                                        { className: 'BattleQuestsWidget_emblemContainer_d6' },
                                        s().createElement('div', { className: 'BattleQuestsWidget_glow_78' }),
                                        s().createElement('div', { className: 'BattleQuestsWidget_emblem_13' }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: 'BattleQuestsWidget_content_f2' },
                                        s().createElement(
                                            'div',
                                            { className: 'BattleQuestsWidget_title_4c' },
                                            t.title(),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: 'BattleQuestsWidget_questsCompleteContainer_7d' },
                                            s().createElement(
                                                'div',
                                                { className: 'BattleQuestsWidget_questsComplete_82' },
                                                Tu(t.questsComplete(), { count: e }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                var sn;
                !(function (e) {
                    (e[(e.TitleEnter = 0)] = 'TitleEnter'),
                        (e[(e.StatsEnter = 1)] = 'StatsEnter'),
                        (e[(e.RibbonEnter = 2)] = 'RibbonEnter'),
                        (e[(e.BattleRewardsEnter = 3)] = 'BattleRewardsEnter'),
                        (e[(e.ProgressEnter = 4)] = 'ProgressEnter'),
                        (e[(e.AnimationFinished = 5)] = 'AnimationFinished');
                })(sn || (sn = {}));
                const on = s().memo(
                        ({
                            onAnimationComplete: e,
                            animationTrigger: u,
                            isAnimationSkipped: t,
                            isWinner: a,
                            isFirstPlace: n,
                        }) => {
                            const i = Ce('model.personalResults'),
                                o = i.finishResultLabel,
                                l = i.vehicleName,
                                c = i.vehicleType,
                                m = i.statsList,
                                _ = i.place,
                                E = i.hasPremium,
                                d = i.questCompleted,
                                A = i.battleRewardsList,
                                F = i.battleRewardsListWithPremium,
                                p = i.battlePassProgress,
                                b = 'disabled' !== p.battlePassState,
                                g = E
                                    ? 'Result_battleRewardsItemStartStatePremium_88'
                                    : 'Result_battleRewardsItemStartState_71',
                                D = (0, r.useState)(-1),
                                B = D[0],
                                C = D[1],
                                v = (0, r.useCallback)(() => {
                                    if (t) return;
                                    let u = B + 1;
                                    switch (u) {
                                        case sn.ProgressEnter:
                                            0 === p.earnedPoints && (u += 1);
                                            break;
                                        case sn.RibbonEnter:
                                            H(R.sounds.BR_result_redtape());
                                    }
                                    u === sn.AnimationFinished && e && e(), C(u);
                                }, [t, B, p.earnedPoints, e]);
                            (0, r.useEffect)(() => {
                                u && !t && C(0);
                            }, [u, t]),
                                (0, r.useEffect)(() => {
                                    t && C(sn.AnimationFinished);
                                }, [t]);
                            const f = l && systemLocale.toUpperCase(l);
                            return s().createElement(
                                'div',
                                {
                                    className: h()(
                                        'Result_base_82',
                                        a && 'Result_base__win_38',
                                        !a && 'Result_base__lose_2b',
                                    ),
                                },
                                s().createElement(
                                    'div',
                                    { className: 'Result_title_19' },
                                    s().createElement(st, {
                                        finishResultLabel: o,
                                        isFirstPlace: n,
                                        place: _,
                                        isWinner: a,
                                        vehicleType: c,
                                        vehicleName: f,
                                        animationTrigger: B >= sn.TitleEnter,
                                        isAnimationSkipped: t,
                                        onAnimationComplete: v,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Result_content_de' },
                                    s().createElement(Yu, {
                                        statsList: m,
                                        animationTrigger: B >= sn.StatsEnter,
                                        isAnimationSkipped: t,
                                        onAnimationComplete: v,
                                        itemStartState: 'Result_statItemStartState_1f',
                                        itemFinishState: Qa,
                                        transitionTimeout: 200,
                                        isWinner: a,
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: 'Result_ribbon_9a' },
                                        s().createElement(
                                            ve.Z,
                                            {
                                                timeout: 500,
                                                in: B >= sn.RibbonEnter,
                                                enter: !t,
                                                classNames: Ja,
                                                onEntered: v,
                                            },
                                            s().createElement(
                                                'div',
                                                { className: 'Result_ribbonComponent_d3' },
                                                s().createElement(At, {
                                                    battleRewardsListWithPremium: F,
                                                    isWinner: a,
                                                    hasPremium: E,
                                                }),
                                            ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: 'Result_battleRewardsList_e0' },
                                            s().createElement(gt, {
                                                battleRewardsList: A,
                                                animationTrigger: B >= sn.BattleRewardsEnter,
                                                isAnimationSkipped: t,
                                                onAnimationComplete: v,
                                                itemStartState: g,
                                                itemFinishState: Za,
                                                transitionTimeout: 200,
                                            }),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                'Result_widgetsContainer_70',
                                                t || (B >= sn.ProgressEnter && 'Result_widgetsContainer__hoverable_0f'),
                                            ),
                                        },
                                        b &&
                                            s().createElement(
                                                ve.Z,
                                                {
                                                    timeout: 500,
                                                    in: B >= sn.ProgressEnter,
                                                    enter: !t,
                                                    classNames: en,
                                                    onEntered: v,
                                                },
                                                s().createElement(
                                                    'div',
                                                    { className: Ya },
                                                    s().createElement(Xa, {
                                                        animationTrigger: B >= sn.AnimationFinished,
                                                        isAnimationSkipped: t,
                                                    }),
                                                ),
                                            ),
                                        d > 0 &&
                                            s().createElement(
                                                O,
                                                null,
                                                s().createElement(
                                                    ve.Z,
                                                    {
                                                        timeout: 500,
                                                        in: B >= sn.ProgressEnter,
                                                        enter: !t,
                                                        classNames: un,
                                                        onEntered: v,
                                                    },
                                                    s().createElement(
                                                        'div',
                                                        { className: h()(Ya, b && 'Result_widget__battleQuests_c3') },
                                                        s().createElement(rn, { questCompleted: d }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                ),
                            );
                        },
                    ),
                    ln = {
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
                let cn, mn;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(cn || (cn = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(mn || (mn = {}));
                const _n = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: n,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: m,
                    onMouseDown: _,
                    onMouseUp: E,
                    onMouseLeave: d,
                    onClick: A,
                }) => {
                    const F = (0, r.useRef)(null),
                        p = (0, r.useState)(t),
                        b = p[0],
                        g = p[1],
                        D = (0, r.useState)(!1),
                        B = D[0],
                        C = D[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                b && null !== F.current && !F.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [b]),
                        (0, r.useEffect)(() => {
                            g(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: F,
                                className: h()(
                                    ln.base,
                                    ln[`base__${a}`],
                                    n && ln.base__disabled,
                                    u && ln[`base__${u}`],
                                    b && ln.base__focus,
                                    B && ln.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    n || (null !== o && H(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    m && m(e);
                                },
                                onMouseUp: function (e) {
                                    n || (E && E(e), C(!1));
                                },
                                onMouseDown: function (e) {
                                    n ||
                                        (null !== l && H(l),
                                        _ && _(e),
                                        t && (n || (F.current && (F.current.focus(), g(!0)))),
                                        C(!0));
                                },
                                onMouseLeave: function (e) {
                                    n || (d && d(e), C(!1));
                                },
                                onClick: function (e) {
                                    n || (A && A(e));
                                },
                            },
                            a !== cn.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: ln.back }),
                                    s().createElement('span', { className: ln.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: h()(ln.state, ln.state__default) },
                                s().createElement('span', { className: ln.stateDisabled }),
                                s().createElement('span', { className: ln.stateHighlightHover }),
                                s().createElement('span', { className: ln.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: ln.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                _n.defaultProps = { type: cn.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const En = _n;
                let dn;
                !(function (e) {
                    (e.Solo = 'solo'), (e.RandomPlatoon = 'randomPlatoon'), (e.Platoon = 'platoon');
                })(dn || (dn = {}));
                const An = R.strings.battle_royale.battleResult.playerBattleTypeStatus,
                    Fn = R.images.gui.maps.icons.battleRoyale.battleResult.battle_type,
                    pn = ({ userName: e, clanAbbrev: u, battleType: t }) =>
                        s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(
                                'div',
                                { className: 'Platoon_container_57' },
                                s().createElement(
                                    'div',
                                    { className: 'Platoon_header_53' },
                                    ((e, u) => {
                                        const t = e.$dyn(u);
                                        if ('string' == typeof t) return t;
                                        throw new Error(`ReadString  ${u} is invalid `);
                                    })(An.header, t),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Platoon_userInfo_31' },
                                    s().createElement('div', { className: 'Platoon_name_da' }, e),
                                    u &&
                                        s().createElement(Dt, {
                                            text: An.clan(),
                                            binding: { clanAbbrev: u },
                                            classMix: 'Platoon_clan_c8',
                                        }),
                                ),
                            ),
                            s().createElement('div', {
                                style: { backgroundImage: `url(${Fn.$dyn(t)})` },
                                className: 'Platoon_icon_3b',
                            }),
                        ),
                    bn = R.strings.battle_royale.battleResult.playerBattleTypeStatus,
                    gn = (0, Qt.Pi)(() => {
                        const e = ra(),
                            u = e.model,
                            t = e.controls,
                            a = u.battleTypeInfo.get(),
                            n = a.battleType,
                            r = a.isPlatoonWindowOpen,
                            i = u.userInfo.get(),
                            o = i.userName,
                            l = i.clanAbbrev;
                        return s().createElement(
                            'div',
                            { className: 'PlayerBattleTypeStatus_base_e7' },
                            (() => {
                                switch (n) {
                                    case dn.Solo:
                                        return s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(
                                                'div',
                                                { className: 'PlayerBattleTypeStatus_container_fa' },
                                                s().createElement(
                                                    'div',
                                                    { className: 'PlayerBattleTypeStatus_header_76' },
                                                    bn.header.solo(),
                                                ),
                                                s().createElement(
                                                    'div',
                                                    { className: 'PlayerBattleTypeStatus_text_eb' },
                                                    bn.text.solo(),
                                                ),
                                            ),
                                            s().createElement('div', { className: 'PlayerBattleTypeStatus_icon_4c' }),
                                        );
                                    case dn.RandomPlatoon:
                                        return s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(pn, { userName: o, clanAbbrev: l, battleType: n }),
                                            s().createElement(
                                                En,
                                                {
                                                    type: cn.primary,
                                                    size: mn.medium,
                                                    mixClass: 'PlayerBattleTypeStatus_button_92',
                                                    onClick: t.invite,
                                                    disabled: r,
                                                },
                                                bn.button.text(),
                                            ),
                                        );
                                    case dn.Platoon:
                                        return s().createElement(pn, { userName: o, clanAbbrev: l, battleType: n });
                                    default:
                                        return console.error(`Invalid battle type ${n}`), null;
                                }
                            })(),
                        );
                    }),
                    Dn = [1, 2, 3, 4, 5];
                let Bn;
                var hn;
                !(function (e) {
                    (e.Results = 'results'), (e.Leaderboard = 'leaderboard');
                })(Bn || (Bn = {})),
                    (function (e) {
                        (e[(e.BackgroundEnter = 0)] = 'BackgroundEnter'),
                            (e[(e.TabBarEnter = 1)] = 'TabBarEnter'),
                            (e[(e.ResultContentEnter = 2)] = 'ResultContentEnter'),
                            (e[(e.BottomComponentsEnter = 3)] = 'BottomComponentsEnter'),
                            (e[(e.AnimationFinished = 4)] = 'AnimationFinished');
                    })(hn || (hn = {}));
                const Cn = () => {
                    const e = Ce('model').mapName,
                        u = Ce('model.personalResults').place,
                        t = (0, r.useState)(Bn.Results),
                        a = t[0],
                        n = t[1],
                        i = (0, r.useState)({ animationStage: -1, isSkipped: !1 }),
                        o = i[0],
                        l = i[1];
                    (0, r.useEffect)(
                        () =>
                            _e(() => {
                                l({ animationStage: 0, isSkipped: !1 });
                            }),
                        [],
                    );
                    const c = (0, r.useCallback)(() => {
                            (o.animationStage = hn.AnimationFinished), (o.isSkipped = !0), l(Object.assign({}, o));
                        }, [o]),
                        m = (0, r.useCallback)(
                            (e) => {
                                const u = e.currentTarget.getAttribute('tab-key');
                                o.isSkipped || c(), n(u);
                            },
                            [o.isSkipped, c],
                        ),
                        _ = (0, r.useCallback)(() => {
                            (0, de.Sy)();
                        }, []),
                        E = (0, r.useCallback)(() => {
                            o.isSkipped ? _() : c();
                        }, [o.isSkipped, _, c]);
                    Fe(Ee.n.ESCAPE, E);
                    const d = (0, r.useCallback)(() => {
                            o.isSkipped ||
                                ((o.animationStage += 1),
                                o.animationStage === hn.AnimationFinished
                                    ? (o.isSkipped = !0)
                                    : l(Object.assign({}, o)));
                        }, [o]),
                        A = Dn.includes(u),
                        F = 1 === u;
                    return s().createElement(
                        'div',
                        { className: 'App_base_d1' },
                        s().createElement(
                            ve.Z,
                            {
                                in: o.animationStage >= hn.BackgroundEnter,
                                timeout: 500,
                                classNames: Pe,
                                enter: !o.isSkipped,
                                onEntered: d,
                            },
                            s().createElement(
                                'div',
                                { className: h()('App_background_16', A && 'App_background__win_0e') },
                                s().createElement('div', { className: 'App_shadow_f4' }),
                                s().createElement('div', { className: 'App_radialShadow_90' }),
                            ),
                        ),
                        s().createElement(
                            'div',
                            { className: h()(fe, a === Bn.Results && we) },
                            s().createElement(on, {
                                animationTrigger: o.animationStage >= hn.ResultContentEnter,
                                isAnimationSkipped: o.isSkipped,
                                onAnimationComplete: d,
                                isWinner: A,
                                isFirstPlace: F,
                            }),
                        ),
                        s().createElement(
                            'div',
                            { className: h()(fe, a === Bn.Leaderboard && we) },
                            s().createElement(Uu, null),
                        ),
                        s().createElement(
                            ve.Z,
                            {
                                timeout: 500,
                                in: o.animationStage >= hn.TabBarEnter,
                                enter: !o.isSkipped,
                                className: 'App_horizontalTabs_b9',
                                classNames: Le,
                                onEntered: d,
                            },
                            s().createElement(
                                X,
                                { isTabsCentered: !0 },
                                s().createElement(
                                    'div',
                                    { 'tabs-role': z.LIST },
                                    s().createElement(
                                        ie,
                                        { 'tabs-role': z.TAB, 'tab-key': Bn.Results, onClick: m },
                                        R.strings.battle_royale.battleResult.tab.result(),
                                    ),
                                    s().createElement(
                                        ie,
                                        { 'tabs-role': z.TAB, 'tab-key': Bn.Leaderboard, onClick: m },
                                        R.strings.battle_royale.battleResult.tab.leaderboard(),
                                    ),
                                ),
                            ),
                        ),
                        s().createElement(
                            ve.Z,
                            {
                                timeout: 500,
                                in: o.animationStage >= hn.BottomComponentsEnter,
                                enter: !o.isSkipped,
                                classNames: ye,
                                onEntered: d,
                            },
                            s().createElement(
                                'div',
                                { className: 'App_bottomComponents_ee' },
                                s().createElement('p', { className: 'App_mapName_ac' }, e),
                                s().createElement(
                                    'div',
                                    { className: 'App_playerBattleTypeStatus_eb' },
                                    s().createElement(gn, null),
                                ),
                            ),
                        ),
                        s().createElement(
                            'div',
                            { className: 'App_closeButton_ac' },
                            s().createElement(me, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: _,
                            }),
                        ),
                    );
                };
                engine.whenReady.then(() => {
                    W().render(
                        s().createElement(na, null, s().createElement(O, null, s().createElement(Cn, null))),
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
                    for (var [u, t, a] = deferred[o], r = !0, s = 0; s < u.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
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
        (__webpack_require__.j = 234),
        (() => {
            var e = { 234: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        (n = r[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(3584));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
