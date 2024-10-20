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
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
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
                                        s = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, i),
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
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
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
                t.d(u, { ZP: () => s });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    s = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => h,
                        isFocused: () => p,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    s = t(8566);
                const i = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, i);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, i);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function g() {
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
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    x = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                s = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
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
                t.d(u, { Sw: () => r.Z, B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => F });
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
                var r = t(1358);
                var s = t(8613);
                let i;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    m = t(3138);
                const _ = ['args'];
                function A(e, u, t, n, a, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                        function s(e) {
                                            A(r, n, a, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(r, n, a, s, i, 'throw', e);
                                        }
                                        s(void 0);
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
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, _);
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
                    C = () => D(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var p = t(7572);
                const b = a.instance,
                    h = {
                        DataTracker: r.Z,
                        ViewModel: p.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => D(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => D(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                E = o.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            D(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: g(_),
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
                            B(e, C);
                        },
                        handleViewEvent: D,
                        onBindingsReady: F,
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
                        ClickOutsideManager: b,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = h;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => n, cy: () => a });
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
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            3945: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => wu,
                        Bar: () => hu,
                        DefaultScroll: () => vu,
                        Direction: () => iu,
                        defaultSettings: () => ou,
                        useHorizontalScrollApi: () => cu,
                    });
                var a = {};
                t.r(a), t.d(a, { Area: () => Wu, Bar: () => Uu, Default: () => Gu, useVerticalScrollApi: () => xu });
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
                function d(e, u, t) {
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
                })(c || (c = {}));
                const E = o.O.client.getSize('rem'),
                    m = E.width,
                    _ = E.height,
                    A = Object.assign({ width: m, height: _ }, d(m, _, l)),
                    g = (0, r.createContext)(A),
                    F = ['children'];
                const D = (e) => {
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
                    const n = (0, r.useContext)(g),
                        a = n.extraLarge,
                        s = n.large,
                        o = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        E = n.largeWidth,
                        m = n.mediumWidth,
                        _ = n.smallWidth,
                        A = n.extraSmallWidth,
                        D = n.extraLargeHeight,
                        C = n.largeHeight,
                        B = n.mediumHeight,
                        p = n.smallHeight,
                        b = n.extraSmallHeight,
                        h = { extraLarge: D, large: C, medium: B, small: p, extraSmall: b };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && a) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return i(u, t, h);
                        if (t.largeWidth && E) return i(u, t, h);
                        if (t.mediumWidth && m) return i(u, t, h);
                        if (t.smallWidth && _) return i(u, t, h);
                        if (t.extraSmallWidth && A) return i(u, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && B) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && b) return u;
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
                (0, r.memo)(D);
                const C = (e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    B = ({ children: e }) => {
                        const u = (0, r.useContext)(g),
                            t = (0, r.useState)(u),
                            n = t[0],
                            a = t[1],
                            i = (0, r.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(u);
                                a(Object.assign({ width: t, height: n }, d(t, n, l)));
                            }, []),
                            c = (0, r.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        C(() => {
                            o.O.client.events.on('clientResized', i), o.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', i),
                                        o.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [i, c],
                            );
                        const E = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return s().createElement(g.Provider, { value: E }, e);
                    };
                var p = t(6483),
                    b = t.n(p),
                    h = t(926),
                    f = t.n(h);
                let v, w, x;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
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
                    })(x || (x = {}));
                const S = () => {
                        const e = (0, r.useContext)(g),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
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
                        return { mediaSize: n, mediaWidth: a, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function P() {
                    return (
                        (P = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        P.apply(null, arguments)
                    );
                }
                const N = {
                        [w.ExtraSmall]: '',
                        [w.Small]: f().SMALL_WIDTH,
                        [w.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [w.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [x.ExtraSmall]: '',
                        [x.Small]: f().SMALL_HEIGHT,
                        [x.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [x.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [v.ExtraSmall]: '',
                        [v.Small]: f().SMALL,
                        [v.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [v.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [v.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
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
                            })(e, y);
                        const a = S(),
                            r = a.mediaWidth,
                            i = a.mediaHeight,
                            o = a.mediaSize;
                        return s().createElement('div', P({ className: b()(t, N[r], T[i], k[o]) }, n), u);
                    },
                    L = ['children'];
                const M = (e) => {
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
                    return s().createElement(B, null, s().createElement(O, t, u));
                };
                var I = t(493),
                    $ = t.n(I);
                function H(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const U = {
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
                var z = t(3403);
                const G = 'advanced_achievement';
                let W, V, j, q, Y;
                !(function (e) {
                    (e.Click = 'click'), (e.Display = 'display');
                })(W || (W = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'), (e.Catalog = 'catalog');
                    })(V || (V = {})),
                    (function (e) {
                        (e.Mouse = 'mouse'), (e.Esc = 'esc');
                    })(j || (j = {})),
                    (function (e) {
                        (e.AnotherPlayer = 'another_player_click'),
                            (e.TriggerHint = 'trigger_hint'),
                            (e.Close = 'close_button'),
                            (e.Catalog = 'catalog_button'),
                            (e.TankName = 'tank_name_single_achievement'),
                            (e.Breadcrumbs = 'bread_crumb');
                    })(q || (q = {})),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(Y || (Y = {}));
                let X;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(X || (X = {}));
                const Q = 'metrics',
                    K = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    Z = (e, u) => {
                        const t = (0, r.useCallback)(
                            (t, n = Y.Info, a) => {
                                a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(a),
                                        });
                            },
                            [e, u],
                        );
                        return (e, u, n) => t(e, u, n);
                    },
                    J = (e) => {
                        const u = Z(e, Q),
                            t = (0, r.useCallback)(
                                (e) => {
                                    u(e.action, e.logLevel, K(e));
                                },
                                [u],
                            );
                        return (e) => t(e);
                    },
                    ee = () => {
                        const e = J(G);
                        return (u, t) =>
                            e({ action: W.Click, parentScreen: V.Catalog, item: q.Breadcrumbs, itemState: u, info: t });
                    };
                var ue = t(9916);
                class te extends s().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = ue.B3.GOLD;
                        else e = ue.B3.INTEGRAL;
                        const u = ue.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                let ne, ae, re, se, ie, oe, le, ce;
                (te.defaultProps = { format: 'integral' }),
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
                            (e.EquipCoin = 'equipCoin'),
                            (e.LootBox = 'lootBox'),
                            (e.BrCoin = 'brcoin');
                    })(ne || (ne = {})),
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
                    })(ae || (ae = {})),
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
                    })(re || (re = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(se || (se = {})),
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
                    })(ie || (ie = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(oe || (oe = {})),
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
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(ce || (ce = {}));
                const de = [
                        ne.Items,
                        ne.Equipment,
                        ne.Xp,
                        ne.XpFactor,
                        ne.Blueprints,
                        ne.BlueprintsAny,
                        ne.Goodies,
                        ne.Berths,
                        ne.Slots,
                        ne.Tokens,
                        ne.CrewSkins,
                        ne.CrewBooks,
                        ne.Customizations,
                        ne.CreditsFactor,
                        ne.TankmenXp,
                        ne.TankmenXpFactor,
                        ne.FreeXpFactor,
                        ne.BattleToken,
                        ne.PremiumUniversal,
                        ne.NaturalCover,
                        ne.BpCoin,
                        ne.BattlePassSelectToken,
                        ne.BattlaPassFinalAchievement,
                        ne.BattleBadge,
                        ne.BonusX5,
                        ne.CrewBonusX3,
                        ne.NewYearInvoice,
                        ne.EpicSelectToken,
                        ne.Comp7TokenWeeklyReward,
                        ne.DeluxeGift,
                        ne.BattleBoosterGift,
                        ne.OptionalDevice,
                    ],
                    Ee = [ne.Gold, ne.Credits, ne.Crystal, ne.FreeXp],
                    me = [ne.BattlePassPoints, ne.EquipCoin],
                    _e = [ne.PremiumPlus, ne.Premium],
                    Ae = ['engravings', 'backgrounds'],
                    ge = ['engraving', 'background'],
                    Fe = (e, u = re.Small) => {
                        const t = e.name,
                            n = e.type,
                            a = e.value,
                            r = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case re.S600x450:
                                        return 'c_600x450';
                                    case re.S400x300:
                                        return 'c_400x300';
                                    case re.S296x222:
                                        return 'c_296x222';
                                    case re.S232x174:
                                        return 'c_232x174';
                                    case re.Big:
                                        return 'c_80x80';
                                    case re.Small:
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = Ae[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            r = a.$dyn(t);
                                        return r ? `${r}` : `${a.$dyn(ge[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, r);
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
                    De = (e, u, t) => {
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
                    Ce = [re.Small, re.Big];
                function Be() {
                    return !1;
                }
                console.log;
                var pe = t(9174);
                function be(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return he(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? he(e, u)
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
                function he(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const fe = (e) => (0 === e ? window : window.subViews.get(e));
                function ve(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function we(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const xe = we;
                function Se(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function ye(e, u) {
                    return (function (e, u, t) {
                        const n = [];
                        for (let a = 0; a < e.length; a++) {
                            const r = xe(e, a);
                            u(r, a, e) && n.push(t(r, a, e));
                        }
                        return n;
                    })(e, ve, u);
                }
                const Re = (e, u) => {
                    const t = [];
                    for (let n = 0; n < e; n++) t.push(u(n));
                    return t;
                };
                var Pe = t(3946);
                const Ne = (e) => {
                        return Object.assign({}, e, {
                            valueType:
                                ((u = e.name),
                                de.includes(u)
                                    ? se.MULTI
                                    : Ee.includes(u)
                                      ? se.CURRENCY
                                      : me.includes(u)
                                        ? se.NUMBER
                                        : _e.includes(u)
                                          ? se.PREMIUM_PLUS
                                          : se.STRING),
                            tooltipArgs: De({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                            isStyleReward: 'style' === e.icon,
                            isCoupledDogTag: 'dogTagComponents' === e.name && 'coupled' === e.purpose,
                        });
                        var u;
                    },
                    Te = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: a, children: i, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    d = (t, n, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = fe,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, u = 0) {
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
                                                const s = (e) => {
                                                    const a = t(u),
                                                        r = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const i = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return a.set(l, t), e && t(s(r)), l;
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
                                                        for (var e, t = be(a.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            i =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : i.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = pe.LO.box(n, { equals: Be });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, pe.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = pe.LO.box(n, { equals: Be });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, pe.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = pe.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, pe.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                s = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = pe.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, pe.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: t, model: E, externalModel: i, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && a ? a.controls(m) : u(m),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    E = (0, r.useRef)(!1),
                                    m = (0, r.useState)(n),
                                    _ = m[0],
                                    A = m[1],
                                    g = (0, r.useState)(() => d(n, a, l)),
                                    F = g[0],
                                    D = g[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        E.current ? D(d(_, a, l)) : (E.current = !0);
                                    }, [l, _, a]),
                                    (0, r.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    s().createElement(t.Provider, { value: F }, i)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    details: e.object('details'),
                                    achievementsList: e.array('achievementsList'),
                                    breadcrumbs: e.array('breadcrumbs'),
                                    rewards: e.array('details.rewards'),
                                    breadcrumbsClickCount: pe.LO.box(0),
                                },
                                t = (0, Pe.Om)(() => ye(u.breadcrumbs.get(), (e) => Object.assign({}, e))),
                                n = (0, Pe.Om)(
                                    (e) => {
                                        const u = we(t(), e);
                                        if (u) return u;
                                        throw new Error(`Unexpected breadcrumb index: ${e}`);
                                    },
                                    { equals: Be },
                                ),
                                a = (0, Pe.Om)(() => ye(u.rewards.get(), (e) => Ne(e))),
                                r = (0, Pe.Om)(() => u.achievementsList.get().length),
                                s = (0, Pe.Om)(
                                    () =>
                                        ye(u.achievementsList.get(), (e) =>
                                            Object.assign({}, e, { isReceived: Boolean(e.receivedDate) }),
                                        ),
                                    { equals: Be },
                                ),
                                i = (0, Pe.Om)((e) => xe(s(), e), { equals: Be }),
                                o = (0, Pe.Om)((e) => {
                                    var t, n;
                                    return ye(
                                        null != (t = null == (n = we(u.achievementsList.get(), e)) ? void 0 : n.rewards)
                                            ? t
                                            : [],
                                        (e) => Ne(e),
                                    );
                                }),
                                l = (0, Pe.Om)(() => 'breadcrumb:' + Re(t().length - 1, (e) => n(e).key).join('|'));
                            return Object.assign({}, u, {
                                computes: {
                                    getBreadcrumbs: t,
                                    getBreadcrumb: n,
                                    breadcrumbsLength: (0, Pe.Om)(() => u.breadcrumbs.get().length),
                                    getRewards: a,
                                    getCardListLength: r,
                                    getCardByIndex: i,
                                    getCardRewards: o,
                                    getBreadcrumbsChain: l,
                                    isReceived: (0, Pe.Om)(() => Boolean(u.details.get().receivedDate)),
                                    isNeededShowHint: (0, Pe.Om)(() => u.root.get().isNeededShowHint),
                                    isHintVisible: (0, Pe.Om)(
                                        () => u.root.get().isNeededShowHint && u.breadcrumbsClickCount.get() > 1,
                                    ),
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            increaseBreadcrumbsClickCount: (0, pe.aD)(() =>
                                u.breadcrumbsClickCount.set(u.breadcrumbsClickCount.get() + 1),
                            ),
                            goToBreadcrumb: e.createCallback((e) => ({ achievementId: e }), 'onBreadcrumbClick'),
                            goToCatalog: e.createCallbackNoArgs('onCatalogClick'),
                            showStylePreview: e.createCallback((e) => ({ id: e }), 'onStylePreview'),
                            dogTagPreview: e.createCallback(
                                (e, u) => ({ backgroundId: e, engravingId: u }),
                                'onDogTagPreview',
                            ),
                            goToCard: e.createCallback((e, u) => ({ achievementId: e, category: u }), 'onCardClick'),
                            purchaseVehicle: e.createCallback((e) => ({ intCD: e }), 'onPurchaseVehicleClick'),
                            hintClose: e.createCallbackNoArgs('onHintClose'),
                            hoverCard: e.createCallback(
                                (e, u) => ({ achievementId: e, achievementCategory: u }),
                                'onCardHover',
                            ),
                        }),
                    ),
                    ke = Te[0],
                    Oe = Te[1],
                    Le = {
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
                        easeOutBack(e) {
                            const u = 1.70158;
                            return 1 + 2.70158 * Math.pow(e - 1, 3) + u * Math.pow(e - 1, 2);
                        },
                        bezier: (e, u, t, n) => (a) =>
                            (1 - a) * (1 - a) * (1 - a) * e +
                            3 * (1 - a) * (1 - a) * a * u +
                            3 * (1 - a) * a * a * t +
                            a * a * a * n,
                    };
                var Me = t(1281);
                let Ie;
                function $e(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function He(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Ie || (Ie = {}));
                const Ue = (e) => e.replace(/&nbsp;/g, ' '),
                    ze = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Ge = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    We = (e, u, t = Ie.left) => e.split(u).reduce(t === Ie.left ? ze : Ge, []),
                    Ve = (() => {
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
                    je = ['zh_cn', 'zh_sg', 'zh_tw'],
                    qe = (e, u = Ie.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (je.includes(t)) return Ve(e);
                        if ('ja' === t) {
                            return (0, Me.D4)()
                                .parse(e)
                                .map((e) => Ue(e));
                        }
                        return ((e, u = Ie.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = Ue(e);
                            return We(a, /( )/, u).forEach((e) => (t = t.concat(We(e, n, Ie.left)))), t;
                        })(e, u);
                    };
                var Ye = t(8613);
                Date.now(), Ye.Ew.getRegionalDateTime, Ye.Ew.getFormattedDateTime;
                const Xe = (e, u) => {
                    const t = (0, r.useRef)();
                    return (
                        (0, r.useEffect)(() => {
                            (u && !u(e)) || (t.current = e);
                        }, [u, e]),
                        t.current
                    );
                };
                ue.Sw.instance;
                let Qe;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Qe || (Qe = {}));
                ue.Sw.instance;
                const Ke = Xe;
                var Ze = t(7030);
                const Je = (e) => {
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
                    eu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    uu = [];
                function tu(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), uu)
                    );
                }
                function nu(e, u, t = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, r.useEffect)(() => a, [a]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        a,
                    ];
                }
                function au(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return ru(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? ru(e, u)
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
                function ru(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function su(e, u, t) {
                    const n = (0, r.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let a,
                                    r = !1,
                                    s = 0;
                                function i() {
                                    a && clearTimeout(a);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function d() {
                                        (s = Date.now()), t.apply(l, o);
                                    }
                                    r ||
                                        (n && !a && d(),
                                        i(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== u &&
                                              (a = setTimeout(
                                                  n
                                                      ? function () {
                                                            a = void 0;
                                                        }
                                                      : d,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (o.cancel = function () {
                                        i(), (r = !0);
                                    }),
                                    o
                                );
                            })(t, e),
                        u,
                    );
                    return (0, r.useEffect)(() => n.cancel, [n]), n;
                }
                let iu;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(iu || (iu = {}));
                const ou = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    lu = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                a = n[0],
                                r = n[1];
                            return r <= a ? 0 : eu(a, r, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? ou : c,
                                E = (0, r.useRef)(null),
                                m = (0, r.useRef)(null),
                                _ = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        a = (e, ...t) => {
                                            for (var n, a = au(u(e).values()); !(n = a()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, r.useMemo)(() => ({ on: t, off: n, trigger: a }), []);
                                })(),
                                A = su(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Ze.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), _.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                F = g[0],
                                D = g[1],
                                C = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const a = F.scrollPosition.get(),
                                            r = (null != (n = F.scrollPosition.goal) ? n : 0) - a;
                                        return i(e, u * t + r + a);
                                    },
                                    [F.scrollPosition],
                                ),
                                B = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = E.current;
                                        n &&
                                            D.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: d.animationConfig,
                                                from: { scrollPosition: i(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, d.animationConfig, F.scrollPosition],
                                ),
                                p = (0, r.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, d.step),
                                            r = C(u, e, n);
                                        B(r);
                                    },
                                    [B, C, d.step],
                                ),
                                b = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && p(n(e)),
                                            E.current && _.trigger('mouseWheel', e, F.scrollPosition, u(E.current));
                                    },
                                    [F.scrollPosition, p, _],
                                ),
                                h = ((e, u = []) => {
                                    const t = (0, r.useRef)(),
                                        n = (0, r.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        Je(() => {
                                            const e = E.current;
                                            e &&
                                                (B(i(e, F.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [B, F.scrollPosition.goal],
                                ),
                                f = tu(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = i(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && B(u, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? a(m.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: b,
                                    applyScroll: B,
                                    applyStepTo: p,
                                    contentRef: E,
                                    wrapperRef: m,
                                    scrollPosition: D,
                                    animationScroll: F,
                                    recalculateContent: f,
                                    events: { on: _.on, off: _.off },
                                }),
                                [F.scrollPosition, B, p, _.off, _.on, f, b, D, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    cu = lu({
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
                        getDirection: (e) => (e.deltaY > 1 ? iu.Next : iu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    du = 'HorizontalBar_base_49',
                    Eu = 'HorizontalBar_base__nonActive_82',
                    mu = 'HorizontalBar_leftButton_5f',
                    _u = 'HorizontalBar_rightButton_03',
                    Au = 'HorizontalBar_track_0d',
                    gu = 'HorizontalBar_thumb_fd',
                    Fu = 'HorizontalBar_rail_32',
                    Du = 'disable',
                    Cu = { pending: !1, offset: 0 },
                    Bu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    pu = () => {},
                    bu = (e, u) => Math.max(20, e.offsetWidth * u),
                    hu = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Bu, onDrag: n = pu }) => {
                        const a = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, r.useState)(Cu),
                            _ = m[0],
                            A = m[1],
                            g = (0, r.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            F = () => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    o = eu(0, 1, r / (a - n)),
                                    E = (u.offsetWidth - bu(u, s)) * o;
                                (t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return i.current.classList.add(Du), void l.current.classList.remove(Du);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(Du), void l.current.classList.add(Du);
                                            var u, t;
                                            i.current.classList.remove(Du), l.current.classList.remove(Du);
                                        }
                                    })(E);
                            },
                            D = tu(() => {
                                (() => {
                                    const u = d.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const s = Math.min(1, n / r);
                                    (u.style.width = `${bu(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        a.current &&
                                            (1 === s ? a.current.classList.add(Eu) : a.current.classList.remove(Eu));
                                })(),
                                    F();
                            });
                        (0, r.useEffect)(() => Je(D)),
                            (0, r.useEffect)(
                                () =>
                                    Je(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = pu;
                                        const n = () => {
                                            t(), (t = Je(D));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!_.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var a;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const i = c.current,
                                            o = d.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - _.offset - i.getBoundingClientRect().x,
                                            E = (l / i.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, E),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: E });
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        u(), g(Cu);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, _.offset, _.pending, n, g]);
                        const C = nu((u) => e.applyStepTo(u), E, [e]),
                            B = C[0],
                            p = C[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Du) || H('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: b()(du, u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: b()(mu, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Du) || 0 !== e.button || (H('play'), B(iu.Next));
                                },
                                onMouseUp: p,
                                ref: i,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: b()(Au, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((H('play'), u.target === n))
                                                g({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = d.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? iu.Prev : iu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: d, className: b()(gu, u.thumb) }),
                                s().createElement('div', { className: b()(Fu, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: b()(_u, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Du) || 0 !== e.button || (H('play'), B(iu.Prev));
                                },
                                onMouseUp: p,
                                ref: l,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    fu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    vu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: b()(fu.base, e.base) });
                            }, [n]),
                            E = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: b()(fu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(fu.defaultScrollArea, a) },
                                s().createElement(wu, { className: o, api: E, classNames: i }, e),
                            ),
                            s().createElement(hu, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    wu = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, r.useEffect)(() => Je(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: b()(fu.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: b()(fu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: b()(fu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (wu.Bar = hu), (wu.Default = vu);
                const xu = lu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? iu.Next : iu.Prev),
                    }),
                    Su = 'VerticalBar_base_f3',
                    yu = 'VerticalBar_base__nonActive_42',
                    Ru = 'VerticalBar_topButton_d7',
                    Pu = 'VerticalBar_bottomButton_06',
                    Nu = 'VerticalBar_track_df',
                    Tu = 'VerticalBar_thumb_32',
                    ku = 'VerticalBar_rail_43',
                    Ou = 'disable',
                    Lu = () => {},
                    Mu = { pending: !1, offset: 0 },
                    Iu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    $u = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Hu = (e, u) => Math.max(20, e.offsetHeight * u),
                    Uu = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Iu, onDrag: n = Lu }) => {
                        const a = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, r.useState)(Mu),
                            _ = m[0],
                            A = m[1],
                            g = (0, r.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            F = tu(() => {
                                const u = d.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${Hu(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    a.current &&
                                        (1 === s ? a.current.classList.add(yu) : a.current.classList.remove(yu)),
                                    s
                                );
                            }),
                            D = tu(() => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    o = eu(0, 1, r / (a - n)),
                                    E = (u.offsetHeight - Hu(u, s)) * o;
                                (t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(Ou), void l.current.classList.remove(Ou);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(Ou), void l.current.classList.add(Ou);
                                            var u, t;
                                            i.current.classList.remove(Ou), l.current.classList.remove(Ou);
                                        }
                                    })(E);
                            }),
                            C = tu(() => {
                                $u(e, () => {
                                    F(), D();
                                });
                            });
                        (0, r.useEffect)(() => Je(C)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    $u(e, () => {
                                        D();
                                    });
                                };
                                let t = Lu;
                                const n = () => {
                                    t(), (t = Je(C));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!_.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        g(Mu);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        $u(e, (t) => {
                                            const a = c.current,
                                                r = d.current,
                                                s = e.getContainerSize();
                                            if (!a || !r || !s) return;
                                            const i = u.screenY - _.offset - a.getBoundingClientRect().y,
                                                o = (i / a.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, _.offset, _.pending, n, g]);
                        const B = nu((u) => e.applyStepTo(u), E, [e]),
                            p = B[0],
                            h = B[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Ou) || H('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: b()(Su, u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: b()(Ru, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ou) || 0 !== e.button || (H('play'), p(iu.Next));
                                },
                                ref: i,
                                onMouseEnter: f,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: b()(Nu, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((H('play'), u.target === n))
                                                g({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    d.current &&
                                                        $u(e, (n) => {
                                                            if (!n) return;
                                                            const a = t(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * u);
                                                            e.applyScroll(r);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? iu.Prev : iu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                s().createElement('div', { ref: d, className: b()(Tu, u.thumb) }),
                                s().createElement('div', { className: b()(ku, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: b()(Pu, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ou) || 0 !== e.button || (H('play'), p(iu.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    zu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Gu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: b()(zu.base, e.base) });
                            }, [n]),
                            E = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: b()(zu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(zu.area, a) },
                                s().createElement(Wu, { className: i, classNames: o, api: E }, e),
                            ),
                            s().createElement(Uu, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Wu = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, r.useEffect)(() => Je(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: b()(zu.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(zu.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Wu.Default = Gu;
                const Vu = { Vertical: a, Horizontal: n },
                    ju = {
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
                    qu = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Yu() {
                    return (
                        (Yu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Yu.apply(null, arguments)
                    );
                }
                const Xu = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        a = e.fadeInAnimation,
                        r = e.hide,
                        i = e.maximumNumber,
                        o = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, qu);
                    const c = n ? null : t,
                        d = 'string' == typeof c;
                    if ((c && !d && c < 0) || 0 === c) return null;
                    const E = c && !d && c > i,
                        m = b()(
                            ju.base,
                            ju[`base__${u}`],
                            a && ju.base__animated,
                            r && ju.base__hidden,
                            !c && ju.base__pattern,
                            n && ju.base__empty,
                            o,
                        );
                    return s().createElement(
                        'div',
                        Yu({ className: m }, l),
                        s().createElement('div', { className: ju.bg }),
                        s().createElement('div', { className: ju.pattern }),
                        s().createElement(
                            'div',
                            { className: b()(ju.value, d && ju.value__text) },
                            E ? i : c,
                            E && s().createElement('span', { className: ju.plus }, '+'),
                        ),
                    );
                };
                Xu.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Qu = [
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
                function Ku(e) {
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
                const Zu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ue.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Ju = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            a = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            C = e.onShow,
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
                            })(e, Qu);
                        const b = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, r.useMemo)(
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
                            f = (0, r.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (Zu(t, _, { isMouseEvent: !0, on: !0, arguments: Ku(n) }, h),
                                    C && C(),
                                    (b.current.isVisible = !0));
                            }, [t, _, n, h, C]),
                            v = (0, r.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        Zu(t, _, { on: !1 }, h),
                                        b.current.isVisible && B && B(),
                                        (b.current.isVisible = !1);
                                }
                            }, [t, _, h, B]),
                            w = (0, r.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(b.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = b.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === g && v();
                            }, [g, v]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return g
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((b.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      a && a(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              v(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === E && v(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === E && v(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var x;
                    },
                    et = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ut() {
                    return (
                        (ut = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ut.apply(null, arguments)
                    );
                }
                const tt = R.views.common.tooltip_window.simple_tooltip_content,
                    nt = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            a = e.note,
                            i = e.alert,
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
                            })(e, et);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: a, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, a, o]);
                        return s().createElement(
                            Ju,
                            ut(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? tt.SimpleTooltipHtmlContent('resId') : tt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    at = 'TextOverflow_base_3b',
                    rt = ['content', 'classMix', 'className'];
                function st() {
                    return (
                        (st = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        st.apply(null, arguments)
                    );
                }
                const it = (e) => {
                    let u = e.content,
                        t = e.classMix,
                        n = e.className,
                        a = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, rt);
                    const i = (0, r.useRef)(null),
                        o = (0, r.useState)(!0),
                        l = o[0],
                        c = o[1];
                    return (
                        (0, r.useEffect)(() =>
                            Je(() => {
                                const e = i.current;
                                e && e.offsetWidth >= e.scrollWidth && c(!1);
                            }),
                        ),
                        s().createElement(
                            nt,
                            { isEnabled: l, body: u },
                            s().createElement('div', st({}, a, { ref: i, className: b()(at, n, t) }), u),
                        )
                    );
                };
                let ot, lt, ct;
                !(function (e) {
                    (e.Single = 'single'),
                        (e.Cumulative = 'cumulative'),
                        (e.Staged = 'staged'),
                        (e.Subcategory = 'subcategory'),
                        (e.Category = 'Category');
                })(ot || (ot = {})),
                    (function (e) {
                        (e.Top = 'top'), (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(lt || (lt = {})),
                    (function (e) {
                        (e.Default = ''), (e.PersonalMissions = 'personal_missions');
                    })(ct || (ct = {}));
                var dt = t(5959);
                let Et, mt, _t, At, gt, Ft;
                !(function (e) {
                    (e.Circular = 'circular'), (e.Shield = 'shield');
                })(Et || (Et = {})),
                    (function (e) {
                        (e.S100x100 = 's100x100'),
                            (e.S128x128 = 's128x128'),
                            (e.S180x180 = 's180x180'),
                            (e.S280x280 = 's280x280'),
                            (e.S360x360 = 's360x360'),
                            (e.S420x420 = 's420x420'),
                            (e.Flexable = 'flexable');
                    })(mt || (mt = {})),
                    (function (e) {
                        (e.s52x44 = 's52x44'),
                            (e.s68x56 = 's68x56'),
                            (e.s94x80 = 's94x80'),
                            (e.s144x116 = 's144x116'),
                            (e.s218x176 = 's218x176'),
                            (e.s54x60 = 's54x60'),
                            (e.s68x76 = 's68x76'),
                            (e.s94x108 = 's94x108'),
                            (e.s148x168 = 's148x168'),
                            (e.s192x216 = 's192x216'),
                            (e.s228x256 = 's228x256');
                    })(_t || (_t = {})),
                    (function (e) {
                        (e.S100x100 = 's100x100'),
                            (e.S128x128 = 's128x128'),
                            (e.S180x180 = 's180x180'),
                            (e.S280x280 = 's280x280'),
                            (e.S360x360 = 's360x360'),
                            (e.S420x420 = 's420x420'),
                            (e.S480x480 = 's480x480'),
                            (e.Flexable = 'flexable');
                    })(At || (At = {})),
                    (function (e) {
                        (e.s52x62 = 's52x62'),
                            (e.s68x72 = 's68x72'),
                            (e.s94x94 = 's94x94'),
                            (e.s144x140 = 's144x140'),
                            (e.s188x176 = 's188x176'),
                            (e.s218x212 = 's218x212'),
                            (e.s250x198 = 's250x198');
                    })(gt || (gt = {})),
                    (function (e) {
                        (e[(e.Default = 0)] = 'Default'),
                            (e[(e.First = 1)] = 'First'),
                            (e[(e.Second = 2)] = 'Second'),
                            (e[(e.Third = 3)] = 'Third');
                    })(Ft || (Ft = {}));
                const Dt = (e) => (e >= 90 ? Ft.Third : e >= 60 ? Ft.Second : e >= 30 ? Ft.First : Ft.Default),
                    Ct = (e, u, t, n = !1) =>
                        e !== ot.Staged || !u || n
                            ? Ue(t)
                            : Ue(
                                  He(R.strings.advanced_achievements.steppedAchievementTitle(), {
                                      achievementName: t,
                                      stage: u,
                                  }),
                              ),
                    Bt = (e, u) => Math.floor((e / u) * 100);
                let pt;
                !(function (e) {
                    (e.Percentage = 'percentage'), (e.Stepped = 'stepped');
                })(pt || (pt = {}));
                const bt = {
                    base: 'AdvancedAchievement_base_03',
                    base__s100x100: 'AdvancedAchievement_base__s100x100_52',
                    base__s128x128: 'AdvancedAchievement_base__s128x128_d3',
                    base__s180x180: 'AdvancedAchievement_base__s180x180_10',
                    base__s280x280: 'AdvancedAchievement_base__s280x280_ac',
                    base__s360x360: 'AdvancedAchievement_base__s360x360_c6',
                    base__s420x420: 'AdvancedAchievement_base__s420x420_8a',
                    base__flexable: 'AdvancedAchievement_base__flexable_4f',
                    background: 'AdvancedAchievement_background_cf',
                    border: 'AdvancedAchievement_border_5d',
                    icon: 'AdvancedAchievement_icon_bb',
                    base__shield: 'AdvancedAchievement_base__shield_68',
                    icon__bottom: 'AdvancedAchievement_icon__bottom_57',
                    base__circular: 'AdvancedAchievement_base__circular_2d',
                    icon__top: 'AdvancedAchievement_icon__top_2d',
                    stage: 'AdvancedAchievement_stage_fa',
                };
                let ht;
                !(function (e) {
                    (e.Single = 'single'), (e.Cumulative = 'cumulative'), (e.Staged = 'staged');
                })(ht || (ht = {}));
                const ft = R.images.gui.maps.icons.advanced_achievements,
                    vt = { [ht.Single]: Et.Circular, [ht.Staged]: Et.Circular, [ht.Cumulative]: Et.Shield },
                    wt = {
                        [mt.S100x100]: _t.s52x44,
                        [mt.S128x128]: _t.s68x56,
                        [mt.S180x180]: _t.s94x80,
                        [mt.S280x280]: _t.s144x116,
                        [mt.S360x360]: _t.s218x176,
                        [mt.S420x420]: _t.s218x176,
                        [mt.Flexable]: _t.s218x176,
                    },
                    xt = {
                        [mt.S100x100]: _t.s54x60,
                        [mt.S128x128]: _t.s68x76,
                        [mt.S180x180]: _t.s94x108,
                        [mt.S280x280]: _t.s148x168,
                        [mt.S360x360]: _t.s192x216,
                        [mt.S420x420]: _t.s228x256,
                        [mt.Flexable]: _t.s228x256,
                    },
                    St = (e, u, t, n) => {
                        switch (e) {
                            case Et.Shield:
                                return { backgroundImage: `url(${ft.borders.shield.$dyn(`tier_${n}_${u}`)})` };
                            case Et.Circular:
                            default:
                                return {
                                    backgroundImage: `url(${ft.borders.circular.$dyn(t ? `circular_trophy_${u}` : `circular_${u}`)})`,
                                };
                        }
                    },
                    yt = (e, u, t, n) => {
                        switch (e) {
                            case Et.Shield:
                                return { backgroundImage: `url(${ft.backgrounds.shield.$dyn(`${n}_${u}`)})` };
                            case Et.Circular:
                            default:
                                return {
                                    backgroundImage: `url(${ft.backgrounds.circular.$dyn(t ? `trophy_${u}` : `${n}_${u}`)})`,
                                };
                        }
                    },
                    Rt = (e, u, t, n, a, r) => {
                        const s = t ? '_trophy' : '',
                            i = e === Et.Shield ? `_tier_${a}` : '',
                            o = ((e) => (e === ct.PersonalMissions ? xt : wt))(r),
                            l = o[u],
                            c = ((e, u) => {
                                if (u === mt.S360x360 && e === _t.s218x176) return { width: 188, height: 150 };
                                const t = e.substring(1).split('x');
                                return { width: t[0], height: t[1] };
                            })(l, u),
                            d = c.width,
                            E = c.height,
                            m = ft.icons.$dyn(`${n}${s}${i}_${l}`);
                        return m
                            ? { backgroundImage: `url(${m})`, width: `${d}rem`, height: `${E}rem` }
                            : { width: `${d}rem`, height: `${E}rem` };
                    },
                    Pt = ({
                        keyName: e,
                        type: u,
                        backgroundName: t,
                        size: n = mt.S180x180,
                        level: a = 0,
                        stage: r = 0,
                        isTrophy: i = !1,
                        iconPosition: o = lt.Center,
                        iconSizeMap: l = ct.Default,
                        classNames: c,
                    }) => {
                        const d = vt[u] || Et.Circular,
                            E = n === mt.Flexable ? mt.S420x420 : n;
                        return s().createElement(
                            'div',
                            {
                                className: b()(
                                    bt.base,
                                    bt[`base__${n}`],
                                    bt[`base__${d}`],
                                    null == c ? void 0 : c.base,
                                ),
                            },
                            s().createElement('div', {
                                className: b()(bt.background, null == c ? void 0 : c.background),
                                style: yt(d, E, i, t),
                            }),
                            s().createElement('div', {
                                className: b()(bt.border, null == c ? void 0 : c.border),
                                style: St(d, E, i, a),
                            }),
                            s().createElement('div', {
                                className: b()(
                                    bt.icon,
                                    bt[`icon__${o}`],
                                    bt[`icon__${((m = l), m.replace(/_\w/g, (e) => e[1].toUpperCase()))}`],
                                    null == c ? void 0 : c.icon,
                                ),
                                style: Rt(d, n, i, e, a, l),
                            }),
                            u === ht.Staged &&
                                Boolean(r) &&
                                s().createElement(
                                    'div',
                                    {
                                        className: b()(bt.stage, null == c ? void 0 : c.stage),
                                        lang: R.strings.settings.LANGUAGE_CODE(),
                                    },
                                    r,
                                ),
                        );
                        var m;
                    },
                    Nt = {
                        base: 'Category_base_94',
                        base__s100x100: 'Category_base__s100x100_92',
                        base__s128x128: 'Category_base__s128x128_d0',
                        base__s180x180: 'Category_base__s180x180_c5',
                        base__s280x280: 'Category_base__s280x280_36',
                        base__s360x360: 'Category_base__s360x360_a7',
                        base__s420x420: 'Category_base__s420x420_bd',
                        base__flexable: 'Category_base__flexable_b6',
                        background: 'Category_background_16',
                        border: 'Category_border_14',
                        icon: 'Category_icon_69',
                    };
                let Tt, kt;
                !(function (e) {
                    (e.S100x100 = 's100x100'),
                        (e.S128x128 = 's128x128'),
                        (e.S180x180 = 's180x180'),
                        (e.S280x280 = 's280x280'),
                        (e.S360x360 = 's360x360'),
                        (e.S420x420 = 's420x420'),
                        (e.Flexable = 'flexable');
                })(Tt || (Tt = {})),
                    (function (e) {
                        (e.s54x68 = 's54x68'),
                            (e.s68x82 = 's68x82'),
                            (e.s100x118 = 's100x118'),
                            (e.s156x182 = 's156x182'),
                            (e.s200x236 = 's200x236'),
                            (e.s250x278 = 's250x278');
                    })(kt || (kt = {}));
                const Ot = R.images.gui.maps.icons.advanced_achievements,
                    Lt = {
                        [Tt.S100x100]: kt.s54x68,
                        [Tt.S128x128]: kt.s68x82,
                        [Tt.S180x180]: kt.s100x118,
                        [Tt.S280x280]: kt.s156x182,
                        [Tt.S360x360]: kt.s200x236,
                        [Tt.S420x420]: kt.s250x278,
                    },
                    Mt = ({
                        keyName: e,
                        backgroundName: u,
                        size: t = Tt.S280x280,
                        level: n = 0,
                        isTrophy: a = !1,
                        classNames: r,
                    }) => {
                        const i = t === Tt.Flexable ? Tt.S420x420 : t;
                        return s().createElement(
                            'div',
                            { className: b()(Nt.base, Nt[`base__${t}`], null == r ? void 0 : r.base) },
                            s().createElement('div', {
                                className: b()(Nt.background, null == r ? void 0 : r.background),
                                style: { backgroundImage: `url(${Ot.backgrounds.category.$dyn(`${u}_${i}`)})` },
                            }),
                            s().createElement('div', {
                                className: b()(Nt.border, null == r ? void 0 : r.border),
                                style: {
                                    backgroundImage: `url(${Ot.borders.category.$dyn(a ? `trophy_${i}` : `tier_${n}_${i}`)})`,
                                },
                            }),
                            s().createElement('div', {
                                className: b()(Nt.icon, null == r ? void 0 : r.icon),
                                style: { backgroundImage: `url(${Ot.icons.category.$dyn(`${e}_${n}_${Lt[i]}`)})` },
                            }),
                        );
                    },
                    It = {
                        base: 'Subcategory_base_7c',
                        base__s100x100: 'Subcategory_base__s100x100_23',
                        base__s128x128: 'Subcategory_base__s128x128_f2',
                        base__s180x180: 'Subcategory_base__s180x180_84',
                        base__s280x280: 'Subcategory_base__s280x280_eb',
                        base__s360x360: 'Subcategory_base__s360x360_dc',
                        base__s420x420: 'Subcategory_base__s420x420_1e',
                        base__s480x480: 'Subcategory_base__s480x480_2a',
                        base__flexable: 'Subcategory_base__flexable_06',
                        background: 'Subcategory_background_68',
                        border: 'Subcategory_border_74',
                        icon: 'Subcategory_icon_17',
                    },
                    $t = R.images.gui.maps.icons.advanced_achievements,
                    Ht = {
                        [At.S100x100]: gt.s52x62,
                        [At.S128x128]: gt.s68x72,
                        [At.S180x180]: gt.s94x94,
                        [At.S280x280]: gt.s144x140,
                        [At.S360x360]: gt.s188x176,
                        [At.S420x420]: gt.s218x212,
                        [At.S480x480]: gt.s250x198,
                    },
                    Ut = ({
                        keyName: e,
                        backgroundName: u,
                        size: t = At.S280x280,
                        level: n = 0,
                        isTrophy: a = !1,
                        classNames: r,
                    }) => {
                        const i = t === At.Flexable ? At.S480x480 : t;
                        return s().createElement(
                            'div',
                            { className: b()(It.base, It[`base__${t}`], null == r ? void 0 : r.base) },
                            s().createElement('div', {
                                className: b()(It.background, null == r ? void 0 : r.background),
                                style: { backgroundImage: `url(${$t.backgrounds.subcategory.$dyn(`${u}_${i}`)})` },
                            }),
                            s().createElement('div', {
                                className: b()(It.border, null == r ? void 0 : r.border),
                                style: {
                                    backgroundImage: `url(${$t.borders.subcategory.$dyn(a ? `trophy_${i}` : `tier_${n}_${i}`)})`,
                                },
                            }),
                            s().createElement('div', {
                                className: b()(It.icon, null == r ? void 0 : r.icon),
                                style: { backgroundImage: `url(${$t.icons.subcategory.$dyn(`${e}_${n}_${Ht[i]}`)})` },
                            }),
                        );
                    },
                    zt = { [ot.Single]: ht.Single, [ot.Staged]: ht.Staged, [ot.Cumulative]: ht.Cumulative },
                    Gt = ({
                        keyName: e,
                        type: u,
                        backgroundName: t,
                        size: n,
                        level: a,
                        stage: r,
                        isTrophy: i,
                        iconPosition: o,
                        iconSizeMap: l,
                        classNames: c,
                    }) => {
                        switch (u) {
                            case ot.Category:
                                return s().createElement(Mt, {
                                    keyName: e,
                                    backgroundName: t,
                                    size: n,
                                    level: a,
                                    isTrophy: i,
                                    classNames: c,
                                });
                            case ot.Subcategory:
                                return s().createElement(Ut, {
                                    keyName: e,
                                    backgroundName: t,
                                    size: n,
                                    level: a,
                                    isTrophy: i,
                                    classNames: c,
                                });
                            case ot.Single:
                            case ot.Staged:
                            case ot.Cumulative:
                                return s().createElement(Pt, {
                                    keyName: e,
                                    type: zt[u],
                                    backgroundName: t,
                                    size: n,
                                    level: a,
                                    stage: r,
                                    isTrophy: i,
                                    iconPosition: o,
                                    iconSizeMap: l,
                                    classNames: c,
                                });
                            default:
                                return console.warn(`Unreachable code for type '${u}' in AchievementResolver.`), null;
                        }
                    },
                    Wt = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Vt, jt;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Vt || (Vt = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(jt || (jt = {}));
                const qt = ({ size: e = Vt.Default }) => {
                        const u = b()(Wt.background, Wt[`background__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    Yt = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Xt = ({ size: e }) => {
                        const u = b()(Yt.base, Yt[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    Qt = {
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
                    Kt = (0, r.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: a, withoutBounce: r }) => {
                            const i = b()(
                                    Qt.base,
                                    Qt[`base__${e}`],
                                    t && Qt.base__disabled,
                                    a && Qt.base__finished,
                                    r && Qt.base__withoutBounce,
                                ),
                                o = !t && !a;
                            return s().createElement(
                                'div',
                                { className: i, style: n, ref: u },
                                s().createElement('div', { className: Qt.pattern }),
                                s().createElement('div', { className: Qt.gradient }),
                                o && s().createElement(Xt, { size: e }),
                            );
                        },
                    ),
                    Zt = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: a }) => {
                        const i = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, r.useEffect)(() => {
                                o && a && a();
                            }, [o, a]),
                            s().createElement(Kt, { size: e, disabled: n, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    },
                    Jt = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let en, un;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(en || (en = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(un || (un = {}));
                const tn = 'ProgressBarDeltaSimple_base_6c',
                    nn = 'ProgressBarDeltaSimple_delta_99',
                    an = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: a,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < n,
                                d = (0, r.useState)(un.Idle),
                                E = d[0],
                                m = d[1],
                                _ = E === un.In,
                                A = E === un.End,
                                g = E === un.Idle,
                                F = (0, r.useCallback)(
                                    (e) => {
                                        m(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, r.useEffect)(() => {
                                if (g && !t) {
                                    return Jt(() => {
                                        F(un.In);
                                    }, u);
                                }
                            }, [F, t, g, u]),
                                (0, r.useEffect)(() => {
                                    if (_) {
                                        return Jt(() => {
                                            o && o(), F(un.End);
                                        }, e + u);
                                    }
                                }, [F, _, o, u, e]);
                            const D = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(n - i)}%`, left: `${c ? i : n}%` }),
                                    [n, c, i],
                                );
                            return A
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: tn, style: B },
                                      s().createElement(
                                          'div',
                                          { style: g ? D : C, className: nn },
                                          s().createElement(Xt, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    rn = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, r.useMemo)(
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
                                s().createElement(Kt, {
                                    size: u,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: i,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    s().createElement(an, {
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
                    sn = 'ProgressBarDeltaGrow_base_7e',
                    on = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    ln = 'ProgressBarDeltaGrow_glow_68',
                    cn = (e) => (e ? { left: 0 } : { right: 0 }),
                    dn = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    En = (e) => ({ transitionDuration: `${e}ms` }),
                    mn = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: a,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = i < n,
                                E = (0, r.useState)(en.Idle),
                                m = E[0],
                                _ = E[1],
                                A = m === en.End,
                                g = m === en.Idle,
                                F = m === en.Grow,
                                D = m === en.Shrink,
                                C = (0, r.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                ),
                                B = (0, r.useCallback)(
                                    (e, u) =>
                                        Jt(() => {
                                            C(e);
                                        }, u),
                                    [C],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return g
                                        ? B(en.Grow, u)
                                        : F
                                          ? B(en.Shrink, e)
                                          : D
                                            ? B(en.End, e)
                                            : void (A && o && o());
                            }, [B, t, A, F, g, D, o, u, e]);
                            const p = (0, r.useMemo)(() => Object.assign({ width: '100%' }, En(e), cn(d)), [d, e]),
                                h = (0, r.useMemo)(() => Object.assign({ width: '0%' }, En(e), cn(d)), [d, e]),
                                f = (0, r.useMemo)(() => Object.assign({ width: '0%' }, dn(d, n), En(e)), [n, d, e]),
                                v = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - n)}%` }, dn(d, n), En(e)),
                                    [n, d, i, e],
                                );
                            if (A) return null;
                            const w = b()(sn, c, d && 0 === i && on);
                            return s().createElement(
                                'div',
                                { style: g ? f : v, className: w },
                                s().createElement(
                                    'div',
                                    { style: D ? h : p, className: ln },
                                    s().createElement(Xt, { size: a }),
                                ),
                            );
                        },
                    ),
                    _n = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                E = (0, r.useState)(!1),
                                m = E[0],
                                _ = E[1],
                                A = (0, r.useCallback)(
                                    (e) => {
                                        e === en.Shrink && _(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                g = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Kt, {
                                    size: u,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: i,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: m ? F : g,
                                }),
                                t >= 0 &&
                                    s().createElement(mn, {
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
                    An = ['onComplete', 'onEndAnimation'];
                function gn() {
                    return (
                        (gn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        gn.apply(null, arguments)
                    );
                }
                const Fn = (0, r.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, An);
                        const a = (0, r.useState)(!1),
                            i = a[0],
                            o = a[1],
                            l = (0, r.useCallback)(() => {
                                const e = 100 === n.to;
                                e !== i && o(e), e && u && u(), t && t();
                            }, [i, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case jt.Simple:
                                return s().createElement(rn, gn({}, n, { onEndAnimation: l, isComplete: i }));
                            case jt.Growing:
                                return s().createElement(_n, gn({}, n, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    Dn = ['onEndAnimation'];
                function Cn() {
                    return (
                        (Cn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Cn.apply(null, arguments)
                    );
                }
                const Bn = (0, r.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Dn);
                    const n = (0, r.useRef)({}),
                        a = (0, r.useCallback)(() => {
                            (n.current.from = void 0), u && u();
                        }, [u]),
                        i = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = i),
                        s().createElement(Fn, Cn({}, t, { onEndAnimation: a, key: `${i}-${t.to}`, from: i }))
                    );
                });
                function pn() {
                    return (
                        (pn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        pn.apply(null, arguments)
                    );
                }
                const bn = (0, r.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: a,
                            animationSettings: r,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (a === u)
                                return s().createElement(Zt, {
                                    key: `${a}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: a,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: n,
                                animationSettings: r,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return r.withStack
                                ? s().createElement(Bn, c)
                                : s().createElement(Fn, pn({ key: `${a}-${u}` }, c));
                        },
                    ),
                    hn = (e) => ({
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
                    fn = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (eu(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    vn = {
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
                    wn = {
                        freezed: !1,
                        withStack: !1,
                        type: jt.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    xn = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = vn,
                            size: t = Vt.Default,
                            animationSettings: n = wn,
                            disabled: a = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: d,
                            onEndAnimation: E,
                            onComplete: m,
                        }) => {
                            const _ = ((e, u, t) =>
                                (0, r.useMemo)(() => {
                                    const n = (eu(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: fn(n, u, t) };
                                }, [t, u, e]))(o, e, l);
                            return s().createElement(
                                'div',
                                { className: b()(Wt.base, Wt[`base__${t}`]), style: hn(u) },
                                !i && s().createElement(qt, { size: t }),
                                s().createElement(bn, {
                                    size: t,
                                    lineRef: c,
                                    disabled: a,
                                    value: _.value,
                                    deltaFrom: _.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: E,
                                    onChangeAnimationState: d,
                                    onComplete: m,
                                }),
                            );
                        },
                    ),
                    Sn = 'Progress_base_37',
                    yn = 'Progress_caption_37',
                    Rn = 'Progress_steppedText_6a',
                    Pn = 'Progress_separator_d1',
                    Nn = 'Progress_accentText_1c',
                    Tn = ({ progressType: e, currentValue: u, maxValue: t, classNames: n, className: a }) =>
                        s().createElement(
                            'div',
                            { className: b()(Sn, a) },
                            s().createElement(xn, { value: u, maxValue: t, size: Vt.Small }),
                            s().createElement(
                                'div',
                                { className: b()(yn, null == n ? void 0 : n.caption) },
                                e === pt.Stepped
                                    ? s().createElement(
                                          'div',
                                          { className: Rn },
                                          s().createElement('div', { className: Nn }, u),
                                          s().createElement('div', { className: Pn }, '/'),
                                          t,
                                      )
                                    : s().createElement(
                                          'div',
                                          { className: Nn },
                                          He(R.strings.common.percentValue(), { value: u }),
                                      ),
                            ),
                        ),
                    kn = 'ReceivedDate_base_f6',
                    On = 'ReceivedDate_iconCheck_90',
                    Ln = ({ receivedDate: e, hasIcon: u = !0, className: t, classNames: n }) =>
                        s().createElement(
                            'div',
                            { className: b()(kn, t) },
                            u && s().createElement('div', { className: b()(On, null == n ? void 0 : n.icon) }),
                            e,
                        ),
                    Mn = {
                        base: 'Achievement_base_1c',
                        achievement: 'Achievement_achievement_96',
                        receivedBox: 'Achievement_receivedBox_5b',
                        receivedIcon: 'Achievement_receivedIcon_8c',
                        progressBar: 'Achievement_progressBar_55',
                        progressBarCaption: 'Achievement_progressBarCaption_aa',
                    },
                    In = 'SingleStage_base_29',
                    $n = ({ stage: e, className: u }) =>
                        s().createElement(
                            'div',
                            { className: b()(In, u), lang: R.strings.settings.LANGUAGE_CODE() },
                            e,
                        ),
                    Hn = {
                        [v.ExtraSmall]: mt.S100x100,
                        [v.Small]: mt.S100x100,
                        [v.Medium]: mt.S100x100,
                        [v.Large]: mt.S128x128,
                        [v.ExtraLarge]: mt.S180x180,
                    },
                    Un = (0, z.Pi)(({ cardIndex: e, className: u }) => {
                        const t = Oe().model.computes.getCardByIndex(e),
                            n = t.type,
                            a = t.key,
                            r = t.background,
                            i = t.stage,
                            o = t.isTrophy,
                            l = t.isReceived,
                            c = t.receivedDate,
                            d = t.isProgressive,
                            E = t.currentValue,
                            m = t.maxValue,
                            _ = t.isSingleStage,
                            A = t.iconPosition,
                            g = t.iconSizeMap,
                            F = S().mediaSize;
                        return s().createElement(
                            'div',
                            { className: b()(Mn.base, u, l && Mn.base__received) },
                            s().createElement(
                                'div',
                                { className: Mn.achievement },
                                _
                                    ? s().createElement($n, { stage: i })
                                    : s().createElement(Gt, {
                                          keyName: a,
                                          backgroundName: r,
                                          type: n,
                                          size: Hn[F],
                                          isTrophy: o,
                                          stage: i,
                                          iconPosition: A,
                                          iconSizeMap: g,
                                          level: Dt(Bt(E, m)),
                                      }),
                            ),
                            l
                                ? s().createElement(Ln, {
                                      receivedDate: c,
                                      hasIcon: !o,
                                      className: Mn.receivedBox,
                                      classNames: { icon: Mn.receivedIcon },
                                  })
                                : d &&
                                      s().createElement(Tn, {
                                          progressType: pt.Stepped,
                                          currentValue: E,
                                          maxValue: m,
                                          className: Mn.progressBar,
                                          classNames: { caption: Mn.progressBarCaption },
                                      }),
                        );
                    }),
                    zn = {
                        base: 'Card_base_f6',
                        base__single: 'Card_base__single_91',
                        base__received: 'Card_base__received_d3',
                        base__stacked: 'Card_base__stacked_ef',
                        shadowCard: 'Card_shadowCard_65',
                        inner: 'Card_inner_b7',
                        counter: 'Card_counter_ef',
                        glowBox: 'Card_glowBox_6a',
                        glowInner: 'Card_glowInner_fb',
                        glow: 'Card_glow_9b',
                        content: 'Card_content_a7',
                        title: 'Card_title_7b',
                    },
                    Gn = 'FormatText_base_d0',
                    Wn = ({ binding: e, text: u = '', classMix: t, alignment: n = Ie.left, formatWithBrackets: a }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const i = a && e ? $e(u, e) : u;
                        return s().createElement(
                            r.Fragment,
                            null,
                            i.split('\n').map((u, a) =>
                                s().createElement(
                                    'div',
                                    { className: b()(Gn, t), key: `${u}-${a}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : qe(e, u))))(
                                        u,
                                        n,
                                        e,
                                    ).map((e, u) => s().createElement(r.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    };
                function Vn() {
                    const e = (0, r.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, r.useEffect)(() => u, []),
                        (0, r.useMemo)(
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
                }
                const jn = (e, u) => window.getComputedStyle(e, null).getPropertyValue(u),
                    qn = (e, u, t) => {
                        const n = t.getContext('2d');
                        if (!n) return 0;
                        var a;
                        n.font = `${jn((a = u), 'font-weight')} ${jn(a, 'font-size')} ${jn(a, 'font-family')}`;
                        return n.measureText(e).width;
                    },
                    Yn = (e) => {
                        if (e.start >= e.end - 1) return e.start;
                        const u = Math.floor((e.start + e.end) / 2),
                            t = e.words.slice(0, u).join(' '),
                            n = Math.ceil(qn(t, e.element, e.canvas) / e.element.getBoundingClientRect().width);
                        return Yn(n <= 1 ? Object.assign({}, e, { start: u }) : Object.assign({}, e, { end: u }));
                    },
                    Xn = 'MultilineOverflow_base_d9',
                    Qn = 'MultilineOverflow_base__truncated_a1',
                    Kn = 'MultilineOverflow_text_ce',
                    Zn = 'MultilineOverflow_truncatedContent_da',
                    Jn = 'MultilineOverflow_singleLine_bb',
                    ea = 'MultilineOverflow_line_51',
                    ua = ['text', 'lines', 'className', 'onChange'];
                function ta() {
                    return (
                        (ta = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ta.apply(null, arguments)
                    );
                }
                const na = (0, r.forwardRef)(function (e, u) {
                    let t = e.text,
                        n = e.lines,
                        a = e.className,
                        i = e.onChange,
                        o = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, ua);
                    const l = (0, r.useRef)(null),
                        c = (0, r.useRef)(null),
                        d = (0, r.useState)(!1),
                        E = d[0],
                        m = d[1],
                        _ = (0, r.useState)([]),
                        A = _[0],
                        g = _[1],
                        F = (0, r.useState)(0),
                        D = F[0],
                        C = F[1],
                        B = Vn(),
                        p = (0, r.useMemo)(() => document.createElement('canvas'), []),
                        h = (0, r.useCallback)(() => (c.current ? c.current.getBoundingClientRect().height : 0), []),
                        f = (0, r.useCallback)(
                            (e) => {
                                const u = h();
                                return e && u ? Math.round(e.scrollHeight / u) : 0;
                            },
                            [h],
                        ),
                        v = (0, r.useCallback)(() => {
                            if (f(l.current) <= n) return m(!1);
                            m(!0);
                            const e = t.split(' '),
                                u = Array.from(new Array(n)).reduce((u, t, a) => {
                                    if (!l.current) return u;
                                    const r = u.reduce((e, u) => e + u.length, 0),
                                        s = e.slice(r);
                                    if (a === n - 1) return u.push(s), u;
                                    const i = Yn({ start: 0, end: s.length, words: s, element: l.current, canvas: p });
                                    return u.push(s.slice(0, i)), u;
                                }, []);
                            g(u);
                        }, [p, f, n, t]),
                        w = (0, r.useCallback)(() => {
                            B.run(() => {
                                C(h() * n), v();
                            });
                        }, [h, n, B, v]);
                    var x, S;
                    return (
                        (0, r.useEffect)(w, [w]),
                        (x = w),
                        (S = [w]),
                        (0, r.useEffect)(
                            () => (window.addEventListener('resize', x), () => window.removeEventListener('resize', x)),
                            S,
                        ),
                        (0, r.useEffect)(() => {
                            null == i || i(E);
                        }, [i, E]),
                        s().createElement(
                            'div',
                            ta({}, o, { ref: u, className: b()(Xn, a, E && Qn) }),
                            s().createElement('div', { ref: l, className: Kn, style: { maxHeight: `${D}rem` } }, t),
                            s().createElement(
                                'div',
                                { className: Zn },
                                A.map((e, u) => s().createElement('div', { key: u, className: ea }, e.join(' '))),
                            ),
                            s().createElement('div', { ref: c, className: Jn }, R.strings.common.common.dot()),
                        )
                    );
                });
                function aa() {
                    return (
                        (aa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        aa.apply(null, arguments)
                    );
                }
                const ra = (0, r.forwardRef)(function (e, u) {
                        const t = (0, r.useState)(!1),
                            n = t[0],
                            a = t[1];
                        return s().createElement(
                            nt,
                            { isEnabled: n, body: e.text },
                            s().createElement(na, aa({}, e, { ref: u, onChange: a })),
                        );
                    }),
                    sa = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ia = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const oa = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    la = (e) =>
                        oa
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = ia.length - 1; t >= 0; t--)
                                      for (; e >= ia[t]; ) (u += sa[t]), (e -= ia[t]);
                                  return u;
                              })(e),
                    ca = 'VehicleButton_base_bd',
                    da = 'VehicleButton_base__received_20',
                    Ea = 'VehicleButton_icon_86',
                    ma = ({ vehicleName: e, iconName: u, isReceived: t, onClick: n, className: a }) => {
                        const r = u ? R.images.gui.maps.icons.achievements.$dyn(u) : '';
                        return s().createElement(
                            'div',
                            {
                                className: b()(ca, t && da, a),
                                onClick: () => {
                                    t || (U.playClick(), n());
                                },
                                onMouseEnter: () => U.playHighlight(),
                            },
                            r && s().createElement('div', { className: Ea, style: { backgroundImage: `url(${r})` } }),
                            e,
                        );
                    },
                    _a = 'Description_base_8c',
                    Aa = 'Description_base__received_ab',
                    ga = 'Description_text_9f',
                    Fa = R.strings.achievements_page.catalog,
                    Da = (0, z.Pi)(({ index: e, className: u }) => {
                        var t;
                        const n = Oe(),
                            a = n.model,
                            r = n.controls,
                            i = a.computes.getCardByIndex(e),
                            o = i.key,
                            l = i.isReceived,
                            c = i.specificItemName,
                            d = i.specificItemId,
                            E = i.specificItemLevel,
                            m = i.type,
                            _ = i.isSingleStage,
                            A = i.maxValue,
                            g = i.isResearchable,
                            F = (() => {
                                const e = J(G);
                                return () => {
                                    e({ action: W.Display, parentScreen: V.Catalog, item: q.TankName });
                                };
                            })(),
                            D = l && m === ot.Staged && !_;
                        return s().createElement(
                            'div',
                            { className: b()(_a, l && Aa, u) },
                            d && g
                                ? s().createElement(Wn, {
                                      text: R.strings.advanced_achievements.collectVehicle(),
                                      binding: {
                                          item: s().createElement(ma, {
                                              vehicleName: c,
                                              isReceived: l,
                                              onClick: () => {
                                                  F(), r.purchaseVehicle(d);
                                              },
                                          }),
                                      },
                                  })
                                : s().createElement(ra, {
                                      text: D
                                          ? Fa.card.descriptionCompleted()
                                          : He(
                                                null !=
                                                    (t = Ue(R.strings.advanced_achievements.description.$plural(o, A)))
                                                    ? t
                                                    : '',
                                                { maxValue: A, level: la(E) },
                                            ),
                                      lines: 3,
                                      className: ga,
                                  }),
                        );
                    }),
                    Ca = ['children'];
                function Ba() {
                    return (
                        (Ba = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ba.apply(null, arguments)
                    );
                }
                const pa = (e) => {
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
                        })(e, Ca);
                    return s().createElement(
                        Ju,
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
                };
                function ba() {
                    return (
                        (ba = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ba.apply(null, arguments)
                    );
                }
                const ha = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(nt, u, n);
                        const a = u.contentId;
                        return a ? s().createElement(Ju, ba({}, u, { contentId: a }), n) : s().createElement(pa, u, n);
                    },
                    fa = {
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
                    va = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = re.Big,
                        special: a,
                        value: r,
                        valueType: i,
                        title: o,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const _ = ((e, u) => {
                                if (void 0 === u || !Ce.includes(e)) return null;
                                switch (u) {
                                    case ie.BATTLE_BOOSTER:
                                    case ie.BATTLE_BOOSTER_REPLACE:
                                        return oe.BATTLE_BOOSTER;
                                }
                            })(n, a),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ie.BATTLE_BOOSTER:
                                        return le.BATTLE_BOOSTER;
                                    case ie.BATTLE_BOOSTER_REPLACE:
                                        return le.BATTLE_BOOSTER_REPLACE;
                                    case ie.BUILT_IN_EQUIPMENT:
                                        return le.BUILT_IN_EQUIPMENT;
                                    case ie.EQUIPMENT_PLUS:
                                        return le.EQUIPMENT_PLUS;
                                    case ie.EQUIPMENT_TROPHY_BASIC:
                                        return le.EQUIPMENT_TROPHY_BASIC;
                                    case ie.EQUIPMENT_TROPHY_UPGRADED:
                                        return le.EQUIPMENT_TROPHY_UPGRADED;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return le.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return le.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return le.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ie.PROGRESSION_STYLE_UPGRADED_1:
                                        return le.PROGRESSION_STYLE_UPGRADED_1;
                                    case ie.PROGRESSION_STYLE_UPGRADED_2:
                                        return le.PROGRESSION_STYLE_UPGRADED_2;
                                    case ie.PROGRESSION_STYLE_UPGRADED_3:
                                        return le.PROGRESSION_STYLE_UPGRADED_3;
                                    case ie.PROGRESSION_STYLE_UPGRADED_4:
                                        return le.PROGRESSION_STYLE_UPGRADED_4;
                                    case ie.PROGRESSION_STYLE_UPGRADED_5:
                                        return le.PROGRESSION_STYLE_UPGRADED_5;
                                    case ie.PROGRESSION_STYLE_UPGRADED_6:
                                        return le.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(a),
                            g = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case se.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case se.CURRENCY:
                                    case se.NUMBER:
                                        return s().createElement(te, { format: 'integral', value: Number(e) });
                                    case se.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, i);
                        return s().createElement(
                            'div',
                            { className: b()(fa.base, fa[`base__${n}`], c), style: l },
                            s().createElement(
                                ha,
                                { tooltipArgs: E, className: fa.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: b()(fa.image, null == d ? void 0 : d.image) },
                                        _ &&
                                            s().createElement('div', {
                                                className: b()(fa.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: b()(fa.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        A &&
                                            s().createElement('div', {
                                                className: b()(fa.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    fa.info,
                                                    fa[`info__${e}`],
                                                    i === se.MULTI && fa.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            g,
                                        ),
                                    o && s().createElement('div', { className: fa.title }, o),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    ha,
                                    { tooltipArgs: m },
                                    s().createElement('div', {
                                        className: b()(fa.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    };
                let wa;
                !(function (e) {
                    (e.S80x80 = 's80x80'), (e.S64x64 = 's64x64'), (e.S48x48 = 's48x48');
                })(wa || (wa = {}));
                const xa = { [wa.S48x48]: re.Small, [wa.S64x64]: re.Big, [wa.S80x80]: re.Big },
                    Sa = { [wa.S48x48]: re.S48x48, [wa.S64x64]: re.S64x64, [wa.S80x80]: re.S80x80 },
                    ya = {
                        base: 'CommonReward_base_7e',
                        base__s48x48: 'CommonReward_base__s48x48_8b',
                        base__s64x64: 'CommonReward_base__s64x64_96',
                        base__s80x80: 'CommonReward_base__s80x80_94',
                        base__clickable: 'CommonReward_base__clickable_40',
                        reward: 'CommonReward_reward_ff',
                        rewardImage: 'CommonReward_rewardImage_f2',
                        loupe: 'CommonReward_loupe_f0',
                    };
                function Ra() {
                    return (
                        (Ra = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ra.apply(null, arguments)
                    );
                }
                const Pa = ({ reward: e, size: u, imageSize: t, hasPreview: n, className: a, onClick: r }) =>
                        s().createElement(
                            'div',
                            {
                                className: b()(ya.base, n && ya.base__clickable, ya[`base__${u}`], a),
                                onClick: () => {
                                    n && (null == r || r(), U.playClick());
                                },
                                onMouseEnter: () => n && U.playHighlight(),
                            },
                            s().createElement(
                                va,
                                Ra({}, e, {
                                    image: Fe(e, t || xa[u]),
                                    className: ya.reward,
                                    classNames: { image: ya.rewardImage },
                                }),
                            ),
                            n && s().createElement('div', { className: ya.loupe }),
                        ),
                    Na = (e, u, t) => ({
                        reward: Object.assign({}, e),
                        hasPreview: e.isStyleReward || e.isCoupledDogTag,
                        size: u,
                        key: t,
                    }),
                    Ta = {
                        base: 'PointsReward_base_02',
                        base__s48x48: 'PointsReward_base__s48x48_33',
                        base__s64x64: 'PointsReward_base__s64x64_46',
                        base__s80x80: 'PointsReward_base__s80x80_76',
                        icon: 'PointsReward_icon_21',
                        label: 'PointsReward_label_0c',
                        iconPlus: 'PointsReward_iconPlus_f3',
                    },
                    ka = R.strings.achievements_page.achievementsPointsTooltip,
                    Oa = ({ points: e, size: u = wa.S64x64, className: t, classNames: n }) =>
                        s().createElement(
                            nt,
                            { header: ka.header(), body: ka.body() },
                            s().createElement(
                                'div',
                                { className: b()(Ta.base, Ta[`base__${u}`], t) },
                                s().createElement('div', { className: b()(Ta.icon, null == n ? void 0 : n.icon) }),
                                s().createElement(
                                    'div',
                                    { className: Ta.label },
                                    s().createElement('div', { className: Ta.iconPlus }),
                                    s().createElement(te, { value: e }),
                                ),
                            ),
                        ),
                    La = 'Rewards_base_78',
                    Ma = 'Rewards_rewardItem__points_12',
                    Ia = 'Rewards_base__received_a3',
                    $a = 'Rewards_rewardItem_9c',
                    Ha = 'Rewards_rewardItem__preview_42';
                function Ua() {
                    return (
                        (Ua = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ua.apply(null, arguments)
                    );
                }
                const za = {
                        [v.ExtraSmall]: wa.S48x48,
                        [v.Small]: wa.S48x48,
                        [v.Medium]: wa.S48x48,
                        [v.Large]: wa.S64x64,
                        [v.ExtraLarge]: wa.S80x80,
                    },
                    Ga = (0, z.Pi)(({ cardIndex: e, className: u }) => {
                        const t = Oe(),
                            n = t.model,
                            a = t.controls,
                            r = n.computes.getCardByIndex(e),
                            i = r.achievementScore,
                            o = r.isReceived,
                            l = n.computes.getCardRewards(e),
                            c = S().mediaSize,
                            d = za[c];
                        return s().createElement(
                            'div',
                            { className: b()(La, o && Ia, u) },
                            Se(l, (e, u) => {
                                const t = Na(e, d, u);
                                return e.isCoupledDogTag
                                    ? s().createElement(
                                          Pa,
                                          Ua({}, t, {
                                              onClick: () => a.dogTagPreview(e.backgroundId, e.engravingId),
                                              imageSize: Sa[d],
                                              className: b()($a, t.hasPreview && Ha),
                                          }),
                                      )
                                    : s().createElement(
                                          Pa,
                                          Ua({}, t, {
                                              onClick: () => a.showStylePreview(e.id),
                                              className: b()($a, t.hasPreview && Ha),
                                          }),
                                      );
                            }),
                            Boolean(i) && s().createElement(Oa, { className: b()($a, Ma), points: i, size: za[c] }),
                        );
                    }),
                    Wa = R.strings.advanced_achievements;
                var Va;
                !(function (e) {
                    (e.Single = 'single'), (e.Stacked = 'stacked');
                })(Va || (Va = {}));
                const ja = (0, z.Pi)(({ index: e, className: u }) => {
                        const t = Oe(),
                            n = t.model,
                            a = t.controls,
                            r = n.computes.getCardByIndex(e),
                            i = r.type,
                            o = r.key,
                            l = r.isTrophy,
                            c = r.isReceived,
                            d = r.isSingleStage,
                            E = r.id,
                            m = r.stage,
                            _ = r.newItemsCount,
                            A = r.category,
                            g = ((e, u, t) => {
                                if (u) return Va.Single;
                                switch (e) {
                                    case ot.Cumulative:
                                        return Va.Stacked;
                                    case ot.Staged:
                                        return t ? Va.Single : Va.Stacked;
                                    case ot.Single:
                                    default:
                                        return Va.Single;
                                }
                            })(i, l, d);
                        return s().createElement(
                            'div',
                            {
                                className: b()(zn.base, zn[`base__${g}`], c && zn.base__received, u),
                                onClick: () => {
                                    g === Va.Stacked && (H(R.sounds.ach_sign()), a.goToCard(E, A));
                                },
                                onMouseEnter: () => {
                                    Boolean(_) && a.hoverCard(E, A), g === Va.Stacked && U.playHighlight();
                                },
                            },
                            g === Va.Stacked && s().createElement('div', { className: zn.shadowCard }),
                            s().createElement(
                                'div',
                                { className: zn.inner },
                                Boolean(_) &&
                                    s().createElement(
                                        'div',
                                        { className: zn.counter },
                                        s().createElement(Xu, { value: _, isEmpty: 1 === _ }),
                                    ),
                                dt.graphicsQuality.isHigh() &&
                                    Boolean(_) &&
                                    s().createElement(
                                        'div',
                                        { className: zn.glowBox },
                                        s().createElement(
                                            'div',
                                            { className: zn.glowInner },
                                            s().createElement('div', { className: zn.glow }),
                                        ),
                                    ),
                                s().createElement(Un, { cardIndex: e }),
                                s().createElement(
                                    'div',
                                    { className: zn.content },
                                    s().createElement(
                                        'div',
                                        { className: zn.title },
                                        s().createElement(it, {
                                            content: d
                                                ? Ue(He(Wa.stepTitle(), { stage: m }))
                                                : Ct(i, m, Wa.name.$dyn(o), c),
                                        }),
                                    ),
                                    s().createElement(Da, { index: e }),
                                ),
                                !l && s().createElement(Ga, { cardIndex: e }),
                            ),
                        );
                    }),
                    qa = {
                        base: 'CardList_base_35',
                        inner: 'CardList_inner_e4',
                        scrollContent: 'CardList_scrollContent_61',
                        bar: 'CardList_bar_b5',
                        list: 'CardList_list_78',
                        item: 'CardList_item_31',
                    },
                    Ya = (0, z.Pi)(({ className: e }) => {
                        const u = Oe().model,
                            t = xu();
                        return s().createElement(
                            'div',
                            { className: b()(qa.base, e) },
                            s().createElement(
                                'div',
                                { className: qa.inner },
                                s().createElement(
                                    Vu.Vertical.Area,
                                    { api: t, className: qa.scroll, classNames: { content: qa.scrollContent } },
                                    s().createElement(
                                        'div',
                                        { className: qa.list },
                                        Re(u.computes.getCardListLength(), (e) =>
                                            s().createElement(
                                                'div',
                                                { className: qa.item, key: e },
                                                s().createElement(ja, { index: e }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            s().createElement(Vu.Vertical.Bar, { api: t, classNames: { base: qa.bar } }),
                        );
                    }),
                    Xa = 'Details_base_0f',
                    Qa = 'Details_progress_e7',
                    Ka = 'Details_receivedBox_25',
                    Za = 'Details_content_f9',
                    Ja = 'Details_title_73',
                    er = 'Details_base__received_65',
                    ur = 'Details_description_da',
                    tr = 'Details_rewards_3f',
                    nr = 'Rewards_base_87',
                    ar = 'Rewards_rewardItem_42';
                function rr() {
                    return (
                        (rr = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        rr.apply(null, arguments)
                    );
                }
                const sr = {
                        [v.ExtraSmall]: wa.S48x48,
                        [v.Small]: wa.S48x48,
                        [v.Medium]: wa.S48x48,
                        [v.Large]: wa.S64x64,
                        [v.ExtraLarge]: wa.S80x80,
                    },
                    ir = (0, z.Pi)(({ className: e }) => {
                        const u = Oe(),
                            t = u.model,
                            n = u.controls,
                            a = t.details.get().achievementScore,
                            r = S().mediaSize,
                            i = sr[r];
                        return s().createElement(
                            'div',
                            { className: b()(nr, e) },
                            Se(t.computes.getRewards(), (e, u) =>
                                e.isCoupledDogTag
                                    ? s().createElement(
                                          Pa,
                                          rr({}, Na(e, i, u), {
                                              onClick: () => n.dogTagPreview(e.backgroundId, e.engravingId),
                                              imageSize: Sa[i],
                                              className: ar,
                                          }),
                                      )
                                    : s().createElement(
                                          Pa,
                                          rr({}, Na(e, i, u), {
                                              onClick: () => n.showStylePreview(e.id),
                                              className: ar,
                                          }),
                                      ),
                            ),
                            s().createElement(Oa, { className: ar, points: a, size: i }),
                        );
                    }),
                    or = R.strings.advanced_achievements,
                    lr = {
                        [v.ExtraSmall]: mt.S280x280,
                        [v.Small]: mt.S280x280,
                        [v.Medium]: mt.S360x360,
                        [v.Large]: mt.S360x360,
                        [v.ExtraLarge]: mt.S420x420,
                    },
                    cr = (0, z.Pi)(({ className: e }) => {
                        const u = Oe().model,
                            t = u.details.get(),
                            n = t.type,
                            a = t.key,
                            r = t.background,
                            i = t.stage,
                            o = t.isTrophy,
                            l = t.progressType,
                            c = t.currentValue,
                            d = t.maxValue,
                            E = t.receivedDate,
                            m = t.iconPosition,
                            _ = t.iconSizeMap,
                            A = t.specificItemLevel,
                            g = u.computes.isReceived,
                            F = S().mediaSize,
                            D = !o && (n === ot.Cumulative || n === ot.Staged);
                        return s().createElement(
                            'div',
                            { className: b()(Xa, g() && er, e) },
                            s().createElement(Gt, {
                                keyName: a,
                                backgroundName: r,
                                type: n,
                                size: lr[F],
                                isTrophy: o,
                                stage: i,
                                iconPosition: m,
                                iconSizeMap: _,
                                level: Dt(Bt(c, d)),
                            }),
                            !o &&
                                s().createElement(
                                    'div',
                                    { className: Qa },
                                    g()
                                        ? s().createElement(Ln, { receivedDate: E, className: Ka })
                                        : s().createElement(Tn, {
                                              progressType: l,
                                              currentValue: c,
                                              maxValue: l === pt.Stepped ? d : void 0,
                                          }),
                                ),
                            s().createElement(
                                'div',
                                { className: Za },
                                s().createElement('div', { className: Ja }, Ct(n, i, or.name.$dyn(a), g())),
                                D && s().createElement(ir, { className: tr }),
                                s().createElement(
                                    'div',
                                    { className: ur },
                                    Ue(
                                        ((e, u, t, n, a) => {
                                            var r;
                                            return e
                                                ? or.descriptionOfTrophy()
                                                : u
                                                  ? or.descriptionOfReceived()
                                                  : null != (r = or.ditailsDescription.$dyn(t))
                                                    ? r
                                                    : He(or.description.$plural(t, n), { maxValue: n, level: la(a) });
                                        })(o, g(), a, d, A),
                                    ),
                                ),
                            ),
                        );
                    }),
                    dr = 'Content_base_e4',
                    Er = 'Content_inner_a4',
                    mr = 'Content_details_8f',
                    _r = 'Content_list_20',
                    Ar = (0, z.Pi)(({ className: e }) => {
                        var u;
                        const t = Oe().model.computes.breadcrumbsLength(),
                            n = null != (u = Ke(t)) ? u : t,
                            a = (0, Ze.useTransition)(t, {
                                from: { x: (n > t ? -60 : 60) + 'rem', opacity: 0 },
                                enter: { x: '0rem', opacity: 1 },
                                leave: { x: (n > t ? 60 : -60) + 'rem', opacity: 0 },
                                immediate: n === t,
                                config: { duration: 400, easing: Le.easeOutQuad },
                            });
                        return (
                            (0, r.useEffect)(() => {
                                n !== t && H(R.sounds.ach_page_transition());
                            }, [n, t]),
                            s().createElement(
                                'div',
                                { className: b()(dr, e) },
                                a((e) =>
                                    s().createElement(
                                        Ze.animated.div,
                                        { className: Er, style: e },
                                        s().createElement(cr, { className: mr }),
                                        s().createElement(Ya, { className: _r }),
                                    ),
                                ),
                            )
                        );
                    }),
                    gr = 'Hint_base_37',
                    Fr = 'Hint_text_9d',
                    Dr = 'Hint_icon_b3',
                    Cr = 'Hint_border_23',
                    Br = 'Hint_close_ce',
                    pr = R.strings.achievements_page.catalog,
                    br = (0, z.Pi)(({ className: e }) => {
                        const u = Oe().controls;
                        return s().createElement(
                            'div',
                            { className: b()(gr, e) },
                            s().createElement(Wn, {
                                text: pr.hintText(),
                                classMix: Fr,
                                binding: {
                                    escIcon: s().createElement(
                                        'div',
                                        { className: Dr },
                                        s().createElement('div', { className: Cr }),
                                        pr.hintIcon(),
                                    ),
                                },
                            }),
                            s().createElement('div', {
                                className: Br,
                                onClick: () => {
                                    u.hintClose(), H(R.sounds.cancelcloseno());
                                },
                                onMouseEnter: U.playHighlight,
                            }),
                        );
                    }),
                    hr = {
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
                    fr = [
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
                function vr() {
                    return (
                        (vr = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        vr.apply(null, arguments)
                    );
                }
                class wr extends s().PureComponent {
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
                            n = e.goto,
                            a = e.side,
                            r = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
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
                                })(e, fr)),
                            m = b()(hr.base, hr[`base__${r}`], hr[`base__${a}`], null == i ? void 0 : i.base),
                            _ = b()(hr.icon, hr[`icon__${r}`], hr[`icon__${a}`], null == i ? void 0 : i.icon),
                            A = b()(hr.glow, null == i ? void 0 : i.glow),
                            g = b()(hr.caption, hr[`caption__${r}`], null == i ? void 0 : i.caption),
                            F = b()(hr.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            vr(
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
                            'info' !== r && s().createElement('div', { className: hr.shine }),
                            s().createElement('div', { className: _ }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: g }, u),
                            n && s().createElement('div', { className: F }, n),
                        );
                    }
                }
                wr.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var xr = t(5521);
                const Sr = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function yr(e = xr.n.NONE, u = Sr, t = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== xr.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                const Rr = {
                    base: 'Breadcrumb_base_24',
                    base__active: 'Breadcrumb_base__active_3b',
                    base__disabled: 'Breadcrumb_base__disabled_b2',
                };
                let Pr;
                !(function (e) {
                    (e.Active = 'active'), (e.Disabled = 'disabled');
                })(Pr || (Pr = {}));
                const Nr = ({ state: e = Pr.Active, onClick: u, className: t, children: n }) =>
                        s().createElement(
                            'div',
                            {
                                className: b()(Rr.base, Rr[`base__${e}`], t),
                                onClick: () => {
                                    e === Pr.Active && (null == u || u());
                                },
                            },
                            n,
                        ),
                    Tr = 'BreadcrumbItem_base_7a',
                    kr = 'BreadcrumbItem_arrow_a8',
                    Or = (0, z.Pi)(({ index: e, className: u }) => {
                        const t = Oe(),
                            n = t.controls,
                            a = t.model,
                            i = a.computes,
                            o = i.getBreadcrumb(e),
                            l = o.achievementId,
                            c = o.key,
                            d = (() => {
                                const e = (0, r.useState)(viewEnv.getClientSizePx().width),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = () => t(viewEnv.getClientSizePx().width);
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    { currentWidth: u }
                                );
                            })(),
                            E = d.currentWidth,
                            m = ee();
                        return s().createElement(
                            'div',
                            { className: b()(Tr, u) },
                            s().createElement('div', { className: kr }),
                            s().createElement(
                                Nr,
                                {
                                    state: e === i.breadcrumbsLength() - 1 ? Pr.Disabled : Pr.Active,
                                    onClick: () =>
                                        ((e) => {
                                            n.increaseBreadcrumbsClickCount(),
                                                m(a.computes.getBreadcrumbsChain(), j.Mouse),
                                                n.goToBreadcrumb(e);
                                        })(l),
                                },
                                s().createElement(it, {
                                    key: `${e}-${E}-${i.breadcrumbsLength()}`,
                                    content: systemLocale.toUpperCase(Ue(R.strings.advanced_achievements.name.$dyn(c))),
                                }),
                            ),
                        );
                    }),
                    Lr = {
                        base: 'Breadcrumbs_base_bf',
                        rootLink: 'Breadcrumbs_rootLink_0f',
                        score: 'Breadcrumbs_score_ee',
                        scoreIcon: 'Breadcrumbs_scoreIcon_eb',
                        list: 'Breadcrumbs_list_b7',
                        item: 'Breadcrumbs_item_9a',
                        item__last: 'Breadcrumbs_item__last_f1',
                    },
                    Mr = R.strings.achievements_page,
                    Ir = (0, z.Pi)(({ className: e }) => {
                        const u = Oe(),
                            t = u.controls,
                            n = u.model,
                            a = n.root.get(),
                            r = a.achievementScore,
                            i = a.maxAchievementsScore;
                        return s().createElement(
                            'div',
                            { className: b()(Lr.base, e) },
                            s().createElement(
                                ha,
                                {
                                    className: Lr.hoverWrapper,
                                    tooltipArgs: {
                                        header: He(Mr.category.achievementsScore.tooltip.title(), {
                                            value: r,
                                            maxValue: i,
                                        }),
                                        body: Mr.category.achievementsScore.tooltip.description(),
                                    },
                                },
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement(
                                        Nr,
                                        { className: Lr.rootLink, onClick: t.goToCatalog },
                                        s().createElement(
                                            'div',
                                            { className: Lr.score },
                                            s().createElement('div', { className: Lr.scoreIcon }),
                                            s().createElement(te, { value: r }),
                                        ),
                                        Mr.catalog.rootLink(),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: Lr.list },
                                Re(n.computes.breadcrumbsLength(), (e) =>
                                    s().createElement(Or, {
                                        index: e,
                                        className: b()(
                                            Lr.item,
                                            e === n.computes.breadcrumbsLength() - 1 && Lr.item__last,
                                        ),
                                        key: e,
                                    }),
                                ),
                            ),
                        );
                    }),
                    $r = { base: 'Navigation_base_bd', breadcrumbs: 'Navigation_breadcrumbs_c1' },
                    Hr = (0, z.Pi)(() => {
                        const e = Oe(),
                            u = e.controls,
                            t = e.model,
                            n = t.computes,
                            a = (() => {
                                const e = J(G);
                                return (u, t) => e({ action: W.Click, parentScreen: V.Catalog, item: u, info: t });
                            })(),
                            r = ee();
                        var i;
                        return (
                            (i = () => {
                                if ((n.isNeededShowHint() && u.hintClose(), n.breadcrumbsLength() > 1)) {
                                    const e = n.breadcrumbsLength() - 2;
                                    u.goToBreadcrumb(n.getBreadcrumb(e).achievementId),
                                        r(t.computes.getBreadcrumbsChain(), j.Esc);
                                } else a(q.Close, j.Esc), u.goToCatalog();
                            }),
                            yr(xr.n.ESCAPE, i),
                            s().createElement(
                                'div',
                                { className: $r.base },
                                s().createElement(Ir, { className: $r.breadcrumbs }),
                                s().createElement(
                                    'div',
                                    { className: $r.closeButton },
                                    s().createElement(wr, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: () => {
                                            a(q.Close, j.Mouse), u.close();
                                        },
                                    }),
                                ),
                            )
                        );
                    }),
                    Ur = 'App_base_62',
                    zr = 'App_base__loaded_08',
                    Gr = 'App_navigation_75',
                    Wr = 'App_wrapper_28',
                    Vr = 'App_content_05',
                    jr = 'App_hint_b5',
                    qr = (0, z.Pi)(() => {
                        const e = Oe().model,
                            u = e.computes.isHintVisible,
                            t = (0, r.useState)(!1),
                            n = t[0],
                            a = t[1],
                            i = (() => {
                                const e = J(G);
                                return (u, t) => e({ action: W.Display, parentScreen: V.Catalog, item: u, info: t });
                            })();
                        var o, l;
                        return (
                            (o = () => {
                                a(!0);
                            }),
                            (0, r.useEffect)(() => {
                                let e = null;
                                return (
                                    (e = requestAnimationFrame(() => {
                                        e = requestAnimationFrame(() => {
                                            (e = null), o();
                                        });
                                    })),
                                    () => {
                                        null !== e && cancelAnimationFrame(e);
                                    }
                                );
                            }, l),
                            (0, r.useEffect)(() => {
                                n && H(R.sounds.ach_to_catalog());
                            }, [n]),
                            (0, r.useEffect)(() => {
                                u() && i(q.TriggerHint, e.computes.getBreadcrumbsChain());
                            }, [i, u, e.computes]),
                            s().createElement(
                                'div',
                                { className: b()(Ur, n && zr) },
                                s().createElement('div', { className: Gr }, s().createElement(Hr, null)),
                                s().createElement(
                                    'div',
                                    { className: Wr },
                                    s().createElement(Ar, { className: Vr }),
                                    e.computes.isHintVisible() && s().createElement(br, { className: jr }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    $().render(
                        s().createElement(M, null, s().createElement(ke, null, s().createElement(qr, null))),
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
                    for (var [u, t, n] = deferred[o], r = !0, s = 0; s < u.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
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
        (__webpack_require__.j = 637),
        (() => {
            var e = { 637: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        (a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [549], () => __webpack_require__(3945));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
