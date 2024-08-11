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
                    u.d(t, { mouse: () => c, off: () => s, on: () => i, onResize: () => o, onScaleUpdated: () => a });
                var n = u(2472),
                    r = u(1176);
                const o = (0, n.E)('clientResized'),
                    a = (0, n.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${t}`,
                                        a = l[t]((e) => u([e, 'outside']));
                                    function i(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, i),
                                        n(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(o, i),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
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
            5959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => o,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = u(527),
                    r = u(2493);
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => r, G: () => n });
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
                u.d(t, { O: () => o });
                var n = u(5959),
                    r = u(514);
                const o = { view: u(7641), client: n, sound: r.ZP };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => a });
                var n = u(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    o = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, n.playSound)(r[t])), e), {}),
                    a = { play: Object.assign({}, o, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => r });
                var n = u(2472);
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
            7641: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => B,
                        events: () => o.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => g,
                        getSize: () => _,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => C,
                        isFocused: () => f,
                        pxToRem: () => h,
                        remToPx: () => p,
                        resize: () => m,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => D,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var n = u(3722),
                    r = u(6112),
                    o = u(6538),
                    a = u(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function D() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    o = 16,
                    a = 32,
                    i = 64,
                    s = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, n);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, a, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? r : a);
                        },
                        minimize() {
                            s(i);
                        },
                        move(e) {
                            s(o, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, u) => {
                'use strict';
                let n, r;
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
                    })(r || (r = {}));
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => o });
                var n = u(3138);
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
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = n.O.view.addModelObserver(e, u, r);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(o) : (this._views[u] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
                r.__instance = void 0;
                const o = r;
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
                u.d(t, { c1: () => b, Sw: () => o.Z, B0: () => i, ry: () => h, Eu: () => p });
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
                const r = n;
                var o = u(1358);
                var a = u(8613);
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
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(5521),
                    m = u(3138);
                const E = ['args'];
                function A(e, t, u, n, r, o, a) {
                    try {
                        var i = e[o](a),
                            s = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(s) : Promise.resolve(s).then(n, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                    return new Promise(function (n, r) {
                                        var o = e.apply(t, u);
                                        function a(e) {
                                            A(o, n, r, a, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(o, n, r, a, i, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = () =>
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
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    f = () => F(i.CLOSE),
                    D = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var C = u(7572);
                const b = r.instance,
                    v = {
                        DataTracker: o.Z,
                        ViewModel: C.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => F(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => F(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            F(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), o) => {
                            const a = m.O.view.getViewGlobalPosition(),
                                s = u.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                _ = s.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + a.x,
                                    y: m.O.view.pxToRem(c) + a.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            F(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: g(E),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => D(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, f);
                        },
                        handleViewEvent: F,
                        onBindingsReady: h,
                        onLayoutReady: p,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < r.length; t++) u[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => o, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    o = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            6142: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => Pu,
                        Bar: () => Nu,
                        DefaultScroll: () => Iu,
                        Direction: () => Fu,
                        defaultSettings: () => fu,
                        useHorizontalScrollApi: () => Cu,
                    });
                var r = {};
                u.r(r), u.d(r, { Area: () => un, Bar: () => Ju, Default: () => tn, useVerticalScrollApi: () => Hu });
                var o = u(6179),
                    a = u.n(o);
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
                var s = u(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, t, u) {
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
                        r = (function (e, t) {
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
                        o = Math.min(n, r);
                    return {
                        extraLarge: o === u.extraLarge.weight,
                        large: o === u.large.weight,
                        medium: o === u.medium.weight,
                        small: o === u.small.weight,
                        extraSmall: o === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
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
                const _ = s.O.client.getSize('rem'),
                    m = _.width,
                    E = _.height,
                    A = Object.assign({ width: m, height: E }, d(m, E, l)),
                    g = (0, o.createContext)(A),
                    h = ['children'];
                const p = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, h);
                    const n = (0, o.useContext)(g),
                        r = n.extraLarge,
                        a = n.large,
                        s = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        _ = n.largeWidth,
                        m = n.mediumWidth,
                        E = n.smallWidth,
                        A = n.extraSmallWidth,
                        p = n.extraLargeHeight,
                        F = n.largeHeight,
                        f = n.mediumHeight,
                        D = n.smallHeight,
                        C = n.extraSmallHeight,
                        b = { extraLarge: p, large: F, medium: f, small: D, extraSmall: C };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && r) return t;
                        if (u.large && a) return t;
                        if (u.medium && s) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && d) return i(t, u, b);
                        if (u.largeWidth && _) return i(t, u, b);
                        if (u.mediumWidth && m) return i(t, u, b);
                        if (u.smallWidth && E) return i(t, u, b);
                        if (u.extraSmallWidth && A) return i(t, u, b);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && p) return t;
                            if (u.largeHeight && F) return t;
                            if (u.mediumHeight && f) return t;
                            if (u.smallHeight && D) return t;
                            if (u.extraSmallHeight && C) return t;
                        }
                    }
                    return null;
                };
                p.defaultProps = {
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
                (0, o.memo)(p);
                const F = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    f = ({ children: e }) => {
                        const t = (0, o.useContext)(g),
                            u = (0, o.useState)(t),
                            n = u[0],
                            r = u[1],
                            i = (0, o.useCallback)((e, t) => {
                                const u = s.O.view.pxToRem(e),
                                    n = s.O.view.pxToRem(t);
                                r(Object.assign({ width: u, height: n }, d(u, n, l)));
                            }, []),
                            c = (0, o.useCallback)(() => {
                                const e = s.O.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        F(() => {
                            s.O.client.events.on('clientResized', i), s.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, o.useEffect)(
                                () => () => {
                                    s.O.client.events.off('clientResized', i),
                                        s.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [i, c],
                            );
                        const _ = (0, o.useMemo)(() => Object.assign({}, n), [n]);
                        return a().createElement(g.Provider, { value: _ }, e);
                    };
                var D = u(6483),
                    C = u.n(D),
                    b = u(926),
                    v = u.n(b);
                let B, w, y;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(B || (B = {})),
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
                        const e = (0, o.useContext)(g),
                            t = e.width,
                            u = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return B.ExtraLarge;
                                    case e.large:
                                        return B.Large;
                                    case e.medium:
                                        return B.Medium;
                                    case e.small:
                                        return B.Small;
                                    case e.extraSmall:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
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
                            a = ((e) => {
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
                        return { mediaSize: n, mediaWidth: r, mediaHeight: a, remScreenWidth: t, remScreenHeight: u };
                    },
                    k = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const T = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_WIDTH,
                        [w.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [w.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [y.ExtraSmall]: '',
                        [y.Small]: v().SMALL_HEIGHT,
                        [y.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [y.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [B.ExtraSmall]: '',
                        [B.Small]: v().SMALL,
                        [B.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [B.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [B.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    N = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, k);
                        const r = x(),
                            o = r.mediaWidth,
                            i = r.mediaHeight,
                            s = r.mediaSize;
                        return a().createElement('div', S({ className: C()(u, T[o], L[i], M[s]) }, n), t);
                    },
                    O = ['children'];
                const I = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, O);
                    return a().createElement(f, null, a().createElement(N, u, t));
                };
                var P = u(493),
                    H = u.n(P);
                const W = (e, t) => {
                    const u = (0, o.useRef)();
                    return (
                        (0, o.useEffect)(() => {
                            (t && !t(e)) || (u.current = e);
                        }, [t, e]),
                        u.current
                    );
                };
                u(1281);
                let V;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(V || (V = {}));
                const z = (e) => e.replace(/&nbsp;/g, ' ');
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
                var j = u(9916),
                    $ = u(8613);
                Date.now(), $.Ew.getRegionalDateTime, $.Ew.getFormattedDateTime;
                const U = (e = 1) => {
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
                    G = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    q = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    K = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    Y = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = G(`${e}.${u}`, window);
                                return q(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    X = (e) => {
                        const t = ((e) => {
                                const t = U(),
                                    u = t.caller,
                                    n = t.resId,
                                    r = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: r, modelPath: K(r, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const r = G(K(u, `${t}.${n}`), window);
                                    return q(r) ? (e.push(r.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    Z = j.Sw.instance;
                let Q;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Q || (Q = {}));
                const J = (e = 'model', t = Q.Deep) => {
                        const u = (0, o.useState)(0),
                            n = (u[0], u[1]),
                            r = (0, o.useMemo)(() => U(), []),
                            a = r.caller,
                            i = r.resId,
                            s = (0, o.useMemo)(
                                () => (window.__feature && window.__feature !== a ? `subViews.${a}.${e}` : e),
                                [a, e],
                            ),
                            l = (0, o.useState)(() =>
                                ((e) => {
                                    const t = G(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return q(t) ? t.value : t;
                                })(Y(s)),
                            ),
                            c = l[0],
                            d = l[1],
                            _ = (0, o.useRef)(-1);
                        return (
                            F(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? Q.Deep : Q.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== Q.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === Q.Deep
                                                ? (e === c && n((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        r = X(e);
                                    _.current = Z.addCallback(r, u, i, t === Q.Deep);
                                }
                            }),
                            (0, o.useEffect)(() => {
                                if (t !== Q.None)
                                    return () => {
                                        Z.removeCallback(_.current, i);
                                    };
                            }, [i, t]),
                            c
                        );
                    },
                    ee = (j.Sw.instance, W);
                var te = u(5521);
                const ue = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ne(e = te.n.NONE, t = ue, u = !1, n = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== te.n.NONE)
                            return (
                                window.addEventListener('keydown', r, u),
                                () => {
                                    window.removeEventListener('keydown', r, u);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), t(r), u && r.stopPropagation();
                            }
                        }
                    }, [t, e, u, n]);
                }
                const re = /<link.*?>/g,
                    oe = /\.\.\//g,
                    ae = /<script.*?>/g,
                    ie = 'default.css',
                    se = (e) => {
                        const t = e.match(oe);
                        return t && t.join('');
                    },
                    le = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const u = t[e];
                            if (!u.href.includes(ie)) return u.href;
                        }
                        return '';
                    },
                    ce = (e) => {
                        const t = le(),
                            u = se(t);
                        let n,
                            r = e;
                        for (; null !== (n = ae.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = u + e[2].replace(oe, '');
                                r = r.replace(e[2], t);
                            }
                        }
                        return r;
                    },
                    de = 'SubView_base_df',
                    _e = 'subViews.onChanged',
                    me = (() => {
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
                    Ee = (0, o.memo)(({ id: e, fallback: t, onLoadCallback: u, mixClass: n }) => {
                        const r = (0, o.useState)(''),
                            i = r[0],
                            s = r[1],
                            l = (0, o.useMemo)(() => ({ __html: ce(i) }), [i]),
                            c = (0, o.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            d = (0, o.useState)(!1),
                            _ = d[0],
                            m = d[1],
                            E = (0, o.useCallback)(
                                (e) => {
                                    e.includes(c) &&
                                        (m(!0), engine.off(_e, E), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            A = (0, o.useCallback)((e) => {
                                me.add(
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
                        (0, o.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    u = t.path;
                                let n;
                                if ((n = u.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, t)),
                                        engine.on(`subView:inject->${n}`, A),
                                        (({ path: e, name: t }) => {
                                            const u = new XMLHttpRequest();
                                            (u.onreadystatechange = () => {
                                                4 === u.readyState &&
                                                    (200 === u.status
                                                        ? (0, j.Eu)().then(() => {
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
                                                engine.off(`subView:inject->${n}`, A),
                                                console.info(`Sub view ${n} is destroyed: ${u}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(_e, E);
                        }, [E, A, e, _]),
                            (0, o.useEffect)(
                                () => () => {
                                    i &&
                                        ((e) => {
                                            const t = se(le());
                                            let u;
                                            for (; null !== (u = re.exec(e)); ) {
                                                const e = u[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const u = t + e[1].replace(oe, ''),
                                                        n = document.head.querySelector(`[href="${u}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(i);
                                },
                                [i],
                            );
                        const g = C()(de, n);
                        if (i) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const u = le(),
                                        n = se(u);
                                    for (; null !== (t = re.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(ie) && n) {
                                            const t = n + e[1].replace(oe, ''),
                                                u = document.createElement('link');
                                            (u.href = t), (u.rel = 'stylesheet'), document.head.appendChild(u);
                                        }
                                    }
                                })(i),
                                u && u(e),
                                a().createElement('div', { className: g, dangerouslySetInnerHTML: l })
                            );
                        }
                        return t ? a().createElement('div', { className: g }, a().createElement(t, null)) : null;
                    });
                function Ae(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const ge = {
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
                let he, pe;
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
                    })(pe || (pe = {}));
                const Fe = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: r,
                    mixClass: i,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: E,
                    onClick: A,
                }) => {
                    const g = (0, o.useRef)(null),
                        h = (0, o.useState)(u),
                        p = h[0],
                        F = h[1],
                        f = (0, o.useState)(!1),
                        D = f[0],
                        b = f[1];
                    return (
                        (0, o.useEffect)(() => {
                            function e(e) {
                                p && null !== g.current && !g.current.contains(e.target) && F(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [p]),
                        (0, o.useEffect)(() => {
                            F(u);
                        }, [u]),
                        a().createElement(
                            'div',
                            {
                                ref: g,
                                className: C()(
                                    ge.base,
                                    ge[`base__${n}`],
                                    r && ge.base__disabled,
                                    t && ge[`base__${t}`],
                                    p && ge.base__focus,
                                    D && ge.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== s && Ae(s), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    r || (m && m(e), b(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== l && Ae(l),
                                        _ && _(e),
                                        u && (r || (g.current && (g.current.focus(), F(!0)))),
                                        b(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (E && E(e), b(!1));
                                },
                                onClick: function (e) {
                                    r || (A && A(e));
                                },
                            },
                            n !== he.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: ge.back }),
                                    a().createElement('span', { className: ge.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: C()(ge.state, ge.state__default) },
                                a().createElement('span', { className: ge.stateDisabled }),
                                a().createElement('span', { className: ge.stateHighlightHover }),
                                a().createElement('span', { className: ge.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: ge.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Fe.defaultProps = { type: he.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const fe = Fe,
                    De = [
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
                function Ce(e) {
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
                const be = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: j.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    ve = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            a = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            m = e.decoratorId,
                            E = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            h = e.targetId,
                            p = void 0 === h ? 0 : h,
                            F = e.onShow,
                            f = e.onHide,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, De);
                        const C = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, o.useMemo)(() => p || U().resId, [p]),
                            v = (0, o.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (be(u, E, { isMouseEvent: !0, on: !0, arguments: Ce(n) }, b),
                                    F && F(),
                                    (C.current.isVisible = !0));
                            }, [u, E, n, b, F]),
                            B = (0, o.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        be(u, E, { on: !1 }, b),
                                        C.current.isVisible && f && f(),
                                        (C.current.isVisible = !1);
                                }
                            }, [u, E, b, f]),
                            w = (0, o.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        (0, o.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, o.useEffect)(() => {
                                !1 === g && B();
                            }, [g, B]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        window.removeEventListener('mouseleave', B), B();
                                    }
                                ),
                                [B],
                            );
                        return g
                            ? (0, o.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((C.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              B(), null == a || a(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === _ && B(), null == s || s(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === _ && B(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      D,
                                  ),
                              )
                            : t;
                        var y;
                    },
                    Be = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const ye = R.views.common.tooltip_window.simple_tooltip_content,
                    xe = (e) => {
                        let t = e.children,
                            u = e.body,
                            n = e.header,
                            r = e.note,
                            i = e.alert,
                            s = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Be);
                        const c = (0, o.useMemo)(() => {
                            const e = Object.assign({}, s, { body: u, header: n, note: r, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, u, n, r, s]);
                        return a().createElement(
                            ve,
                            we(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? ye.SimpleTooltipHtmlContent('resId') : ye.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    },
                    ke = (e) => {
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
                    Se = 'TextOverflow_base_3b',
                    Te = ['content', 'classMix', 'className'];
                function Le() {
                    return (
                        (Le =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                const Me = (e) => {
                    let t = e.content,
                        u = e.classMix,
                        n = e.className,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, Te);
                    const i = (0, o.useRef)(null),
                        s = (0, o.useState)(!0),
                        l = s[0],
                        c = s[1];
                    return (
                        (0, o.useEffect)(() =>
                            ke(() => {
                                const e = i.current;
                                e && e.offsetWidth >= e.scrollWidth && c(!1);
                            }),
                        ),
                        a().createElement(
                            xe,
                            { isEnabled: l, body: t },
                            a().createElement('div', Le({}, r, { ref: i, className: C()(Se, n, u) }), t),
                        )
                    );
                };
                let Re;
                !(function (e) {
                    (e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent');
                })(Re || (Re = {}));
                const Ne = 'DialogTemplateButton_base_0b',
                    Oe = 'DialogTemplateButton_label_83',
                    Ie = 'DialogTemplateButton_label__noTooltip_14',
                    Pe = (0, o.memo)(
                        ({ onClick: e, isFocused: t, buttonID: u, isDisabled: n, label: r, tooltip: i, type: s }) => {
                            const l = (0, o.useCallback)(() => {
                                    e({ buttonID: u });
                                }, [e, u]),
                                c = (0, o.useMemo)(() => {
                                    return (
                                        (e = i.type),
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
                                }, [i.type, u]),
                                d = C()(Oe, i.type !== Re.absent && Ie);
                            return a().createElement(
                                ve,
                                c,
                                a().createElement(
                                    'div',
                                    { className: Ne },
                                    a().createElement(
                                        fe,
                                        { size: pe.medium, type: s, disabled: n, onClick: l, isFocused: t },
                                        a().createElement(Me, { classMix: d, content: r || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    He = 'DialogTemplateButtonList_base_8e';
                function We() {
                    return (
                        (We =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        We.apply(this, arguments)
                    );
                }
                const Ve = (0, o.memo)(() => {
                        const e = J('model').onButtonClicked,
                            t = J('model.focus'),
                            u = t.focusedIndex,
                            n = t.onTabPressed,
                            r = J('model.buttons'),
                            i = (0, o.useCallback)(
                                (e) => {
                                    n({ shift: e.shiftKey });
                                },
                                [n],
                            );
                        ne(te.n.TAB, i);
                        const s = (0, o.useCallback)(
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
                                { className: He },
                                r.map(({ value: t }, n) =>
                                    a().createElement(Pe, We({ key: t.buttonID, isFocused: n === u, onClick: e }, t)),
                                ),
                            )
                        );
                    }),
                    ze = 'DialogTemplateWrapper_base_f7',
                    je = 'DialogTemplateWrapper_base__hidden_5f',
                    $e = 'DialogTemplateWrapper_subView_30';
                function Ue() {
                    return (
                        (Ue =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ue.apply(this, arguments)
                    );
                }
                const Ge = (0, o.memo)(({ Template: e }) => {
                    const t = J('model', Q.None),
                        u = t.onCloseClicked,
                        n = t.placeHolders,
                        r = t.background,
                        i = t.dimmerAlpha,
                        s = t.displayFlags;
                    (0, o.useEffect)(() => {
                        const e = document.getElementById('root');
                        e && e.setAttribute('id', 'stubDialogTemplate');
                    }, []);
                    const l = s.map(({ value: e }) => e),
                        c = (0, o.useRef)(n.map(({ value: e }) => e.resourceID)),
                        d = (0, o.useState)(0 !== c.current.length),
                        _ = d[0],
                        m = d[1],
                        E = (0, o.useCallback)(
                            (e = 'default') => {
                                u({ reason: e });
                            },
                            [u],
                        ),
                        A = (0, o.useCallback)(() => {
                            E('escape');
                        }, [E]);
                    var g;
                    (g = A), ne(te.n.ESCAPE, g);
                    const h = (0, o.useCallback)((e) => {
                            const t = c.current,
                                u = t.indexOf(e);
                            u > -1 && (t.splice(u, 1), 0 === t.length && m(!1));
                        }, []),
                        p = (0, o.useMemo)(() => {
                            const e = { backgroundColor: `rgba(19, 18, 16, ${i})` };
                            return r && (e.backgroundImage = `url(${r})`), e;
                        }, [r, i]),
                        F = (0, o.useMemo)(
                            () =>
                                n.reduce(
                                    (e, { value: t }) => (
                                        (e[t.placeHolder] = a().createElement(Ee, {
                                            key: t.placeHolder,
                                            id: t.resourceID,
                                            mixClass: $e,
                                            onLoadCallback: h,
                                        })),
                                        e
                                    ),
                                    {},
                                ),
                            [h, n],
                        ),
                        D = C()(ze, _ && je);
                    return a().createElement(
                        f,
                        null,
                        a().createElement(
                            'div',
                            { className: D, style: p },
                            a().createElement(
                                e,
                                Ue(
                                    { onClose: E, buttons: a().createElement(Ve, null), displayFlags: l, isShown: !_ },
                                    F,
                                ),
                            ),
                        ),
                    );
                });
                var qe = u(3403);
                const Ke = ['children'];
                function Ye() {
                    return (
                        (Ye =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ye.apply(this, arguments)
                    );
                }
                const Xe = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, Ke);
                    return a().createElement(
                        ve,
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
                function Ze() {
                    return (
                        (Ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ze.apply(this, arguments)
                    );
                }
                const Qe = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(xe, t, n);
                    const r = t.contentId;
                    return r ? a().createElement(ve, Ze({}, t, { contentId: r }), n) : a().createElement(Xe, t, n);
                };
                var Je = u(8045);
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
                const rt = { [nt.NBSP]: tt.NoBreakSymbol, [nt.ZWNBSP]: tt.NoBreakSymbol, [nt.NEW_LINE]: tt.LineBreak },
                    ot = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    at = {
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
                    it = 'renderers_noBreakWrapper_10',
                    st = 'renderers_lineBreak_b5',
                    lt = 'renderers_newLine_bd',
                    ct = 'renderers_word_f3',
                    dt = (e) => ({ color: `#${e}` }),
                    _t = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? at[n]
                                ? a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: C()(ct, at[n]) },
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
                            a().createElement('span', { key: t, 'data-block-type': tt.NewLine, className: lt }, e),
                        [tt.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': tt.NoBreakWrapper, className: it },
                                e,
                            ),
                    },
                    Et = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, o) => {
                                const a = `${u}_${o}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        u = Et(e, mt[t], a);
                                    n.push(...u);
                                } else n.push(t({ elementList: [r], textBlock: e, key: a }));
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
                                            r = mt[n],
                                            o = Et(e, r, t);
                                        return (
                                            n === tt.NoBreakWrapper
                                                ? u.push(r({ elementList: o, textBlock: e, key: `${t}` }))
                                                : u.push(...o),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    },
                    gt = (e, t, u, n) => {
                        let r = t.exec(e),
                            o = 0;
                        for (; r; ) o !== r.index && u(e.slice(o, r.index)), n(r), (o = t.lastIndex), (r = t.exec(e));
                        o !== e.length && u(e.slice(o));
                    },
                    ht = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    pt = (e) => {
                        const t = [];
                        return (
                            gt(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var u;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((u = e), u.match(ht) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    Ft = ot
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
                                          t.push(...pt(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const u = /[\s\u002d]/g;
                              let n = u.exec(e);
                              if (!n) return [e];
                              const r = [];
                              let o = 0;
                              for (; n; ) {
                                  const a = t.justifyContent === ut.FlexEnd ? n.index : u.lastIndex;
                                  r.push(e.slice(o, a)), (o = a), (n = u.exec(e));
                              }
                              return o !== e.length && r.push(e.slice(o)), r;
                          },
                    ft = (e, t = '', u) => {
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
                                        r = rt[u.charAt(0)];
                                    r === tt.LineBreak
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
                                        : n.push({ blockType: r, colorTag: t, childList: [u] });
                                },
                            ),
                            n
                        );
                    },
                    Dt = (e, t, u = '', n) => {
                        const r = [];
                        return (
                            gt(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...ft(e, u, n));
                                },
                                (e) => {
                                    const o = e[1],
                                        a = void 0 === t[o] ? e[0] : t[o];
                                    'string' == typeof a || 'number' == typeof a
                                        ? r.push(...ft(String(a), u, n))
                                        : r.push({ blockType: tt.Binding, colorTag: u, childList: [a] });
                                },
                            ),
                            r
                        );
                    },
                    Ct = (e, t) => {
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
                    bt = (e, t = {}, u) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === tt.NoBreakSymbol
                                        ? ((u = !0), t.push(...Ct(t.pop(), e)))
                                        : (u ? t.push(...Ct(t.pop(), e)) : t.push(e), (u = !1));
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
                                            n.push(...Dt(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...Dt(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })(z(e).replace(/&zwnbsp;/g, '\ufeff'), t, u),
                        );
                        return At(n);
                    },
                    vt = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Bt = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    wt = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = Bt(e, t),
                            r = e.textContent.length,
                            o = e.offsetWidth / r,
                            a = Math.ceil(n / o);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / o);
                            return n >= u ? [!0, u + a] : [!1, n];
                        }
                        const i = Math.max(u + a, 0);
                        return r < i ? [!1, 0] : [!0, i];
                    },
                    yt = (e, t, u, n, r, o) => {
                        let i = -1,
                            s = null;
                        for (let l = u; l >= 0; l--) {
                            const u = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === tt.LineBreak || c === tt.NewLine || c === tt.Binding) continue;
                            const d = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = wt(u, n, r),
                                    c = e[0],
                                    _ = e[1];
                                if (!c) {
                                    _ > 0 && (r -= _);
                                    continue;
                                }
                                const m = d.slice(0, d.length - _) + o,
                                    E = t[l];
                                (s = a().cloneElement(E, E.props, m)), (i = l);
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[l],
                                    _ = c.props.children,
                                    m = yt(e, _, e.length - 1, n, r, o),
                                    E = m[0],
                                    A = m[1];
                                if (!(E < 0)) {
                                    const e = _.slice(0, E);
                                    (s = a().cloneElement(c, c.props, e, A)), (i = l);
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [i, s];
                    },
                    xt = (e, t, u, n = '...') => {
                        const r = [...t],
                            o = e.current;
                        if (!o) return [r, !1];
                        const a = u.height,
                            i = u.width,
                            s = o.lastElementChild;
                        if (!vt(s, a) && Bt(s, i) <= 0) return [r, !1];
                        const l = o.children,
                            c = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const r = u + Math.ceil(0.5 * (n - u));
                                    vt(e[r], t) ? (n = r - 1) : (u = r + 1);
                                }
                                return u - 1;
                            })(l, a);
                        if (c < 0) return [r, !1];
                        const d = yt(l, r, c, i, n.length, n),
                            _ = d[0],
                            m = d[1];
                        return m && (r.splice(_, 1, m), r.splice(_ + 1)), [r, !0];
                    },
                    kt = a().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: n,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: i = !1,
                            customTooltipArgs: s,
                            targetId: l,
                            justifyContent: c = ut.FlexStart,
                            alignContent: d = ut.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const m = (0, o.useRef)(null),
                                E = (0, o.useRef)({ height: 0, width: 0 }),
                                A = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                g = A[0],
                                h = A[1],
                                p = (0, o.useMemo)(() => bt(e, n, { justifyContent: c }), [n, c, e]),
                                F = (0, o.useMemo)(() => {
                                    if (
                                        r &&
                                        g.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, s, {
                                                stringifyKwargs: n ? JSON.stringify(n) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [n, r, l, e, s, g.isTruncated]),
                                f = (0, o.useCallback)(
                                    (e) => {
                                        (E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height);
                                        const t = xt(m, p, E.current, _),
                                            n = t[0],
                                            r = t[1];
                                        h({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), u && u(r);
                                    },
                                    [u, _, p],
                                ),
                                D = (0, o.useMemo)(() => ({ justifyContent: c, alignContent: d }), [d, c]);
                            return (
                                ((e, t, u = !0) => {
                                    const n = (0, o.useCallback)(
                                        (e) => {
                                            const u = e[0];
                                            t && t(u);
                                        },
                                        [t],
                                    );
                                    (0, o.useEffect)(() => {
                                        if (!e.current || !u) return;
                                        const t = new Je.Z((e) => n(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [n, u, e]);
                                })(m, f, i),
                                a().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            et.base,
                                            t,
                                            et.base__zeroPadding,
                                            i && et.base__isTruncationAvailable,
                                        ),
                                        style: D,
                                    },
                                    a().createElement('div', { className: et.unTruncated, ref: m }, p),
                                    a().createElement(
                                        Qe,
                                        {
                                            tooltipArgs: F,
                                            className: C()(
                                                et.tooltip,
                                                et[`tooltip__justify-${c}`],
                                                et[`tooltip__align-${d}`],
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    et.truncated,
                                                    !g.isTruncateFinished && i && et.truncated__hide,
                                                ),
                                                style: D,
                                            },
                                            g.isTruncateFinished && i ? g.elementList : p,
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
                        (Lt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Lt.apply(this, arguments)
                    );
                }
                class Mt extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Ae(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Ae(this.props.soundClick);
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
                            r = e.side,
                            o = e.type,
                            i = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(e, Tt)),
                            m = C()(St.base, St[`base__${o}`], St[`base__${r}`], null == i ? void 0 : i.base),
                            E = C()(St.icon, St[`icon__${o}`], St[`icon__${r}`], null == i ? void 0 : i.icon),
                            A = C()(St.glow, null == i ? void 0 : i.glow),
                            g = C()(St.caption, St[`caption__${o}`], null == i ? void 0 : i.caption),
                            h = C()(St.goto, null == i ? void 0 : i.goto);
                        return a().createElement(
                            'div',
                            Lt(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== o && a().createElement('div', { className: St.shine }),
                            a().createElement('div', { className: E }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: g }, t),
                            n && a().createElement('div', { className: h }, n),
                        );
                    }
                }
                let Rt;
                (Mt.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.responsiveHeader = 'responsiveHeader'),
                            (e.responsiveClosePosition = 'responsiveClosePosition'),
                            (e.disableResponsiveContentPosition = 'disableResponsiveContentPosition');
                    })(Rt || (Rt = {}));
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
                    Ot = (0, o.memo)(
                        ({
                            isShown: e = !0,
                            classMix: t,
                            onClose: u,
                            icon: n,
                            topRight: r,
                            title: i,
                            content: s,
                            buttons: l,
                            footer: d,
                            displayFlags: _,
                            classNames: m,
                        }) => {
                            const E = ((e, t) => Object.keys(t).reduce((t, u) => ((t[u] = e.includes(u)), t), {}))(
                                    _,
                                    Rt,
                                ),
                                A = E.responsiveHeader,
                                h = E.responsiveClosePosition,
                                p = E.disableResponsiveContentPosition,
                                F = (function (e, t, u) {
                                    const n = (0, o.useContext)(g);
                                    let r = Object.entries(n).filter(([e, t]) => !0 === t && e in c);
                                    return (
                                        u && (r = r.filter((e) => u.includes(e[0]))),
                                        e.reduce((e, u) => {
                                            const n = r.map((e) =>
                                                C()(
                                                    t[((e, t) => e + '__' + t)(u, e[0])],
                                                    t[
                                                        ((e, t) => {
                                                            return e + ((u = t)[0].toUpperCase() + u.slice(1));
                                                            var u;
                                                        })(u, e[0])
                                                    ],
                                                ),
                                            );
                                            return (e[u] = C()(t[u], ...n)), e;
                                        }, {})
                                    );
                                })(['base'], Nt),
                                f = (0, o.useCallback)(() => {
                                    u && u();
                                }, [u]),
                                D = C()(F.base, t),
                                b = C()(
                                    Nt.center,
                                    n && Nt.center__withIcon,
                                    e && Nt.center__shown,
                                    !p && Nt.center__responsive,
                                    null == m ? void 0 : m.center,
                                ),
                                v = C()(Nt.icon, A && Nt.icon__responsive, null == m ? void 0 : m.icon),
                                B = C()(Nt.title, A && Nt.title__responsive),
                                w = C()(Nt.closeBtn, h && Nt.closeBtn__responsive),
                                y = C()(
                                    Nt.divider,
                                    !s && Nt.divider__noContent,
                                    !d && Nt.divider__noFooter,
                                    null == m ? void 0 : m.divider,
                                );
                            return a().createElement(
                                'div',
                                { className: D },
                                a().createElement(
                                    'div',
                                    { className: Nt.topRight },
                                    r,
                                    a().createElement(
                                        'div',
                                        { className: w },
                                        a().createElement(Mt, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: f,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: b },
                                    n && a().createElement('div', { className: v }, n),
                                    i && a().createElement('div', { className: B }, i),
                                    s && a().createElement('div', { className: Nt.content }, s),
                                    a().createElement('div', { className: y }),
                                    d && a().createElement('div', { className: Nt.footer }, d),
                                    l && a().createElement('div', { className: Nt.buttons }, l),
                                ),
                            );
                        },
                    );
                function It() {
                    return !1;
                }
                console.log;
                var Pt = u(9174);
                function Ht(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Wt(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Wt(e, t);
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
                function Wt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const Vt = (e) => (0 === e ? window : window.subViews.get(e));
                function zt(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function jt(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                const $t = '-1',
                    Ut = ['commander'],
                    Gt = { id: $t, label: R.strings.dialogs.recruitWindow.menuEmptyRow() },
                    qt = ((e, t) => {
                        const u = (0, o.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: i, mocks: l }) {
                                const c = (0, o.useRef)([]),
                                    d = (u, n, r) => {
                                        var o;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = Vt,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function o(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = r.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const r = u(t),
                                                        o = n.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? o
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (u, o) => {
                                                        const i = 'string' == typeof o ? `${n}.${o}` : n,
                                                            l = s.O.view.addModelObserver(i, t, !0);
                                                        return r.set(l, u), e && u(a(o)), l;
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, t) => {
                                                        const u = a(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = a(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = Ht(r.keys()); !(e = u()).done; ) o(e.value, t);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(n),
                                            i =
                                                'real' === u
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (o = null == r ? void 0 : r.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === u ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            _ = e({
                                                mode: u,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = Pt.LO.box(n, { equals: It });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, Pt.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = Pt.LO.box(n, { equals: It });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, Pt.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = l(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = Pt.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, Pt.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                o = Object.entries(r),
                                                                a = o.reduce(
                                                                    (e, [t, u]) => ((e[u] = Pt.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, Pt.aD)((e) => {
                                                                            o.forEach(([t, u]) => {
                                                                                a[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: u, model: _, externalModel: i, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === u && r ? r.controls(m) : t(m),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    _ = (0, o.useRef)(!1),
                                    m = (0, o.useState)(n),
                                    E = m[0],
                                    A = m[1],
                                    g = (0, o.useState)(() => d(n, r, l)),
                                    h = g[0],
                                    p = g[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        _.current ? p(d(E, r, l)) : (_.current = !0);
                                    }, [l, E, r]),
                                    (0, o.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [h],
                                    ),
                                    a().createElement(u.Provider, { value: h }, i)
                                );
                            },
                            () => (0, o.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = Object.assign({}, e.primitives(['text', 'hasVoiceover']), {
                                iconModel: e.object('iconModel.icon'),
                                bgIconModel: e.object('iconModel.bgIcon'),
                                recruitContent: e.object('recruitContent'),
                                nations: e.array('recruitContent.nations'),
                                vehTypes: e.array('recruitContent.vehTypes'),
                                vehicles: e.array('recruitContent.vehicles'),
                                specializations: e.array('recruitContent.specializations'),
                            });
                            return Object.assign({}, t, {
                                computes: {
                                    prepareItems: (e, t) => {
                                        const u = [];
                                        u.push(Gt);
                                        const n = jt(e, (e) => ({ id: e.id, label: e.label, isDisabled: t }));
                                        return u.push(...n), u;
                                    },
                                    vehicleItems: (e = !1) => {
                                        const u = [];
                                        u.push(Gt);
                                        const n = jt(t.vehicles.get(), (t) => ({
                                            id: `${t.id}`,
                                            label: t.name,
                                            isDisabled: e,
                                            meta: { type: t.type, isElite: t.isElite, isIGR: t.isIGR },
                                        }));
                                        return u.push(...n), u;
                                    },
                                    isSelectedVehiclePremium: () => {
                                        const e = (function (e, t) {
                                            for (let u = 0; u < e.length; u++) {
                                                const n = zt(e[u]);
                                                if (t(n, u, e)) return n;
                                            }
                                        })(
                                            t.vehicles.get(),
                                            (e) => e.id === Number(t.recruitContent.get().selectedVehicle),
                                        );
                                        return !!e && e.isElite;
                                    },
                                    hasVisibledVoiceoverText: () =>
                                        t.hasVoiceover.get() &&
                                        !Ut.includes(t.recruitContent.get().selectedSpecialization),
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onNationChange: e.createCallback((e) => e || {}, 'recruitContent.onNationChange'),
                            onVehTypeChange: e.createCallback((e) => e || {}, 'recruitContent.onVehTypeChange'),
                            onVehicleChange: e.createCallback((e) => e || {}, 'recruitContent.onVehicleChange'),
                            onSpecializationChange: e.createCallback(
                                (e) => e || {},
                                'recruitContent.onSpecializationChange',
                            ),
                        }),
                    ),
                    Kt = qt[0],
                    Yt = qt[1],
                    Xt = 'RecruitIcon_base_dd',
                    Zt = 'RecruitIcon_block_ea',
                    Qt = 'RecruitIcon_block__backgroundIcon_32',
                    Jt = 'RecruitIcon_icon_06',
                    eu = 'RecruitIcon_icon__standartIcon_0e',
                    tu = 'RecruitIcon_voiceoverIcon_97',
                    uu = 'RecruitIcon_separator_b7',
                    nu = 'RecruitIcon_separator__small_8f',
                    ru = (e) => (e ? { backgroundImage: `url(${e})` } : void 0),
                    ou = ({ hasVoiceover: e = !1, icon: t, bgIcon: u }) =>
                        a().createElement(
                            'div',
                            { className: Xt },
                            a().createElement(
                                'div',
                                { className: C()(Zt, u && Qt), style: ru(u) },
                                a().createElement('div', { className: C()(Jt, u && eu), style: ru(t) }),
                            ),
                            a().createElement('div', { className: C()(uu, u && nu) }),
                            e && a().createElement('div', { className: tu }),
                        ),
                    au = [];
                function iu(e) {
                    const t = (0, o.useRef)(e);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, o.useCallback)((...e) => (0, t.current)(...e), au)
                    );
                }
                let su, lu;
                !(function (e) {
                    (e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected');
                })(su || (su = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium');
                    })(lu || (lu = {}));
                const cu = {
                    base: 'DropDownControl_base_46',
                    base__small: 'DropDownControl_base__small_22',
                    base__medium: 'DropDownControl_base__medium_09',
                    base__disabled: 'DropDownControl_base__disabled_37',
                    base__focused: 'DropDownControl_base__focused_63',
                    base__selected: 'DropDownControl_base__selected_46',
                    stateHighlight: 'DropDownControl_stateHighlight_16',
                    base__over: 'DropDownControl_base__over_e7',
                    base__down: 'DropDownControl_base__down_1c',
                    base__open: 'DropDownControl_base__open_e3',
                    label: 'DropDownControl_label_12',
                    label__small: 'DropDownControl_label__small_e7',
                    label__medium: 'DropDownControl_label__medium_0b',
                    label__placeholder: 'DropDownControl_label__placeholder_98',
                    button: 'DropDownControl_button_cb',
                    button__small: 'DropDownControl_button__small_b5',
                    button__medium: 'DropDownControl_button__medium_14',
                    gradient: 'DropDownControl_gradient_b5',
                    disabled: 'DropDownControl_disabled_4e',
                    arrow: 'DropDownControl_arrow_de',
                    arrow__small: 'DropDownControl_arrow__small_77',
                    arrow__medium: 'DropDownControl_arrow__medium_3d',
                    alert: 'DropDownControl_alert_75',
                    blink: 'DropDownControl_blink_68',
                };
                let du;
                !(function (e) {
                    (e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down');
                })(du || (du = {}));
                const _u = (0, o.memo)(
                        ({
                            parentId: e,
                            variant: t = su.Basic,
                            size: u = lu.Medium,
                            isOpen: n,
                            placeholder: r = R.strings.common.dropdown.placeholder.select(),
                            label: i = '',
                            classMix: s,
                            onClick: l,
                            soundHover: c,
                            soundClick: d,
                            customControl: _,
                        }) => {
                            const m = (0, o.useState)(du.Out),
                                E = m[0],
                                A = m[1],
                                g = (0, o.useState)(!1),
                                h = g[0],
                                p = g[1],
                                F = t === su.Disabled,
                                f = F || t === su.Basic,
                                D = (0, o.useCallback)(() => {
                                    F || (A(du.Over), c && Ae(c));
                                }, [F, c]),
                                b = (0, o.useCallback)(() => A(du.Out), []);
                            return (
                                (0, o.useEffect)(() => {
                                    f || p(!1);
                                }, [t, f]),
                                (0, o.useEffect)(() => {
                                    F && b();
                                }, [F, b]),
                                a().createElement(
                                    'div',
                                    {
                                        id: e ? `${e}_control` : void 0,
                                        className: C()(
                                            cu.base,
                                            n && cu.base__open,
                                            cu[`base__${E}`],
                                            (f || !h) && cu[`base__${t}`],
                                            s,
                                        ),
                                        onMouseEnter: D,
                                        onMouseUp: () => {
                                            !F && A(du.Over), !f && p(!0);
                                        },
                                        onMouseDown: () => {
                                            F || (A(du.Down), d && Ae(d));
                                        },
                                        onMouseLeave: b,
                                        onClick: l,
                                    },
                                    a().createElement('div', { className: cu.stateHighlight }),
                                    !h && t === su.Alert && a().createElement('div', { className: cu.alert }),
                                    a().createElement(
                                        'div',
                                        { className: C()(cu.label, cu[`label__${u}`], !i && cu.label__placeholder) },
                                        _ || a().createElement(Me, { content: i || r }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: C()(cu.button, cu[`button__${u}`]) },
                                        a().createElement('div', { className: C()(cu.arrow, cu[`arrow__${u}`]) }),
                                        a().createElement('div', { className: cu.gradient }),
                                        F && a().createElement('div', { className: cu.disabled }),
                                    ),
                                )
                            );
                        },
                    ),
                    mu = (e, t, u) => (u < e ? e : u > t ? t : u);
                function Eu(e, t, u = []) {
                    const n = (0, o.useRef)(0),
                        r = (0, o.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, o.useEffect)(() => r, [r]);
                    const a = (null != u ? u : []).concat([t]);
                    return [
                        (0, o.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, a),
                        r,
                    ];
                }
                function Au(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return gu(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return gu(e, t);
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
                function gu(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                function hu(e, t, u) {
                    const n = (0, o.useMemo)(
                        () =>
                            (function (e, t, u, n) {
                                let r,
                                    o = !1,
                                    a = 0;
                                function i() {
                                    r && clearTimeout(r);
                                }
                                function s(...s) {
                                    const l = this,
                                        c = Date.now() - a;
                                    function d() {
                                        (a = Date.now()), u.apply(l, s);
                                    }
                                    o ||
                                        (n && !r && d(),
                                        i(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : d,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                    (s.cancel = function () {
                                        i(), (o = !0);
                                    }),
                                    s
                                );
                            })(u, e),
                        t,
                    );
                    return (0, o.useEffect)(() => n.cancel, [n]), n;
                }
                var pu = u(7030);
                let Fu;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Fu || (Fu = {}));
                const fu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Du = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const i = (e, u) => {
                            const n = t(e),
                                r = n[0],
                                o = n[1];
                            return o <= r ? 0 : mu(r, o, u);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? fu : c,
                                _ = (0, o.useRef)(null),
                                m = (0, o.useRef)(null),
                                E = (() => {
                                    const e = (0, o.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        r = (e, ...u) => {
                                            for (var n, r = Au(t(e).values()); !(n = r()).done; ) (0, n.value)(...u);
                                        };
                                    return (0, o.useMemo)(() => ({ on: u, off: n, trigger: r }), []);
                                })(),
                                A = hu(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, pu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (u(t, e), E.trigger('change', e), a && A());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                h = g[0],
                                p = g[1],
                                F = (0, o.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = h.scrollPosition.get(),
                                            o = (null != (n = h.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, t * u + o + r);
                                    },
                                    [h.scrollPosition],
                                ),
                                f = (0, o.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = _.current;
                                        n &&
                                            p.start({
                                                scrollPosition: i(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: d.animationConfig,
                                                from: { scrollPosition: i(n, h.scrollPosition.get()) },
                                            });
                                    },
                                    [p, d.animationConfig, h.scrollPosition],
                                ),
                                D = (0, o.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            u = m.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, d.step),
                                            o = F(t, e, n);
                                        f(o);
                                    },
                                    [f, F, d.step],
                                ),
                                C = (0, o.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && D(n(e)),
                                            _.current && E.trigger('mouseWheel', e, h.scrollPosition, t(_.current));
                                    },
                                    [h.scrollPosition, D, E],
                                ),
                                b = ((e, t = []) => {
                                    const u = (0, o.useRef)(),
                                        n = (0, o.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, o.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        ke(() => {
                                            const e = _.current;
                                            e &&
                                                (f(i(e, h.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [f, h.scrollPosition.goal],
                                ),
                                v = iu(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = i(e, h.scrollPosition.goal);
                                    t !== h.scrollPosition.goal && f(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', b),
                                    () => {
                                        window.removeEventListener('resize', b);
                                    }
                                ),
                                [b],
                            );
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: C,
                                    applyScroll: f,
                                    applyStepTo: D,
                                    contentRef: _,
                                    wrapperRef: m,
                                    scrollPosition: p,
                                    animationScroll: h,
                                    recalculateContent: v,
                                    events: { on: E.on, off: E.off },
                                }),
                                [h.scrollPosition, f, D, E.off, E.on, v, C, p, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Cu = Du({
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
                        getDirection: (e) => (e.deltaY > 1 ? Fu.Next : Fu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    bu = 'HorizontalBar_base_49',
                    vu = 'HorizontalBar_base__nonActive_82',
                    Bu = 'HorizontalBar_leftButton_5f',
                    wu = 'HorizontalBar_rightButton_03',
                    yu = 'HorizontalBar_track_0d',
                    xu = 'HorizontalBar_thumb_fd',
                    ku = 'HorizontalBar_rail_32',
                    Su = 'disable',
                    Tu = { pending: !1, offset: 0 },
                    Lu = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Mu = () => {},
                    Ru = (e, t) => Math.max(20, e.offsetWidth * t),
                    Nu = (0, o.memo)(
                        ({
                            api: e,
                            classNames: t = {},
                            getStepByRailClick: u = Lu,
                            onDrag: n = Mu,
                            onClick: r = Mu,
                        }) => {
                            const i = (0, o.useRef)(null),
                                l = (0, o.useRef)(null),
                                c = (0, o.useRef)(null),
                                d = (0, o.useRef)(null),
                                _ = (0, o.useRef)(null),
                                m = e.stepTimeout || 100,
                                E = (0, o.useState)(Tu),
                                A = E[0],
                                g = E[1],
                                h = (0, o.useCallback)(
                                    (e) => {
                                        g(e),
                                            _.current &&
                                                n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                    },
                                    [n],
                                ),
                                p = () => {
                                    const t = d.current,
                                        u = _.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(n && t && u && r)) return;
                                    const o = e.animationScroll.scrollPosition.get(),
                                        a = Math.min(1, n / r),
                                        i = mu(0, 1, o / (r - n)),
                                        s = (t.offsetWidth - Ru(t, a)) * i;
                                    (u.style.transform = `translateX(${0 | s}px)`),
                                        ((e) => {
                                            if (l.current && c.current && d.current && _.current) {
                                                if (0 === e)
                                                    return (
                                                        l.current.classList.add(Su), void c.current.classList.remove(Su)
                                                    );
                                                if (
                                                    ((t = d.current),
                                                    (u = _.current),
                                                    e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                                )
                                                    return (
                                                        l.current.classList.remove(Su), void c.current.classList.add(Su)
                                                    );
                                                var t, u;
                                                l.current.classList.remove(Su), c.current.classList.remove(Su);
                                            }
                                        })(s);
                                },
                                F = iu(() => {
                                    (() => {
                                        const t = _.current,
                                            u = d.current,
                                            n = e.getWrapperSize(),
                                            r = e.getContainerSize();
                                        if (!(r && t && n && u)) return;
                                        const o = Math.min(1, n / r);
                                        (t.style.width = `${Ru(u, o)}px`),
                                            (t.style.display = 'flex'),
                                            i.current &&
                                                (1 === o
                                                    ? i.current.classList.add(vu)
                                                    : i.current.classList.remove(vu));
                                    })(),
                                        p();
                                });
                            (0, o.useEffect)(() => ke(F)),
                                (0, o.useEffect)(
                                    () =>
                                        ke(() => {
                                            const t = () => {
                                                p();
                                            };
                                            let u = Mu;
                                            const n = () => {
                                                u(), (u = ke(F));
                                            };
                                            return (
                                                e.events.on('recalculateContent', F),
                                                e.events.on('rest', t),
                                                e.events.on('change', t),
                                                e.events.on('resizeHandled', n),
                                                () => {
                                                    u(),
                                                        e.events.off('recalculateContent', F),
                                                        e.events.off('rest', t),
                                                        e.events.off('change', t),
                                                        e.events.off('resizeHandled', n);
                                                }
                                            );
                                        }),
                                    [e],
                                ),
                                (0, o.useEffect)(() => {
                                    if (!A.pending) return;
                                    const t = s.O.client.events.mouse.move(([t, u]) => {
                                            var r;
                                            const o = e.contentRef.current,
                                                a = e.wrapperRef.current;
                                            if (!o || !a) return;
                                            const i = d.current,
                                                s = _.current;
                                            if (!i || !s) return;
                                            if ('inside' === u && t.clientX < 0) return;
                                            const l = t.clientX - A.offset - i.getBoundingClientRect().x,
                                                c = (l / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(o, c),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                            }),
                                                n({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: c });
                                        }),
                                        u = s.O.client.events.mouse.up(() => {
                                            t(), h(Tu);
                                        });
                                    return () => {
                                        t(), u();
                                    };
                                }, [e, A.offset, A.pending, n, h]);
                            const f = Eu(
                                    (t) => {
                                        e.applyStepTo(t), r(t);
                                    },
                                    m,
                                    [e],
                                ),
                                D = f[0],
                                b = f[1];
                            (0, o.useEffect)(
                                () => (
                                    document.addEventListener('mouseup', b, !0),
                                    () => document.removeEventListener('mouseup', b, !0)
                                ),
                                [b],
                            );
                            const v = (e) => {
                                e.target.classList.contains(Su) || Ae('highlight');
                            };
                            return a().createElement(
                                'div',
                                { className: C()(bu, t.base), ref: i, onWheel: e.handleMouseWheel },
                                a().createElement('div', {
                                    className: C()(Bu, t.leftButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(Su) || 0 !== e.button || (Ae('play'), D(Fu.Next));
                                    },
                                    onMouseUp: b,
                                    ref: l,
                                    onMouseEnter: v,
                                }),
                                a().createElement(
                                    'div',
                                    {
                                        className: C()(yu, t.track),
                                        onMouseDown: (t) => {
                                            const n = _.current;
                                            if (n && 0 === t.button)
                                                if ((Ae('play'), t.target === n))
                                                    h({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                                else {
                                                    ((t) => {
                                                        const n = _.current,
                                                            r = e.contentRef.current;
                                                        if (!n || !r) return;
                                                        const o = u(e);
                                                        e.applyScroll(e.animationScroll.scrollPosition.get() + o * t);
                                                    })(t.screenX > n.getBoundingClientRect().x ? Fu.Prev : Fu.Next);
                                                }
                                        },
                                        ref: d,
                                        onMouseEnter: v,
                                    },
                                    a().createElement('div', { ref: _, className: C()(xu, t.thumb) }),
                                    a().createElement('div', { className: C()(ku, t.rail) }),
                                ),
                                a().createElement('div', {
                                    className: C()(wu, t.rightButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(Su) || 0 !== e.button || (Ae('play'), D(Fu.Prev));
                                    },
                                    onMouseUp: b,
                                    ref: c,
                                    onMouseEnter: v,
                                }),
                            );
                        },
                    ),
                    Ou = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Iu = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: i,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: C()(Ou.base, e.base) });
                            }, [n]),
                            _ = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return a().createElement(
                            'div',
                            { className: C()(Ou.defaultScroll, u), onWheel: t.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: C()(Ou.defaultScrollArea, r) },
                                a().createElement(Pu, { className: s, api: _, classNames: i }, e),
                            ),
                            a().createElement(Nu, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Pu = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, o.useEffect)(() => ke(e.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: C()(Ou.base, t) },
                            a().createElement(
                                'div',
                                {
                                    className: C()(Ou.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                a().createElement(
                                    'div',
                                    { className: C()(Ou.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (Pu.Bar = Nu), (Pu.Default = Iu);
                const Hu = Du({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Fu.Next : Fu.Prev),
                    }),
                    Wu = 'VerticalBar_base_f3',
                    Vu = 'VerticalBar_base__nonActive_42',
                    zu = 'VerticalBar_topButton_d7',
                    ju = 'VerticalBar_bottomButton_06',
                    $u = 'VerticalBar_track_df',
                    Uu = 'VerticalBar_thumb_32',
                    Gu = 'VerticalBar_rail_43',
                    qu = 'disable',
                    Ku = () => {},
                    Yu = { pending: !1, offset: 0 },
                    Xu = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Zu = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Qu = (e, t) => Math.max(20, e.offsetHeight * t),
                    Ju = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Xu, onDrag: n = Ku }) => {
                        const r = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            d = (0, o.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, o.useState)(Yu),
                            E = m[0],
                            A = m[1],
                            g = (0, o.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            h = iu(() => {
                                const t = d.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(n && o && t && u)) return;
                                const a = Math.min(1, n / o);
                                return (
                                    (t.style.height = `${Qu(u, a)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === a ? r.current.classList.add(Vu) : r.current.classList.remove(Vu)),
                                    a
                                );
                            }),
                            p = iu(() => {
                                const t = c.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, n / r),
                                    s = mu(0, 1, o / (r - n)),
                                    _ = (t.offsetHeight - Qu(t, a)) * s;
                                (u.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(qu), void l.current.classList.remove(qu);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(qu), void l.current.classList.add(qu);
                                            var t, u;
                                            i.current.classList.remove(qu), l.current.classList.remove(qu);
                                        }
                                    })(_);
                            }),
                            F = iu(() => {
                                Zu(e, () => {
                                    h(), p();
                                });
                            });
                        (0, o.useEffect)(() => ke(F)),
                            (0, o.useEffect)(() => {
                                const t = () => {
                                    Zu(e, () => {
                                        p();
                                    });
                                };
                                let u = Ku;
                                const n = () => {
                                    u(), (u = ke(F));
                                };
                                return (
                                    e.events.on('recalculateContent', F),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', F),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => {
                                if (!E.pending) return;
                                const t = s.O.client.events.mouse.up(() => {
                                        g(Yu);
                                    }),
                                    u = s.O.client.events.mouse.move(([t]) => {
                                        Zu(e, (u) => {
                                            const r = c.current,
                                                o = d.current,
                                                a = e.getContainerSize();
                                            if (!r || !o || !a) return;
                                            const i = t.screenY - E.offset - r.getBoundingClientRect().y,
                                                s = (i / r.offsetHeight) * a;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: o, thumbOffset: i, contentOffset: s });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, n, g]);
                        const f = Eu((t) => e.applyStepTo(t), _, [e]),
                            D = f[0],
                            b = f[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const v = (e) => {
                            e.target.classList.contains(qu) || Ae('highlight');
                        };
                        return a().createElement(
                            'div',
                            { className: C()(Wu, t.base), ref: r, onWheel: e.handleMouseWheel },
                            a().createElement('div', {
                                className: C()(zu, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(qu) || 0 !== e.button || (Ae('play'), D(Fu.Next));
                                },
                                ref: i,
                                onMouseEnter: v,
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: C()($u, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if ((Ae('play'), t.target === n))
                                                g({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        Zu(e, (n) => {
                                                            if (!n) return;
                                                            const r = u(e),
                                                                o = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(o);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? Fu.Prev : Fu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                a().createElement('div', { ref: d, className: C()(Uu, t.thumb) }),
                                a().createElement('div', { className: C()(Gu, t.rail) }),
                            ),
                            a().createElement('div', {
                                className: C()(ju, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(qu) || 0 !== e.button || (Ae('play'), D(Fu.Prev));
                                },
                                onMouseUp: b,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    en = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    tn = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: i,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: C()(en.base, e.base) });
                            }, [n]),
                            _ = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return a().createElement(
                            'div',
                            { className: C()(en.defaultScroll, u), onWheel: t.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: C()(en.area, r) },
                                a().createElement(un, { className: i, classNames: s, api: _ }, e),
                            ),
                            a().createElement(Ju, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    un = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, o.useEffect)(() => ke(n.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: C()(en.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: C()(en.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                un.Default = tn;
                const nn = { Vertical: r, Horizontal: n },
                    rn = 'VerticalAutoScroll_base_db',
                    on = { base: 'VerticalAutoScroll_barBase_93' },
                    an = { content: 'VerticalAutoScroll_content_47' },
                    sn = ({
                        children: e,
                        isEnabled: t = !0,
                        selectedItemId: u,
                        scrollAreaKey: n = 'scrollArea',
                        withCompleteTrigger: r = !1,
                        containerClasses: i,
                    }) => {
                        const s = (0, o.useState)(!1),
                            l = s[0],
                            c = s[1],
                            d = (0, o.useState)(!1),
                            _ = d[0],
                            m = d[1],
                            E = (0, o.useRef)(null),
                            A = (0, o.useRef)(null),
                            g = Hu(),
                            h = iu(() => {
                                c(!0);
                            }),
                            p = (0, o.useCallback)(() => {
                                c(!1);
                            }, []),
                            F = (0, o.useCallback)(() => {
                                const e = A.current,
                                    t = E.current;
                                if (e && g && t) {
                                    const u = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    r && g.events.on('rest', h), g.applyScroll(u);
                                }
                            }, [h, g, r]);
                        (0, o.useEffect)(
                            () => () => {
                                g.events.off('rest', h);
                            },
                            [h, g.events, r],
                        ),
                            (0, o.useEffect)(() => {
                                if (t && null !== u) return ke(F);
                            }, [n, F, u, t]),
                            (0, o.useEffect)(() => {
                                const e = () => {
                                    const e = g.getContainerSize(),
                                        t = g.getWrapperSize();
                                    e && t && m(e > t);
                                };
                                return (
                                    g.events.on('recalculateContent', e),
                                    () => {
                                        g.events.off('recalculateContent', e);
                                    }
                                );
                            }, [_, g]);
                        const f = {
                                scrollContainerRef: E,
                                selectedItemRef: A,
                                selectedItemId: u,
                                isScrollComplete: l,
                                scrollbarActive: _,
                                onScrollAnimationComplete: p,
                            },
                            D = (0, o.cloneElement)(e, f);
                        return a().createElement(
                            'div',
                            { className: C()(rn, i), ref: E },
                            a().createElement(nn.Vertical.Area, { api: g, key: n, classNames: an }, D),
                            a().createElement(nn.Vertical.Bar, { api: g, classNames: on }),
                        );
                    },
                    ln = {
                        base: 'DropDownItem_base_5e',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    cn = ['size', 'classMix', 'onClick', 'itemRenderer'];
                const dn = (0, o.memo)((e) => {
                        let t = e.size,
                            u = e.classMix,
                            n = e.onClick,
                            r = e.itemRenderer,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, cn);
                        const s = i.id,
                            l = i.isSelected,
                            c = i.isDisabled,
                            d = i.label,
                            _ = i.soundHover,
                            m = i.soundClick,
                            E = (0, o.useCallback)(
                                (e) => {
                                    c || (n && n(e, s));
                                },
                                [s, c, n],
                            ),
                            A = (0, o.useCallback)(() => {
                                c || (_ && Ae(_));
                            }, [c, _]),
                            g = (0, o.useCallback)(() => {
                                c || (m && Ae(m));
                            }, [c, m]),
                            h = C()(ln.base, t && ln[`base__${t}`], l && ln.base__selected, c && ln.base__disabled, u);
                        return a().createElement(
                            'div',
                            { className: h, onMouseEnter: A, onMouseDown: g, onClick: E },
                            r ? r(i) : d,
                        );
                    }),
                    _n = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function mn() {
                    return (
                        (mn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        mn.apply(this, arguments)
                    );
                }
                const En = ({
                        size: e,
                        items: t,
                        selectedIds: u,
                        selectedItemId: n,
                        selectedItemRef: r,
                        onClick: o,
                        parentId: i,
                        soundHover: s,
                        soundClick: l,
                        itemClassMix: c,
                        itemRenderer: d,
                        scrollbarActive: _,
                    }) =>
                        a().createElement(
                            'div',
                            { className: C()(_n.base, _ && _n.base__withScroll) },
                            t.map((t) => {
                                const _ = `${i}_${t.id}`;
                                return a().createElement(
                                    'div',
                                    { id: i ? _ : void 0, key: _, ref: t.id === n ? r : null },
                                    a().createElement(
                                        dn,
                                        mn({ size: e, soundHover: s, soundClick: l, classMix: c, itemRenderer: d }, t, {
                                            onClick: o,
                                            isSelected: u.includes(t.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    An = {
                        base: 'DropDownList_base_62',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                    },
                    gn = ({
                        parentId: e,
                        size: t = lu.Medium,
                        items: u,
                        selectedIds: n,
                        isOpen: r,
                        autoScroll: i,
                        classMix: s,
                        itemClassMix: l,
                        itemRenderer: c,
                        onClick: d,
                        soundHover: _,
                        soundClick: m,
                    }) => {
                        const E = (0, o.useState)(null),
                            A = E[0],
                            g = E[1],
                            h = ee(r);
                        (0, o.useEffect)(() => {
                            if (r && !h) {
                                const e = ((e, t) => {
                                    if (!t.length) return null;
                                    const u = e.find((e) => t.includes(e.id));
                                    return u ? u.id : null;
                                })(u, n);
                                null !== e && g(e);
                            }
                            r || g(null);
                        }, [r, u, n, h]);
                        const p = e ? `${e}_list` : void 0;
                        return a().createElement(
                            'div',
                            { id: p, className: C()(An.base, An[`base__${t}`], s) },
                            a().createElement(
                                sn,
                                { selectedItemId: A, isEnabled: i },
                                a().createElement(En, {
                                    parentId: e,
                                    items: u,
                                    size: t,
                                    selectedIds: n,
                                    onClick: d,
                                    soundHover: _,
                                    soundClick: m,
                                    itemClassMix: l,
                                    itemRenderer: c,
                                }),
                            ),
                        );
                    },
                    hn = {
                        base: 'PureDropDown_base_fc',
                        base__small: 'PureDropDown_base__small_a6',
                        base__medium: 'PureDropDown_base__medium_05',
                        control__down: 'PureDropDown_control__down_18',
                        list: 'PureDropDown_list_28',
                        list__up: 'PureDropDown_list__up_a1',
                        list__down: 'PureDropDown_list__down_c4',
                        list__under: 'PureDropDown_list__under_64',
                        list__above: 'PureDropDown_list__above_c8',
                    },
                    pn = (0, o.memo)(
                        ({
                            componentId: e,
                            containerRef: t,
                            items: u,
                            selected: n = [],
                            variant: r = su.Basic,
                            size: i = lu.Medium,
                            multiple: s = !1,
                            autoScroll: l = !0,
                            placeholder: c,
                            classMix: d,
                            className: _,
                            controlRenderer: m,
                            itemRenderer: E,
                            open: A,
                            tooltipArgs: g,
                            onChanges: h,
                            onOpen: p,
                            onClose: F,
                            onClick: f,
                            onClickOutside: D,
                            onMouseEnter: b,
                            onMouseDown: v,
                            onMouseUp: B,
                            onMouseLeave: w,
                            soundHover: y = 'highlight',
                            soundClick: x = 'play',
                            soundItemHover: k,
                            soundItemClick: S,
                        }) => {
                            const T = (0, o.useRef)(null),
                                L = (0, o.useRef)(null),
                                M = (0, o.useRef)({ open: !1, listAbove: !1 }),
                                R = (0, o.useState)(!1),
                                N = R[0],
                                O = R[1],
                                I = (0, o.useState)(!1),
                                P = I[0],
                                H = I[1],
                                W = ((e, t) => {
                                    const u = Array.isArray(e) ? e : [e];
                                    return !t && u.length > 1 ? u.slice(0, 1) : u;
                                })(n, s),
                                V = r !== su.Disabled,
                                z = void 0 === A,
                                $ = Boolean(z ? N : A),
                                U = iu(() => {
                                    M.current.open && ((M.current.open = !1), O(!1), null == F || F());
                                });
                            ne($ ? te.n.ESCAPE : te.n.NONE, U, $);
                            const G = iu(() => {
                                null == D || D(), z && (O(!1), (M.current.open = !1), null == F || F());
                            });
                            (0, o.useEffect)(() => {
                                const e = T.current;
                                if (e && $)
                                    return (
                                        j.c1.register(e, G),
                                        () => {
                                            j.c1.unregister(e, G);
                                        }
                                    );
                            }, [$, G]),
                                (0, o.useEffect)(() => {
                                    void 0 !== A && (M.current.open = A);
                                }, [A]);
                            const q = (0, o.useCallback)(() => {
                                if (!T.current || !L.current) return;
                                const e = t && t.current,
                                    u = e ? e.getBoundingClientRect().bottom : window.innerHeight,
                                    n =
                                        T.current.getBoundingClientRect().bottom +
                                            L.current.getBoundingClientRect().height >
                                        u;
                                n !== M.current.listAbove && ((M.current.listAbove = n), H(n));
                            }, [t]);
                            (0, o.useEffect)(() => ke(() => ke(q)), [q, i, u.length]);
                            const K = (0, o.useCallback)(
                                    (e) => {
                                        const t = W.findIndex((t) => t === e) > -1;
                                        let u = [];
                                        (u = s ? (t ? W.filter((t) => t !== e) : [e, ...W]) : t ? [] : [e]),
                                            null == h || h(u);
                                    },
                                    [s, h, W],
                                ),
                                Y = (0, o.useCallback)(() => {
                                    z &&
                                        ((M.current.open = !M.current.open),
                                        O(M.current.open),
                                        M.current.open ? null == p || p() : null == F || F());
                                }, [z, p, F]),
                                X = (0, o.useCallback)(
                                    (e) => {
                                        V && Y(), null == f || f(e);
                                    },
                                    [V, f, Y],
                                ),
                                Z = (0, o.useCallback)(
                                    (e, t) => {
                                        null == f || f(e, t), K(t), s || Y();
                                    },
                                    [f, s, Y, K],
                                ),
                                Q = (0, o.useMemo)(
                                    () =>
                                        u
                                            .filter((e) => W.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [u, W],
                                ),
                                J = (0, o.useMemo)(() => u.filter((e) => W.includes(e.id)), [u, W]),
                                ee = m ? m(J) : void 0;
                            return a().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: T,
                                    className: C()(hn.base, hn[`base__${i}`], _, null == d ? void 0 : d.base),
                                    onMouseEnter: b,
                                    onMouseUp: B,
                                    onMouseDown: v,
                                    onMouseLeave: w,
                                },
                                a().createElement(
                                    'div',
                                    { className: C()(hn.control, $ && hn.control__down) },
                                    a().createElement(
                                        Qe,
                                        { tooltipArgs: g },
                                        a().createElement(_u, {
                                            parentId: e,
                                            size: i,
                                            variant: r,
                                            isOpen: $,
                                            placeholder: c,
                                            label: Q,
                                            classMix: d && d.control,
                                            onClick: X,
                                            soundHover: y,
                                            soundClick: x,
                                            customControl: ee,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    {
                                        ref: L,
                                        className: C()(
                                            hn.list,
                                            $ ? hn.list__down : hn.list__up,
                                            P ? hn.list__above : hn.list__under,
                                        ),
                                    },
                                    a().createElement(gn, {
                                        parentId: e,
                                        size: i,
                                        items: u,
                                        selectedIds: W,
                                        isOpen: $,
                                        autoScroll: l,
                                        classMix: d && d.list,
                                        itemClassMix: d && d.item,
                                        itemRenderer: E,
                                        onClick: Z,
                                        soundHover: k || y,
                                        soundClick: S || x,
                                    }),
                                ),
                            );
                        },
                    );
                let Fn;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Disabled = 'disabled'), (e.Locked = 'locked');
                })(Fn || (Fn = {}));
                const fn = 'WarningText_base_10',
                    Dn = 'WarningText_alertIcon_8f',
                    Cn = (0, o.memo)(({ className: e, children: t }) =>
                        a().createElement(
                            'div',
                            { className: C()(fn, e) },
                            a().createElement('div', { className: Dn }),
                            t,
                        ),
                    ),
                    bn = 'DropDownHeader_base_2c',
                    vn = 'DropDownHeader_lock_59',
                    Bn = (0, o.memo)(({ label: e, state: t }) =>
                        a().createElement(
                            'div',
                            { className: bn },
                            e,
                            t === Fn.Locked && a().createElement('div', { className: vn }),
                        ),
                    ),
                    wn = 'NationRender_text_e6',
                    yn = 'NationRender_base_14',
                    xn = 'NationRender_base__header_e7',
                    kn = 'NationRender_base__disabled_07',
                    Sn = 'NationRender_icon_90',
                    Tn = (e) => {
                        if (0 === e.length) return;
                        const t = e[0];
                        return Ln(t, !0);
                    },
                    Ln = ({ id: e, label: t, isDisabled: u }, n = !1) => {
                        const r = (0, o.useMemo)(
                            () => ({ backgroundImage: `url(${R.images.gui.maps.icons.filters.nations.$dyn(e)})` }),
                            [e],
                        );
                        if (e === $t) return R.strings.dialogs.recruitWindow.menuEmptyRow();
                        const i = C()(yn, n && xn, u && kn);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: Sn, style: r }),
                            a().createElement('div', { className: wn }, n ? a().createElement(Me, { content: t }) : t),
                        );
                    },
                    Mn = 'SpecializationRender_text_c3',
                    Rn = 'SpecializationRender_base_16',
                    Nn = 'SpecializationRender_base__header_6f',
                    On = 'SpecializationRender_base__disabled_c7',
                    In = 'SpecializationRender_icon_49',
                    Pn = (e) => {
                        if (0 === e.length) return;
                        const t = e[0];
                        return Hn(t, !0);
                    },
                    Hn = ({ id: e, label: t, isDisabled: u }, n = !1) => {
                        const r = (0, o.useMemo)(
                            () => ({
                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_24x24.$dyn(e)})`,
                            }),
                            [e],
                        );
                        if (e === $t) return R.strings.dialogs.recruitWindow.menuEmptyRow();
                        const i = C()(Rn, n && Nn, u && On);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: In, style: r }),
                            a().createElement('div', { className: Mn }, t),
                        );
                    },
                    Wn = 'VehicleRender_base_49',
                    Vn = 'VehicleRender_base__header_cb',
                    zn = 'VehicleRender_base__disabled_25',
                    jn = 'VehicleRender_icon_5e',
                    $n = 'VehicleRender_text_52',
                    Un = 'VehicleRender_text__default_50',
                    Gn = 'VehicleRender_igr_ba',
                    qn = (e) => {
                        if (0 === e.length) return;
                        const t = e[0];
                        return Kn(t, !0);
                    },
                    Kn = ({ id: e, label: t, isDisabled: u, meta: n }, r = !1) => {
                        const i = n ? n.type : '',
                            s = n && n.isElite,
                            l = n && n.isIGR,
                            c = e === $t,
                            d = (0, o.useMemo)(() => {
                                if (!c)
                                    return s
                                        ? {
                                              backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.elite.$dyn(i)})`,
                                          }
                                        : {
                                              backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.c_24x24.$dyn(i)})`,
                                          };
                            }, [c, s, i]);
                        if (c) return R.strings.dialogs.recruitWindow.menuEmptyRow();
                        const _ = C()($n, e === $t && Un),
                            m = C()(Wn, r && Vn, u && zn);
                        return a().createElement(
                            'div',
                            { className: m },
                            a().createElement('div', { className: jn, style: d }),
                            l && a().createElement('div', { className: Gn }),
                            a().createElement('div', { className: _ }, r ? a().createElement(Me, { content: t }) : t),
                        );
                    },
                    Yn = 'VehTypeRender_text_a1',
                    Xn = 'VehTypeRender_base_ec',
                    Zn = 'VehTypeRender_base__header_a0',
                    Qn = 'VehTypeRender_base__disabled_b8',
                    Jn = 'VehTypeRender_icon_93',
                    er = (e) => {
                        if (0 === e.length) return;
                        const t = e[0];
                        return tr(t, !0);
                    },
                    tr = ({ id: e, label: t, isDisabled: u }, n = !1) => {
                        const r = e.toString().replace('-', '_'),
                            i = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.c_24x24_flat.$dyn(r)})`,
                                }),
                                [r],
                            );
                        if (e === $t) return R.strings.dialogs.recruitWindow.menuEmptyRow();
                        const s = C()(Xn, n && Zn, u && Qn);
                        return a().createElement(
                            'div',
                            { className: s },
                            a().createElement('div', { className: Jn, style: i }),
                            a().createElement('div', { className: Yn }, t),
                        );
                    },
                    ur = 'RecruitContent_base_f3',
                    nr = 'RecruitContent_content_ab',
                    rr = 'RecruitContent_column_28',
                    or = 'RecruitContent_column__last_c7',
                    ar = 'RecruitContent_dropDown_dc',
                    ir = 'RecruitContent_warning_ac',
                    sr = 'RecruitContent_voiceoverText_07',
                    lr = 'RecruitContent_microphoneIcon_22',
                    cr = (0, qe.Pi)(() => {
                        const e = Yt(),
                            t = e.model,
                            u = e.controls,
                            n = t.recruitContent.get(),
                            r = n.nationState,
                            i = n.vehTypeState,
                            s = n.vehicleState,
                            l = n.specializationState,
                            c = n.selectedNation,
                            d = n.selectedVehType,
                            _ = n.selectedVehicle,
                            m = n.selectedSpecialization,
                            E = t.nations.get(),
                            A = t.vehTypes.get(),
                            g = t.specializations.get(),
                            h = u.onNationChange,
                            p = u.onVehTypeChange,
                            F = u.onVehicleChange,
                            f = u.onSpecializationChange,
                            D = r !== Fn.Normal,
                            b = i !== Fn.Normal,
                            v = s !== Fn.Normal,
                            B = l !== Fn.Normal,
                            w = (0, o.useCallback)(
                                (e) => {
                                    if (e) {
                                        const t = e[0];
                                        t && h({ id: t });
                                    }
                                },
                                [h],
                            ),
                            y = (0, o.useCallback)(
                                (e) => {
                                    if (e) {
                                        const t = e[0];
                                        t && p({ id: t });
                                    }
                                },
                                [p],
                            ),
                            x = (0, o.useCallback)(
                                (e) => {
                                    if (e) {
                                        const t = e[0];
                                        t && F({ id: t });
                                    }
                                },
                                [F],
                            ),
                            k = (0, o.useCallback)(
                                (e) => {
                                    if (e) {
                                        const t = e[0];
                                        t && f({ id: t });
                                    }
                                },
                                [f],
                            );
                        return a().createElement(
                            'div',
                            { className: ur },
                            t.computes.isSelectedVehiclePremium() &&
                                a().createElement(
                                    Cn,
                                    { className: ir },
                                    R.strings.dialogs.recruit.warning.premiumVehicle(),
                                ),
                            a().createElement(
                                'div',
                                { className: nr },
                                a().createElement(
                                    'div',
                                    { className: rr },
                                    a().createElement(Bn, {
                                        label: R.strings.dialogs.recruitWindow.nation(),
                                        state: r,
                                    }),
                                    a().createElement(
                                        'div',
                                        { className: ar },
                                        a().createElement(pn, {
                                            key: `nationDdl${c}`,
                                            items: t.computes.prepareItems(E, D),
                                            variant: D ? su.Disabled : su.Basic,
                                            selected: c,
                                            itemRenderer: Ln,
                                            controlRenderer: Tn,
                                            onChanges: w,
                                        }),
                                    ),
                                    a().createElement(Bn, {
                                        label: R.strings.dialogs.recruitWindow.vehicleType(),
                                        state: s,
                                    }),
                                    a().createElement(
                                        'div',
                                        { className: ar },
                                        a().createElement(pn, {
                                            key: `vehDdl${_}`,
                                            items: t.computes.vehicleItems(v),
                                            selected: _,
                                            variant: v ? su.Disabled : su.Basic,
                                            itemRenderer: Kn,
                                            controlRenderer: qn,
                                            onChanges: x,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: C()(rr, or) },
                                    a().createElement(Bn, {
                                        label: R.strings.dialogs.recruitWindow.vehicleClass(),
                                        state: i,
                                    }),
                                    a().createElement(
                                        'div',
                                        { className: ar },
                                        a().createElement(pn, {
                                            key: `vehTypeDdl${d}`,
                                            items: t.computes.prepareItems(A, b),
                                            selected: d,
                                            variant: b ? su.Disabled : su.Basic,
                                            itemRenderer: tr,
                                            controlRenderer: er,
                                            onChanges: y,
                                        }),
                                    ),
                                    a().createElement(Bn, {
                                        label: R.strings.dialogs.recruitWindow.specialization(),
                                        state: l,
                                    }),
                                    a().createElement(
                                        'div',
                                        { className: ar },
                                        a().createElement(pn, {
                                            key: `specializationDdl${m}`,
                                            items: t.computes.prepareItems(g, B),
                                            selected: m,
                                            variant: B ? su.Disabled : su.Basic,
                                            itemRenderer: Hn,
                                            controlRenderer: Pn,
                                            onChanges: k,
                                        }),
                                    ),
                                ),
                            ),
                            t.computes.hasVisibledVoiceoverText() &&
                                a().createElement(
                                    'div',
                                    { className: sr },
                                    a().createElement('div', { className: lr }),
                                    R.strings.dialogs.recruit.voiceoverText(),
                                ),
                        );
                    }),
                    dr = ['onClose', 'buttons', 'isShown', 'displayFlags'];
                function _r() {
                    return (
                        (_r =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        _r.apply(this, arguments)
                    );
                }
                const mr = (0, qe.Pi)((e) => {
                    let t = e.onClose,
                        u = e.buttons,
                        n = e.isShown,
                        r = e.displayFlags,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, dr);
                    const i = Yt().model;
                    return a().createElement(
                        Ot,
                        _r({ onClose: t, buttons: u, displayFlags: r, isShown: n }, o, {
                            title: a().createElement(kt, { text: i.text.get(), justifyContent: ut.Center }),
                            icon: a().createElement(ou, {
                                hasVoiceover: i.hasVoiceover.get(),
                                icon: i.iconModel.get().path,
                                bgIcon: i.bgIconModel.get().path,
                            }),
                            content: a().createElement(cr, null),
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    H().render(
                        a().createElement(
                            Kt,
                            null,
                            a().createElement(I, null, a().createElement(Ge, { Template: mr })),
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
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, u, n] = deferred[s], o = !0, a = 0; a < t.length; a++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        deferred.splice(s--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
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
        (__webpack_require__.j = 4882),
        (() => {
            var e = { 4882: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [o, a, i] = u,
                        s = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(u); s < o.length; s++)
                        (r = o[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(6142));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
