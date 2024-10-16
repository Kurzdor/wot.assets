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
                    t.d(u, { mouse: () => c, off: () => l, on: () => s, onResize: () => a, onScaleUpdated: () => r });
                var i = t(2472),
                    n = t(1176);
                const a = (0, i.E)('clientResized'),
                    r = (0, i.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    l = (e, u) => engine.off(e, u),
                    E = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function i() {
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
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${u}`,
                                        r = E[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        i(),
                                        () => {
                                            n &&
                                                (r(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                i(),
                                                (n = !1));
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
                            (e.enabled = !1), i();
                        },
                        enable() {
                            (e.enabled = !0), i();
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
                        events: () => i,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var i = t(527),
                    n = t(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
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
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => i });
            },
            2493: (e, u, t) => {
                'use strict';
                function i(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function n(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => n, G: () => i });
            },
            2472: (e, u, t) => {
                'use strict';
                function i(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => i });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => a });
                var i = t(5959),
                    n = t(514);
                const a = { view: t(7641), client: i, sound: n.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => r });
                var i = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, i.playSound)(n[u])), e), {}),
                    r = { play: Object.assign({}, a, { sound: i.playSound }), setRTPC: i.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function i(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${i(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => i });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var i = t(2472);
                const n = {
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => o,
                        addPreloadTexture: () => l,
                        children: () => i,
                        displayStatus: () => n.W,
                        displayStatusIs: () => x,
                        events: () => a.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => h,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => p,
                        getScale: () => _,
                        getSize: () => d,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => w,
                        isFocused: () => b,
                        pxToRem: () => D,
                        remToPx: () => g,
                        resize: () => m,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => E,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => y,
                    });
                var i = t(3722),
                    n = t(6112),
                    a = t(6538),
                    r = t(8566);
                const s = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, u, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, i);
                }
                function o(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function F(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function h() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function w() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function p() {
                    return viewEnv.getShowingStatus();
                }
                const x = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    f = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => E });
                const i = ['args'];
                const n = 2,
                    a = 16,
                    r = 32,
                    s = 64,
                    l = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var i in e)
                                        if ({}.hasOwnProperty.call(e, i)) {
                                            if (u.indexOf(i) >= 0) continue;
                                            t[i] = e[i];
                                        }
                                    return t;
                                })(u, i);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    E = {
                        close(e) {
                            l('popover' === e ? n : r);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let i, n;
                t.d(u, { n: () => i }),
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
                    })(n || (n = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var i = t(3138);
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
                        const a = i.O.view.addModelObserver(e, t, n);
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
                            const i = this._callbacks[t];
                            void 0 !== i && i(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
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
                t.d(u, { Sw: () => a.Z, ry: () => _ });
                class i {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let i = e.target;
                                    do {
                                        if (i === u) return;
                                        i = i.parentNode;
                                    } while (i);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return i.__instance || (i.__instance = new i()), i.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            i = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== i)),
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
                const n = i;
                var a = t(1358);
                var r = t(8613);
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    o = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    d = t(3138);
                const m = ['args'];
                function F(e, u, t, i, n, a, r) {
                    try {
                        var s = e[a](r),
                            l = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(l) : Promise.resolve(l).then(i, n);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    _ = (function () {
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
                                    return new Promise(function (i, n) {
                                        var a = e.apply(u, t);
                                        function r(e) {
                                            F(a, i, n, r, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(a, i, n, r, s, 'throw', e);
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
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var i in e)
                                        if ({}.hasOwnProperty.call(e, i)) {
                                            if (u.indexOf(i) >= 0) continue;
                                            t[i] = e[i];
                                        }
                                    return t;
                                })(u, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((i = n),
                                              Object.entries(i).map(([e, u]) => {
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
                        var i;
                    },
                    g = () => D(s.CLOSE),
                    B = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var b = t(7572);
                const C = n.instance,
                    w = {
                        DataTracker: a.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: E,
                        TimeFormatType: c,
                        DateFormatType: o,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => D(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => D(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, i, n = R.invalid('resId'), a) => {
                            const r = d.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                E = l.x,
                                c = l.y,
                                o = l.width,
                                A = l.height,
                                m = {
                                    x: d.O.view.pxToRem(E) + r.x,
                                    y: d.O.view.pxToRem(c) + r.y,
                                    width: d.O.view.pxToRem(o),
                                    height: d.O.view.pxToRem(A),
                                };
                            D(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: h(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, g);
                        },
                        handleViewEvent: D,
                        onBindingsReady: _,
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
                            for (const i in u)
                                if (Object.prototype.hasOwnProperty.call(u, i)) {
                                    const n = Object.prototype.toString.call(u[i]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[i];
                                        t[i] = [];
                                        for (let u = 0; u < n.length; u++) t[i].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[i] = e(u[i]))
                                            : (t[i] = u[i]);
                                }
                            return t;
                        },
                        ClickOutsideManager: C,
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = w;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => a, Z5: () => i, cy: () => n });
                const i = {
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
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            3866: (e, u, t) => {
                'use strict';
                var i = t(6179),
                    n = t.n(i);
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
                var r = t(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function E(e, u, t) {
                    const i = (function (e, u) {
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
                        a = Math.min(i, n);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: i === t.extraLarge.weight,
                        largeWidth: i === t.large.weight,
                        mediumWidth: i === t.medium.weight,
                        smallWidth: i === t.small.weight,
                        extraSmallWidth: i === t.extraSmall.weight,
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
                })(l || (l = {}));
                const c = r.O.client.getSize('rem'),
                    o = c.width,
                    A = c.height,
                    d = Object.assign({ width: o, height: A }, E(o, A, s)),
                    m = (0, i.createContext)(d),
                    F = ['children'];
                const h = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var i in e)
                                if ({}.hasOwnProperty.call(e, i)) {
                                    if (u.indexOf(i) >= 0) continue;
                                    t[i] = e[i];
                                }
                            return t;
                        })(e, F);
                    const n = (0, i.useContext)(m),
                        r = n.extraLarge,
                        s = n.large,
                        l = n.medium,
                        E = n.small,
                        c = n.extraSmall,
                        o = n.extraLargeWidth,
                        A = n.largeWidth,
                        d = n.mediumWidth,
                        h = n.smallWidth,
                        _ = n.extraSmallWidth,
                        D = n.extraLargeHeight,
                        g = n.largeHeight,
                        B = n.mediumHeight,
                        b = n.smallHeight,
                        C = n.extraSmallHeight,
                        w = { extraLarge: D, large: g, medium: B, small: b, extraSmall: C };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && s) return u;
                        if (t.medium && l) return u;
                        if (t.small && E) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && o) return a(u, t, w);
                        if (t.largeWidth && A) return a(u, t, w);
                        if (t.mediumWidth && d) return a(u, t, w);
                        if (t.smallWidth && h) return a(u, t, w);
                        if (t.extraSmallWidth && _) return a(u, t, w);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && B) return u;
                            if (t.smallHeight && b) return u;
                            if (t.extraSmallHeight && C) return u;
                        }
                    }
                    return null;
                };
                h.defaultProps = {
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
                (0, i.memo)(h);
                const _ = (e) => {
                        const u = (0, i.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    D = ({ children: e }) => {
                        const u = (0, i.useContext)(m),
                            t = (0, i.useState)(u),
                            a = t[0],
                            l = t[1],
                            c = (0, i.useCallback)((e, u) => {
                                const t = r.O.view.pxToRem(e),
                                    i = r.O.view.pxToRem(u);
                                l(Object.assign({ width: t, height: i }, E(t, i, s)));
                            }, []),
                            o = (0, i.useCallback)(() => {
                                const e = r.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        _(() => {
                            r.O.client.events.on('clientResized', c), r.O.client.events.on('self.onScaleUpdated', o);
                        }),
                            (0, i.useEffect)(
                                () => () => {
                                    r.O.client.events.off('clientResized', c),
                                        r.O.client.events.off('self.onScaleUpdated', o);
                                },
                                [c, o],
                            );
                        const A = (0, i.useMemo)(() => Object.assign({}, a), [a]);
                        return n().createElement(m.Provider, { value: A }, e);
                    };
                var g = t(6483),
                    B = t.n(g),
                    b = t(926),
                    C = t.n(b);
                let w, v, p;
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
                    })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(p || (p = {}));
                const x = () => {
                        const e = (0, i.useContext)(m),
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
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case e.largeWidth:
                                        return v.Large;
                                    case e.mediumWidth:
                                        return v.Medium;
                                    case e.smallWidth:
                                        return v.Small;
                                    case e.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return p.ExtraLarge;
                                    case e.largeHeight:
                                        return p.Large;
                                    case e.mediumHeight:
                                        return p.Medium;
                                    case e.smallHeight:
                                        return p.Small;
                                    case e.extraSmallHeight:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: r, remScreenWidth: u, remScreenHeight: t };
                    },
                    f = ['children', 'className'];
                function y() {
                    return (
                        (y = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var i in t) ({}).hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                  }
                                  return e;
                              }),
                        y.apply(null, arguments)
                    );
                }
                const N = {
                        [v.ExtraSmall]: '',
                        [v.Small]: C().SMALL_WIDTH,
                        [v.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [v.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [p.ExtraSmall]: '',
                        [p.Small]: C().SMALL_HEIGHT,
                        [p.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [p.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    H = {
                        [w.ExtraSmall]: '',
                        [w.Small]: C().SMALL,
                        [w.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [w.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [w.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    S = (e) => {
                        let u = e.children,
                            t = e.className,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var i in e)
                                    if ({}.hasOwnProperty.call(e, i)) {
                                        if (u.indexOf(i) >= 0) continue;
                                        t[i] = e[i];
                                    }
                                return t;
                            })(e, f);
                        const a = x(),
                            r = a.mediaWidth,
                            s = a.mediaHeight,
                            l = a.mediaSize;
                        return n().createElement('div', y({ className: B()(t, N[r], L[s], H[l]) }, i), u);
                    },
                    T = ['children'];
                const O = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var i in e)
                                if ({}.hasOwnProperty.call(e, i)) {
                                    if (u.indexOf(i) >= 0) continue;
                                    t[i] = e[i];
                                }
                            return t;
                        })(e, T);
                    return n().createElement(D, null, n().createElement(S, t, u));
                };
                var M = t(493),
                    k = t.n(M),
                    P = t(3403),
                    W = t(7030);
                t(1281);
                let I;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(I || (I = {}));
                (() => {
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
                })();
                var G = t(9916),
                    U = t(8613);
                Date.now(), U.Ew.getRegionalDateTime, U.Ew.getFormattedDateTime;
                const z = () => {
                    const e = r.O.view.getSize('rem'),
                        u = (0, i.useState)({ height: e.height, width: e.width }),
                        t = u[0],
                        n = u[1];
                    return (
                        (0, i.useEffect)(() => {
                            const e = (e) => {
                                n(e);
                            };
                            return (
                                engine.on('screenResized', e),
                                () => {
                                    engine.off('screenResized', e);
                                }
                            );
                        }, []),
                        t
                    );
                };
                G.Sw.instance;
                let $;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })($ || ($ = {}));
                G.Sw.instance;
                const j = (e, u, t) => {
                        const i = e.height / e.width > u.height / u.width ? e.height / u.height : e.width / u.width,
                            n = t.x * i,
                            a = t.y * i,
                            r = (u.width * i - e.width) / 2,
                            s = (u.height * i - e.height) / 2,
                            l = Math.min(Math.max(n - r, 0), e.width);
                        return { top: `${Math.min(Math.max(a - s, 0), e.height)}rem`, left: `${l}rem` };
                    },
                    V = (e, u, t) => {
                        let i;
                        i = e.width >= s.large.width ? 1 : e.width >= s.medium.width ? 0.7 : 0.55;
                        const n = t.x * i,
                            a = t.y * i,
                            r = (u.width * i - e.width) / 2,
                            l = (u.height * i - e.height) / 2,
                            E = Math.min(Math.max(n - r, 0), e.width);
                        return { top: `${Math.min(Math.max(a - l, 0), e.height)}rem`, left: `${E}rem` };
                    },
                    q = 'Hint_base_d5',
                    K = 'Hint_content_5d',
                    Y = 'Hint_text_64',
                    Z = 'Hint_title_f4',
                    X = 'Hint_description_ce',
                    Q = ({ title: e = null, description: u = null, children: t }) =>
                        n().createElement(
                            'div',
                            { className: q },
                            n().createElement('div', { className: K }, t),
                            n().createElement(
                                'div',
                                { className: Y },
                                e && n().createElement('div', { className: Z }, e),
                                u && n().createElement('div', { className: X }, u),
                            ),
                        );
                function J() {}
                function ee() {
                    return !1;
                }
                console.log;
                var ue = t(9174);
                function te(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return ie(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? ie(e, u)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var i = 0;
                        return function () {
                            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ie(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, i = Array(u); t < u; t++) i[t] = e[t];
                    return i;
                }
                const ne = (e) => (0 === e ? window : window.subViews.get(e));
                const ae = ((e, u) => {
                        const t = (0, i.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: s, children: l, mocks: E }) {
                                const c = (0, i.useRef)([]),
                                    o = (t, i, n) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ne,
                                                context: i = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(e, u = 0) {
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
                                                        a = i.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const l = 'string' == typeof a ? `${i}.${a}` : i,
                                                            E = r.O.view.addModelObserver(l, u, !0);
                                                        return n.set(E, t), e && t(s(a)), E;
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
                                                        for (var e, t = te(n.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(i),
                                            l =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            E = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : l.readByPath(e),
                                            o = (e) => c.current.push(e),
                                            A = e({
                                                mode: t,
                                                readByPath: E,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const i = null != u ? u : E(e),
                                                            n = ue.LO.box(i, { equals: ee });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, ue.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const i = null != u ? u : E(e),
                                                            n = ue.LO.box(i, { equals: ee });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, ue.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const i = E(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = ue.LO.box(i[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, ue.aD)((u) => {
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
                                                                a = Object.entries(n),
                                                                r = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = ue.LO.box(i[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, ue.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                r[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: o,
                                            }),
                                            d = { mode: t, model: A, externalModel: l, cleanup: o };
                                        return {
                                            model: A,
                                            controls: 'mocks' === t && n ? n.controls(d) : u(d),
                                            externalModel: l,
                                            mode: t,
                                        };
                                    },
                                    A = (0, i.useRef)(!1),
                                    d = (0, i.useState)(a),
                                    m = d[0],
                                    F = d[1],
                                    h = (0, i.useState)(() => o(a, s, E)),
                                    _ = h[0],
                                    D = h[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        A.current ? D(o(m, s, E)) : (A.current = !0);
                                    }, [E, m, s]),
                                    (0, i.useEffect)(() => {
                                        F(a);
                                    }, [a]),
                                    (0, i.useEffect)(
                                        () => () => {
                                            _.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [_],
                                    ),
                                    n().createElement(t.Provider, { value: _ }, l)
                                );
                            },
                            () => (0, i.useContext)(t),
                        ];
                    })(({ observableModel: e }) => e.object(), J),
                    re = ae[0],
                    se = ae[1],
                    le = 'HintBackground_image_4b',
                    Ee = 'HintBackground_image__crop_57',
                    ce = ({ image: e, hasBlind: u = !1, crop: t = !1, className: i }) => {
                        const a = `url(${e}${se().model.get().isColorBlind && u ? '_blind' : ''})`;
                        return n().createElement('div', {
                            style: { backgroundImage: a },
                            className: B()(le, t && Ee, i),
                        });
                    },
                    oe = 'HintShadows_base_09',
                    Ae = 'HintShadows_shadow_c0',
                    de = 'HintShadows_shadow__top_8d',
                    me = 'HintShadows_shadow__bottom_7a',
                    Fe = 'HintShadows_vignette_c6',
                    he = () =>
                        n().createElement(
                            'div',
                            { className: oe },
                            n().createElement('div', { className: Fe }),
                            n().createElement('div', { className: B()(Ae, de) }),
                            n().createElement('div', { className: B()(Ae, me) }),
                        ),
                    _e = {
                        label: 'NewbieHint01_label_32',
                        label__left: 'NewbieHint01_label__left_46',
                        label__center: 'NewbieHint01_label__center_f9',
                        label__top: 'NewbieHint01_label__top_c4',
                        title: 'NewbieHint01_title_a6',
                        info: 'NewbieHint01_info_d8',
                        narrow: 'NewbieHint01_narrow_bc',
                        title__green: 'NewbieHint01_title__green_5f',
                        title__red: 'NewbieHint01_title__red_93',
                    },
                    De = { width: 2560, height: 1440 },
                    ge = { x: 1490, y: 610 },
                    Be = { x: 1110, y: 891 },
                    be = 'NewbieHint02_label_35',
                    Ce = 'NewbieHint02_label__center_19',
                    we = 'NewbieHint02_title_63',
                    ve = 'NewbieHint02_keys_25',
                    pe = 'NewbieHint02_firing_97',
                    xe = 'NewbieHint02_camera_c5',
                    fe = 'NewbieHint02_turret_a8',
                    ye = { width: 2560, height: 1440 },
                    Ne = {
                        [w.ExtraSmall]: { x: 703, y: 812 },
                        [w.Small]: { x: 703, y: 812 },
                        [w.Medium]: { x: 740, y: 823 },
                        [w.Large]: { x: 725, y: 833 },
                        [w.ExtraLarge]: { x: 725, y: 865 },
                    },
                    Le = {
                        [w.ExtraSmall]: { x: 1225, y: 500 },
                        [w.Small]: { x: 1225, y: 500 },
                        [w.Medium]: { x: 1239, y: 506 },
                        [w.Large]: { x: 1211, y: 503 },
                        [w.ExtraLarge]: { x: 1211, y: 534 },
                    },
                    Re = {
                        [w.ExtraSmall]: { x: 1530, y: 590 },
                        [w.Small]: { x: 1530, y: 590 },
                        [w.Medium]: { x: 1487, y: 573 },
                        [w.Large]: { x: 1507, y: 569 },
                        [w.ExtraLarge]: { x: 1507, y: 598 },
                    },
                    He = {
                        [w.ExtraSmall]: { x: 1820, y: 800 },
                        [w.Small]: { x: 1820, y: 800 },
                        [w.Medium]: { x: 1700, y: 728 },
                        [w.Large]: { x: 1730, y: 735 },
                        [w.ExtraLarge]: { x: 1730, y: 765 },
                    },
                    Se = {
                        bgPadding: 'NewbieHint03_bgPadding_b0',
                        label: 'NewbieHint03_label_c6',
                        mouse: 'NewbieHint03_mouse_f3',
                        shift: 'NewbieHint03_shift_a4',
                        title: 'NewbieHint03_title_31',
                    },
                    Te = { width: 2560, height: 1440 },
                    Oe = {
                        [w.ExtraSmall]: { x: 1846, y: 975 },
                        [w.Small]: { x: 1940, y: 958 },
                        [w.Medium]: { x: 1937, y: 940 },
                        [w.Large]: { x: 1865, y: 1e3 },
                        [w.ExtraLarge]: { x: 1937, y: 900 },
                    },
                    Me = 'common_label_c8',
                    ke = 'common_label__left_bd',
                    Pe = 'common_label__center_24',
                    We = 'common_title_cd',
                    Ie = 'common_info_09',
                    Ge = { width: 2560, height: 1440 },
                    Ue = { x: 1148, y: 525 },
                    ze = { x: 1028, y: 940 },
                    $e = { x: 1660, y: 537 },
                    je = 'NewbieHint05_label_88',
                    Ve = 'NewbieHint05_label__left_4f',
                    qe = 'NewbieHint05_title_c1',
                    Ke = 'NewbieHint05_info_9f',
                    Ye = 'NewbieHint05_block_73',
                    Ze = 'NewbieHint05_block__left_77',
                    Xe = 'NewbieHint05_label__narrow_66',
                    Qe = 'NewbieHint05_fire_dd',
                    Je = 'NewbieHint05_repair_64',
                    eu = 'NewbieHint05_aid_be',
                    uu = { width: 2560, height: 1440 },
                    tu = {
                        [w.ExtraSmall]: { x: 826, y: 288 },
                        [w.Small]: { x: 826, y: 269 },
                        [w.Medium]: { x: 882, y: 320 },
                        [w.Large]: { x: 872, y: 332 },
                        [w.ExtraLarge]: { x: 874, y: 332 },
                    },
                    iu = {
                        [w.ExtraSmall]: { x: 1154, y: 918 },
                        [w.Small]: { x: 1154, y: 899 },
                        [w.Medium]: { x: 1185, y: 890 },
                        [w.Large]: { x: 1183, y: 887 },
                        [w.ExtraLarge]: { x: 1183, y: 888 },
                    },
                    nu = {
                        [w.ExtraSmall]: { x: 1622, y: 434 },
                        [w.Small]: { x: 1622, y: 415 },
                        [w.Medium]: { x: 1590, y: 434 },
                        [w.Large]: { x: 1586, y: 444 },
                        [w.ExtraLarge]: { x: 1586, y: 443 },
                    },
                    au = 'NewbieHint06_label_68',
                    ru = 'NewbieHint06_label__left_65',
                    su = 'NewbieHint06_title_39',
                    lu = 'NewbieHint06_info_4d',
                    Eu = 'NewbieHint06_label__openArea_82',
                    cu = 'NewbieHint06_label__object_cf',
                    ou = { width: 2560, height: 1440 },
                    Au = { x: 650, y: 287 },
                    du = { x: 935, y: 647 },
                    mu = { x: 1872, y: 530 },
                    Fu = { x: 1555, y: 894 },
                    hu = {
                        block: 'NewbieHint07_block_e0',
                        block__right: 'NewbieHint07_block__right_85',
                        win: 'NewbieHint07_win_65',
                        reason: 'NewbieHint07_reason_8a',
                        progress: 'NewbieHint07_progress_46',
                        markers: 'NewbieHint07_markers_3f',
                        marker: 'NewbieHint07_marker_be',
                        marker__ally1: 'NewbieHint07_marker__ally1_ef',
                        marker__ally2: 'NewbieHint07_marker__ally2_36',
                        marker__enemy1: 'NewbieHint07_marker__enemy1_e1',
                        marker__enemy2: 'NewbieHint07_marker__enemy2_dc',
                        circle: 'NewbieHint07_circle_67',
                        or: 'NewbieHint07_or_81',
                    };
                var _u;
                !(function (e) {
                    (e.Ally1 = 'ally1'), (e.Ally2 = 'ally2'), (e.Enemy1 = 'enemy1'), (e.Enemy2 = 'enemy2');
                })(_u || (_u = {}));
                const Du = { width: 2560, height: 1440 },
                    gu = [
                        { point: { x: 570, y: 720 }, style: _u.Ally1 },
                        { point: { x: 915, y: 782 }, style: _u.Ally2 },
                        { point: { x: 1815, y: 823 }, style: _u.Ally1 },
                        { point: { x: 1468, y: 755 }, style: _u.Enemy2 },
                        { point: { x: 1692, y: 723 }, style: _u.Enemy1 },
                        { point: { x: 2020, y: 737 }, style: _u.Enemy2 },
                    ],
                    Bu = 'NewbieHint08_block_4d',
                    bu = 'NewbieHint08_block__right_42',
                    Cu = 'NewbieHint08_arrow_4c',
                    wu = 'NewbieHint08_arrow__right_4f',
                    vu = 'NewbieHint08_title_b3',
                    pu = 'NewbieHint10_label_c7',
                    xu = 'NewbieHint10_label__left_0b',
                    fu = 'NewbieHint10_label__top_89',
                    yu = 'NewbieHint10_title_43',
                    Nu = 'NewbieHint10_info_3d',
                    Lu = 'NewbieHint10_label__right_40',
                    Ru = { width: 2560, height: 1440 },
                    Hu = { width: 1366, height: 768 },
                    Su = { x: 767, y: 587 },
                    Tu = { x: 432, y: 289 },
                    Ou = { x: 767, y: 908 },
                    Mu = { x: 428, y: 485 },
                    ku = { x: 1917, y: 906 },
                    Pu = { x: 953, y: 485 },
                    Wu = 'NewbieHint12_label_cb',
                    Iu = 'NewbieHint12_label__left_d9',
                    Gu = 'NewbieHint12_title_03',
                    Uu = 'NewbieHint12_info_12',
                    zu = 'NewbieHint12_notPenetrated_f5',
                    $u = 'NewbieHint12_penetrated_c4',
                    ju = { width: 2560, height: 1440 },
                    Vu = { x: 920, y: 390 },
                    qu = { x: 920, y: 640 },
                    Ku = { width: 2560, height: 1440 },
                    Yu = { x: 645, y: 90 },
                    Zu = { x: 1530, y: 90 };
                let Xu;
                !(function (e) {
                    (e.NewbieHint1 = 'newbie_hint_1'),
                        (e.NewbieHint2 = 'newbie_hint_2'),
                        (e.NewbieHint3 = 'newbie_hint_3'),
                        (e.NewbieHint4 = 'newbie_hint_4'),
                        (e.NewbieHint5 = 'newbie_hint_5'),
                        (e.NewbieHint6 = 'newbie_hint_6'),
                        (e.NewbieHint7 = 'newbie_hint_7'),
                        (e.NewbieHint8 = 'newbie_hint_8'),
                        (e.NewbieHint9 = 'newbie_hint_9'),
                        (e.NewbieHint10 = 'newbie_hint_10'),
                        (e.NewbieHint12 = 'newbie_hint_12'),
                        (e.NewbieHint13 = 'newbie_hint_13');
                })(Xu || (Xu = {}));
                const Qu = {
                        [Xu.NewbieHint1]: () => {
                            const e = z(),
                                u = V(e, De, ge),
                                t = V(e, De, Be);
                            return n().createElement(
                                Q,
                                {
                                    title: R.strings.prebattle.hints.hint1.header(),
                                    description: R.strings.prebattle.hints.hint1.description(),
                                },
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_01.background',
                                    crop: !0,
                                    className: _e.bgPadding,
                                }),
                                n().createElement(he, null),
                                n().createElement(
                                    'div',
                                    { className: _e.label, style: u },
                                    n().createElement(
                                        'div',
                                        { className: B()(_e.title, _e.title__green) },
                                        R.strings.prebattle.hints.hint1.green.header(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: _e.info },
                                        R.strings.prebattle.hints.hint1.green.description(),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: B()(_e.label, _e.label__left), style: t },
                                    n().createElement(
                                        'div',
                                        { className: B()(_e.title, _e.title__red) },
                                        R.strings.prebattle.hints.hint1.red.header(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: _e.info },
                                        R.strings.prebattle.hints.hint1.red.description(),
                                    ),
                                ),
                            );
                        },
                        [Xu.NewbieHint2]: () => {
                            const e = z(),
                                u = x().mediaSize,
                                t = V(e, ye, Ne[u]),
                                i = V(e, ye, Le[u]),
                                a = V(e, ye, Re[u]),
                                r = V(e, ye, He[u]);
                            return n().createElement(
                                Q,
                                {
                                    title: R.strings.prebattle.hints.hint2.header(),
                                    description: R.strings.prebattle.hints.hint2.description(),
                                },
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_02.background',
                                    crop: !0,
                                }),
                                n().createElement(he, null),
                                n().createElement(
                                    'div',
                                    { className: B()(be, Ce), style: t },
                                    n().createElement('div', { className: ve }),
                                    n().createElement(
                                        'div',
                                        { className: we },
                                        R.strings.prebattle.hints.hint2.movement(),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: B()(be, Ce), style: i },
                                    n().createElement('div', { className: pe }),
                                    n().createElement(
                                        'div',
                                        { className: we },
                                        R.strings.prebattle.hints.hint2.firing(),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: B()(be, Ce), style: a },
                                    n().createElement('div', { className: xe }),
                                    n().createElement(
                                        'div',
                                        { className: we },
                                        R.strings.prebattle.hints.hint2.freeCam(),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: B()(be, Ce), style: r },
                                    n().createElement('div', { className: fe }),
                                    n().createElement(
                                        'div',
                                        { className: we },
                                        R.strings.prebattle.hints.hint2.turret(),
                                    ),
                                ),
                            );
                        },
                        [Xu.NewbieHint3]: () => {
                            const e = z(),
                                u = x().mediaSize,
                                t = V(e, Te, Oe[u]),
                                i = Te.height - e.height < 200;
                            return n().createElement(
                                Q,
                                {
                                    title: R.strings.prebattle.hints.hint3.header(),
                                    description: R.strings.prebattle.hints.hint3.description(),
                                },
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_03.background',
                                    crop: !0,
                                    className: B()(!i && Se.bgPadding),
                                }),
                                n().createElement(he, null),
                                n().createElement(
                                    'div',
                                    { className: B()(Se.label, Se.label__center), style: t },
                                    n().createElement('div', { className: Se.mouse }),
                                    n().createElement(
                                        'div',
                                        { className: Se.title },
                                        R.strings.prebattle.hints.hint3.orLabel(),
                                    ),
                                    n().createElement('div', { className: Se.shift }),
                                ),
                            );
                        },
                        [Xu.NewbieHint4]: () => {
                            const e = z(),
                                u = V(e, Ge, Ue),
                                t = V(e, Ge, ze),
                                i = V(e, Ge, $e),
                                a = B()(Me, ke);
                            return n().createElement(
                                Q,
                                {
                                    title: R.strings.prebattle.hints.hint4.header(),
                                    description: R.strings.prebattle.hints.hint4.description(),
                                },
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_04.background',
                                    crop: !0,
                                }),
                                n().createElement(he, null),
                                n().createElement(
                                    'div',
                                    { className: a, style: u },
                                    n().createElement(
                                        'div',
                                        { className: We },
                                        R.strings.prebattle.hints.hint4.view.header(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Ie },
                                        R.strings.prebattle.hints.hint4.view.description(),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: a, style: t },
                                    n().createElement(
                                        'div',
                                        { className: We },
                                        R.strings.prebattle.hints.hint4.immobilized.header(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Ie },
                                        R.strings.prebattle.hints.hint4.immobilized.description(),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Me, style: i },
                                    n().createElement(
                                        'div',
                                        { className: We },
                                        R.strings.prebattle.hints.hint4.shooting.header(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Ie },
                                        R.strings.prebattle.hints.hint4.shooting.description(),
                                    ),
                                ),
                            );
                        },
                        [Xu.NewbieHint5]: () => {
                            const e = z(),
                                u = x().mediaSize,
                                t = V(e, uu, tu[u]),
                                i = V(e, uu, iu[u]),
                                a = V(e, uu, nu[u]);
                            return n().createElement(
                                Q,
                                {
                                    title: R.strings.prebattle.hints.hint5.header(),
                                    description: R.strings.prebattle.hints.hint5.description(),
                                },
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_05.background',
                                    crop: !0,
                                }),
                                n().createElement(he, null),
                                n().createElement(
                                    'div',
                                    { className: Ye, style: t },
                                    n().createElement('div', { className: Qe }),
                                    n().createElement(
                                        'div',
                                        { className: je },
                                        n().createElement(
                                            'div',
                                            { className: qe },
                                            R.strings.prebattle.hints.hint5.fire.header(),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Ke },
                                            R.strings.prebattle.hints.hint5.fire.description(),
                                        ),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: B()(Ye, Ze), style: i },
                                    n().createElement(
                                        'div',
                                        { className: B()(je, Ve) },
                                        n().createElement(
                                            'div',
                                            { className: qe },
                                            R.strings.prebattle.hints.hint5.repair.header(),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Ke },
                                            R.strings.prebattle.hints.hint5.repair.description(),
                                        ),
                                    ),
                                    n().createElement('div', { className: Je }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Ye, style: a },
                                    n().createElement('div', { className: eu }),
                                    n().createElement(
                                        'div',
                                        { className: B()(je, Xe) },
                                        n().createElement(
                                            'div',
                                            { className: qe },
                                            R.strings.prebattle.hints.hint5.aid.header(),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Ke },
                                            R.strings.prebattle.hints.hint5.aid.description(),
                                        ),
                                    ),
                                ),
                            );
                        },
                        [Xu.NewbieHint6]: () => {
                            const e = z(),
                                u = j(e, ou, Au),
                                t = j(e, ou, du),
                                i = j(e, ou, mu),
                                a = j(e, ou, Fu);
                            return n().createElement(
                                Q,
                                {
                                    title: R.strings.prebattle.hints.hint6.header(),
                                    description: R.strings.prebattle.hints.hint6.description(),
                                },
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_06.background',
                                }),
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_06.area',
                                    hasBlind: !0,
                                }),
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_06.markers',
                                    hasBlind: !0,
                                }),
                                n().createElement(he, null),
                                n().createElement(
                                    'div',
                                    { className: B()(au, ru, Eu), style: u },
                                    n().createElement(
                                        'div',
                                        { className: su },
                                        R.strings.prebattle.hints.hint6.visible(),
                                    ),
                                    n().createElement('div', { className: lu }, R.strings.prebattle.hints.hint6.area()),
                                ),
                                n().createElement(
                                    'div',
                                    { className: B()(au, ru), style: t },
                                    n().createElement(
                                        'div',
                                        { className: su },
                                        R.strings.prebattle.hints.hint6.visible(),
                                    ),
                                    n().createElement('div', { className: lu }, R.strings.prebattle.hints.hint6.shot()),
                                ),
                                n().createElement(
                                    'div',
                                    { className: B()(au, cu), style: i },
                                    n().createElement(
                                        'div',
                                        { className: su },
                                        R.strings.prebattle.hints.hint6.invisible(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: lu },
                                        R.strings.prebattle.hints.hint6.object(),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: au, style: a },
                                    n().createElement(
                                        'div',
                                        { className: su },
                                        R.strings.prebattle.hints.hint6.invisible(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: lu },
                                        R.strings.prebattle.hints.hint6.vegetation(),
                                    ),
                                ),
                            );
                        },
                        [Xu.NewbieHint7]: () => {
                            const e = z(),
                                u = gu.map(({ point: u, style: t }) => ({ point: j(e, Du, u), style: t }));
                            return n().createElement(
                                Q,
                                {
                                    title: R.strings.prebattle.hints.hint7.header(),
                                    description: R.strings.prebattle.hints.hint7.description(),
                                },
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_07.background',
                                }),
                                n().createElement(he, null),
                                n().createElement(
                                    'div',
                                    { className: hu.block },
                                    n().createElement(
                                        'div',
                                        { className: hu.win },
                                        R.strings.prebattle.hints.hint7.victory(),
                                    ),
                                    n().createElement('div', { className: hu.progress }),
                                    n().createElement(
                                        'div',
                                        { className: hu.reason },
                                        R.strings.prebattle.hints.hint7.base(),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: B()(hu.block, hu.block__right) },
                                    n().createElement(
                                        'div',
                                        { className: hu.win },
                                        R.strings.prebattle.hints.hint7.victory(),
                                    ),
                                    n().createElement('div', { className: hu.markers }),
                                    n().createElement(
                                        'div',
                                        { className: hu.reason },
                                        R.strings.prebattle.hints.hint7.vehicles(),
                                    ),
                                ),
                                u.map(({ point: e, style: u }) =>
                                    n().createElement('div', {
                                        key: e.top,
                                        className: B()(hu.marker, hu[`marker__${u}`]),
                                        style: e,
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: hu.circle },
                                    n().createElement(
                                        'div',
                                        { className: hu.or },
                                        R.strings.prebattle.hints.hint7.orLabel(),
                                    ),
                                ),
                            );
                        },
                        [Xu.NewbieHint8]: () =>
                            n().createElement(
                                Q,
                                {
                                    title: R.strings.prebattle.hints.hint8.header(),
                                    description: R.strings.prebattle.hints.hint8.description(),
                                },
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_08.background',
                                }),
                                n().createElement(he, null),
                                n().createElement(
                                    'div',
                                    { className: Bu },
                                    n().createElement('div', { className: Cu }),
                                    n().createElement('div', { className: vu }, R.strings.prebattle.hints.hint8.high()),
                                ),
                                n().createElement(
                                    'div',
                                    { className: B()(Bu, bu) },
                                    n().createElement('div', { className: B()(Cu, wu) }),
                                    n().createElement('div', { className: vu }, R.strings.prebattle.hints.hint8.low()),
                                ),
                            ),
                        [Xu.NewbieHint9]: () =>
                            n().createElement(
                                Q,
                                {
                                    title: R.strings.prebattle.hints.hint9.header(),
                                    description: R.strings.prebattle.hints.hint9.description(),
                                },
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_09.background',
                                }),
                                n().createElement(he, null),
                            ),
                        [Xu.NewbieHint10]: () => {
                            const e = x().mediaSize,
                                u = z(),
                                t = e <= w.ExtraSmall,
                                i = t ? Hu : Ru,
                                a = t ? Mu : Ou,
                                r = t ? Pu : ku,
                                s = j(u, i, t ? Tu : Su),
                                l = j(u, i, a),
                                E = j(u, i, r);
                            return n().createElement(
                                Q,
                                {
                                    title: R.strings.prebattle.hints.hint10.header(),
                                    description: R.strings.prebattle.hints.hint10.description(),
                                },
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_10.background',
                                }),
                                n().createElement(he, null),
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_10.sniper',
                                }),
                                n().createElement(ce, {
                                    image:
                                        'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_10.guides_' +
                                        (t ? 'small' : 'big'),
                                }),
                                n().createElement(ce, {
                                    image: `R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_10.center_${e}`,
                                }),
                                n().createElement(
                                    'div',
                                    { className: B()(pu, xu, fu), style: s },
                                    n().createElement(
                                        'div',
                                        { className: yu },
                                        R.strings.prebattle.hints.hint10.penetration.header(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Nu },
                                        R.strings.prebattle.hints.hint10.penetration.description(),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: B()(pu, xu, fu), style: l },
                                    n().createElement(
                                        'div',
                                        { className: yu },
                                        R.strings.prebattle.hints.hint10.spread.header(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Nu },
                                        R.strings.prebattle.hints.hint10.spread.description(),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: B()(pu, Lu, fu), style: E },
                                    n().createElement(
                                        'div',
                                        { className: yu },
                                        R.strings.prebattle.hints.hint10.reloading.header(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Nu },
                                        R.strings.prebattle.hints.hint10.reloading.description(),
                                    ),
                                ),
                            );
                        },
                        [Xu.NewbieHint12]: () => {
                            const e = z(),
                                u = j(e, ju, qu),
                                t = j(e, ju, Vu),
                                i = B()(Wu, Iu);
                            return n().createElement(
                                Q,
                                {
                                    title: R.strings.prebattle.hints.hint12.header(),
                                    description: R.strings.prebattle.hints.hint12.description(),
                                },
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_12.background',
                                }),
                                n().createElement(he, null),
                                n().createElement(
                                    'div',
                                    { className: i, style: t },
                                    n().createElement(
                                        'div',
                                        { className: Gu },
                                        R.strings.prebattle.hints.hint12.notPenetrated.header(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: B()(Uu, zu) },
                                        R.strings.prebattle.hints.hint12.notPenetrated.description(),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: i, style: u },
                                    n().createElement(
                                        'div',
                                        { className: Gu },
                                        R.strings.prebattle.hints.hint12.penetrated.header(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: B()(Uu, $u) },
                                        R.strings.prebattle.hints.hint12.penetrated.description(),
                                    ),
                                ),
                            );
                        },
                        [Xu.NewbieHint13]: () => {
                            const e = z(),
                                u = j(e, Ku, Yu),
                                t = j(e, Ku, Zu),
                                i = B()(Me, Pe);
                            return n().createElement(
                                Q,
                                {
                                    title: R.strings.prebattle.hints.hint13.header(),
                                    description: R.strings.prebattle.hints.hint13.description(),
                                },
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_13.background',
                                }),
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_13.ally',
                                }),
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_13.enemy',
                                    hasBlind: !0,
                                }),
                                n().createElement(ce, {
                                    image: 'R.images.gui.maps.icons.battleLoading.hints.newbie_hints.hint_13.items',
                                }),
                                n().createElement(he, null),
                                n().createElement(
                                    'div',
                                    { className: i, style: u },
                                    n().createElement(
                                        'div',
                                        { className: We },
                                        R.strings.prebattle.hints.hint13.invisible.header(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Ie },
                                        R.strings.prebattle.hints.hint13.invisible.description(),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: i, style: t },
                                    n().createElement(
                                        'div',
                                        { className: We },
                                        R.strings.prebattle.hints.hint13.visible.header(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Ie },
                                        R.strings.prebattle.hints.hint13.visible.description(),
                                    ),
                                ),
                            );
                        },
                    },
                    Ju = 'App_base_4f',
                    et = 'App_status_0a',
                    ut = 'App_spinner_12',
                    tt = 'App_loading_11',
                    it = 'App_manual_57',
                    nt = 'App_manual__narrow_6c',
                    at = 'App_info_14',
                    rt = [Xu.NewbieHint13],
                    st = (0, P.Pi)(() => {
                        const e = se().model.get(),
                            u = e.hintType,
                            t = e.canSkip,
                            i = (0, W.useSpring)({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                config: { duration: 100 },
                                delay: 600,
                            }),
                            a = Qu[u];
                        return a
                            ? n().createElement(
                                  W.animated.div,
                                  { className: Ju, style: i },
                                  n().createElement(a, null),
                                  n().createElement(
                                      'div',
                                      { className: et },
                                      t
                                          ? R.strings.prebattle.hints.skip()
                                          : n().createElement(
                                                'div',
                                                { className: tt },
                                                n().createElement('div', { className: ut }),
                                                n().createElement('div', null, R.strings.prebattle.hints.loading()),
                                            ),
                                  ),
                                  n().createElement(
                                      'div',
                                      { className: B()(it, rt.includes(u) && nt) },
                                      R.strings.prebattle.hints.manual(),
                                      n().createElement('div', { className: at }),
                                  ),
                              )
                            : null;
                    });
                engine.whenReady.then(() => {
                    k().render(
                        n().createElement(
                            D,
                            null,
                            n().createElement(O, null, n().createElement(re, null, n().createElement(st, null))),
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
        (__webpack_require__.O = (e, u, t, i) => {
            if (!u) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [u, t, i] = deferred[l], a = !0, r = 0; r < u.length; r++)
                        (!1 & i || n >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[r]))
                            ? u.splice(r--, 1)
                            : ((a = !1), i < n && (n = i));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > i; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [u, t, i];
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
        (__webpack_require__.j = 188),
        (() => {
            var e = { 188: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var i,
                        n,
                        [a, r, s] = t,
                        l = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (i in r) __webpack_require__.o(r, i) && (__webpack_require__.m[i] = r[i]);
                        if (s) var E = s(__webpack_require__);
                    }
                    for (u && u(t); l < a.length; l++)
                        (n = a[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [532], () => __webpack_require__(3866));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
