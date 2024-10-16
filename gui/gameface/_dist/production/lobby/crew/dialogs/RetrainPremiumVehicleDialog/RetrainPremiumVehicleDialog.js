(() => {
    var __webpack_modules__ = {
            926: (u) => {
                u.exports = {
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
            527: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, { mouse: () => c, off: () => s, on: () => o, onResize: () => a, onScaleUpdated: () => i });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (u, e) => engine.on(u, e),
                    s = (u, e) => engine.off(u, e),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, r.R)(!0);
                    }
                    function n() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${e}`,
                                        i = l[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, o),
                                                (u.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2493: (u, e, t) => {
                'use strict';
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function r(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => r, G: () => n });
            },
            2472: (u, e, t) => {
                'use strict';
                function n(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => n });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => a });
                var n = t(5959),
                    r = t(514);
                const a = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => i });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((u, e) => ((u[e] = () => (0, n.playSound)(r[e])), u), {}),
                    i = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (u, e, t) => {
                'use strict';
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function r(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => r });
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
            7641: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getScale: () => B,
                        getSize: () => F,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => f,
                        isFocused: () => g,
                        pxToRem: () => C,
                        remToPx: () => m,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => x,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    i = t(8566);
                const o = 15;
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, o);
                }
                function c(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function A(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, o);
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function D(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: m(e.x), y: m(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function B() {
                    return viewEnv.getScale();
                }
                function C(u) {
                    return viewEnv.pxToRem(u);
                }
                function m(u) {
                    return viewEnv.remToPx(u);
                }
                function h(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function p() {
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
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
                        {},
                    ),
                    y = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    x = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : a.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    i = 32,
                    o = 64,
                    s = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    l = {
                        close(u) {
                            s('popover' === u ? r : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(u) {
                            s(a, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
                'use strict';
                let n, r;
                t.d(e, { n: () => n }),
                    (function (u) {
                        (u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9');
                    })(n || (n = {})),
                    (function (u) {
                        (u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock');
                    })(r || (r = {}));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var n = t(3138);
                class r {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(u, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
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
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(u) {
                        this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data);
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (u, e, t) => {
                'use strict';
                t.d(e, { Sw: () => a.Z, B0: () => o, ry: () => B, Eu: () => C });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                var a = t(1358);
                var i = t(8613);
                let o;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    F = t(3138);
                const d = ['args'];
                function D(u, e, t, n, r, a, i) {
                    try {
                        var o = u[a](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(n, r);
                }
                const _ = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    B = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (n, r) {
                                        var a = u.apply(e, t);
                                        function i(u) {
                                            D(a, n, r, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            D(a, n, r, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    m = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, d);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    h = () => m(o.CLOSE),
                    g = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var p = t(7572);
                const f = r.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: _,
                        sendMoveEvent: (u) => m(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => m(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            m(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), a) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                A = s.height,
                                d = {
                                    x: F.O.view.pxToRem(l) + i.x,
                                    y: F.O.view.pxToRem(c) + i.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(A),
                                };
                            m(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: _(d),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, h);
                        },
                        handleViewEvent: m,
                        onBindingsReady: B,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const r = Object.prototype.toString.call(e[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < r.length; e++) t[n].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    r = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            3622: (u, e, t) => {
                'use strict';
                var n = t(6179),
                    r = t.n(n);
                const a = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var i = t(3138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function l(u, e, t) {
                    const n = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, t),
                        r = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, t),
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
                !(function (u) {
                    (u.extraLarge = 'extraLarge'),
                        (u.large = 'large'),
                        (u.medium = 'medium'),
                        (u.small = 'small'),
                        (u.extraSmall = 'extraSmall'),
                        (u.extraLargeWidth = 'extraLargeWidth'),
                        (u.largeWidth = 'largeWidth'),
                        (u.mediumWidth = 'mediumWidth'),
                        (u.smallWidth = 'smallWidth'),
                        (u.extraSmallWidth = 'extraSmallWidth'),
                        (u.extraLargeHeight = 'extraLargeHeight'),
                        (u.largeHeight = 'largeHeight'),
                        (u.mediumHeight = 'mediumHeight'),
                        (u.smallHeight = 'smallHeight'),
                        (u.extraSmallHeight = 'extraSmallHeight');
                })(s || (s = {}));
                const c = i.O.client.getSize('rem'),
                    E = c.width,
                    A = c.height,
                    F = Object.assign({ width: E, height: A }, l(E, A, o)),
                    d = (0, n.createContext)(F),
                    D = ['children'];
                const _ = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, D);
                    const r = (0, n.useContext)(d),
                        i = r.extraLarge,
                        o = r.large,
                        s = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        E = r.extraLargeWidth,
                        A = r.largeWidth,
                        F = r.mediumWidth,
                        _ = r.smallWidth,
                        B = r.extraSmallWidth,
                        C = r.extraLargeHeight,
                        m = r.largeHeight,
                        h = r.mediumHeight,
                        g = r.smallHeight,
                        p = r.extraSmallHeight,
                        f = { extraLarge: C, large: m, medium: h, small: g, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && o) return e;
                        if (t.medium && s) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return a(e, t, f);
                        if (t.largeWidth && A) return a(e, t, f);
                        if (t.mediumWidth && F) return a(e, t, f);
                        if (t.smallWidth && _) return a(e, t, f);
                        if (t.extraSmallWidth && B) return a(e, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return e;
                            if (t.largeHeight && m) return e;
                            if (t.mediumHeight && h) return e;
                            if (t.smallHeight && g) return e;
                            if (t.extraSmallHeight && p) return e;
                        }
                    }
                    return null;
                };
                _.defaultProps = {
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
                (0, n.memo)(_);
                const B = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    C = ({ children: u }) => {
                        const e = (0, n.useContext)(d),
                            t = (0, n.useState)(e),
                            a = t[0],
                            s = t[1],
                            c = (0, n.useCallback)((u, e) => {
                                const t = i.O.view.pxToRem(u),
                                    n = i.O.view.pxToRem(e);
                                s(Object.assign({ width: t, height: n }, l(t, n, o)));
                            }, []),
                            E = (0, n.useCallback)(() => {
                                const u = i.O.client.getSize('px');
                                c(u.width, u.height);
                            }, [c]);
                        B(() => {
                            i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', E);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', c),
                                        i.O.client.events.off('self.onScaleUpdated', E);
                                },
                                [c, E],
                            );
                        const A = (0, n.useMemo)(() => Object.assign({}, a), [a]);
                        return r().createElement(d.Provider, { value: A }, u);
                    };
                var m = t(6483),
                    h = t.n(m),
                    g = t(926),
                    p = t.n(g);
                let f, b, v;
                !(function (u) {
                    (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = o.small.width)] = 'Small'),
                        (u[(u.Medium = o.medium.width)] = 'Medium'),
                        (u[(u.Large = o.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.width)] = 'Small'),
                            (u[(u.Medium = o.medium.width)] = 'Medium'),
                            (u[(u.Large = o.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.height)] = 'Small'),
                            (u[(u.Medium = o.medium.height)] = 'Medium'),
                            (u[(u.Large = o.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const w = () => {
                        const u = (0, n.useContext)(d),
                            e = u.width,
                            t = u.height,
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return f.ExtraLarge;
                                    case u.large:
                                        return f.Large;
                                    case u.medium:
                                        return f.Medium;
                                    case u.small:
                                        return f.Small;
                                    case u.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(u),
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case u.largeWidth:
                                        return b.Large;
                                    case u.mediumWidth:
                                        return b.Medium;
                                    case u.smallWidth:
                                        return b.Small;
                                    case u.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case u.largeHeight:
                                        return v.Large;
                                    case u.mediumHeight:
                                        return v.Medium;
                                    case u.smallHeight:
                                        return v.Small;
                                    case u.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: r, mediaWidth: a, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function x() {
                    return (
                        (x = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        x.apply(null, arguments)
                    );
                }
                const T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL_WIDTH,
                        [b.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [b.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL_HEIGHT,
                        [v.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [v.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL,
                        [f.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [f.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [f.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    S = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, y);
                        const a = w(),
                            i = a.mediaWidth,
                            o = a.mediaHeight,
                            s = a.mediaSize;
                        return r().createElement('div', x({ className: h()(t, T[i], k[o], L[s]) }, n), e);
                    },
                    O = ['children'];
                const M = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, O);
                    return r().createElement(C, null, r().createElement(S, t, e));
                };
                var N = t(493),
                    P = t.n(N);
                var I = t(1281);
                let H;
                function W(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function $(u) {
                    return u[0].toUpperCase() + u.slice(1);
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(H || (H = {}));
                const j = (u) => u.replace(/&nbsp;/g, ' '),
                    G = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    U = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    V = (u, e, t = H.left) => u.split(e).reduce(t === H.left ? G : U, []),
                    z = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    q = ['zh_cn', 'zh_sg', 'zh_tw'],
                    K = (u, e = H.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (q.includes(t)) return z(u);
                        if ('ja' === t) {
                            return (0, I.D4)()
                                .parse(u)
                                .map((u) => j(u));
                        }
                        return ((u, e = H.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = j(u);
                            return V(r, /( )/, e).forEach((u) => (t = t.concat(V(u, n, H.left)))), t;
                        })(u, e);
                    };
                var Y = t(9916),
                    X = t(8613);
                Date.now(), X.Ew.getRegionalDateTime, X.Ew.getFormattedDateTime;
                const Z = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            n = R.invalid('resId');
                        return (
                            e &&
                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (n = window.subViews[t].id)),
                            { caller: t, stack: e, resId: n }
                        );
                    },
                    Q = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    J = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    uu = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    eu = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = Q(`${u}.${t}`, window);
                                return J(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    tu = (u) => {
                        const e = ((u) => {
                                const e = Z(),
                                    t = e.caller,
                                    n = e.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: uu(r, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const r = Q(uu(t, `${e}.${n}`), window);
                                    return J(r) ? (u.push(r.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    nu = Y.Sw.instance;
                let ru;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(ru || (ru = {}));
                const au = (u = 'model', e = ru.Deep) => {
                    const t = (0, n.useState)(0),
                        r = (t[0], t[1]),
                        a = (0, n.useMemo)(() => Z(), []),
                        i = a.caller,
                        o = a.resId,
                        s = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${u}` : u),
                            [i, u],
                        ),
                        l = (0, n.useState)(() =>
                            ((u) => {
                                const e = Q(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return J(e) ? e.value : e;
                            })(eu(s)),
                        ),
                        c = l[0],
                        E = l[1],
                        A = (0, n.useRef)(-1);
                    return (
                        B(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? ru.Deep : ru.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== ru.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === ru.Deep
                                            ? (u === c && r((u) => u + 1), E(u))
                                            : E(Object.assign([], u));
                                    },
                                    n = tu(u);
                                A.current = nu.addCallback(n, t, o, e === ru.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (e !== ru.None)
                                return () => {
                                    nu.removeCallback(A.current, o);
                                };
                        }, [o, e]),
                        c
                    );
                };
                Y.Sw.instance;
                var iu = t(5521);
                const ou = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function su(u = iu.n.NONE, e = ou, t = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== iu.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!r && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t, r]);
                }
                const lu = /<link.*?>/g,
                    cu = /\.\.\//g,
                    Eu = /<script.*?>/g,
                    Au = 'default.css',
                    Fu = (u) => {
                        const e = u.match(cu);
                        return e && e.join('');
                    },
                    du = () => {
                        for (
                            var u = 0, e = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            u < e.length;
                            u++
                        ) {
                            const t = e[u];
                            if (!t.href.includes(Au)) return t.href;
                        }
                        return '';
                    },
                    Du = (u) => {
                        const e = du(),
                            t = Fu(e);
                        let n,
                            r = u;
                        for (; null !== (n = Eu.exec(u)); ) {
                            const u = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (u) {
                                const e = t + u[2].replace(cu, '');
                                r = r.replace(u[2], e);
                            }
                        }
                        return r;
                    },
                    _u = 'SubView_base_df',
                    Bu = 'subViews.onChanged',
                    Cu = 'subView:inject->',
                    mu = (() => {
                        const u = [];
                        let e = !1;
                        const t = () => {
                            if (!u.length) return void (e = !1);
                            const n = u.shift();
                            n && ((e = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                u.push(n), e || t();
                            },
                        };
                    })(),
                    hu = (0, n.memo)(({ id: u, fallback: e, onLoadCallback: t, mixClass: a }) => {
                        const i = (0, n.useState)(''),
                            o = i[0],
                            s = i[1],
                            l = (0, n.useMemo)(() => ({ __html: Du(o) }), [o]),
                            c = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(u), [u]),
                            E = (0, n.useState)(!1),
                            A = E[0],
                            F = E[1],
                            d = (0, n.useCallback)(
                                (u) => {
                                    u.includes(c) &&
                                        (F(!0), engine.off(Bu, d), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            D = (0, n.useCallback)((u) => {
                                mu.add(
                                    () =>
                                        new Promise((e) => {
                                            s(u);
                                            const t = new MutationObserver(() => {
                                                    t.disconnect(), e();
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(u)) {
                                const e = window.subViews.get(u),
                                    t = e.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: u }, e)),
                                        engine.on(`${Cu}${n}`, D),
                                        (({ path: u, name: e }) => {
                                            const t = new XMLHttpRequest();
                                            (t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, Y.Eu)().then(() => {
                                                              console.info(`Sub view ${e} loaded: ${u}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${e}`,
                                                                      t.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${t.status} - can't get bundle`,
                                                          ));
                                            }),
                                                t.open('GET', u),
                                                t.send();
                                        })({ name: n, path: t }),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: u }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(u),
                                                engine.off(`${Cu}${n}`, D),
                                                console.info(`Sub view ${n} is destroyed: ${t}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(Bu, d);
                        }, [d, D, u, A]),
                            (0, n.useEffect)(
                                () => () => {
                                    o &&
                                        ((u) => {
                                            const e = Fu(du());
                                            let t;
                                            for (; null !== (t = lu.exec(u)); ) {
                                                const u = t[0].match(/href="(.*?)"/);
                                                if (u) {
                                                    const t = e + u[1].replace(cu, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(o);
                                },
                                [o],
                            );
                        const _ = h()(_u, a);
                        if (o) {
                            let e;
                            return (
                                (e = document.getElementById('root')) && e.setAttribute('id', 'bugSubView'),
                                ((u) => {
                                    let e;
                                    const t = du(),
                                        n = Fu(t);
                                    for (; null !== (e = lu.exec(u)); ) {
                                        const u = e[0].match(/href="(.*?)"/);
                                        if (u && !u[1].includes(Au) && n) {
                                            const e = n + u[1].replace(cu, ''),
                                                t = document.createElement('link');
                                            (t.href = e), (t.rel = 'stylesheet'), document.head.appendChild(t);
                                        }
                                    }
                                })(o),
                                t && t(u),
                                r().createElement('div', { className: _, dangerouslySetInnerHTML: l })
                            );
                        }
                        return e ? r().createElement('div', { className: _ }, r().createElement(e, null)) : null;
                    });
                function gu(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const pu = {
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
                let fu, bu;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(fu || (fu = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(bu || (bu = {}));
                const vu = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: a,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: A,
                    onMouseUp: F,
                    onMouseLeave: d,
                    onClick: D,
                }) => {
                    const _ = (0, n.useRef)(null),
                        B = (0, n.useState)(t),
                        C = B[0],
                        m = B[1],
                        g = (0, n.useState)(!1),
                        p = g[0],
                        f = g[1];
                    return (
                        (0, n.useEffect)(() => {
                            function u(u) {
                                C && null !== _.current && !_.current.contains(u.target) && m(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [C]),
                        (0, n.useEffect)(() => {
                            m(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: _,
                                className: h()(
                                    pu.base,
                                    pu[`base__${a}`],
                                    i && pu.base__disabled,
                                    e && pu[`base__${e}`],
                                    C && pu.base__focus,
                                    p && pu.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (u) {
                                    i || (null !== s && gu(s), c && c(u));
                                },
                                onMouseMove: function (u) {
                                    E && E(u);
                                },
                                onMouseUp: function (u) {
                                    i || (F && F(u), f(!1));
                                },
                                onMouseDown: function (u) {
                                    i ||
                                        (null !== l && gu(l),
                                        A && A(u),
                                        t && (i || (_.current && (_.current.focus(), m(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (u) {
                                    i || (d && d(u), f(!1));
                                },
                                onClick: function (u) {
                                    i || (D && D(u));
                                },
                            },
                            a !== fu.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: pu.back }),
                                    r().createElement('span', { className: pu.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: h()(pu.state, pu.state__default) },
                                r().createElement('span', { className: pu.stateDisabled }),
                                r().createElement('span', { className: pu.stateHighlightHover }),
                                r().createElement('span', { className: pu.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: pu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                vu.defaultProps = { type: fu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const wu = vu,
                    yu = [
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
                function xu(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const Tu = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Y.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    ku = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            a = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            A = void 0 !== E && E,
                            F = u.decoratorId,
                            d = void 0 === F ? 0 : F,
                            D = u.isEnabled,
                            _ = void 0 === D || D,
                            B = u.targetId,
                            C = void 0 === B ? 0 : B,
                            m = u.onShow,
                            h = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, yu);
                        const p = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(() => C || Z().resId, [C]),
                            b = (0, n.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (Tu(t, d, { isMouseEvent: !0, on: !0, arguments: xu(r) }, f),
                                    m && m(),
                                    (p.current.isVisible = !0));
                            }, [t, d, r, f, m]),
                            v = (0, n.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        Tu(t, d, { on: !1 }, f),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, d, f, h]),
                            w = (0, n.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const u = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === _ && v();
                            }, [_, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return _
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                      a && a(u),
                                                      y && y(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              v(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && v(), null == s || s(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && v(), null == o || o(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : e;
                        var y;
                    },
                    Lu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Su() {
                    return (
                        (Su = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Su.apply(null, arguments)
                    );
                }
                const Ou = R.views.common.tooltip_window.simple_tooltip_content,
                    Mu = (u) => {
                        let e = u.children,
                            t = u.body,
                            a = u.header,
                            i = u.note,
                            o = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, Lu);
                        const c = (0, n.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: a, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, a, i, s]);
                        return r().createElement(
                            ku,
                            Su(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? Ou.SimpleTooltipHtmlContent('resId') : Ou.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            e,
                        );
                        var E;
                    },
                    Nu = 'TextOverflow_base_3b',
                    Ru = ['content', 'classMix', 'className'];
                function Pu() {
                    return (
                        (Pu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Pu.apply(null, arguments)
                    );
                }
                const Iu = (u) => {
                    let e = u.content,
                        t = u.classMix,
                        a = u.className,
                        i = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, Ru);
                    const o = (0, n.useRef)(null),
                        s = (0, n.useState)(!0),
                        l = s[0],
                        c = s[1];
                    return (
                        (0, n.useEffect)(() =>
                            ((u) => {
                                let e,
                                    t = null;
                                return (
                                    (t = requestAnimationFrame(() => {
                                        t = requestAnimationFrame(() => {
                                            (t = null), (e = u());
                                        });
                                    })),
                                    () => {
                                        'function' == typeof e && e(), null !== t && cancelAnimationFrame(t);
                                    }
                                );
                            })(() => {
                                const u = o.current;
                                u && u.offsetWidth >= u.scrollWidth && c(!1);
                            }),
                        ),
                        r().createElement(
                            Mu,
                            { isEnabled: l, body: e },
                            r().createElement('div', Pu({}, i, { ref: o, className: h()(Nu, a, t) }), e),
                        )
                    );
                };
                let Hu;
                !(function (u) {
                    (u.backport = 'backport'), (u.normal = 'normal'), (u.absent = 'absent');
                })(Hu || (Hu = {}));
                const Wu = 'DialogTemplateButton_base_0b',
                    $u = 'DialogTemplateButton_label_83',
                    ju = 'DialogTemplateButton_label__noTooltip_14',
                    Gu = (0, n.memo)(
                        ({ onClick: u, isFocused: e, buttonID: t, isDisabled: a, label: i, tooltip: o, type: s }) => {
                            const l = (0, n.useCallback)(() => {
                                    u({ buttonID: t });
                                }, [u, t]),
                                c = (0, n.useMemo)(() => {
                                    return (
                                        (u = o.type),
                                        (e = { buttonID: t }),
                                        {
                                            isEnabled: u !== Hu.absent,
                                            args: e,
                                            contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                            decoratorId:
                                                u === Hu.normal
                                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                          'resId',
                                                      )
                                                    : void 0,
                                            ignoreShowDelay: u === Hu.backport,
                                            ignoreMouseClick: !0,
                                        }
                                    );
                                    var u, e;
                                }, [o.type, t]),
                                E = h()($u, o.type !== Hu.absent && ju);
                            return r().createElement(
                                ku,
                                c,
                                r().createElement(
                                    'div',
                                    { className: Wu },
                                    r().createElement(
                                        wu,
                                        { size: bu.medium, type: s, disabled: a, onClick: l, isFocused: e },
                                        r().createElement(Iu, { classMix: E, content: i || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Uu = 'DialogTemplateButtonList_base_8e';
                function Vu() {
                    return (
                        (Vu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Vu.apply(null, arguments)
                    );
                }
                const zu = (0, n.memo)(() => {
                        const u = au('model').onButtonClicked,
                            e = au('model.focus'),
                            t = e.focusedIndex,
                            a = e.onTabPressed,
                            i = au('model.buttons'),
                            o = (0, n.useCallback)(
                                (u) => {
                                    a({ shift: u.shiftKey });
                                },
                                [a],
                            );
                        su(iu.n.TAB, o);
                        const s = (0, n.useCallback)(
                            (e) => {
                                if (t < 0 || t >= i.length) return;
                                const n = i[t].value;
                                e.altKey || n.isDisabled || u({ buttonID: n.buttonID });
                            },
                            [i, t, u],
                        );
                        return (
                            su(iu.n.ENTER, s),
                            r().createElement(
                                'div',
                                { className: Uu },
                                i.map(({ value: e }, n) =>
                                    r().createElement(Gu, Vu({ key: e.buttonID, isFocused: n === t, onClick: u }, e)),
                                ),
                            )
                        );
                    }),
                    qu = 'DialogTemplateWrapper_base_f7',
                    Ku = 'DialogTemplateWrapper_base__hidden_5f',
                    Yu = 'DialogTemplateWrapper_subView_30';
                function Xu() {
                    return (
                        (Xu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Xu.apply(null, arguments)
                    );
                }
                const Zu = (0, n.memo)(({ Template: u }) => {
                        const e = au('model', ru.None),
                            t = e.onCloseClicked,
                            a = e.placeHolders,
                            i = e.background,
                            o = e.dimmerAlpha,
                            s = e.displayFlags;
                        (0, n.useEffect)(() => {
                            const u = document.getElementById('root');
                            u && u.setAttribute('id', 'stubDialogTemplate');
                        }, []);
                        const l = s.map(({ value: u }) => u),
                            c = (0, n.useRef)(a.map(({ value: u }) => u.resourceID)),
                            E = (0, n.useState)(0 !== c.current.length),
                            A = E[0],
                            F = E[1],
                            d = (0, n.useCallback)(
                                (u = 'default') => {
                                    t({ reason: u });
                                },
                                [t],
                            ),
                            D = (0, n.useCallback)(() => {
                                d('escape');
                            }, [d]);
                        var _;
                        (_ = D), su(iu.n.ESCAPE, _);
                        const B = (0, n.useCallback)((u) => {
                                const e = c.current,
                                    t = e.indexOf(u);
                                t > -1 && (e.splice(t, 1), 0 === e.length && F(!1));
                            }, []),
                            m = (0, n.useMemo)(() => {
                                const u = { backgroundColor: `rgba(19, 18, 16, ${o})` };
                                return i && (u.backgroundImage = `url(${i})`), u;
                            }, [i, o]),
                            g = (0, n.useMemo)(
                                () =>
                                    a.reduce(
                                        (u, { value: e }) => (
                                            (u[e.placeHolder] = r().createElement(hu, {
                                                key: e.placeHolder,
                                                id: e.resourceID,
                                                mixClass: Yu,
                                                onLoadCallback: B,
                                            })),
                                            u
                                        ),
                                        {},
                                    ),
                                [B, a],
                            ),
                            p = h()(qu, A && Ku);
                        return r().createElement(
                            C,
                            null,
                            r().createElement(
                                'div',
                                { className: p, style: m },
                                r().createElement(
                                    u,
                                    Xu(
                                        {
                                            onClose: d,
                                            buttons: r().createElement(zu, null),
                                            displayFlags: l,
                                            isShown: !A,
                                        },
                                        g,
                                    ),
                                ),
                            ),
                        );
                    }),
                    Qu = 'FormatText_base_d0',
                    Ju = ({ binding: u, text: e = '', classMix: t, alignment: a = H.left, formatWithBrackets: i }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const o = i && u ? W(e, u) : e;
                        return r().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((e, i) =>
                                r().createElement(
                                    'div',
                                    { className: h()(Qu, t), key: `${e}-${i}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : K(u, e))))(
                                        e,
                                        a,
                                        u,
                                    ).map((u, e) => r().createElement(n.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    ue = {
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
                    ee = [
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
                function te() {
                    return (
                        (te = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        te.apply(null, arguments)
                    );
                }
                class ne extends r().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && gu(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && gu(this.props.soundClick);
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                u && u(e), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            n = u.goto,
                            a = u.side,
                            i = u.type,
                            o = u.classNames,
                            s = u.onMouseEnter,
                            l = u.onMouseLeave,
                            c = u.onMouseDown,
                            E = u.onMouseUp,
                            A =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(u, ee)),
                            F = h()(ue.base, ue[`base__${i}`], ue[`base__${a}`], null == o ? void 0 : o.base),
                            d = h()(ue.icon, ue[`icon__${i}`], ue[`icon__${a}`], null == o ? void 0 : o.icon),
                            D = h()(ue.glow, null == o ? void 0 : o.glow),
                            _ = h()(ue.caption, ue[`caption__${i}`], null == o ? void 0 : o.caption),
                            B = h()(ue.goto, null == o ? void 0 : o.goto);
                        return r().createElement(
                            'div',
                            te(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== i && r().createElement('div', { className: ue.shine }),
                            r().createElement('div', { className: d }, r().createElement('div', { className: D })),
                            r().createElement('div', { className: _ }, e),
                            n && r().createElement('div', { className: B }, n),
                        );
                    }
                }
                let re;
                (ne.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (u) {
                        (u.responsiveHeader = 'responsiveHeader'),
                            (u.responsiveClosePosition = 'responsiveClosePosition'),
                            (u.disableResponsiveContentPosition = 'disableResponsiveContentPosition');
                    })(re || (re = {}));
                function ae(u, e, t) {
                    const r = (0, n.useContext)(d);
                    let a = Object.entries(r).filter(([u, e]) => !0 === e && u in s);
                    return (
                        t && (a = a.filter((u) => t.includes(u[0]))),
                        u.reduce((u, t) => {
                            const n = a.map((u) =>
                                h()(e[((u, e) => u + '__' + e)(t, u[0])], e[((u, e) => u + $(e))(t, u[0])]),
                            );
                            return (u[t] = h()(e[t], ...n)), u;
                        }, {})
                    );
                }
                const ie = {
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
                    oe = (0, n.memo)(
                        ({
                            isShown: u = !0,
                            classMix: e,
                            onClose: t,
                            icon: a,
                            topRight: i,
                            title: o,
                            content: s,
                            buttons: l,
                            footer: c,
                            displayFlags: E,
                            classNames: A,
                        }) => {
                            const F = ((u, e) => Object.keys(e).reduce((e, t) => ((e[t] = u.includes(t)), e), {}))(
                                    E,
                                    re,
                                ),
                                d = F.responsiveHeader,
                                D = F.responsiveClosePosition,
                                _ = F.disableResponsiveContentPosition,
                                B = ae(['base'], ie),
                                C = (0, n.useCallback)(() => {
                                    t && t();
                                }, [t]),
                                m = h()(B.base, e),
                                g = h()(
                                    ie.center,
                                    a && ie.center__withIcon,
                                    u && ie.center__shown,
                                    !_ && ie.center__responsive,
                                    null == A ? void 0 : A.center,
                                ),
                                p = h()(ie.icon, d && ie.icon__responsive, null == A ? void 0 : A.icon),
                                f = h()(ie.title, d && ie.title__responsive),
                                b = h()(ie.closeBtn, D && ie.closeBtn__responsive),
                                v = h()(
                                    ie.divider,
                                    !s && ie.divider__noContent,
                                    !c && ie.divider__noFooter,
                                    null == A ? void 0 : A.divider,
                                );
                            return r().createElement(
                                'div',
                                { className: m },
                                r().createElement(
                                    'div',
                                    { className: ie.topRight },
                                    i,
                                    r().createElement(
                                        'div',
                                        { className: b },
                                        r().createElement(ne, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: C,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: g },
                                    a && r().createElement('div', { className: p }, a),
                                    o && r().createElement('div', { className: f }, o),
                                    s && r().createElement('div', { className: ie.content }, s),
                                    r().createElement('div', { className: v }),
                                    c && r().createElement('div', { className: ie.footer }, c),
                                    l && r().createElement('div', { className: ie.buttons }, l),
                                ),
                            );
                        },
                    );
                var se = t(3403);
                const le = ['children'];
                function ce() {
                    return (
                        (ce = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        ce.apply(null, arguments)
                    );
                }
                const Ee = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, le);
                    return r().createElement(
                        ku,
                        ce(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        e,
                    );
                };
                function Ae() {
                    return (
                        (Ae = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Ae.apply(null, arguments)
                    );
                }
                const Fe = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const n = r().createElement('div', { className: t }, u);
                    if (e.header || e.body) return r().createElement(Mu, e, n);
                    const a = e.contentId;
                    return a ? r().createElement(ku, Ae({}, e, { contentId: a }), n) : r().createElement(Ee, e, n);
                };
                var de = t(8045);
                const De = {
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
                let _e, Be, Ce;
                !(function (u) {
                    (u[(u.Word = 0)] = 'Word'),
                        (u[(u.LineBreak = 1)] = 'LineBreak'),
                        (u[(u.NewLine = 2)] = 'NewLine'),
                        (u[(u.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (u[(u.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (u[(u.Binding = 5)] = 'Binding');
                })(_e || (_e = {})),
                    (function (u) {
                        (u.FlexStart = 'flex-start'), (u.Center = 'center'), (u.FlexEnd = 'flex-end');
                    })(Be || (Be = {})),
                    (function (u) {
                        (u.NBSP = ' '), (u.ZWNBSP = '\ufeff'), (u.NEW_LINE = '\n');
                    })(Ce || (Ce = {}));
                const me = { [Ce.NBSP]: _e.NoBreakSymbol, [Ce.ZWNBSP]: _e.NoBreakSymbol, [Ce.NEW_LINE]: _e.LineBreak },
                    he = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    ge = {
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
                    pe = 'renderers_noBreakWrapper_10',
                    fe = 'renderers_lineBreak_b5',
                    be = 'renderers_newLine_bd',
                    ve = 'renderers_word_f3',
                    we = (u) => ({ color: `#${u}` }),
                    ye = ({ elementList: u, textBlock: e, key: t }) => {
                        const n = e.colorTag;
                        return n
                            ? ge[n]
                                ? r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: h()(ve, ge[n]) },
                                      u,
                                  )
                                : r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: ve, style: we(n) },
                                      u,
                                  )
                            : r().createElement('span', { key: t, 'data-block-type': e.blockType, className: ve }, u);
                    },
                    xe = {
                        [_e.Word]: ye,
                        [_e.NoBreakSymbol]: ye,
                        [_e.Binding]: ({ elementList: u, textBlock: e, key: t }) =>
                            r().createElement(
                                'span',
                                { key: t, 'data-block-type': e.blockType },
                                u.map((u) => r().createElement(r().Fragment, { key: t }, u)),
                            ),
                        [_e.LineBreak]: ({ key: u }) =>
                            r().createElement('span', { key: u, 'data-block-type': _e.LineBreak, className: fe }),
                        [_e.NewLine]: ({ elementList: u, key: e }) =>
                            r().createElement('span', { key: e, 'data-block-type': _e.NewLine, className: be }, u),
                        [_e.NoBreakWrapper]: ({ elementList: u, key: e }) =>
                            r().createElement(
                                'span',
                                { key: e, 'data-block-type': _e.NoBreakWrapper, className: pe },
                                u,
                            ),
                    },
                    Te = (u, e, t) => {
                        const n = [];
                        return (
                            u.childList.forEach((r, a) => {
                                const i = `${t}_${a}`;
                                if (((u) => void 0 !== u.childList)(r)) {
                                    const u = r,
                                        e = u.blockType,
                                        t = Te(u, xe[e], i);
                                    n.push(...t);
                                } else n.push(e({ elementList: [r], textBlock: u, key: i }));
                            }),
                            n
                        );
                    },
                    ke = (u) => {
                        const e = [];
                        return (
                            u.forEach((u, t) => {
                                e.push(
                                    ...((u, e) => {
                                        const t = [],
                                            n = u.blockType,
                                            r = xe[n],
                                            a = Te(u, r, e);
                                        return (
                                            n === _e.NoBreakWrapper
                                                ? t.push(r({ elementList: a, textBlock: u, key: `${e}` }))
                                                : t.push(...a),
                                            t
                                        );
                                    })(u, t),
                                );
                            }),
                            e
                        );
                    },
                    Le = (u, e, t, n) => {
                        let r = e.exec(u),
                            a = 0;
                        for (; r; ) a !== r.index && t(u.slice(a, r.index)), n(r), (a = e.lastIndex), (r = e.exec(u));
                        a !== u.length && t(u.slice(a));
                    },
                    Se = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    Oe = (u) => {
                        const e = [];
                        return (
                            Le(
                                u,
                                /\S\s+/g,
                                (u) => {
                                    var t;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? e.push(...((t = u), t.match(Se) || []))
                                        : e.push(...u.split(''));
                                },
                                (u) => {
                                    e.push(u[0]);
                                },
                            ),
                            e
                        );
                    },
                    Me = he
                        ? (u) => {
                              const e = [];
                              return (
                                  Le(
                                      u,
                                      /[^a-zA-Z0-9]+/g,
                                      (u) => {
                                          e.push(u);
                                      },
                                      (u) => {
                                          e.push(...Oe(u[0]));
                                      },
                                  ),
                                  e
                              );
                          }
                        : (u, e) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(u);
                              if (!n) return [u];
                              const r = [];
                              let a = 0;
                              for (; n; ) {
                                  const i = e.justifyContent === Be.FlexEnd ? n.index : t.lastIndex;
                                  r.push(u.slice(a, i)), (a = i), (n = t.exec(u));
                              }
                              return a !== u.length && r.push(u.slice(a)), r;
                          },
                    Ne = (u, e = '', t) => {
                        const n = [];
                        return (
                            Le(
                                u,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (u) => {
                                    n.push({ blockType: _e.Word, colorTag: e, childList: Me(u, t) });
                                },
                                (u) => {
                                    const t = u[0],
                                        r = me[t.charAt(0)];
                                    r === _e.LineBreak
                                        ? n.push(
                                              ...((u) => {
                                                  const e = [
                                                      {
                                                          blockType: _e.LineBreak,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < u.length - 1; t++)
                                                      e.push({
                                                          blockType: _e.NewLine,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      });
                                                  return e;
                                              })(t),
                                          )
                                        : n.push({ blockType: r, colorTag: e, childList: [t] });
                                },
                            ),
                            n
                        );
                    },
                    Re = (u, e, t = '', n) => {
                        const r = [];
                        return (
                            Le(
                                u,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (u) => {
                                    r.push(...Ne(u, t, n));
                                },
                                (u) => {
                                    const a = u[1],
                                        i = void 0 === e[a] ? u[0] : e[a];
                                    'string' == typeof i || 'number' == typeof i
                                        ? r.push(...Ne(String(i), t, n))
                                        : r.push({ blockType: _e.Binding, colorTag: t, childList: [i] });
                                },
                            ),
                            r
                        );
                    },
                    Pe = (u, e) => {
                        if (!u) return [e];
                        const t = [],
                            n = Object.assign({}, e, { childList: e.childList.splice(0, 1) });
                        if (u.blockType === _e.NoBreakWrapper) u.childList.push(n), t.push(u);
                        else {
                            const e = Object.assign({}, u, { childList: u.childList.splice(-1) });
                            u.childList.length > 0 && t.push(u),
                                t.push({ blockType: _e.NoBreakWrapper, colorTag: '', childList: [e, n] });
                        }
                        return e.childList.length > 0 && t.push(e), t;
                    },
                    Ie = (u, e = {}, t) => {
                        if (!u) return [];
                        const n = ((u) => {
                            const e = [];
                            let t = !1;
                            return (
                                u.forEach((u) => {
                                    u.blockType === _e.NoBreakSymbol
                                        ? ((t = !0), e.push(...Pe(e.pop(), u)))
                                        : (t ? e.push(...Pe(e.pop(), u)) : e.push(u), (t = !1));
                                }),
                                e
                            );
                        })(
                            ((u, e, t) => {
                                const n = [];
                                return (
                                    Le(
                                        u,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (u) => {
                                            n.push(...Re(u, e, '', t));
                                        },
                                        (u) => {
                                            n.push(...Re(u[2] + u[3], e, u[1], t));
                                        },
                                    ),
                                    n
                                );
                            })(j(u).replace(/&zwnbsp;/g, '\ufeff'), e, t),
                        );
                        return ke(n);
                    },
                    He = (u, e) => !u || u.offsetTop + u.offsetHeight > e,
                    We = (u, e) => u.offsetLeft + u.offsetWidth - e,
                    $e = (u, e, t) => {
                        if (!u || !u.textContent) return [!1, 0];
                        if (u.offsetLeft > e) return [!1, 0];
                        const n = We(u, e),
                            r = u.textContent.length,
                            a = u.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((e - u.offsetLeft) / a);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const o = Math.max(t + i, 0);
                        return r < o ? [!1, 0] : [!0, o];
                    },
                    je = (u, e, t, n, a, i) => {
                        let o = -1,
                            s = null;
                        for (let l = t; l >= 0; l--) {
                            const t = u[l],
                                c = Number(u[l].getAttribute('data-block-type'));
                            if (c === _e.LineBreak || c === _e.NewLine || c === _e.Binding) continue;
                            const E = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const u = $e(t, n, a),
                                    c = u[0],
                                    A = u[1];
                                if (!c) {
                                    A > 0 && (a -= A);
                                    continue;
                                }
                                const F = E.slice(0, E.length - A) + i,
                                    d = e[l];
                                (s = r().cloneElement(d, d.props, F)), (o = l);
                                break;
                            }
                            {
                                const u = t.children,
                                    c = e[l],
                                    A = c.props.children,
                                    F = je(u, A, u.length - 1, n, a, i),
                                    d = F[0],
                                    D = F[1];
                                if (!(d < 0)) {
                                    const u = A.slice(0, d);
                                    (s = r().cloneElement(c, c.props, u, D)), (o = l);
                                    break;
                                }
                                a -= E.length;
                            }
                        }
                        return [o, s];
                    },
                    Ge = (u, e, t, n = '...') => {
                        const r = [...e],
                            a = u.current;
                        if (!a) return [r, !1];
                        const i = t.height,
                            o = t.width,
                            s = a.lastElementChild;
                        if (!He(s, i) && We(s, o) <= 0) return [r, !1];
                        const l = a.children,
                            c = ((u, e) => {
                                let t = 0,
                                    n = u.length - 1;
                                for (; n - t >= 0; ) {
                                    const r = t + Math.ceil(0.5 * (n - t));
                                    He(u[r], e) ? (n = r - 1) : (t = r + 1);
                                }
                                return t - 1;
                            })(l, i);
                        if (c < 0) return [r, !1];
                        const E = je(l, r, c, o, n.length, n),
                            A = E[0],
                            F = E[1];
                        return F && (r.splice(A, 1, F), r.splice(A + 1)), [r, !0];
                    },
                    Ue = r().memo(
                        ({
                            text: u,
                            classMix: e,
                            onSizeChanged: t,
                            binding: a,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: o = !1,
                            customTooltipArgs: s,
                            targetId: l,
                            justifyContent: c = Be.FlexStart,
                            alignContent: E = Be.FlexStart,
                            truncateIdentify: A = '...',
                        }) => {
                            const F = (0, n.useRef)(null),
                                d = (0, n.useRef)({ height: 0, width: 0 }),
                                D = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                _ = D[0],
                                B = D[1],
                                C = (0, n.useMemo)(() => Ie(u, a, { justifyContent: c }), [a, c, u]),
                                m = (0, n.useMemo)(() => {
                                    if (
                                        i &&
                                        _.isTruncated &&
                                        (!a || !Object.values(a).find((u) => 'object' == typeof u))
                                    )
                                        return {
                                            args: Object.assign({ text: u }, s, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [a, i, l, u, s, _.isTruncated]),
                                g = (0, n.useCallback)(
                                    (u) => {
                                        (d.current.width = u.contentRect.width),
                                            (d.current.height = u.contentRect.height);
                                        const e = Ge(F, C, d.current, A),
                                            n = e[0],
                                            r = e[1];
                                        B({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                    },
                                    [t, A, C],
                                ),
                                p = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: E }), [E, c]);
                            return (
                                ((u, e, t = !0) => {
                                    const r = (0, n.useCallback)(
                                        (u) => {
                                            const t = u[0];
                                            e && e(t);
                                        },
                                        [e],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!u.current || !t) return;
                                        const e = new de.Z((u) => r(u));
                                        return (
                                            e.observe(u.current),
                                            () => {
                                                e.disconnect();
                                            }
                                        );
                                    }, [r, t, u]);
                                })(F, g, o),
                                r().createElement(
                                    'div',
                                    {
                                        className: h()(
                                            De.base,
                                            e,
                                            De.base__zeroPadding,
                                            o && De.base__isTruncationAvailable,
                                        ),
                                        style: p,
                                    },
                                    r().createElement('div', { className: De.unTruncated, ref: F }, C),
                                    r().createElement(
                                        Fe,
                                        {
                                            tooltipArgs: m,
                                            className: h()(
                                                De.tooltip,
                                                De[`tooltip__justify-${c}`],
                                                De[`tooltip__align-${E}`],
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    De.truncated,
                                                    !_.isTruncateFinished && o && De.truncated__hide,
                                                ),
                                                style: p,
                                            },
                                            _.isTruncateFinished && o ? _.elementList : C,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Ve = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ze = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const qe = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Ke = (u) =>
                        qe
                            ? `${u}`
                            : (function (u) {
                                  let e = '';
                                  for (let t = ze.length - 1; t >= 0; t--)
                                      for (; u >= ze[t]; ) (e += Ve[t]), (u -= ze[t]);
                                  return e;
                              })(u),
                    Ye = (u, e) => u.split(',').includes(e),
                    Xe = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__extraSmall: 'TankName_type__extraSmall_80',
                        type__medium: 'TankName_type__medium_ff',
                        type__big: 'TankName_type__big_9a',
                        type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                        type__eliteMedium: 'TankName_type__eliteMedium_10',
                        type__eliteBig: 'TankName_type__eliteBig_ac',
                        name: 'TankName_name_56',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let Ze, Qe;
                !(function (u) {
                    (u.extraSmall = 'extraSmall'), (u.medium = 'medium'), (u.big = 'big');
                })(Ze || (Ze = {})),
                    (function (u) {
                        (u.colored = 'colored'),
                            (u.white = 'white'),
                            (u.whiteSpanish = 'whiteSpanish'),
                            (u.whiteOrange = 'whiteOrange');
                    })(Qe || (Qe = {}));
                const Je = ({
                    isElite: u,
                    vehicleName: e,
                    vehicleShortName: t,
                    vehicleType: n,
                    vehicleLvl: a,
                    tags: i = '',
                    size: o = Ze.extraSmall,
                    type: s = Qe.colored,
                    className: l,
                    classNames: c,
                    isShortName: E = !1,
                }) => {
                    const A = `${((F = n), F.replace(/-/g, '_'))}${u ? '_elite' : ''}`;
                    var F;
                    const d = R.images.gui.maps.icons.vehicleTypes.big.$dyn(A);
                    return r().createElement(
                        'div',
                        { className: h()(Xe.base, Xe[`base__size${$(o)}`], Xe[`base__type${$(s)}`], l) },
                        r().createElement('div', { className: h()(Xe.level, null == c ? void 0 : c.level) }, Ke(a)),
                        r().createElement('div', {
                            className: h()(
                                Xe.type,
                                u && Xe[`type__elite${$(o)}`],
                                Xe[`type__${o}`],
                                null == c ? void 0 : c.typeIcon,
                            ),
                            style: n ? { backgroundImage: `url(${d})` } : void 0,
                        }),
                        Ye(i, 'premiumIGR') && r().createElement('div', { className: Xe.premiumIGR }),
                        r().createElement('div', { className: h()(Xe.name, null == c ? void 0 : c.name) }, E ? t : e),
                    );
                };
                function ut() {}
                function et() {
                    return !1;
                }
                console.log;
                var tt = t(9174);
                function nt(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return rt(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? rt(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var n = 0;
                        return function () {
                            return n >= u.length ? { done: !0 } : { done: !1, value: u[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function rt(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const at = (u) => (0 === u ? window : window.subViews.get(u));
                const it = ((u, e) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: o, children: s, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    E = (t, n, r) => {
                                        var a;
                                        const o = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = at,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? r.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = r.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const o = (u) => {
                                                    const r = t(e),
                                                        a = n.split('.').reduce((u, e) => u[e], r);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const s = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = i.O.view.addModelObserver(s, e, !0);
                                                        return r.set(l, t), u && t(o(a)), l;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (u, e) => {
                                                        const t = o(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = o(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = nt(r.keys()); !(u = t()).done; ) a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            s =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (u) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(u)) : s.readByPath(u),
                                            E = (u) => c.current.push(u),
                                            A = u({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const n = null != e ? e : l(u),
                                                            r = tt.LO.box(n, { equals: et });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, tt.aD)((u) => r.set(u)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const n = null != e ? e : l(u),
                                                            r = tt.LO.box(n, { equals: et });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, tt.aD)((u) => r.set(u)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const n = l(e);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (u, e) => ((u[e] = tt.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, tt.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                a = Object.entries(r),
                                                                i = a.reduce(
                                                                    (u, [e, t]) => ((u[t] = tt.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, tt.aD)((u) => {
                                                                            a.forEach(([e, t]) => {
                                                                                i[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            F = { mode: t, model: A, externalModel: s, cleanup: E };
                                        return {
                                            model: A,
                                            controls: 'mocks' === t && r ? r.controls(F) : e(F),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    A = (0, n.useRef)(!1),
                                    F = (0, n.useState)(a),
                                    d = F[0],
                                    D = F[1],
                                    _ = (0, n.useState)(() => E(a, o, l)),
                                    B = _[0],
                                    C = _[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        A.current ? C(E(d, o, l)) : (A.current = !0);
                                    }, [l, d, o]),
                                    (0, n.useEffect)(() => {
                                        D(a);
                                    }, [a]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            B.externalModel.dispose(), c.current.forEach((u) => u());
                                        },
                                        [B],
                                    ),
                                    r().createElement(t.Provider, { value: B }, s)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) =>
                            Object.assign({}, u.primitives(['isMassRetrain']), { vehicle: u.object('vehicle') }),
                        ut,
                    ),
                    ot = it[0],
                    st = it[1],
                    lt = 'TitleContent_tankName_91',
                    ct = 'TitleContent_title_0f';
                function Et() {
                    return (
                        (Et = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Et.apply(null, arguments)
                    );
                }
                const At = (0, se.Pi)(function () {
                        const u = st().model;
                        return r().createElement(Ue, {
                            text: u.isMassRetrain.get()
                                ? R.strings.dialogs.retrain.title.massive()
                                : R.strings.dialogs.retrain.title.single.simple(),
                            binding: {
                                vehicleName: r().createElement(
                                    Je,
                                    Et(
                                        { isShortName: !0, type: Qe.white, size: Ze.big, className: lt },
                                        u.vehicle.get(),
                                    ),
                                ),
                            },
                            classMix: ct,
                        });
                    }),
                    Ft = 'RetrainPremiumVehicleDialogApp_content_b2',
                    dt = ['onClose', 'buttons', 'isShown', 'displayFlags'];
                function Dt() {
                    return (
                        (Dt = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Dt.apply(null, arguments)
                    );
                }
                const _t = r().memo(function (u) {
                    let e = u.onClose,
                        t = u.buttons,
                        n = u.isShown,
                        a = u.displayFlags,
                        i = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, dt);
                    return r().createElement(
                        oe,
                        Dt({ onClose: e, buttons: t, displayFlags: a, isShown: n }, i, {
                            title: r().createElement(At, null),
                            content: r().createElement(
                                'div',
                                { className: Ft },
                                r().createElement(Ju, { text: R.strings.dialogs.retrain.premium.description() }),
                            ),
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    P().render(
                        r().createElement(
                            ot,
                            null,
                            r().createElement(M, null, r().createElement(Zu, { Template: _t })),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], a = !0, i = 0; i < e.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, n];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 572),
        (() => {
            var u = { 572: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [a, i, o] = t,
                        s = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < a.length; s++)
                        (r = a[s]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(3622));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
