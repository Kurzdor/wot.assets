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
            527: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, { mouse: () => c, off: () => u, on: () => i, onResize: () => s, onScaleUpdated: () => o });
                var n = a(2472),
                    r = a(1176);
                const s = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    u = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, r.R)(!1);
                    }
                    const s = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const s = `mouse${t}`,
                                        o = l[t]((e) => a([e, 'outside']));
                                    function i(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, i),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(s, i),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
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
                            e.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => s,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = a(527),
                    r = a(2493);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => n });
            },
            2493: (e, t, a) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((a) => {
                        console.error(`setRTPC('${e}', '${t}'): `, a);
                    });
                }
                a.d(t, { E: () => r, G: () => n });
            },
            2472: (e, t, a) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => n });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => s });
                var n = a(5959),
                    r = a(514);
                const s = { view: a(7641), client: n, sound: r.ZP };
            },
            514: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => o });
                var n = a(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, n.playSound)(r[t])), e), {}),
                    o = { play: Object.assign({}, s, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, a) => {
                'use strict';
                function n(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function r(e, t, a) {
                    return `url(${n(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => r });
                var n = a(2472);
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
            7641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => s.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => F,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => A,
                        isFocused: () => b,
                        pxToRem: () => h,
                        remToPx: () => v,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => u,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => B,
                    });
                var n = a(3722),
                    r = a(6112),
                    s = a(6538),
                    o = a(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, a, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, n);
                }
                function c(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function A() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
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
                    B = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    s = 16,
                    o = 32,
                    i = 64,
                    u = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, n);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, o, {
                                          arguments:
                                              ((r = s),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            u('popover' === e ? r : o);
                        },
                        minimize() {
                            u(i);
                        },
                        move(e) {
                            u(s, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, a) => {
                'use strict';
                let n, r;
                a.d(t, { n: () => n }),
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
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => s });
                var n = a(3138);
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
                    addCallback(e, t, a = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = n.O.view.addModelObserver(e, a, r);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(s) : (this._views[a] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const n = this._callbacks[a];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const s = r;
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
            9916: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Sw: () => s.Z,
                    B3: () => u,
                    Gr: () => l,
                    Z5: () => o.Z5,
                    B0: () => i,
                    c9: () => v,
                    ry: () => h,
                });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    a();
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
                        const a = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== n)),
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
                var s = a(1358);
                var o = a(8613);
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
                const u = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = a(5521),
                    _ = a(3138);
                const g = ['args'];
                function E(e, t, a, n, r, s, o) {
                    try {
                        var i = e[s](o),
                            u = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(u) : Promise.resolve(u).then(n, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        a = arguments;
                                    return new Promise(function (n, r) {
                                        var s = e.apply(t, a);
                                        function o(e) {
                                            E(s, n, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            E(s, n, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    f = () => v(i.CLOSE),
                    b = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var C = a(7572);
                const A = r.instance,
                    D = {
                        DataTracker: s.Z,
                        ViewModel: C.Z,
                        ViewEventType: i,
                        NumberFormatType: u,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => v(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => v(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            v(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, n, r = R.invalid('resId'), s) => {
                            const o = _.O.view.getViewGlobalPosition(),
                                u = a.getBoundingClientRect(),
                                l = u.x,
                                c = u.y,
                                d = u.width,
                                m = u.height,
                                g = {
                                    x: _.O.view.pxToRem(l) + o.x,
                                    y: _.O.view.pxToRem(c) + o.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            v(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: p(g),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => b(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, f);
                        },
                        handleViewEvent: v,
                        onBindingsReady: h,
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
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        a[n] = [];
                                        for (let t = 0; t < r.length; t++) a[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[n] = e(t[n]))
                                            : (a[n] = t[n]);
                                }
                            return a;
                        },
                        ClickOutsideManager: A,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = D;
            },
            8613: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => s, Z5: () => n, cy: () => r });
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
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    },
                    s = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            241: (e, t, a) => {
                'use strict';
                var n = a(6179),
                    r = a.n(n);
                const s = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var o = a(3138);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var u;
                function l(e, t, a) {
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
                        })(e, a),
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
                        })(t, a),
                        s = Math.min(n, r);
                    return {
                        extraLarge: s === a.extraLarge.weight,
                        large: s === a.large.weight,
                        medium: s === a.medium.weight,
                        small: s === a.small.weight,
                        extraSmall: s === a.extraSmall.weight,
                        extraLargeWidth: n === a.extraLarge.weight,
                        largeWidth: n === a.large.weight,
                        mediumWidth: n === a.medium.weight,
                        smallWidth: n === a.small.weight,
                        extraSmallWidth: n === a.extraSmall.weight,
                        extraLargeHeight: r === a.extraLarge.weight,
                        largeHeight: r === a.large.weight,
                        mediumHeight: r === a.medium.weight,
                        smallHeight: r === a.small.weight,
                        extraSmallHeight: r === a.extraSmall.weight,
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
                })(u || (u = {}));
                const c = o.O.client.getSize('rem'),
                    d = c.width,
                    m = c.height,
                    _ = Object.assign({ width: d, height: m }, l(d, m, i)),
                    g = (0, n.createContext)(_),
                    E = ['children'];
                const p = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, E);
                    const r = (0, n.useContext)(g),
                        o = r.extraLarge,
                        i = r.large,
                        u = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        d = r.extraLargeWidth,
                        m = r.largeWidth,
                        _ = r.mediumWidth,
                        p = r.smallWidth,
                        h = r.extraSmallWidth,
                        v = r.extraLargeHeight,
                        f = r.largeHeight,
                        b = r.mediumHeight,
                        C = r.smallHeight,
                        A = r.extraSmallHeight,
                        D = { extraLarge: v, large: f, medium: b, small: C, extraSmall: A };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && o) return t;
                        if (a.large && i) return t;
                        if (a.medium && u) return t;
                        if (a.small && l) return t;
                        if (a.extraSmall && c) return t;
                    } else {
                        if (a.extraLargeWidth && d) return s(t, a, D);
                        if (a.largeWidth && m) return s(t, a, D);
                        if (a.mediumWidth && _) return s(t, a, D);
                        if (a.smallWidth && p) return s(t, a, D);
                        if (a.extraSmallWidth && h) return s(t, a, D);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && v) return t;
                            if (a.largeHeight && f) return t;
                            if (a.mediumHeight && b) return t;
                            if (a.smallHeight && C) return t;
                            if (a.extraSmallHeight && A) return t;
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
                (0, n.memo)(p);
                const h = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    v = ({ children: e }) => {
                        const t = (0, n.useContext)(g),
                            a = (0, n.useState)(t),
                            s = a[0],
                            u = a[1],
                            c = (0, n.useCallback)((e, t) => {
                                const a = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(t);
                                u(Object.assign({ width: a, height: n }, l(a, n, i)));
                            }, []),
                            d = (0, n.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        h(() => {
                            o.O.client.events.on('clientResized', c), o.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', c),
                                        o.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [c, d],
                            );
                        const m = (0, n.useMemo)(() => Object.assign({}, s), [s]);
                        return r().createElement(g.Provider, { value: m }, e);
                    };
                var f = a(6483),
                    b = a.n(f),
                    C = a(926),
                    A = a.n(C);
                let D, F, w;
                !(function (e) {
                    (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                })(D || (D = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                    })(F || (F = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const S = () => {
                        const e = (0, n.useContext)(g),
                            t = e.width,
                            a = e.height,
                            r = ((e) => {
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
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return F.ExtraLarge;
                                    case e.largeWidth:
                                        return F.Large;
                                    case e.mediumWidth:
                                        return F.Medium;
                                    case e.smallWidth:
                                        return F.Small;
                                    case e.extraSmallWidth:
                                        return F.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), F.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
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
                        return { mediaSize: r, mediaWidth: s, mediaHeight: o, remScreenWidth: t, remScreenHeight: a };
                    },
                    B = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const k = {
                        [F.ExtraSmall]: '',
                        [F.Small]: A().SMALL_WIDTH,
                        [F.Medium]: `${A().SMALL_WIDTH} ${A().MEDIUM_WIDTH}`,
                        [F.Large]: `${A().SMALL_WIDTH} ${A().MEDIUM_WIDTH} ${A().LARGE_WIDTH}`,
                        [F.ExtraLarge]: `${A().SMALL_WIDTH} ${A().MEDIUM_WIDTH} ${A().LARGE_WIDTH} ${A().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [w.ExtraSmall]: '',
                        [w.Small]: A().SMALL_HEIGHT,
                        [w.Medium]: `${A().SMALL_HEIGHT} ${A().MEDIUM_HEIGHT}`,
                        [w.Large]: `${A().SMALL_HEIGHT} ${A().MEDIUM_HEIGHT} ${A().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${A().SMALL_HEIGHT} ${A().MEDIUM_HEIGHT} ${A().LARGE_HEIGHT} ${A().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [D.ExtraSmall]: '',
                        [D.Small]: A().SMALL,
                        [D.Medium]: `${A().SMALL} ${A().MEDIUM}`,
                        [D.Large]: `${A().SMALL} ${A().MEDIUM} ${A().LARGE}`,
                        [D.ExtraLarge]: `${A().SMALL} ${A().MEDIUM} ${A().LARGE} ${A().EXTRA_LARGE}`,
                    },
                    x = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, B);
                        const s = S(),
                            o = s.mediaWidth,
                            i = s.mediaHeight,
                            u = s.mediaSize;
                        return r().createElement('div', y({ className: b()(a, k[o], P[i], N[u]) }, n), t);
                    },
                    I = ['children'];
                const T = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, I);
                    return r().createElement(v, null, r().createElement(x, a, t));
                };
                var L = a(493),
                    O = a.n(L);
                function M() {}
                function $() {
                    return !1;
                }
                console.log;
                var W = a(9174);
                function H(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return U(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return U(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function U(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const z = (e) => (0 === e ? window : window.subViews.get(e));
                const V = () => (e, t) => {
                        const a = (0, n.createContext)({});
                        return [
                            function ({ mode: s = 'real', options: i, children: u, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    d = (a, n, r) => {
                                        var s;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = z,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function s(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, a) => {
                                                        a.forEach((t) => {
                                                            const a = r.get(t);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const r = a(t),
                                                        s = n.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? s
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, s);
                                                };
                                                return {
                                                    subscribe: (a, s) => {
                                                        const u = 'string' == typeof s ? `${n}.${s}` : n,
                                                            l = o.O.view.addModelObserver(u, t, !0);
                                                        return r.set(l, a), e && a(i(s)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const a = i(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, a = H(r.keys()); !(e = a()).done; ) s(e.value, t);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(n),
                                            u =
                                                'real' === a
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (s = null == r ? void 0 : r.getter)
                                                                  ? s
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === a ? (null == r ? void 0 : r.getter(e)) : u.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            m = e({
                                                mode: a,
                                                readByPath: l,
                                                externalModel: u,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = W.LO.box(n, { equals: $ });
                                                        return (
                                                            'real' === a &&
                                                                u.subscribe(
                                                                    (0, W.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = W.LO.box(n, { equals: $ });
                                                        return (
                                                            'real' === a &&
                                                                u.subscribe(
                                                                    (0, W.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = l(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = W.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    u.subscribe(
                                                                        (0, W.aD)((t) => {
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
                                                                s = Object.entries(r),
                                                                o = s.reduce(
                                                                    (e, [t, a]) => ((e[a] = W.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    u.subscribe(
                                                                        (0, W.aD)((e) => {
                                                                            s.forEach(([t, a]) => {
                                                                                o[a].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            _ = { mode: a, model: m, externalModel: u, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === a && r ? r.controls(_) : t(_),
                                            externalModel: u,
                                            mode: a,
                                        };
                                    },
                                    m = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(s),
                                    g = _[0],
                                    E = _[1],
                                    p = (0, n.useState)(() => d(s, i, l)),
                                    h = p[0],
                                    v = p[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        m.current ? v(d(g, i, l)) : (m.current = !0);
                                    }, [l, g, i]),
                                    (0, n.useEffect)(() => {
                                        E(s);
                                    }, [s]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [h],
                                    ),
                                    r().createElement(a.Provider, { value: h }, u)
                                );
                            },
                            () => (0, n.useContext)(a),
                        ];
                    },
                    G = V()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            season: e.primitives(
                                [
                                    'startTimestamp',
                                    'endTimestamp',
                                    'serverTimestamp',
                                    'state',
                                    'name',
                                    'hasTentativeDates',
                                ],
                                'season',
                            ),
                            year: e.primitives(['state'], 'year'),
                        }),
                        ({ externalModel: e }) => ({ pollServerTime: e.createCallbackNoArgs('season.pollServerTime') }),
                    ),
                    q = G[0],
                    j = G[1];
                function Q(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const Y = {
                        playHighlight() {
                            Q('highlight');
                        },
                        playClick() {
                            Q('play');
                        },
                        playYes() {
                            Q('yes1');
                        },
                    },
                    X = {
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
                    K = [
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
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                class J extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Q(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Q(this.props.soundClick);
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
                            a = e.onClick,
                            n = e.goto,
                            s = e.side,
                            o = e.type,
                            i = e.classNames,
                            u = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(e, K)),
                            _ = b()(X.base, X[`base__${o}`], X[`base__${s}`], null == i ? void 0 : i.base),
                            g = b()(X.icon, X[`icon__${o}`], X[`icon__${s}`], null == i ? void 0 : i.icon),
                            E = b()(X.glow, null == i ? void 0 : i.glow),
                            p = b()(X.caption, X[`caption__${o}`], null == i ? void 0 : i.caption),
                            h = b()(X.goto, null == i ? void 0 : i.goto);
                        return r().createElement(
                            'div',
                            Z(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(u),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                m,
                            ),
                            'info' !== o && r().createElement('div', { className: X.shine }),
                            r().createElement('div', { className: g }, r().createElement('div', { className: E })),
                            r().createElement('div', { className: p }, t),
                            n && r().createElement('div', { className: h }, n),
                        );
                    }
                }
                J.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var ee = a(3403),
                    te = a(5521),
                    ae = a(9916);
                const ne = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function re(e = te.n.NONE, t = ne, a = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== te.n.NONE)
                            return (
                                window.addEventListener('keydown', n, a),
                                () => {
                                    window.removeEventListener('keydown', n, a);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(n), a && n.stopPropagation();
                            }
                        }
                    }, [t, e, a, r]);
                }
                const se = 'page_heading_05',
                    oe = 'page_close_a4',
                    ie = ({ onClose: e, className: t }) => {
                        var a;
                        return (
                            (a = e),
                            re(te.n.ESCAPE, a),
                            r().createElement(
                                'div',
                                { className: b()(oe, t) },
                                r().createElement(J, {
                                    caption: R.strings.comp7.closeButtonLabel(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: e,
                                }),
                            )
                        );
                    },
                    ue = () => o.O.client.graphicsQuality.isHigh(),
                    le = () => {
                        const e = S(),
                            t = e.mediaSize,
                            a = e.remScreenHeight,
                            n = t >= D.Medium && a >= w.Large ? 'medium' : 'small';
                        return { size: n, isSmall: 'small' === n, isMedium: 'medium' === n };
                    };
                let ce;
                !(function (e) {
                    (e[(e.Progression = 0)] = 'Progression'),
                        (e[(e.RankRewards = 1)] = 'RankRewards'),
                        (e[(e.YearlyRewards = 2)] = 'YearlyRewards'),
                        (e[(e.WeeklyQuests = 3)] = 'WeeklyQuests'),
                        (e[(e.Shop = 4)] = 'Shop'),
                        (e[(e.Leaderboard = 5)] = 'Leaderboard'),
                        (e[(e.YearlyStatistics = 6)] = 'YearlyStatistics');
                })(ce || (ce = {}));
                const de = {
                        [ce.Progression]: 'progression',
                        [ce.RankRewards]: 'rankRewards',
                        [ce.WeeklyQuests]: 'weeklyQuests',
                        [ce.Leaderboard]: 'leaderboard',
                        [ce.YearlyRewards]: 'yearlyRewards',
                        [ce.Shop]: 'shop',
                        [ce.YearlyStatistics]: 'yearlyStatistics',
                    },
                    me = {
                        TABS: { context: 'model.sidebar' },
                        SCHEDULE: { context: 'model.scheduleInfo' },
                        PROGRESSION_PAGE: { context: 'model.progressionModel' },
                        RANK_REWARDS_PAGE: { context: 'model.rankRewardsModel' },
                        WEEKLY_QUESTS_PAGE: { context: 'model.weeklyQuestsModel' },
                        LEADERBOARD_PAGE: { context: 'model.leaderboardModel' },
                        YEARLY_REWARDS_PAGE: { context: 'model.yearlyRewardsModel' },
                        SHOP_PAGE: { context: 'model.shopModel' },
                        YEARLY_STATISTICS_PAGE: { context: 'model.yearlyStatisticsModel' },
                    };
                var _e = a(3946);
                const ge = V()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() },
                                a = e.object('progressionModel.qualificationModel'),
                                n = (0, _e.Om)(() => t.root.get().pageViewId === ce.Progression && a.get().isActive);
                            return Object.assign({}, t, { computes: { isProgressionInQualification: n } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            openInfoPage: e.createCallbackNoArgs('onInfoPageOpen'),
                            openWhatsNewScreen: e.createCallbackNoArgs('onWhatsNewScreenOpen'),
                        }),
                    ),
                    Ee = ge[0],
                    pe = ge[1];
                function he(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                const ve = he;
                function fe(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function be(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, n) => t(null == e ? void 0 : e.value, a, n));
                }
                function Ce(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const a = [];
                    for (let r = 0; r < e.length; r++) {
                        var n;
                        const s = null == (n = e[r]) ? void 0 : n.value;
                        t(s, r, e) && a.push(s);
                    }
                    return a;
                }
                function Ae(e, t = 0, a = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let n = Math.max(t, 0);
                            const r = Math.min(
                                a,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (n > r) return { done: !0, value: null };
                                    const t = e[n++];
                                    return t ? { value: fe(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function De(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        const n = fe(e[a]);
                        if (t(n, a, e)) return n;
                    }
                }
                function Fe(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        if (t(ve(e, a), a, e)) return a;
                    }
                }
                function we(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        if (t(ve(e, a), a, e)) return a;
                    }
                }
                function Se(e, t, a) {
                    if (Array.isArray(e)) return e.reduce(t, a);
                    let n = a;
                    for (let a = 0; a < e.length; a++) {
                        n = t(n, ve(e, a), a, e);
                    }
                    return n;
                }
                const Be = R.images.gui.maps.icons.comp7.metaTabs,
                    ye = (e, t) => {
                        const a = de[e];
                        return t ? `${Be.$dyn(a)}` : `${Be.small.$dyn(a)}`;
                    },
                    ke = V()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() },
                                a = e.array('items'),
                                n = (0, _e.Om)(
                                    (e) => [
                                        {
                                            id: 0,
                                            items: be(a.get(), ({ id: t, hasNotification: a }) =>
                                                Object.assign(
                                                    { id: t, icon: ye(t, e) },
                                                    a && { notification: { type: 'dot' } },
                                                ),
                                            ),
                                        },
                                    ],
                                    { equals: $ },
                                );
                            return Object.assign({}, t, { computes: { tabs: n } });
                        },
                        ({ externalModel: e }) => ({
                            changeSidebarTab: e.createCallback((e) => ({ tabId: e }), 'onSideBarTabChange'),
                        }),
                    ),
                    Pe = ke[0],
                    Ne = ke[1],
                    Re = (e) => {
                        let t,
                            a = null;
                        return (
                            (a = requestAnimationFrame(() => {
                                a = requestAnimationFrame(() => {
                                    (a = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== a && cancelAnimationFrame(a);
                            }
                        );
                    };
                var xe = a(7030);
                const Ie = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    Te = r().forwardRef(function ({ classNames: e, arrowRef: t, size: a = 'medium', className: n }, s) {
                        return r().createElement(
                            'div',
                            { className: b()(Ie.base, Ie[`base__${a}`], n), ref: s },
                            r().createElement('div', {
                                className: b()(
                                    Ie.border,
                                    Ie.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            r().createElement('div', {
                                className: b()(
                                    Ie.border,
                                    Ie.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            r().createElement('div', {
                                className: b()(Ie.arrow, null == e ? void 0 : e.arrow),
                                ref: t,
                            }),
                        );
                    }),
                    Le = {
                        base: 'Tab_base_cd',
                        base__small: 'Tab_base__small_bf',
                        base__medium: 'Tab_base__medium_96',
                        base__active: 'Tab_base__active_7e',
                        highlight: 'Tab_highlight_b6',
                        icon: 'Tab_icon_28',
                        icon__small: 'Tab_icon__small_48',
                        icon__medium: 'Tab_icon__medium_73',
                        notification: 'Tab_notification_86',
                        notification__symbol: 'Tab_notification__symbol_9b',
                        notification__small: 'Tab_notification__small_92',
                        notification__dot: 'Tab_notification__dot_51',
                        notification__medium: 'Tab_notification__medium_e6',
                        notification__large: 'Tab_notification__large_6b',
                    },
                    Oe = { mouseEnter: 'highlight', click: 'play' },
                    Me = r().forwardRef(function (
                        {
                            id: e,
                            isActive: t,
                            className: a,
                            classNames: n,
                            sounds: s = Oe,
                            notification: o,
                            icon: i,
                            size: u,
                            additionContent: l,
                            onClick: c,
                            onMouseEnter: d,
                            onMouseLeave: m,
                            WrapperElement: _,
                        },
                        g,
                    ) {
                        const E = (e, a) => {
                                !t && s[a] && Q(s[a]);
                            },
                            p = r().createElement(
                                'div',
                                {
                                    className: b()(
                                        Le.base,
                                        Le[`base__${u}`],
                                        t && b()(Le.base__active, null == n ? void 0 : n.activeTab),
                                        a,
                                    ),
                                    onClick: ((e) => () => {
                                        E(0, 'click'), null == c || c(e);
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        E(0, 'mouseEnter'), null == d || d(e);
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        E(0, 'mouseLeave'), null == m || m(e);
                                    })(e),
                                    ref: t ? g : null,
                                },
                                r().createElement('div', {
                                    className: b()(Le.highlight, null == n ? void 0 : n.highlight),
                                }),
                                'function' == typeof i && u
                                    ? i(u)
                                    : r().createElement('div', {
                                          className: b()(Le.icon, Le[`icon__${u}`], null == n ? void 0 : n.icon),
                                          style: { backgroundImage: `url(${i})` },
                                      }),
                                l && l({ id: e, size: u, isActive: t }),
                                o &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: b()(
                                                Le.notification,
                                                Le[`notification__${o.type}`],
                                                o.size ? Le[`notification__${o.size}`] : Le.notification__medium,
                                                null == n ? void 0 : n.notification,
                                            ),
                                        },
                                        'dot' !== o.type && o.value,
                                    ),
                            );
                        return _ ? r().createElement(_, { key: e, id: e }, p) : p;
                    }),
                    $e = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    },
                    We = r().memo(function ({
                        active: e,
                        tabs: t,
                        sounds: a,
                        className: s,
                        classNames: i,
                        size: u = 'medium',
                        additionContent: l,
                        onClick: c,
                        onMouseEnter: d,
                        onMouseLeave: m,
                        WrapperElement: _,
                    }) {
                        const g = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            p = (0, n.useRef)(null),
                            h = (0, n.useRef)(null),
                            v = (0, xe.useSpring)(() => ({
                                marginLeft: 0,
                                onChange: (e) => {
                                    const t = g.current;
                                    t && (t.style.marginLeft = `${e.value.marginLeft}rem`);
                                },
                            }))[1],
                            f = (0, xe.useSpring)(() => ({
                                opacity: 0,
                                onChange: (e) => {
                                    const t = g.current;
                                    t && (t.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1],
                            C = (0, xe.useSpring)(() => ({
                                position: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t &&
                                        (t.style.transform = `translateY(${e.value.position / o.O.view.getScale()}rem)`);
                                },
                                onStart: () => {
                                    v.start({
                                        from: { marginLeft: 12 },
                                        to: { marginLeft: 0 },
                                        config: { duration: 50 },
                                    }),
                                        f.start({ from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: 50 } });
                                },
                                onRest: () => {
                                    v.start({
                                        from: { marginLeft: 0 },
                                        to: { marginLeft: 12 },
                                        config: { duration: 150 },
                                    }),
                                        f.start({
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                            config: { duration: 150 },
                                        });
                                },
                            }))[1],
                            A = (0, n.useCallback)((e) => {
                                if (null !== p.current && null !== h.current) {
                                    e(p.current.getBoundingClientRect().top - h.current.getBoundingClientRect().top);
                                }
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                A((e) => {
                                    C.start({ position: e, config: { duration: 200 } });
                                });
                            }, [C, e, A]),
                            (0, n.useEffect)(
                                () =>
                                    Re(() => {
                                        A((e) => {
                                            C.start({ position: e, immediate: !0 });
                                        });
                                    }),
                                [C, A, u],
                            ),
                            r().createElement(
                                'div',
                                { className: b()($e.base, s), ref: h },
                                t.map(({ id: t, items: n, title: s, groupClassNames: o }) =>
                                    r().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: b()($e.group, $e[`group__${u}`], null == o ? void 0 : o.group),
                                        },
                                        s &&
                                            r().createElement(
                                                'div',
                                                { className: b()($e.title, null == o ? void 0 : o.title) },
                                                s,
                                            ),
                                        n.map(({ id: t, icon: n, notification: s }) =>
                                            r().createElement(Me, {
                                                key: t,
                                                id: t,
                                                icon: n,
                                                notification: s,
                                                ref: p,
                                                sounds: a,
                                                isActive: e === t,
                                                size: u,
                                                className: null == i ? void 0 : i.tab,
                                                classNames: i,
                                                additionContent: l,
                                                onMouseEnter: d,
                                                onMouseLeave: m,
                                                onClick: c,
                                                WrapperElement: _,
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement(Te, {
                                    arrowRef: g,
                                    ref: E,
                                    size: u,
                                    className: null == i ? void 0 : i.frame,
                                    classNames: i,
                                }),
                            )
                        );
                    }),
                    He = 'Tabs_icon_78',
                    Ue = 'Tabs_icon__medium_91',
                    ze = [
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
                function Ve(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const Ge = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ae.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    qe = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            r = e.args,
                            s = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            u = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            g = void 0 === _ ? 0 : _,
                            E = e.isEnabled,
                            p = void 0 === E || E,
                            h = e.targetId,
                            v = void 0 === h ? 0 : h,
                            f = e.onShow,
                            b = e.onHide,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, ze);
                        const A = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, n.useMemo)(
                                () =>
                                    v ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let a,
                                            n = R.invalid('resId');
                                        return (
                                            t &&
                                                ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== a &&
                                                    window.subViews[a] &&
                                                    (n = window.subViews[a].id)),
                                            { caller: a, stack: t, resId: n }
                                        );
                                    })().resId,
                                [v],
                            ),
                            F = (0, n.useCallback)(() => {
                                (A.current.isVisible && A.current.timeoutId) ||
                                    (Ge(a, g, { isMouseEvent: !0, on: !0, arguments: Ve(r) }, D),
                                    f && f(),
                                    (A.current.isVisible = !0));
                            }, [a, g, r, D, f]),
                            w = (0, n.useCallback)(() => {
                                if (A.current.isVisible || A.current.timeoutId) {
                                    const e = A.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (A.current.timeoutId = 0)),
                                        Ge(a, g, { on: !1 }, D),
                                        A.current.isVisible && b && b(),
                                        (A.current.isVisible = !1);
                                }
                            }, [a, g, D, b]),
                            S = (0, n.useCallback)((e) => {
                                A.current.isVisible &&
                                    ((A.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (A.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(A.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = A.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === p && w();
                            }, [p, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return p
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((B = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((A.current.timeoutId = window.setTimeout(F, c ? 100 : 400)),
                                                      s && s(e),
                                                      B && B(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              w(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && w(), null == u || u(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && w(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : t;
                        var B;
                    },
                    je = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Qe() {
                    return (
                        (Qe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Qe.apply(this, arguments)
                    );
                }
                const Ye = R.views.common.tooltip_window.simple_tooltip_content,
                    Xe = (e) => {
                        let t = e.children,
                            a = e.body,
                            s = e.header,
                            o = e.note,
                            i = e.alert,
                            u = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, je);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, u, { body: a, header: s, note: o, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, a, s, o, u]);
                        return r().createElement(
                            qe,
                            Qe(
                                {
                                    contentId:
                                        ((d = null == u ? void 0 : u.hasHtmlContent),
                                        d ? Ye.SimpleTooltipHtmlContent('resId') : Ye.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    },
                    Ke = R.strings.comp7.sidebar.tabs.tooltip,
                    Ze = ({ children: e, id: t }) => {
                        const a = de[t];
                        return r().createElement(Xe, { header: `${Ke.header.$dyn(a)}`, body: `${Ke.body.$dyn(a)}` }, e);
                    },
                    Je = (0, ee.Pi)(({ pageView: e, className: t }) => {
                        const a = Ne(),
                            s = a.model,
                            o = a.controls,
                            i = le(),
                            u = (0, n.useCallback)((e) => o.changeSidebarTab(e), [o]),
                            l = s.computes.tabs(i.isMedium);
                        return r().createElement(We, {
                            tabs: l,
                            onClick: u,
                            active: e,
                            size: i.size,
                            className: t,
                            classNames: { icon: b()(He, i.isMedium && Ue) },
                            WrapperElement: Ze,
                        });
                    }),
                    et = 'Spinner_base_87',
                    tt = 'Spinner_caption_cf',
                    at = 'Spinner_gear_c4',
                    nt = 'Spinner_logo_bf',
                    rt = ({ message: e, className: t, classNames: a }) =>
                        r().createElement(
                            'div',
                            { className: b()(et, t) },
                            e && r().createElement('div', { className: b()(tt, null == a ? void 0 : a.caption) }, e),
                            r().createElement('div', { className: b()(at, null == a ? void 0 : a.gear) }),
                            r().createElement('div', { className: b()(nt, null == a ? void 0 : a.logo) }),
                        );
                let st;
                !(function (e) {
                    (e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error');
                })(st || (st = {}));
                const ot = 'Heading_base_74',
                    it = ['children', 'className'];
                function ut() {
                    return (
                        (ut =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ut.apply(this, arguments)
                    );
                }
                const lt = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, it);
                        return r().createElement('div', ut({ className: b()(ot, a) }, n), t);
                    },
                    ct = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: 300 } },
                    dt = {
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
                let mt, _t;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(mt || (mt = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(_t || (_t = {}));
                const gt = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: s,
                    disabled: o,
                    mixClass: i,
                    soundHover: u,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: g,
                    onClick: E,
                }) => {
                    const p = (0, n.useRef)(null),
                        h = (0, n.useState)(a),
                        v = h[0],
                        f = h[1],
                        C = (0, n.useState)(!1),
                        A = C[0],
                        D = C[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                v && null !== p.current && !p.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [v]),
                        (0, n.useEffect)(() => {
                            f(a);
                        }, [a]),
                        r().createElement(
                            'div',
                            {
                                ref: p,
                                className: b()(
                                    dt.base,
                                    dt[`base__${s}`],
                                    o && dt.base__disabled,
                                    t && dt[`base__${t}`],
                                    v && dt.base__focus,
                                    A && dt.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== u && Q(u), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    o || (_ && _(e), D(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== l && Q(l),
                                        m && m(e),
                                        a && (o || (p.current && (p.current.focus(), f(!0)))),
                                        D(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (g && g(e), D(!1));
                                },
                                onClick: function (e) {
                                    o || (E && E(e));
                                },
                            },
                            s !== mt.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: dt.back }),
                                    r().createElement('span', { className: dt.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: b()(dt.state, dt.state__default) },
                                r().createElement('span', { className: dt.stateDisabled }),
                                r().createElement('span', { className: dt.stateHighlightHover }),
                                r().createElement('span', { className: dt.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: dt.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                gt.defaultProps = { type: mt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Et = gt,
                    pt = (e, t) =>
                        Object.keys(e).length === Object.keys(t).length &&
                        Object.keys(e).every((a) => Object.prototype.hasOwnProperty.call(t, a) && e[a] === t[a]),
                    ht = V()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), items: e.array('items') },
                                a = (0, _e.Om)(
                                    (e) => {
                                        const a = he(t.items.get(), e);
                                        if (!a) throw new Error(`leaderboard item with index ${e} was not found`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: $ },
                                ),
                                n = (0, _e.Om)(() => {
                                    const e = t.root.get(),
                                        a = e.state,
                                        n = e.leaderboardUpdateTimestamp;
                                    return a !== st.Initial && n > 0;
                                }),
                                r = (0, _e.Om)(() => a(0).rank),
                                s = (0, _e.Om)(() => t.root.get().lastBestUserPosition + 1),
                                o = (0, _e.Om)((e) => t.root.get().ownSpaID === a(e).spaID),
                                i = (0, _e.Om)(() => -1 !== t.root.get().lastBestUserPosition),
                                u = (0, _e.Om)(
                                    () => ({ first: a(0).position, last: a(t.items.get().length - 1).position }),
                                    { equals: pt },
                                ),
                                l = (0, _e.Om)(() => i() && s() >= u().first && s() <= u().last),
                                c = (0, _e.Om)(
                                    (e) => {
                                        const a = Math.ceil(t.root.get().recordsCount / e);
                                        return {
                                            amount: a,
                                            hasPagination: a > 1,
                                            active: Math.floor(u().first / e) + 1,
                                        };
                                    },
                                    { equals: pt },
                                ),
                                d = (0, _e.Om)((e) => a(e).position < 3),
                                m = (0, _e.Om)(() => -1 === t.root.get().personalPosition);
                            return Object.assign({}, t, {
                                computes: {
                                    leaderboardItem: a,
                                    hasUpdateInfo: n,
                                    firstItemRank: r,
                                    rowsDividerPosition: s,
                                    hasRowsDivider: l,
                                    isPersonalRow: o,
                                    hasPositionIcon: d,
                                    isDefaultPersonalPosition: m,
                                    hasLastBestUserPosition: i,
                                    pages: c,
                                    pagePositions: u,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            refresh: e.createCallbackNoArgs('onRefresh'),
                            getTableRecords: e.createCallback((e, t) => ({ limit: e, offset: t }), 'getTableRecords'),
                        }),
                    ),
                    vt = ht[0],
                    ft = ht[1],
                    bt = 'ErrorState_base_eb',
                    Ct = 'ErrorState_titleContainer_ca',
                    At = 'ErrorState_alertIcon_76',
                    Dt = 'ErrorState_title_c1',
                    Ft = 'ErrorState_description_d9',
                    wt = 'ErrorState_buttonWrapper_5e',
                    St = 'ErrorState_button_23',
                    Bt = R.strings.comp7.leaderboard.error,
                    yt = (0, ee.Pi)(({ className: e }) => {
                        const t = ft(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get().isLoading,
                            o = S().mediaSize;
                        return r().createElement(
                            'div',
                            { className: b()(bt, e) },
                            r().createElement(
                                'div',
                                { className: Ct },
                                r().createElement('div', { className: At }),
                                r().createElement('div', { className: Dt }, Bt.title()),
                            ),
                            r().createElement('div', { className: Ft }, Bt.description()),
                            r().createElement(
                                'div',
                                { className: wt },
                                r().createElement(
                                    Et,
                                    {
                                        type: mt.secondary,
                                        disabled: s,
                                        size: ((i = o), i >= D.Medium ? _t.medium : _t.small),
                                        mixClass: St,
                                        onClick: n.refresh,
                                    },
                                    Bt.buttonText(),
                                ),
                            ),
                        );
                        var i;
                    });
                let kt;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(kt || (kt = {}));
                const Pt = (e, t, a) => (a < e ? e : a > t ? t : a);
                function Nt(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Rt(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return Rt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Rt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const xt = () => {
                        const e = (0, n.useMemo)(() => ({}), []),
                            t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                            a = (e, a) => {
                                t(e).set(a, a);
                            },
                            r = (e, a) => {
                                t(e).delete(a);
                            },
                            s = (e, ...a) => {
                                for (var n, r = Nt(t(e).values()); !(n = r()).done; ) {
                                    (0, n.value)(...a);
                                }
                            };
                        return (0, n.useMemo)(() => ({ on: a, off: r, trigger: s }), []);
                    },
                    It = [];
                function Tt(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), It)
                    );
                }
                function Lt(e, t, a, n) {
                    let r,
                        s = !1,
                        o = 0;
                    function i() {
                        r && clearTimeout(r);
                    }
                    function u(...u) {
                        const l = this,
                            c = Date.now() - o;
                        function d() {
                            (o = Date.now()), a.apply(l, u);
                        }
                        s ||
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
                        'boolean' != typeof t && ((n = a), (a = t), (t = void 0)),
                        (u.cancel = function () {
                            i(), (s = !0);
                        }),
                        u
                    );
                }
                let Ot;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Ot || (Ot = {}));
                const Mt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    $t = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: r,
                        getWrapperSize: s,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const u = (e, a) => {
                            const n = t(e),
                                r = n[0],
                                s = n[1];
                            return s <= r ? 0 : Pt(r, s, a);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? Mt : c,
                                m = (0, n.useRef)(null),
                                _ = (0, n.useRef)(null),
                                g = xt(),
                                E = (function (e, t, a) {
                                    const r = (0, n.useMemo)(() => Lt(a, e), t);
                                    return (0, n.useEffect)(() => r.cancel, [r]), r;
                                })(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, xe.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (a(t, e), g.trigger('change', e), i && E());
                                    },
                                    onRest: (e) => g.trigger('rest', e),
                                    onStart: (e) => g.trigger('start', e),
                                    onPause: (e) => g.trigger('pause', e),
                                })),
                                h = p[0],
                                v = p[1],
                                f = (0, n.useCallback)(
                                    (e, t, a) => {
                                        var n;
                                        const r = h.scrollPosition.get(),
                                            s = (null != (n = h.scrollPosition.goal) ? n : 0) - r;
                                        return u(e, t * a + s + r);
                                    },
                                    [h.scrollPosition],
                                ),
                                b = (0, n.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            v.start({
                                                scrollPosition: u(n, e),
                                                immediate: t,
                                                reset: a,
                                                config: d.animationConfig,
                                                from: { scrollPosition: u(n, h.scrollPosition.get()) },
                                            });
                                    },
                                    [v, d.animationConfig, h.scrollPosition],
                                ),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            a = _.current;
                                        if (!t || !a) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return s(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, d.step),
                                            r = f(t, e, n);
                                        b(r);
                                    },
                                    [b, f, d.step],
                                ),
                                A = (0, n.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(r(e)),
                                            m.current && g.trigger('mouseWheel', e, h.scrollPosition, t(m.current));
                                    },
                                    [h.scrollPosition, C, g],
                                ),
                                D = ((e, t = []) => {
                                    const a = (0, n.useRef)(),
                                        r = (0, n.useCallback)((...t) => {
                                            a.current && a.current(), (a.current = e(...t));
                                        }, t);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        Re(() => {
                                            const e = m.current;
                                            e &&
                                                (b(u(e, h.scrollPosition.goal), { immediate: !0 }),
                                                g.trigger('resizeHandled'));
                                        }),
                                    [b, h.scrollPosition.goal],
                                ),
                                F = Tt(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = u(e, h.scrollPosition.goal);
                                    t !== h.scrollPosition.goal && b(t, { immediate: !0 }),
                                        g.trigger('recalculateContent');
                                });
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            );
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? s(_.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: u,
                                    handleMouseWheel: A,
                                    applyScroll: b,
                                    applyStepTo: C,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: v,
                                    animationScroll: h,
                                    recalculateContent: F,
                                    events: { on: g.on, off: g.off },
                                }),
                                [h.scrollPosition, b, C, g.off, g.on, F, A, v, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Wt = $t({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ot.Next : Ot.Prev),
                    });
                class Ht extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = ae.B3.GOLD;
                        else e = ae.B3.INTEGRAL;
                        const t = ae.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                Ht.defaultProps = { format: 'integral' };
                const Ut = {
                    '--pageContentWidth': '78vw',
                    base: 'CurrentPositionPanel_base_92',
                    base__active: 'CurrentPositionPanel_base__active_8c',
                    cell: 'CurrentPositionPanel_cell_be',
                    cell__order: 'CurrentPositionPanel_cell__order_be',
                    cell__currentPosition: 'CurrentPositionPanel_cell__currentPosition_c5',
                    cell__battles: 'CurrentPositionPanel_cell__battles_8f',
                    cell__score: 'CurrentPositionPanel_cell__score_d2',
                    screwIcon: 'CurrentPositionPanel_screwIcon_8f',
                    screwIcon__left: 'CurrentPositionPanel_screwIcon__left_cb',
                    screwIcon__right: 'CurrentPositionPanel_screwIcon__right_6e',
                };
                let zt;
                !(function (e) {
                    (e.None = 'None'), (e.Active = 'Active');
                })(zt || (zt = {}));
                const Vt = R.strings.comp7.leaderboard.currentPosition,
                    Gt = { [zt.None]: 'none', [zt.Active]: 'active' },
                    qt = (0, ee.Pi)(({ state: e, height: t, onClick: a, className: n }) => {
                        const s = ft().model.root.get(),
                            o = s.personalPosition,
                            i = s.personalBattlesCount,
                            u = s.personalScore;
                        return r().createElement(
                            'div',
                            {
                                className: b()(Ut.base, Ut[`base__${Gt[e]}`], n),
                                onClick: a,
                                style: { '--height': t ? `${t}rem` : 'auto' },
                            },
                            r().createElement('div', { className: b()(Ut.screwIcon, Ut.screwIcon__left) }),
                            {
                                [zt.None]: r().createElement('div', { className: b()(Ut.cell) }, Vt.none()),
                                [zt.Active]: r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: b()(Ut.cell, Ut.cell__order) }, o + 1),
                                    r().createElement(
                                        'div',
                                        { className: b()(Ut.cell, Ut.cell__currentPosition) },
                                        Vt.body(),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: b()(Ut.cell, Ut.cell__battles) },
                                        r().createElement(Ht, { value: i }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: b()(Ut.cell, Ut.cell__score) },
                                        r().createElement(Ht, { value: u }),
                                    ),
                                ),
                            }[e],
                            r().createElement('div', { className: b()(Ut.screwIcon, Ut.screwIcon__right) }),
                        );
                    });
                function jt(e, t, a = []) {
                    const r = (0, n.useRef)(0),
                        s = (0, n.useCallback)(() => window.clearInterval(r.current), a || []);
                    (0, n.useEffect)(() => s, [s]);
                    const o = (null != a ? a : []).concat([t]);
                    return [
                        (0, n.useCallback)((a) => {
                            (r.current = window.setInterval(() => e(a, !0), t)), e(a, !1);
                        }, o),
                        s,
                    ];
                }
                const Qt = 'VerticalBar_base_f3',
                    Yt = 'VerticalBar_base__nonActive_42',
                    Xt = 'VerticalBar_topButton_d7',
                    Kt = 'VerticalBar_bottomButton_06',
                    Zt = 'VerticalBar_track_df',
                    Jt = 'VerticalBar_thumb_32',
                    ea = 'VerticalBar_rail_43',
                    ta = 'disable',
                    aa = () => {},
                    na = { pending: !1, offset: 0 },
                    ra = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    sa = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    oa = (e, t) => Math.max(20, e.offsetHeight * t),
                    ia = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = ra, onDrag: s = aa }) => {
                        const i = (0, n.useRef)(null),
                            u = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, n.useState)(na),
                            g = _[0],
                            E = _[1],
                            p = (0, n.useCallback)(
                                (e) => {
                                    E(e),
                                        d.current && s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [s],
                            ),
                            h = Tt(() => {
                                const t = d.current,
                                    a = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && a)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${oa(a, s)}px`),
                                    (t.style.display = 'flex'),
                                    i.current &&
                                        (1 === s ? i.current.classList.add(Yt) : i.current.classList.remove(Yt)),
                                    s
                                );
                            }),
                            v = Tt(() => {
                                const t = c.current,
                                    a = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && a && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = Pt(0, 1, s / (r - n)),
                                    m = (t.offsetHeight - oa(t, o)) * i;
                                (a.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (u.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return u.current.classList.add(ta), void l.current.classList.remove(ta);
                                            if (
                                                ((t = c.current),
                                                (a = d.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return u.current.classList.remove(ta), void l.current.classList.add(ta);
                                            var t, a;
                                            u.current.classList.remove(ta), l.current.classList.remove(ta);
                                        }
                                    })(m);
                            }),
                            f = Tt(() => {
                                sa(e, () => {
                                    h(), v();
                                });
                            });
                        (0, n.useEffect)(() => Re(f)),
                            (0, n.useEffect)(() => {
                                const t = () => {
                                    sa(e, () => {
                                        v();
                                    });
                                };
                                let a = aa;
                                const n = () => {
                                    a(), (a = Re(f));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        a(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!g.pending) return;
                                const t = o.O.client.events.mouse.up(() => {
                                        p(na);
                                    }),
                                    a = o.O.client.events.mouse.move(([t]) => {
                                        sa(e, (a) => {
                                            const n = c.current,
                                                r = d.current,
                                                o = e.getContainerSize();
                                            if (!n || !r || !o) return;
                                            const i = t.screenY - g.offset - n.getBoundingClientRect().y,
                                                u = (i / n.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, u),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                s({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: u });
                                        });
                                    });
                                return () => {
                                    t(), a();
                                };
                            }, [e, g.offset, g.pending, s, p]);
                        const C = jt((t) => e.applyStepTo(t), m, [e]),
                            A = C[0],
                            D = C[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const F = (e) => {
                            e.target.classList.contains(ta) || Q('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: b()(Qt, t.base), ref: i, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: b()(Xt, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ta) || 0 !== e.button || (Q('play'), A(Ot.Next));
                                },
                                ref: u,
                                onMouseEnter: F,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: b()(Zt, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if ((Q('play'), t.target === n))
                                                p({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        sa(e, (n) => {
                                                            if (!n) return;
                                                            const r = a(e),
                                                                s = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? Ot.Prev : Ot.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: F,
                                },
                                r().createElement('div', { ref: d, className: b()(Jt, t.thumb) }),
                                r().createElement('div', { className: b()(ea, t.rail) }),
                            ),
                            r().createElement('div', {
                                className: b()(Kt, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ta) || 0 !== e.button || (Q('play'), A(Ot.Prev));
                                },
                                onMouseUp: D,
                                ref: l,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    ua = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    la = ({ className: e, classNames: t, children: a, api: s }) => (
                        (0, n.useEffect)(() => Re(s.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: b()(ua.base, e), ref: s.wrapperRef, onWheel: s.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: b()(ua.content, null == t ? void 0 : t.content), ref: s.contentRef },
                                a,
                            ),
                        )
                    );
                la.Default = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: s,
                    areaClassName: o,
                    scrollClassName: i,
                    scrollClassNames: u,
                    getStepByRailClick: l,
                    onDrag: c,
                }) => {
                    const d = (0, n.useMemo)(() => {
                            const e = s || {};
                            return Object.assign({}, e, { base: b()(ua.base, e.base) });
                        }, [s]),
                        m = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return r().createElement(
                        'div',
                        { className: b()(ua.defaultScroll, a), onWheel: t.handleMouseWheel },
                        r().createElement(
                            'div',
                            { className: b()(ua.area, o) },
                            r().createElement(la, { className: i, classNames: u, api: m }, e),
                        ),
                        r().createElement(ia, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                    );
                };
                const ca = (e, t) => {
                    const a = [];
                    for (let n = 0; n < e; n++) a.push(t(n));
                    return a;
                };
                let da, ma;
                !(function (e) {
                    (e[(e.A = 1)] = 'A'),
                        (e[(e.B = 2)] = 'B'),
                        (e[(e.C = 3)] = 'C'),
                        (e[(e.D = 4)] = 'D'),
                        (e[(e.E = 5)] = 'E');
                })(da || (da = {})),
                    (function (e) {
                        (e[(e.Achieved = 0)] = 'Achieved'),
                            (e[(e.Current = 1)] = 'Current'),
                            (e[(e.Inactive = 2)] = 'Inactive');
                    })(ma || (ma = {}));
                var _a = a(1281);
                let ga;
                function Ea(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function pa(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function ha(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(ga || (ga = {}));
                const va = (e) => e.replace(/&nbsp;/g, ' '),
                    fa = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    ba = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    Ca = (e, t, a = ga.left) => e.split(t).reduce(a === ga.left ? fa : ba, []),
                    Aa = (() => {
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
                    Da = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Fa = (e, t = ga.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Da.includes(a)) return Aa(e);
                        if ('ja' === a) {
                            return (0, _a.D4)()
                                .parse(e)
                                .map((e) => va(e));
                        }
                        return ((e, t = ga.left) => {
                            let a = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = va(e);
                            return Ca(r, /( )/, t).forEach((e) => (a = a.concat(Ca(e, n, ga.left)))), a;
                        })(e, t);
                    },
                    wa = R.strings.comp7.division,
                    Sa = { [da.A]: 'A', [da.B]: 'B', [da.C]: 'C', [da.D]: 'D', [da.E]: 'E' },
                    Ba = (e) => wa.$dyn(Sa[e]),
                    ya = (e) => pa(wa.text(), { division: Ba(e) });
                let ka;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(ka || (ka = {}));
                const Pa = {
                        [ka.First]: 'first',
                        [ka.Second]: 'second',
                        [ka.Third]: 'third',
                        [ka.Fourth]: 'fourth',
                        [ka.Fifth]: 'fifth',
                        [ka.Sixth]: 'sixth',
                    },
                    Na = (e) => Pa[e],
                    Ra = [ka.First, ka.Second, ka.Third, ka.Fourth],
                    xa = (e) => Ra.includes(e);
                let Ia;
                !(function (e) {
                    (e[(e.x22 = 22)] = 'x22'),
                        (e[(e.x40 = 40)] = 'x40'),
                        (e[(e.x48 = 48)] = 'x48'),
                        (e[(e.x64 = 64)] = 'x64'),
                        (e[(e.x84 = 84)] = 'x84'),
                        (e[(e.x110 = 110)] = 'x110'),
                        (e[(e.x150 = 150)] = 'x150'),
                        (e[(e.x200 = 200)] = 'x200'),
                        (e[(e.x260 = 260)] = 'x260'),
                        (e[(e.x320 = 320)] = 'x320'),
                        (e[(e.x420 = 420)] = 'x420'),
                        (e[(e.x600 = 600)] = 'x600');
                })(Ia || (Ia = {}));
                const Ta = 'RankEmblem_base_ec',
                    La = ({ rank: e, size: t, division: a, seasonName: s, className: o }) => {
                        const i = (0, n.useMemo)(() => {
                            const n = R.images.gui.maps.icons.comp7.ranks.$dyn(s).$num(t),
                                r = xa(e) && void 0 !== a ? `_${Ba(a)}` : '';
                            return { backgroundImage: `url(${n.$dyn(`${Na(e)}${r}`)})`, '--imageSize': `${t}rem` };
                        }, [s, t, e, a]);
                        return r().createElement('div', { className: b()(Ta, o), style: i });
                    },
                    Oa = {
                        [ka.First]: 'first',
                        [ka.Second]: 'second',
                        [ka.Third]: 'third',
                        [ka.Fourth]: 'fourth',
                        [ka.Fifth]: 'fifth',
                        [ka.Sixth]: 'sixth',
                    },
                    Ma = (e, t) => `${e.$dyn(Oa[t])}`,
                    $a = (e) => Ma(R.strings.comp7.rank, e),
                    Wa = (e) => pa(R.strings.comp7.rank.text(), { rank: $a(e) }),
                    Ha = 'RowsDivider_base_0a',
                    Ua = 'RowsDivider_rankText_96',
                    za = (0, ee.Pi)(({ index: e, className: t, onClick: a }) => {
                        const n = ft().model,
                            s = j().model,
                            o = n.computes.leaderboardItem(e).rank;
                        return r().createElement(
                            'div',
                            { className: b()(Ha, t), onClick: a },
                            r().createElement(La, { seasonName: s.season.name.get(), rank: o, size: Ia.x64 }),
                            r().createElement('div', { className: Ua }, Wa(o)),
                        );
                    }),
                    Va = 'Header_base_83',
                    Ga = 'Header_separator_14',
                    qa = 'Header_cell_0e',
                    ja = 'Header_cell__order_7d',
                    Qa = 'Header_cell__player_c5',
                    Ya = 'Header_cell__score_3e',
                    Xa = R.strings.comp7.leaderboard.table.header,
                    Ka = R.strings.comp7.leaderboard.table.tooltip,
                    Za = () =>
                        r().createElement(
                            'div',
                            { className: Va },
                            r().createElement(
                                Xe,
                                { header: Ka.order.header(), body: Ka.order.body() },
                                r().createElement('div', { className: b()(qa, ja) }, Xa.order()),
                            ),
                            r().createElement('div', { className: Ga }),
                            r().createElement(
                                Xe,
                                { header: Ka.player.header(), body: Ka.player.body() },
                                r().createElement('div', { className: b()(qa, Qa) }, Xa.player()),
                            ),
                            r().createElement('div', { className: Ga }),
                            r().createElement(
                                Xe,
                                { header: Ka.battlesCount.header(), body: Ka.battlesCount.body() },
                                r().createElement('div', { className: b()(qa, Ya) }, Xa.battlesCount()),
                            ),
                            r().createElement('div', { className: Ga }),
                            r().createElement(
                                Xe,
                                { header: Ka.score.header(), body: Ka.score.body() },
                                r().createElement('div', { className: b()(qa, Ya) }, Xa.score()),
                            ),
                        );
                let Ja;
                !(function (e) {
                    (e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220');
                })(Ja || (Ja = {}));
                const en = 'TextOverflow_base_3b',
                    tn = ['content', 'classMix', 'className'];
                function an() {
                    return (
                        (an =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        an.apply(this, arguments)
                    );
                }
                const nn = (e) => {
                        let t = e.content,
                            a = e.classMix,
                            s = e.className,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, tn);
                        const i = (0, n.useRef)(null),
                            u = (0, n.useState)(!0),
                            l = u[0],
                            c = u[1];
                        return (
                            (0, n.useEffect)(() =>
                                Re(() => {
                                    const e = i.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            r().createElement(
                                Xe,
                                { isEnabled: l, body: t },
                                r().createElement('div', an({}, o, { ref: i, className: b()(en, s, a) }), t),
                            )
                        );
                    },
                    rn = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    sn = { [Ja.default]: 'c_24x24', [Ja.x48]: 'c_48x48', [Ja.x80]: 'c_80x80', [Ja.x220]: 'c_220x220' },
                    on = ({ badgeID: e, size: t = Ja.default, className: a }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(sn[t]);
                        return r().createElement('div', {
                            className: b()(rn.base, rn[`base__${t}`], a),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${e}`)})` },
                        });
                    },
                    un = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    ln = (0, n.memo)(({ tooltipHeaderName: e }) => {
                        const t = (0, n.useMemo)(
                                () => pa(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            a = R.strings.tooltips.anonymizer.teamStats.body();
                        return r().createElement(
                            Xe,
                            { header: t, body: a },
                            r().createElement('div', { className: un.anonymizedIcon }),
                        );
                    });
                function cn() {
                    return (
                        (cn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        cn.apply(this, arguments)
                    );
                }
                const dn = { [Ja.default]: 'c_64x24', [Ja.x48]: 'c_68x28' },
                    mn = { [Ja.default]: 'c_48x48', [Ja.x48]: 'c_48x48' },
                    _n = ({
                        userName: e,
                        clanAbbrev: t = '',
                        igrType: a = 0,
                        badge: s = { badgeID: '' },
                        suffixBadge: o = { badgeID: '' },
                        isInverted: i = !1,
                        isFakeNameVisible: u = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: d = Ja.default,
                        userNameClassName: m = '',
                        clanTagClassName: _ = '',
                    }) => {
                        const g = R.images.gui.maps.icons.library.badges.strips.$dyn(dn[d]),
                            E = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${g.$dyn(`strip_${o.badgeID}`)})` }),
                                [o, g],
                            ),
                            p = R.images.gui.maps.icons.library.badges.$dyn(mn[d]),
                            h = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${p.$dyn(`badge_${o.badgeID}`)})` }),
                                [o, p],
                            ),
                            v = t ? `[${t}]` : '',
                            f = b()(un.base, un[`base__${d}`], i && un.base__inverted),
                            C = b()(un.userName, m),
                            A = b()(un.clanTag, _),
                            D = e !== c,
                            F = u ? `${c}${v}` : c,
                            w = Boolean(s.badgeID) && r().createElement(on, cn({ size: d }, s, { key: 'badge' })),
                            S = Date.now(),
                            B = [
                                w,
                                [
                                    r().createElement(
                                        'div',
                                        { className: C, key: 'userName' },
                                        r().createElement(nn, { content: e, key: S }),
                                    ),
                                    !u && Boolean(v) && r().createElement('div', { className: A, key: 'clanTag' }, v),
                                ],
                                0 !== a && r().createElement('div', { className: un.igrIcon, key: 'igrType' }),
                                Boolean(o.badgeID) &&
                                    r().createElement(
                                        'div',
                                        { className: un.suffixBadgeWrapper, key: 'suffixBadge' },
                                        r().createElement('div', { className: un.suffixBadgeStripe, style: E }),
                                        r().createElement('div', { className: un.suffixBadge, style: h }),
                                    ),
                                l && D && r().createElement(ln, { tooltipHeaderName: F, key: 'anonymizer' }),
                            ];
                        return r().createElement('div', { className: f }, i ? B.reverse() : B);
                    };
                let gn;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(gn || (gn = {}));
                const En = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: r = 0,
                        args: s,
                        isEnabled: o = !0,
                        onMouseDown: i,
                    }) => {
                        const u = (0, n.useCallback)(() => {
                                (0, ae.c9)(ae.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    Y.playYes();
                            }, [s, t, a, r]),
                            l = (0, n.useCallback)(() => {
                                (0, ae.c9)(ae.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, r]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === gn.RIGHT)(e) && u();
                                },
                                [i, u],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === o && l();
                            }, [o, l]),
                            o ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    pn = ['children'];
                function hn() {
                    return (
                        (hn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        hn.apply(this, arguments)
                    );
                }
                const vn = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, pn);
                        return r().createElement(
                            En,
                            hn({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    fn = ({ children: e, isEnabled: t, contextMenuArgs: a }) =>
                        t ? r().createElement(vn, { args: a }, e) : e,
                    bn = {
                        base: 'Row_base_fc',
                        base__personal: 'Row_base__personal_1c',
                        order: 'Row_order_30',
                        order__first: 'Row_order__first_53',
                        order__second: 'Row_order__second_cb',
                        order__third: 'Row_order__third_c6',
                        playerContainer: 'Row_playerContainer_9e',
                        player: 'Row_player_f9',
                        clanTag: 'Row_clanTag_73',
                        battles: 'Row_battles_61',
                        score: 'Row_score_55',
                    },
                    Cn = R.strings.comp7.leaderboard.table.tooltip,
                    An = { 0: 'first', 1: 'second', 2: 'third' },
                    Dn = (0, ee.Pi)(({ index: e, className: t }) => {
                        const a = ft().model,
                            n = a.computes.leaderboardItem(e),
                            s = n.position,
                            o = n.battlesCount,
                            i = n.userName,
                            u = n.clanTag,
                            l = n.clanTagColor,
                            c = n.score,
                            d = n.spaID,
                            m = a.computes.isPersonalRow(e),
                            _ = a.computes.hasPositionIcon(e);
                        return r().createElement(
                            'div',
                            { className: b()(bn.base, m && bn.base__personal, t), style: { '--clanTagColor': l } },
                            r().createElement(
                                Xe,
                                { header: Cn.order.header(), body: Cn.order.body() },
                                r().createElement(
                                    'div',
                                    { className: b()(bn.order, _ && bn[`order__${An[s]}`]) },
                                    !_ && s + 1,
                                ),
                            ),
                            r().createElement(
                                fn,
                                { contextMenuArgs: { spaID: d, userName: i }, isEnabled: !m },
                                r().createElement(
                                    'div',
                                    { className: bn.playerContainer },
                                    r().createElement(
                                        Xe,
                                        { header: Cn.player.header(), body: Cn.player.body() },
                                        r().createElement(
                                            'div',
                                            { className: bn.player },
                                            r().createElement(_n, {
                                                userName: i,
                                                clanAbbrev: u,
                                                clanTagClassName: l && bn.clanTag,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                Xe,
                                { header: Cn.battlesCount.header(), body: Cn.battlesCount.body() },
                                r().createElement(
                                    'div',
                                    { className: bn.battles },
                                    r().createElement(Ht, { value: o }),
                                ),
                            ),
                            r().createElement(
                                Xe,
                                { header: Cn.score.header(), body: Cn.score.body() },
                                r().createElement('div', { className: bn.score }, r().createElement(Ht, { value: c })),
                            ),
                        );
                    }),
                    Fn = 'Leaderboard_base_ec',
                    wn = 'Leaderboard_content_a5',
                    Sn = 'Leaderboard_shadowsContainer_bc',
                    Bn = 'Leaderboard_shadowsContainer__bottom_b4',
                    yn = 'Leaderboard_shadow_3f',
                    kn = 'Leaderboard_shadow__left_ee',
                    Pn = 'Leaderboard_shadow__center_37',
                    Nn = 'Leaderboard_shadow__right_ee',
                    Rn = 'Leaderboard_area_c7',
                    xn = 'Leaderboard_row_06',
                    In = 'Leaderboard_rowsDivider_2c',
                    Tn = { base: 'Leaderboard_bar_69' },
                    Ln = (0, ee.Pi)(({ limit: e, api: t, rowHeight: a = 0, rowsDividerHeight: n = 0 }) => {
                        const s = ft().model,
                            o = s.computes.hasRowsDivider(),
                            i = s.computes.rowsDividerPosition() % e;
                        return r().createElement(
                            'div',
                            {
                                className: Fn,
                                style: { '--rowHeight': a ? `${a}rem` : 'auto', '--rowsDividerHeight': `${n}rem` },
                            },
                            r().createElement(Za, null),
                            r().createElement(
                                'div',
                                { className: wn },
                                r().createElement(
                                    'div',
                                    { className: Sn },
                                    r().createElement('div', { className: b()(yn, kn) }),
                                    r().createElement('div', { className: b()(yn, Pn) }),
                                    r().createElement('div', { className: b()(yn, Nn) }),
                                ),
                                r().createElement(
                                    la,
                                    { api: t, className: Rn },
                                    ca(s.items.get().length, (e) =>
                                        r().createElement(
                                            r().Fragment,
                                            { key: e },
                                            o && e === i && r().createElement(za, { index: e, className: In }),
                                            r().createElement(Dn, { className: xn, index: e }),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: b()(Sn, Bn) },
                                    r().createElement('div', { className: b()(yn, kn) }),
                                    r().createElement('div', { className: b()(yn, Pn) }),
                                    r().createElement('div', { className: b()(yn, Nn) }),
                                ),
                                r().createElement(ia, { api: t, classNames: Tn }),
                            ),
                        );
                    }),
                    On = {
                        base: 'Pagination_base_49',
                        pageButton: 'Pagination_pageButton_27',
                        pageButton__active: 'Pagination_pageButton__active_0b',
                        pageButton__inactive: 'Pagination_pageButton__inactive_4c',
                        pageButton__disabled: 'Pagination_pageButton__disabled_e4',
                        pageValue: 'Pagination_pageValue_b2',
                        control: 'Pagination_control_4f',
                        control__active: 'Pagination_control__active_25',
                        control__prev: 'Pagination_control__prev_8e',
                        control__next: 'Pagination_control__next_86',
                    };
                let Mn;
                !(function (e) {
                    (e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled');
                })(Mn || (Mn = {}));
                const $n = R.strings.comp7.pagination,
                    Wn = Math.trunc(4),
                    Hn = ({ pagesAmount: e, activePage: t, className: a, onPageClick: n, onControlEvent: s }) => {
                        const o = t > 1,
                            i = t < e,
                            u = e < 9 ? e : 9,
                            l = (e) => () => {
                                null == n || n(e);
                            },
                            c = (e) => () => {
                                null == s || s(e);
                            };
                        return r().createElement(
                            'div',
                            { className: b()(On.base, a) },
                            r().createElement(
                                'div',
                                {
                                    className: b()(On.control, On.control__prev, o && On.control__active),
                                    onClick: o ? c('prevClick') : void 0,
                                },
                                $n.prev(),
                            ),
                            ca(u, (a) => {
                                const n = ((e, t, a) => {
                                        const n = t > Wn + 1,
                                            r = a > 9 && t + Wn < a;
                                        return a <= 9
                                            ? e + 1
                                            : 0 === e
                                              ? 1
                                              : (1 === e && n) || (7 === e && r)
                                                ? $n.dots()
                                                : 8 === e
                                                  ? a
                                                  : n && !r
                                                    ? a - 8 + e
                                                    : !n && r
                                                      ? e + 1
                                                      : e - Wn + t;
                                    })(a, t, e),
                                    s = ((e, t) =>
                                        Number.isInteger(e) ? (t === e ? Mn.Active : Mn.Inactive) : Mn.Disabled)(n, t);
                                return r().createElement(
                                    'div',
                                    {
                                        key: a,
                                        className: b()(On.pageButton, On[`pageButton__${s}`]),
                                        onClick: s !== Mn.Disabled && 'number' == typeof n ? l(n) : void 0,
                                    },
                                    r().createElement('div', { className: On.pageValue }, n),
                                );
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: b()(On.control, On.control__next, i && On.control__active),
                                    onClick: i ? c('nextClick') : void 0,
                                },
                                $n.next(),
                            ),
                        );
                    },
                    Un = 'HasRecordsState_base_bb',
                    zn = 'HasRecordsState_base__withoutPagination_ad',
                    Vn = 'HasRecordsState_tableContainer_02',
                    Gn = 'HasRecordsState_pagination_cb',
                    qn = {
                        settings: Object.assign({}, Mt, {
                            animationConfig: Object.assign({}, Mt.animationConfig, { round: 1 }),
                        }),
                    },
                    jn = (0, ee.Pi)(
                        ({
                            limit: e,
                            onCurrentRankTabChange: t,
                            positionToScroll: a,
                            onPositionToScrollChange: s,
                            className: i,
                        }) => {
                            const u = ft(),
                                l = u.model,
                                c = u.controls,
                                d = l.root.get(),
                                m = d.personalPosition,
                                _ = d.lastBestUserPosition,
                                g = Wt(qn),
                                E = g.animationScroll.scrollPosition,
                                p = g.applyScroll,
                                h = g.events,
                                v = g.getBounds,
                                f = l.computes.isDefaultPersonalPosition() ? zt.None : zt.Active,
                                C = l.computes.pages(e),
                                A = l.computes.pagePositions(),
                                D = l.computes.rowsDividerPosition(),
                                F = l.computes.hasRowsDivider(),
                                w = ((e, t) => o.O.view.remToPx(44) * ((e + 1) % t))(_, e);
                            (0, n.useEffect)(
                                () =>
                                    Re(() => {
                                        if (void 0 !== a) {
                                            switch (a.type) {
                                                case 'rank': {
                                                    const e = a.rank === kt.Fifth ? w : 0;
                                                    p(e);
                                                    break;
                                                }
                                                case 'personalPosition': {
                                                    const t = o.O.view.remToPx(44) * (m % e),
                                                        a = F && m > _ ? t + o.O.view.remToPx(70) : t;
                                                    p(a);
                                                    break;
                                                }
                                                case 'page':
                                                    p(0);
                                            }
                                            s(void 0);
                                        }
                                    }),
                                [p, F, _, e, m, a, w, s],
                            );
                            const S = (0, n.useCallback)(() => {
                                const e = A.first > _ ? kt.Fifth : kt.Sixth;
                                t(e);
                            }, [A.first, _, t]);
                            (0, n.useEffect)(() => {
                                S();
                            }, [S]),
                                (0, n.useEffect)(() => {
                                    const e = () => {
                                        if (F && D > A.first) {
                                            const e = v()[1],
                                                a = 0 !== e && E.goal === e && w >= e;
                                            t(E.goal >= w || a ? kt.Fifth : kt.Sixth);
                                        } else m >= A.first && m <= A.last ? t(m > _ ? kt.Fifth : kt.Sixth) : S();
                                    };
                                    return h.on('change', e), () => h.off('change', e);
                                }, [h, A.first, F, _, A.last, e, m, w, D, E.goal, t, S, v]);
                            const B = (0, n.useCallback)(() => {
                                    f !== zt.None &&
                                        (Y.playYes(),
                                        c.getTableRecords(e, m - (m % e)),
                                        s({ type: 'personalPosition' }));
                                }, [c, e, f, m, s]),
                                y = (0, n.useCallback)(
                                    (t) => {
                                        Y.playYes(), c.getTableRecords(e, (t - 1) * e), s({ type: 'page' });
                                    },
                                    [c, e, s],
                                ),
                                k = (0, n.useCallback)(
                                    (t) => {
                                        Y.playYes();
                                        const a = (() => {
                                            switch (t) {
                                                case 'prevClick':
                                                    return C.active - 1;
                                                case 'nextClick':
                                                    return C.active + 1;
                                                default:
                                                    return 1;
                                            }
                                        })();
                                        c.getTableRecords(e, (a - 1) * e), s({ type: 'page' });
                                    },
                                    [C.active, c, e, s],
                                );
                            return r().createElement(
                                'div',
                                { className: b()(Un, !C.hasPagination && zn, i) },
                                r().createElement(
                                    'div',
                                    { className: Vn },
                                    r().createElement(Ln, { limit: e, api: g, rowHeight: 44, rowsDividerHeight: 70 }),
                                ),
                                r().createElement(qt, { state: f, onClick: B, height: 44 }),
                                C.hasPagination &&
                                    r().createElement(Hn, {
                                        pagesAmount: C.amount,
                                        activePage: C.active,
                                        className: Gn,
                                        onPageClick: y,
                                        onControlEvent: k,
                                    }),
                            );
                        },
                    ),
                    Qn = R.views.lobby.comp7.tooltips,
                    Yn = ['rank', 'divisions', 'from', 'to', 'topPercentage', 'children', 'className'];
                function Xn() {
                    return (
                        (Xn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Xn.apply(this, arguments)
                    );
                }
                const Kn = (e) => {
                        let t = e.rank,
                            a = e.divisions,
                            n = e.from,
                            s = e.to,
                            o = e.topPercentage,
                            i = e.children,
                            u = e.className,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Yn);
                        const c = (({ rank: e, topPercentage: t, from: a, to: n, divisions: r = '' }) => {
                            switch (e) {
                                case ka.Sixth:
                                    return { contentId: Qn.SixthRankTooltip('resId'), args: { topPercentage: t } };
                                case ka.Fifth:
                                    return { contentId: Qn.FifthRankTooltip('resId'), args: { from: a } };
                                default:
                                    return {
                                        contentId: Qn.GeneralRankTooltip('resId'),
                                        args: { rank: e, divisions: r, from: a, to: n },
                                    };
                            }
                        })({ rank: t, divisions: a, from: n, to: s, topPercentage: o });
                        return r().createElement(qe, Xn({}, c, l), r().createElement('div', { className: u }, i));
                    },
                    Zn = {
                        '--pageContentWidth': '78vw',
                        base: 'RankTabs_base_c4',
                        line: 'RankTabs_line_0e',
                        line__toRight: 'RankTabs_line__toRight_43',
                        line__toLeft: 'RankTabs_line__toLeft_cd',
                        ranksContainer: 'RankTabs_ranksContainer_86',
                        dividersDot: 'RankTabs_dividersDot_b9',
                        rank: 'RankTabs_rank_6f',
                        rankEmblem: 'RankTabs_rankEmblem_d6',
                        rank__disabled: 'RankTabs_rank__disabled_55',
                        label: 'RankTabs_label_cc',
                        rank__active: 'RankTabs_rank__active_38',
                        rankTabHighlight: 'RankTabs_rankTabHighlight_c1',
                        fadeIn: 'RankTabs_fadeIn_42',
                        fadeInThreeQuarters: 'RankTabs_fadeInThreeQuarters_0c',
                        fadeInHalf: 'RankTabs_fadeInHalf_ca',
                        fadeOut: 'RankTabs_fadeOut_3e',
                        fadeInWithScale: 'RankTabs_fadeInWithScale_d0',
                        slideUp: 'RankTabs_slideUp_d1',
                        scale: 'RankTabs_scale_a5',
                        raysAppearance: 'RankTabs_raysAppearance_39',
                        rotate: 'RankTabs_rotate_b0',
                        'reverse-rotate': 'RankTabs_reverse-rotate_85',
                        glowAppearance: 'RankTabs_glowAppearance_c7',
                        highlightAppearance: 'RankTabs_highlightAppearance_67',
                        blink: 'RankTabs_blink_8a',
                        slideUpIn: 'RankTabs_slideUpIn_c8',
                    };
                let Jn;
                !(function (e) {
                    (e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled');
                })(Jn || (Jn = {}));
                const er = ({ tabs: e, seasonName: t, className: a, onTabClick: n }) => {
                        const s = (e) => () => {
                            null == n || n(e);
                        };
                        return r().createElement(
                            'div',
                            { className: b()(Zn.base, a) },
                            r().createElement('div', { className: Zn.dividersDot }),
                            r().createElement('div', { className: b()(Zn.line, Zn.line__toRight) }),
                            r().createElement(
                                'div',
                                { className: Zn.ranksContainer },
                                e.map(({ rank: e, state: a, args: n = {} }) => {
                                    const o = a !== Jn.Disabled;
                                    return r().createElement(
                                        'div',
                                        { className: b()(Zn.rank, Zn[`rank__${a}`]), key: e },
                                        r().createElement(
                                            Kn,
                                            {
                                                rank: e,
                                                from: null == n ? void 0 : n.from,
                                                topPercentage: null == n ? void 0 : n.topPercentage,
                                                onClick: o ? s(e) : void 0,
                                                onMouseEnter: o ? Y.playHighlight : void 0,
                                            },
                                            r().createElement('div', { className: Zn.rankTabHighlight }),
                                            r().createElement(La, {
                                                seasonName: t,
                                                rank: e,
                                                size: Ia.x64,
                                                className: Zn.rankEmblem,
                                            }),
                                        ),
                                        a !== Jn.Disabled && r().createElement('div', { className: Zn.label }, Wa(e)),
                                    );
                                }),
                            ),
                            r().createElement('div', { className: b()(Zn.line, Zn.line__toLeft) }),
                        );
                    },
                    tr = 'HasRecordsStateContainer_base_ee',
                    ar = 'HasRecordsStateContainer_content_b4',
                    nr = ({ rank: e, lastBestUserPosition: t, currentRankTab: a, recordsCount: n }) =>
                        (e === kt.Sixth && -1 === t) || 0 === n ? Jn.Disabled : e === a ? Jn.Active : Jn.Inactive,
                    rr = [kt.Fifth, kt.Sixth],
                    sr = (0, ee.Pi)(({ className: e }) => {
                        const t = ft(),
                            a = t.model,
                            s = t.controls,
                            o = j().model,
                            i = a.root.get(),
                            u = i.lastBestUserPosition,
                            l = i.recordsCount,
                            c = i.from,
                            d = i.topPercentage,
                            m = a.computes.hasLastBestUserPosition(),
                            _ = a.computes.rowsDividerPosition(),
                            g = (0, n.useState)(a.computes.firstItemRank()),
                            E = g[0],
                            p = g[1],
                            h = (0, n.useState)(),
                            v = h[0],
                            f = h[1],
                            C = rr.map((e) => ({
                                rank: e,
                                state: nr({ rank: e, lastBestUserPosition: u, currentRankTab: E, recordsCount: l }),
                                args: { from: c, topPercentage: d },
                            })),
                            A = (0, n.useCallback)(
                                (e) => {
                                    const t = e === kt.Fifth && m ? _ - (_ % 50) : 0;
                                    Y.playClick(), s.getTableRecords(50, t), f({ type: 'rank', rank: e });
                                },
                                [s, _, m, 50],
                            );
                        return r().createElement(
                            'div',
                            { className: b()(tr, e) },
                            r().createElement(er, { tabs: C, seasonName: o.season.name.get(), onTabClick: A }),
                            r().createElement(jn, {
                                limit: 50,
                                positionToScroll: v,
                                onCurrentRankTabChange: p,
                                onPositionToScrollChange: f,
                                className: ar,
                            }),
                        );
                    }),
                    or = 'FormatText_base_d0',
                    ir = ({ binding: e, text: t = '', classMix: a, alignment: s = ga.left, formatWithBrackets: o }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const i = o && e ? Ea(t, e) : t;
                        return r().createElement(
                            n.Fragment,
                            null,
                            i.split('\n').map((t, o) =>
                                r().createElement(
                                    'div',
                                    { className: b()(or, a), key: `${t}-${o}` },
                                    ((e, t, a) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : Fa(e, t))))(
                                        t,
                                        s,
                                        e,
                                    ).map((e, t) => r().createElement(n.Fragment, { key: `${t}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    ur = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    lr = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    cr = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    dr = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    mr = (0, n.memo)(({ text: e, binding: t, classMix: a }) => {
                        const s = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            o = (0, n.useMemo)(() => t || {}, [t]);
                        let i = lr.exec(e),
                            u = e,
                            l = 0;
                        for (; i; ) {
                            const a = i[0],
                                n = cr.exec(a),
                                c = dr.exec(a),
                                d = i[1];
                            if (n && c) {
                                const e = n[0],
                                    i = e + l++ + e;
                                (u = u.replace(a, `%(${i})`)),
                                    (o[i] = ur[e]
                                        ? r().createElement(
                                              'span',
                                              { className: ur[e] },
                                              r().createElement(ir, { text: d, binding: t }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: s(e) },
                                              r().createElement(ir, { text: d, binding: t }),
                                          ));
                            }
                            i = lr.exec(e);
                        }
                        return r().createElement(ir, { text: u, classMix: a, binding: o });
                    }),
                    _r = {
                        base: 'NoRecordsState_base_9b',
                        imageContainer: 'NoRecordsState_imageContainer_13',
                        image: 'NoRecordsState_image_fe',
                        image__season_first: 'NoRecordsState_image__season_first_5d',
                        image__season_second: 'NoRecordsState_image__season_second_8c',
                        image__season_third: 'NoRecordsState_image__season_third_be',
                        title: 'NoRecordsState_title_f4',
                        subtitle: 'NoRecordsState_subtitle_5b',
                    },
                    gr = R.strings.comp7.leaderboard.noRecords,
                    Er = (0, ee.Pi)(({ className: e }) => {
                        const t = ft().model.root.get().from,
                            a = j().model;
                        return r().createElement(
                            'div',
                            { className: b()(_r.base, e) },
                            r().createElement(
                                'div',
                                { className: _r.imageContainer },
                                r().createElement('div', {
                                    className: b()(_r.image, _r[`image__season_${a.season.name.get()}`]),
                                }),
                            ),
                            r().createElement('div', { className: _r.title }, gr.title()),
                            r().createElement(mr, {
                                text: gr.subtitle(),
                                binding: { pointsCount: r().createElement(Ht, { value: t }) },
                                classMix: _r.subtitle,
                            }),
                        );
                    });
                let pr;
                !(function (e) {
                    (e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime');
                })(pr || (pr = {}));
                var hr = a(8613);
                const vr = 60,
                    fr = 3600,
                    br = 86400,
                    Cr = (Date.now(), hr.Ew.getRegionalDateTime),
                    Ar = hr.Ew.getFormattedDateTime;
                const Dr = (0, n.memo)(({ datetime: e, format: t = pr.ShortDate, isConvertedToLocal: a = !0 }) =>
                        Object.values(pr).includes(t) ? Cr(e, t, a) : Ar(e, t, a),
                    ),
                    Fr = pa(R.strings.comp7.lastUpdateNote.lastBestUserPoints.description(), { count: 15 }),
                    wr = 'LastUpdateNote_base_7f',
                    Sr = 'LastUpdateNote_infoIcon_5c',
                    Br = ['timestamp', 'className', 'classNames', 'dateTimeFormat', 'contentId', 'tooltipDescription'];
                function yr() {
                    return (
                        (yr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        yr.apply(this, arguments)
                    );
                }
                const kr = R.strings.comp7.lastUpdateNote,
                    Pr = (e) => {
                        let t = e.timestamp,
                            a = e.className,
                            n = e.classNames,
                            s = e.dateTimeFormat,
                            o = void 0 === s ? pr.ShortTime : s,
                            i = e.contentId,
                            u = void 0 === i ? R.views.lobby.comp7.tooltips.LastUpdateTooltip('resId') : i,
                            l = e.tooltipDescription,
                            c = void 0 === l ? Fr : l,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Br);
                        return r().createElement(
                            'div',
                            { className: b()(wr, a) },
                            r().createElement(ir, {
                                text: kr.info(),
                                binding: { date: r().createElement(Dr, { datetime: t, format: o }) },
                            }),
                            r().createElement(
                                qe,
                                yr({ ignoreShowDelay: !0, contentId: u, args: { description: c } }, d),
                                r().createElement('div', { className: b()(Sr, null == n ? void 0 : n.icon) }),
                            ),
                        );
                    },
                    Nr = R.strings.comp7,
                    Rr = (e, t) => String(e.$dyn(t)),
                    xr = (e) => Rr(Nr.seasonName, e);
                function Ir(e, t, a) {
                    ((e, t) => {
                        const a = (0, n.useRef)(e);
                        (a.current = e),
                            (0, n.useEffect)(() => {
                                if (void 0 === t) return;
                                const e = window.setInterval(() => {
                                    a.current();
                                }, t);
                                return () => clearInterval(e);
                            }, [t]);
                    })(
                        () => {
                            a();
                        },
                        e < t ? 950 : void 0,
                    );
                }
                const Tr = ['children'];
                function Lr() {
                    return (
                        (Lr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Lr.apply(this, arguments)
                    );
                }
                const Or = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Tr);
                        return r().createElement(
                            qe,
                            Lr(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                a,
                            ),
                            t,
                        );
                    },
                    Mr = (e) => {
                        const t = Math.floor(e);
                        return {
                            totalSecondsLeft: t,
                            seconds: Math.floor(t % 60),
                            minutes: Math.floor(t / 60) % 60,
                            hours: Math.floor((t / 3600) % 24),
                            totalDays: Math.floor(t / 86400),
                        };
                    },
                    $r = R.strings.comp7.season,
                    Wr = (e, t) => ({
                        startDate: r().createElement(Dr, { datetime: e, format: pr.ShortDate }),
                        endDate: r().createElement(Dr, { datetime: t, format: pr.ShortDate }),
                    }),
                    Hr = (e, t, a) => {
                        const n = t - a,
                            s = ((e, t) => Mr(e - t))(t, a);
                        return n >= 604800
                            ? r().createElement(ir, { text: $r.range(), binding: Wr(e, t) })
                            : n >= br
                              ? r().createElement(ir, { text: $r.daysLeft(), binding: s })
                              : n >= fr
                                ? r().createElement(ir, { text: $r.hoursLeft(), binding: s })
                                : n >= vr
                                  ? r().createElement(ir, { text: $r.minutesLeft(), binding: s })
                                  : n >= 1
                                    ? r().createElement(ir, { text: $r.secondsLeft(), binding: s })
                                    : void 0;
                    },
                    Ur = 'ActiveSeasonState_base_55',
                    zr = 'ActiveSeasonState_calendarIcon_df',
                    Vr = 'ActiveSeasonState_divider_5b',
                    Gr = ({
                        startTimestamp: e,
                        endTimestamp: t,
                        currentTimestamp: a,
                        seasonName: n,
                        tooltipId: s = '',
                        hasSeasonName: o = !0,
                        classNames: i,
                    }) =>
                        r().createElement(
                            Or,
                            { args: { tooltipId: s }, isEnabled: Boolean(s) },
                            r().createElement(
                                'div',
                                { className: Ur },
                                r().createElement('div', { className: b()(zr, null == i ? void 0 : i.calendarIcon) }),
                                o &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        xr(n),
                                        r().createElement('div', { className: Vr }),
                                    ),
                                Hr(e, t, a),
                            ),
                        ),
                    qr = 'ScheduleSubheading_base_f7',
                    jr = (0, ee.Pi)(({ className: e, classNames: t, hasSeasonName: a = !0 }) => {
                        const n = j(),
                            s = n.model,
                            o = n.controls,
                            i = s.season.startTimestamp.get(),
                            u = s.season.endTimestamp.get(),
                            l = s.season.serverTimestamp.get(),
                            c = s.season.name.get();
                        return (
                            Ir(l, u, o.pollServerTime),
                            r().createElement(
                                'div',
                                { className: b()(qr, e) },
                                l < u
                                    ? r().createElement(
                                          'div',
                                          { className: null == t ? void 0 : t.activeSeasonState },
                                          r().createElement(Gr, {
                                              startTimestamp: i,
                                              endTimestamp: u,
                                              currentTimestamp: l,
                                              seasonName: c,
                                              tooltipId: s.root.get().tooltipId,
                                              hasSeasonName: a,
                                              classNames: null == t ? void 0 : t.scheduleClassNames,
                                          }),
                                      )
                                    : r().createElement(mr, {
                                          text: R.strings.comp7.season.over(),
                                          binding: { seasonName: xr(c) },
                                      }),
                            )
                        );
                    }),
                    Qr = 'SubheadingContainer_base_a6',
                    Yr = 'SubheadingContainer_updateInfo_9a',
                    Xr = 'SubheadingContainer_updateInfoText_40',
                    Kr = (0, ee.Pi)(({ className: e }) => {
                        const t = ft().model,
                            a = t.root.get().leaderboardUpdateTimestamp,
                            n = t.computes.hasUpdateInfo(),
                            s = pa(R.strings.comp7.lastUpdateNote.ratingPositions.description(), { count: 15 });
                        return r().createElement(
                            'div',
                            { className: b()(Qr, e) },
                            r().createElement(jr, null),
                            n &&
                                r().createElement(
                                    'div',
                                    { className: Yr },
                                    r().createElement(Pr, { timestamp: a, className: Xr, tooltipDescription: s }),
                                ),
                        );
                    }),
                    Zr = {
                        '--pageContentWidth': '78vw',
                        base: 'LeaderboardPage_base_4a',
                        animationContainer: 'LeaderboardPage_animationContainer_94',
                        subHeading: 'LeaderboardPage_subHeading_ae',
                        content: 'LeaderboardPage_content_46',
                        base__loading: 'LeaderboardPage_base__loading_12',
                        hasRecords: 'LeaderboardPage_hasRecords_9f',
                        error: 'LeaderboardPage_error_7d',
                        noRecords: 'LeaderboardPage_noRecords_6b',
                        spinner: 'LeaderboardPage_spinner_67',
                        fadeIn: 'LeaderboardPage_fadeIn_46',
                        fadeInThreeQuarters: 'LeaderboardPage_fadeInThreeQuarters_98',
                        fadeInHalf: 'LeaderboardPage_fadeInHalf_30',
                        fadeOut: 'LeaderboardPage_fadeOut_e8',
                        fadeInWithScale: 'LeaderboardPage_fadeInWithScale_07',
                        slideUp: 'LeaderboardPage_slideUp_9c',
                        scale: 'LeaderboardPage_scale_5d',
                        raysAppearance: 'LeaderboardPage_raysAppearance_c3',
                        rotate: 'LeaderboardPage_rotate_db',
                        'reverse-rotate': 'LeaderboardPage_reverse-rotate_1d',
                        glowAppearance: 'LeaderboardPage_glowAppearance_4f',
                        highlightAppearance: 'LeaderboardPage_highlightAppearance_23',
                        blink: 'LeaderboardPage_blink_7e',
                        slideUpIn: 'LeaderboardPage_slideUpIn_37',
                    },
                    Jr = { [st.Initial]: 'initial', [st.Success]: 'success', [st.Error]: 'error' },
                    es = (0, ee.Pi)(() => {
                        const e = ft().model,
                            t = e.root.get(),
                            a = t.state,
                            n = t.isLoading,
                            s = (0, xe.useSpring)(ct);
                        return r().createElement(
                            'div',
                            { className: b()(Zr.base, Zr[`base__${Jr[a]}`], n && Zr.base__loading) },
                            r().createElement(lt, { className: se }, R.strings.comp7.page.heading.leaderboard()),
                            r().createElement(Kr, { className: Zr.subHeading }),
                            r().createElement(
                                xe.animated.div,
                                { className: Zr.animationContainer, style: s },
                                r().createElement(
                                    'div',
                                    { className: Zr.content },
                                    (() => {
                                        switch (a) {
                                            case st.Initial:
                                                return null;
                                            case st.Success:
                                                return e.items.get().length > 0
                                                    ? r().createElement(sr, { className: Zr.hasRecords })
                                                    : r().createElement(Er, { className: Zr.noRecords });
                                            case st.Error:
                                                return r().createElement(yt, { className: Zr.error });
                                            default:
                                                console.error(
                                                    'Unreachable branch: add component for proper leaderboard state',
                                                );
                                        }
                                    })(),
                                ),
                                n &&
                                    r().createElement(rt, {
                                        message: R.strings.comp7.waitingSpinner.message(),
                                        className: Zr.spinner,
                                    }),
                            ),
                        );
                    }),
                    ts = (e) => be(e, (e) => Ba(e.name)).join(R.strings.comp7.listSeparator());
                let as, ns, rs, ss;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(as || (as = {})),
                    (function (e) {
                        (e[(e.Base = 0)] = 'Base'),
                            (e[(e.Vehicle = 1)] = 'Vehicle'),
                            (e[(e.Style3d = 2)] = 'Style3d'),
                            (e[(e.Reward = 3)] = 'Reward');
                    })(ns || (ns = {})),
                    (function (e) {
                        (e.Locked = 'locked'),
                            (e.ReadyToRestore = 'readyToRestore'),
                            (e.ReadyToPurchase = 'readyToPurchase'),
                            (e.Purchased = 'purchased'),
                            (e.InProgress = 'inProgress');
                    })(rs || (rs = {})),
                    (function (e) {
                        (e.Previous = 'previous'), (e.Current = 'current'), (e.Future = 'future');
                    })(ss || (ss = {}));
                const os = [ka.Fifth, ka.Sixth],
                    is = V()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    qualificationModel: e.primitives(
                                        ['isActive', 'battlesCount', 'maxBattlesCount', 'isRatingCalculation'],
                                        'qualificationModel',
                                    ),
                                    isRewardLayerVisible: W.LO.box(!1),
                                    isParallaxPreloaded: W.LO.box(!1),
                                },
                                a = e.array('items'),
                                n = e.array('qualificationModel.battles'),
                                r = (0, _e.Om)(
                                    (e) => {
                                        const t = he(a.get(), e);
                                        if (!t) throw new Error(`item with index ${e} was not found`);
                                        return {
                                            hasRankInactivity: t.hasRankInactivity,
                                            rank: t.rank,
                                            from: t.from,
                                            to: t.to,
                                        };
                                    },
                                    { equals: pt },
                                ),
                                s = (0, _e.Om)(
                                    (e) => {
                                        const t = he(a.get(), e);
                                        if (!t) throw new Error(`item with index ${e} was not found`);
                                        return be(t.divisions, (e) => Object.assign({}, e));
                                    },
                                    { equals: $ },
                                ),
                                o = (0, _e.Om)(
                                    (e) => {
                                        const t = s(e);
                                        return {
                                            list: ts(t),
                                            count: t.length,
                                            currentDivisionIndex: Fe(t, (e) => e.state === ma.Current),
                                        };
                                    },
                                    { equals: pt },
                                ),
                                i = (0, _e.Om)(() => {
                                    const e = t.root.get().currentItemIndex,
                                        n = he(a.get(), e);
                                    if (!n) throw new Error(`current item with currentItemIndex ${e} was not found`);
                                    return n.hasRankInactivity;
                                }),
                                u = (0, _e.Om)(
                                    (e) => {
                                        var a;
                                        const n =
                                            ((o = e),
                                            (i = t.root.get().currentItemIndex),
                                            o > i ? ss.Future : o < i ? ss.Previous : ss.Current);
                                        var o, i;
                                        return {
                                            state: n,
                                            division:
                                                null == (a = De(s(e), (e) => e.state === ma.Current)) ? void 0 : a.name,
                                            hasInfo: n === ss.Current && os.includes(r(e).rank),
                                        };
                                    },
                                    { equals: pt },
                                ),
                                l = (0, _e.Om)(
                                    (e) => {
                                        const t = he(n.get(), e);
                                        if (!t) throw new Error(`qualification battle with index ${e} was not found`);
                                        return t;
                                    },
                                    { equals: $ },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    item: r,
                                    qualificationBattle: l,
                                    itemsLength: (0, _e.Om)(() => a.get().length),
                                    qualificationBattlesLength: (0, _e.Om)(() => n.get().length),
                                    rankSettings: u,
                                    hasCurrentItemRankInactivity: i,
                                    divisions: s,
                                    divisionsConfig: o,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = (0, W.aD)((e) => t.isRewardLayerVisible.set(e));
                            return {
                                setIsParallaxPreloaded: (0, W.aD)((e) => t.isParallaxPreloaded.set(e)),
                                setRewardLayerVisible: a,
                                goToRankRewardsPage: e.createCallbackNoArgs('qualificationModel.onRankRewardsPageOpen'),
                            };
                        },
                    ),
                    us = is[0],
                    ls = is[1],
                    cs = 'RatingScore_base_bd',
                    ds = 'RatingScore_rating_c9',
                    ms = 'RatingScore_score_33',
                    _s = 'RatingScore_rankInactivity_17',
                    gs = 'RatingScore_rankInactivityCount_31',
                    Es = 'RatingScore_rankInactivityIconContainer_32',
                    ps = 'RatingScore_rankInactivityIcon_05',
                    hs = 'RatingScore_title_e4',
                    vs = ({ currentScore: e, hasRankInactivity: t, rankInactivityCount: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: b()(cs, n) },
                            r().createElement(
                                'div',
                                { className: ds },
                                r().createElement('div', { className: ms }, e),
                                t &&
                                    r().createElement(
                                        qe,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.comp7.tooltips.RankInactivityTooltip('resId'),
                                            args: { rankInactivityCount: a },
                                        },
                                        r().createElement(
                                            'div',
                                            { className: _s },
                                            r().createElement('div', { className: gs }, a),
                                            r().createElement(
                                                'div',
                                                { className: Es },
                                                r().createElement('div', { className: ps }),
                                            ),
                                        ),
                                    ),
                            ),
                            r().createElement('div', { className: hs }, R.strings.comp7.ratingScore.title()),
                        ),
                    fs = 'ItemFooter_base_0f',
                    bs = 'ItemFooter_background_bf',
                    Cs = 'ItemFooter_divider_bb',
                    As = 'ItemFooter_light_79',
                    Ds = 'ItemFooter_footer_e7',
                    Fs = 'ItemFooter_rankItemFooter_e6',
                    ws = (0, ee.Pi)(({ className: e }) => {
                        const t = ls().model,
                            a = t.root.get(),
                            n = a.currentScore,
                            s = a.rankInactivityCount;
                        return r().createElement(
                            'div',
                            { className: b()(fs, e) },
                            r().createElement('div', { className: bs }),
                            r().createElement('div', { className: Cs }),
                            r().createElement('div', { className: As }),
                            r().createElement(
                                'div',
                                { className: Ds },
                                r().createElement(vs, {
                                    currentScore: n,
                                    hasRankInactivity: t.computes.hasCurrentItemRankInactivity(),
                                    rankInactivityCount: s,
                                    className: Fs,
                                }),
                            ),
                        );
                    }),
                    Ss = [
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_5(),
                            speedX: -0.053,
                            speedY: -0.01,
                        },
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_4(),
                            speedX: -0.037,
                            speedY: -0.0055,
                        },
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_3(),
                            speedX: -0.025,
                            speedY: -0.0016,
                        },
                        { path: R.images.gui.maps.icons.comp7.qualificationParallax.c_2(), speedX: 0, speedY: 0 },
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_1(),
                            speedX: 0.015,
                            speedY: 0.002,
                        },
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_1_1(),
                            speedX: 0.015,
                            speedY: 0.002,
                        },
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_0(),
                            speedX: 0.03,
                            speedY: 0.014,
                        },
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_0_1(),
                            speedX: 0.03,
                            speedY: 0.014,
                        },
                    ],
                    Bs = 'Parallax_base_c9',
                    ys = 'Parallax_layer_15',
                    ks = 'Parallax_shadow_45',
                    Ps = [
                        R.images.gui.maps.icons.comp7.qualificationParallax.c_1_1(),
                        R.images.gui.maps.icons.comp7.qualificationParallax.c_0_1(),
                    ],
                    Ns = Ss.reduce((e, t) => {
                        const a = Math.abs(t.speedX);
                        return a > e ? a : e;
                    }, 0),
                    Rs = (0, ee.Pi)(({ className: e }) => {
                        const t = ls().model,
                            a = S().remScreenWidth,
                            s = (0, n.createRef)(),
                            i = Ns * a,
                            u = (0, xe.useSpring)({
                                to: { opacity: t.isRewardLayerVisible.get() ? 1 : 0 },
                                config: { duration: 300 },
                            }),
                            l = ((e) => {
                                const t = (0, n.useCallback)(
                                        (t) => {
                                            if (!e.current) return;
                                            const a = e.current.getBoundingClientRect(),
                                                n = a.width,
                                                r = a.height;
                                            return (
                                                0 !== t.clientX &&
                                                0 !== t.clientY &&
                                                t.clientX <= n - 2 &&
                                                t.clientY <= r - 2
                                            );
                                        },
                                        [e],
                                    ),
                                    a = (0, xe.useSpring)(
                                        () => Object.assign({}, o.O.client.getMouseGlobalPosition('px')),
                                        [],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = (e) => {
                                            t(e) && a[1].start({ x: e.clientX, y: e.clientY });
                                        };
                                        return (
                                            document.addEventListener('mousemove', e),
                                            () => {
                                                document.removeEventListener('mousemove', e);
                                            }
                                        );
                                    }, [t, a]),
                                    a
                                );
                            })(s),
                            c = l[0];
                        return r().createElement(
                            'div',
                            { ref: s, className: b()(Bs, e) },
                            Ss.map((e, t) =>
                                r().createElement(
                                    xe.animated.div,
                                    {
                                        key: t,
                                        className: ys,
                                        style: Object.assign(
                                            {
                                                width: `${a + 2 * i}rem`,
                                                left: -i + 'rem',
                                                x: c.x.to((t) => t * e.speedX),
                                                y: c.y.to((t) => t * e.speedY),
                                                backgroundImage: `url(${e.path})`,
                                            },
                                            Ps.includes(e.path) && u,
                                        ),
                                    },
                                    3 === t && r().createElement(xe.animated.div, { className: ks, style: u }),
                                ),
                            ),
                        );
                    }),
                    xs = 'ParallaxContainer_base_17',
                    Is = Ss.map((e) => e.path),
                    Ts = (0, ee.Pi)(({ className: e }) => {
                        const t = ls(),
                            a = t.model,
                            s = t.controls,
                            o = a.isParallaxPreloaded.get(),
                            i = (0, xe.useSpring)({ to: { opacity: o ? 1 : 0 }, config: { duration: 300 } });
                        return (
                            'success' ===
                                ((e) => {
                                    const t = (0, n.useState)('pending'),
                                        a = t[0],
                                        r = t[1];
                                    return (
                                        (0, n.useLayoutEffect)(() => {
                                            let t = 0,
                                                a = 0;
                                            const n = () => {
                                                t + a === e.length && r(0 === t ? 'success' : 'error');
                                            };
                                            e.forEach((e) => {
                                                const r = new Image();
                                                (r.src = e),
                                                    r.addEventListener('load', () => {
                                                        a++, n();
                                                    }),
                                                    r.addEventListener('error', () => {
                                                        t++, n();
                                                    });
                                            });
                                        }, [e]),
                                        a
                                    );
                                })(Is) && s.setIsParallaxPreloaded(!0),
                            r().createElement(
                                xe.animated.div,
                                { className: b()(xs, e), style: i },
                                r().createElement(Rs, null),
                            )
                        );
                    });
                function Ls(e, t) {
                    (0, n.useEffect)(
                        () => (window.addEventListener('resize', e), () => window.removeEventListener('resize', e)),
                        t,
                    );
                }
                const Os = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    Ms = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
                function $s() {
                    const e = (0, n.useRef)(0);
                    return (
                        Ms(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
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
                const Ws = { type: 'idle' };
                function Hs(e, t) {
                    const a = e.contentRef,
                        r = e.wrapperRef,
                        s = e.scrollPosition,
                        i = e.clampPosition,
                        u = e.animationScroll,
                        l = e.events,
                        c = (0, n.useState)(Ws),
                        d = c[0],
                        m = c[1],
                        _ = $s(),
                        g = Tt(() => {
                            _.run(() => {
                                const t = e.contentRef.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                t &&
                                    a &&
                                    n &&
                                    (t.style.cursor =
                                        n <= a
                                            ? 'auto'
                                            : 'dragging' === d.type || 'moseDown' === d.type
                                              ? 'move'
                                              : 'grab');
                            });
                        });
                    return (
                        (0, n.useEffect)(() => {
                            g();
                        }, [d.type, g]),
                        Ls(() => {
                            g();
                        }, []),
                        (0, n.useEffect)(() => {
                            if ('dragging' !== d.type && 'moseDown' !== d.type) return;
                            const e = o.O.client.events.mouse.move(([e, n]) => {
                                const o = a.current,
                                    l = r.current;
                                if (!o || !l) return;
                                if ('inside' === n && e.clientX < 0) return;
                                if (e.clientX === d.positionFrom) return;
                                const c = 'inside' === n ? e.clientX : e.clientX - l.offsetLeft,
                                    _ = d.positionFrom - c,
                                    g = d.previousScrollPosition + _;
                                s.start(
                                    Object.assign(
                                        { scrollPosition: i(o, g), from: { scrollPosition: u.scrollPosition.get() } },
                                        t && { config: t },
                                    ),
                                ),
                                    'moseDown' === d.type &&
                                        m({
                                            type: 'dragging',
                                            positionFrom: e.screenX,
                                            previousScrollPosition: u.scrollPosition.get(),
                                        });
                            });
                            const n = o.O.client.events.mouse.up(function () {
                                m({ type: 'dragging' === d.type ? 'scrollingToEnd' : 'idle' });
                            });
                            return () => {
                                e(), n();
                            };
                        }, [u.scrollPosition, i, a, d, s, r, t]),
                        (0, n.useEffect)(() => {
                            if ('scrollingToEnd' !== d.type) return;
                            const e = () => {
                                m(Ws);
                            };
                            return u.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e);
                        }, [u.scrollPosition, d.type, l]),
                        (0, n.useEffect)(() => {
                            const e = a.current;
                            if (!e) return;
                            const t = (e) => {
                                u.scrollPosition.isAnimating && u.scrollPosition.stop(),
                                    m({
                                        type: 'moseDown',
                                        positionFrom: e.screenX,
                                        previousScrollPosition: u.scrollPosition.get(),
                                    });
                            };
                            return e.addEventListener('mousedown', t), () => e.removeEventListener('mousedown', t);
                        }, [u.scrollPosition, a]),
                        d
                    );
                }
                const Us = (e, t = 100) => ((o.O.view.pxToRem(o.O.client.getSize('px').width) * t) / 100 - e) / 2,
                    zs = $t({
                        getBounds: (e) => {
                            var t, a;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ot.Next : Ot.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Vs = 'HorizontalBar_base_49',
                    Gs = 'HorizontalBar_base__nonActive_82',
                    qs = 'HorizontalBar_leftButton_5f',
                    js = 'HorizontalBar_rightButton_03',
                    Qs = 'HorizontalBar_track_0d',
                    Ys = 'HorizontalBar_thumb_fd',
                    Xs = 'HorizontalBar_rail_32',
                    Ks = 'disable',
                    Zs = { pending: !1, offset: 0 },
                    Js = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    eo = () => {},
                    to = (e, t) => Math.max(20, e.offsetWidth * t),
                    ao = (0, n.memo)(
                        ({
                            api: e,
                            classNames: t = {},
                            getStepByRailClick: a = Js,
                            onDrag: s = eo,
                            onClick: i = eo,
                        }) => {
                            const u = (0, n.useRef)(null),
                                l = (0, n.useRef)(null),
                                c = (0, n.useRef)(null),
                                d = (0, n.useRef)(null),
                                m = (0, n.useRef)(null),
                                _ = e.stepTimeout || 100,
                                g = (0, n.useState)(Zs),
                                E = g[0],
                                p = g[1],
                                h = (0, n.useCallback)(
                                    (e) => {
                                        p(e),
                                            m.current &&
                                                s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                    },
                                    [s],
                                ),
                                v = () => {
                                    const t = d.current,
                                        a = m.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(n && t && a && r)) return;
                                    const s = e.animationScroll.scrollPosition.get(),
                                        o = Math.min(1, n / r),
                                        i = Pt(0, 1, s / (r - n)),
                                        u = (t.offsetWidth - to(t, o)) * i;
                                    (a.style.transform = `translateX(${0 | u}px)`),
                                        ((e) => {
                                            if (l.current && c.current && d.current && m.current) {
                                                if (0 === e)
                                                    return (
                                                        l.current.classList.add(Ks), void c.current.classList.remove(Ks)
                                                    );
                                                if (
                                                    ((t = d.current),
                                                    (a = m.current),
                                                    e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                                )
                                                    return (
                                                        l.current.classList.remove(Ks), void c.current.classList.add(Ks)
                                                    );
                                                var t, a;
                                                l.current.classList.remove(Ks), c.current.classList.remove(Ks);
                                            }
                                        })(u);
                                },
                                f = Tt(() => {
                                    (() => {
                                        const t = m.current,
                                            a = d.current,
                                            n = e.getWrapperSize(),
                                            r = e.getContainerSize();
                                        if (!(r && t && n && a)) return;
                                        const s = Math.min(1, n / r);
                                        (t.style.width = `${to(a, s)}px`),
                                            (t.style.display = 'flex'),
                                            u.current &&
                                                (1 === s
                                                    ? u.current.classList.add(Gs)
                                                    : u.current.classList.remove(Gs));
                                    })(),
                                        v();
                                });
                            (0, n.useEffect)(() => Re(f)),
                                (0, n.useEffect)(
                                    () =>
                                        Re(() => {
                                            const t = () => {
                                                v();
                                            };
                                            let a = eo;
                                            const n = () => {
                                                a(), (a = Re(f));
                                            };
                                            return (
                                                e.events.on('recalculateContent', f),
                                                e.events.on('rest', t),
                                                e.events.on('change', t),
                                                e.events.on('resizeHandled', n),
                                                () => {
                                                    a(),
                                                        e.events.off('recalculateContent', f),
                                                        e.events.off('rest', t),
                                                        e.events.off('change', t),
                                                        e.events.off('resizeHandled', n);
                                                }
                                            );
                                        }),
                                    [e],
                                ),
                                (0, n.useEffect)(() => {
                                    if (!E.pending) return;
                                    const t = o.O.client.events.mouse.move(([t, a]) => {
                                            var n;
                                            const r = e.contentRef.current,
                                                o = e.wrapperRef.current;
                                            if (!r || !o) return;
                                            const i = d.current,
                                                u = m.current;
                                            if (!i || !u) return;
                                            if ('inside' === a && t.clientX < 0) return;
                                            const l = t.clientX - E.offset - i.getBoundingClientRect().x,
                                                c = (l / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(r, c),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                            }),
                                                s({ type: 'dragging', thumb: u, thumbOffset: l, contentOffset: c });
                                        }),
                                        a = o.O.client.events.mouse.up(() => {
                                            t(), h(Zs);
                                        });
                                    return () => {
                                        t(), a();
                                    };
                                }, [e, E.offset, E.pending, s, h]);
                            const C = jt(
                                    (t) => {
                                        e.applyStepTo(t), i(t);
                                    },
                                    _,
                                    [e],
                                ),
                                A = C[0],
                                D = C[1];
                            (0, n.useEffect)(
                                () => (
                                    document.addEventListener('mouseup', D, !0),
                                    () => document.removeEventListener('mouseup', D, !0)
                                ),
                                [D],
                            );
                            const F = (e) => {
                                e.target.classList.contains(Ks) || Q('highlight');
                            };
                            return r().createElement(
                                'div',
                                { className: b()(Vs, t.base), ref: u, onWheel: e.handleMouseWheel },
                                r().createElement('div', {
                                    className: b()(qs, t.leftButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(Ks) || 0 !== e.button || (Q('play'), A(Ot.Next));
                                    },
                                    onMouseUp: D,
                                    ref: l,
                                    onMouseEnter: F,
                                }),
                                r().createElement(
                                    'div',
                                    {
                                        className: b()(Qs, t.track),
                                        onMouseDown: (t) => {
                                            const n = m.current;
                                            if (n && 0 === t.button)
                                                if ((Q('play'), t.target === n))
                                                    h({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                                else {
                                                    ((t) => {
                                                        const n = m.current,
                                                            r = e.contentRef.current;
                                                        if (!n || !r) return;
                                                        const s = a(e);
                                                        e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                    })(t.screenX > n.getBoundingClientRect().x ? Ot.Prev : Ot.Next);
                                                }
                                        },
                                        ref: d,
                                        onMouseEnter: F,
                                    },
                                    r().createElement('div', { ref: m, className: b()(Ys, t.thumb) }),
                                    r().createElement('div', { className: b()(Xs, t.rail) }),
                                ),
                                r().createElement('div', {
                                    className: b()(js, t.rightButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(Ks) || 0 !== e.button || (Q('play'), A(Ot.Prev));
                                    },
                                    onMouseUp: D,
                                    ref: c,
                                    onMouseEnter: F,
                                }),
                            );
                        },
                    ),
                    no = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ro = ({ api: e, className: t, classNames: a, children: s }) => (
                        (0, n.useEffect)(() => Re(e.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: b()(no.base, t) },
                            r().createElement(
                                'div',
                                {
                                    className: b()(no.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                r().createElement(
                                    'div',
                                    { className: b()(no.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    s,
                                ),
                            ),
                        )
                    );
                (ro.Bar = ao),
                    (ro.Default = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: s,
                        areaClassName: o,
                        classNames: i,
                        scrollClassName: u,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, n.useMemo)(() => {
                                const e = s || {};
                                return Object.assign({}, e, { base: b()(no.base, e.base) });
                            }, [s]),
                            m = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return r().createElement(
                            'div',
                            { className: b()(no.defaultScroll, a), onWheel: t.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: b()(no.defaultScrollArea, o) },
                                r().createElement(ro, { className: u, api: m, classNames: i }, e),
                            ),
                            r().createElement(ao, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    });
                const so = 'ProgressionScroll_base_0f',
                    oo = 'ProgressionScroll_areaWrapper_dc',
                    io = 'ProgressionScroll_areaContent_2f',
                    uo = ({
                        api: e,
                        stuckIndex: t,
                        itemWidth: a,
                        itemsOffset: s = 0,
                        children: i,
                        onStick: u,
                        className: l,
                        areaClassNames: c,
                        barClassNames: d,
                        staticContent: m,
                    }) => {
                        const _ = o.O.view.remToPx(a),
                            g = e.animationScroll,
                            E = e.events,
                            p = e.applyScroll,
                            h = Hs(e),
                            v = (0, n.useCallback)(
                                (e) => {
                                    p(t * _, e);
                                },
                                [p, _, t],
                            ),
                            f = (0, n.useCallback)(
                                () => (null == u ? void 0 : u(Math.round(g.scrollPosition.goal / _))),
                                [u, g.scrollPosition, _],
                            ),
                            C = (0, n.useCallback)(() => {
                                ('scrollingToEnd' !== h.type && 'idle' !== h.type) || f();
                            }, [f, h]);
                        (0, n.useEffect)(() => (E.on('rest', C), () => E.off('rest', C)), [E, C]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    f();
                                };
                                return E.on('mouseWheel', e), () => E.off('mouseWheel', e);
                            }, [E, f]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    v({ immediate: !0, reset: !0 });
                                };
                                return (
                                    E.on('resizeHandled', e),
                                    () => {
                                        E.off('resizeHandled', e);
                                    }
                                );
                            }, [v, E]),
                            (0, n.useEffect)(
                                () =>
                                    Re(() => {
                                        'idle' === h.type && v();
                                    }),
                                [h, v],
                            );
                        const A = (0, n.useCallback)(
                                (e) => {
                                    'dragEnd' === e.type && f();
                                },
                                [f],
                            ),
                            D = (0, n.useCallback)(() => {
                                f();
                            }, [f]);
                        return r().createElement(
                            'div',
                            { className: b()(so, l), style: { '--offset': `${s}rem` } },
                            r().createElement(
                                ro,
                                {
                                    api: e,
                                    className: null == c ? void 0 : c.base,
                                    classNames: {
                                        wrapper: b()(oo, null == c ? void 0 : c.wrapper),
                                        content: b()(io, null == c ? void 0 : c.content),
                                    },
                                },
                                i,
                            ),
                            m,
                            r().createElement(ao, { api: e, onDrag: A, onClick: D, classNames: d }),
                        );
                    },
                    lo = (e, t = 150, a) => {
                        const r = o.O.view.remToPx(e),
                            s = (0, n.useMemo)(
                                () => ({
                                    settings: {
                                        step: { type: 'fixed', value: r, clampedArrowStepTimeout: t },
                                        animationConfig: Object.assign({ frequency: 0.5 }, a),
                                    },
                                }),
                                [a, r, t],
                            );
                        return zs(s);
                    };
                var co = a(6112);
                const mo = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function _o() {
                    return (
                        (_o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        _o.apply(this, arguments)
                    );
                }
                const go = (0, n.forwardRef)(function (e, t) {
                        let a = e.src,
                            s = e.className,
                            i = e.autoplay,
                            u = void 0 !== i && i,
                            l = e.style,
                            c = e.loop,
                            d = void 0 !== c && c,
                            m = e.isPrebufferKeyframes,
                            _ = e.keyframesNameConfig,
                            g = e.onClick,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, mo);
                        const p = t,
                            h = (0, n.useRef)(null);
                        return (
                            Os(() =>
                                o.O.view.events.onDisplayChanged((e, t) => {
                                    var a, n;
                                    t === co.W.hidden && (null == (a = h.current) || a.pause());
                                    t === co.W.shown && (null == (n = h.current) || n.play());
                                }),
                            ),
                            (0, n.useEffect)(
                                () =>
                                    Re(() => {
                                        const e = h.current;
                                        if (!p || !e || !m)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [m, p],
                            ),
                            (0, n.useEffect)(() => {
                                if (p && h.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: M },
                                        t = () => {
                                            let t = 0;
                                            const a = (function (e) {
                                                    let t = 0;
                                                    return [
                                                        function a() {
                                                            e(), (t = requestAnimationFrame(a));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(t);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (h.current) {
                                                        const a = h.current,
                                                            n = a.currentTime,
                                                            r = a.duration;
                                                        if (
                                                            (t !== n &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: n, duration: r }),
                                                                ),
                                                                (t = n)),
                                                            h.current.paused || !p || !m)
                                                        )
                                                            return;
                                                        const s = h.current.cohGetKeyframeTimestamps();
                                                        s.forEach((t, a) => {
                                                            n > s[a] - 0.02 &&
                                                                n < s[a] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const n = Object.keys(null != _ ? _ : {})[a];
                                                                    return e({
                                                                        time: t,
                                                                        name: `${_ ? n : `Point_${a}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                n = a[0],
                                                r = a[1];
                                            return n(), r;
                                        };
                                    e.changeTimeLoop = t();
                                    const a = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const a = e.changeTimeHandlers,
                                                    n = a.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : a.splice(n, 1);
                                            }
                                        ),
                                        n = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const a = e.changeKeyframeHandlers,
                                                    n = a.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : a.splice(n, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e;
                                            return null == (e = h.current) ? void 0 : e.currentTime;
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = h.current) ? void 0 : e.duration;
                                        },
                                        o = (e) => {
                                            h.current && (h.current.currentTime = Pt(0, h.current.duration, e));
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = h.current) ? void 0 : e.play();
                                        },
                                        u = () => {
                                            var e;
                                            return null == (e = h.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            u(), o(0);
                                        },
                                        c = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = h.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            o(e), i();
                                        },
                                        g = (e) => {
                                            o(e), u();
                                        },
                                        E = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        v = (e, t) => {
                                            var a;
                                            return (
                                                null == (a = h.current) || a.addEventListener(e, t),
                                                () => {
                                                    var a;
                                                    return null == (a = h.current)
                                                        ? void 0
                                                        : a.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        f = (e, t) => {
                                            var a;
                                            return (
                                                null == (a = h.current) || a.removeEventListener(e, t),
                                                () => {
                                                    var a;
                                                    return null == (a = h.current)
                                                        ? void 0
                                                        : a.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (p.current = {
                                            on: v,
                                            off: f,
                                            play: i,
                                            pause: u,
                                            stop: l,
                                            cleanup: E,
                                            getCurrentTime: r,
                                            getDuration: s,
                                            getCachedKeyframes: c,
                                            goToAndPlay: d,
                                            goToAndStop: g,
                                            setCurrentTime: o,
                                            domRef: h.current,
                                            onChangeTime: a,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            E(), (p.current = null);
                                        }
                                    );
                                }
                            }, [_, p, m]),
                            (0, n.useEffect)(() => {
                                h.current && u && h.current.play();
                            }, [u, d]),
                            (0, n.useEffect)(() => {
                                if (h.current)
                                    return () => {
                                        h.current && h.current.pause();
                                    };
                            }, []),
                            r().createElement(
                                'video',
                                _o({ src: a, className: s, style: l, loop: d, ref: h, onClick: g }, E),
                            )
                        );
                    }),
                    Eo = (0, n.memo)(go),
                    po = 'DivineGlow_base_65',
                    ho = 'DivineGlow_glow_6d',
                    vo = 'DivineGlow_glow__bg_7c',
                    fo = ({ className: e, classNames: t, animated: a = !0 }) =>
                        r().createElement(
                            'div',
                            { className: b()(po, e) },
                            ((e) => !!o.O.client.graphicsQuality.isHigh() && e)(a)
                                ? r().createElement(Eo, {
                                      className: b()(ho, null == t ? void 0 : t.glow),
                                      src: String(R.videos.comp7.divine_glow()),
                                      autoplay: !0,
                                      loop: !0,
                                  })
                                : r().createElement('div', { className: b()(ho, vo, null == t ? void 0 : t.glow) }),
                        ),
                    bo = 'RankInfo_base_21',
                    Co = 'RankInfo_highlight_1f',
                    Ao = 'RankInfo_formattedText_26',
                    Do = ({ rank: e, from: t, topPercentage: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: b()(bo, n) },
                            r().createElement('div', { className: Co }),
                            r().createElement(mr, {
                                text: String(R.strings.comp7.rankInfo.current.$dyn(Na(e))),
                                binding: { topPercentage: a, fromScore: t },
                                classMix: Ao,
                            }),
                        ),
                    Fo = 'RankItemDivider_base_c4',
                    wo = () => r().createElement('div', { className: Fo }),
                    So = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Bo, yo;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Bo || (Bo = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(yo || (yo = {}));
                const ko = ({ size: e = Bo.Default }) => {
                        const t = b()(So.background, So[`background__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    Po = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    No = ({ size: e }) => {
                        const t = b()(Po.base, Po[`base__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    Ro = {
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
                    xo = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: a, baseStyles: n, isComplete: s, withoutBounce: o }) => {
                            const i = b()(
                                    Ro.base,
                                    Ro[`base__${e}`],
                                    a && Ro.base__disabled,
                                    s && Ro.base__finished,
                                    o && Ro.base__withoutBounce,
                                ),
                                u = !a && !s;
                            return r().createElement(
                                'div',
                                { className: i, style: n, ref: t },
                                r().createElement('div', { className: Ro.pattern }),
                                r().createElement('div', { className: Ro.gradient }),
                                u && r().createElement(No, { size: e }),
                            );
                        },
                    ),
                    Io = ({ size: e, value: t, lineRef: a, disabled: s, onComplete: o }) => {
                        const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            u = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                u && o && o();
                            }, [u, o]),
                            r().createElement(xo, { size: e, disabled: s, baseStyles: i, isComplete: u, lineRef: a })
                        );
                    },
                    To = (e, t) => {
                        let a;
                        const n = setTimeout(() => {
                            a = e();
                        }, t);
                        return () => {
                            'function' == typeof a && a(), clearTimeout(n);
                        };
                    };
                let Lo, Oo;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Lo || (Lo = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Oo || (Oo = {}));
                const Mo = 'ProgressBarDeltaSimple_base_6c',
                    $o = 'ProgressBarDeltaSimple_delta_99',
                    Wo = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: s,
                            size: o,
                            to: i,
                            onEndAnimation: u,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < s,
                                d = (0, n.useState)(Oo.Idle),
                                m = d[0],
                                _ = d[1],
                                g = m === Oo.In,
                                E = m === Oo.End,
                                p = m === Oo.Idle,
                                h = (0, n.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (p && !a) {
                                    return To(() => {
                                        h(Oo.In);
                                    }, t);
                                }
                            }, [h, a, p, t]),
                                (0, n.useEffect)(() => {
                                    if (g) {
                                        return To(() => {
                                            u && u(), h(Oo.End);
                                        }, e + t);
                                    }
                                }, [h, g, u, t, e]);
                            const v = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                b = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(s - i)}%`, left: `${c ? i : s}%` }),
                                    [s, c, i],
                                );
                            return E
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: Mo, style: b },
                                      r().createElement(
                                          'div',
                                          { style: p ? v : f, className: $o },
                                          r().createElement(No, { size: o }),
                                      ),
                                  );
                        },
                    ),
                    Ho = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: s,
                            disabled: o,
                            isComplete: i,
                            animationSettings: u,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${u.line.duration}ms`,
                                    transitionDelay: `${u.line.delay}ms`,
                                }),
                                [u.line.delay, u.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(xo, {
                                    size: t,
                                    lineRef: s,
                                    disabled: o,
                                    isComplete: i,
                                    baseStyles: d,
                                }),
                                a >= 0 &&
                                    r().createElement(Wo, {
                                        transitionDuration: u.delta.duration,
                                        transitionDelay: u.delta.delay,
                                        freezed: u.freezed,
                                        from: a,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Uo = 'ProgressBarDeltaGrow_base_7e',
                    zo = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Vo = 'ProgressBarDeltaGrow_glow_68',
                    Go = (e) => (e ? { left: 0 } : { right: 0 }),
                    qo = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    jo = (e) => ({ transitionDuration: `${e}ms` }),
                    Qo = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: s,
                            size: o,
                            to: i,
                            onEndAnimation: u,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = i < s,
                                m = (0, n.useState)(Lo.Idle),
                                _ = m[0],
                                g = m[1],
                                E = _ === Lo.End,
                                p = _ === Lo.Idle,
                                h = _ === Lo.Grow,
                                v = _ === Lo.Shrink,
                                f = (0, n.useCallback)(
                                    (e) => {
                                        g(e), l && l(e);
                                    },
                                    [l],
                                ),
                                C = (0, n.useCallback)(
                                    (e, t) =>
                                        To(() => {
                                            f(e);
                                        }, t),
                                    [f],
                                );
                            (0, n.useEffect)(() => {
                                if (!a)
                                    return p
                                        ? C(Lo.Grow, t)
                                        : h
                                          ? C(Lo.Shrink, e)
                                          : v
                                            ? C(Lo.End, e)
                                            : void (E && u && u());
                            }, [C, a, E, h, p, v, u, t, e]);
                            const A = (0, n.useMemo)(() => Object.assign({ width: '100%' }, jo(e), Go(d)), [d, e]),
                                D = (0, n.useMemo)(() => Object.assign({ width: '0%' }, jo(e), Go(d)), [d, e]),
                                F = (0, n.useMemo)(() => Object.assign({ width: '0%' }, qo(d, s), jo(e)), [s, d, e]),
                                w = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - s)}%` }, qo(d, s), jo(e)),
                                    [s, d, i, e],
                                );
                            if (E) return null;
                            const S = b()(Uo, c, d && 0 === i && zo);
                            return r().createElement(
                                'div',
                                { style: p ? F : w, className: S },
                                r().createElement(
                                    'div',
                                    { style: v ? D : A, className: Vo },
                                    r().createElement(No, { size: o }),
                                ),
                            );
                        },
                    ),
                    Yo = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: s,
                            disabled: o,
                            isComplete: i,
                            animationSettings: u,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < a,
                                m = (0, n.useState)(!1),
                                _ = m[0],
                                g = m[1],
                                E = (0, n.useCallback)(
                                    (e) => {
                                        e === Lo.Shrink && g(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                p = (0, n.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                                h = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${u.line.duration}ms` }),
                                    [u.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(xo, {
                                    size: t,
                                    lineRef: s,
                                    disabled: o,
                                    isComplete: i,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? h : p,
                                }),
                                a >= 0 &&
                                    r().createElement(Qo, {
                                        transitionDuration: u.delta.duration,
                                        transitionDelay: u.delta.delay,
                                        onChangeAnimationState: E,
                                        freezed: u.freezed,
                                        onEndAnimation: l,
                                        from: a,
                                        size: t,
                                        to: e,
                                        className: u.delta.className,
                                    }),
                            );
                        },
                    ),
                    Xo = ['onComplete', 'onEndAnimation'];
                function Ko() {
                    return (
                        (Ko =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ko.apply(this, arguments)
                    );
                }
                const Zo = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            a = e.onEndAnimation,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Xo);
                        const o = (0, n.useState)(!1),
                            i = o[0],
                            u = o[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === s.to;
                                e !== i && u(e), e && t && t(), a && a();
                            }, [i, t, a, s.to]);
                        switch (s.animationSettings.type) {
                            case yo.Simple:
                                return r().createElement(Ho, Ko({}, s, { onEndAnimation: l, isComplete: i }));
                            case yo.Growing:
                                return r().createElement(Yo, Ko({}, s, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    Jo = ['onEndAnimation'];
                function ei() {
                    return (
                        (ei =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ei.apply(this, arguments)
                    );
                }
                const ti = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, Jo);
                    const s = (0, n.useRef)({}),
                        o = (0, n.useCallback)(() => {
                            (s.current.from = void 0), t && t();
                        }, [t]),
                        i = 'number' == typeof s.current.from ? s.current.from : a.from;
                    return (
                        (s.current.from = i),
                        r().createElement(Zo, ei({}, a, { onEndAnimation: o, key: `${i}-${a.to}`, from: i }))
                    );
                });
                function ai() {
                    return (
                        (ai =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ai.apply(this, arguments)
                    );
                }
                const ni = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: a,
                            disabled: n,
                            deltaFrom: s,
                            animationSettings: o,
                            onEndAnimation: i,
                            onChangeAnimationState: u,
                            onComplete: l,
                        }) => {
                            if (s === t)
                                return r().createElement(Io, {
                                    key: `${s}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: a,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: s,
                                to: t,
                                size: e,
                                lineRef: a,
                                disabled: n,
                                animationSettings: o,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: u,
                            };
                            return o.withStack
                                ? r().createElement(ti, c)
                                : r().createElement(Zo, ai({ key: `${s}-${t}` }, c));
                        },
                    ),
                    ri = (e) => ({
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
                    si = (e, t, a) => {
                        if ('number' == typeof a) {
                            return (Pt(0, t, a) / t) * 100;
                        }
                        return e;
                    },
                    oi = {
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
                    ii = {
                        freezed: !1,
                        withStack: !1,
                        type: yo.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ui = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = oi,
                            size: a = Bo.Default,
                            animationSettings: s = ii,
                            disabled: o = !1,
                            withoutBackground: i = !1,
                            value: u,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: d,
                            onEndAnimation: m,
                            onComplete: _,
                        }) => {
                            const g = ((e, t, a) =>
                                (0, n.useMemo)(() => {
                                    const n = (Pt(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: si(n, t, a) };
                                }, [a, t, e]))(u, e, l);
                            return r().createElement(
                                'div',
                                { className: b()(So.base, So[`base__${a}`]), style: ri(t) },
                                !i && r().createElement(ko, { size: a }),
                                r().createElement(ni, {
                                    size: a,
                                    lineRef: c,
                                    disabled: o,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    animationSettings: s,
                                    onEndAnimation: m,
                                    onChangeAnimationState: d,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    li = ({ rank: e, division: t, from: a, to: n, className: s, children: o }) =>
                        r().createElement(
                            qe,
                            {
                                contentId: R.views.lobby.comp7.tooltips.DivisionTooltip('resId'),
                                args: { rank: e, division: t, from: a, to: n },
                            },
                            r().createElement('div', { className: s }, o),
                        ),
                    ci = 'RankProgressDivisions_base_54',
                    di = 'RankProgressDivisions_divisionItem_77',
                    mi = 'RankProgressDivisions_divisionItem__current_84',
                    _i = 'RankProgressDivisions_highlightContainer_53',
                    gi = 'RankProgressDivisions_radialBack_cc',
                    Ei = 'RankProgressDivisions_mainBack_38',
                    pi = 'RankProgressDivisions_bottomLine_67',
                    hi = 'RankProgressDivisions_bottomLine__first_bd',
                    vi = 'RankProgressDivisions_bottomLine__second_60',
                    fi = 'RankProgressDivisions_bottomLine__third_08',
                    bi = 'RankProgressDivisions_divisionText_ea',
                    Ci = 'RankProgressDivisions_note_e1',
                    Ai = (0, ee.Pi)(({ itemIndex: e, rank: t, from: a, step: n }) => {
                        const s = ls().model.computes.divisions(e);
                        return r().createElement(
                            'div',
                            { className: ci },
                            be(s, (e, s) => {
                                const o = e.state === ma.Current;
                                return r().createElement(
                                    li,
                                    {
                                        key: s,
                                        rank: t,
                                        division: e.name,
                                        from: a + n * s,
                                        to: a + n * (s + 1),
                                        className: b()(di, o && mi),
                                    },
                                    o &&
                                        r().createElement(
                                            'div',
                                            { className: _i },
                                            r().createElement('div', { className: gi }),
                                            r().createElement('div', { className: Ei }),
                                            r().createElement('div', { className: b()(pi, hi) }),
                                            r().createElement('div', { className: b()(pi, vi) }),
                                            r().createElement('div', { className: b()(pi, fi) }),
                                        ),
                                    r().createElement(
                                        'div',
                                        { className: bi },
                                        o &&
                                            r().createElement(
                                                'div',
                                                { className: Ci },
                                                R.strings.comp7.division.note(),
                                            ),
                                        Ba(e.name),
                                    ),
                                );
                            }),
                        );
                    }),
                    Di = {
                        '--pointLineWidth': '1rem',
                        base: 'RankProgressPoints_base_86',
                        point: 'RankProgressPoints_point_f9',
                        base__top: 'RankProgressPoints_base__top_78',
                        base__bottom: 'RankProgressPoints_base__bottom_fc',
                        pointLine: 'RankProgressPoints_pointLine_b3',
                        pointLine__extended: 'RankProgressPoints_pointLine__extended_6b',
                        pointValue: 'RankProgressPoints_pointValue_af',
                        pointValue__next: 'RankProgressPoints_pointValue__next_c5',
                    };
                let Fi;
                !(function (e) {
                    (e.Top = 'top'), (e.Bottom = 'bottom');
                })(Fi || (Fi = {}));
                const wi = (e, t) => {
                        const a = t > 0 ? (100 / t) * e + '%' : '0%';
                        return e === t ? { left: a, transform: `translateX(-${Di['--pointLineWidth']})` } : { left: a };
                    },
                    Si = ({ step: e, divisionsCount: t, from: a, currentDivisionIndex: n, direction: s = Fi.Bottom }) =>
                        r().createElement(
                            'div',
                            { className: b()(Di.base, Di[`base__${s}`]) },
                            ca(t + 1, (s) => {
                                const o = void 0 !== n && s === n + 1,
                                    i = void 0 === a && (s === n || o);
                                return r().createElement(
                                    'div',
                                    { className: Di.point, style: wi(s, t), key: s },
                                    r().createElement('div', {
                                        className: b()(Di.pointLine, i && Di.pointLine__extended),
                                    }),
                                    void 0 !== a &&
                                        r().createElement(
                                            'div',
                                            { className: b()(Di.pointValue, o && Di.pointValue__next) },
                                            a + e * s,
                                        ),
                                );
                            }),
                        ),
                    Bi = {
                        base: 'RankProgress_base_97',
                        base__hidden: 'RankProgress_base__hidden_b9',
                        base__inactive: 'RankProgress_base__inactive_49',
                        base__active: 'RankProgress_base__active_a2',
                        progressWrapper: 'RankProgress_progressWrapper_4e',
                    },
                    yi = {
                        freezed: !0,
                        withStack: !1,
                        type: yo.Simple,
                        delta: { duration: 0, delay: 0 },
                        line: { duration: 0, delay: 0 },
                    },
                    ki = (0, ee.Pi)(({ rank: e, state: t, itemIndex: a, from: n, to: s, progressState: o }) => {
                        const i = ls().model,
                            u = i.root.get().currentScore,
                            l = i.computes.divisionsConfig(a),
                            c = s - n,
                            d = ((e, t, a) => Math.round((t - e) / a))(n, s, l.count);
                        return r().createElement(
                            'div',
                            { className: b()(Bi.base, Bi[`base__${o}`]) },
                            r().createElement(Ai, { itemIndex: a, rank: e, from: n, step: d }),
                            r().createElement(Si, {
                                step: d,
                                divisionsCount: l.count,
                                direction: Fi.Top,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                            r().createElement(
                                'div',
                                { className: Bi.progressWrapper },
                                t === ss.Current
                                    ? r().createElement(ui, { maxValue: c, value: u - n, animationSettings: yi })
                                    : r().createElement(ui, { maxValue: c, value: u < n ? 0 : c, disabled: u < n }),
                            ),
                            r().createElement(Si, {
                                step: d,
                                divisionsCount: l.count,
                                from: n,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                        );
                    }),
                    Pi = 'RankStatusDescription_base_07',
                    Ni = ({ text: e, binding: t, className: a }) => {
                        const n = ((e) =>
                            'number' == typeof (null == e ? void 0 : e.pointsCount)
                                ? Object.assign({}, e, { pointsCount: r().createElement(Ht, { value: e.pointsCount }) })
                                : e)(t);
                        return r().createElement(mr, { text: e, binding: n, classMix: b()(Pi, a) });
                    },
                    Ri = 'AchievedRankStatus_base_70',
                    xi = R.strings.comp7.rankItemStatus.previous,
                    Ii = ({ rank: e, rankState: t, itemIndex: a, from: n, to: s, progressState: o }) => {
                        switch (e) {
                            case ka.First:
                            case ka.Second:
                            case ka.Third:
                            case ka.Fourth:
                                return r().createElement(ki, {
                                    rank: e,
                                    state: t,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: o,
                                });
                            case ka.Fifth:
                                return r().createElement(
                                    'div',
                                    { className: Ri },
                                    r().createElement(Ni, { text: Ma(xi.description, e), binding: { fromScore: n } }),
                                );
                            default:
                                return (
                                    console.warn(`Status for rank '${e}' was not mapped to any react component.`), null
                                );
                        }
                    },
                    Ti = 'LastUpdate_base_f7',
                    Li = 'LastUpdate_dataUpdate_90',
                    Oi = ({ timestamp: e, isLastBestUserPointsValueLoading: t = !1 }) =>
                        r().createElement(
                            'div',
                            { className: Ti },
                            t
                                ? r().createElement(ir, {
                                      text: R.strings.comp7.lastUpdateNote.lastBestUserPoints.update(),
                                      classMix: Li,
                                  })
                                : r().createElement(Pr, { timestamp: e }),
                        ),
                    Mi = (e, t) => e > 0 || t;
                let $i;
                !(function (e) {
                    (e.Active = 'active'), (e.Inactive = 'inactive'), (e.Hidden = 'hidden');
                })($i || ($i = {}));
                const Wi = 'CurrentRankStatus_base_d4',
                    Hi = R.strings.comp7.rankItemStatus.current,
                    Ui = ({
                        rank: e,
                        rankState: t,
                        itemIndex: a,
                        from: s,
                        to: o,
                        progressState: i,
                        topPercentage: u,
                        pointsCount: l,
                        isLastBestUserPointsValueLoading: c,
                        timestamp: d,
                    }) => {
                        const m = { topPercentage: u, pointsCount: l };
                        return (
                            (0, n.useEffect)(() => {
                                i === $i.Active && Q('comp_7_progression_rank_active');
                            }, [i]),
                            r().createElement(
                                'div',
                                { className: Wi },
                                (() => {
                                    switch (e) {
                                        case ka.First:
                                        case ka.Second:
                                        case ka.Third:
                                        case ka.Fourth:
                                            return r().createElement(ki, {
                                                rank: e,
                                                state: t,
                                                itemIndex: a,
                                                from: s,
                                                to: o,
                                                progressState: i,
                                            });
                                        case ka.Fifth:
                                        case ka.Sixth:
                                            return r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement(Ni, {
                                                    text: Mi(l, c)
                                                        ? Ma(Hi.extendedDescription, e)
                                                        : Ma(Hi.description, e),
                                                    binding: m,
                                                }),
                                                r().createElement(Oi, {
                                                    timestamp: d,
                                                    isLastBestUserPointsValueLoading: c,
                                                }),
                                            );
                                        default:
                                            return (
                                                console.warn(
                                                    `Status for rank '${e}' was not mapped to any react component.`,
                                                ),
                                                null
                                            );
                                    }
                                })(),
                            )
                        );
                    },
                    zi = 'FutureRankStatus_base_c2',
                    Vi = 'FutureRankStatus_lock_d0',
                    Gi = R.strings.comp7.rankItemStatus.future,
                    qi = [ka.Sixth],
                    ji = ({
                        rank: e,
                        topPercentage: t,
                        from: a,
                        to: s,
                        pointsCount: o,
                        isLastBestUserPointsValueLoading: i,
                        timestamp: u,
                    }) => {
                        const l = (0, n.useMemo)(
                                () =>
                                    e === ka.Sixth
                                        ? { topPercentage: t, pointsCount: o }
                                        : e === ka.Fifth
                                          ? { fromScore: a }
                                          : { fromScore: a, toScore: s },
                                [t, o, a, s, e],
                            ),
                            c = qi.includes(e) && Mi(o, i);
                        return r().createElement(
                            'div',
                            { className: zi },
                            r().createElement('div', { className: Vi }),
                            r().createElement(Ni, {
                                text: Ma(c ? Gi.extendedDescription : Gi.description, e),
                                binding: l,
                            }),
                            c && r().createElement(Oi, { timestamp: u, isLastBestUserPointsValueLoading: i }),
                        );
                    },
                    Qi = ({
                        rankState: e,
                        rank: t,
                        itemIndex: a,
                        from: n,
                        to: s,
                        progressState: o,
                        pointsCount: i,
                        isLastBestUserPointsValueLoading: u,
                        topPercentage: l,
                        timestamp: c,
                    }) => {
                        switch (e) {
                            case ss.Previous:
                                return r().createElement(Ii, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: o,
                                });
                            case ss.Current:
                                return r().createElement(Ui, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: o,
                                    pointsCount: i,
                                    isLastBestUserPointsValueLoading: u,
                                    topPercentage: l,
                                    timestamp: c,
                                });
                            case ss.Future:
                                return r().createElement(ji, {
                                    rank: t,
                                    topPercentage: l,
                                    from: n,
                                    to: s,
                                    pointsCount: i,
                                    isLastBestUserPointsValueLoading: u,
                                    timestamp: c,
                                });
                            default:
                                return console.error(`Unreachable code for state '${e}' in RankStatusResolver.`), null;
                        }
                    };
                let Yi;
                !(function (e) {
                    (e.Progress = 'progress'), (e.Text = 'text');
                })(Yi || (Yi = {}));
                const Xi = {
                        '--pageContentWidth': '78vw',
                        base: 'RankItem_base_60',
                        rankEmblemContainer: 'RankItem_rankEmblemContainer_07',
                        glowContainer: 'RankItem_glowContainer_15',
                        rankEmblemContainer__current: 'RankItem_rankEmblemContainer__current_d8',
                        glow: 'RankItem_glow_1b',
                        rankEmblemContainer__future: 'RankItem_rankEmblemContainer__future_d2',
                        rankEmblem: 'RankItem_rankEmblem_e6',
                        rankDescription: 'RankItem_rankDescription_32',
                        fadeOut: 'RankItem_fadeOut_56',
                        rankDescription__text: 'RankItem_rankDescription__text_90',
                        rankDescription__progress: 'RankItem_rankDescription__progress_e2',
                        rankDescription__viewed: 'RankItem_rankDescription__viewed_6b',
                        fadeIn: 'RankItem_fadeIn_95',
                        rankInfo: 'RankItem_rankInfo_6f',
                        dividerContainer: 'RankItem_dividerContainer_0f',
                        fadeInThreeQuarters: 'RankItem_fadeInThreeQuarters_f1',
                        fadeInHalf: 'RankItem_fadeInHalf_8a',
                        fadeInWithScale: 'RankItem_fadeInWithScale_68',
                        slideUp: 'RankItem_slideUp_74',
                        scale: 'RankItem_scale_6b',
                        raysAppearance: 'RankItem_raysAppearance_a8',
                        rotate: 'RankItem_rotate_da',
                        'reverse-rotate': 'RankItem_reverse-rotate_3e',
                        glowAppearance: 'RankItem_glowAppearance_90',
                        highlightAppearance: 'RankItem_highlightAppearance_5c',
                        blink: 'RankItem_blink_7e',
                        slideUpIn: 'RankItem_slideUpIn_ee',
                    },
                    Ki = (0, ee.Pi)(({ itemIndex: e, isViewed: t, hasDivider: a = !0 }) => {
                        const n = ls().model,
                            s = j().model,
                            o = n.root.get(),
                            i = o.topPercentage,
                            u = o.lastBestUserPointsValue,
                            l = o.leaderboardUpdateTimestamp,
                            c = o.isLastBestUserPointsValueLoading,
                            d = S().mediaSize,
                            m = n.computes.item(e),
                            _ = m.rank,
                            g = m.from,
                            E = m.to,
                            p = n.computes.divisionsConfig(e),
                            h = n.computes.rankSettings(e),
                            v = h.state,
                            f = h.division,
                            C = h.hasInfo,
                            A = ((e) => {
                                switch (!0) {
                                    case e >= D.ExtraLarge:
                                        return Ia.x420;
                                    case e >= D.Large:
                                        return Ia.x320;
                                    case e >= D.Medium:
                                        return Ia.x260;
                                    default:
                                        return Ia.x200;
                                }
                            })(d),
                            F = ((e, t) => (t ? (e === ss.Current ? $i.Active : $i.Inactive) : $i.Hidden))(v, t),
                            w = ((e, t) => {
                                const a = xa(t);
                                switch (e) {
                                    case ss.Previous:
                                    case ss.Current:
                                        return a ? Yi.Progress : Yi.Text;
                                    default:
                                        return Yi.Text;
                                }
                            })(v, _);
                        return r().createElement(
                            'div',
                            { className: Xi.base },
                            r().createElement(
                                Kn,
                                {
                                    rank: _,
                                    from: g,
                                    to: E,
                                    topPercentage: i,
                                    divisions: p.list,
                                    className: b()(Xi.rankEmblemContainer, Xi[`rankEmblemContainer__${v}`]),
                                },
                                r().createElement(fo, { className: Xi.glowContainer, classNames: { glow: Xi.glow } }),
                                r().createElement(La, {
                                    seasonName: s.season.name.get(),
                                    size: A,
                                    rank: _,
                                    division: f,
                                    className: Xi.rankEmblem,
                                }),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        Xi.rankDescription,
                                        Xi[`rankDescription__${w}`],
                                        t && Xi.rankDescription__viewed,
                                    ),
                                },
                                C &&
                                    r().createElement(
                                        'div',
                                        { className: Xi.rankInfo },
                                        r().createElement(Do, { rank: _, from: g, topPercentage: i }),
                                    ),
                                r().createElement(Qi, {
                                    rankState: v,
                                    rank: _,
                                    itemIndex: e,
                                    from: g,
                                    to: E,
                                    progressState: F,
                                    pointsCount: u,
                                    isLastBestUserPointsValueLoading: c,
                                    topPercentage: i,
                                    timestamp: l,
                                }),
                            ),
                            a &&
                                r().createElement(
                                    'div',
                                    { className: Xi.dividerContainer, style: { '--emblemSize': `${A}rem` } },
                                    r().createElement(wo, null),
                                ),
                        );
                    }),
                    Zi = 'RankItemContainer_base_b3',
                    Ji = 'RankItemContainer_title_d5',
                    eu = 'RankItemContainer_title__active_f0',
                    tu = (0, ee.Pi)(({ itemIndex: e, itemWidth: t, isViewed: a, onMouseDown: n, hasDivider: s }) => {
                        const o = ls().model.computes.item(e);
                        return r().createElement(
                            'div',
                            { className: Zi, style: { '--itemWidth': `${t}rem` }, onMouseDown: n },
                            r().createElement('div', { className: b()(Ji, a && eu) }, Wa(o.rank)),
                            r().createElement(Ki, { itemIndex: e, isViewed: a, hasDivider: s }),
                        );
                    }),
                    au = 'Progression_base_97',
                    nu = {
                        base: 'Progression_areaContainer_09',
                        wrapper: 'Progression_areaWrapper_5f',
                        content: 'Progression_areaContent_fd',
                    },
                    ru = { base: 'Progression_bar_4d' },
                    su = (0, ee.Pi)(({ staticContent: e, className: t }) => {
                        const a = ls().model,
                            s = a.root.get().currentItemIndex,
                            i = a.computes.itemsLength(),
                            u = ((e) => (e >= D.ExtraLarge ? 640 : e >= D.Large ? 500 : e >= D.Medium ? 440 : 400))(
                                S().mediaSize,
                            ),
                            l = Us(u),
                            c = lo(u),
                            d = (0, n.useState)(s),
                            m = d[0],
                            _ = d[1],
                            g = (0, n.useCallback)(
                                (e) => () => {
                                    Y.playClick(), _(e);
                                },
                                [],
                            );
                        return (
                            (0, n.useLayoutEffect)(() => {
                                c.scrollPosition.start({ scrollPosition: o.O.view.remToPx(s * u), immediate: !0 });
                            }, []),
                            (0, n.useLayoutEffect)(() => {
                                _(s);
                            }, [s]),
                            r().createElement(
                                uo,
                                {
                                    api: c,
                                    stuckIndex: m,
                                    itemWidth: u,
                                    itemsOffset: l,
                                    staticContent: e,
                                    onStick: _,
                                    className: b()(au, t),
                                    areaClassNames: nu,
                                    barClassNames: ru,
                                },
                                ca(i, (e) =>
                                    r().createElement(tu, {
                                        key: e,
                                        itemIndex: e,
                                        isViewed: m === e,
                                        hasDivider: e < i - 1,
                                        itemWidth: u,
                                        onMouseDown: g(e),
                                    }),
                                ),
                            )
                        );
                    }),
                    ou = R.strings.comp7.qualification,
                    iu = { hasHtmlContent: !0 },
                    uu = ({ maxBattlesCount: e, children: t }) =>
                        r().createElement(
                            Xe,
                            {
                                header: ou.conditionTooltip.header(),
                                body: pa(ou.conditionTooltip.body(e), { maxBattlesCount: e }),
                                args: iu,
                            },
                            r().createElement('div', null, t),
                        ),
                    lu = ({ size: e, seasonName: t, className: a }) => {
                        const n = R.images.gui.maps.icons.comp7.ranks.$dyn(t).$num(e);
                        return r().createElement('div', {
                            className: b()(Ta, a),
                            style: { backgroundImage: `url(${n.$dyn('qualification')})`, '--imageSize': `${e}rem` },
                        });
                    },
                    cu = 'BattlesCounter_base_f1',
                    du = 'BattlesCounter_battlesCount_ef',
                    mu = ({ battlesCount: e, maxBattlesCount: t, className: a }) =>
                        r().createElement(ir, {
                            text: R.strings.comp7.qualification.counter(),
                            binding: {
                                battlesCount: r().createElement('div', { className: du }, e),
                                maxBattlesCount: t,
                            },
                            classMix: b()(cu, a),
                        }),
                    _u = {
                        '--pageContentWidth': '78vw',
                        base: 'QualificationBattleItem_base_0d',
                        base__size_234: 'QualificationBattleItem_base__size_234_ab',
                        battleBackground: 'QualificationBattleItem_battleBackground_67',
                        base__inProgress: 'QualificationBattleItem_base__inProgress_2a',
                        blink: 'QualificationBattleItem_blink_3b',
                        fadeIn: 'QualificationBattleItem_fadeIn_c9',
                        fadeInThreeQuarters: 'QualificationBattleItem_fadeInThreeQuarters_20',
                        fadeInHalf: 'QualificationBattleItem_fadeInHalf_89',
                        fadeOut: 'QualificationBattleItem_fadeOut_c3',
                        fadeInWithScale: 'QualificationBattleItem_fadeInWithScale_4f',
                        slideUp: 'QualificationBattleItem_slideUp_1f',
                        scale: 'QualificationBattleItem_scale_37',
                        raysAppearance: 'QualificationBattleItem_raysAppearance_8f',
                        rotate: 'QualificationBattleItem_rotate_2d',
                        'reverse-rotate': 'QualificationBattleItem_reverse-rotate_9d',
                        glowAppearance: 'QualificationBattleItem_glowAppearance_56',
                        highlightAppearance: 'QualificationBattleItem_highlightAppearance_a0',
                        slideUpIn: 'QualificationBattleItem_slideUpIn_be',
                    },
                    gu = { notPlayed: 'notFinished', inProgress: 'notFinished', victory: 'victory', defeat: 'defeat' },
                    Eu = { x173: 173, x234: 234 },
                    pu = ({ className: e, state: t, size: a = 'x173' }) => {
                        const n = Eu[a],
                            s = R.images.gui.maps.icons.comp7.icons.$dyn(`battle_${gu[t]}`);
                        return r().createElement(
                            'div',
                            { className: b()(_u.base, e, _u[`base__${t}`], _u[`base__size_${n}`]) },
                            r().createElement('div', {
                                className: _u.battleBackground,
                                style: { backgroundImage: `url(${s})`, '--imageSize': `${n}rem` },
                            }),
                        );
                    },
                    hu = (0, ee.Pi)(({ index: e, className: t }) => {
                        const a = ls().model,
                            n = S().mediaSize,
                            s = a.computes.qualificationBattle(e);
                        return r().createElement(pu, {
                            state: s.state,
                            className: t,
                            key: e,
                            size: n >= D.ExtraLarge ? 'x234' : 'x173',
                        });
                    }),
                    vu = 'BattlesProgression_base_a1',
                    fu = 'BattlesProgression_item_73',
                    bu = (0, ee.Pi)(({ className: e }) => {
                        const t = ls().model;
                        return r().createElement(
                            'div',
                            { className: b()(vu, e) },
                            ca(t.computes.qualificationBattlesLength(), (e) =>
                                r().createElement(hu, { index: e, className: fu, key: e }),
                            ),
                        );
                    }),
                    Cu = (e) => {
                        switch (!0) {
                            case e >= D.ExtraLarge:
                                return Ia.x600;
                            case e >= D.Large:
                                return Ia.x420;
                            case e >= D.Medium:
                                return Ia.x260;
                            default:
                                return Ia.x200;
                        }
                    },
                    Au = 'Qualification_base_0f',
                    Du = 'Qualification_content_64',
                    Fu = 'Qualification_footer_8f',
                    wu = 'Qualification_qualificationEmblemContainer_47',
                    Su = 'Qualification_glowContainer_d3',
                    Bu = 'Qualification_glow_7c',
                    yu = 'Qualification_qualificationEmblem_e2',
                    ku = 'Qualification_battlesProgression_51',
                    Pu = 'Qualification_counterDescription_20',
                    Nu = 'Qualification_ratingCalculationDescription_7a',
                    Ru = 'Qualification_timerIcon_35',
                    xu = 'Qualification_conditionContainer_c4',
                    Iu = 'Qualification_condition_23',
                    Tu = 'Qualification_rewardsDescription_c2',
                    Lu = 'Qualification_infoIcon_fe',
                    Ou = 'Qualification_rewardsButton_db',
                    Mu = 'Qualification_buttonIcon_39',
                    $u = 'Qualification_waiting_de',
                    Wu = R.strings.comp7.qualification,
                    Hu = { base: Ou, icon: Mu },
                    Uu = (0, ee.Pi)(({ className: e }) => {
                        const t = ls(),
                            a = t.model,
                            n = t.controls,
                            s = j().model,
                            o = S().mediaSize,
                            i = a.qualificationModel.battlesCount.get(),
                            u = a.qualificationModel.maxBattlesCount.get(),
                            l = a.qualificationModel.isRatingCalculation.get(),
                            c = a.isParallaxPreloaded.get(),
                            d = (0, xe.useSpring)({
                                from: { opacity: 0 },
                                to: ue() ? { opacity: c ? 1 : 0 } : { opacity: 1 },
                                delay: 300,
                                config: { duration: 300 },
                            });
                        return ue() && !c
                            ? r().createElement('div', { className: $u }, r().createElement(rt, null))
                            : r().createElement(
                                  xe.animated.div,
                                  { style: d, className: b()(Au, e) },
                                  r().createElement(
                                      'div',
                                      { className: Du },
                                      r().createElement(
                                          'div',
                                          { className: wu },
                                          r().createElement(fo, { className: Su, classNames: { glow: Bu } }),
                                          r().createElement(lu, {
                                              size: Cu(o),
                                              seasonName: s.season.name.get(),
                                              className: yu,
                                          }),
                                      ),
                                      l
                                          ? r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement(mu, { battlesCount: i, maxBattlesCount: u }),
                                                r().createElement(
                                                    Xe,
                                                    { body: R.strings.comp7.qualification.ratingCalculationTooltip() },
                                                    r().createElement(
                                                        'div',
                                                        null,
                                                        r().createElement(ir, {
                                                            text: Wu.ratingCalculationDescription(),
                                                            binding: {
                                                                timerIcon: r().createElement('div', { className: Ru }),
                                                            },
                                                            classMix: Nu,
                                                        }),
                                                    ),
                                                ),
                                            )
                                          : r().createElement(mr, {
                                                text: Wu.counterWithDescription(),
                                                classMix: Pu,
                                                binding: {
                                                    counter: r().createElement(mu, {
                                                        battlesCount: i,
                                                        maxBattlesCount: u,
                                                    }),
                                                },
                                            }),
                                      r().createElement(bu, { className: ku }),
                                  ),
                                  r().createElement(
                                      'div',
                                      { className: Fu },
                                      r().createElement(
                                          'div',
                                          { className: xu },
                                          r().createElement(mr, {
                                              text: Wu.condition(u),
                                              classMix: Iu,
                                              binding: { maxBattlesCount: u },
                                          }),
                                          r().createElement(
                                              uu,
                                              { maxBattlesCount: u },
                                              r().createElement('div', { className: Lu }),
                                          ),
                                      ),
                                      r().createElement(ir, { text: Wu.rewardsDescription(), classMix: Tu }),
                                      r().createElement(J, {
                                          caption: Wu.rewardsButton(),
                                          classNames: Hu,
                                          onMouseEnter: () => n.setRewardLayerVisible(!0),
                                          onMouseLeave: () => n.setRewardLayerVisible(!1),
                                          onClick: () => n.goToRankRewardsPage(),
                                          soundHover: 'comp_7_rank_rewards_hover',
                                      }),
                                  ),
                              );
                    }),
                    zu = 'ProgressionPage_base_fa',
                    Vu = 'ProgressionPage_heading_75',
                    Gu = 'ProgressionPage_scheduleSubheading_51',
                    qu = 'ProgressionPage_parallaxContainer_c4',
                    ju = 'ProgressionPage_contentWrapper_cf',
                    Qu = 'ProgressionPage_content_4a',
                    Yu = 'ProgressionPage_content__progression_c5',
                    Xu = 'ProgressionPage_footer_d1',
                    Ku = R.strings.comp7.page.heading,
                    Zu = (0, ee.Pi)(() => {
                        const e = ls().model.qualificationModel.isActive.get(),
                            t = (0, xe.useSpring)(ct);
                        return r().createElement(
                            'div',
                            { className: zu },
                            ue() && e && r().createElement(Ts, { className: qu }),
                            r().createElement(
                                lt,
                                { className: b()(se, Vu) },
                                e ? Ku.qualification() : Ku.progression(),
                            ),
                            r().createElement(jr, { className: Gu }),
                            e
                                ? r().createElement('div', { className: ju }, r().createElement(Uu, { className: Qu }))
                                : r().createElement(
                                      xe.animated.div,
                                      { style: t, className: ju },
                                      r().createElement(su, {
                                          className: b()(Qu, Yu),
                                          staticContent: r().createElement(ws, { className: Xu }),
                                      }),
                                  ),
                        );
                    }),
                    Ju = V()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    qualification: e.primitives(['isActive'], 'qualificationModel'),
                                },
                                a = e.array('items'),
                                n = (0, _e.Om)(() => a.get().length),
                                r = (0, _e.Om)(
                                    (e) => {
                                        const t = he(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return {
                                            hasRewardsReceived: t.hasRewardsReceived,
                                            rank: t.rank,
                                            from: t.from,
                                            to: t.to,
                                        };
                                    },
                                    { equals: $ },
                                ),
                                s = (0, _e.Om)(
                                    (e) => {
                                        const t = he(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return be(t.rewards, (e) => Object.assign({}, e));
                                    },
                                    { equals: $ },
                                ),
                                o = (0, _e.Om)(
                                    (e) => {
                                        const t = he(s(e), 0);
                                        if (!t)
                                            throw new Error(
                                                `rank rewards item with index ${e} has no any main reward at index: 0`,
                                            );
                                        return t;
                                    },
                                    { equals: $ },
                                ),
                                i = (0, _e.Om)((e) => [...Ae(s(e), 1)], { equals: $ }),
                                u = (0, _e.Om)((e) => {
                                    const t = he(a.get(), e);
                                    if (!t) throw new Error(`item with index ${e} was not found`);
                                    const n = be(t.divisions, (e) => Object.assign({}, e));
                                    return ts(n);
                                }),
                                l = (0, _e.Om)(
                                    (e) => !t.qualification.isActive.get() && e === t.root.get().currentItemIndex,
                                ),
                                c = (0, _e.Om)(
                                    () => {
                                        const e = Fe(a.get(), (e) => !e.hasRewardsReceived);
                                        return {
                                            nextNotAchievedItemIndex: null != e ? e : n(),
                                            hasForceScroll: -1 !== t.root.get().initialItemIndex,
                                        };
                                    },
                                    { equals: pt },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    rankRewardsItemsLength: n,
                                    rankRewardsItem: r,
                                    mainReward: o,
                                    additionalRewards: i,
                                    additionalRewardsCount: (0, _e.Om)((e) => i(e).length),
                                    divisionsString: u,
                                    isCurrentRank: l,
                                    scrollingSettings: c,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = e.createCallback((e, t) => ({ rank: e, index: t }), 'onPreviewOpen');
                            return {
                                goToPreview: (0, W.aD)((e, n) => {
                                    const r = t.computes.rankRewardsItem(e).rank;
                                    a(r, n);
                                }),
                            };
                        },
                    ),
                    el = Ju[0],
                    tl = Ju[1];
                let al, nl, rl, sl, ol, il, ul, ll;
                function cl() {
                    return (
                        (cl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        cl.apply(this, arguments)
                    );
                }
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
                        (e.EquipCoin = 'equipCoin');
                })(al || (al = {})),
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
                    })(nl || (nl = {})),
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
                    })(rl || (rl = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(sl || (sl = {})),
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
                    })(ol || (ol = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(il || (il = {})),
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
                    })(ul || (ul = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(ll || (ll = {}));
                const dl = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const n = r().createElement('div', { className: a }, e);
                        if (t.header || t.body) return r().createElement(Xe, t, n);
                        const s = t.contentId;
                        return s ? r().createElement(qe, cl({}, t, { contentId: s }), n) : r().createElement(Or, t, n);
                    },
                    ml = [
                        al.Items,
                        al.Equipment,
                        al.Xp,
                        al.XpFactor,
                        al.Blueprints,
                        al.BlueprintsAny,
                        al.Goodies,
                        al.Berths,
                        al.Slots,
                        al.Tokens,
                        al.CrewSkins,
                        al.CrewBooks,
                        al.Customizations,
                        al.CreditsFactor,
                        al.TankmenXp,
                        al.TankmenXpFactor,
                        al.FreeXpFactor,
                        al.BattleToken,
                        al.PremiumUniversal,
                        al.NaturalCover,
                        al.BpCoin,
                        al.BattlePassSelectToken,
                        al.BattlaPassFinalAchievement,
                        al.BattleBadge,
                        al.BonusX5,
                        al.CrewBonusX3,
                        al.NewYearInvoice,
                        al.EpicSelectToken,
                        al.Comp7TokenWeeklyReward,
                        al.DeluxeGift,
                        al.BattleBoosterGift,
                        al.OptionalDevice,
                    ],
                    _l = [al.Gold, al.Credits, al.Crystal, al.FreeXp],
                    gl = [al.BattlePassPoints, al.EquipCoin],
                    El = [al.PremiumPlus, al.Premium],
                    pl = ['engravings', 'backgrounds'],
                    hl = ['engraving', 'background'],
                    vl = (e, t = rl.Small) => {
                        const a = e.name,
                            n = e.type,
                            r = e.value,
                            s = e.icon,
                            o = e.item,
                            i = e.dogTagType,
                            u = ((e) => {
                                switch (e) {
                                    case rl.S600x450:
                                        return 'c_600x450';
                                    case rl.S400x300:
                                        return 'c_400x300';
                                    case rl.S296x222:
                                        return 'c_296x222';
                                    case rl.S232x174:
                                        return 'c_232x174';
                                    case rl.Big:
                                        return 'c_80x80';
                                    case rl.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${s}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${s}`;
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const n = pl[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            s = r.$dyn(a);
                                        return s ? `${s}` : `${r.$dyn(hl[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, t, s);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${u}.${s}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${u}.${s}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${u}.${s}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                        }
                    },
                    fl = (e, t, a) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            a,
                        );
                    },
                    bl = [rl.Small, rl.Big],
                    Cl = {
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
                    Al = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: n = rl.Big,
                        special: s,
                        value: o,
                        valueType: i,
                        title: u,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const g = ((e, t) => {
                                if (void 0 === t || !bl.includes(e)) return null;
                                switch (t) {
                                    case ol.BATTLE_BOOSTER:
                                    case ol.BATTLE_BOOSTER_REPLACE:
                                        return il.BATTLE_BOOSTER;
                                }
                            })(n, s),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ol.BATTLE_BOOSTER:
                                        return ul.BATTLE_BOOSTER;
                                    case ol.BATTLE_BOOSTER_REPLACE:
                                        return ul.BATTLE_BOOSTER_REPLACE;
                                    case ol.BUILT_IN_EQUIPMENT:
                                        return ul.BUILT_IN_EQUIPMENT;
                                    case ol.EQUIPMENT_PLUS:
                                        return ul.EQUIPMENT_PLUS;
                                    case ol.EQUIPMENT_TROPHY_BASIC:
                                        return ul.EQUIPMENT_TROPHY_BASIC;
                                    case ol.EQUIPMENT_TROPHY_UPGRADED:
                                        return ul.EQUIPMENT_TROPHY_UPGRADED;
                                    case ol.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ul.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ol.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ul.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ol.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ul.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ol.PROGRESSION_STYLE_UPGRADED_1:
                                        return ul.PROGRESSION_STYLE_UPGRADED_1;
                                    case ol.PROGRESSION_STYLE_UPGRADED_2:
                                        return ul.PROGRESSION_STYLE_UPGRADED_2;
                                    case ol.PROGRESSION_STYLE_UPGRADED_3:
                                        return ul.PROGRESSION_STYLE_UPGRADED_3;
                                    case ol.PROGRESSION_STYLE_UPGRADED_4:
                                        return ul.PROGRESSION_STYLE_UPGRADED_4;
                                    case ol.PROGRESSION_STYLE_UPGRADED_5:
                                        return ul.PROGRESSION_STYLE_UPGRADED_5;
                                    case ol.PROGRESSION_STYLE_UPGRADED_6:
                                        return ul.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(s),
                            p = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case sl.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case sl.CURRENCY:
                                    case sl.NUMBER:
                                        return r().createElement(Ht, { format: 'integral', value: Number(e) });
                                    case sl.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(o, i);
                        return r().createElement(
                            'div',
                            { className: b()(Cl.base, Cl[`base__${n}`], c), style: l },
                            r().createElement(
                                dl,
                                { tooltipArgs: m, className: Cl.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: b()(Cl.image, null == d ? void 0 : d.image) },
                                        g &&
                                            r().createElement('div', {
                                                className: b()(Cl.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            r().createElement('div', {
                                                className: b()(Cl.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            r().createElement('div', {
                                                className: b()(Cl.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    p &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    Cl.info,
                                                    Cl[`info__${e}`],
                                                    i === sl.MULTI && Cl.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            p,
                                        ),
                                    u && r().createElement('div', { className: Cl.title }, u),
                                ),
                            ),
                            a &&
                                r().createElement(
                                    dl,
                                    { tooltipArgs: _ },
                                    r().createElement('div', {
                                        className: b()(Cl.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Dl = 'Rewards_base_26',
                    Fl = 'Rewards_base__vertical_9f',
                    wl = 'Rewards_reward_7b',
                    Sl = 'Rewards_reward__vertical_c6';
                function Bl() {
                    return (
                        (Bl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Bl.apply(this, arguments)
                    );
                }
                const yl = r().memo(
                        ({
                            data: e,
                            size: t = rl.Big,
                            isVertical: a = !1,
                            count: s,
                            classMix: o,
                            rewardItemClassMix: i,
                            boxRewardTooltip: u,
                            boxRewardValue: l,
                            boxRewardClassName: c,
                            boxRewardClassNames: d,
                        }) => {
                            const m = (0, n.useMemo)(
                                    () =>
                                        s && s < e.length ? `R.images.gui.maps.icons.quests.bonuses.${t}.default` : '',
                                    [s, e.length, t],
                                ),
                                _ =
                                    l ||
                                    pa(R.strings.tooltips.quests.awards.additional.bottom(), {
                                        count: e.length - (s || 0),
                                    }),
                                g = b()(Dl, a && Fl, o),
                                E = b()(wl, a && Sl, i);
                            return r().createElement(
                                'div',
                                { className: g },
                                m
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          e
                                              .slice(0, s)
                                              .map((e, a) =>
                                                  r().createElement(
                                                      'div',
                                                      { key: a, className: E },
                                                      r().createElement(Al, Bl({ size: t }, e)),
                                                  ),
                                              ),
                                          r().createElement(
                                              'div',
                                              { className: E },
                                              r().createElement(Al, {
                                                  name: 'more',
                                                  image: m,
                                                  size: t,
                                                  value: _,
                                                  tooltipArgs: u,
                                                  className: c,
                                                  classNames: d,
                                              }),
                                          ),
                                      )
                                    : e.map((e, a) =>
                                          r().createElement(
                                              'div',
                                              { key: a, className: E },
                                              r().createElement(Al, Bl({ size: t }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    kl = [rl.Big, rl.Small],
                    Pl = [rl.S232x174, rl.S296x222, rl.S400x300, rl.S600x450],
                    Nl = R.images.gui.maps.icons.comp7.rewards,
                    Rl = (e, t) => 'styleProgress' === e.name && kl.includes(t),
                    xl = (e, t) =>
                        'progressLevel' in e && Rl(e, t)
                            ? `progressionStyleUpgraded_${e.progressLevel}`
                            : e.overlayType,
                    Il = (e) => ('vehicles_rent' === e.name ? e.label : e.value),
                    Tl = ({ reward: e, rank: t, index: a }) => {
                        const n = e.tooltipId,
                            r = e.tooltipContentId;
                        return fl(
                            Object.assign({ tooltipId: n }, void 0 !== t && { rank: t }, void 0 !== a && { index: a }),
                            Number(r),
                            { ignoreShowDelay: !0 },
                        );
                    },
                    Ll = (e, t) => {
                        if ('tankman' === e.name) {
                            var a;
                            const n =
                                null == (a = R.images.gui.maps.icons.comp7.crew.$dyn(t)) ? void 0 : a.$dyn(e.groupName);
                            if (n) return `${n}`;
                            console.info(
                                `Folder for reward size ${t} was not found for crew with groupName: ${e.groupName}`,
                            );
                        }
                        if (Rl(e, t)) return `R.images.gui.maps.icons.quests.bonuses.${t}.camouflage`;
                        if ('customizations' === e.name && Pl.includes(t)) {
                            var n;
                            const a = null == (n = Nl.$dyn(t)) ? void 0 : n.$dyn(`style_${e.styleID}`);
                            if (a) return `${a}`;
                            console.info(`Folder for reward size ${t} was not found for styleId: ${e.styleID}`);
                        }
                        return vl(e, t);
                    },
                    Ol = ({ reward: e, size: t, rank: a, index: n }) => {
                        const r = ((e, t) => {
                            if ('dogTagComponents' === e.name) {
                                if (t === rl.Big) return rl.S80x80;
                                if (t === rl.Small) return rl.S48x48;
                            }
                            return t;
                        })(e, t);
                        return Object.assign({}, e, {
                            size: r,
                            image: Ll(e, r),
                            value: Il(e),
                            valueType:
                                ((s = e.name),
                                ml.includes(s)
                                    ? sl.MULTI
                                    : _l.includes(s)
                                      ? sl.CURRENCY
                                      : gl.includes(s)
                                        ? sl.NUMBER
                                        : El.includes(s)
                                          ? sl.PREMIUM_PLUS
                                          : sl.STRING),
                            special: xl(e, r),
                            tooltipArgs: Tl({ reward: e, rank: a, index: n }),
                            periodicIconTooltipArgs: {
                                header: R.strings.tooltips.periodicReward.header(),
                                body: R.strings.tooltips.periodicReward.comp7.body(),
                            },
                        });
                        var s;
                    },
                    Ml = ({ rewards: e, size: t, rank: a, index: n }) =>
                        be(e, (e) => Ol({ reward: e, size: t, rank: a, index: n })),
                    $l = (e, t) => (e > t ? t - 1 : void 0),
                    Wl = 'AdditionalRewards_reward_16',
                    Hl = 'AdditionalRewards_vehiclesRentBase_d4',
                    Ul = 'AdditionalRewards_vehiclesRentLabel_3e',
                    zl = rl.Small,
                    Vl = (0, ee.Pi)(({ rank: e, itemIndex: t, visibleRewardsCount: a, className: n }) => {
                        const s = tl().model,
                            o = s.computes.additionalRewards(t),
                            i = s.computes.additionalRewardsCount(t),
                            u = be(o, (t) => {
                                const a = 'vehicles_rent' === t.name;
                                return Object.assign({}, Ol({ reward: t, size: zl, rank: e }), {
                                    className: b()(a && Hl),
                                    classNames: { info: b()(a && Ul) },
                                });
                            });
                        return r().createElement(yl, {
                            data: u,
                            size: zl,
                            count: $l(i, a),
                            rewardItemClassMix: Wl,
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { fromIndex: a, rank: e },
                            },
                            classMix: n,
                        });
                    });
                let Gl;
                !(function (e) {
                    (e[(e.NotStarted = 0)] = 'NotStarted'),
                        (e[(e.Active = 1)] = 'Active'),
                        (e[(e.OffSeason = 3)] = 'OffSeason'),
                        (e[(e.Finished = 4)] = 'Finished');
                })(Gl || (Gl = {}));
                const ql = {
                        base: 'Heading_base_99',
                        rankEmblemContainer: 'Heading_rankEmblemContainer_67',
                        godRays: 'Heading_godRays_7a',
                        rankEmblem__inactive: 'Heading_rankEmblem__inactive_8a',
                        lock: 'Heading_lock_a8',
                        description: 'Heading_description_6f',
                        rankName: 'Heading_rankName_05',
                        rankStatus: 'Heading_rankStatus_63',
                    },
                    jl = (0, ee.Pi)(({ index: e, rankEmblemSize: t }) => {
                        const a = tl().model,
                            n = j().model,
                            s = a.root.get().topPercentage,
                            o = a.computes.rankRewardsItem(e),
                            i = o.rank,
                            u = o.from,
                            l = o.to,
                            c = o.hasRewardsReceived,
                            d = a.computes.divisionsString(e),
                            m = a.computes.isCurrentRank(e);
                        return r().createElement(
                            'div',
                            { className: ql.base },
                            r().createElement(
                                Kn,
                                {
                                    rank: i,
                                    from: u,
                                    to: l,
                                    topPercentage: s,
                                    divisions: d,
                                    className: ql.rankEmblemContainer,
                                    ignoreShowDelay: !0,
                                },
                                m &&
                                    r().createElement(Eo, {
                                        className: ql.godRays,
                                        src: String(R.videos.comp7.godRaysNew_130x130()),
                                        autoplay: !0,
                                        loop: !0,
                                    }),
                                r().createElement(La, {
                                    seasonName: n.season.name.get(),
                                    size: t,
                                    rank: i,
                                    className: b()(ql.rankEmblem, !c && ql.rankEmblem__inactive),
                                }),
                                !c && r().createElement('div', { className: ql.lock }),
                            ),
                            r().createElement(
                                'div',
                                { className: ql.description },
                                r().createElement('div', { className: ql.rankName }, Wa(i)),
                                m &&
                                    r().createElement(
                                        'div',
                                        { className: ql.rankStatus },
                                        ((e) => {
                                            switch (e) {
                                                case Gl.OffSeason:
                                                case Gl.Finished:
                                                    return R.strings.comp7.rank.achieved();
                                                case Gl.Active:
                                                    return R.strings.comp7.rank.current();
                                                default:
                                                    return '';
                                            }
                                        })(n.year.state.get()),
                                    ),
                            ),
                        );
                    }),
                    Ql =
                        (e, t) =>
                        (...a) => {
                            if (e(...a)) return t(...a);
                        },
                    Yl = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
                    },
                    Xl = [
                        'type',
                        'children',
                        'className',
                        'classNames',
                        'disabled',
                        'isVisibleLabel',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function Kl() {
                    return (
                        (Kl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Kl.apply(this, arguments)
                    );
                }
                const Zl = (e) => {
                        let t = e.type,
                            a = e.children,
                            s = e.className,
                            o = e.classNames,
                            i = e.disabled,
                            u = void 0 !== i && i,
                            l = e.isVisibleLabel,
                            c = void 0 !== l && l,
                            d = e.soundHover,
                            m = void 0 === d ? R.sounds.highlight() : d,
                            _ = e.soundClick,
                            g = void 0 === _ ? R.sounds.play() : _,
                            E = e.size,
                            p = void 0 === E ? 'normal' : E,
                            h = e.onClick,
                            v = e.onMouseEnter,
                            f = e.onMouseLeave,
                            C = e.onMouseDown,
                            A = e.onMouseUp,
                            D = e.onFocus,
                            F = e.onBlur,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Xl);
                        const S = (0, n.useState)(!1),
                            B = S[0],
                            y = S[1],
                            k = (0, n.useState)(!1),
                            P = k[0],
                            N = k[1],
                            x = (0, n.useRef)(null),
                            I = () => !1 === u,
                            T = (e) => I() && ((e) => e.button === gn.LEFT)(e),
                            L = Ql(I, (e) => {
                                null == h || h(e);
                            }),
                            O = Ql(T, (e) => {
                                y(!0), null == C || C(e), g && Q(g);
                            }),
                            M = Ql(T, (e) => {
                                y(!1), null == A || A(e);
                            }),
                            $ = Ql(I, (e) => {
                                N(!0), null == v || v(e), m && Q(m);
                            }),
                            W = Ql(I, (e) => {
                                null == D || D(e);
                            }),
                            H = Ql(I, (e) => {
                                null == F || F(e);
                            });
                        return r().createElement(
                            'div',
                            Kl(
                                {
                                    ref: x,
                                    className: b()(
                                        Yl.base,
                                        u && Yl.base__disabled,
                                        c && Yl.base__visibleLabel,
                                        !u && B && Yl.base__mouseDown,
                                        !u && P && Yl.base__hovered,
                                        s,
                                    ),
                                    onClick: L,
                                    onMouseEnter: $,
                                    onMouseLeave: (e) => {
                                        N(!1), y(!1), null == f || f(e);
                                    },
                                    onMouseDown: O,
                                    onMouseUp: M,
                                    onFocus: W,
                                    onBlur: H,
                                },
                                w,
                            ),
                            r().createElement('div', {
                                className: b()(
                                    Yl.icon,
                                    Yl[`icon__${p}`],
                                    Yl[`icon__${t}`],
                                    null == o ? void 0 : o.icon,
                                ),
                            }),
                            a &&
                                r().createElement(
                                    'div',
                                    { className: b()(Yl.label, Yl[`label__${p}`], null == o ? void 0 : o.label) },
                                    a,
                                ),
                        );
                    },
                    Jl = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ec = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const tc = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    ac = (e) =>
                        tc
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let a = ec.length - 1; a >= 0; a--)
                                      for (; e >= ec[a]; ) (t += Jl[a]), (e -= ec[a]);
                                  return t;
                              })(e),
                    nc = 'MainReward_base_32',
                    rc = 'MainReward_imageContainer_37',
                    sc = 'MainReward_glowContainer_7f',
                    oc = 'MainReward_glow_40',
                    ic = 'MainReward_preview_7a',
                    uc = 'MainReward_info_58',
                    lc = 'MainReward_title_6d',
                    cc = 'MainReward_subTitle_e2',
                    dc = (0, ee.Pi)(
                        ({ index: e, rank: t, size: a, hasHighlight: n, onPreviewClick: s, className: o }) => {
                            const i = tl().model.computes.mainReward(e);
                            return r().createElement(
                                'div',
                                { className: b()(nc, o) },
                                r().createElement(
                                    'div',
                                    { className: rc },
                                    n && r().createElement(fo, { className: sc, classNames: { glow: oc } }),
                                    r().createElement(Al, Ol({ reward: i, size: a, rank: t })),
                                    ((e) => 'styleProgress' === e.name)(i) &&
                                        r().createElement(
                                            'div',
                                            { className: ic },
                                            r().createElement(
                                                Zl,
                                                { type: 'preview', onClick: s },
                                                R.strings.comp7.rewards.preview(),
                                            ),
                                        ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: uc },
                                    r().createElement('div', { className: lc }, i.label),
                                    r().createElement(mr, {
                                        text: String(R.strings.comp7.rewards.subtitle.$dyn(i.name)),
                                        binding: { vehicleLevel: ac(10) },
                                        classMix: cc,
                                    }),
                                ),
                            );
                        },
                    ),
                    mc = 'RankRewardsItem_base_a7',
                    _c = 'RankRewardsItem_mainRewardContainer_e0',
                    gc = 'RankRewardsItem_rewardsContainer_69',
                    Ec = 'RankRewardsItem_statusContainer_bf',
                    pc = 'RankRewardsItem_statusContainer__hidden_c8',
                    hc = 'RankRewardsItem_icon_7d',
                    vc = (0, ee.Pi)(
                        ({
                            itemIndex: e,
                            itemWidth: t,
                            mainRewardSize: a,
                            hasHighlight: n,
                            visibleRewardsCount: s,
                            rankEmblemSize: o,
                            onPreviewClick: i,
                        }) => {
                            const u = tl().model.computes.rankRewardsItem(e),
                                l = u.rank,
                                c = u.hasRewardsReceived;
                            return r().createElement(
                                'div',
                                { className: mc, style: { '--itemWidth': `${t}rem` } },
                                r().createElement(jl, { index: e, rankEmblemSize: o }),
                                r().createElement(dc, {
                                    index: e,
                                    rank: l,
                                    size: a,
                                    hasHighlight: n,
                                    onPreviewClick: i,
                                    className: _c,
                                }),
                                r().createElement(
                                    'div',
                                    { className: gc },
                                    r().createElement(Vl, { itemIndex: e, visibleRewardsCount: s, rank: l }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: b()(Ec, !c && pc) },
                                    r().createElement('div', { className: hc }),
                                    R.strings.comp7.rewards.status.achieved(),
                                ),
                            );
                        },
                    ),
                    fc = (e) => (e >= D.Large ? Ia.x110 : e >= D.Medium ? Ia.x64 : Ia.x48),
                    bc = (e) =>
                        e >= D.ExtraLarge
                            ? rl.S600x450
                            : e >= D.Large
                              ? rl.S400x300
                              : e >= D.Medium
                                ? rl.S296x222
                                : rl.S232x174,
                    Cc = (e) => (e >= F.Medium ? 5 : 4),
                    Ac = 'RankRewardsPage_base_fd',
                    Dc = 'RankRewardsPage_content_3f',
                    Fc = 'RankRewardsPage_scrollContainer_f2',
                    wc = 'RankRewardsPage_areaContainer_9e',
                    Sc = 'RankRewardsPage_areaWrapper_fb',
                    Bc = 'RankRewardsPage_bar_59',
                    yc = { duration: 700, easing: (e) => Math.pow(e, 4) },
                    kc = (0, ee.Pi)(() => {
                        const e = S(),
                            t = e.mediaSize,
                            a = e.mediaWidth,
                            s = tl(),
                            i = s.model,
                            u = s.controls,
                            l = i.root.get().initialItemIndex,
                            c = i.computes.rankRewardsItemsLength(),
                            d = i.computes.scrollingSettings(),
                            m = d.nextNotAchievedItemIndex,
                            _ = d.hasForceScroll,
                            g = (0, n.useState)(_ ? 'idle' : 'initial'),
                            E = g[0],
                            p = g[1],
                            h = (0, n.useState)(_ ? l : m),
                            v = h[0],
                            f = h[1],
                            b = ((e) =>
                                e >= D.ExtraLarge
                                    ? 600
                                    : e >= D.Large
                                      ? 460
                                      : e >= D.Medium
                                        ? 400
                                        : e >= D.Small
                                          ? 340
                                          : 300)(t),
                            C = c * b,
                            A = lo(b),
                            F = A.scrollPosition,
                            w = A.clampPosition,
                            B = A.contentRef,
                            y = (function () {
                                const e = (0, n.useRef)(!1);
                                return (
                                    (0, n.useEffect)(
                                        () => () => {
                                            e.current = !0;
                                        },
                                        [],
                                    ),
                                    e
                                );
                            })();
                        (0, n.useLayoutEffect)(() => {
                            'idle' === E
                                ? F.start({ scrollPosition: o.O.view.remToPx(l * b), immediate: !0 })
                                : 'initial' === E && F.start({ scrollPosition: o.O.view.remToPx(C), immediate: !0 });
                        }, []),
                            (0, n.useEffect)(
                                () =>
                                    Re(() => {
                                        const e = B.current;
                                        if (e && 'initial' === E) {
                                            const t = w(e, o.O.view.remToPx(m * b)),
                                                a = w(e, o.O.view.remToPx(C));
                                            if (t === a) return void p('idle');
                                            F.start({
                                                scrollPosition: t,
                                                from: { scrollPosition: a },
                                                config: yc,
                                                onStart: () => {
                                                    p('scrolling');
                                                },
                                                onRest: () => {
                                                    y.current || p('idle');
                                                },
                                            });
                                        }
                                    }),
                                [w, B, y, b, m, E, C, F],
                            );
                        const k = (e) => 'idle' === E && e === m,
                            P = (0, xe.useSpring)(ct);
                        return r().createElement(
                            'div',
                            { className: Ac },
                            r().createElement(lt, { className: se }, R.strings.comp7.page.heading.rankRewards()),
                            r().createElement(jr, null),
                            r().createElement(
                                xe.animated.div,
                                { className: Dc, style: P },
                                r().createElement(
                                    uo,
                                    {
                                        api: A,
                                        stuckIndex: v,
                                        itemWidth: b,
                                        itemsOffset: Us(b),
                                        onStick: f,
                                        className: Fc,
                                        areaClassNames: { base: wc, wrapper: Sc },
                                        barClassNames: { base: Bc },
                                    },
                                    ca(c, (e) =>
                                        r().createElement(vc, {
                                            key: e,
                                            itemIndex: e,
                                            visibleRewardsCount: Cc(a),
                                            rankEmblemSize: fc(t),
                                            mainRewardSize: bc(t),
                                            itemWidth: b,
                                            hasHighlight: k(e),
                                            onPreviewClick: () => u.goToPreview(e, v),
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                let Pc, Nc;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(Pc || (Pc = {})),
                    (function (e) {
                        (e[(e.Initial = 0)] = 'Initial'),
                            (e[(e.Success = 1)] = 'Success'),
                            (e[(e.Error = 2)] = 'Error');
                    })(Nc || (Nc = {}));
                const Rc = [rs.Locked, rs.ReadyToPurchase],
                    xc = [ns.Vehicle, ns.Style3d],
                    Ic = V()(
                        ({ observableModel: e, mode: t }) => {
                            const a = e.array('rankDiscounts'),
                                n = e.array('products'),
                                r = { root: e.object() },
                                s = (0, _e.Om)(
                                    () =>
                                        be(n.get(), (e) =>
                                            Object.assign(
                                                {},
                                                e,
                                                { price: Object.assign({}, e.price) },
                                                'vehicleInfo' in e && { vehicleInfo: Object.assign({}, e.vehicleInfo) },
                                                'reward' in e && { reward: Object.assign({}, e.reward) },
                                            ),
                                        ),
                                    { equals: $ },
                                ),
                                o = (0, _e.Om)(
                                    (e) => {
                                        const t = he(s(), e);
                                        if (!t) throw new Error(`product with index ${e} is not found`);
                                        return t;
                                    },
                                    { equals: $ },
                                ),
                                i = (0, _e.Om)(
                                    () => {
                                        const e = new Set(),
                                            t = Se(
                                                s(),
                                                (t, a, n) => {
                                                    const r = a.rank,
                                                        s = t.get(r);
                                                    return void 0 === s
                                                        ? (0 !== n && e.add(n), t.set(r, 1))
                                                        : t.set(r, s + 1);
                                                },
                                                new Map(),
                                            );
                                        return { recordsArray: Array.from(t.entries()), groupIndexesSet: e };
                                    },
                                    { equals: $ },
                                ),
                                u = (0, _e.Om)(
                                    (e) => {
                                        const t = o(e);
                                        return {
                                            hasDiscount: t.state === rs.ReadyToPurchase && t.price.discountValue > 0,
                                            isEnough: !Rc.includes(t.state) || t.price.isEnough,
                                        };
                                    },
                                    { equals: pt },
                                ),
                                l = (0, _e.Om)(() => {
                                    const e = r.root.get().selectedProductId,
                                        t = Fe(s(), (t) => t.id === e);
                                    if (void 0 === t)
                                        throw new Error(`selectedProductId: ${e} is not found in products array`);
                                    return t;
                                }),
                                c = (0, _e.Om)(
                                    () => {
                                        const e = l(),
                                            t = o(e);
                                        if (!t)
                                            throw new Error(
                                                `product with selected index ${e} is not found in products array`,
                                            );
                                        return t;
                                    },
                                    { equals: $ },
                                ),
                                d = (0, _e.Om)(() => r.root.get().shopState === Nc.Success && c().type !== ns.Reward),
                                m = (0, _e.Om)(() => {
                                    const e = c();
                                    return e.type === ns.Vehicle && e.state !== rs.ReadyToRestore && e.description;
                                }),
                                _ = (0, _e.Om)(() => c().type === ns.Reward),
                                g = (0, _e.Om)(
                                    () => {
                                        const e = c(),
                                            t = e.type === ns.Vehicle && e.state !== rs.Purchased;
                                        return {
                                            hasControls: xc.includes(e.type),
                                            hasAddToCompare: e.type === ns.Vehicle,
                                            hasPreview: t || e.type === ns.Style3d,
                                        };
                                    },
                                    { equals: pt },
                                ),
                                E = (0, _e.Om)(
                                    () =>
                                        be(a.get(), (e) =>
                                            Object.assign({}, e, {
                                                divisions: ts(be(e.divisions, (e) => Object.assign({}, e))),
                                            }),
                                        ),
                                    { equals: $ },
                                ),
                                p = (0, _e.Om)(
                                    (e) => {
                                        const t = he(E(), e);
                                        if (!t) throw new Error(`rank discount with index ${e} is not found`);
                                        return t;
                                    },
                                    { equals: $ },
                                );
                            return Object.assign(
                                {},
                                r,
                                {
                                    computes: {
                                        productsLength: (0, _e.Om)(() => s().length),
                                        rankDiscountsLength: (0, _e.Om)(() => E().length),
                                        product: o,
                                        productsDividersConfig: i,
                                        priceConfig: u,
                                        selectedProductIndex: l,
                                        selectedProduct: c,
                                        hasSceneWrapper: d,
                                        hasVehicleDescription: m,
                                        hasLimitedQuantity: _,
                                        controlsConfig: g,
                                        rankDiscount: p,
                                    },
                                },
                                'mocks' === t && { internal: { rankDiscounts: a, computes: { products: s } } },
                            );
                        },
                        ({ externalModel: e }) => ({
                            markProductSeen: e.createCallback((e) => ({ cd: e }), 'onProductSeen'),
                            selectProduct: e.createCallback((e) => ({ cd: e }), 'onProductSelect'),
                            purchase: e.createCallbackNoArgs('onProductPurchase'),
                            restore: e.createCallbackNoArgs('onProductRestore'),
                            goToHangar: e.createCallbackNoArgs('onGoToHangar'),
                            goToPreview: e.createCallbackNoArgs('onGoToPreview'),
                            goToCustomization: e.createCallbackNoArgs('onGoToCustomization'),
                            addToVehicleCompare: e.createCallbackNoArgs('onAddToVehicleCompare'),
                            mouseOver3dScene: e.createCallback(
                                ({ isOver3dScene: e }) => ({ isOver3dScene: e }),
                                'onMouseOver3dScene',
                            ),
                            moveSpace: e.createCallback(
                                ({ dx: e, dy: t, dz: a }) => ({ dx: e, dy: t, dz: a }),
                                'onMoveSpace',
                            ),
                        }),
                    ),
                    Tc = Ic[0],
                    Lc = Ic[1],
                    Oc = 'SceneWrapper_base_99',
                    Mc = 'SceneWrapper_base__down_65',
                    $c = 'SceneWrapper_base__moveSpaceDisabled_fe',
                    Wc = ({
                        children: e,
                        moveSpace: t,
                        onMouseOver3dScene: a,
                        onDragStateChange: s,
                        isMoveSpaceEnabled: o = !0,
                    }) => {
                        const i = (0, n.useState)(!1),
                            u = i[0],
                            l = i[1],
                            c = (0, n.useState)({ x: 0, y: 0 }),
                            d = c[0],
                            m = c[1],
                            _ = (0, n.createRef)(),
                            g = (0, n.useCallback)(() => {
                                l(!1), null == s || s(!1);
                            }, [s]);
                        (0, n.useEffect)(
                            () => (
                                window.addEventListener('mouseup', g), () => window.removeEventListener('mouseup', g)
                            ),
                            [g],
                        );
                        const E = (0, n.useCallback)(
                                (e) => {
                                    if (!_.current) return;
                                    const t = _.current.getBoundingClientRect(),
                                        a = t.width,
                                        n = t.height;
                                    return !(
                                        0 === e.clientX ||
                                        0 === e.clientY ||
                                        e.clientX >= a - 1 ||
                                        e.clientY >= n - 1
                                    );
                                },
                                [_],
                            ),
                            p = (0, n.useCallback)(
                                (e) => {
                                    e.preventDefault(),
                                        0 === e.button &&
                                            E(e) &&
                                            o &&
                                            (l(!0), null == s || s(!0), m({ x: e.clientX, y: e.clientY }));
                                },
                                [E, o, s],
                            ),
                            h = (0, n.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), u)) {
                                        if (!E(e)) return;
                                        const a = e.clientX !== d.x ? e.clientX - d.x : 0,
                                            n = e.clientY !== d.y ? e.clientY - d.y : 0;
                                        m({ x: e.clientX, y: e.clientY }), t({ dx: a, dy: n, dz: 0 });
                                    }
                                },
                                [E, u, d.x, d.y, t],
                            ),
                            v = (0, n.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), !o || !E(e))) return;
                                    const a = e.deltaY < 0;
                                    t({ dx: 0, dy: 0, dz: a ? -600 : 600 });
                                },
                                [E, o, t],
                            ),
                            f = (0, n.useCallback)(() => {
                                l(!1), null == s || s(!1);
                            }, [s]),
                            C = (0, n.useCallback)(() => {
                                a({ isOver3dScene: !0 });
                            }, [a]),
                            A = (0, n.useCallback)(() => {
                                a({ isOver3dScene: !1 });
                            }, [a]);
                        return r().createElement(
                            'div',
                            {
                                ref: _,
                                className: b()(Oc, u && Mc, !o && $c),
                                onMouseDown: p,
                                onMouseMove: h,
                                onMouseUp: f,
                                onWheel: v,
                                onMouseOver: C,
                                onMouseOut: A,
                            },
                            e,
                        );
                    },
                    Hc = 'ErrorState_base_6b',
                    Uc = 'ErrorState_titleContainer_21',
                    zc = 'ErrorState_alertIcon_2b',
                    Vc = 'ErrorState_title_b3',
                    Gc = 'ErrorState_description_81',
                    qc = R.strings.comp7.dataError,
                    jc = ({ className: e, classNames: t, title: a = qc.title(), description: n = qc.description() }) =>
                        r().createElement(
                            'div',
                            { className: b()(Hc, e) },
                            r().createElement(
                                'div',
                                { className: b()(Uc, null == t ? void 0 : t.titleContainer) },
                                r().createElement('div', { className: b()(zc, null == t ? void 0 : t.alertIcon) }),
                                r().createElement('div', { className: b()(Vc, null == t ? void 0 : t.title) }, a),
                            ),
                            r().createElement('div', { className: b()(Gc, null == t ? void 0 : t.description) }, n),
                        ),
                    Qc = 'ShopPage_base_85',
                    Yc = 'ShopPage_sceneWrapper_d8',
                    Xc = 'ShopPage_vignette_69',
                    Kc = 'ShopPage_headersWrapper_e8',
                    Zc = 'ShopPage_activeSeasonState_b7',
                    Jc = 'ShopPage_contentWrapper_27',
                    ed = 'ShopPage_rewardContainer_22',
                    td = 'ShopPage_rewardBase_a8',
                    ad = 'ShopPage_rewardHighlight_52',
                    nd = 'ShopPage_controls_c4',
                    rd = 'ShopPage_mainContainer_7c',
                    sd = 'ShopPage_details_1f',
                    od = 'ShopPage_carousel_e3',
                    id = {
                        base: 'CarouselScroll_base_fc',
                        areaWrapper: 'CarouselScroll_areaWrapper_f4',
                        areaWrapper__hasScroll: 'CarouselScroll_areaWrapper__hasScroll_3f',
                        areaContent: 'CarouselScroll_areaContent_2a',
                        arrow: 'CarouselScroll_arrow_e3',
                        arrow__prev: 'CarouselScroll_arrow__prev_ed',
                        arrow__next: 'CarouselScroll_arrow__next_84',
                        arrow__hidden: 'CarouselScroll_arrow__hidden_2a',
                        arrow__prevDisabled: 'CarouselScroll_arrow__prevDisabled_2d',
                        arrow__nextDisabled: 'CarouselScroll_arrow__nextDisabled_93',
                    },
                    ud = ({ api: e, className: t, classNames: a, children: s }) => {
                        const o = e.events,
                            i = e.getBounds,
                            u = e.getWrapperSize,
                            l = e.getContainerSize,
                            c = e.applyStepTo,
                            d = e.animationScroll.scrollPosition,
                            m = (0, n.useRef)(null),
                            _ = (0, n.useState)('visible'),
                            g = _[0],
                            E = _[1],
                            p = $s();
                        Hs(e);
                        const h = Tt(() => {
                                p.run(() => {
                                    const e = i(),
                                        t = e[0],
                                        a = e[1],
                                        n = u(),
                                        r = l();
                                    if (n && r)
                                        return r <= n
                                            ? E('hidden')
                                            : d.goal === t
                                              ? E('prevDisabled')
                                              : d.goal === a
                                                ? E('nextDisabled')
                                                : E('visible');
                                });
                            }),
                            v = jt((e) => c(e), 150, [c]),
                            f = v[0],
                            C = v[1],
                            A = (0, n.useCallback)(
                                (e) => () => {
                                    const t = e === Ot.Next && 'prevDisabled' === g,
                                        a = e === Ot.Prev && 'nextDisabled' === g;
                                    t || a || (Y.playClick(), f(e));
                                },
                                [g, f],
                            );
                        return (
                            Os(() => {
                                h();
                            }),
                            Ls(() => {
                                h();
                            }, [h]),
                            (0, n.useEffect)(() => {
                                const e = Lt(200, h);
                                return o.on('change', e), () => o.off('change', e);
                            }, [o, h]),
                            (0, n.useEffect)(
                                () => (
                                    document.addEventListener('mouseup', C, !0),
                                    () => document.removeEventListener('mouseup', C, !0)
                                ),
                                [C],
                            ),
                            r().createElement(
                                'div',
                                { className: b()(id.base, t), ref: m },
                                r().createElement(
                                    ro,
                                    {
                                        api: e,
                                        classNames: {
                                            wrapper: b()(
                                                id.areaWrapper,
                                                null == a ? void 0 : a.areaWrapper,
                                                'hidden' !== g && id.areaWrapper__hasScroll,
                                            ),
                                            content: b()(id.areaContent, null == a ? void 0 : a.areaContent),
                                        },
                                    },
                                    s,
                                ),
                                r().createElement('div', {
                                    className: b()(id.arrow, id.arrow__prev, id[`arrow__${g}`]),
                                    onMouseEnter: 'prevDisabled' === g ? void 0 : Y.playHighlight,
                                    onMouseDown: A(Ot.Next),
                                    onMouseUp: C,
                                }),
                                r().createElement('div', {
                                    className: b()(id.arrow, id.arrow__next, id[`arrow__${g}`]),
                                    onMouseEnter: 'nextDisabled' === g ? void 0 : Y.playHighlight,
                                    onMouseDown: A(Ot.Prev),
                                    onMouseUp: C,
                                }),
                            )
                        );
                    },
                    ld = {
                        '--pageContentWidth': '78vw',
                        base: 'ProductCard_base_d5',
                        base__selected: 'ProductCard_base__selected_71',
                        background: 'ProductCard_background_bd',
                        backgroundGradient: 'ProductCard_backgroundGradient_92',
                        imageContainer: 'ProductCard_imageContainer_e4',
                        corners: 'ProductCard_corners_b3',
                        discountBackground: 'ProductCard_discountBackground_12',
                        stroke: 'ProductCard_stroke_03',
                        base__purchased: 'ProductCard_base__purchased_7a',
                        corner: 'ProductCard_corner_34',
                        corner__top: 'ProductCard_corner__top_04',
                        corner__bottom: 'ProductCard_corner__bottom_37',
                        corner__left: 'ProductCard_corner__left_fe',
                        corner__right: 'ProductCard_corner__right_9b',
                        container: 'ProductCard_container_57',
                        name: 'ProductCard_name_4d',
                        lock: 'ProductCard_lock_79',
                        bottomString: 'ProductCard_bottomString_e5',
                        notification: 'ProductCard_notification_bc',
                    },
                    cd = 'ProductCardImage_base_ac',
                    dd = R.images.gui.maps.icons.comp7.products,
                    md = (0, ee.Pi)(({ index: e, className: t }) => {
                        const a = Lc().model.computes.product(e);
                        return r().createElement('div', {
                            className: b()(cd, t),
                            style: { backgroundImage: `url('${dd.$num(a.id)}')` },
                        });
                    }),
                    _d = {
                        base: 'VehicleName_base_3b',
                        base__24x24: 'VehicleName_base__24x24_a7',
                        base__24x24_metal: 'VehicleName_base__24x24_metal_92',
                        base__48x48: 'VehicleName_base__48x48_6a',
                        base__64x64: 'VehicleName_base__64x64_d2',
                        base__83x74: 'VehicleName_base__83x74_ba',
                        vehicleTypeContainer: 'VehicleName_vehicleTypeContainer_f2',
                        base__60x54: 'VehicleName_base__60x54_08',
                        vehicleType: 'VehicleName_vehicleType_c3',
                    };
                let gd;
                !(function (e) {
                    (e.x24 = '24x24'),
                        (e.x24Metal = '24x24_metal'),
                        (e.x48 = '48x48'),
                        (e.x60 = '60x54'),
                        (e.x64 = '64x64'),
                        (e.x80 = '80x80'),
                        (e.x83 = '83x74'),
                        (e.x180 = '180x135');
                })(gd || (gd = {}));
                const Ed = R.images.gui.maps.icons.vehicleTypes,
                    pd = (e) => {
                        switch (e) {
                            case gd.x80:
                                return Ed.large;
                            case gd.x83:
                                return Ed.big;
                            case gd.x180:
                                return Ed.huge;
                            default:
                                return Ed.$dyn(`c_${e}`);
                        }
                    },
                    hd = (0, n.memo)(
                        ({
                            name: e,
                            tier: t,
                            type: a,
                            size: n = gd.x24Metal,
                            typeIconFolderPath: s = pd(n),
                            isPremium: o = !1,
                            className: i,
                            classNames: u,
                        }) => {
                            const l = `${ha(a)}${o ? '_elite' : ''}`;
                            return r().createElement(
                                'div',
                                { className: b()(_d.base, _d[`base__${n}`], i) },
                                r().createElement('div', { className: null == u ? void 0 : u.level }, ac(t)),
                                r().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            _d.vehicleTypeContainer,
                                            null == u ? void 0 : u.vehicleTypeContainer,
                                        ),
                                    },
                                    r().createElement('div', {
                                        className: b()(_d.vehicleType, null == u ? void 0 : u.type),
                                        style: { backgroundImage: `url(${null == s ? void 0 : s.$dyn(l)})` },
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: b()(_d.shortName, null == u ? void 0 : u.shortName) },
                                    e,
                                ),
                            );
                        },
                    ),
                    vd = 'ProductCardName_base_23',
                    fd = 'ProductCardName_nation_68',
                    bd = 'ProductCardName_style3dContainer_9e',
                    Cd = 'ProductCardName_overflowedName_ab',
                    Ad = 'ProductCardName_style3dDescription_88',
                    Dd = R.images.gui.maps.icons.flags.c_20x12,
                    Fd = (0, ee.Pi)(({ index: e, className: t }) => {
                        const a = Lc().model.computes.product(e),
                            n = S().mediaSize;
                        switch (a.type) {
                            case ns.Vehicle: {
                                const e = a.vehicleInfo,
                                    n = e.name,
                                    s = e.tier,
                                    o = e.type,
                                    i = e.nation,
                                    u = e.isPremium;
                                return r().createElement(
                                    'div',
                                    { className: b()(vd, t) },
                                    r().createElement('div', {
                                        className: fd,
                                        style: { backgroundImage: `url('${Dd.$dyn(i)}')` },
                                    }),
                                    r().createElement(hd, { name: n, tier: s, type: o, isPremium: u }),
                                );
                            }
                            case ns.Style3d: {
                                const e = a.name,
                                    s = a.vehicleInfo,
                                    o = pa(R.strings.comp7.products.style3d(), {
                                        name: pa(R.strings.comp7.quotesWrapper(), { name: e }),
                                    });
                                return r().createElement(
                                    'div',
                                    { className: b()(vd, bd, t) },
                                    r().createElement(nn, { classMix: Cd, content: o, key: n }),
                                    r().createElement(ir, {
                                        text: R.strings.comp7.forVehicle(),
                                        binding: { vehicleName: s.name },
                                        classMix: Ad,
                                    }),
                                );
                            }
                            case ns.Reward:
                                return r().createElement(ir, { text: a.reward.label, classMix: b()(vd, t) });
                            default:
                                return console.error(`Provide ProductCardName for ProductType:${a.type}`), null;
                        }
                    }),
                    wd = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                        'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                        'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                        'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__eliteXP: 'Currency_value__eliteXP_62',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    };
                let Sd, Bd, yd;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(Sd || (Sd = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(Bd || (Bd = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(yd || (yd = {}));
                const kd = (0, n.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: t,
                            size: a,
                            type: n,
                            value: s,
                            discountValue: o,
                            showPlus: i,
                            isEnough: u = !0,
                            stockBackgroundName: l = yd.Red,
                            className: c,
                            classNames: d,
                        }) =>
                            r().createElement(
                                'span',
                                { className: b()(wd.base, wd[`base__${a}`], c) },
                                r().createElement(
                                    'span',
                                    {
                                        className: b()(
                                            wd.value,
                                            wd[`value__${n}`],
                                            !u && wd.value__notEnough,
                                            null == d ? void 0 : d.value,
                                        ),
                                    },
                                    i && s > 0 && '+',
                                    r().createElement(Ht, { value: s, format: n === Bd.gold ? 'gold' : 'integral' }),
                                ),
                                r().createElement('span', {
                                    className: b()(wd.icon, wd[`icon__${n}-${a}`], null == d ? void 0 : d.icon),
                                }),
                                e &&
                                    r().createElement(
                                        'span',
                                        {
                                            className: b()(
                                                wd.stock,
                                                o && wd.stock__indent,
                                                t && wd.stock__interactive,
                                                null == d ? void 0 : d.stock,
                                            ),
                                        },
                                        r().createElement('span', {
                                            className: wd.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                        }),
                                        Boolean(o) && o,
                                    ),
                            ),
                    ),
                    Pd = {
                        base: 'ProductCardPrice_base_8e',
                        currencyValue: 'ProductCardPrice_currencyValue_87',
                        discount: 'ProductCardPrice_discount_1a',
                        discount__freeXP: 'ProductCardPrice_discount__freeXP_c9',
                        discount__credits: 'ProductCardPrice_discount__credits_f2',
                        discount__gold: 'ProductCardPrice_discount__gold_3d',
                        discount__xp: 'ProductCardPrice_discount__xp_11',
                        discount__crystal: 'ProductCardPrice_discount__crystal_8d',
                        discount__equipCoin: 'ProductCardPrice_discount__equipCoin_7e',
                        discountLine: 'ProductCardPrice_discountLine_c9',
                    },
                    Nd = { value: Pd.currencyValue },
                    Rd = (0, ee.Pi)(({ index: e, className: t }) => {
                        const a = Lc().model,
                            n = a.computes.product(e).price,
                            s = a.computes.priceConfig(e).hasDiscount;
                        return r().createElement(
                            'div',
                            { className: b()(Pd.base, t) },
                            s &&
                                r().createElement(
                                    'div',
                                    { className: b()(Pd.discount, Pd[`discount__${n.name}`]) },
                                    r().createElement(Ht, { value: n.value }),
                                    r().createElement('div', { className: Pd.discountLine }),
                                ),
                            r().createElement(kd, {
                                size: Sd.small,
                                type: n.name,
                                value: s ? n.discountValue : n.value,
                                classNames: Nd,
                            }),
                        );
                    }),
                    xd = 'ProductCardPurchased_base_ed',
                    Id = 'ProductCardPurchased_icon_4b',
                    Td = 'ProductCardPurchased_text_a6',
                    Ld = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: b()(xd, e) },
                            r().createElement('div', { className: Id }),
                            r().createElement('div', { className: Td }, R.strings.comp7.products.purchased()),
                        ),
                    Od = 'ProductCardReadyToRestore_base_11',
                    Md = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: b()(Od, e) },
                            r().createElement(ir, { text: R.strings.comp7.products.readyToRestore() }),
                        ),
                    $d = {
                        [ns.Vehicle]: 'comp_7_shop_carousel_click_tank',
                        [ns.Style3d]: 'comp_7_shop_carousel_click_style',
                        [ns.Reward]: 'comp_7_shop_carousel_click_module',
                        [ns.Base]: '',
                    },
                    Wd = (0, ee.Pi)(({ index: e, className: t, classNames: a }) => {
                        const n = Lc(),
                            s = n.model,
                            o = n.controls,
                            i = s.computes.product(e),
                            u = i.id,
                            l = i.state,
                            c = i.isNew,
                            d = i.rank,
                            m = i.type,
                            _ = i.tooltipId,
                            g = s.computes.priceConfig(e).hasDiscount,
                            E = s.computes.selectedProductIndex(),
                            p = e === E;
                        return r().createElement(
                            Or,
                            { args: { id: u, tooltipId: _ }, ignoreShowDelay: !0 },
                            r().createElement(
                                'div',
                                {
                                    className: b()(ld.base, p && ld.base__selected, ld[`base__${l}`], t),
                                    onClick: () => {
                                        p || (Y.playClick(), Q($d[m]), o.selectProduct(u), o.markProductSeen(u));
                                    },
                                },
                                r().createElement('div', {
                                    className: b()(ld.background, null == a ? void 0 : a.background),
                                    style: {
                                        backgroundImage: `url(${Ma(R.images.gui.maps.icons.comp7.products.cardsBackgrounds, d)})`,
                                    },
                                }),
                                r().createElement(
                                    'div',
                                    { className: ld.corners },
                                    r().createElement('div', {
                                        className: b()(
                                            ld.corner,
                                            ld.corner__top,
                                            ld.corner__left,
                                            null == a ? void 0 : a.corner,
                                        ),
                                    }),
                                    r().createElement('div', {
                                        className: b()(
                                            ld.corner,
                                            ld.corner__top,
                                            ld.corner__right,
                                            null == a ? void 0 : a.corner,
                                        ),
                                    }),
                                    r().createElement('div', {
                                        className: b()(
                                            ld.corner,
                                            ld.corner__bottom,
                                            ld.corner__left,
                                            null == a ? void 0 : a.corner,
                                        ),
                                    }),
                                    r().createElement('div', {
                                        className: b()(
                                            ld.corner,
                                            ld.corner__bottom,
                                            ld.corner__right,
                                            null == a ? void 0 : a.corner,
                                        ),
                                    }),
                                ),
                                r().createElement('div', { className: b()(ld.stroke, null == a ? void 0 : a.stroke) }),
                                r().createElement(md, {
                                    index: e,
                                    className: b()(ld.imageContainer, null == a ? void 0 : a.imageContainer),
                                }),
                                r().createElement('div', { className: ld.backgroundGradient }),
                                g && r().createElement('div', { className: ld.discountBackground }),
                                c &&
                                    r().createElement(
                                        'div',
                                        { className: b()(ld.notification, null == a ? void 0 : a.notification) },
                                        R.strings.comp7.products.newLabel(),
                                    ),
                                r().createElement(
                                    'div',
                                    { className: ld.container },
                                    r().createElement(Fd, { index: e, className: ld.name }),
                                    (() => {
                                        switch (l) {
                                            case rs.ReadyToRestore:
                                                return r().createElement(Md, { className: ld.bottomString });
                                            case rs.Purchased:
                                                return r().createElement(Ld, { className: ld.bottomString });
                                            default:
                                                return r().createElement(Rd, { index: e, className: ld.bottomString });
                                        }
                                    })(),
                                ),
                                l === rs.Locked && r().createElement('div', { className: ld.lock }),
                            ),
                        );
                    }),
                    Hd = 'RankSection_base_0d',
                    Ud = 'RankSection_dividerContainer_a1',
                    zd = 'RankSection_dividerContainer__right_f9',
                    Vd = 'RankSection_verticalDivider_ae',
                    Gd = 'RankSection_centralContainer_74',
                    qd = 'RankSection_rankDescription_49',
                    jd = 'RankSection_rankImage_90',
                    Qd = 'RankSection_rankString_23',
                    Yd = 'RankSection_horizontalDivider_eb',
                    Xd = 'RankSection_peak_d7',
                    Kd = 'RankSection_peak__right_26',
                    Zd = 'RankSection_line_e4',
                    Jd = ({ rank: e, seasonName: t, className: a }) =>
                        r().createElement(
                            'div',
                            { className: b()(Hd, a) },
                            r().createElement(
                                'div',
                                { className: Ud },
                                r().createElement('div', { className: Vd }),
                                r().createElement(
                                    'div',
                                    { className: Yd },
                                    r().createElement('div', { className: Xd }),
                                    r().createElement('div', { className: Zd }),
                                    r().createElement('div', { className: b()(Xd, Kd) }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: Gd },
                                r().createElement(La, { rank: e, size: Ia.x40, seasonName: t, className: jd }),
                                r().createElement(ir, {
                                    classMix: qd,
                                    text: R.strings.comp7.products.rankAccess(),
                                    binding: {
                                        rank: r().createElement(
                                            'div',
                                            { className: Qd },
                                            pa(R.strings.comp7.quotesWrapper(), { name: $a(e) }),
                                        ),
                                    },
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: b()(Ud, zd) },
                                r().createElement('div', { className: Vd }),
                                r().createElement(
                                    'div',
                                    { className: Yd },
                                    r().createElement('div', { className: Xd }),
                                    r().createElement('div', { className: Zd }),
                                    r().createElement('div', { className: b()(Xd, Kd) }),
                                ),
                            ),
                        ),
                    em = 'Carousel_dividersSections_e4',
                    tm = 'Carousel_section_9e',
                    am = 'Carousel_scrollItem_93',
                    nm = 'Carousel_scrollItem__group_a1',
                    rm = 'Carousel_selectedHighlight_12',
                    sm = 'Carousel_selectedHighlight__active_9c',
                    om = 'Carousel_productCard_90',
                    im = { areaWrapper: 'Carousel_areaWrapper_d4', areaContent: 'Carousel_areaContent_b4' },
                    um = (0, ee.Pi)(({ className: e }) => {
                        const t = Lc().model,
                            a = j().model,
                            s = S().mediaSize,
                            i = (0, n.useRef)(null),
                            u = t.computes.selectedProductIndex(),
                            l = t.computes.productsDividersConfig(),
                            c = ((e) => (e >= D.Medium ? 180 : e >= D.Small ? 150 : 120))(s),
                            d = ((e) => {
                                const t = (0, n.useMemo)(
                                    () => ({
                                        settings: {
                                            step: { type: 'proportional', factor: 8 },
                                            animationConfig: Object.assign({ tension: 120, friction: 20 }, e),
                                        },
                                    }),
                                    [e],
                                );
                                return zs(t);
                            })(),
                            m = $s(),
                            _ = s >= D.Large ? { width: 260, offset: 20 } : { width: 226, offset: 14 },
                            g = Tt((e) => {
                                m.run(() => {
                                    if (i && i.current) {
                                        const t = i.current.offsetLeft - o.O.view.remToPx(c);
                                        d.applyScroll(t, e);
                                    }
                                });
                            });
                        return (
                            Os(() => {
                                g();
                            }),
                            Ls(() => {
                                g({ immediate: !0, reset: !0 });
                            }, [g]),
                            r().createElement(
                                'div',
                                {
                                    style: {
                                        '--shopOffset': `${c}rem`,
                                        '--itemOffset': `${_.offset}rem`,
                                        '--groupOffset': 2 * _.offset + 'rem',
                                        '--itemWidth': `${_.width}rem`,
                                    },
                                },
                                r().createElement(
                                    ud,
                                    { api: d, className: e, classNames: im },
                                    r().createElement(
                                        'div',
                                        { className: em },
                                        l.recordsArray.map(([e, t]) =>
                                            r().createElement(
                                                'div',
                                                {
                                                    key: e,
                                                    className: tm,
                                                    style: { width: _.width * t + _.offset * (t - 1) + 'rem' },
                                                },
                                                r().createElement(Jd, { rank: e, seasonName: a.season.name.get() }),
                                            ),
                                        ),
                                    ),
                                    ca(t.computes.productsLength(), (e) =>
                                        r().createElement(
                                            'div',
                                            {
                                                key: e,
                                                className: b()(am, l.groupIndexesSet.has(e) && nm),
                                                onMouseEnter: u === e ? void 0 : Y.playHighlight,
                                                ref: u === e ? i : void 0,
                                            },
                                            r().createElement('div', { className: b()(rm, e === u && sm) }),
                                            r().createElement(Wd, { index: e, className: om }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    lm = 'ProductControls_control_a9',
                    cm = 'ProductControls_label_26',
                    dm = R.strings.comp7.controls,
                    mm = { label: cm },
                    _m = (0, ee.Pi)(() => {
                        const e = S().mediaSize,
                            t = Lc(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get(),
                            o = s.isVehiclesCompareEnabled,
                            i = s.vehicleCompareTooltipId,
                            u = a.computes.controlsConfig(),
                            l = u.hasAddToCompare,
                            c = u.hasPreview,
                            d = e >= D.Medium ? 'normal' : 'small';
                        return r().createElement(
                            r().Fragment,
                            null,
                            l &&
                                r().createElement(
                                    Or,
                                    { args: { tooltipId: i }, isEnabled: !o },
                                    r().createElement(
                                        'div',
                                        { className: lm },
                                        r().createElement(
                                            Zl,
                                            {
                                                type: 'compare',
                                                disabled: !o,
                                                onClick: n.addToVehicleCompare,
                                                size: d,
                                                classNames: mm,
                                            },
                                            dm.compare(),
                                        ),
                                    ),
                                ),
                            c &&
                                r().createElement(
                                    Zl,
                                    { type: 'preview', onClick: n.goToPreview, size: d, className: lm, classNames: mm },
                                    dm.preview(),
                                ),
                        );
                    }),
                    gm = 'PeaksContainer_base_73',
                    Em = 'PeaksContainer_venzel_74',
                    pm = 'PeaksContainer_venzel__right_39',
                    hm = 'PeaksContainer_icon_64',
                    vm = 'PeaksContainer_line_4e',
                    fm = 'PeaksContainer_content_17',
                    bm = ({ className: e, classNames: t, children: a }) => {
                        const s = n.Children.toArray(a).length;
                        return r().createElement(
                            'div',
                            { className: b()(gm, e) },
                            0 === s &&
                                r().createElement(
                                    'div',
                                    { className: b()(Em, null == t ? void 0 : t.venzel) },
                                    r().createElement('div', { className: b()(hm, null == t ? void 0 : t.icon) }),
                                    r().createElement('div', { className: b()(vm, null == t ? void 0 : t.line) }),
                                ),
                            s > 0 &&
                                r().createElement('div', { className: b()(fm, null == t ? void 0 : t.content) }, a),
                            r().createElement(
                                'div',
                                { className: b()(Em, null == t ? void 0 : t.venzel, pm) },
                                r().createElement('div', { className: b()(hm, null == t ? void 0 : t.icon) }),
                                r().createElement('div', { className: b()(vm, null == t ? void 0 : t.line) }),
                            ),
                        );
                    },
                    Cm = 'RankDiscount_base_4c',
                    Am = 'RankDiscount_godRays_31',
                    Dm = 'RankDiscount_rank_2c',
                    Fm = 'RankDiscount_disabledRankEmblem_e8',
                    wm = 'RankDiscount_lock_73',
                    Sm = 'RankDiscount_footer_30',
                    Bm = 'RankDiscount_rankAccessString_1d',
                    ym = 'RankDiscount_footer__maxRank_bf',
                    km = 'RankDiscount_valueContainer_db',
                    Pm = 'RankDiscount_discountBackground_df',
                    Nm = (0, ee.Pi)(({ index: e }) => {
                        const t = Lc().model,
                            a = t.root.get().maxAchievedRank,
                            n = t.computes.rankDiscount(e),
                            s = t.computes.selectedProduct(),
                            o = n.rank === a;
                        return n.rank === s.rank
                            ? r().createElement(
                                  'div',
                                  { className: b()(Bm) },
                                  r().createElement(ir, { text: R.strings.comp7.products.productAccess() }),
                              )
                            : n.value > 0
                              ? r().createElement(
                                    'div',
                                    { className: km },
                                    o && r().createElement('div', { className: Pm }),
                                    r().createElement(ir, {
                                        text: R.strings.comp7.products.discount(),
                                        binding: { discountPercentage: n.value },
                                    }),
                                )
                              : null;
                    }),
                    Rm = (0, ee.Pi)(({ index: e, className: t }) => {
                        const a = Lc().model,
                            n = j().model,
                            s = a.root.get(),
                            o = s.currentRank,
                            i = s.maxAchievedRank,
                            u = a.computes.rankDiscount(e),
                            l = u.rank === i,
                            c = !u.wasUnlocked;
                        return r().createElement(
                            'div',
                            { className: b()(Cm, t) },
                            u.rank === o &&
                                r().createElement(Eo, {
                                    className: Am,
                                    src: String(R.videos.comp7.godRaysNew_130x130()),
                                    autoplay: !0,
                                    loop: !0,
                                }),
                            r().createElement(
                                Kn,
                                {
                                    rank: u.rank,
                                    from: u.from,
                                    to: u.to,
                                    divisions: u.divisions,
                                    className: Dm,
                                    ignoreShowDelay: !0,
                                },
                                r().createElement(La, {
                                    seasonName: n.season.name.get(),
                                    size: Ia.x48,
                                    rank: u.rank,
                                    className: b()(c && Fm),
                                }),
                            ),
                            c && r().createElement('div', { className: wm }),
                            r().createElement(
                                'div',
                                { className: b()(Sm, l && ym) },
                                r().createElement(Nm, { index: e }),
                            ),
                        );
                    }),
                    xm = 'DiscountSection_base_53',
                    Im = 'DiscountSection_discounts_7f',
                    Tm = 'DiscountSection_rankDiscount_d7',
                    Lm = 'DiscountSection_discountDescription_92',
                    Om = (0, ee.Pi)(({ className: e }) => {
                        const t = Lc().model;
                        return r().createElement(
                            'div',
                            { className: b()(xm, e) },
                            r().createElement(bm, null, R.strings.comp7.products.discountSectionName()),
                            r().createElement(
                                'div',
                                { className: Im },
                                ca(t.computes.rankDiscountsLength(), (e) =>
                                    r().createElement(Rm, { key: e, index: e, className: Tm }),
                                ),
                            ),
                            r().createElement(mr, {
                                text: R.strings.comp7.products.discountDescription(),
                                classMix: Lm,
                            }),
                        );
                    }),
                    Mm = 'InProgressSection_base_e1',
                    $m = 'InProgressSection_content_3b',
                    Wm = 'InProgressSection_background_cb',
                    Hm = 'InProgressSection_highlight_d1',
                    Um = 'InProgressSection_state_9f',
                    zm = 'InProgressSection_inProgressString_ae',
                    Vm = 'InProgressSection_inProgressStringIcon_f4',
                    Gm = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: b()(Mm, e) },
                            r().createElement(bm, null),
                            r().createElement(
                                'div',
                                { className: $m },
                                r().createElement('div', { className: Wm }),
                                r().createElement('div', { className: Hm }),
                                r().createElement(
                                    'div',
                                    { className: Um },
                                    r().createElement(
                                        'div',
                                        { className: zm },
                                        r().createElement('div', { className: Vm }),
                                        R.strings.comp7.products.inProgress(),
                                    ),
                                ),
                            ),
                            r().createElement(bm, null),
                        ),
                    qm = ({ name: e, className: t }) =>
                        r().createElement('span', { className: t }, pa(R.strings.comp7.quotesWrapper(), { name: e })),
                    jm = {
                        base: 'VehicleRole_base_04',
                        base__22x22: 'VehicleRole_base__22x22_d4',
                        iconContainer: 'VehicleRole_iconContainer_0e',
                        icon: 'VehicleRole_icon_61',
                    };
                let Qm;
                !(function (e) {
                    e.x22 = '22x22';
                })(Qm || (Qm = {}));
                const Ym = R.images.gui.maps.icons.roleExp.roles,
                    Xm = R.strings.menu.roleExp,
                    Km = (0, n.memo)(
                        ({
                            role: e,
                            size: t = Qm.x22,
                            roleIconFolderPath: a = Ym.$dyn(`c_${t}`),
                            className: n,
                            classNames: s,
                        }) => {
                            const o = ha(e);
                            return r().createElement(
                                'div',
                                { className: b()(jm.base, jm[`base__${t}`], n) },
                                r().createElement(
                                    'div',
                                    { className: b()(jm.iconContainer, null == s ? void 0 : s.iconContainer) },
                                    r().createElement('div', {
                                        className: b()(jm.icon, null == s ? void 0 : s.icon),
                                        style: { backgroundImage: `url(${null == a ? void 0 : a.$dyn(o)})` },
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: b()(jm.label, null == s ? void 0 : s.label) },
                                    r().createElement(ir, {
                                        text: `${Xm.roleName.$dyn(o)}`,
                                        binding: { groupName: Xm.roleGroupName.$dyn(o) },
                                    }),
                                ),
                            );
                        },
                    ),
                    Zm = 'NationFlag_base_f2',
                    Jm = 'NationFlag_nationFlag_3e',
                    e_ = R.images.gui.maps.icons.eventBoards.flagsOverlay,
                    t_ = ({ nation: e, className: t }) =>
                        r().createElement(
                            'div',
                            { className: b()(Zm, t) },
                            r().createElement('div', {
                                className: Jm,
                                style: { backgroundImage: `url(${e_.$dyn(e)})` },
                            }),
                            r().createElement('div', {
                                className: Jm,
                                style: { backgroundImage: `url(${e_.$dyn(e)})` },
                            }),
                        ),
                    a_ = 'NameSection_base_7c',
                    n_ = 'NameSection_nationFlag_cc',
                    r_ = 'NameSection_vehicleNameContainer_98',
                    s_ = 'NameSection_productName_c6',
                    o_ = 'NameSection_style3dSubtitle_33',
                    i_ = 'NameSection_style3dSubtitleVehicleText_6a',
                    u_ = 'NameSection_vehicleRole_ea',
                    l_ = 'NameSection_vehicleRoleLabel_9a',
                    c_ = 'NameSection_vehicleDescription_80',
                    d_ = (e) => (e >= D.Medium ? gd.x64 : gd.x48),
                    m_ = R.strings.comp7.products,
                    __ = { label: l_ },
                    g_ = (0, ee.Pi)(({ className: e }) => {
                        const t = Lc().model,
                            a = S().mediaSize,
                            n = t.computes.selectedProduct(),
                            s = { id: n.id, tooltipId: n.tooltipId };
                        switch (n.type) {
                            case ns.Vehicle: {
                                const o = n.vehicleInfo,
                                    i = o.tier,
                                    u = o.name,
                                    l = o.type,
                                    c = o.isPremium,
                                    d = o.roleKey,
                                    m = o.nation,
                                    _ = o.vehicleCD;
                                return r().createElement(
                                    'div',
                                    { className: b()(a_, e) },
                                    r().createElement(t_, { nation: m, className: n_ }),
                                    r().createElement(
                                        'div',
                                        { className: r_ },
                                        r().createElement(
                                            Or,
                                            { args: s },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(hd, {
                                                    tier: i,
                                                    name: u,
                                                    type: l,
                                                    isPremium: c,
                                                    size: d_(a),
                                                    className: s_,
                                                }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        qe,
                                        {
                                            contentId:
                                                R.views.lobby.ranked.tooltips.RankedBattlesRolesTooltipView('resId'),
                                            args: { vehicleCD: _ },
                                        },
                                        r().createElement(
                                            'div',
                                            null,
                                            r().createElement(Km, { role: d, className: u_, classNames: __ }),
                                        ),
                                    ),
                                    t.computes.hasVehicleDescription() &&
                                        r().createElement(ir, { text: n.description, classMix: c_ }),
                                );
                            }
                            case ns.Style3d: {
                                const t = n.vehicleInfo,
                                    a = t.tier,
                                    o = t.name,
                                    i = t.type,
                                    u = t.isPremium;
                                return r().createElement(
                                    'div',
                                    { className: b()(a_, e) },
                                    r().createElement(
                                        Or,
                                        { args: s },
                                        r().createElement(
                                            'div',
                                            null,
                                            r().createElement(ir, {
                                                text: m_.style3d(),
                                                binding: { name: r().createElement(qm, { name: n.name }) },
                                                classMix: s_,
                                            }),
                                        ),
                                    ),
                                    r().createElement(ir, {
                                        text: R.strings.comp7.forVehicle(),
                                        binding: {
                                            vehicleName: r().createElement(hd, {
                                                name: o,
                                                tier: a,
                                                type: i,
                                                isPremium: u,
                                                className: i_,
                                            }),
                                        },
                                        classMix: o_,
                                    }),
                                );
                            }
                            case ns.Reward:
                                return r().createElement(
                                    'div',
                                    { className: b()(a_, e) },
                                    r().createElement(
                                        Or,
                                        { args: s },
                                        r().createElement('div', { className: s_ }, n.reward.label),
                                    ),
                                );
                            default:
                                return console.error(`Provide NameSection case for ProductTypes:${n.type}`), null;
                        }
                    }),
                    E_ = {
                        base: 'PriceSection_base_0e',
                        container: 'PriceSection_container_d3',
                        priceContainer: 'PriceSection_priceContainer_eb',
                        price: 'PriceSection_price_07',
                        limitString: 'PriceSection_limitString_58',
                        count: 'PriceSection_count_7e',
                        separator: 'PriceSection_separator_2f',
                        accessContainer: 'PriceSection_accessContainer_d6',
                        rankBackground: 'PriceSection_rankBackground_aa',
                        accessBlock: 'PriceSection_accessBlock_ff',
                        lock: 'PriceSection_lock_1b',
                        accessString: 'PriceSection_accessString_5b',
                        rankString: 'PriceSection_rankString_2a',
                        currencyValue: 'PriceSection_currencyValue_1c',
                        discount: 'PriceSection_discount_9a',
                        discount__freeXP: 'PriceSection_discount__freeXP_53',
                        discount__credits: 'PriceSection_discount__credits_25',
                        discount__gold: 'PriceSection_discount__gold_60',
                        discount__xp: 'PriceSection_discount__xp_4a',
                        discount__crystal: 'PriceSection_discount__crystal_73',
                        discount__equipCoin: 'PriceSection_discount__equipCoin_c7',
                        discountLine: 'PriceSection_discountLine_2e',
                        buttonContainer: 'PriceSection_buttonContainer_31',
                        button: 'PriceSection_button_33',
                    },
                    p_ = R.strings.comp7.products,
                    h_ = (0, ee.Pi)(() => {
                        const e = Lc(),
                            t = e.model,
                            a = e.controls,
                            n = t.computes.selectedProductIndex(),
                            s = t.computes.selectedProduct(),
                            o = t.computes.priceConfig(n).isEnough,
                            i = () => {
                                Q('comp_7_shop_purchase_preview'), a.purchase();
                            };
                        switch (s.state) {
                            case rs.Locked:
                                return r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: E_.separator }),
                                    r().createElement(
                                        'div',
                                        { className: E_.accessContainer },
                                        r().createElement('div', {
                                            className: E_.rankBackground,
                                            style: {
                                                backgroundImage: `url(${Ma(R.images.gui.maps.icons.comp7.products.accessBackgrounds, s.rank)})`,
                                            },
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: E_.accessBlock },
                                            r().createElement('div', { className: E_.lock }),
                                            r().createElement(ir, {
                                                text: R.strings.comp7.products.message.rankAccess(),
                                                binding: {
                                                    rank: r().createElement(
                                                        'span',
                                                        { className: E_.rankString },
                                                        Wa(s.rank),
                                                    ),
                                                },
                                                classMix: E_.accessString,
                                            }),
                                        ),
                                    ),
                                );
                            case rs.ReadyToPurchase:
                                return r().createElement(
                                    Xe,
                                    { isEnabled: !o, body: p_.message.notEnough() },
                                    r().createElement(
                                        'div',
                                        { className: E_.buttonContainer },
                                        r().createElement(
                                            Et,
                                            { type: 'main', onClick: i, mixClass: E_.button, disabled: !o },
                                            p_.actions.buy(),
                                        ),
                                    ),
                                );
                            default:
                                return (
                                    console.error(
                                        `ActionsContainer in PriceSection was called for unappropriated state ${s.state}`,
                                    ),
                                    null
                                );
                        }
                    }),
                    v_ = { value: E_.currencyValue },
                    f_ = (0, ee.Pi)(({ className: e }) => {
                        const t = Lc().model,
                            a = t.computes.selectedProduct(),
                            n = t.computes.selectedProductIndex(),
                            s = t.computes.priceConfig(n),
                            o = s.hasDiscount,
                            i = s.isEnough;
                        return r().createElement(
                            'div',
                            { className: b()(E_.base, e) },
                            r().createElement(bm, null, R.strings.comp7.products.priceSectionName()),
                            r().createElement(
                                'div',
                                { className: E_.container },
                                r().createElement(
                                    'div',
                                    { className: E_.priceContainer },
                                    r().createElement(
                                        'div',
                                        { className: E_.price },
                                        o &&
                                            r().createElement(
                                                'div',
                                                { className: b()(E_.discount, E_[`discount__${a.price.name}`]) },
                                                r().createElement(Ht, { value: a.price.value }),
                                                r().createElement('div', { className: E_.discountLine }),
                                            ),
                                        r().createElement(kd, {
                                            size: Sd.large,
                                            type: a.price.name,
                                            value: o ? a.price.discountValue : a.price.value,
                                            isEnough: i,
                                            classNames: v_,
                                        }),
                                    ),
                                    t.computes.hasLimitedQuantity() &&
                                        r().createElement(
                                            'div',
                                            { className: E_.limitString },
                                            r().createElement(ir, {
                                                text: R.strings.comp7.products.limitedQuantitySeason(),
                                                binding: {
                                                    count: r().createElement(
                                                        'span',
                                                        { className: E_.count },
                                                        a.limitedQuantity,
                                                    ),
                                                },
                                            }),
                                        ),
                                ),
                                r().createElement(h_, null),
                            ),
                        );
                    }),
                    b_ = 'PurchasedSection_base_4c',
                    C_ = 'PurchasedSection_content_10',
                    A_ = 'PurchasedSection_state_ae',
                    D_ = 'PurchasedSection_purchasedString_40',
                    F_ = 'PurchasedSection_purchasedStringIcon_00',
                    w_ = 'PurchasedSection_quantityOfferString_eb',
                    S_ = 'PurchasedSection_background_34',
                    B_ = 'PurchasedSection_highlight_37',
                    y_ = 'PurchasedSection_buttonContainer_f7',
                    k_ = 'PurchasedSection_button_fd',
                    P_ = R.strings.comp7.products,
                    N_ = (0, ee.Pi)(() => {
                        const e = Lc(),
                            t = e.model,
                            a = e.controls,
                            n = t.computes.selectedProduct();
                        switch (n.type) {
                            case ns.Vehicle:
                                return n.canGoToHangar
                                    ? r().createElement(
                                          'div',
                                          { className: y_ },
                                          r().createElement(
                                              Et,
                                              { onClick: a.goToHangar, mixClass: k_ },
                                              P_.actions.toHangar(),
                                          ),
                                      )
                                    : null;
                            case ns.Style3d: {
                                const e = !n.canGoToCustomization;
                                return r().createElement(
                                    Xe,
                                    {
                                        isEnabled: e,
                                        header: P_.customizationUnavailable.title(),
                                        body: P_.customizationUnavailable.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        { className: y_ },
                                        r().createElement(
                                            Et,
                                            { onClick: a.goToCustomization, mixClass: k_, disabled: e },
                                            P_.actions.toCustomization(),
                                        ),
                                    ),
                                );
                            }
                            default:
                                return null;
                        }
                    }),
                    R_ = R.strings.comp7.products,
                    x_ = (0, ee.Pi)(({ className: e }) => {
                        const t = Lc().model.computes.selectedProduct();
                        return r().createElement(
                            'div',
                            { className: b()(b_, e) },
                            r().createElement(bm, null),
                            r().createElement(
                                'div',
                                { className: C_ },
                                r().createElement('div', { className: S_ }),
                                r().createElement('div', { className: B_ }),
                                r().createElement(
                                    'div',
                                    { className: A_ },
                                    r().createElement(
                                        'div',
                                        { className: D_ },
                                        r().createElement('div', { className: F_ }),
                                        R.strings.comp7.products.purchased(),
                                    ),
                                    t.type === ns.Reward &&
                                        r().createElement(
                                            'div',
                                            { className: w_ },
                                            pa(R_.limitedQuantitySeason(), { count: t.limitedQuantity }),
                                        ),
                                ),
                            ),
                            r().createElement(bm, null),
                            r().createElement(N_, null),
                        );
                    }),
                    I_ = 'ReadyToRestoreSection_base_47',
                    T_ = 'ReadyToRestoreSection_content_1e',
                    L_ = 'ReadyToRestoreSection_description_91',
                    O_ = 'ReadyToRestoreSection_buttonContainer_81',
                    M_ = 'ReadyToRestoreSection_button_82',
                    $_ = (0, ee.Pi)(({ className: e }) => {
                        const t = Lc().controls;
                        return r().createElement(
                            'div',
                            { className: b()(I_, e) },
                            r().createElement(bm, null),
                            r().createElement(
                                'div',
                                { className: T_ },
                                r().createElement(
                                    'div',
                                    { className: L_ },
                                    r().createElement(ir, {
                                        text: R.strings.comp7.products.readyToRestoreDescription(),
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: O_ },
                                    r().createElement(
                                        Et,
                                        {
                                            type: 'primary',
                                            onClick: () => {
                                                Q('comp_7_shop_purchase_preview'), t.restore();
                                            },
                                            mixClass: M_,
                                        },
                                        R.strings.comp7.products.actions.restore(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    W_ = 'ProductDetails_base_21',
                    H_ = 'ProductDetails_section_4c',
                    U_ = [rs.Locked, rs.ReadyToPurchase],
                    z_ = (0, ee.Pi)(({ className: e }) => {
                        const t = Lc().model.computes.selectedProduct();
                        return r().createElement(
                            'div',
                            { className: b()(W_, e) },
                            r().createElement(g_, { className: H_ }),
                            U_.includes(t.state) && r().createElement(Om, { className: H_ }),
                            (() => {
                                switch (t.state) {
                                    case rs.Purchased:
                                        return r().createElement(x_, { className: H_ });
                                    case rs.InProgress:
                                        return r().createElement(Gm, { className: H_ });
                                    case rs.ReadyToRestore:
                                        return r().createElement($_, { className: H_ });
                                    default:
                                        return r().createElement(f_, { className: H_ });
                                }
                            })(),
                        );
                    }),
                    V_ = { from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 300 } },
                    G_ = {
                        from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' },
                        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
                        config: { duration: 100 },
                    };
                function q_() {
                    return (
                        (q_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        q_.apply(this, arguments)
                    );
                }
                const j_ = (e) => (e >= D.Large ? rl.S600x450 : e >= D.Small ? rl.S400x300 : rl.S296x222),
                    Q_ = (0, ee.Pi)(() => {
                        const e = Lc().model,
                            t = S().mediaSize,
                            a = (0, xe.useSpring)(ct),
                            s = e.computes.selectedProduct(),
                            o = e.computes.controlsConfig().hasControls,
                            i = (0, xe.useSpring)(() => V_),
                            u = i[0],
                            l = i[1],
                            c = (0, xe.useSpring)(() => G_),
                            d = c[0],
                            m = c[1];
                        return (
                            (0, n.useLayoutEffect)(() => {
                                m.set(G_.from), l.set(V_.from);
                            }, [m, l, s.id, s.state]),
                            (0, n.useEffect)(() => {
                                m.start(Object.assign({}, G_, { delay: 300 })),
                                    l.start(Object.assign({}, V_, { delay: 100 }));
                            }, [m, l, s.id, s.state]),
                            r().createElement(
                                r().Fragment,
                                null,
                                s.type === ns.Reward &&
                                    r().createElement(
                                        'div',
                                        { className: ed },
                                        r().createElement('div', { className: ad }),
                                        r().createElement(
                                            xe.animated.div,
                                            { style: u },
                                            r().createElement(
                                                Al,
                                                q_({}, Ol({ reward: s.reward, size: j_(t) }), {
                                                    tooltipArgs: fl({ tooltipId: s.tooltipId, id: s.id }),
                                                    className: td,
                                                }),
                                            ),
                                        ),
                                    ),
                                o &&
                                    r().createElement(
                                        xe.animated.div,
                                        { style: d, className: nd },
                                        r().createElement(_m, { key: s.id }),
                                    ),
                                r().createElement(
                                    xe.animated.div,
                                    { style: u, className: rd },
                                    r().createElement(z_, { className: sd }),
                                ),
                                r().createElement(
                                    xe.animated.div,
                                    { style: a },
                                    r().createElement(um, { className: od }),
                                ),
                            )
                        );
                    }),
                    Y_ = R.strings.comp7.page.heading,
                    X_ = { activeSeasonState: Zc },
                    K_ = { [Nc.Initial]: () => r().createElement('div', null), [Nc.Success]: Q_, [Nc.Error]: jc },
                    Z_ = (0, ee.Pi)(() => {
                        const e = (0, xe.useSpring)(ct),
                            t = Lc(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get().shopState,
                            o = a.computes.hasSceneWrapper(),
                            i = K_[s];
                        return i
                            ? r().createElement(
                                  'div',
                                  { className: Qc },
                                  o &&
                                      r().createElement(
                                          'div',
                                          { className: Yc },
                                          r().createElement(Wc, {
                                              moveSpace: n.moveSpace,
                                              onMouseOver3dScene: n.mouseOver3dScene,
                                          }),
                                      ),
                                  s !== Nc.Error && r().createElement('div', { className: Xc }),
                                  r().createElement(
                                      'div',
                                      { className: Kc },
                                      r().createElement(lt, { className: se }, Y_.shop()),
                                      r().createElement(jr, { classNames: X_ }),
                                  ),
                                  r().createElement(
                                      xe.animated.div,
                                      { className: Jc, style: e },
                                      r().createElement(i, null),
                                  ),
                              )
                            : (console.error('Unreachable code: ShopPage.tsx'), null);
                    });
                let J_, eg;
                !(function (e) {
                    (e.LockedByNoXVehicles = 'lockedByNoXVehicles'),
                        (e.LockedByInactiveSeason = 'lockedByInactiveSeason'),
                        (e.LockedByPreviousQuest = 'lockedByPreviousQuest'),
                        (e.Active = 'active'),
                        (e.Completed = 'completed');
                })(J_ || (J_ = {})),
                    (function (e) {
                        (e.NotStarted = 'notStarted'),
                            (e.Active = 'active'),
                            (e.LastWeek = 'lastWeek'),
                            (e.Finished = 'finished');
                    })(eg || (eg = {}));
                const tg = [J_.LockedByNoXVehicles, J_.LockedByInactiveSeason, J_.LockedByPreviousQuest],
                    ag = V()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    questCards: e.array('questCards'),
                                    progressPoints: e.array('progressPoints'),
                                },
                                a = (0, _e.Om)(
                                    (e) => {
                                        const a = he(t.questCards.get(), e);
                                        if (!a) throw new Error(`Unexpected card index: ${e}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: $ },
                                ),
                                n = (0, _e.Om)(
                                    (e, t) => {
                                        const n = a(e).rewards;
                                        return Ml({ rewards: n, size: t });
                                    },
                                    { equals: $ },
                                ),
                                r = (0, _e.Om)(() =>
                                    (function (e, t) {
                                        if (Array.isArray(e)) return e.every(t);
                                        for (let a = 0; a < e.length; a++) if (!t(ve(e, a), a, e)) return !1;
                                        return !0;
                                    })(t.questCards.get(), (e) => e.state === J_.Completed),
                                ),
                                s = (0, _e.Om)(() => t.root.get().seasonState === eg.LastWeek && r()),
                                o = (0, _e.Om)((e) => tg.includes(a(e).state));
                            return Object.assign({}, t, {
                                computes: {
                                    questCardsLength: (0, _e.Om)(() => t.questCards.get().length),
                                    questCard: a,
                                    questRewards: n,
                                    isQuestLocked: o,
                                    isQuestsCompletedOnLastWeek: s,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            animationStart: e.createCallbackNoArgs('onAnimationStart'),
                            animationEnd: e.createCallbackNoArgs('onAnimationEnd'),
                        }),
                    ),
                    ng = ag[0],
                    rg = ag[1],
                    sg = 'Progress_base_d5',
                    og = 'Progress_counter_3b',
                    ig = 'Progress_current_fd',
                    ug = 'Progress_progressBar_d2',
                    lg = R.strings.comp7.weeklyQuests.card.progress,
                    cg = ({ current: e, total: t, isDisabled: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: b()(sg, n) },
                            r().createElement(ir, {
                                classMix: og,
                                text: lg.counter(),
                                binding: {
                                    current: r().createElement(
                                        'div',
                                        { className: ig },
                                        r().createElement(Ht, { value: e }),
                                    ),
                                    total: r().createElement(Ht, { value: t }),
                                },
                            }),
                            r().createElement(
                                'div',
                                { className: ug },
                                r().createElement(ui, { size: Bo.Small, value: e, maxValue: t, disabled: a }),
                            ),
                        ),
                    dg = {
                        '--pageContentWidth': '78vw',
                        base: 'QuestCard_base_27',
                        highlightContainer: 'QuestCard_highlightContainer_f8',
                        highlight: 'QuestCard_highlight_08',
                        glowContainer: 'QuestCard_glowContainer_3c',
                        glow: 'QuestCard_glow_3c',
                        glowAppearance: 'QuestCard_glowAppearance_e0',
                        icon: 'QuestCard_icon_81',
                        base__completed: 'QuestCard_base__completed_e3',
                        base__locked: 'QuestCard_base__locked_e9',
                        content: 'QuestCard_content_36',
                        progress: 'QuestCard_progress_63',
                        description: 'QuestCard_description_ba',
                        reward: 'QuestCard_reward_d5',
                        status: 'QuestCard_status_26',
                        fadeIn: 'QuestCard_fadeIn_f7',
                        fadeInThreeQuarters: 'QuestCard_fadeInThreeQuarters_bc',
                        fadeInHalf: 'QuestCard_fadeInHalf_c8',
                        fadeOut: 'QuestCard_fadeOut_c3',
                        fadeInWithScale: 'QuestCard_fadeInWithScale_ef',
                        slideUp: 'QuestCard_slideUp_42',
                        scale: 'QuestCard_scale_e2',
                        raysAppearance: 'QuestCard_raysAppearance_4c',
                        rotate: 'QuestCard_rotate_72',
                        'reverse-rotate': 'QuestCard_reverse-rotate_61',
                        highlightAppearance: 'QuestCard_highlightAppearance_b8',
                        blink: 'QuestCard_blink_05',
                        slideUpIn: 'QuestCard_slideUpIn_f8',
                    },
                    mg = {
                        base: 'Status_base_78',
                        base__locked: 'Status_base__locked_1f',
                        icon: 'Status_icon_9c',
                        base__completed: 'Status_base__completed_66',
                        text: 'Status_text_b3',
                    },
                    _g = R.strings.comp7.weeklyQuests.card,
                    gg = (0, ee.Pi)(({ index: e, className: t }) => {
                        const a = rg().model,
                            n = a.computes.questCard(e).state,
                            s = a.computes.isQuestLocked(e);
                        return r().createElement(
                            Xe,
                            {
                                isEnabled: s,
                                header: _g.statusLockedTooltip.header(),
                                body: String(_g.statusLockedTooltip.body.$dyn(n)),
                            },
                            r().createElement(
                                'div',
                                { className: b()(mg.base, s ? mg.base__locked : mg[`base__${n}`], t) },
                                r().createElement('div', { className: mg.icon }),
                                r().createElement(
                                    'div',
                                    { className: mg.text },
                                    s ? _g.status.locked() : _g.status.$dyn(n),
                                ),
                            ),
                        );
                    }),
                    Eg = [J_.LockedByNoXVehicles, J_.LockedByInactiveSeason, J_.LockedByPreviousQuest],
                    pg = (e) => (Eg.includes(e) ? 'locked' : e),
                    hg = (0, ee.Pi)(({ index: e }) => {
                        const t = rg().model,
                            a = t.computes.questCard(e),
                            n = a.state,
                            s = a.currentProgress,
                            o = a.totalProgress,
                            i = a.description,
                            u = a.iconKey,
                            l = S().mediaSize > D.Large ? rl.Big : rl.Small;
                        return r().createElement(
                            'div',
                            { className: b()(dg.base, dg[`base__${pg(n)}`]) },
                            n === J_.Active &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: dg.highlightContainer },
                                        r().createElement('div', { className: dg.highlight }),
                                    ),
                                    r().createElement(fo, {
                                        className: dg.glowContainer,
                                        classNames: { glow: dg.glow },
                                    }),
                                ),
                            r().createElement('div', {
                                className: dg.icon,
                                style: { backgroundImage: `url(R.images.gui.maps.icons.comp7.weekly_quests.${u})` },
                            }),
                            r().createElement(
                                'div',
                                { className: dg.content },
                                r().createElement(cg, {
                                    current: s,
                                    total: o,
                                    isDisabled: n !== J_.Active,
                                    className: dg.progress,
                                }),
                                r().createElement('div', { className: dg.description }, i),
                                r().createElement(yl, {
                                    data: t.computes.questRewards(e, l),
                                    size: l,
                                    rewardItemClassMix: dg.reward,
                                }),
                            ),
                            r().createElement(gg, { index: e, className: dg.status }),
                        );
                    }),
                    vg = 'QuestsList_base_a9',
                    fg = 'QuestsList_card_f7',
                    bg = {
                        base: 'Separator_base_f3',
                        line: 'Separator_line_03',
                        line__top: 'Separator_line__top_ba',
                        line__bottom: 'Separator_line__bottom_95',
                        arrowContainer: 'Separator_arrowContainer_f9',
                        arrow: 'Separator_arrow_3d',
                        base__highlighted: 'Separator_base__highlighted_6a',
                    };
                let Cg;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Highlighted = 'highlighted');
                })(Cg || (Cg = {}));
                const Ag = (0, n.memo)(function ({ arrowType: e }) {
                        return e
                            ? r().createElement(
                                  'div',
                                  { className: b()(bg.base, bg[`base__${e}`]) },
                                  r().createElement('div', { className: b()(bg.line, bg.line__top) }),
                                  r().createElement(
                                      'div',
                                      { className: bg.arrowContainer },
                                      r().createElement('div', { className: bg.arrow }),
                                  ),
                                  r().createElement('div', { className: b()(bg.line, bg.line__bottom) }),
                              )
                            : r().createElement('div', { className: bg.line });
                    }),
                    Dg = (0, ee.Pi)(({ className: e }) => {
                        const t = rg().model.computes;
                        return r().createElement(
                            'div',
                            { className: b()(vg, e) },
                            r().createElement(Ag, null),
                            ca(t.questCardsLength(), (e) =>
                                r().createElement(
                                    n.Fragment,
                                    { key: e },
                                    e > 0 &&
                                        r().createElement(Ag, {
                                            arrowType: t.isQuestLocked(e) ? Cg.Normal : Cg.Highlighted,
                                        }),
                                    r().createElement('div', { className: fg }, r().createElement(hg, { index: e })),
                                ),
                            ),
                            r().createElement(Ag, null),
                        );
                    });
                let Fg, wg;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(Fg || (Fg = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(wg || (wg = {}));
                const Sg = () => {},
                    Bg = (e = 0, t, a = 0, r = Sg) => {
                        const s = (0, n.useState)(e),
                            o = s[0],
                            i = s[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    i(e);
                                    const n = Date.now(),
                                        s = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== a && t <= a ? (i(a), r && r(), clearInterval(s)) : i(t);
                                            },
                                            1e3 * (t || (e > 120 ? vr : 1)),
                                        );
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [e, t, a, r]),
                            o
                        );
                    };
                ae.Sw.instance;
                let yg;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(yg || (yg = {}));
                ae.Sw.instance;
                const kg = Bg,
                    Pg = 'Countdown_base_fe',
                    Ng = 'Countdown_icon_8b',
                    Rg = 'Countdown_description_8d',
                    xg = (e) => e.toString().padStart(2, '0'),
                    Ig = (e, t) => {
                        switch (t) {
                            case wg.Description:
                                return ((e, t = !0) =>
                                    e.days > 7 && t
                                        ? Ea(R.strings.common.duration.days(), { days: e.days })
                                        : e.days >= 1
                                          ? 0 === e.hours
                                              ? Ea(R.strings.common.duration.days(), { days: e.days })
                                              : `${Ea(R.strings.common.duration.days(), { days: e.days })} ${Ea(R.strings.common.duration.hours(), { hours: e.hours })}`
                                          : e.hours >= 1
                                            ? 0 === e.minutes
                                                ? Ea(R.strings.common.duration.hours(), { hours: e.hours })
                                                : `${Ea(R.strings.common.duration.hours(), { hours: e.hours })} ${Ea(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                            : Ea(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(e);
                            case wg.Short:
                                return `${xg(e.minutes)}:${xg(e.seconds)}`;
                            case wg.Long:
                                return `${xg(e.hours)}:${xg(e.minutes)}:${xg(e.seconds)}`;
                            case wg.Extended:
                                return `${Ea(R.strings.common.duration.days(), { days: e.days })} | ${xg(e.hours)}:${xg(e.minutes)}:${xg(e.seconds)}`;
                        }
                    },
                    Tg = R.images.gui.maps.icons.components.countdown,
                    Lg = (e, t) => {
                        const a = 2 === t ? Tg.big : Tg;
                        switch (e) {
                            case Fg.Timer:
                                return a.clock();
                            case Fg.Countdown:
                                return a.hourglass();
                            case Fg.Cooldown:
                                return a.lock();
                        }
                    },
                    Og = (0, n.memo)(
                        ({
                            duration: e,
                            icon: t = Fg.Timer,
                            style: a = wg.Description,
                            onTimeReached: s,
                            className: i = '',
                            classNames: u = {},
                        }) => {
                            const l = a !== wg.Description ? 1 : void 0,
                                c = kg(e, l),
                                d = (() => {
                                    const e = (0, n.useState)(o.O.view.getScale()),
                                        t = e[0],
                                        a = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                a(o.O.view.getScale());
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
                                })();
                            s && s[c] && s[c]();
                            const m = Ig(
                                (function (e = 0) {
                                    let t = e;
                                    const a = Math.trunc(t / br);
                                    t -= a * br;
                                    const n = Math.trunc(t / fr);
                                    t -= n * fr;
                                    const r = Math.trunc(t / vr);
                                    return (t -= r * vr), { days: a, hours: n, minutes: r, seconds: t };
                                })(c),
                                a,
                            );
                            return r().createElement(
                                'div',
                                { className: b()(Pg, i) },
                                t !== Fg.None &&
                                    r().createElement('div', {
                                        className: b()(Ng, u.icon),
                                        style: { backgroundImage: `url('${Lg(t, d)}')` },
                                    }),
                                r().createElement('div', { className: b()(Rg, u.text) }, m),
                            );
                        },
                    ),
                    Mg = 'ResetStatus_base_25',
                    $g = 'ResetStatus_text_83',
                    Wg = 'ResetStatus_timer_0b',
                    Hg = 'ResetStatus_icon_9c',
                    Ug = R.strings.comp7.weeklyQuests.resetStatus,
                    zg = { text: Wg, icon: Hg },
                    Vg = (0, ee.Pi)(({ className: e }) => {
                        const t = rg().model,
                            a = t.root.get(),
                            n = a.seasonState,
                            s = a.resetTimeLeft;
                        return n === eg.Finished || t.computes.isQuestsCompletedOnLastWeek()
                            ? r().createElement('div', { className: Mg }, r().createElement(ir, { text: Ug.ended() }))
                            : n === eg.LastWeek
                              ? r().createElement(
                                    'div',
                                    { className: Mg },
                                    r().createElement(ir, { text: Ug.lastWeek() }),
                                )
                              : r().createElement(
                                    'div',
                                    { className: b()(Mg, e) },
                                    r().createElement(ir, {
                                        text: Ug.timer(),
                                        binding: { countdown: r().createElement(Og, { duration: s, classNames: zg }) },
                                        classMix: $g,
                                    }),
                                );
                    }),
                    Gg = 'TokenPoint_base_fb',
                    qg = 'TokenPoint_tokenValue_b8',
                    jg = 'TokenPoint_tokenValue__hide_6e',
                    Qg = 'TokenPoint_tokenIcon_0d',
                    Yg = 'TokenPoint_serif_c1',
                    Xg = 'TokenPoint_rewards_46',
                    Kg = 'TokenPoint_rewards__passed_97',
                    Zg = 'TokenPoint_reward_85',
                    Jg = rl.Small,
                    eE = R.strings.tooltips.awardItem.comp7TokenWeeklyReward,
                    tE = (0, ee.Pi)(({ tokenValue: e, rewards: t }) => {
                        const a = rg().model.root.get().currentTokenValue;
                        return r().createElement(
                            'div',
                            { className: Gg },
                            r().createElement(
                                Xe,
                                { header: eE.header(), body: eE.body(), isEnabled: a !== e },
                                r().createElement(
                                    'div',
                                    { className: b()(qg, a === e && jg) },
                                    e,
                                    r().createElement('div', { className: Qg }),
                                ),
                            ),
                            r().createElement('div', { className: Yg }),
                            t &&
                                r().createElement(yl, {
                                    data: Ml({ rewards: t, size: Jg }),
                                    size: Jg,
                                    classMix: b()(Xg, a >= e && Kg),
                                    rewardItemClassMix: Zg,
                                }),
                        );
                    }),
                    aE = 'TokenProgress_base_d7',
                    nE = 'TokenProgress_content_8d',
                    rE = 'TokenProgress_progress_7f',
                    sE = 'TokenProgress_progressBar_56',
                    oE = 'TokenProgress_points_75',
                    iE = 'TokenProgress_point_55',
                    uE = 'TokenProgress_currentTokenValue_44',
                    lE = 'TokenProgress_tokenIcon_5e',
                    cE = 'TokenProgress_finalRewards_7d',
                    dE = 'TokenProgress_finalRewards__passed_ac',
                    mE = 'TokenProgress_description_b8',
                    _E = 'TokenProgress_description__done_75',
                    gE = 'TokenProgress_iconDone_8f',
                    EE = (e, t) => ({ left: `${Math.round((100 / e) * t)}%` }),
                    pE = rl.Big,
                    hE = R.strings.comp7.weeklyQuests.tokenProgress.description,
                    vE = R.strings.tooltips.awardItem.comp7TokenWeeklyReward,
                    fE = (0, ee.Pi)(({ className: e }) => {
                        var t;
                        const a = rg(),
                            s = a.model,
                            o = a.controls,
                            i = s.root.get(),
                            u = i.previousTokenValue,
                            l = i.currentTokenValue,
                            c = s.progressPoints.get(),
                            d = he(c, c.length - 1),
                            m = null != (t = null == d ? void 0 : d.count) ? t : 0,
                            _ = l === m,
                            g = (0, n.useRef)(Lo.Idle),
                            E = (0, xe.useSpring)({ from: EE(m, u), to: EE(m, l) });
                        return r().createElement(
                            'div',
                            { className: b()(aE, e) },
                            r().createElement(
                                'div',
                                { className: nE },
                                r().createElement(
                                    'div',
                                    { className: rE },
                                    r().createElement(
                                        'div',
                                        { className: sE },
                                        r().createElement(ui, {
                                            value: l,
                                            maxValue: m,
                                            deltaFrom: u,
                                            onChangeAnimationState: (e) => {
                                                (g.current = e), e === Lo.Shrink && o.animationStart();
                                            },
                                            onEndAnimation: o.animationEnd,
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: oE },
                                        r().createElement(
                                            'div',
                                            { className: iE },
                                            r().createElement(tE, { tokenValue: 0 }),
                                        ),
                                        be(c, (e, t) =>
                                            r().createElement(
                                                'div',
                                                { key: t, className: iE, style: EE(m, e.count) },
                                                r().createElement(tE, {
                                                    tokenValue: e.count,
                                                    rewards: t === c.length - 1 ? void 0 : e.rewards,
                                                }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        Xe,
                                        { header: vE.header(), body: vE.body() },
                                        r().createElement(
                                            xe.animated.div,
                                            { className: uE, style: E },
                                            l,
                                            r().createElement('div', { className: lE }),
                                        ),
                                    ),
                                ),
                                d &&
                                    r().createElement(yl, {
                                        data: Ml({ rewards: d.rewards, size: pE }),
                                        size: pE,
                                        classMix: b()(cE, l >= m && dE),
                                    }),
                            ),
                            r().createElement(
                                'div',
                                { className: b()(mE, _ && _E) },
                                _
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement('div', { className: gE }),
                                          hE.done(),
                                      )
                                    : hE.normal(),
                            ),
                        );
                    }),
                    bE = 'WeeklyQuestsPage_base_6c',
                    CE = 'WeeklyQuestsPage_content_cc',
                    AE = 'WeeklyQuestsPage_questsList_78',
                    DE = 'WeeklyQuestsPage_progression_25',
                    FE = 'WeeklyQuestsPage_resetStatus_8a',
                    wE = () => {
                        const e = (0, xe.useSpring)(ct);
                        return r().createElement(
                            'div',
                            { className: bE },
                            r().createElement(lt, { className: se }, R.strings.comp7.page.heading.weeklyQuests()),
                            r().createElement(jr, null),
                            r().createElement(Vg, { className: FE }),
                            r().createElement(
                                xe.animated.div,
                                { className: CE, style: e },
                                r().createElement(Dg, { className: AE }),
                                r().createElement(fE, { className: DE }),
                            ),
                        );
                    };
                const SE = {
                        inactiveProgression: { name: 'inactiveProgression', delay: 600 },
                        firstStageSeasonPoints: { name: 'firstStageSeasonPoints', delay: 100 },
                        firstStage: { name: 'firstStage', delay: 800 },
                        secondStageSeasonPoints: { name: 'secondStageSeasonPoints', delay: 100 },
                        secondStage: { name: 'secondStage', delay: 800 },
                        thirdStageSeasonPoints: { name: 'thirdStageSeasonPoints', delay: 100 },
                        thirdStage: { name: 'thirdStage', delay: 800 },
                        fourthStageSeasonPoints: { name: 'fourthStageSeasonPoints', delay: 100 },
                        fourthStage: { name: 'fourthStage', delay: 800 },
                        fifthStageSeasonPoints: { name: 'fifthStageSeasonPoints', delay: 100 },
                        fifthStage: { name: 'fifthStage', delay: 800 },
                        sixthStageSeasonPoints: { name: 'sixthStageSeasonPoints', delay: 100 },
                        sixthStage: { name: 'sixthStage', delay: 800 },
                        showLegend: { name: 'showLegend', delay: 700 },
                        transitionToRealData: { name: 'transitionToRealData', delay: 1e3 },
                        realData: { name: 'realData', delay: 0 },
                    },
                    BE = [SE.firstStage, SE.secondStage, SE.thirdStage, SE.fourthStage, SE.fifthStage, SE.sixthStage],
                    yE = BE.map((e) => e.name),
                    kE = (0, n.createContext)(null),
                    PE = () => {
                        const e = (0, n.useContext)(kE);
                        if (null === e)
                            throw new Error(
                                'useAnimationApi was called in component, which is not wrapped in YearlyRewardsPageAnimationContext',
                            );
                        return e;
                    },
                    NE =
                        ((RE = {
                            steps: [
                                SE.inactiveProgression,
                                SE.firstStageSeasonPoints,
                                SE.firstStage,
                                SE.secondStageSeasonPoints,
                                SE.secondStage,
                                SE.thirdStageSeasonPoints,
                                SE.thirdStage,
                                SE.fourthStageSeasonPoints,
                                SE.fourthStage,
                                SE.fifthStageSeasonPoints,
                                SE.fifthStage,
                                SE.sixthStageSeasonPoints,
                                SE.sixthStage,
                                SE.showLegend,
                                SE.transitionToRealData,
                                SE.realData,
                            ],
                        }),
                        () => {
                            const e = RE.steps,
                                t = RE.autoStart,
                                a = void 0 === t || t,
                                r = (0, n.useRef)(null),
                                s = (0, n.useRef)('idle'),
                                o = xt(),
                                i = (function () {
                                    const e = (0, n.useRef)(0);
                                    return (
                                        Ms(() => {
                                            window.clearTimeout(e.current);
                                        }),
                                        (0, n.useMemo)(
                                            () => ({
                                                run: (t, a) => {
                                                    window.clearTimeout(e.current),
                                                        (e.current = window.setTimeout(() => {
                                                            (e.current = 0), t();
                                                        }, a));
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
                                })(),
                                u = $s(),
                                l = (0, n.useMemo)(() => {
                                    const t = e[Symbol.iterator](),
                                        a = () => {
                                            const e = t.next();
                                            if (e.done) return (s.current = 'end'), void o.trigger('end');
                                            i.run(() => {
                                                if (r.current) {
                                                    if (
                                                        (r.current.classList.add(e.value.name),
                                                        o.trigger('change', e.value),
                                                        e.value.stopNextSteps)
                                                    )
                                                        return (s.current = 'paused'), void o.trigger('pause');
                                                    a();
                                                } else
                                                    console.error(
                                                        `${e.value.name} step don't know on what rootRef it should be set`,
                                                    );
                                            }, e.value.delay),
                                                (s.current = 'running');
                                        };
                                    return {
                                        rootRef: r,
                                        steps: e,
                                        delayUntilStep: (t) => {
                                            let a = 0;
                                            for (let n = 0; n < e.length; n++)
                                                if (((a += e[n].delay), e[n] === t)) return a;
                                            throw new Error(`delayUntilStep didn't find step: ${t.name}`);
                                        },
                                        events: { on: o.on, off: o.off },
                                        start: () => {
                                            a(), o.trigger('start');
                                        },
                                        resume: () => {
                                            'paused' === s.current
                                                ? (a(), o.trigger('resume'))
                                                : console.warn(
                                                      'api.resume() should be called only after paused animation, ignore resume() call',
                                                  );
                                        },
                                        skipAll: () => {
                                            i.clear(),
                                                u.run(() => {
                                                    e.forEach((e) => {
                                                        r.current
                                                            ? r.current.classList.add(e.name)
                                                            : console.error(
                                                                  `${e} tried to be set, but rootRef was not received in api`,
                                                              );
                                                    }),
                                                        (s.current = 'end'),
                                                        o.trigger('end');
                                                });
                                        },
                                    };
                                }, [i, o, u, e]);
                            return (
                                Os(() => {
                                    a && l.start();
                                }),
                                l
                            );
                        });
                var RE;
                const xE = ({ children: e }) => {
                    const t = NE();
                    return r().createElement(kE.Provider, { value: t }, e);
                };
                let IE, TE;
                !(function (e) {
                    (e.Guaranteed = 'guaranteed'),
                        (e.Possible = 'possible'),
                        (e.NotAvailable = 'notAvailable'),
                        (e.Claimed = 'claimed');
                })(IE || (IE = {})),
                    (function (e) {
                        (e.Achieved = 'achieved'), (e.Possible = 'possible'), (e.NotAchieved = 'notAchieved');
                    })(TE || (TE = {}));
                const LE = [
                        'customizations',
                        'modernized_devices_t1_gift',
                        'modernized_devices_t2_gift',
                        'modernized_devices_t3_gift',
                    ],
                    OE = ['vehicles', 'premiumTank'],
                    ME = ['styleProgressToken'],
                    $E = (e) => LE.includes(e.name),
                    WE = (e) => OE.includes(e.name),
                    HE = (e) => ME.includes(e.name),
                    UE = V()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    cards: e.array('cards'),
                                    ranks: e.array('ranks'),
                                    hoveredCardIndex: W.LO.box(-1),
                                },
                                a = (0, _e.Om)(
                                    (e) => {
                                        const a = he(t.cards.get(), e);
                                        if (!a) throw new Error(`card with index ${e} was not found`);
                                        return { rewardsState: a.rewardsState };
                                    },
                                    { equals: pt },
                                ),
                                n = (0, _e.Om)(
                                    (e) => {
                                        const a = he(t.cards.get(), e);
                                        if (!a) throw new Error(`rewards: card with index ${e} was not found`);
                                        return be(a.rewards, (e) => Object.assign({}, e));
                                    },
                                    { equals: $ },
                                ),
                                r = (0, _e.Om)(
                                    (e) => {
                                        const a = he(t.cards.get(), e);
                                        if (!a) throw new Error(`card with index ${e} was not found`);
                                        return be(a.seasonPoints, (e) => Object.assign({}, e));
                                    },
                                    { equals: $ },
                                ),
                                s = (0, _e.Om)(
                                    (e, t) => {
                                        const a = r(e);
                                        if (!a)
                                            throw new Error(`season points array with card index ${e} was not found`);
                                        const n = he(a, t);
                                        if (!n)
                                            throw new Error(
                                                `season point with index ${t} in card with index ${e} was not found`,
                                            );
                                        return n;
                                    },
                                    { equals: $ },
                                ),
                                o = (0, _e.Om)((e) =>
                                    [...Ae(t.cards.get(), 0, e)].reduce((e, t) => (e += t.seasonPoints.length), 0),
                                ),
                                i = (0, _e.Om)((e) =>
                                    Se(
                                        t.cards.get(),
                                        (t, a) =>
                                            t + ((e, t) => Ce(e, ({ season: e }) => e === t).length)(a.seasonPoints, e),
                                        0,
                                    ),
                                ),
                                u = (0, _e.Om)(
                                    () => {
                                        const e = t.cards.get();
                                        return {
                                            possible: we(e, (e) => e.rewardsState === IE.Possible),
                                            guaranteed: we(e, (e) => e.rewardsState === IE.Guaranteed),
                                        };
                                    },
                                    { equals: pt },
                                ),
                                l = (0, _e.Om)(
                                    () => {
                                        const e = ((e, t) => {
                                            for (let a = 0; a < e.length; a++) {
                                                const n = De(ve(e, a).rewards, t);
                                                if (n) return n;
                                            }
                                        })(t.cards.get(), WE);
                                        if (!e)
                                            throw new Error(
                                                'no one card consists vehicle, please change config with rewards',
                                            );
                                        return Object.assign({}, e);
                                    },
                                    { equals: $ },
                                ),
                                c = (0, _e.Om)(
                                    () => {
                                        const e = De(t.cards.get(), (e) => void 0 !== De(e.rewards, WE));
                                        if (!e)
                                            throw new Error(
                                                'no one card consists vehicle, please change config with rewards',
                                            );
                                        return Object.assign({}, e.vehicle);
                                    },
                                    { equals: $ },
                                ),
                                d = (0, _e.Om)(() => {
                                    const e = u(),
                                        a = e.possible,
                                        n = e.guaranteed;
                                    return (({ maxIndex: e, possible: t, guaranteed: a }) =>
                                        void 0 !== t ? Pt(0, e, t + 1) : void 0 !== a ? Pt(0, e, a + 1) : 0)({
                                        maxIndex: t.cards.get().length - 1,
                                        possible: a,
                                        guaranteed: n,
                                    });
                                }),
                                m = (0, _e.Om)((e) => De(n(e), $E), { equals: $ }),
                                _ = (0, _e.Om)((e) => {
                                    const a = he(t.ranks.get(), e);
                                    if (!a) throw new Error(`rank with index ${e} was not found`);
                                    return Object.assign({}, a);
                                }),
                                g = (0, _e.Om)((e) => ts(be(_(e).divisions, (e) => Object.assign({}, e))), {
                                    equals: $,
                                }),
                                E = (0, _e.Om)(
                                    (e) => {
                                        const t = n(e),
                                            a = Fe(t, $E);
                                        return void 0 === a ? t : Ce(t, (e, t) => t !== a);
                                    },
                                    { equals: $ },
                                ),
                                p = (0, _e.Om)(
                                    (e) => {
                                        const t = n(e),
                                            a = Fe(t, WE),
                                            r = Fe(t, HE);
                                        return {
                                            hasStyle3d: void 0 !== r,
                                            showPlus: void 0 !== a && void 0 !== r && r - a == 1 && a % 2 == 0,
                                            vehicleIndex: a,
                                            style3dIndex: r,
                                        };
                                    },
                                    { equals: pt },
                                ),
                                h = (0, _e.Om)(() => {
                                    const e = t.root.get().currentRank,
                                        a = Fe(t.ranks.get(), (t) => t.rank === e);
                                    if (void 0 === a)
                                        throw new Error(
                                            'currentRankIndex computed is not applicable, there is no currentRank among ranks array',
                                        );
                                    return a;
                                }),
                                v = (0, _e.Om)((e) => !t.root.get().isQualificationActive && e <= h());
                            return Object.assign({}, t, {
                                computes: {
                                    card: a,
                                    seasonPoint: s,
                                    mainReward: m,
                                    additionalRewards: E,
                                    bestRewardsCardIndex: u,
                                    additionalRewardsConfig: p,
                                    activeCardIndex: d,
                                    currentSeasonPointsCount: i,
                                    seasonPointsTotalByIndex: o,
                                    seasonPointsLength: (0, _e.Om)((e) => r(e).length),
                                    isActiveLegendItem: v,
                                    vehicleReward: l,
                                    vehicle: c,
                                    rankItem: _,
                                    divisions: g,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => ({
                            setHoveredCardIndex: (0, W.aD)((e) => t.hoveredCardIndex.set(e)),
                            goToStylePreview: e.createCallback((e) => ({ cardIndex: e }), 'onGoToStylePreview'),
                            goToVehiclePreview: e.createCallback(
                                (e, t) => ({ cd: e, cardIndex: t }),
                                'onGoToVehiclePreview',
                            ),
                            goToSelectionRewards: e.createCallbackNoArgs('onGoToRewardsSelection'),
                            setIntroViewed: e.createCallbackNoArgs('onIntroViewed'),
                        }),
                    ),
                    zE = UE[0],
                    VE = UE[1],
                    GE = {
                        '--pageContentWidth': '78vw',
                        base: 'Background_base_46',
                        inactiveBackground: 'Background_inactiveBackground_3e',
                        overlay: 'Background_overlay_62',
                        'base__hoveredCardIndex_-1': 'Background_base__hoveredCardIndex_-1_d5',
                        overlay__full: 'Background_overlay__full_66',
                        base__hoveredCardIndex_0: 'Background_base__hoveredCardIndex_0_75',
                        overlay__firstStage: 'Background_overlay__firstStage_80',
                        base__hoveredCardIndex_1: 'Background_base__hoveredCardIndex_1_53',
                        overlay__secondStage: 'Background_overlay__secondStage_03',
                        base__hoveredCardIndex_2: 'Background_base__hoveredCardIndex_2_b1',
                        overlay__thirdStage: 'Background_overlay__thirdStage_4b',
                        base__hoveredCardIndex_3: 'Background_base__hoveredCardIndex_3_da',
                        overlay__fourthStage: 'Background_overlay__fourthStage_a3',
                        base__hoveredCardIndex_4: 'Background_base__hoveredCardIndex_4_11',
                        overlay__fifthStage: 'Background_overlay__fifthStage_e8',
                        base__hoveredCardIndex_5: 'Background_base__hoveredCardIndex_5_b9',
                        overlay__sixthStage: 'Background_overlay__sixthStage_92',
                        base__withIntro: 'Background_base__withIntro_82',
                        fadeIn: 'Background_fadeIn_a7',
                        fadeInThreeQuarters: 'Background_fadeInThreeQuarters_b7',
                        fadeInHalf: 'Background_fadeInHalf_1f',
                        fadeOut: 'Background_fadeOut_ea',
                        fadeInWithScale: 'Background_fadeInWithScale_c0',
                        slideUp: 'Background_slideUp_65',
                        scale: 'Background_scale_82',
                        raysAppearance: 'Background_raysAppearance_43',
                        rotate: 'Background_rotate_7a',
                        'reverse-rotate': 'Background_reverse-rotate_b9',
                        glowAppearance: 'Background_glowAppearance_c7',
                        highlightAppearance: 'Background_highlightAppearance_4d',
                        blink: 'Background_blink_ee',
                        slideUpIn: 'Background_slideUpIn_e1',
                    },
                    qE = (0, ee.Pi)(({ className: e }) => {
                        const t = VE().model,
                            a = t.root.get().withIntro,
                            n = t.hoveredCardIndex.get(),
                            s = (0, xe.useSpring)(ct);
                        return r().createElement(
                            xe.animated.div,
                            {
                                className: b()(GE.base, a && GE.base__withIntro, GE[`base__hoveredCardIndex_${n}`], e),
                                style: s,
                            },
                            r().createElement(
                                'div',
                                { className: GE.inactiveBackground },
                                ca(t.cards.get().length, (e) =>
                                    r().createElement('div', {
                                        key: e,
                                        className: b()(GE.overlay, GE[`overlay__${yE[e]}`]),
                                    }),
                                ),
                                r().createElement('div', { className: b()(GE.overlay, GE.overlay__full) }),
                            ),
                        );
                    });
                function jE() {
                    const e = (0, n.useRef)(!0);
                    return (
                        Os(() => {
                            e.current = !1;
                        }),
                        e.current
                    );
                }
                const QE = ct.delay + ct.config.duration + 500,
                    YE = 'ActiveCardHighlight_base_21',
                    XE = 'ActiveCardHighlight_glow_c5',
                    KE = ({ isAnimated: e, visible: t, hasDelay: a, className: n }) => {
                        const s = (0, xe.useSpring)({
                            from: { opacity: 0 },
                            to: { opacity: t ? 1 : 0 },
                            delay: a ? QE : 0,
                            config: { duration: 300 },
                        });
                        return r().createElement(
                            xe.animated.div,
                            { className: b()(YE, n), style: s },
                            r().createElement(fo, { className: XE, animated: e }),
                        );
                    },
                    ZE = 'AdditionalRewards_reward_e8',
                    JE = 'AdditionalRewards_info_11',
                    ep = 'AdditionalRewards_rewardWithPlus_de',
                    tp = 'AdditionalRewards_rewardWithPlusImage_12',
                    ap = rl.Small,
                    np = { info: JE },
                    rp = { className: ep, classNames: Object.assign({}, np, { image: tp }) },
                    sp = (0, ee.Pi)(({ cardIndex: e, visibleRewardsCount: t, className: a, rewardItemClassMix: n }) => {
                        const s = VE().model,
                            o = s.computes.additionalRewards(e),
                            i = s.computes.additionalRewardsConfig(e),
                            u = be(o, (a, n) => {
                                const r = i.showPlus && n === i.vehicleIndex && t >= 3;
                                return Object.assign(
                                    {},
                                    Ol({ reward: a, size: ap, index: e }),
                                    { classNames: np },
                                    r && rp,
                                );
                            });
                        return r().createElement(yl, {
                            data: u,
                            size: ap,
                            count: $l(o.length, t),
                            rewardItemClassMix: b()(ZE, n),
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { fromIndex: t, index: e },
                            },
                            classMix: a,
                            boxRewardClassNames: np,
                        });
                    }),
                    op = {
                        base__x16: 'SeasonPoint_base__x16_06',
                        base__x24: 'SeasonPoint_base__x24_b6',
                        base__x32: 'SeasonPoint_base__x32_f0',
                        base__x48: 'SeasonPoint_base__x48_8a',
                        icon: 'SeasonPoint_icon_b6',
                    };
                let ip;
                !(function (e) {
                    (e.x16 = 'x16'), (e.x24 = 'x24'), (e.x32 = 'x32'), (e.x48 = 'x48');
                })(ip || (ip = {}));
                const up = R.images.gui.maps.icons.comp7.icons,
                    lp = ({ state: e, season: t, className: a, size: n = ip.x48 }) =>
                        r().createElement(
                            'div',
                            { className: b()(op.base, op[`base__${n}`], op[`base__${e}`], a) },
                            r().createElement('div', {
                                className: op.icon,
                                style: {
                                    backgroundImage:
                                        'notAchieved' === e
                                            ? `url(${up.$dyn(`season_point_notAchieved_${n}`)})`
                                            : `url(${up.$dyn(`season_point_${t}_${n}`)})`,
                                },
                            }),
                        );
                function cp() {
                    return (
                        (cp =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        cp.apply(this, arguments)
                    );
                }
                const dp = (0, ee.Pi)(({ cardIndex: e, pointIndex: t, size: a, className: n, classNames: s }) => {
                        const o = VE().model.computes.seasonPoint(e, t);
                        return r().createElement(
                            qe,
                            {
                                contentId: R.views.lobby.comp7.tooltips.SeasonPointTooltip('resId'),
                                args: { state: o.state },
                                ignoreShowDelay: !0,
                            },
                            r().createElement(
                                'div',
                                { className: n },
                                r().createElement(lp, cp({}, o, { className: null == s ? void 0 : s.point, size: a })),
                            ),
                        );
                    }),
                    mp = 'CardSeasonPoints_base_8c',
                    _p = (0, ee.Pi)(({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const s = VE().model;
                        return r().createElement(
                            'div',
                            { className: b()(mp, a) },
                            ca(s.computes.seasonPointsLength(e), (a) =>
                                r().createElement(dp, {
                                    cardIndex: e,
                                    pointIndex: a,
                                    size: t,
                                    className: null == n ? void 0 : n.pointWrapper,
                                    classNames: { point: null == n ? void 0 : n.point },
                                    key: a,
                                }),
                            ),
                        );
                    });
                let gp, Ep;
                !(function (e) {
                    (e.Achieved = 'achieved'), (e.Possible = 'possible'), (e.NotAchieved = 'notAchieved');
                })(gp || (gp = {})),
                    (function (e) {
                        (e.First = 'first'), (e.Second = 'second'), (e.Third = 'third');
                    })(Ep || (Ep = {}));
                const pp = [
                        [{ season: Ep.First }, { season: Ep.First }, { season: Ep.First }],
                        [{ season: Ep.First }, { season: Ep.First }, { season: Ep.First }],
                        [{ season: Ep.Second }, { season: Ep.Second }, { season: Ep.Second }],
                        [{ season: Ep.Second }, { season: Ep.Second }, { season: Ep.Second }],
                        [{ season: Ep.Third }, { season: Ep.Third }, { season: Ep.Third }],
                        [{ season: Ep.Third }, { season: Ep.Third }, { season: Ep.Third }],
                    ],
                    hp = {
                        '--pageContentWidth': '78vw',
                        base: 'FakeCardSeasonPoints_base_1f',
                        notAchievedSeasonPoints: 'FakeCardSeasonPoints_notAchievedSeasonPoints_a7',
                        achievedSeasonPoints: 'FakeCardSeasonPoints_achievedSeasonPoints_fb',
                        notAchievedPoint: 'FakeCardSeasonPoints_notAchievedPoint_3d',
                        achievedPoint: 'FakeCardSeasonPoints_achievedPoint_85',
                        notAchievedPoint__first: 'FakeCardSeasonPoints_notAchievedPoint__first_e3',
                        achievedPoint__first: 'FakeCardSeasonPoints_achievedPoint__first_be',
                        notAchievedPoint__second: 'FakeCardSeasonPoints_notAchievedPoint__second_84',
                        achievedPoint__second: 'FakeCardSeasonPoints_achievedPoint__second_5d',
                        notAchievedPoint__third: 'FakeCardSeasonPoints_notAchievedPoint__third_39',
                        achievedPoint__third: 'FakeCardSeasonPoints_achievedPoint__third_ac',
                        base__firstStage: 'FakeCardSeasonPoints_base__firstStage_77',
                        base__secondStage: 'FakeCardSeasonPoints_base__secondStage_91',
                        base__thirdStage: 'FakeCardSeasonPoints_base__thirdStage_6f',
                        base__fourthStage: 'FakeCardSeasonPoints_base__fourthStage_98',
                        base__fifthStage: 'FakeCardSeasonPoints_base__fifthStage_bb',
                        base__sixthStage: 'FakeCardSeasonPoints_base__sixthStage_c5',
                        fadeIn: 'FakeCardSeasonPoints_fadeIn_d0',
                        fadeInThreeQuarters: 'FakeCardSeasonPoints_fadeInThreeQuarters_d5',
                        fadeInHalf: 'FakeCardSeasonPoints_fadeInHalf_c8',
                        fadeOut: 'FakeCardSeasonPoints_fadeOut_9a',
                        fadeInWithScale: 'FakeCardSeasonPoints_fadeInWithScale_4d',
                        slideUp: 'FakeCardSeasonPoints_slideUp_74',
                        scale: 'FakeCardSeasonPoints_scale_ca',
                        raysAppearance: 'FakeCardSeasonPoints_raysAppearance_51',
                        rotate: 'FakeCardSeasonPoints_rotate_17',
                        'reverse-rotate': 'FakeCardSeasonPoints_reverse-rotate_2c',
                        glowAppearance: 'FakeCardSeasonPoints_glowAppearance_9b',
                        highlightAppearance: 'FakeCardSeasonPoints_highlightAppearance_df',
                        blink: 'FakeCardSeasonPoints_blink_cc',
                        slideUpIn: 'FakeCardSeasonPoints_slideUpIn_3f',
                    },
                    vp = ['first', 'second', 'third'],
                    fp = ({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const s = pp[e];
                        return r().createElement(
                            'div',
                            { className: b()(hp.base, hp[`base__${yE[e]}`], a) },
                            r().createElement(
                                'div',
                                { className: hp.notAchievedSeasonPoints },
                                s.map(({ season: e }, a) =>
                                    r().createElement(
                                        'div',
                                        { key: a, className: null == n ? void 0 : n.pointWrapper },
                                        r().createElement(lp, {
                                            state: TE.NotAchieved,
                                            season: e,
                                            size: t,
                                            className: b()(
                                                hp.notAchievedPoint,
                                                hp[`notAchievedPoint__${vp[a]}`],
                                                null == n ? void 0 : n.point,
                                            ),
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: hp.achievedSeasonPoints },
                                s.map(({ season: e }, a) =>
                                    r().createElement(
                                        'div',
                                        { key: a, className: null == n ? void 0 : n.pointWrapper },
                                        r().createElement(lp, {
                                            state: TE.Achieved,
                                            season: e,
                                            size: t,
                                            className: b()(
                                                hp.achievedPoint,
                                                hp[`achievedPoint__${vp[a]}`],
                                                null == n ? void 0 : n.point,
                                            ),
                                        }),
                                    ),
                                ),
                            ),
                        );
                    };
                function bp() {
                    return (
                        (bp =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        bp.apply(this, arguments)
                    );
                }
                const Cp = (0, ee.Pi)(({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const s = VE().model.computes.mainReward(e);
                        if (!s) throw new Error(`no mainReward in card with index ${e}`);
                        return r().createElement(
                            Al,
                            bp({}, Ol({ reward: s, size: t, index: e }), {
                                className: a,
                                classNames: {
                                    rewardIcon: null == n ? void 0 : n.icon,
                                    image: null == n ? void 0 : n.iconContainer,
                                },
                            }),
                        );
                    }),
                    Ap = {
                        '--pageContentWidth': '78vw',
                        base: 'RewardsStatus_base_49',
                        description: 'RewardsStatus_description_f6',
                        base__guaranteed: 'RewardsStatus_base__guaranteed_4f',
                        base__claimed: 'RewardsStatus_base__claimed_0f',
                        base__notAvailable: 'RewardsStatus_base__notAvailable_b1',
                        base__possible: 'RewardsStatus_base__possible_67',
                        shadow: 'RewardsStatus_shadow_f3',
                        statusIcon: 'RewardsStatus_statusIcon_72',
                    },
                    Dp = R.strings.comp7.yearlyRewards.rewardsState,
                    Fp = ({ seasonPointsCount: e, rewardsState: t, className: a }) =>
                        r().createElement(
                            'div',
                            { className: b()(Ap.base, Ap[`base__${t}`], a) },
                            r().createElement(
                                Xe,
                                { body: `${Dp.tooltip.$dyn(t)}`, isEnabled: t !== IE.Claimed },
                                r().createElement(
                                    'div',
                                    { className: Ap.description },
                                    t === IE.NotAvailable && r().createElement('div', { className: Ap.shadow }),
                                    r().createElement('div', { className: Ap.statusIcon }),
                                    pa(`${R.strings.comp7.yearlyRewards.rewardsState.$dyn(t)}`, { count: e }),
                                ),
                            ),
                        ),
                    wp = (0, ee.Pi)(({ index: e, className: t, classNames: a }) => {
                        const n = S().mediaSize,
                            s = VE(),
                            o = s.model,
                            i = s.controls,
                            u = o.root.get().style3dAvailable,
                            l = o.computes.mainReward(e),
                            c = o.computes.vehicle(),
                            d = n >= D.Large;
                        return l && 'customizations' === l.name
                            ? r().createElement(
                                  'div',
                                  { className: t },
                                  r().createElement(
                                      Zl,
                                      {
                                          type: 'preview',
                                          onClick: () => i.goToStylePreview(e),
                                          isVisibleLabel: d,
                                          className: null == a ? void 0 : a.preview,
                                      },
                                      d ? R.strings.comp7.yearlyRewards.preview.style2d() : '',
                                  ),
                              )
                            : u && o.computes.additionalRewardsConfig(e).hasStyle3d
                              ? r().createElement(
                                    'div',
                                    { className: t },
                                    r().createElement(
                                        Zl,
                                        {
                                            type: 'preview',
                                            onClick: () => i.goToVehiclePreview(c.vehicleCD, e),
                                            isVisibleLabel: d,
                                            className: null == a ? void 0 : a.preview,
                                        },
                                        d ? R.strings.comp7.yearlyRewards.preview.style3d() : '',
                                    ),
                                )
                              : null;
                    }),
                    Sp = {
                        '--pageContentWidth': '78vw',
                        base: 'Column_base_44',
                        mainRewardContainer: 'Column_mainRewardContainer_23',
                        mainRewardContainer__big: 'Column_mainRewardContainer__big_0e',
                        mainRewardContainer__s232x174: 'Column_mainRewardContainer__s232x174_f6',
                        mainRewardContainer__s296x222: 'Column_mainRewardContainer__s296x222_9c',
                        base__grayscale: 'Column_base__grayscale_2a',
                        mainReward: 'Column_mainReward_c4',
                        previewContainer: 'Column_previewContainer_81',
                        preview: 'Column_preview_c3',
                        fakeSeasonPointsContainer: 'Column_fakeSeasonPointsContainer_1d',
                        seasonPointsContainer: 'Column_seasonPointsContainer_d2',
                        base__withIntro: 'Column_base__withIntro_b9',
                        divider: 'Column_divider_52',
                        divider__highlighted: 'Column_divider__highlighted_8b',
                        seasonPointWrapper: 'Column_seasonPointWrapper_dd',
                        rewardsStatus: 'Column_rewardsStatus_80',
                        additionalRewards: 'Column_additionalRewards_29',
                        description: 'Column_description_f5',
                        description__visible: 'Column_description__visible_40',
                        glowContainer: 'Column_glowContainer_ab',
                        hoverArea: 'Column_hoverArea_02',
                        hoverArea__last: 'Column_hoverArea__last_37',
                    },
                    Bp = { preview: Sp.preview },
                    yp = { pointWrapper: Sp.seasonPointWrapper },
                    kp = (0, ee.Pi)(
                        ({
                            index: e,
                            mainRewardSize: t,
                            seasonPointSize: a,
                            visibleAdditionalRewardsCount: s,
                            hasHighlightDelay: i,
                            highlightVisible: u,
                            className: l,
                        }) => {
                            const c = VE(),
                                d = c.model,
                                m = c.controls,
                                _ = j().model,
                                g = d.root.get().withIntro,
                                E = d.computes.card(e).rewardsState,
                                p = d.computes.mainReward(e),
                                h = d.computes.seasonPointsTotalByIndex(e),
                                v = d.computes.activeCardIndex(),
                                f = d.hoveredCardIndex.get(),
                                C = e === d.cards.get().length - 1,
                                A = (g || -1 !== f) && e > f,
                                D = !g && _.year.state.get() !== Gl.Finished && e === v;
                            return (
                                (0, n.useEffect)(() => {
                                    e === f && o.O.sound.play.sound('comp_7_annual_reward_column');
                                }, [f, e]),
                                r().createElement(
                                    'div',
                                    {
                                        className: b()(Sp.base, A && Sp.base__grayscale, g && Sp.base__withIntro, l),
                                        onMouseEnter: () => m.setHoveredCardIndex(e),
                                        onMouseLeave: () => m.setHoveredCardIndex(-1),
                                    },
                                    r().createElement('div', { className: b()(Sp.hoverArea, C && Sp.hoverArea__last) }),
                                    r().createElement(
                                        'div',
                                        { className: Sp.fakeSeasonPointsContainer },
                                        r().createElement(fp, { cardIndex: e, size: a, classNames: yp }),
                                        !C &&
                                            r().createElement(bm, {
                                                className: b()(Sp.divider, e <= f && Sp.divider__highlighted),
                                            }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Sp.seasonPointsContainer },
                                        r().createElement(_p, { cardIndex: e, size: a, classNames: yp }),
                                        !C &&
                                            r().createElement(bm, {
                                                className: b()(Sp.divider, e < v && Sp.divider__highlighted),
                                            }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: b()(Sp.mainRewardContainer, Sp[`mainRewardContainer__${t}`]) },
                                        p && r().createElement(Cp, { cardIndex: e, size: t, className: Sp.mainReward }),
                                    ),
                                    r().createElement(wp, { index: e, className: Sp.previewContainer, classNames: Bp }),
                                    r().createElement(Fp, {
                                        seasonPointsCount: h,
                                        rewardsState: E,
                                        className: Sp.rewardsStatus,
                                    }),
                                    r().createElement(sp, {
                                        cardIndex: e,
                                        visibleRewardsCount: s,
                                        className: Sp.additionalRewards,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: b()(Sp.description, D && Sp.description__visible) },
                                        r().createElement(KE, {
                                            hasDelay: i,
                                            visible: u,
                                            isAnimated: D,
                                            className: Sp.glowContainer,
                                        }),
                                        R.strings.comp7.yearlyRewards.stageDescription.active(),
                                    ),
                                )
                            );
                        },
                    ),
                    Pp = 'Columns_base_25',
                    Np = (0, ee.Pi)(({ className: e }) => {
                        const t = S().mediaSize,
                            a = VE().model,
                            s = a.root.get().withIntro,
                            i = PE(),
                            u = ((e) => (e >= D.Large ? rl.S296x222 : e >= D.Small ? rl.S232x174 : rl.Big))(t),
                            l = ((e) => (e >= D.Medium ? 5 : 2))(t),
                            c = ((e) => (e >= D.ExtraLarge ? ip.x32 : ip.x24))(t),
                            d = (0, xe.useSpring)(ct),
                            m = (({ api: e, withIntro: t }) => {
                                const a = (0, n.useState)(!1),
                                    r = a[0],
                                    s = a[1],
                                    i = jE(),
                                    u = !t && i;
                                return (
                                    Os(() => {
                                        const t = () => {
                                            s(!0);
                                        };
                                        return (
                                            e.events.on('end', t),
                                            () => {
                                                e.events.off('end', t);
                                            }
                                        );
                                    }),
                                    Os(() => {
                                        if (u)
                                            return To(() => {
                                                s(!0);
                                            }, QE);
                                    }),
                                    (0, n.useEffect)(() => {
                                        r && o.O.sound.play.sound('comp_7_ranks_shine');
                                    }, [r]),
                                    [u, r]
                                );
                            })({ api: i, withIntro: s }),
                            _ = m[0],
                            g = m[1];
                        return r().createElement(
                            xe.animated.div,
                            { className: b()(Pp, e), style: d },
                            ca(a.cards.get().length, (e) =>
                                r().createElement(kp, {
                                    index: e,
                                    mainRewardSize: u,
                                    seasonPointSize: c,
                                    hasHighlightDelay: _,
                                    highlightVisible: g,
                                    visibleAdditionalRewardsCount: l,
                                    key: e,
                                }),
                            ),
                        );
                    }),
                    Rp = (e) => (e >= D.Large ? ip.x32 : ip.x24),
                    xp = R.strings.comp7.yearlyRewards,
                    Ip = {
                        '--pageContentWidth': '78vw',
                        base: 'Legend_base_af',
                        inner: 'Legend_inner_35',
                        item: 'Legend_item_27',
                        description: 'Legend_description_f0',
                        rankWrapper: 'Legend_rankWrapper_c3',
                        highlight: 'Legend_highlight_3d',
                        rankWrapper__withIntro: 'Legend_rankWrapper__withIntro_9c',
                        rankEmblem: 'Legend_rankEmblem_5d',
                        rankEmblem__active: 'Legend_rankEmblem__active_6d',
                        arrowContainer: 'Legend_arrowContainer_6f',
                        arrow: 'Legend_arrow_c0',
                        pointsCount: 'Legend_pointsCount_23',
                        countContainer: 'Legend_countContainer_e8',
                        fakeCount: 'Legend_fakeCount_4e',
                        count: 'Legend_count_e3',
                        base__withIntro: 'Legend_base__withIntro_43',
                        seasonPoint: 'Legend_seasonPoint_d8',
                        status: 'Legend_status_c7',
                        rank: 'Legend_rank_56',
                        verticalSeparator: 'Legend_verticalSeparator_d9',
                        seasonPointIcon: 'Legend_seasonPointIcon_be',
                        schedule: 'Legend_schedule_eb',
                        calendarIcon: 'Legend_calendarIcon_fa',
                        fadeIn: 'Legend_fadeIn_ae',
                        fadeInThreeQuarters: 'Legend_fadeInThreeQuarters_6e',
                        fadeInHalf: 'Legend_fadeInHalf_b2',
                        fadeOut: 'Legend_fadeOut_60',
                        fadeInWithScale: 'Legend_fadeInWithScale_a7',
                        slideUp: 'Legend_slideUp_57',
                        scale: 'Legend_scale_c6',
                        raysAppearance: 'Legend_raysAppearance_6d',
                        rotate: 'Legend_rotate_c5',
                        'reverse-rotate': 'Legend_reverse-rotate_75',
                        glowAppearance: 'Legend_glowAppearance_f6',
                        highlightAppearance: 'Legend_highlightAppearance_17',
                        blink: 'Legend_blink_fe',
                        slideUpIn: 'Legend_slideUpIn_f1',
                    },
                    Tp = (0, ee.Pi)(({ index: e, size: t, seasonName: a, className: n }) => {
                        const s = VE().model,
                            o = s.root.get(),
                            i = o.currentRank,
                            u = o.topPercentage,
                            l = o.withIntro,
                            c = s.computes.isActiveLegendItem(e),
                            d = s.computes.rankItem(e);
                        return r().createElement(
                            'div',
                            { className: n, key: e },
                            r().createElement(
                                'div',
                                { className: b()(Ip.rankWrapper, l && Ip.rankWrapper__withIntro) },
                                d.rank === i &&
                                    r().createElement(Eo, {
                                        className: Ip.highlight,
                                        src: String(R.videos.comp7.godRaysNew_130x130()),
                                        autoplay: !0,
                                        loop: !0,
                                    }),
                                r().createElement(
                                    Kn,
                                    {
                                        rank: d.rank,
                                        from: d.from,
                                        to: d.to,
                                        topPercentage: u,
                                        divisions: s.computes.divisions(e),
                                        className: Ip.tooltipArea,
                                        ignoreShowDelay: !0,
                                    },
                                    r().createElement(La, {
                                        seasonName: a,
                                        rank: d.rank,
                                        size: t,
                                        className: b()(Ip.rankEmblem, c && Ip.rankEmblem__active),
                                    }),
                                ),
                            ),
                        );
                    }),
                    Lp = 'possible',
                    Op = { state: Lp, ignoreState: !0 },
                    Mp = { scheduleClassNames: { calendarIcon: Ip.calendarIcon } },
                    $p = (0, ee.Pi)(({ className: e }) => {
                        const t = S().mediaSize,
                            a = VE().model,
                            n = j().model,
                            s = a.root.get(),
                            o = s.currentRank,
                            i = s.isQualificationActive,
                            u = s.withIntro,
                            l = n.season.name.get(),
                            c = n.year.state.get(),
                            d = a.computes.currentSeasonPointsCount(n.season.name.get()),
                            m = ((e) => {
                                switch (e) {
                                    case Gl.Active:
                                        return { rank: xp.rank.current(), description: xp.description.current() };
                                    case Gl.OffSeason:
                                    case Gl.Finished:
                                        return { rank: xp.rank.achieved(), description: xp.description.achieved() };
                                    default:
                                        return (
                                            console.error(
                                                `Provide text strings for current/achieved rank for YearState: ${e}`,
                                            ),
                                            { rank: '', description: '' }
                                        );
                                }
                            })(c),
                            _ = ((e) => (e >= D.Large ? Ia.x64 : Ia.x48))(t);
                        return r().createElement(
                            'div',
                            { className: b()(Ip.base, u && Ip.base__withIntro, e) },
                            r().createElement(
                                'div',
                                { className: Ip.status },
                                !i &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(ir, {
                                            text: m.rank,
                                            binding: {
                                                rank: r().createElement(
                                                    'div',
                                                    { className: Ip.rank },
                                                    pa(R.strings.comp7.quotesWrapper(), { name: $a(o) }),
                                                ),
                                            },
                                            classMix: Ip.secondaryText,
                                        }),
                                        r().createElement('div', { className: Ip.verticalSeparator }),
                                    ),
                                r().createElement(ir, {
                                    text: m.description,
                                    binding: {
                                        seasonPointIcon: r().createElement(
                                            qe,
                                            {
                                                contentId: R.views.lobby.comp7.tooltips.SeasonPointTooltip('resId'),
                                                args: Op,
                                                ignoreShowDelay: !0,
                                            },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(lp, {
                                                    state: Lp,
                                                    season: l,
                                                    size: ip.x16,
                                                    className: Ip.seasonPointIcon,
                                                }),
                                            ),
                                        ),
                                    },
                                }),
                                r().createElement('div', { className: Ip.verticalSeparator }),
                                r().createElement(jr, { hasSeasonName: !1, className: Ip.schedule, classNames: Mp }),
                            ),
                            r().createElement(
                                'div',
                                { className: Ip.inner },
                                ca(a.ranks.get().length, (e) =>
                                    r().createElement(Tp, {
                                        key: e,
                                        index: e,
                                        size: _,
                                        seasonName: l,
                                        className: Ip.item,
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Ip.arrowContainer },
                                    r().createElement('div', { className: Ip.arrow }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Ip.pointsCount },
                                    r().createElement(
                                        'div',
                                        { className: Ip.countContainer },
                                        r().createElement('div', { className: Ip.fakeCount }, '0'),
                                        r().createElement('div', { className: Ip.count }, d),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Ip.seasonPoint },
                                        r().createElement(
                                            qe,
                                            {
                                                contentId: R.views.lobby.comp7.tooltips.SeasonPointTooltip('resId'),
                                                args: Op,
                                                ignoreShowDelay: !0,
                                            },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(lp, { state: Lp, season: l, size: Rp(t) }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Wp = 'StatusBanner_base_af',
                    Hp = 'StatusBanner_description_46',
                    Up = 'StatusBanner_selectionContainer_88',
                    zp = 'StatusBanner_selectionButton_8d';
                let Vp, Gp;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(Vp || (Vp = {})),
                    (function (e) {
                        (e.Default = 'default'),
                            (e.NotAccruedRewards = 'notAccruedRewards'),
                            (e.RewardsSelectionAvailable = 'rewardsSelectionAvailable'),
                            (e.RewardsReceived = 'rewardsReceived');
                    })(Gp || (Gp = {}));
                const qp = R.strings.comp7.yearlyRewards.banner,
                    jp = (0, ee.Pi)(({ className: e }) => {
                        const t = VE(),
                            a = t.model,
                            n = t.controls,
                            s = S().mediaSize;
                        switch (a.root.get().bannerState) {
                            case Gp.NotAccruedRewards:
                                return r().createElement('div', { className: e }, qp.notAccruedRewards());
                            case Gp.RewardsSelectionAvailable:
                                return r().createElement(
                                    'div',
                                    { className: b()(e, Up) },
                                    r().createElement('div', null, qp.rewardsSelectionAvailable()),
                                    r().createElement(
                                        Et,
                                        {
                                            size: s >= D.Large ? 'small' : 'extraSmall',
                                            onClick: n.goToSelectionRewards,
                                            type: 'primary',
                                            mixClass: zp,
                                        },
                                        qp.selectButtonLabel(),
                                    ),
                                );
                            case Gp.RewardsReceived:
                                return r().createElement('div', { className: e }, qp.rewardsReceived());
                            default:
                                return r().createElement('div', { className: e }, qp.default());
                        }
                    }),
                    Qp = ({ className: e }) =>
                        r().createElement('div', { className: b()(Wp, e) }, r().createElement(jp, { className: Hp })),
                    Yp = {
                        '--pageContentWidth': '78vw',
                        base: 'Vehicle_base_52',
                        vehicleBg: 'Vehicle_vehicleBg_5d',
                        vehicleBg__inactive: 'Vehicle_vehicleBg__inactive_d3',
                        vehicleBg__2: 'Vehicle_vehicleBg__2_05',
                        base__selectedIndex_2: 'Vehicle_base__selectedIndex_2_20',
                        vehicleBg__3: 'Vehicle_vehicleBg__3_dc',
                        base__selectedIndex_3: 'Vehicle_base__selectedIndex_3_8b',
                        vehicleBg__4: 'Vehicle_vehicleBg__4_ba',
                        base__selectedIndex_4: 'Vehicle_base__selectedIndex_4_bf',
                        vehicleBg__5: 'Vehicle_vehicleBg__5_4a',
                        base__selectedIndex_5: 'Vehicle_base__selectedIndex_5_c6',
                        fadeIn: 'Vehicle_fadeIn_1e',
                        fadeInThreeQuarters: 'Vehicle_fadeInThreeQuarters_91',
                        fadeInHalf: 'Vehicle_fadeInHalf_68',
                        fadeOut: 'Vehicle_fadeOut_66',
                        fadeInWithScale: 'Vehicle_fadeInWithScale_a5',
                        slideUp: 'Vehicle_slideUp_e8',
                        scale: 'Vehicle_scale_00',
                        raysAppearance: 'Vehicle_raysAppearance_e3',
                        rotate: 'Vehicle_rotate_95',
                        'reverse-rotate': 'Vehicle_reverse-rotate_de',
                        glowAppearance: 'Vehicle_glowAppearance_86',
                        highlightAppearance: 'Vehicle_highlightAppearance_97',
                        blink: 'Vehicle_blink_29',
                        slideUpIn: 'Vehicle_slideUpIn_dd',
                    },
                    Xp = [2, 3, 4, 5],
                    Kp = (0, ee.Pi)(({ className: e }) => {
                        const t = VE().model,
                            a = t.root.get().withIntro,
                            s = t.hoveredCardIndex.get(),
                            i = t.computes.activeCardIndex(),
                            u = jE(),
                            l = !a && Xp.includes(i) && -1 === s ? i : s,
                            c = (0, xe.useSpring)(ct);
                        return (
                            (0, n.useEffect)(() => {
                                !u &&
                                    Xp.includes(l) &&
                                    o.O.sound.play.sound('comp_7_annual_reward_tank_emergence_style');
                            }, [u, l, a]),
                            r().createElement(
                                xe.animated.div,
                                { className: b()(Yp.base, Yp[`base__selectedIndex_${l}`], e), style: c },
                                r().createElement('div', { className: b()(Yp.vehicleBg, Yp.vehicleBg__inactive) }),
                                Xp.map((e) =>
                                    r().createElement('div', {
                                        className: b()(Yp.vehicleBg, Yp[`vehicleBg__${e}`]),
                                        key: e,
                                    }),
                                ),
                            )
                        );
                    }),
                    Zp = 'VehicleInfo_base_b0',
                    Jp = 'VehicleInfo_background_7e',
                    eh = 'VehicleInfo_content_f2',
                    th = 'VehicleInfo_title_0c',
                    ah = 'VehicleInfo_vehicleName_59';
                function nh() {
                    return (
                        (nh =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        nh.apply(this, arguments)
                    );
                }
                const rh = (e) => (e >= D.Medium ? gd.x48 : gd.x24Metal),
                    sh = { vehicleTypeContainer: 'VehicleInfo_vehicleTypeContainer_17', type: 'VehicleInfo_type_5e' },
                    oh = (0, ee.Pi)(({ className: e, classNames: t }) => {
                        const a = S().mediaSize,
                            n = VE().model,
                            s = n.computes.vehicleReward(),
                            o = n.computes.vehicle();
                        return r().createElement(
                            'div',
                            { className: b()(Zp, e) },
                            r().createElement('div', { className: Jp }),
                            r().createElement(
                                'div',
                                { className: eh },
                                r().createElement(ir, {
                                    text: R.strings.comp7.yearlyRewards.mainYearlyRewardTitle(),
                                    binding: {
                                        vehicle: r().createElement(
                                            Or,
                                            { args: { tooltipId: s.tooltipId }, ignoreShowDelay: !0 },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(
                                                    hd,
                                                    nh({}, o, { size: rh(a), className: ah, classNames: sh }),
                                                ),
                                            ),
                                        ),
                                    },
                                    classMix: b()(th, null == t ? void 0 : t.title),
                                }),
                            ),
                        );
                    }),
                    ih = 'YearlyRewardsPage_base_39',
                    uh = 'YearlyRewardsPage_contentWrapper_73',
                    lh = 'YearlyRewardsPage_vehicle_33',
                    ch = 'YearlyRewardsPage_columns_0a',
                    dh = 'YearlyRewardsPage_heading_9b',
                    mh = 'YearlyRewardsPage_legend_2b',
                    _h = 'YearlyRewardsPage_status_27',
                    gh = 'YearlyRewardsPage_contentWrapper__withIntro_e5',
                    Eh = 'YearlyRewardsPage_vehicleInfoContainer_2b',
                    ph = 'YearlyRewardsPage_vehicleInfo_f4',
                    hh = R.strings.comp7.page.heading,
                    vh = (e) => window.setTimeout(() => o.O.sound.play.sound('comp_7_annual_reward_rank_points'), e),
                    fh = (0, ee.Pi)(() => {
                        const e = VE(),
                            t = e.model,
                            a = e.controls,
                            s = t.root.get(),
                            i = s.hasDataError,
                            u = s.withIntro,
                            l = (0, xe.useSpring)(ct),
                            c = PE();
                        return (
                            re(te.n.ESCAPE, () => c.skipAll(), u),
                            Os(() =>
                                o.O.client.events.mouse.move(([, e]) => {
                                    'outside' !== e || u || a.setHoveredCardIndex(-1);
                                }),
                            ),
                            (0, n.useEffect)(() => {
                                c.rootRef.current && (c.rootRef.current.style.pointerEvents = u ? 'none' : 'auto');
                            }, [c.rootRef, u]),
                            (0, n.useEffect)(() => {
                                if (!u) return;
                                const e = [],
                                    t = (t) => {
                                        switch (
                                            (BE.includes(t) && a.setHoveredCardIndex(BE.findIndex((e) => e === t)), t)
                                        ) {
                                            case SE.firstStageSeasonPoints:
                                            case SE.secondStageSeasonPoints:
                                            case SE.thirdStageSeasonPoints:
                                            case SE.fourthStageSeasonPoints:
                                            case SE.fifthStageSeasonPoints:
                                            case SE.sixthStageSeasonPoints:
                                                e.push(vh(0), vh(200), vh(400));
                                        }
                                    };
                                return (
                                    c.events.on('change', t),
                                    () => {
                                        c.events.off('change', t), e.forEach((e) => clearTimeout(e));
                                    }
                                );
                            }, [c.events, a, u]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    u && (a.setHoveredCardIndex(-1), a.setIntroViewed());
                                };
                                return (
                                    c.events.on('end', e),
                                    () => {
                                        c.events.off('end', e);
                                    }
                                );
                            }, [c.events, c.rootRef, a, u]),
                            r().createElement(
                                'div',
                                { className: ih, ref: c.rootRef },
                                r().createElement(qE, null),
                                r().createElement(lt, { className: b()(se, dh) }, hh.yearlyRewards()),
                                !i &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(Kp, { className: lh }),
                                        r().createElement(Np, { className: ch }),
                                    ),
                                r().createElement(
                                    xe.animated.div,
                                    { style: l, className: b()(uh, u && gh) },
                                    i
                                        ? r().createElement(jc, null)
                                        : r().createElement(
                                              r().Fragment,
                                              null,
                                              r().createElement('div', { className: mh }, r().createElement($p, null)),
                                              r().createElement(
                                                  'div',
                                                  { className: Eh },
                                                  r().createElement(oh, { className: ph }),
                                              ),
                                              r().createElement('div', { className: _h }, r().createElement(Qp, null)),
                                          ),
                                ),
                            )
                        );
                    });
                let bh, Ch;
                !(function (e) {
                    (e[(e.NotStarted = 0)] = 'NotStarted'),
                        (e[(e.JustStarted = 1)] = 'JustStarted'),
                        (e[(e.Active = 2)] = 'Active'),
                        (e[(e.EndSoon = 3)] = 'EndSoon'),
                        (e[(e.End = 4)] = 'End'),
                        (e[(e.Disabled = 5)] = 'Disabled');
                })(bh || (bh = {})),
                    (function (e) {
                        (e.First = 'first'), (e.Second = 'second'), (e.Third = 'third');
                    })(Ch || (Ch = {}));
                const Ah = V()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), seasonCards: e.array('seasonCards') },
                                a = (0, _e.Om)(
                                    (e) => {
                                        const a = he(t.seasonCards.get(), e);
                                        if (!a) throw new Error(`Unexpected card index: ${e}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: $ },
                                ),
                                n = (0, _e.Om)((e) => a(e).season, { equals: $ }),
                                r = (0, _e.Om)((e) => n(e).state),
                                s = (0, _e.Om)((e) => r(e) === bh.NotStarted),
                                o = (0, _e.Om)((e) => a(e).rank),
                                i = (0, _e.Om)((e) => a(e).hasRankReceived);
                            return Object.assign({}, t, {
                                computes: {
                                    seasonCardsLength: (0, _e.Om)(() => t.seasonCards.get().length),
                                    seasonCard: a,
                                    seasonState: r,
                                    seasonScheduleInfo: n,
                                    isSeasonNotStarted: s,
                                    rank: o,
                                    hasRankReceived: i,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            goToSeasonStatistics: e.createCallback(
                                (e) => ({ seasonName: e }),
                                'onGoToSeasonStatistics',
                            ),
                        }),
                    ),
                    Dh = Ah[0],
                    Fh = Ah[1],
                    wh = 'Background_base_8d',
                    Sh = R.images.gui.maps.icons.comp7.backgrounds,
                    Bh = (0, ee.Pi)(({ index: e, className: t }) => {
                        const a = Fh().model,
                            n = a.computes.seasonScheduleInfo(e).name,
                            s = a.computes.hasRankReceived(e),
                            o = Sh.$dyn(n),
                            i = s ? Oa[a.computes.rank(e)] : 'qualification';
                        return r().createElement('div', {
                            className: b()(wh, t),
                            style: { backgroundImage: `url(${o.$dyn(i)})` },
                        });
                    }),
                    yh = {
                        base: 'LaceDivider_base_1a',
                        lace: 'LaceDivider_lace_7f',
                        peak: 'LaceDivider_peak_f2',
                        peak__right: 'LaceDivider_peak__right_43',
                        line: 'LaceDivider_line_0d',
                    },
                    kh = ({ children: e, className: t, classNames: a }) =>
                        r().createElement(
                            'div',
                            { className: b()(yh.base, t) },
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        yh.lace,
                                        yh.lace__left,
                                        null == a ? void 0 : a.lace,
                                        null == a ? void 0 : a.leftLace,
                                    ),
                                },
                                r().createElement('div', {
                                    className: b()(
                                        yh.peak,
                                        yh.peak__left,
                                        null == a ? void 0 : a.peak,
                                        null == a ? void 0 : a.leftPeak,
                                    ),
                                }),
                                r().createElement('div', {
                                    className: b()(
                                        yh.line,
                                        yh.line__left,
                                        null == a ? void 0 : a.line,
                                        null == a ? void 0 : a.leftLine,
                                    ),
                                }),
                            ),
                            e,
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        yh.lace,
                                        yh.lace__right,
                                        null == a ? void 0 : a.lace,
                                        null == a ? void 0 : a.rightLace,
                                    ),
                                },
                                r().createElement('div', {
                                    className: b()(
                                        yh.line,
                                        yh.line__right,
                                        null == a ? void 0 : a.line,
                                        null == a ? void 0 : a.rightLine,
                                    ),
                                }),
                                r().createElement('div', {
                                    className: b()(
                                        yh.peak,
                                        yh.peak__right,
                                        null == a ? void 0 : a.peak,
                                        null == a ? void 0 : a.rightPeak,
                                    ),
                                }),
                            ),
                        ),
                    Ph = 'CardFooter_base_5d',
                    Nh = 'CardFooter_statisticsAvailability_0b',
                    Rh = 'CardFooter_generationOfStatistics_c0',
                    xh = 'CardFooter_icon_94',
                    Ih = R.strings.comp7.yearlyStatistics,
                    Th = (0, ee.Pi)(({ index: e, className: t }) => {
                        const a = Fh(),
                            n = a.model,
                            s = a.controls,
                            o = n.computes.seasonCard(e).hasStatisticsCalculated,
                            i = n.computes.seasonScheduleInfo(e).name;
                        return r().createElement(
                            'div',
                            { className: b()(Ph, t) },
                            o
                                ? r().createElement(
                                      'div',
                                      { onClick: () => s.goToSeasonStatistics(i) },
                                      r().createElement(ir, {
                                          text: Ih.goToSeasonStatistics(),
                                          classMix: Nh,
                                          binding: { icon: r().createElement('div', { className: xh }) },
                                      }),
                                  )
                                : r().createElement(ir, { text: Ih.generationOfStatistics(), classMix: Rh }),
                        );
                    }),
                    Lh = 'RankStatus_base_2c',
                    Oh = 'RankStatus_rank_d5',
                    Mh = 'RankStatus_division_94',
                    $h = R.strings.comp7.yearlyStatistics.rankStatus,
                    Wh = (0, ee.Pi)(({ index: e }) => {
                        const t = Fh().model.computes.seasonCard(e),
                            a = t.hasRankReceived,
                            n = t.rank,
                            s = t.division;
                        return r().createElement(
                            'div',
                            { className: Lh },
                            a
                                ? r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement(ir, {
                                          classMix: Oh,
                                          text: $h.received(),
                                          binding: { rank: $a(n) },
                                      }),
                                      xa(n) && r().createElement(ir, { classMix: Mh, text: ya(s) }),
                                  )
                                : r().createElement('div', { className: Oh }, $h.notReceived()),
                        );
                    }),
                    Hh = 'SeasonStatus_base_75',
                    Uh = R.strings.comp7.yearlyStatistics,
                    zh = (0, ee.Pi)(({ index: e }) => {
                        const t = Fh().model.computes.seasonScheduleInfo(e),
                            a = t.endTimestamp,
                            n = t.startTimestamp,
                            s = t.state,
                            o = t.hasTentativeDates;
                        return r().createElement(
                            'div',
                            { className: b()(Hh) },
                            (() => {
                                switch (s) {
                                    case bh.NotStarted:
                                        return r().createElement(
                                            'div',
                                            null,
                                            o
                                                ? Uh.seasonDate.$num(e)
                                                : r().createElement(ir, {
                                                      text: R.strings.comp7.season.range(),
                                                      binding: Wr(n, a),
                                                  }),
                                        );
                                    case bh.JustStarted:
                                    case bh.EndSoon:
                                    case bh.Active:
                                        return r().createElement('div', null, Uh.seasonStatus.active());
                                    case bh.End:
                                        return r().createElement('div', null, Uh.seasonStatus.end());
                                    default:
                                        return console.error(`Unreachable season state ${s}`), null;
                                }
                            })(),
                        );
                    }),
                    Vh = R.strings.comp7,
                    Gh = ({ value: e, isPercentage: t = !1, fractionDigits: a = 2 }) =>
                        -1 === e
                            ? Vh.dash()
                            : ((e, t, a) => {
                                  const n =
                                      Number.isInteger(e) || Number.isInteger(10 * e)
                                          ? ae.Z5.getRealFormat(e, ae.Gr.WO_ZERO_DIGITS)
                                          : ae.Z5.getRealFormat(parseFloat(e.toFixed(a)), ae.Gr.FRACTIONAL);
                                  return t ? pa(Vh.percentage(), { percentageValue: n }) : n;
                              })(e, t, a),
                    qh = 'Row_base_de',
                    jh = 'Row_base__percentage_a0',
                    Qh = 'Row_dashes_87',
                    Yh = 'Row_value_97',
                    Xh = ({ text: e, value: t, isPercentage: a = !1 }) =>
                        r().createElement(
                            'div',
                            { className: b()(qh, a && jh) },
                            e,
                            r().createElement('div', { className: Qh }),
                            r().createElement('div', { className: Yh }, Gh({ value: t, isPercentage: a })),
                        ),
                    Kh = 'Table_base_e1',
                    Zh = 'Table_container_51',
                    Jh = R.strings.comp7.yearlyStatistics,
                    ev = (0, ee.Pi)(({ index: e }) => {
                        const t = Fh().model.computes.seasonCard(e),
                            a = t.rating,
                            n = t.singleBattlesCount,
                            s = t.singleBattlesWinRate,
                            o = t.superPlatoonBattlesCount,
                            i = t.superPlatoonBattlesWinRate;
                        return r().createElement(
                            'div',
                            { className: b()(Kh) },
                            r().createElement(
                                'div',
                                { className: Zh },
                                r().createElement(Xh, { text: Jh.rating(), value: a }),
                            ),
                            r().createElement(
                                'div',
                                { className: Zh },
                                r().createElement(Xh, { text: Jh.battles(), value: n }),
                                r().createElement(Xh, { text: Jh.wins(), value: s, isPercentage: !0 }),
                            ),
                            r().createElement(
                                'div',
                                { className: Zh },
                                r().createElement(Xh, { text: Jh.superPlatoonBattles(), value: o }),
                                r().createElement(Xh, { text: Jh.wins(), value: i, isPercentage: !0 }),
                            ),
                        );
                    }),
                    tv = (e) => {
                        switch (!0) {
                            case e >= D.ExtraLarge:
                                return Ia.x420;
                            case e >= D.Large:
                                return Ia.x260;
                            case e >= D.Medium:
                                return Ia.x200;
                            default:
                                return Ia.x150;
                        }
                    },
                    av = 'SeasonCard_base_ad',
                    nv = 'SeasonCard_name_8e',
                    rv = 'SeasonCard_rankImage_26',
                    sv = 'SeasonCard_cardFooter_e4',
                    ov = 'SeasonCard_glow_54',
                    iv = 'SeasonCard_divider_12',
                    uv = 'SeasonCard_divider__left_33',
                    lv = 'SeasonCard_divider__right_46',
                    cv = 'SeasonCard_laceBase_19',
                    dv = 'SeasonCard_laceContainer_48',
                    mv = 'SeasonCard_laceContainer__active_6d',
                    _v = R.strings.comp7.yearlyStatistics,
                    gv = [bh.JustStarted, bh.Active, bh.EndSoon],
                    Ev = (0, ee.Pi)(({ index: e, className: t }) => {
                        const a = Fh().model,
                            n = a.computes.seasonCard(e),
                            s = n.rank,
                            o = n.division,
                            i = n.hasRankReceived,
                            u = a.computes.seasonScheduleInfo(e),
                            l = u.state,
                            c = u.name,
                            d = S().mediaSize,
                            m = gv.includes(l);
                        return r().createElement(
                            'div',
                            { className: b()(av, t) },
                            0 === e && r().createElement('div', { className: b()(iv, uv) }),
                            r().createElement('div', { className: nv }, _v.seasonName.$num(e)),
                            r().createElement(zh, { index: e }),
                            i
                                ? r().createElement(La, {
                                      rank: s,
                                      size: tv(d),
                                      seasonName: c,
                                      division: o,
                                      className: rv,
                                  })
                                : r().createElement(lu, { size: tv(d), seasonName: c, className: rv }),
                            r().createElement(Wh, { index: e }),
                            r().createElement(ev, { index: e }),
                            r().createElement(kh, { className: cv, classNames: { lace: b()(dv, m && mv) } }),
                            m && r().createElement('div', { className: ov }),
                            l === bh.End && i && r().createElement(Th, { index: e, className: sv }),
                            r().createElement('div', { className: b()(iv, lv) }),
                        );
                    }),
                    pv = {
                        base: 'YearlyStatisticsPage_base_87',
                        heading: 'YearlyStatisticsPage_heading_4b',
                        contentWrapper: 'YearlyStatisticsPage_contentWrapper_24',
                        cardWrapper: 'YearlyStatisticsPage_cardWrapper_dd',
                        cardWrapper__left: 'YearlyStatisticsPage_cardWrapper__left_43',
                        cardWrapper__right: 'YearlyStatisticsPage_cardWrapper__right_8c',
                        bg__disabled: 'YearlyStatisticsPage_bg__disabled_9a',
                        seasonCard__disabled: 'YearlyStatisticsPage_seasonCard__disabled_d7',
                        seasonCard: 'YearlyStatisticsPage_seasonCard_b6',
                    },
                    hv = (0, ee.Pi)(() => {
                        const e = Fh().model.computes,
                            t = (0, xe.useSpring)(ct);
                        return r().createElement(
                            'div',
                            { className: pv.base },
                            r().createElement(
                                'div',
                                { className: pv.heading },
                                r().createElement(
                                    lt,
                                    { className: se },
                                    R.strings.comp7.page.heading.yearlyStatistics(),
                                ),
                                r().createElement(jr, null),
                            ),
                            r().createElement(
                                xe.animated.div,
                                { style: t, className: pv.contentWrapper },
                                ca(e.seasonCardsLength(), (t) => {
                                    const a = e.isSeasonNotStarted(t);
                                    return r().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: b()(
                                                pv.cardWrapper,
                                                0 === t && pv.cardWrapper__left,
                                                t === e.seasonCardsLength() - 1 && pv.cardWrapper__right,
                                            ),
                                        },
                                        r().createElement(Bh, {
                                            index: t,
                                            className: b()(pv.bg, a && pv.bg__disabled),
                                        }),
                                        r().createElement(Ev, {
                                            index: t,
                                            className: b()(pv.seasonCard, a && pv.seasonCard__disabled),
                                        }),
                                    );
                                }),
                            ),
                        );
                    }),
                    vv = {
                        [ce.Progression]: () =>
                            r().createElement(us, { options: me.PROGRESSION_PAGE }, r().createElement(Zu, null)),
                        [ce.RankRewards]: () =>
                            r().createElement(el, { options: me.RANK_REWARDS_PAGE }, r().createElement(kc, null)),
                        [ce.WeeklyQuests]: () =>
                            r().createElement(ng, { options: me.WEEKLY_QUESTS_PAGE }, r().createElement(wE, null)),
                        [ce.Leaderboard]: () =>
                            r().createElement(vt, { options: me.LEADERBOARD_PAGE }, r().createElement(es, null)),
                        [ce.YearlyRewards]: () =>
                            r().createElement(
                                zE,
                                { options: me.YEARLY_REWARDS_PAGE },
                                r().createElement(xE, null, r().createElement(fh, null)),
                            ),
                        [ce.Shop]: () => r().createElement(Tc, { options: me.SHOP_PAGE }, r().createElement(Z_, null)),
                        [ce.YearlyStatistics]: () =>
                            r().createElement(Dh, { options: me.YEARLY_STATISTICS_PAGE }, r().createElement(hv, null)),
                    },
                    fv = ({ pageView: e }) => {
                        const t = vv[e];
                        return t ? r().createElement(t, null) : (console.error('Unreachable code: ViewResolver'), null);
                    },
                    bv = {
                        '--pageContentWidth': '78vw',
                        base: 'App_base_ef',
                        base__qualification: 'App_base__qualification_73',
                        base__progression: 'App_base__progression_3b',
                        base__leaderboard: 'App_base__leaderboard_da',
                        season__first: 'App_season__first_da',
                        season__second: 'App_season__second_0f',
                        season__third: 'App_season__third_86',
                        base__rankRewards: 'App_base__rankRewards_55',
                        base__weeklyQuests: 'App_base__weeklyQuests_58',
                        base__shop: 'App_base__shop_ab',
                        viewContainer: 'App_viewContainer_81',
                        sidebar: 'App_sidebar_95',
                        sidebar__medium: 'App_sidebar__medium_20',
                        info: 'App_info_e9',
                        whatsNewButton: 'App_whatsNewButton_cb',
                        whatsNewIcon: 'App_whatsNewIcon_7b',
                        whatsNewGlow: 'App_whatsNewGlow_0b',
                    },
                    Cv = { base: bv.whatsNewButton, icon: bv.whatsNewIcon, glow: bv.whatsNewGlow },
                    Av = (0, ee.Pi)(() => {
                        const e = pe(),
                            t = e.model,
                            a = e.controls,
                            n = j().model,
                            s = le(),
                            o = t.root.get().pageViewId,
                            i = t.computes.isProgressionInQualification();
                        return r().createElement(
                            'div',
                            {
                                className: b()(
                                    bv.base,
                                    i && !ue() && bv.base__qualification,
                                    !i && bv[`base__${de[o]}`],
                                    bv[`season__${n.season.name.get()}`],
                                ),
                            },
                            r().createElement(
                                'div',
                                { className: bv.viewContainer },
                                r().createElement(fv, { pageView: o }),
                            ),
                            r().createElement(
                                Pe,
                                { options: me.TABS },
                                r().createElement(Je, {
                                    pageView: o,
                                    className: b()(bv.sidebar, s.isMedium && bv.sidebar__medium),
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: bv.info },
                                r().createElement(J, {
                                    caption: R.strings.comp7.infoPageButtonLabel(),
                                    type: 'info',
                                    side: 'left',
                                    onClick: a.openInfoPage,
                                }),
                                r().createElement(J, {
                                    caption: R.strings.comp7.whatsNewButtonLabel(),
                                    type: 'info',
                                    side: 'left',
                                    onClick: a.openWhatsNewScreen,
                                    classNames: Cv,
                                }),
                            ),
                            r().createElement(ie, { onClose: a.close }),
                        );
                    });
                engine.whenReady.then(() => {
                    O().render(
                        r().createElement(
                            T,
                            null,
                            r().createElement(
                                Ee,
                                null,
                                r().createElement(q, { options: me.SCHEDULE }, r().createElement(Av, null)),
                            ),
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
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, n) => {
            if (!t) {
                var r = 1 / 0;
                for (u = 0; u < deferred.length; u++) {
                    for (var [t, a, n] = deferred[u], s = !0, o = 0; o < t.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((s = !1), n < r && (r = n));
                    if (s) {
                        deferred.splice(u--, 1);
                        var i = a();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var u = deferred.length; u > 0 && deferred[u - 1][2] > n; u--) deferred[u] = deferred[u - 1];
            deferred[u] = [t, a, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (__webpack_require__.j = 992),
        (() => {
            var e = { 992: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var n,
                        r,
                        [s, o, i] = a,
                        u = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(a); u < s.length; u++)
                        (r = s[u]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [926], () => __webpack_require__(241));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
